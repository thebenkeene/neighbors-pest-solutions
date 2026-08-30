import { NextResponse } from "next/server";
import { loadLatestSnapshot, saveSnapshot, dateInLosAngeles } from "@/lib/attribution/storage";
import { FieldRoutesClient, MAX_FIELDROUTES_READS } from "@/lib/fieldroutes/client";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

function tomorrowInLosAngeles(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  const result = new Date(Date.UTC(year, month - 1, day + 1));
  return result.toISOString().slice(0, 10);
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return NextResponse.json(
      { ok: false, error: "Cron authentication is not configured" },
      { status: 503 },
    );
  }
  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const latest = await loadLatestSnapshot();
    const today = dateInLosAngeles(new Date());
    if (
      latest &&
      dateInLosAngeles(latest.metadata.generatedAt) === today &&
      latest.metadata.attributionCheckpoint !== true
    ) {
      return NextResponse.json({
        ok: true,
        status: "already-current",
        generatedAt: latest.metadata.generatedAt,
        apiReadsUsed: 0,
      });
    }

    const startInclusive = process.env.FIELDROUTES_HISTORY_START || "2026-01-01";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(startInclusive)) {
      throw new Error("FIELDROUTES_HISTORY_START must use YYYY-MM-DD");
    }
    const client = new FieldRoutesClient({ maxReads: MAX_FIELDROUTES_READS });
    const snapshot = await client.createSnapshot(
      startInclusive,
      tomorrowInLosAngeles(),
      latest,
      async (checkpoint) => {
        await saveSnapshot(checkpoint);
      },
    );
    await saveSnapshot(snapshot);

    return NextResponse.json({
      ok: true,
      status: "synced",
      generatedAt: snapshot.metadata.generatedAt,
      apiReadsUsed: snapshot.metadata.apiReadsUsed,
      recurringRecords: snapshot.metadata.recurringRecords,
      serviceRecords: snapshot.metadata.serviceRecords,
      serviceHistoryStartInclusive:
        snapshot.metadata.serviceHistoryStartInclusive,
      serviceHistoryComplete: snapshot.metadata.serviceHistoryComplete,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sync failed";
    console.error("FieldRoutes attribution sync failed:", message);
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 },
    );
  }
}
