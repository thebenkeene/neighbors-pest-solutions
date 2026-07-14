import { MetadataRoute } from "next";
import { BUSINESS, SERVICES, ALL_AREAS } from "@/lib/constants";

const base = BUSINESS.url;

// Real last-substantive-update dates (from git history).
// A sitemap that stamps "now" on every request teaches Google to
// ignore the lastmod signal entirely — keep these honest and update
// them when page content actually changes.
const STATIC_LASTMOD: Record<string, string> = {
  "/": "2026-06-19",
  "/services": "2026-06-19",
  "/service-areas": "2026-02-28",
  "/about": "2026-03-14",
  "/contact": "2026-03-01",
  "/blog": "2026-02-28",
  "/privacy-policy": "2026-02-24",
  "/terms-of-service": "2026-02-24",
};

const SERVICES_LASTMOD = "2026-03-01"; // last serviceData/template content change
const AREAS_LASTMOD = "2026-03-14"; // last areaData content change
const BLOG_LASTMOD = "2026-03-15"; // last blog content change

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(STATIC_LASTMOD["/"]), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(STATIC_LASTMOD["/services"]), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: new Date(STATIC_LASTMOD["/service-areas"]), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(STATIC_LASTMOD["/about"]), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(STATIC_LASTMOD["/contact"]), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(STATIC_LASTMOD["/blog"]), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(STATIC_LASTMOD["/privacy-policy"]), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-service`, lastModified: new Date(STATIC_LASTMOD["/terms-of-service"]), changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(SERVICES_LASTMOD),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = ALL_AREAS.map((a) => ({
    url: `${base}/service-areas/${a.slug}`,
    lastModified: new Date(AREAS_LASTMOD),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogSlugs = [
    "how-to-get-rid-of-ants-san-diego",
    "san-diego-bed-bug-treatment-guide",
    "pest-control-san-diego-climate",
    "signs-you-have-rodents-san-diego",
    "year-round-pest-prevention-san-diego",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(BLOG_LASTMOD),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
