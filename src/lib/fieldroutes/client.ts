import type {
  AttributionRecord,
  AttributionSnapshot,
  SellerCategory,
} from "@/lib/attribution/types";

const DEFAULT_BASE_URL = "https://neighborspest.pestroutes.com/api";
export const MAX_FIELDROUTES_READS = 40;
const BULK_SIZE = 1000;

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
  readonly maxReads: number;
  readsUsed = 0;

  constructor(options?: { maxReads?: number }) {
    this.authenticationKey = process.env.FIELDROUTES_AUTH_KEY?.trim() ?? "";
    this.authenticationToken = process.env.FIELDROUTES_AUTH_TOKEN?.trim() ?? "";
    this.baseUrl = (
      process.env.FIELDROUTES_BASE_URL?.trim() || DEFAULT_BASE_URL
    ).replace(/\/$/, "");
    this.maxReads = options?.maxReads ?? MAX_FIELDROUTES_READS;

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

  private async post(
    endpoint: string,
    action: string,
    params: Record<string, FormValue> = {},
  ): Promise<ApiObject> {
    this.ensureReadsAvailable();
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

  async createSnapshot(
    startInclusive: string,
    endExclusive: string,
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

    return {
      version: 1,
      metadata: {
        tenant: "neighborspest",
        officeID: 1,
        startInclusive,
        endExclusive,
        generatedAt: new Date().toISOString(),
        apiReadsUsed: this.readsUsed,
        recordsRetrieved: subscriptions.length,
        recurringRecords: records.length,
      },
      definitions: {
        arr: "subscription.annualRecurringValue > 0",
        nonSalesRep: "primary soldBy employee type is not Sales Rep (type 2)",
        reportEquivalent:
          "non-sales-rep recurring subscription with active subscription and active customer",
      },
      records,
    };
  }
}
