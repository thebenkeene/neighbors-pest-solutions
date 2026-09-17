import type {
  AttributionChannel,
  AttributionFilters,
  AttributionGroup,
  AttributionRecord,
  AttributionServiceRecord,
  AttributionStats,
  OnlineSourceGroup,
  ServiceGroup,
  ServiceStats,
} from "./types";

const REFERRAL_LABELS = new Set([
  "referral",
  "customer referral",
  "truck sighting",
  "truck siting",
  "truck sighting flyer",
  "truck siting flyer",
  "flyer",
]);

function clean(value: string | null | undefined): string {
  return (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function monthOf(value: string): string {
  return value.slice(0, 7);
}

function inMonthRange(value: string, startMonth: string, endMonth: string): boolean {
  const month = monthOf(value);
  if (startMonth && month < startMonth) return false;
  if (endMonth && month > endMonth) return false;
  return true;
}

export function resolveReportingRange(
  months: string[],
  startMonth: string,
  endMonth: string,
  allTimeSelected: boolean,
): { startMonth: string; endMonth: string } {
  if (!allTimeSelected) return { startMonth, endMonth };
  const availableMonths = [...new Set(months.filter(Boolean))].sort();
  return {
    startMonth: availableMonths[0] ?? "",
    endMonth: availableMonths.at(-1) ?? "",
  };
}

function isReferral(record: AttributionRecord): boolean {
  const labels = [
    record.customerSource,
    record.customerSubSource,
    record.subscriptionSource,
    record.subscriptionSubSource,
  ].map(clean);
  return labels.some((label) => REFERRAL_LABELS.has(label));
}

export function getAttributionChannel(
  record: AttributionRecord,
): AttributionChannel {
  if (!record.nonSalesRep) return "sales-team";
  if (isReferral(record)) return "referral";
  // Online intentionally includes every remaining non-sales record, including
  // blank, Conditions, and other not-yet-mapped acquisition labels.
  return "online";
}

export function filterRecords(
  records: AttributionRecord[],
  filters: AttributionFilters,
): AttributionRecord[] {
  return records.filter((record) => {
    if (!inMonthRange(record.soldDate, filters.startMonth, filters.endMonth)) {
      return false;
    }
    // This is the stable Customer Report-equivalent view. The technical status
    // choice is deliberately hidden from dashboard users.
    if (!record.subscriptionActive || !record.customerActive) return false;
    if (
      filters.channel !== "all" &&
      getAttributionChannel(record) !== filters.channel
    ) {
      return false;
    }
    return true;
  });
}

export function summarize(records: AttributionRecord[]): AttributionStats {
  return {
    customers: new Set(records.map((record) => record.customerID)).size,
    subscriptions: new Set(records.map((record) => record.subscriptionID)).size,
    arr: records.reduce(
      (total, record) => total + Number(record.annualRecurringValue || 0),
      0,
    ),
  };
}

function groupBy(
  records: AttributionRecord[],
  labelFor: (record: AttributionRecord) => string,
): AttributionGroup[] {
  const groups = new Map<string, AttributionRecord[]>();
  for (const record of records) {
    const label = labelFor(record);
    groups.set(label, [...(groups.get(label) ?? []), record]);
  }
  return [...groups.entries()]
    .map(([label, rows]) => ({ label, ...summarize(rows) }))
    .sort((a, b) => b.arr - a.arr || a.label.localeCompare(b.label));
}

export function groupByMonth(records: AttributionRecord[]): AttributionGroup[] {
  return groupBy(records, (record) => monthOf(record.soldDate)).sort((left, right) =>
    left.label.localeCompare(right.label),
  );
}

export function groupByChannel(records: AttributionRecord[]): AttributionGroup[] {
  return groupBy(records, getAttributionChannel);
}

function sourceLabel(value: string | null | undefined, fallback: string): string {
  const label = (value ?? "").trim();
  return label && clean(label) !== "n a" ? label : fallback;
}

export function groupByOnlineSources(
  records: AttributionRecord[],
): OnlineSourceGroup[] {
  const groups = new Map<string, {
    customerSource: string;
    customerSubSource: string;
    records: AttributionRecord[];
  }>();
  for (const record of records) {
    if (getAttributionChannel(record) !== "online") continue;
    const customerSource = sourceLabel(record.customerSource, "Unmarked");
    const customerSubSource = sourceLabel(record.customerSubSource, "Unspecified");
    const key = JSON.stringify([customerSource, customerSubSource]);
    const group = groups.get(key) ?? { customerSource, customerSubSource, records: [] };
    group.records.push(record);
    groups.set(key, group);
  }
  return [...groups.values()]
    .map((group) => ({
      customerSource: group.customerSource,
      customerSubSource: group.customerSubSource,
      ...summarize(group.records),
    }))
    .sort((a, b) =>
      b.arr - a.arr ||
      a.customerSource.localeCompare(b.customerSource) ||
      a.customerSubSource.localeCompare(b.customerSubSource),
    );
}

function customerAttributionRecords(
  records: AttributionRecord[],
): Map<number, AttributionRecord> {
  const result = new Map<number, AttributionRecord>();
  for (const record of records) {
    const existing = result.get(record.customerID);
    if (!existing || record.soldDate < existing.soldDate) {
      result.set(record.customerID, record);
    }
  }
  return result;
}

function dateOnly(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
  if (!match) return null;
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
}

export function isFirstYearService(
  serviceDate: string,
  customerStartDate: string,
): boolean {
  const service = dateOnly(serviceDate);
  const start = dateOnly(customerStartDate);
  if (!service || !start || service < start) return false;
  const anniversary = new Date(start.getTime());
  anniversary.setUTCFullYear(anniversary.getUTCFullYear() + 1);
  return service < anniversary;
}

export function eligibleOnlineServices(
  services: AttributionServiceRecord[],
  records: AttributionRecord[],
  startMonth: string,
  endMonth: string,
): AttributionServiceRecord[] {
  const bySubscription = new Map(
    records.map((record) => [record.subscriptionID, record]),
  );
  const byCustomer = customerAttributionRecords(records);

  return services.filter((service) => {
    if (!inMonthRange(service.serviceDate, startMonth, endMonth)) return false;
    const record =
      (service.subscriptionID
        ? bySubscription.get(service.subscriptionID)
        : undefined) ?? byCustomer.get(service.customerID);
    if (!record || getAttributionChannel(record) !== "online") return false;
    const customerStartDate = record.customerCreatedDate || record.soldDate;
    return isFirstYearService(service.serviceDate, customerStartDate);
  });
}

export function summarizeServices(
  services: AttributionServiceRecord[],
): ServiceStats {
  return {
    customers: new Set(services.map((service) => service.customerID)).size,
    services: new Set(services.map((service) => service.appointmentID)).size,
    commissionRevenue: services.reduce(
      (total, service) => total + Number(service.commissionRevenue || 0),
      0,
    ),
  };
}

export function groupServicesByMonth(
  services: AttributionServiceRecord[],
): ServiceGroup[] {
  const groups = new Map<string, AttributionServiceRecord[]>();
  for (const service of services) {
    const label = monthOf(service.serviceDate);
    groups.set(label, [...(groups.get(label) ?? []), service]);
  }
  return [...groups.entries()]
    .map(([label, rows]) => ({ label, ...summarizeServices(rows) }))
    .sort((a, b) => a.label.localeCompare(b.label));
}
