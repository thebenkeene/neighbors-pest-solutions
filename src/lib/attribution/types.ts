export type SellerCategory = -1 | 0 | 1 | 2;

export interface AttributionRecord {
  customerID: number;
  subscriptionID: number;
  soldDate: string;
  annualRecurringValue: string;
  subscriptionActive: boolean;
  customerActive: boolean;
  primarySellerType: SellerCategory;
  primarySellerTypeText: string;
  nonSalesRep: boolean;
  noSalesRepCredit: boolean;
  leadSource: string;
  subscriptionSource: string;
  subscriptionSubSource: string;
  customerSource: string;
  customerSubSource: string;
}

export interface AttributionSnapshot {
  version: 1;
  metadata: {
    tenant: "neighborspest";
    officeID: 1;
    startInclusive: string;
    endExclusive: string;
    generatedAt: string;
    apiReadsUsed: number;
    recordsRetrieved: number;
    recurringRecords: number;
  };
  definitions: {
    arr: string;
    nonSalesRep: string;
    reportEquivalent: string;
  };
  records: AttributionRecord[];
}

export type SourceDimension =
  | "customer"
  | "subscription"
  | "lead";

export type SalesFilter = "all" | "non-sales" | "no-sales-credit";
export type StatusFilter = "all" | "active-subscription" | "report-equivalent";
export type OnlineFilter = "all" | "online-only" | "exclude-online";

export interface AttributionFilters {
  startMonth: string;
  endMonth: string;
  dimension: SourceDimension;
  source: string;
  subSource: string;
  sales: SalesFilter;
  status: StatusFilter;
  online: OnlineFilter;
}

export interface AttributionStats {
  customers: number;
  subscriptions: number;
  arr: number;
}

export interface AttributionGroup extends AttributionStats {
  label: string;
}
