import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import AttributionDashboard from "@/components/internal/AttributionDashboard";
import { isAllowedGoogleEmail } from "@/lib/auth-policy";
import { loadLatestSnapshot } from "@/lib/attribution/storage";

export const metadata: Metadata = {
  title: "Customer attribution | Neighbors Team",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default async function AttributionPage() {
  const session = await auth();
  if (
    !session?.user?.email ||
    !isAllowedGoogleEmail(session.user.email)
  ) {
    redirect("/team/sign-in");
  }

  let snapshot = null;
  try {
    snapshot = await loadLatestSnapshot();
  } catch (error) {
    console.error(
      "Unable to load attribution snapshot:",
      error instanceof Error ? error.message : "Unknown storage error",
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7f9] text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-5">
            <Image
              src="/images/logo-full.png"
              alt="Neighbors Pest Solutions"
              width={190}
              height={56}
              className="h-auto w-36 sm:w-40"
              priority
            />
            <div className="hidden h-8 w-px bg-slate-200 sm:block" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-950">
                Customer attribution
              </p>
              <p className="mt-0.5 hidden text-xs text-slate-500 sm:block">
                Private team dashboard
              </p>
            </div>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/team/sign-in" });
            }}
          >
            <button
              type="submit"
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-700">
              FieldRoutes reporting
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Attribution overview
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Customer ARR, acquisition channels, and first-year Online service revenue.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500 shadow-sm">
            {snapshot ? (
              <>
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Last synced{" "}
                <time dateTime={snapshot.metadata.generatedAt} className="font-semibold text-slate-700">
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                    timeZone: "America/Los_Angeles",
                  }).format(new Date(snapshot.metadata.generatedAt))}
                </time>
                <span className="ml-2 text-slate-400">· {snapshot.metadata.apiReadsUsed} API reads</span>
              </>
            ) : (
              <><span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />No snapshot yet</>
            )}
          </div>
        </div>

        <AttributionDashboard snapshot={snapshot} />
      </div>
    </main>
  );
}
