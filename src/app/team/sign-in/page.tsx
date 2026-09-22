import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { isAllowedGoogleEmail } from "@/lib/auth-policy";

export const metadata: Metadata = {
  title: "Team sign in",
  robots: { index: false, follow: false },
};

export default async function TeamSignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await auth();
  if (
    session?.user?.email &&
    isAllowedGoogleEmail(session.user.email)
  ) {
    redirect("/team/attribution");
  }
  const { error } = await searchParams;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f3f6f9] px-5 py-12">
      <div className="absolute -left-24 top-[-8rem] h-80 w-80 rounded-full bg-primary-100/70 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <section className="relative w-full max-w-md rounded-3xl border border-white bg-white/95 p-8 shadow-[0_24px_80px_rgba(15,35,55,0.12)] sm:p-10">
        <Image
          src="/images/logo-full.png"
          alt="Neighbors Pest Solutions"
          width={230}
          height={68}
          className="h-auto w-52"
          priority
        />
        <div className="mt-9">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-700">
            Internal reporting
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Customer attribution
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Sign in with your Neighbors Google account to view the
            private FieldRoutes dashboard.
          </p>
        </div>

        {error ? (
          <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            This Google account is not authorized. Use a verified
            @neighborspestsolutions.com account.
          </p>
        ) : null}

        <form
          className="mt-8"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/team/attribution" });
          }}
        >
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.6h3.3c1.9-1.8 2.9-4.4 2.9-7.5Z" />
              <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4L15.4 17c-.9.6-2.1 1-3.4 1-2.6 0-4.9-1.8-5.7-4.2H2.9v2.7A10 10 0 0 0 12 22Z" />
              <path fill="#FBBC05" d="M6.3 13.8A6 6 0 0 1 6 12c0-.6.1-1.2.3-1.8V7.5H2.9A10 10 0 0 0 2 12c0 1.6.4 3.1 1 4.5l3.3-2.7Z" />
              <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.9 1.5l2.9-2.8A9.8 9.8 0 0 0 12 2a10 10 0 0 0-9.1 5.5l3.4 2.7C7.1 7.8 9.4 6 12 6Z" />
            </svg>
            Continue with Google
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400">
          Access is limited to verified @neighborspestsolutions.com accounts
        </p>
      </section>
    </main>
  );
}
