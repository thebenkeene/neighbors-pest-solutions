import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "Year-Round Pest Prevention Guide for San Diego Homeowners",
  description: "A complete monthly pest prevention checklist for San Diego homeowners. Keep ants, rodents, cockroaches, mosquitoes, and more out of your home all year long.",
  path: "/blog/year-round-pest-prevention-san-diego",
  type: "article",
  keywords: ["pest prevention San Diego", "how to prevent pests San Diego", "year round pest control San Diego homeowners"],
});

const articleSchema = generateArticleSchema(
  "Year-Round Pest Prevention Guide for San Diego Homeowners",
  "A complete monthly checklist to keep your San Diego home pest-free every month of the year.",
  "/blog/year-round-pest-prevention-san-diego",
  "2024-12-20",
  "2024-12-20",
  `${BUSINESS.url}/images/technician-inspection.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "Year-Round Pest Prevention San Diego", url: `${BUSINESS.url}/blog/year-round-pest-prevention-san-diego` },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="Year-Round Pest Prevention Guide for San Diego Homeowners"
        category="Prevention"
        date="December 20, 2024"
        readTime="9 min read"
        image="/images/technician-inspection.jpg"
        imageAlt="Pest prevention for San Diego homes"
      >
        <p>
          Preventing pests is always easier — and cheaper — than eliminating them. In San Diego, where pests are active 12 months a year, consistent preventative habits make a real difference. Here&apos;s a practical, season-by-season guide to keeping your home pest-free year-round.
        </p>

        <h2>Year-Round Habits (Every Month)</h2>
        <ul>
          <li>Store food in airtight containers — including pet food</li>
          <li>Wipe down kitchen counters and stovetop after cooking</li>
          <li>Empty trash cans regularly and keep lids tight</li>
          <li>Fix leaky faucets and pipes — moisture attracts ants, cockroaches, and silverfish</li>
          <li>Keep your home clutter-free — boxes, piles of paper, and stored items provide harborage</li>
          <li>Inspect deliveries, used furniture, and secondhand clothing for bed bugs</li>
        </ul>

        <h2>Spring (March–May)</h2>
        <h3>Ants & Termites</h3>
        <ul>
          <li>Inspect your foundation and entry points for ant trails and seal any cracks</li>
          <li>Apply caulk around windows, doors, and utility penetrations</li>
          <li>Check for termite mud tubes along your foundation and in crawl spaces</li>
          <li>Trim tree branches that touch your roofline — they&apos;re ant highways</li>
        </ul>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-5 rounded-r-xl my-6">
          <p className="font-semibold text-primary-900 mb-1">Spring Tip</p>
          <p className="text-primary-800 text-sm">
            Now is the time to schedule a preventative perimeter treatment before ant season peaks. A professional barrier application in March or April can dramatically reduce summer ant pressure.
          </p>
        </div>

        <h2>Summer (June–September)</h2>
        <h3>Mosquitoes, Cockroaches & Fleas</h3>
        <ul>
          <li>Empty standing water at least weekly — pots, bird baths, pet bowls, gutters</li>
          <li>Keep grass mowed and vegetation trimmed away from the house</li>
          <li>Check under sinks and around appliances for cockroach activity</li>
          <li>Treat your yard for fleas if you have pets that spend time outside</li>
          <li>Inspect window screens for holes or gaps that let mosquitoes in</li>
          <li>Keep garage doors closed, especially at night</li>
        </ul>

        <h2>Fall (October–December)</h2>
        <h3>Rodents & Earwigs</h3>
        <ul>
          <li>Inspect your roofline, attic vents, and soffits for gaps (a ¼-inch hole is enough for a mouse)</li>
          <li>Trim tree branches away from your roof — roof rats use them as entry points</li>
          <li>Store firewood at least 20 feet from the house and off the ground</li>
          <li>Check garage door seals for gaps along the bottom</li>
          <li>Remove leaf piles and debris from around the foundation</li>
        </ul>

        <h2>Winter (January–February)</h2>
        <h3>Ants After Rain & Indoor Pests</h3>
        <ul>
          <li>Check for ants following rain events — they move indoors to escape wet conditions</li>
          <li>Inspect stored items in attic or garage for signs of rodent activity</li>
          <li>Check mattresses and bedroom furniture for bed bug signs if you&apos;ve traveled recently</li>
          <li>Check interior plumbing for leaks — cockroaches and silverfish seek moisture in winter</li>
        </ul>

        <h2>Professional Pest Prevention: Quarterly Service</h2>
        <p>
          Even the most diligent homeowner benefits from professional quarterly service. In San Diego&apos;s climate, a professional perimeter treatment every three months provides a barrier layer that individual DIY efforts can&apos;t match — especially against Argentine ant supercolonies.
        </p>
        <p>
          Our quarterly service plan includes seasonal perimeter treatments, interior spot treatments as needed, and free re-treatments if pests return between visits. <Link href="/contact">Contact us</Link> to get started.
        </p>
      </BlogPostLayout>
    </>
  );
}
