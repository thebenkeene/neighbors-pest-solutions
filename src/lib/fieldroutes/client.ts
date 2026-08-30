import type {
  AttributionRecord,
  AttributionServiceRecord,
  AttributionSnapshot,
  SellerCategory,
} from "@/lib/attribution/types";

const DEFAULT_BASE_URL = "https://neighborspest.pestroutes.com/api";
export const MAX_FIELDROUTES_READS = 40;
// The free FieldRoutes key also allows only 20 reads per minute. Keep a small
// margin so clock skew and request timing never put the daily sync on the edge.
const MIN_READ_INTERVAL_MS = 3_250;
const BULK_SIZE = 1000;
const SERVICE_WINDOW_DAYS = 14;
const SERVICE_REFRESH_DAYS = 28;

type FormValue = string | number | boolean | Array<string | number> | object;
type ApiObject = Record<string, unknown>;

function asObject(value: unknown): ApiObject {
  return value && typeof value === "object" ? (value as ApiObject) : {};
}

function asObjects(value: unknown): ApiObject[] {
  return Array.isArray(value) ? value.map(asObject) : [];
}

function asString(value: unknown): string {
  return value == null ? "" : String(value);
}

function asNumber(value: unknown): number {
  const result = Number(value);
  return Number.isFinite(result) ? result : 0;
}

function positiveID(value: unknown): number | null {
  const result = Math.trunc(asNumber(value));
  return result > 0 ? result : null;
}

function chunks<T>(values: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let index = 0; index < values.length; index += size) {
    result.push(values.slice(index, index + size));
  }
  return result;
}

function endOfPreviousSecond(endExclusive: string): string {
  const timestamp = new Date(`${endExclusive}T00:00:00Z`);
  timestamp.setUTCSeconds(timestamp.getUTCSeconds() - 1);
  return timestamp.toISOString().slice(0, 19).replace("T", " ");
}

function addDays(value: string, days: number): string {
  const timestamp = new Date(`${value}T00:00:00Z`);
  timestamp.setUTCDate(timestamp.getUTCDate() + days);
  return timestamp.toISOString().slice(0, 10);
}

function laterDate(left: string, right: string): string {
  return left > right ? left : right;
}

function sellerLabel(type: SellerCategory): string {
  return (
    {
      [-1]: "Unknown/System",
      0: "Office Staff",
      1: "Technician",
      2: "Sales Rep",
    } as const
  )[type];
}

export class FieldRoutesClient {
  private readonly authenticationKey: string;
  private readonly authenticationToken: string;
  private readonly baseUrl: string;
  private readonly minReadIntervalMs: number;
  private lastReadStartedAt = 0;
  readonly maxReads: number;
  readsUsed = 0;

  constructor(options?: { maxReads?: number; minReadIntervalMs?: number }) {
    this.authenticationKey = process.env.FIELDROUTES_AUTH_KEY?.trim() ?? "";
    this.authenticationToken = process.env.FIELDROUTES_AUTH_TOKEN?.trim() ?? "";
    this.baseUrl = (
      process.env.FIELDROUTES_BASE_URL?.trim() || DEFAULT_BASE_URL
    ).replace(/\/$/, "");
    this.maxReads = options?.maxReads ?? MAX_FIELDROUTES_READS;
    this.minReadIntervalMs =
      options?.minReadIntervalMs ?? MIN_READ_INTERVAL_MS;

    if (!this.authenticationKey || !this.authenticationToken) {
      throw new Error("FieldRoutes credentials are not configured");
    }
  }

  private ensureReadsAvailable(count = 1): void {
    if (this.readsUsed + count > this.maxReads) {
      throw new Error(
        `FieldRoutes safety cap would be exceeded (${this.maxReads} reads)`,
      );
    }
  }

  private async waitForReadSlot(): Promise<void> {
    const waitMs =
      this.lastReadStartedAt + this.minReadIntervalMs - Date.now();
    if (waitMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
    this.lastReadStartedAt = Date.now();
  }

  private async post(
    endpoint: string,
    action: string,
    params: Record<string, FormValue> = {},
  ): Promise<ApiObject> {
    this.ensureReadsAvailable();
    await this.waitForReadSlot();
    const body = new URLSearchParams();
    for (const [name, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        for (const item of value) body.append(`${name}[]`, String(item));
      } else if (typeof value === "object") {
        body.append(name, JSON.stringify(value));
      } else {
        body.append(name, String(value));
      }
    }
    // FieldRoutes recommends appending credentials last.
    body.append("authenticationKey", this.authenticationKey);
    body.append("authenticationToken", this.authenticationToken);

    this.readsUsed += 1;
    const response = await fetch(`${this.baseUrl}/${endpoint}/${action}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "NeighborPestSolutionsDashboard/1.0",
      },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(90_000),
    });

    if (!response.ok) {
      throw new Error(`FieldRoutes ${endpoint}/${action} returned HTTP ${response.status}`);
    }
    const result = asObject(await response.json());
    const error = asString(result.errorMessage);
    if (result.success === false || error) {
      if (error.toLowerCase().includes("maximum number of read requests per day")) {
        throw new Error("FieldRoutes daily read limit has been reached");
      }
      if (error.toLowerCase().includes("maximum number of read requests per minute")) {
        throw new Error("FieldRoutes per-minute read limit has been reached");
      }
      // Never include the upstream response: it can echo credential parameters.
      throw new Error(error || `FieldRoutes ${endpoint}/${action} failed`);
    }
    return result;
  }

  private async getEntities(
    endpoint: string,
    ids: number[],
    idParameter: string,
    resultKey: string,
  ): Promise<ApiObject[]> {
    const batches = chunks(ids, BULK_SIZE);
    this.ensureReadsAvailable(batches.length);
    const entities: ApiObject[] = [];
    for (const batch of batches) {
      const result = await this.post(endpoint, "get", { [idParameter]: batch });
      entities.push(...asObjects(result[resultKey]));
    }
    return entities;
  }

  private async fetchCompletedServiceWindow(
    startInclusive: string,
    endExclusive: string,
  ): Promise<AttributionServiceRecord[] | null> {
    const search = await this.post("appointment", "search", {
      status: 1,
      dateStart: `${startInclusive} 00:00:00`,
      dateEnd: endOfPreviousSecond(endExclusive),
      includeData: 1,
    });
    const appointments = asObjects(search.appointments);
    const unresolvedIDs = (Array.isArray(search.appointmentIDsNoDataExported)
      ? search.appointmentIDsNoDataExported
      : [])
      .map(positiveID)
      .filter((value): value is number => value !== null);
    const allIDs = (Array.isArray(search.appointmentIDs)
      ? search.appointmentIDs
      : [])
      .map(positiveID)
      .filter((value): value is number => value !== null);
    const appointmentCount = Math.max(
      allIDs.length,
      appointments.length + unresolvedIDs.length,
    );
    const unresolvedBatches = Math.ceil(unresolvedIDs.length / BULK_SIZE);
    // Every completed appointment can have at most one invoice. Reserve the
    // worst-case ticket reads before resolving the rest of this window.
    const maximumTicketBatches = Math.ceil(appointmentCount / BULK_SIZE);
    if (
      this.readsUsed + unresolvedBatches + maximumTicketBatches >
      this.maxReads
    ) {
      return null;
    }

    appointments.push(
      ...(await this.getEntities(
        "appointment",
        unresolvedIDs,
        "appointmentIDs",
        "appointments",
      )),
    );

    const completed = appointments.filter((appointment) => {
      const serviceDate = asString(appointment.date).slice(0, 10);
      return (
        asNumber(appointment.status) === 1 &&
        serviceDate >= startInclusive &&
        serviceDate < endExclusive
      );
    });
    const ticketIDs = [
      ...new Set(
        completed
          .map((appointment) => positiveID(appointment.ticketID))
          .filter((value): value is number => value !== null),
      ),
    ].sort((a, b) => a - b);
    const tickets = await this.getEntities(
      "ticket",
      ticketIDs,
      "ticketIDs",
      "tickets",
    );
    const ticketsByID = new Map(
      tickets.map((ticket) => [asNumber(ticket.ticketID), ticket]),
    );

    return completed.flatMap((appointment) => {
      const appointmentID = positiveID(appointment.appointmentID);
      const customerID = positiveID(appointment.customerID);
      if (!appointmentID || !customerID) return [];
      const ticketID = positiveID(appointment.ticketID);
      const ticket = ticketID ? ticketsByID.get(ticketID) : undefined;
      const ticketIsActive = ticket && asNumber(ticket.active) === 1;
      let commissionRevenue = 0;
      let revenueBasis: AttributionServiceRecord["revenueBasis"] = "none";
      if (ticketIsActive) {
        const hasProductionValue =
          ticket.productionValue !== null &&
          ticket.productionValue !== undefined &&
          asString(ticket.productionValue).trim() !== "";
        const productionValue = asNumber(ticket.productionValue);
        if (hasProductionValue && productionValue >= 0) {
          commissionRevenue = productionValue;
          revenueBasis = "productionValue";
        } else {
          commissionRevenue = asNumber(ticket.subTotal);
          revenueBasis = "subTotal";
        }
      }

      return [
        {
          appointmentID,
          customerID,
          subscriptionID: positiveID(appointment.subscriptionID),
          serviceDate: asString(appointment.date),
          completedAt: asString(appointment.dateCompleted),
          ticketID,
          commissionRevenue: commissionRevenue.toFixed(2),
          revenueBasis,
        },
      ];
    });
  }

  private async syncServiceHistory(
    startInclusive: string,
    endExclusive: string,
    previous: AttributionSnapshot | null,
  ): Promise<{
    services: AttributionServiceRecord[];
    historyStartInclusive: string;
    historyComplete: boolean;
  }> {
    const services = new Map(
      (previous?.services ?? []).map((service) => [
        service.appointmentID,
        service,
      ]),
    );
    let historyStartInclusive =
      previous?.metadata.serviceHistoryStartInclusive ?? endExclusive;

    const applyWindow = (
      windowStart: string,
      windowEnd: string,
      rows: AttributionServiceRecord[],
    ) => {
      for (const [appointmentID, service] of services) {
        const date = service.serviceDate.slice(0, 10);
        if (date >= windowStart && date < windowEnd) {
          services.delete(appointmentID);
        }
      }
      for (const service of rows) services.set(service.appointmentID, service);
      if (
        historyStartInclusive === windowEnd ||
        (historyStartInclusive > windowStart &&
          historyStartInclusive <= windowEnd)
      ) {
        historyStartInclusive = windowStart;
      }
    };

    const refreshStart = laterDate(
      startInclusive,
      addDays(endExclusive, -SERVICE_REFRESH_DAYS),
    );
    let refreshEnd = endExclusive;
    while (refreshEnd > refreshStart && this.maxReads - this.readsUsed >= 2) {
      const windowStart = laterDate(
        refreshStart,
        addDays(refreshEnd, -SERVICE_WINDOW_DAYS),
      );
      const rows = await this.fetchCompletedServiceWindow(
        windowStart,
        refreshEnd,
      );
      if (!rows) break;
      applyWindow(windowStart, refreshEnd, rows);
      refreshEnd = windowStart;
    }

    let backfillEnd = historyStartInclusive;
    while (backfillEnd > startInclusive && this.maxReads - this.readsUsed >= 2) {
      const windowStart = laterDate(
        startInclusive,
        addDays(backfillEnd, -SERVICE_WINDOW_DAYS),
      );
      const rows = await this.fetchCompletedServiceWindow(
        windowStart,
        backfillEnd,
      );
      if (!rows) break;
      applyWindow(windowStart, backfillEnd, rows);
      backfillEnd = windowStart;
    }

    return {
      services: [...services.values()].sort(
        (left, right) =>
          left.serviceDate.localeCompare(right.serviceDate) ||
          left.appointmentID - right.appointmentID,
      ),
      historyStartInclusive,
      historyComplete: historyStartInclusive <= startInclusive,
    };
  }

  async createSnapshot(
    startInclusive: string,
    endExclusive: string,
    previous: AttributionSnapshot | null = null,
  ): Promise<AttributionSnapshot> {
    const search = await this.post("subscription", "search", {
      dateAddedStart: `${startInclusive} 00:00:00`,
      dateAddedEnd: endOfPreviousSecond(endExclusive),
      includeData: 1,
    });
    const subscriptions = asObjects(search.subscriptions);
    const unresolvedIDs = (Array.isArray(search.subscriptionIDsNoDataExported)
      ? search.subscriptionIDsNoDataExported
      : []
    )
      .map(positiveID)
      .filter((value): value is number => value !== null);

    // Leave enough reads for at least one employee and customer join before
    // retrieving the remaining subscriptions.
    const unresolvedBatches = Math.ceil(unresolvedIDs.length / BULK_SIZE);
    if (this.readsUsed + unresolvedBatches + 2 > this.maxReads) {
      throw new Error(
        "The requested history is too large for the 40-read dashboard safety cap",
      );
    }
    subscriptions.push(
      ...(await this.getEntities(
        "subscription",
        unresolvedIDs,
        "subscriptionIDs",
        "subscriptions",
      )),
    );

    const recurring = subscriptions.filter(
      (subscription) => asNumber(subscription.annualRecurringValue) > 0,
    );
    const sellerIDs = [
      ...new Set(
        recurring.flatMap((subscription) =>
          ["soldBy", "soldBy2", "soldBy3"]
            .map((field) => positiveID(subscription[field]))
            .filter((value): value is number => value !== null),
        ),
      ),
    ].sort((a, b) => a - b);
    const customerIDs = [
      ...new Set(
        recurring
          .map((subscription) => positiveID(subscription.customerID))
          .filter((value): value is number => value !== null),
      ),
    ].sort((a, b) => a - b);

    const joinReads =
      Math.ceil(sellerIDs.length / BULK_SIZE) +
      Math.ceil(customerIDs.length / BULK_SIZE);
    this.ensureReadsAvailable(joinReads);

    const employees = await this.getEntities(
      "employee",
      sellerIDs,
      "employeeIDs",
      "employees",
    );
    const employeeTypes = new Map<number, SellerCategory>(
      employees.map((employee) => {
        const rawType = asNumber(employee.type);
        const type: SellerCategory =
          rawType === 0 || rawType === 1 || rawType === 2 ? rawType : -1;
        return [asNumber(employee.employeeID), type];
      }),
    );

    const customers = await this.getEntities(
      "customer",
      customerIDs,
      "customerIDs",
      "customers",
    );
    const customersByID = new Map(
      customers.map((customer) => [asNumber(customer.customerID), customer]),
    );

    const records: AttributionRecord[] = recurring.flatMap((subscription) => {
      const customerID = positiveID(subscription.customerID);
      const subscriptionID = positiveID(subscription.subscriptionID);
      if (!customerID || !subscriptionID) return [];
      const customer = customersByID.get(customerID) ?? {};
      const sellerTypes = ["soldBy", "soldBy2", "soldBy3"].map((field) => {
        const sellerID = positiveID(subscription[field]);
        return sellerID ? (employeeTypes.get(sellerID) ?? -1) : -1;
      });
      const primarySellerType = sellerTypes[0];

      return [
        {
          customerID,
          subscriptionID,
          soldDate: asString(subscription.dateAdded),
          customerCreatedDate: asString(customer.dateAdded),
          annualRecurringValue: asNumber(
            subscription.annualRecurringValue,
          ).toFixed(2),
          subscriptionActive: asNumber(subscription.active) === 1,
          customerActive: asNumber(customer.status) === 1,
          primarySellerType,
          primarySellerTypeText: sellerLabel(primarySellerType),
          nonSalesRep: primarySellerType !== 2,
          noSalesRepCredit: sellerTypes.every((type) => type !== 2),
          leadSource: asString(subscription.leadSource),
          subscriptionSource: asString(subscription.source),
          subscriptionSubSource: asString(subscription.subSource),
          customerSource: asString(customer.customerSource),
          customerSubSource: asString(customer.customerSubSource),
        },
      ];
    });

    const serviceHistory = await this.syncServiceHistory(
      startInclusive,
      endExclusive,
      previous,
    );

    return {
      version: 2,
      metadata: {
        tenant: "neighborspest",
        officeID: 1,
        startInclusive,
        endExclusive,
        generatedAt: new Date().toISOString(),
        apiReadsUsed: this.readsUsed,
        recordsRetrieved: subscriptions.length,
        recurringRecords: records.length,
        serviceRecords: serviceHistory.services.length,
        serviceHistoryStartInclusive: serviceHistory.historyStartInclusive,
        serviceHistoryEndExclusive: endExclusive,
        serviceHistoryComplete: serviceHistory.historyComplete,
      },
      definitions: {
        arr: "subscription.annualRecurringValue > 0",
        nonSalesRep: "primary soldBy employee type is not Sales Rep (type 2)",
        reportEquivalent:
          "recurring subscription with active subscription and active customer",
        serviceRevenue:
          "active appointment invoice productionValue; use subTotal when productionValue is -1",
        firstYear:
          "service date is on/after customer dateAdded and before its one-year anniversary",
      },
      records,
      services: serviceHistory.services,
    };
  }
}
