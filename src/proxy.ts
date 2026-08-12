import { NextRequest, NextResponse } from "next/server";

// ⚠️ FOOTGUN: any NEW top-level route must be added to VALID_PATH_PREFIXES
// or VALID_EXACT_PATHS below, or it will silently return 410 Gone in
// production. Routes under /services, /service-areas, /blog and /api are
// covered automatically.
const VALID_PATH_PREFIXES = [
  "/services",
  "/service-areas",
  "/blog",
  "/api",
  "/team",
];

const VALID_EXACT_PATHS = new Set([
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
]);

function goneResponse() {
  return new NextResponse(
    '<html><head><meta name="robots" content="noindex, nofollow"></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>',
    {
      status: 410,
      headers: {
        "Content-Type": "text/html",
        "X-Robots-Tag": "noindex, nofollow",
      },
    }
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  if (
    VALID_EXACT_PATHS.has(pathname) ||
    VALID_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  ) {
    if (host.endsWith(".vercel.app") || pathname.startsWith("/team")) {
      const response = NextResponse.next();
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
      return response;
    }
    return NextResponse.next();
  }

  return goneResponse();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.png|icon.png|apple-icon.png|images|robots.txt|sitemap.xml).*)",
  ],
};
