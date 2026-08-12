import assert from "node:assert/strict";
import test from "node:test";
import { filterRecords, getSource, summarize } from "./aggregate";
import type { AttributionFilters, AttributionRecord } from "./types";

const records: AttributionRecord[] = [
  {
    customerID: 1,
    subscriptionID: 10,
    soldDate: "2026-04-03 10:00:00",
    annualRecurringValue: "600.00",
    subscriptionActive: true,
    customerActive: true,
    primarySellerType: 0,
    primarySellerTypeText: "Office Staff",
    nonSalesRep: true,
    noSalesRepCredit: true,
    leadSource: "",
    subscriptionSource: "Referral",
    subscriptionSubSource: "Customer",
    customerSource: "Online",
    customerSubSource: "Google",
  },
  {
    customerID: 2,
    subscriptionID: 20,
    soldDate: "2026-05-01 09:00:00",
    annualRecurringValue: "900.00",
    subscriptionActive: true,
    customerActive: false,
    primarySellerType: 2,
    primarySellerTypeText: "Sales Rep",
    nonSalesRep: false,
    noSalesRepCredit: false,
    leadSource: "Rep",
    subscriptionSource: "Rep",
    subscriptionSubSource: "Door",
    customerSource: "Rep",
    customerSubSource: "Door",
  },
];

const baseFilters: AttributionFilters = {
  startMonth: "2026-04",
  endMonth: "2026-07",
  dimension: "customer",
  source: "all",
  subSource: "all",
  sales: "all",
  status: "all",
  online: "all",
};

test("keeps customer and subscription source distinct", () => {
  assert.equal(getSource(records[0], "customer"), "Online");
  assert.equal(getSource(records[0], "subscription"), "Referral");
});

test("filters the April through July non-sales subset", () => {
  const result = filterRecords(records, { ...baseFilters, sales: "non-sales" });
  assert.equal(result.length, 1);
  assert.deepEqual(summarize(result), {
    customers: 1,
    subscriptions: 1,
    arr: 600,
  });
});

test("report equivalent requires both active subscription and customer", () => {
  const result = filterRecords(records, {
    ...baseFilters,
    status: "report-equivalent",
  });
  assert.deepEqual(result.map((record) => record.customerID), [1]);
});

test("online filtering always uses customer acquisition source", () => {
  const result = filterRecords(records, {
    ...baseFilters,
    dimension: "subscription",
    online: "online-only",
  });
  assert.deepEqual(result.map((record) => record.customerID), [1]);
});
