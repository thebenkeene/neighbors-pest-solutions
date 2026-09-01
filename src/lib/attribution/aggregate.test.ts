import assert from "node:assert/strict";
import test from "node:test";
import {
  eligibleOnlineServices,
  filterRecords,
  getAttributionChannel,
  getOnlineDetail,
  groupByMonth,
  isFirstYearService,
  resolveReportingRange,
  summarize,
  summarizeServices,
} from "./aggregate";
import type {
  AttributionFilters,
  AttributionRecord,
  AttributionServiceRecord,
} from "./types";

const records: AttributionRecord[] = [
  {
    customerID: 1,
    subscriptionID: 10,
    soldDate: "2026-04-03 10:00:00",
    customerCreatedDate: "2026-03-28 10:00:00",
    annualRecurringValue: "600.00",
    subscriptionActive: true,
    customerActive: true,
    primarySellerType: 0,
    primarySellerTypeText: "Office Staff",
    nonSalesRep: true,
    noSalesRepCredit: true,
    leadSource: "",
    subscriptionSource: "",
    subscriptionSubSource: "",
    customerSource: "Online",
    customerSubSource: "Google Organic",
  },
  {
    customerID: 2,
    subscriptionID: 20,
    soldDate: "2026-05-01 09:00:00",
    customerCreatedDate: "2026-05-01 09:00:00",
    annualRecurringValue: "900.00",
    subscriptionActive: true,
    customerActive: true,
    primarySellerType: 2,
    primarySellerTypeText: "Sales Rep",
    nonSalesRep: false,
    noSalesRepCredit: false,
    leadSource: "Rep",
    subscriptionSource: "Rep",
    subscriptionSubSource: "Door",
    customerSource: "Online",
    customerSubSource: "Facebook",
  },
  {
    customerID: 3,
    subscriptionID: 30,
    soldDate: "2026-06-11 09:00:00",
    customerCreatedDate: "2026-06-11 09:00:00",
    annualRecurringValue: "480.00",
    subscriptionActive: true,
    customerActive: true,
    primarySellerType: 0,
    primarySellerTypeText: "Office Staff",
    nonSalesRep: true,
    noSalesRepCredit: true,
    leadSource: "",
    subscriptionSource: "",
    subscriptionSubSource: "",
    customerSource: "Truck Siting",
    customerSubSource: "",
  },
  {
    customerID: 4,
    subscriptionID: 40,
    soldDate: "2026-07-02 09:00:00",
    customerCreatedDate: "2026-07-02 09:00:00",
    annualRecurringValue: "720.00",
    subscriptionActive: true,
    customerActive: true,
    primarySellerType: 0,
    primarySellerTypeText: "Office Staff",
    nonSalesRep: true,
    noSalesRepCredit: true,
    leadSource: "",
    subscriptionSource: "Conditions",
    subscriptionSubSource: "",
    customerSource: "",
    customerSubSource: "",
  },
];

const baseFilters: AttributionFilters = {
  startMonth: "2026-04",
  endMonth: "2026-07",
  channel: "all",
};

test("uses plug-and-play attribution precedence", () => {
  assert.equal(getAttributionChannel(records[0]), "online");
  assert.equal(getAttributionChannel(records[1]), "sales-team");
  assert.equal(getAttributionChannel(records[2]), "referral");
  assert.equal(getAttributionChannel(records[3]), "online");
  assert.equal(getOnlineDetail(records[0]), "Google");
  assert.equal(getOnlineDetail(records[3]), "Unknown");
});

test("keeps the inclusive start and end month range accurate", () => {
  const result = filterRecords(records, {
    ...baseFilters,
    startMonth: "2026-05",
    endMonth: "2026-06",
  });
  assert.deepEqual(result.map((record) => record.customerID), [2, 3]);
  assert.deepEqual(groupByMonth(records).map((group) => group.label), [
    "2026-04",
    "2026-05",
    "2026-06",
    "2026-07",
  ]);
});

test("switches between a saved custom range and all available history", () => {
  const months = ["2026-07", "2026-04", "2026-06", "2026-05"];
  const customRange = resolveReportingRange(
    months,
    "2026-05",
    "2026-06",
    false,
  );
  assert.deepEqual(customRange, {
    startMonth: "2026-05",
    endMonth: "2026-06",
  });
  assert.deepEqual(
    summarize(filterRecords(records, { ...customRange, channel: "all" })),
    { customers: 2, subscriptions: 2, arr: 1380 },
  );

  const allTimeRange = resolveReportingRange(
    months,
    customRange.startMonth,
    customRange.endMonth,
    true,
  );
  assert.deepEqual(allTimeRange, {
    startMonth: "2026-04",
    endMonth: "2026-07",
  });
  assert.deepEqual(
    summarize(filterRecords(records, { ...allTimeRange, channel: "all" })),
    { customers: 4, subscriptions: 4, arr: 2700 },
  );
});

test("filters by the friendly channel without exposing raw fields", () => {
  const online = filterRecords(records, { ...baseFilters, channel: "online" });
  assert.deepEqual(online.map((record) => record.customerID), [1, 4]);
  assert.deepEqual(summarize(online), {
    customers: 2,
    subscriptions: 2,
    arr: 1320,
  });
});

test("first-year service uses an exclusive one-year anniversary", () => {
  assert.equal(isFirstYearService("2027-03-27", "2026-03-28"), true);
  assert.equal(isFirstYearService("2027-03-28", "2026-03-28"), false);
  assert.equal(isFirstYearService("2026-03-27", "2026-03-28"), false);
});

test("summarizes only eligible first-year online services", () => {
  const services: AttributionServiceRecord[] = [
    {
      appointmentID: 100,
      customerID: 1,
      subscriptionID: 10,
      serviceDate: "2026-04-15 08:00:00",
      completedAt: "2026-04-15 10:00:00",
      ticketID: 1000,
      commissionRevenue: "150.00",
      revenueBasis: "productionValue",
    },
    {
      appointmentID: 200,
      customerID: 2,
      subscriptionID: 20,
      serviceDate: "2026-05-12 08:00:00",
      completedAt: "2026-05-12 10:00:00",
      ticketID: 2000,
      commissionRevenue: "200.00",
      revenueBasis: "productionValue",
    },
    {
      appointmentID: 300,
      customerID: 1,
      subscriptionID: 10,
      serviceDate: "2027-04-15 08:00:00",
      completedAt: "2027-04-15 10:00:00",
      ticketID: 3000,
      commissionRevenue: "300.00",
      revenueBasis: "productionValue",
    },
  ];
  const eligible = eligibleOnlineServices(
    services,
    records,
    "2026-04",
    "2027-04",
  );
  assert.deepEqual(eligible.map((service) => service.appointmentID), [100]);
  assert.deepEqual(summarizeServices(eligible), {
    customers: 1,
    services: 1,
    commissionRevenue: 150,
  });
});
