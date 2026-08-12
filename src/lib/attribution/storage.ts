import "server-only";
import { get, put } from "@vercel/blob";
import type { AttributionSnapshot } from "./types";

const LATEST_PATH = "attribution/latest.json";

interface LatestPointer {
  version: 1;
  snapshotPath: string;
  generatedAt: string;
}

async function readJson<T>(pathname: string): Promise<T | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  const result = await get(pathname, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200 || !result.stream) return null;
  return (await new Response(result.stream).json()) as T;
}

export async function loadLatestSnapshot(): Promise<AttributionSnapshot | null> {
  const pointer = await readJson<LatestPointer>(LATEST_PATH);
  if (!pointer?.snapshotPath) return null;
  return readJson<AttributionSnapshot>(pointer.snapshotPath);
}

export async function saveSnapshot(
  snapshot: AttributionSnapshot,
): Promise<string> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Private Blob storage is not configured");
  }
  const safeTimestamp = snapshot.metadata.generatedAt.replace(/[:.]/g, "-");
  const snapshotPath = `attribution/snapshots/${safeTimestamp}.json`;
  await put(snapshotPath, JSON.stringify(snapshot), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: false,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });
  const pointer: LatestPointer = {
    version: 1,
    snapshotPath,
    generatedAt: snapshot.metadata.generatedAt,
  };
  await put(LATEST_PATH, JSON.stringify(pointer), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });
  return snapshotPath;
}

export function dateInLosAngeles(value: string | Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(typeof value === "string" ? new Date(value) : value);
}
