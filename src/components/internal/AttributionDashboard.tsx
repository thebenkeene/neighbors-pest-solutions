"use client";

import { useMemo, useState } from "react";
import {
  filterRecords,
  getSource,
  groupByMonth,
  groupBySource,
  summarize,
  uniqueSources,
  uniqueSubSources,
} from "@/lib/attribution/aggregate";
import type {
  AttributionFilters,
  AttributionSnapshot,
  SourceDimension,
} from "@/lib/attribution/types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const wholeNumber = new Intl.NumberFormat("en-US");

function prettyMonth(value: string): string {
  if (!value) return "Unknown";
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

function fieldLabel(dimension: SourceDimension): string {
  if (dimension === "customer") return "Customer source";
  if (dimension === "subscription") return "Subscription source";
  return "Lead source";
}

function SelectField({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
      >
        {children}
      </select>
    </label>
  );
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-2 text-xs text-slate-500">{detail}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V9m5 10V5m5 14v-7m5 7V3" />
        </svg>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-slate-950">
        Waiting for the first daily sync
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
        The dashboard is ready. Once the private Blob store, FieldRoutes
        credentials, and cron secret are configured, the scheduled sync will
        create the first attribution snapshot.
      </p>
    </section>
  );
}

export default function AttributionDashboard({
  snapshot,
}: {
  snapshot: AttributionSnapshot | null;
}) {
  const records = useMemo(() => snapshot?.records ?? [], [snapshot]);
  const months = useMemo(
    () => [...new Set(records.map((record) => record.soldDate.slice(0, 7)))].filter(Boolean).sort(),
    [records],
  );
  const firstMonth = months.includes("2026-04") ? "2026-04" : (months[0] ?? "");
  const lastMonth = months.includes("2026-07") ? "2026-07" : (months.at(-1) ?? "");
  const [filters, setFilters] = useState<AttributionFilters>({
    startMonth: firstMonth,
    endMonth: lastMonth,
    dimension: "customer",
    source: "all",
    subSource: "all",
    sales: "non-sales",
    status: "report-equivalent",
    online: "all",
  });

  const sources = useMemo(
    () => uniqueSources(records, filters.dimension),
    [records, filters.dimension],
  );
  const subSources = useMemo(() => {
    const sourceRows =
      filters.source === "all"
        ? records
        : records.filter(
            (record) => getSource(record, filters.dimension) === filters.source,
          );
    return uniqueSubSources(sourceRows, filters.dimension);
  }, [records, filters.dimension, filters.source]);
  const filteredRecords = useMemo(
    () => filterRecords(records, filters),
    [records, filters],
  );
  const stats = useMemo(() => summarize(filteredRecords), [filteredRecords]);
  const activeARR = useMemo(
    () =>
      summarize(filteredRecords.filter((record) => record.subscriptionActive)).arr,
    [filteredRecords],
  );
  const onlineARR = useMemo(
    () =>
      summarize(
        filteredRecords.filter(
          (record) => record.customerSource.trim().toLowerCase() === "online",
        ),
      ).arr,
    [filteredRecords],
  );
  const monthGroups = useMemo(() => groupByMonth(filteredRecords), [filteredRecords]);
  const sourceGroups = useMemo(
    () => groupBySource(filteredRecords, filters.dimension),
    [filteredRecords, filters.dimension],
  );
  const maxSourceARR = Math.max(...sourceGroups.map((group) => group.arr), 1);

  function update<K extends keyof AttributionFilters>(
    key: K,
    value: AttributionFilters[K],
  ) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function changeDimension(value: SourceDimension) {
    setFilters((current) => ({
      ...current,
      dimension: value,
      source: "all",
      subSource: "all",
    }));
  }

  function reset() {
    setFilters({
      startMonth: firstMonth,
      endMonth: lastMonth,
      dimension: "customer",
      source: "all",
      subSource: "all",
      sales: "non-sales",
      status: "report-equivalent",
      online: "all",
    });
  }

  if (!snapshot || records.length === 0) return <EmptyState />;

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.04)] sm:p-6">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Filters</h2>
            <p className="mt-1 text-xs text-slate-500">
              Defaults to the non-sales-rep, active-customer report view.
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="self-start rounded-lg px-3 py-2 text-xs font-semibold text-primary-700 transition hover:bg-primary-50"
          >
            Reset filters
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
              Start month
            </span>
            <input
              type="month"
              value={filters.startMonth}
              min={months[0]}
              max={filters.endMonth || months.at(-1)}
              onChange={(event) => update("startMonth", event.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
              End month
            </span>
            <input
              type="month"
              value={filters.endMonth}
              min={filters.startMonth || months[0]}
              max={months.at(-1)}
              onChange={(event) => update("endMonth", event.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
            />
          </label>
          <SelectField
            label="Source field"
            value={filters.dimension}
            onChange={(value) => changeDimension(value as SourceDimension)}
          >
            <option value="customer">Customer source</option>
            <option value="subscription">Subscription source</option>
            <option value="lead">Lead source</option>
          </SelectField>
          <SelectField
            label={fieldLabel(filters.dimension)}
            value={filters.source}
            onChange={(value) => {
              update("source", value);
              update("subSource", "all");
            }}
          >
            <option value="all">All sources</option>
            {sources.map((source) => (
              <option key={source} value={source}>{source}</option>
            ))}
          </SelectField>
          <SelectField
            label="Sub-source"
            value={filters.subSource}
            onChange={(value) => update("subSource", value)}
          >
            <option value="all">All sub-sources</option>
            {subSources.map((source) => (
              <option key={source} value={source}>{source}</option>
            ))}
          </SelectField>
          <SelectField
            label="Sales attribution"
            value={filters.sales}
            onChange={(value) => update("sales", value as AttributionFilters["sales"])}
          >
            <option value="non-sales">Primary seller is not sales rep</option>
            <option value="no-sales-credit">No sales rep credited</option>
            <option value="all">All subscriptions</option>
          </SelectField>
          <SelectField
            label="Customer / subscription status"
            value={filters.status}
            onChange={(value) => update("status", value as AttributionFilters["status"])}
          >
            <option value="report-equivalent">Active customer + subscription</option>
            <option value="active-subscription">Active subscription</option>
            <option value="all">All statuses</option>
          </SelectField>
          <SelectField
            label="Online customer source"
            value={filters.online}
            onChange={(value) => update("online", value as AttributionFilters["online"])}
          >
            <option value="all">Include Online</option>
            <option value="online-only">Online only</option>
            <option value="exclude-online">Exclude Online</option>
          </SelectField>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Filtered ARR" value={currency.format(stats.arr)} detail="Annual recurring value" />
        <MetricCard label="Customers" value={wholeNumber.format(stats.customers)} detail="Unique FieldRoutes customers" />
        <MetricCard label="Subscriptions" value={wholeNumber.format(stats.subscriptions)} detail="Recurring subscriptions" />
        <MetricCard label="Active / Online ARR" value={`${currency.format(activeARR)} / ${currency.format(onlineARR)}`} detail="Active subscription ARR / Online customer-source ARR" />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.04)]">
          <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
            <h2 className="text-base font-semibold text-slate-950">Monthly ARR</h2>
            <p className="mt-1 text-xs text-slate-500">Based on subscription sold date</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-[11px] uppercase tracking-[0.12em] text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold sm:px-6">Month</th>
                  <th className="px-4 py-3 text-right font-semibold">Customers</th>
                  <th className="px-4 py-3 text-right font-semibold">Subs</th>
                  <th className="px-5 py-3 text-right font-semibold sm:px-6">ARR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {monthGroups.length ? monthGroups.map((group) => (
                  <tr key={group.label} className="text-slate-700">
                    <td className="px-5 py-4 font-medium text-slate-950 sm:px-6">{prettyMonth(group.label)}</td>
                    <td className="px-4 py-4 text-right tabular-nums">{wholeNumber.format(group.customers)}</td>
                    <td className="px-4 py-4 text-right tabular-nums">{wholeNumber.format(group.subscriptions)}</td>
                    <td className="px-5 py-4 text-right font-semibold tabular-nums text-slate-950 sm:px-6">{currency.format(group.arr)}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={4} className="px-6 py-12 text-center text-sm text-slate-500">No records match these filters.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.04)] sm:p-6">
          <div>
            <h2 className="text-base font-semibold text-slate-950">ARR by {fieldLabel(filters.dimension).toLowerCase()}</h2>
            <p className="mt-1 text-xs text-slate-500">Top sources in the current filter</p>
          </div>
          <div className="mt-6 space-y-5">
            {sourceGroups.slice(0, 10).map((group) => (
              <div key={group.label}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="truncate font-medium text-slate-700" title={group.label}>{group.label}</span>
                  <span className="shrink-0 font-semibold tabular-nums text-slate-950">{currency.format(group.arr)}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary-600 to-sky-400" style={{ width: `${Math.max((group.arr / maxSourceARR) * 100, 2)}%` }} />
                </div>
                <p className="mt-1.5 text-[11px] text-slate-400">{wholeNumber.format(group.customers)} customers · {wholeNumber.format(group.subscriptions)} subscriptions</p>
              </div>
            ))}
            {sourceGroups.length === 0 ? (
              <p className="py-12 text-center text-sm text-slate-500">No source data matches these filters.</p>
            ) : null}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-xs leading-5 text-slate-600">
        <strong className="font-semibold text-slate-800">Source-field note:</strong>{" "}
        Customer Source is the customer acquisition field used by the FieldRoutes Customer Report. Subscription Source and Lead Source are separate fields and can be blank or different. The Online filter always checks Customer Source so Online records are not silently missed.
      </section>
    </div>
  );
}
