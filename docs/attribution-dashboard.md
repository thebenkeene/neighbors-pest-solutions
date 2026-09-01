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
sends `Authorization: Bearer <CRON_SECRET>`. This is 9:00 AM Pacific during
daylight time and 8:00 AM during standard time. The route refuses
unauthenticated requests and will not run twice on the same Los Angeles calendar
date after a final snapshot succeeds.

The sync:

- starts at `FIELDROUTES_HISTORY_START` (default `2026-01-01`);
- uses `subscription/search` with `includeData=1`;
- retrieves remaining subscriptions in 1,000-record batches;
- resolves credited employees and recurring-subscription customers in batches;
- aborts before exceeding a local 40-read cap, leaving at least 10 reads of the
  observed 50-read FieldRoutes daily allowance;
- spaces reads by at least 3,250 ms to remain below the observed 20-read-per-
  minute free-key limit;
- stores a private attribution checkpoint after the subscription/employee/
  customer join and before service-history work;
- carries previously minimized service history in the checkpoint, marks service
  history incomplete, and permits a same-day retry;
- refreshes recent completed services and incrementally backfills older 14-day
  windows while the read budget remains; and
- stores the final immutable private snapshot before updating
  `attribution/latest.json`.

If FieldRoutes rejects the first subscription read, no new data exists to
checkpoint and the prior snapshot remains unchanged. Do not retry a daily-limit
failure until the next reset; FieldRoutes does not publicly document the
free-key reset timezone.

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
- **Channel precedence** is Sales Team first when primary `soldBy` is employee
  type 2, Referral second for configured referral/truck/flyer labels, and Online
  for every remaining non-sales record.
- **Online** is an operational remainder bucket, not proof of SEO. It can include
  blank, Unknown Source, Conditions, and other unmapped non-sales labels.
- **Online detail** uses Customer Sub-Source for Google, Facebook, or Yelp and
  labels everything else Unknown.
- **Customer Source** remains separate from Subscription Source and Lead Source;
  always state which entity's field is being reported.

The page defaults to April–July 2026 when those months exist in the snapshot,
with active customer plus active subscription. All time is a reversible toggle:
selecting it hides the month inputs and makes every dashboard calculation use
the earliest through latest month in the available snapshot. Selecting it again
restores the prior custom range and its month inputs.

## Vercel deployment protection

Vercel cron invokes the generated production `*.vercel.app` hostname, not only
the custom domain. Project SSO protection must be limited to preview deployments.
If production is intercepted, the cron receives a 302 to Vercel login before it
reaches this route. An unauthenticated request to the generated production sync
URL should reach the app and return `401 Unauthorized`.

The dashboard itself remains protected by exact-email Google OAuth. Preview
deployments can remain protected by Vercel SSO.

## Troubleshooting order

1. Check the dashboard's Last synced timestamp and whether the latest snapshot
   is a checkpoint.
2. Confirm the production deployment is READY and aliased to the custom domain.
3. Confirm the cron remains registered from `vercel.json`.
4. Inspect production logs for app-level 401/503, daily-limit, per-minute-limit,
   or Blob errors.
5. Do not trigger more than one manual sync unless the FieldRoutes daily budget
   is known to be available.

## Local verification

```bash
npm test
npm run lint
npm run build
```

The dashboard needs valid Google OAuth variables to sign in and a private Blob
snapshot to display live data. Do not place production credentials in tracked
files; use `.env.local` locally and Vercel environment variables in deployment.
