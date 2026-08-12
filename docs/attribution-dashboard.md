# Internal attribution dashboard

The private team dashboard lives at `/team/attribution`. It is intentionally
absent from public navigation and the sitemap, and `/team/` is blocked in
`robots.txt` and marked `noindex`. Authentication, rather than the hidden URL,
is the access control.

## One-time setup

1. In Google Cloud, create a Web application OAuth client. Add these authorized
   redirect URLs (use the actual production and preview hosts):

   - `https://neighborspestsolutions.com/api/auth/callback/google`
   - `https://<preview-host>/api/auth/callback/google`

2. In Vercel, create and connect a **private** Blob store to the website.
3. Add every variable from `.env.example` to the appropriate Vercel environments.
   Generate separate long random values for `AUTH_SECRET` and `CRON_SECRET`.
4. Confirm `ALLOWED_GOOGLE_EMAIL` is exactly
   `team@neighborspestsolutions.com`.

Auth.js accepts only a Google profile with that exact normalized email and
`email_verified: true`. Sessions use signed JWTs, expire after eight hours, and
do not require a user database.

## Daily sync

Vercel calls `GET /api/internal/fieldroutes-sync` every day at 16:00 UTC and
sends `Authorization: Bearer <CRON_SECRET>`. The route refuses unauthenticated
requests and will not run twice on the same Los Angeles calendar date.

The sync:

- starts at `FIELDROUTES_HISTORY_START` (default `2026-01-01`);
- uses `subscription/search` with `includeData=1`;
- retrieves remaining subscriptions in 1,000-record batches;
- resolves credited employees and recurring-subscription customers in batches;
- aborts before exceeding a local 40-read cap, leaving at least 10 reads of the
  observed 50-read FieldRoutes daily allowance;
- writes nothing if retrieval fails or would exceed the cap;
- stores an immutable private snapshot and then updates
  `attribution/latest.json` only after the snapshot succeeds.

The stored record is deliberately minimized. It contains internal numeric IDs,
sold date, recurring value, status flags, seller category, and attribution
labels. It does **not** contain names, addresses, phone numbers, emails, payment
details, or credentials.

## Reporting definitions

- **ARR** is `subscription.annualRecurringValue`; `contractValue` is not used.
- **Primary seller is not sales rep** means the `soldBy` employee is not type 2.
- **No sales rep credited** is the conservative option: none of `soldBy`,
  `soldBy2`, or `soldBy3` resolves to employee type 2.
- **Active customer + subscription** matches the Customer Report-style cut.
- **Customer Source** is the customer acquisition field. It is separate from
  Subscription Source and Lead Source. The Online filter always uses Customer
  Source, even while viewing another source dimension.

The page defaults to April–July 2026 when those months exist in the snapshot,
primary non-sales-rep attribution, and active customer plus active subscription.

## Local verification

```bash
npm test
npm run lint
npm run build
```

The dashboard needs valid Google OAuth variables to sign in and a private Blob
snapshot to display live data. Do not place production credentials in tracked
files; use `.env.local` locally and Vercel environment variables in deployment.
