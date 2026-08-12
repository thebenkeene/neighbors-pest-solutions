export type SellerCategory = -1 | 0 | 1 | 2;

export type AttributionChannel = "sales-team" | "online" | "referral";
export type AttributionChannelFilter = "all" | AttributionChannel;
export type OnlineDetail = "Google" | "Facebook" | "Yelp" | "Unknown";

export interface AttributionRecord {
  customerID: number;
  subscriptionID: number;
  soldDate: string;
  customerCreatedDate?: string;
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

export interface AttributionServiceRecord {
  appointmentID: number;
  customerID: number;
  subscriptionID: number | null;
  serviceDate: string;
  completedAt: string;
  ticketID: number | null;
  commissionRevenue: string;
  revenueBasis: "productionValue" | "subTotal" | "none";
}

export interface AttributionSnapshot {
  version: 1 | 2;
  metadata: {
    tenant: "neighborspest";
    officeID: 1;
    startInclusive: string;
    endExclusive: string;
    generatedAt: string;
    apiReadsUsed: number;
    recordsRetrieved: number;
    recurringRecords: number;
    serviceRecords?: number;
    serviceHistoryStartInclusive?: string;
    serviceHistoryEndExclusive?: string;
    serviceHistoryComplete?: boolean;
  };
  definitions: {
    arr: string;
    nonSalesRep: string;
    reportEquivalent: string;
    serviceRevenue?: string;
    firstYear?: string;
  };
  records: AttributionRecord[];
  services?: AttributionServiceRecord[];
}

export interface AttributionFilters {
  startMonth: string;
  endMonth: string;
  channel: AttributionChannelFilter;
}

export interface AttributionStats {
  customers: number;
  subscriptions: number;
  arr: number;
}

export interface AttributionGroup extends AttributionStats {
  label: string;
}

export interface ServiceStats {
  customers: number;
  services: number;
  commissionRevenue: number;
}

export interface ServiceGroup extends ServiceStats {
  label: string;
}
