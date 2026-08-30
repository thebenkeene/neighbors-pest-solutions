import assert from "node:assert/strict";
import test from "node:test";
import { FieldRoutesClient } from "./client";

test("builds a minimized joined attribution snapshot in three reads", async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.FIELDROUTES_AUTH_KEY;
  const originalToken = process.env.FIELDROUTES_AUTH_TOKEN;
  process.env.FIELDROUTES_AUTH_KEY = "test-key";
  process.env.FIELDROUTES_AUTH_TOKEN = "test-token";
  const calls: Array<{ url: string; body: string }> = [];
  const callTimes: number[] = [];
  const responses = [
    {
      success: true,
      subscriptions: [
        {
          customerID: "101",
          subscriptionID: "201",
          dateAdded: "2026-04-02 09:30:00",
          annualRecurringValue: "720",
          active: "1",
          soldBy: "7",
          soldBy2: "0",
          soldBy3: "0",
          leadSource: "Website",
          source: "Inbound",
          subSource: "Form",
        },
      ],
      subscriptionIDsNoDataExported: [],
    },
    {
      success: true,
      employees: [{ employeeID: "7", type: "0", fname: "Not stored" }],
    },
    {
      success: true,
      customers: [
        {
          customerID: "101",
          status: "1",
          dateAdded: "2026-03-30 11:00:00",
          customerSource: "Online",
          customerSubSource: "Google",
          fname: "Not stored",
          email: "not-stored@example.com",
        },
      ],
    },
  ];
  globalThis.fetch = async (input, init) => {
    callTimes.push(Date.now());
    calls.push({ url: String(input), body: String(init?.body ?? "") });
    return Response.json(responses[calls.length - 1]);
  };

  try {
    const client = new FieldRoutesClient({ maxReads: 3, minReadIntervalMs: 20 });
    const snapshot = await client.createSnapshot("2026-04-01", "2026-08-01");
    assert.equal(snapshot.metadata.apiReadsUsed, 3);
    assert.equal(snapshot.records.length, 1);
    assert.deepEqual(snapshot.records[0], {
      customerID: 101,
      subscriptionID: 201,
      soldDate: "2026-04-02 09:30:00",
      customerCreatedDate: "2026-03-30 11:00:00",
      annualRecurringValue: "720.00",
      subscriptionActive: true,
      customerActive: true,
      primarySellerType: 0,
      primarySellerTypeText: "Office Staff",
      nonSalesRep: true,
      noSalesRepCredit: true,
      leadSource: "Website",
      subscriptionSource: "Inbound",
      subscriptionSubSource: "Form",
      customerSource: "Online",
      customerSubSource: "Google",
    });
    assert.equal(JSON.stringify(snapshot).includes("not-stored"), false);
    assert.match(calls[0].url, /subscription\/search$/);
    assert.equal(
      calls[0].body.endsWith(
        "authenticationKey=test-key&authenticationToken=test-token",
      ),
      true,
    );
    assert.ok(callTimes[1] - callTimes[0] >= 15);
    assert.ok(callTimes[2] - callTimes[1] >= 15);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.FIELDROUTES_AUTH_KEY;
    else process.env.FIELDROUTES_AUTH_KEY = originalKey;
    if (originalToken === undefined) delete process.env.FIELDROUTES_AUTH_TOKEN;
    else process.env.FIELDROUTES_AUTH_TOKEN = originalToken;
  }
});

test("adds completed services with FieldRoutes commission revenue", async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.FIELDROUTES_AUTH_KEY;
  const originalToken = process.env.FIELDROUTES_AUTH_TOKEN;
  process.env.FIELDROUTES_AUTH_KEY = "test-key";
  process.env.FIELDROUTES_AUTH_TOKEN = "test-token";
  const calls: Array<{ url: string; body: string }> = [];
  const responses = [
    {
      success: true,
      subscriptions: [
        {
          customerID: "101",
          subscriptionID: "201",
          dateAdded: "2026-07-01 09:30:00",
          annualRecurringValue: "720",
          active: "1",
          soldBy: "7",
          soldBy2: "0",
          soldBy3: "0",
        },
      ],
      subscriptionIDsNoDataExported: [],
    },
    { success: true, employees: [{ employeeID: "7", type: "0" }] },
    {
      success: true,
      customers: [
        {
          customerID: "101",
          status: "1",
          dateAdded: "2026-07-01 09:00:00",
          customerSource: "Online",
          customerSubSource: "Google",
        },
      ],
    },
    {
      success: true,
      appointmentIDs: [301],
      appointmentIDsNoDataExported: [],
      appointments: [
        {
          appointmentID: "301",
          customerID: "101",
          subscriptionID: "201",
          status: "1",
          date: "2026-07-25 08:00:00",
          dateCompleted: "2026-07-25 09:00:00",
          ticketID: "401",
          notes: "Never stored",
        },
      ],
    },
    {
      success: true,
      tickets: [
        {
          ticketID: "401",
          active: "1",
          productionValue: "-1",
          subTotal: "175.50",
          items: "Never stored",
        },
      ],
    },
  ];
  globalThis.fetch = async (input, init) => {
    calls.push({ url: String(input), body: String(init?.body ?? "") });
    return Response.json(responses[calls.length - 1]);
  };

  try {
    const client = new FieldRoutesClient({ maxReads: 5, minReadIntervalMs: 0 });
    const snapshot = await client.createSnapshot("2026-07-01", "2026-08-01");
    assert.equal(snapshot.version, 2);
    assert.equal(snapshot.metadata.apiReadsUsed, 5);
    assert.equal(snapshot.services?.length, 1);
    assert.deepEqual(snapshot.services?.[0], {
      appointmentID: 301,
      customerID: 101,
      subscriptionID: 201,
      serviceDate: "2026-07-25 08:00:00",
      completedAt: "2026-07-25 09:00:00",
      ticketID: 401,
      commissionRevenue: "175.50",
      revenueBasis: "subTotal",
    });
    assert.equal(JSON.stringify(snapshot).includes("Never stored"), false);
    assert.match(calls[3].url, /appointment\/search$/);
    assert.match(calls[4].url, /ticket\/get$/);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.FIELDROUTES_AUTH_KEY;
    else process.env.FIELDROUTES_AUTH_KEY = originalKey;
    if (originalToken === undefined) delete process.env.FIELDROUTES_AUTH_TOKEN;
    else process.env.FIELDROUTES_AUTH_TOKEN = originalToken;
  }
});

test("refuses a run before exceeding its local API-read cap", async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.FIELDROUTES_AUTH_KEY;
  const originalToken = process.env.FIELDROUTES_AUTH_TOKEN;
  process.env.FIELDROUTES_AUTH_KEY = "test-key";
  process.env.FIELDROUTES_AUTH_TOKEN = "test-token";
  globalThis.fetch = async () =>
    Response.json({
      success: true,
      subscriptions: [],
      subscriptionIDsNoDataExported: [],
    });

  try {
    const client = new FieldRoutesClient({ maxReads: 2, minReadIntervalMs: 0 });
    await assert.rejects(
      client.createSnapshot("2026-04-01", "2026-08-01"),
      /40-read|safety cap/i,
    );
    assert.equal(client.readsUsed, 1);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.FIELDROUTES_AUTH_KEY;
    else process.env.FIELDROUTES_AUTH_KEY = originalKey;
    if (originalToken === undefined) delete process.env.FIELDROUTES_AUTH_TOKEN;
    else process.env.FIELDROUTES_AUTH_TOKEN = originalToken;
  }
});
