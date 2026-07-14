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

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress page URLs
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/get-a-quote", destination: "/contact", permanent: true },
      // Old plural-pest service slugs (e.g. /services/cockroaches)
      ...OLD_SERVICE_SLUGS.map(([oldSlug, newSlug]) => ({
        source: `/services/${oldSlug}`,
        destination: `/services/${newSlug}`,
        permanent: true,
      })),
      // Old "-san-diego"-suffixed slugs (e.g. /services/ant-control-san-diego)
      ...CURRENT_SERVICE_SLUGS.map((slug) => ({
        source: `/services/${slug}-san-diego`,
        destination: `/services/${slug}`,
        permanent: true,
      })),
    ];
  },
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
