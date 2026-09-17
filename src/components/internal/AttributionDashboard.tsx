"use client";

import { useMemo, useState } from "react";
import {
  eligibleOnlineServices,
  filterRecords,
  groupByChannel,
  groupByMonth,
  groupByOnlineSources,
  groupServicesByMonth,
  resolveReportingRange,
  summarize,
  summarizeServices,
} from "@/lib/attribution/aggregate";
import type {
  AttributionChannel,
  AttributionChannelFilter,
  AttributionGroup,
  AttributionSnapshot,
  ServiceGroup,
} from "@/lib/attribution/types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const wholeNumber = new Intl.NumberFormat("en-US");

const CHANNELS: Array<{
  id: AttributionChannel;
  label: string;
  detail: string;
  color: string;
  soft: string;
}> = [
  {
    id: "sales-team",
    label: "Sales Team",
    detail: "Sold by a FieldRoutes sales rep",
    color: "#1e3a8a",
    soft: "#eff6ff",
  },
  {
    id: "online",
    label: "Online",
    detail: "Online",
    color: "#5b9bd5",
    soft: "#dbeafe",
  },
  {
    id: "referral",
    label: "Referral",
    detail: "Referral, truck sighting, and flyer",
    color: "#3b82f6",
    soft: "#eff6ff",
  },
];

const NEIGHBORS = {
  logoBlue: "#5b9bd5",
  primaryBlue: "#3b82f6",
  deepBlue: "#1e3a8a",
  dark: "#111111",
  paleBlue: "#eff6ff",
  lightBlue: "#dbeafe",
} as const;

function prettyMonth(value: string): string {
  if (!value) return "Unknown";
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

function prettyRange(startMonth: string, endMonth: string): string {
  if (!startMonth || !endMonth) return "Selected period";
  if (startMonth === endMonth) return prettyMonth(startMonth);
  return `${prettyMonth(startMonth)} – ${prettyMonth(endMonth)}`;
}

function nextMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month, 1)).toISOString().slice(0, 7);
}

function serviceCoverageComplete(
  snapshot: AttributionSnapshot,
  startMonth: string,
  endMonth: string,
): boolean {
  const coverageStart = snapshot.metadata.serviceHistoryStartInclusive;
  const coverageEnd = snapshot.metadata.serviceHistoryEndExclusive;
  if (!coverageStart || !coverageEnd || !startMonth || !endMonth) return false;
  return coverageStart <= `${startMonth}-01` && coverageEnd >= `${nextMonth(endMonth)}-01`;
}

function ChannelGlyph({ channel }: { channel: AttributionChannel }) {
  if (channel === "sales-team") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1.5a2.5 2.5 0 1 0 0-5m-12 14v-1.1A4.4 4.4 0 0 1 7.9 13h1.2a4.4 4.4 0 0 1 4.4 4.4v1.1m1-5.4h.8a4.2 4.2 0 0 1 4.2 4.2v1.2" />
      </svg>
    );
  }
  if (channel === "referral") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8 12 2.3 2.3a2.4 2.4 0 0 0 3.4 0L18 10m-8 1 2.3-2.3a2.4 2.4 0 0 1 3.4 0l.8.8m-7.8 5.8-.8.8a2.4 2.4 0 0 1-3.4-3.4L8 9.2a2.4 2.4 0 0 1 3.4 0l.6.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5 12 4l8 6.5M6.5 9v10h11V9M10 19v-5h4v5" />
      <path strokeLinecap="round" d="M18.5 5.5h.01" />
    </svg>
  );
}

function MetricCard({
  label,
  value,
  detail,
  accent = NEIGHBORS.logoBlue,
}: {
  label: string;
  value: string;
  detail: string;
  accent?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
      <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: accent }} />
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
    </div>
  );
}

function ChannelCard({
  channel,
  group,
  totalARR,
  selected,
  onClick,
}: {
  channel: (typeof CHANNELS)[number];
  group?: AttributionGroup;
  totalARR: number;
  selected: boolean;
  onClick: () => void;
}) {
  const share = totalARR ? ((group?.arr ?? 0) / totalARR) * 100 : 0;
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`group rounded-2xl border p-5 text-left transition-all ${
        selected
          ? "-translate-y-0.5 border-transparent shadow-[0_14px_35px_rgba(15,23,42,0.12)]"
          : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
      }`}
      style={selected ? { backgroundColor: channel.soft } : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: channel.soft, color: channel.color }}
        >
          <ChannelGlyph channel={channel.id} />
        </span>
        <span className="text-xs font-bold tabular-nums" style={{ color: channel.color }}>
          {share.toFixed(1)}%
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-700">{channel.label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{currency.format(group?.arr ?? 0)}</p>
      <p className="mt-2 text-xs text-slate-500">
        {wholeNumber.format(group?.customers ?? 0)} customers · {channel.detail}
      </p>
    </button>
  );
}

function AreaTrendChart({ groups }: { groups: AttributionGroup[] }) {
  if (!groups.length) {
    return <p className="py-20 text-center text-sm text-slate-500">No ARR in this date range.</p>;
  }
  const width = 720;
  const height = 270;
  const left = 20;
  const right = 20;
  const top = 22;
  const bottom = 44;
  const chartWidth = width - left - right;
  const chartHeight = height - top - bottom;
  const max = Math.max(...groups.map((group) => group.arr), 1);
  const x = (index: number) =>
    groups.length === 1
      ? left + chartWidth / 2
      : left + (index / (groups.length - 1)) * chartWidth;
  const y = (value: number) => top + chartHeight - (value / max) * chartHeight;
  const line = groups
    .map((group, index) => `${index ? "L" : "M"}${x(index)},${y(group.arr)}`)
    .join(" ");
  const area = `M${x(0)},${top + chartHeight} ${groups
    .map((group, index) => `L${x(index)},${y(group.arr)}`)
    .join(" ")} L${x(groups.length - 1)},${top + chartHeight} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Monthly ARR trend" className="mt-4 h-auto w-full overflow-visible">
      <defs>
        <linearGradient id="neighbors-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={NEIGHBORS.logoBlue} stopOpacity="0.3" />
          <stop offset="100%" stopColor={NEIGHBORS.logoBlue} stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="neighbors-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={NEIGHBORS.deepBlue} />
          <stop offset="52%" stopColor={NEIGHBORS.primaryBlue} />
          <stop offset="100%" stopColor={NEIGHBORS.logoBlue} />
        </linearGradient>
      </defs>
      {[0, 0.33, 0.66, 1].map((step) => (
        <line key={step} x1={left} x2={width - right} y1={top + chartHeight * step} y2={top + chartHeight * step} stroke="#e8eef2" strokeWidth="1" />
      ))}
      <path d={area} fill="url(#neighbors-area)" />
      <path d={line} fill="none" stroke="url(#neighbors-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {groups.map((group, index) => (
        <g key={group.label}>
          <circle cx={x(index)} cy={y(group.arr)} r="5" fill="white" stroke={NEIGHBORS.logoBlue} strokeWidth="3" />
          <text x={x(index)} y={height - 14} textAnchor="middle" fontSize="12" fill="#64748b">
            {prettyMonth(group.label).replace(" ", " ’").replace(/20(?=\d{2}$)/, "")}
          </text>
        </g>
      ))}
    </svg>
  );
}

function AttributionDonut({ groups }: { groups: AttributionGroup[] }) {
  const values = CHANNELS.map((channel) => ({
    ...channel,
    value: groups.find((group) => group.label === channel.id)?.arr ?? 0,
  }));
  const total = values.reduce((sum, item) => sum + item.value, 0);
  let cursor = 0;
  const segments = values.map((item) => {
    const start = cursor;
    cursor += total ? (item.value / total) * 100 : 0;
    return `${item.color} ${start}% ${cursor}%`;
  });

  return (
    <div className="grid items-center gap-7 sm:grid-cols-[180px_1fr]">
      <div
        className="relative mx-auto h-44 w-44 rounded-full"
        style={{ background: total ? `conic-gradient(${segments.join(",")})` : "#e8eef2" }}
      >
        <div className="absolute inset-7 flex flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Total ARR</span>
          <span className="mt-1 text-xl font-semibold text-slate-950">{currency.format(total)}</span>
        </div>
      </div>
      <div className="space-y-4">
        {values.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-4 text-sm">
            <span className="flex items-center gap-2.5 font-medium text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
            <span className="font-semibold tabular-nums text-slate-950">
              {total ? `${((item.value / total) * 100).toFixed(1)}%` : "0%"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceRevenueChart({ groups }: { groups: ServiceGroup[] }) {
  const max = Math.max(...groups.map((group) => group.commissionRevenue), 1);
  if (!groups.length) {
    return <p className="py-12 text-center text-sm text-slate-500">Service revenue will appear as history is synced.</p>;
  }
  return (
    <div className="mt-6 flex h-52 items-end gap-3">
      {groups.map((group) => (
        <div key={group.label} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2">
          <span className="text-[11px] font-semibold tabular-nums text-slate-700">{currency.format(group.commissionRevenue)}</span>
          <div className="relative flex h-36 w-full items-end overflow-hidden rounded-xl bg-blue-50">
            <div
              className="w-full rounded-xl transition-all"
              style={{
                height: `${Math.max((group.commissionRevenue / max) * 100, 4)}%`,
                background: `linear-gradient(to top, ${NEIGHBORS.deepBlue}, ${NEIGHBORS.primaryBlue}, ${NEIGHBORS.logoBlue})`,
              }}
            />
          </div>
          <span className="truncate text-[11px] text-slate-500">{prettyMonth(group.label)}</span>
        </div>
      ))}
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
      <h2 className="mt-5 text-xl font-semibold text-slate-950">Waiting for the first daily sync</h2>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">The daily FieldRoutes snapshot will populate this dashboard automatically.</p>
    </section>
  );
}

export default function AttributionDashboard({ snapshot }: { snapshot: AttributionSnapshot | null }) {
  const records = useMemo(() => snapshot?.records ?? [], [snapshot]);
  const months = useMemo(
    () => [...new Set(records.map((record) => record.soldDate.slice(0, 7)))].filter(Boolean).sort(),
    [records],
  );
  const firstMonth = months.includes("2026-04") ? "2026-04" : (months[0] ?? "");
  const lastMonth = months.includes("2026-07") ? "2026-07" : (months.at(-1) ?? "");
  const [startMonth, setStartMonth] = useState(firstMonth);
  const [endMonth, setEndMonth] = useState(lastMonth);
  const [channel, setChannel] = useState<AttributionChannelFilter>("all");
  const [allTimeSelected, setAllTimeSelected] = useState(false);
  const reportingRange = useMemo(
    () => resolveReportingRange(months, startMonth, endMonth, allTimeSelected),
    [months, startMonth, endMonth, allTimeSelected],
  );
  const effectiveStartMonth = reportingRange.startMonth;
  const effectiveEndMonth = reportingRange.endMonth;

  const rangeRecords = useMemo(
    () => filterRecords(records, { startMonth: effectiveStartMonth, endMonth: effectiveEndMonth, channel: "all" }),
    [records, effectiveStartMonth, effectiveEndMonth],
  );
  const filteredRecords = useMemo(
    () => filterRecords(records, { startMonth: effectiveStartMonth, endMonth: effectiveEndMonth, channel }),
    [records, effectiveStartMonth, effectiveEndMonth, channel],
  );
  const stats = useMemo(() => summarize(filteredRecords), [filteredRecords]);
  const totalStats = useMemo(() => summarize(rangeRecords), [rangeRecords]);
  const monthGroups = useMemo(() => groupByMonth(filteredRecords), [filteredRecords]);
  const channelGroups = useMemo(() => groupByChannel(rangeRecords), [rangeRecords]);
  const onlineGroups = useMemo(() => groupByOnlineSources(rangeRecords), [rangeRecords]);
  const eligibleServices = useMemo(
    () => eligibleOnlineServices(snapshot?.services ?? [], records, effectiveStartMonth, effectiveEndMonth),
    [snapshot?.services, records, effectiveStartMonth, effectiveEndMonth],
  );
  const serviceStats = useMemo(() => summarizeServices(eligibleServices), [eligibleServices]);
  const serviceMonthGroups = useMemo(() => groupServicesByMonth(eligibleServices), [eligibleServices]);
  const serviceComplete = snapshot ? serviceCoverageComplete(snapshot, effectiveStartMonth, effectiveEndMonth) : false;
  const maxOnlineARR = Math.max(...onlineGroups.map((group) => group.arr), 1);

  function reset() {
    setStartMonth(firstMonth);
    setEndMonth(lastMonth);
    setChannel("all");
    setAllTimeSelected(false);
  }

  function toggleAllTime() {
    setAllTimeSelected((selected) => !selected);
  }

  if (!snapshot || records.length === 0) return <EmptyState />;

  const selectedLabel =
    channel === "all" ? "All attribution" : CHANNELS.find((item) => item.id === channel)?.label ?? "Attribution";

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#5b9bd5] px-6 py-7 text-white shadow-[0_18px_55px_rgba(30,58,138,0.22)] sm:px-8">
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-100">Neighbors growth view</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">See how every new neighbor found us.</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-blue-50/80">ARR, acquisition mix, and first-year Online service commission in one simple view.</p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 520 180" className="pointer-events-none absolute -bottom-5 right-0 h-44 w-auto opacity-25 sm:opacity-40">
          <path d="M20 143V88l55-43 55 43v55M108 143V106l55-43 55 43v37M205 143V78l70-54 70 54v65M332 143V99l55-42 55 42v44M425 143v-28l36-28 36 28v28" fill="none" stroke="white" strokeWidth="5" strokeLinejoin="round" />
          <path d="M60 143v-30h30v30m94 0v-24h25v24m56 0v-37h35v37m72 0v-25h27v25m54 0v-18h19v18M0 144h520" fill="none" stroke="white" strokeWidth="4" />
          <circle cx="465" cy="35" r="15" fill="#ffffff" fillOpacity="0.82" />
        </svg>
      </section>

      <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.04)] sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Reporting range</h2>
            <p className="mt-1 text-xs text-slate-500">Both the start and end month are included.</p>
          </div>
          <button type="button" onClick={reset} className="self-start rounded-lg px-3 py-2 text-xs font-semibold text-primary-700 transition hover:bg-primary-50">Reset view</button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Quick reporting ranges">
          <button
            type="button"
            aria-pressed={allTimeSelected}
            onClick={toggleAllTime}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              allTimeSelected
                ? "bg-primary-800 text-white shadow-sm"
                : "border border-primary-200 bg-primary-50 text-primary-800 hover:bg-primary-100"
            }`}
          >
            All time
          </button>
          <span className="self-center text-xs text-slate-500">
            {allTimeSelected ? `All available history · ${prettyRange(effectiveStartMonth, effectiveEndMonth)}` : `Custom range · ${prettyRange(effectiveStartMonth, effectiveEndMonth)}`}
          </span>
        </div>
        {!allTimeSelected ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">Start month</span>
              <input type="month" value={startMonth} min={months[0]} max={endMonth || months.at(-1)} onChange={(event) => setStartMonth(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100" />
            </label>
            <label className="block">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">End month</span>
              <input type="month" value={endMonth} min={startMonth || months[0]} max={months.at(-1)} onChange={(event) => setEndMonth(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-100" />
            </label>
          </div>
        ) : null}
      </section>

      <section className="overflow-hidden rounded-3xl border border-primary-200/70 bg-gradient-to-br from-primary-50 via-white to-primary-100/60 p-5 shadow-[0_10px_40px_rgba(30,58,138,0.07)] sm:p-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-800">Period totals</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">{prettyRange(effectiveStartMonth, effectiveEndMonth)}</h2>
          </div>
          <p className="text-xs text-slate-500">Active customers and recurring subscriptions</p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Total ARR</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{currency.format(totalStats.arr)}</p>
          </div>
          <div className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Customers</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{wholeNumber.format(totalStats.customers)}</p>
          </div>
          <div className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Subscriptions</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{wholeNumber.format(totalStats.subscriptions)}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Choose an attribution view</h2>
            <p className="mt-1 text-xs text-slate-500">Click a card to focus the full dashboard. Click it again to return to all.</p>
          </div>
          {channel !== "all" ? (
            <button type="button" onClick={() => setChannel("all")} className="self-start text-xs font-semibold text-primary-700 hover:text-primary-900">Show all attribution</button>
          ) : null}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {CHANNELS.map((item) => (
            <ChannelCard
              key={item.id}
              channel={item}
              group={channelGroups.find((group) => group.label === item.id)}
              totalARR={totalStats.arr}
              selected={channel === item.id}
              onClick={() => setChannel((current) => (current === item.id ? "all" : item.id))}
            />
          ))}
        </div>
      </section>

      {channel === "online" ? (
        <section className="rounded-3xl border border-primary-200/70 bg-gradient-to-br from-primary-50 to-white p-5 shadow-[0_8px_40px_rgba(30,58,138,0.07)] sm:p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-700">Inside Online</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-950">Online attribution breakdown</h2>
            </div>
            <p className="max-w-md text-xs leading-5 text-slate-500">Customer Source shows the recorded acquisition label. Customer Sub-Source adds detail when FieldRoutes has it.</p>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {onlineGroups.map((group) => (
              <div key={JSON.stringify([group.customerSource, group.customerSubSource])} className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Customer Source</p>
                    <p className="mt-1 font-semibold text-slate-800">{group.customerSource}</p>
                  </div>
                  <span className="font-semibold tabular-nums text-slate-950">{currency.format(group.arr)}</span>
                </div>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Customer Sub-Source</p>
                <p className="mt-1 text-sm text-slate-700">{group.customerSubSource}</p>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full" style={{ width: `${Math.max((group.arr / maxOnlineARR) * 100, 2)}%`, backgroundColor: NEIGHBORS.logoBlue }} />
                </div>
                <p className="mt-2 text-[11px] text-slate-500">{wholeNumber.format(group.customers)} customers · {wholeNumber.format(group.subscriptions)} subscriptions</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Unmarked and Unspecified mean the respective fields were blank or N/A. Online remains the non-sales, non-referral reporting category.</p>
        </section>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label={`${selectedLabel} ARR`} value={currency.format(stats.arr)} detail="Annual recurring value on active customers and subscriptions" accent={NEIGHBORS.logoBlue} />
        <MetricCard label="Customers" value={wholeNumber.format(stats.customers)} detail="Unique customers in the selected view" accent={NEIGHBORS.deepBlue} />
        <MetricCard label="Subscriptions" value={wholeNumber.format(stats.subscriptions)} detail="Recurring subscriptions sold in the range" accent={NEIGHBORS.primaryBlue} />
        <MetricCard label="Average ARR" value={currency.format(stats.customers ? stats.arr / stats.customers : 0)} detail="ARR per unique customer" accent={NEIGHBORS.dark} />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.04)] sm:p-6">
          <div>
            <h2 className="text-base font-semibold text-slate-950">ARR trend</h2>
            <p className="mt-1 text-xs text-slate-500">{selectedLabel}, based on subscription sold month</p>
          </div>
          <AreaTrendChart groups={monthGroups} />
        </section>
        <section className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.04)] sm:p-6">
          <div className="mb-7">
            <h2 className="text-base font-semibold text-slate-950">Attribution mix</h2>
            <p className="mt-1 text-xs text-slate-500">Share of ARR across the full selected range</p>
          </div>
          <AttributionDonut groups={channelGroups} />
        </section>
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.04)]">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-end sm:px-6">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Monthly ARR detail</h2>
            <p className="mt-1 text-xs text-slate-500">Active customer and subscription totals</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/80 text-[11px] uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-5 py-3 font-semibold sm:px-6">Month</th>
                <th className="px-4 py-3 text-right font-semibold">Customers</th>
                <th className="px-4 py-3 text-right font-semibold">Subscriptions</th>
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
                <tr><td colSpan={4} className="px-6 py-12 text-center text-sm text-slate-500">No records match this view.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-primary-200/70 bg-white p-5 shadow-[0_10px_45px_rgba(30,58,138,0.08)] sm:p-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17 9 12l3 3 7-8m-4 0h4v4" /></svg>
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-700">Commission view</p>
                <h2 className="text-lg font-semibold text-slate-950">First-year Online services</h2>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-500">Completed Online appointments inside the customer’s first year. Revenue uses FieldRoutes production value, falling back to invoice subtotal when instructed by FieldRoutes.</p>
          </div>
          <div className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${serviceComplete ? "bg-primary-100 text-primary-800" : "bg-primary-50 text-primary-800"}`}>
            {serviceComplete ? "Updated daily" : "Service totals will appear when ready"}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MetricCard label="Completed services" value={serviceComplete ? wholeNumber.format(serviceStats.services) : "—"} detail="Commission-eligible Online visits" accent={NEIGHBORS.logoBlue} />
          <MetricCard label="Customers serviced" value={serviceComplete ? wholeNumber.format(serviceStats.customers) : "—"} detail="Unique first-year Online customers" accent={NEIGHBORS.primaryBlue} />
          <MetricCard label="Commission revenue" value={serviceComplete ? currency.format(serviceStats.commissionRevenue) : "—"} detail="Production value before tax" accent={NEIGHBORS.dark} />
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 sm:p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Online service revenue by month</h3>
              <p className="mt-1 text-xs text-slate-500">Only months with completed, first-year services</p>
            </div>
          </div>
          <ServiceRevenueChart groups={serviceComplete ? serviceMonthGroups : []} />
        </div>
      </section>
    </div>
  );
}
