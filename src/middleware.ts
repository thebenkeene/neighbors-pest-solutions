import { NextRequest, NextResponse } from "next/server";

const VALID_PATH_PREFIXES = [
  "/services",
  "/service-areas",
  "/blog",
  "/api",
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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (VALID_EXACT_PATHS.has(pathname)) return NextResponse.next();
  if (VALID_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  return goneResponse();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml).*)",
  ],
};
