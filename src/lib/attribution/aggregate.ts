import type {
  AttributionFilters,
  AttributionGroup,
  AttributionRecord,
  AttributionStats,
  SourceDimension,
} from "./types";

export const BLANK_LABEL = "(blank)";

function normalized(value: string | null | undefined): string {
  return value?.trim() || BLANK_LABEL;
}

export function getSource(
  record: AttributionRecord,
  dimension: SourceDimension,
): string {
  if (dimension === "customer") return normalized(record.customerSource);
  if (dimension === "subscription") return normalized(record.subscriptionSource);
  return normalized(record.leadSource);
}

export function getSubSource(
  record: AttributionRecord,
  dimension: SourceDimension,
): string {
  if (dimension === "customer") return normalized(record.customerSubSource);
  if (dimension === "subscription") {
    return normalized(record.subscriptionSubSource);
  }
  return BLANK_LABEL;
}

export function filterRecords(
  records: AttributionRecord[],
  filters: AttributionFilters,
): AttributionRecord[] {
  return records.filter((record) => {
    const month = record.soldDate.slice(0, 7);
    if (filters.startMonth && month < filters.startMonth) return false;
    if (filters.endMonth && month > filters.endMonth) return false;

    const source = getSource(record, filters.dimension);
    const subSource = getSubSource(record, filters.dimension);
    if (filters.source !== "all" && source !== filters.source) return false;
    if (filters.subSource !== "all" && subSource !== filters.subSource) {
      return false;
    }

    if (filters.sales === "non-sales" && !record.nonSalesRep) return false;
    if (filters.sales === "no-sales-credit" && !record.noSalesRepCredit) {
      return false;
    }

    if (filters.status === "active-subscription" && !record.subscriptionActive) {
      return false;
    }
    if (
      filters.status === "report-equivalent" &&
      (!record.subscriptionActive || !record.customerActive)
    ) {
      return false;
    }

    const isOnline = normalized(record.customerSource).toLowerCase() === "online";
    if (filters.online === "online-only" && !isOnline) return false;
    if (filters.online === "exclude-online" && isOnline) return false;

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
  return groupBy(records, (record) => record.soldDate.slice(0, 7));
}

export function groupBySource(
  records: AttributionRecord[],
  dimension: SourceDimension,
): AttributionGroup[] {
  return groupBy(records, (record) => getSource(record, dimension));
}

export function uniqueSources(
  records: AttributionRecord[],
  dimension: SourceDimension,
): string[] {
  return [...new Set(records.map((record) => getSource(record, dimension)))].sort();
}

export function uniqueSubSources(
  records: AttributionRecord[],
  dimension: SourceDimension,
): string[] {
  return [...new Set(records.map((record) => getSubSource(record, dimension)))].sort();
}
