import type { NextConfig } from "next";

// Old WordPress-era service slugs → current slugs.
// These pages earned rankings/links before the Feb 2026 rebuild;
// 301s recover that equity instead of serving 404/410.
const OLD_SERVICE_SLUGS: Array<[string, string]> = [
  ["ants", "ant-control"],
  ["bed-bugs", "bed-bug-control"],
  ["beetles", "beetle-control"],
  ["carpenter-ants", "carpenter-ant-control"],
  ["centipedes-millipedes", "centipede-millipede-control"],
  ["cockroaches", "cockroach-control"],
  ["crickets", "cricket-control"],
  ["earwigs", "earwig-control"],
  ["fleas", "flea-control"],
  ["flies", "fly-control"],
  ["mosquitoes", "mosquito-control"],
  ["moths", "moth-control"],
  ["rodents", "rodent-control"],
  ["silverfish", "silverfish-control"],
  ["spiders", "spider-control"],
  ["stinging-pests", "stinging-pest-control"],
  ["stink-bugs", "stink-bug-control"],
  ["ticks", "tick-control"],
];

const CURRENT_SERVICE_SLUGS = [
  "ant-control", "bed-bug-control", "beetle-control", "carpenter-ant-control",
  "centipede-millipede-control", "cockroach-control", "cricket-control",
  "earwig-control", "flea-control", "fly-control", "mosquito-control",
  "moth-control", "rodent-control", "silverfish-control", "spider-control",
  "stinging-pest-control", "stink-bug-control", "tick-control",
];

// Match legacy URLs with or without a trailing slash before applying the
// site's general slash canonicalization. Otherwise a slash variant takes one
// redirect to remove the slash and a second redirect to reach the new page.
function permanentRedirectVariants(source: string, destination: string) {
  return [
    { source, destination, permanent: true },
    { source: `${source}/`, destination, permanent: true },
  ];
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress page URLs
      ...permanentRedirectVariants("/about-us", "/about"),
      ...permanentRedirectVariants("/contact-us", "/contact"),
      ...permanentRedirectVariants("/get-a-quote", "/contact"),
      // Old plural-pest service slugs (e.g. /services/cockroaches)
      ...OLD_SERVICE_SLUGS.flatMap(([oldSlug, newSlug]) =>
        permanentRedirectVariants(
          `/services/${oldSlug}`,
          `/services/${newSlug}`
        )
      ),
      // Old "-san-diego"-suffixed slugs (e.g. /services/ant-control-san-diego)
      ...CURRENT_SERVICE_SLUGS.flatMap((slug) =>
        permanentRedirectVariants(
          `/services/${slug}-san-diego`,
          `/services/${slug}`
        )
      ),
      // Preserve the site's no-trailing-slash canonical policy for every
      // other route after the more-specific legacy mappings above.
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },
  // We define slash handling above so legacy slash variants can skip an
  // otherwise unavoidable intermediate redirect.
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
  },
  // Enable compression
  compress: true,
  // Power by header removal
  poweredByHeader: false,
};

export default nextConfig;
