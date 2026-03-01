import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "Why San Diego's Climate Makes Pest Control Year-Round",
  description: "San Diego's mild winters and warm summers mean pests never fully go dormant. Learn what pests to expect in each season and how to protect your home year-round.",
  path: "/blog/pest-control-san-diego-climate",
  type: "article",
  keywords: ["pest control San Diego climate", "San Diego pest season", "year round pest control San Diego"],
});

const articleSchema = generateArticleSchema(
  "Why San Diego's Climate Makes Pest Control a Year-Round Job",
  "San Diego's mild winters and warm summers mean pests never fully go away. Here's what to expect each season and how to stay ahead.",
  "/blog/pest-control-san-diego-climate",
  "2025-01-15",
  "2025-01-15",
  `${BUSINESS.url}/images/technician-grass.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "Pest Control San Diego Climate", url: `${BUSINESS.url}/blog/pest-control-san-diego-climate` },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="Why San Diego's Climate Makes Pest Control a Year-Round Job"
        category="Prevention"
        date="January 15, 2025"
        readTime="5 min read"
        image="/images/technician-grass.jpg"
        imageAlt="San Diego weather and pest control"
      >
        <p>
          One of the things people love most about San Diego is the weather — mild winters, warm summers, minimal rain. But that same Mediterranean climate is also why San Diego has one of the highest year-round pest pressures of any major U.S. city. Unlike homeowners in colder climates, San Diego residents can&apos;t count on winter to kill off pest populations.
        </p>

        <h2>Spring (March–May): Ant Season Begins</h2>
        <p>
          As temperatures warm and Santa Ana conditions ease, ant pressure ramps up. Argentine ant supercolonies that retreated during cooler weather begin sending foragers in search of food and water. Spring is also when <strong>termite swarms</strong> emerge — a critical time to check for mud tubes and wood damage around your home.
        </p>
        <p><strong>Watch for:</strong> Ants, termite swarmers, spiders emerging from winter harborage</p>

        <h2>Summer (June–September): Peak Season</h2>
        <p>
          San Diego summers are the most intense pest season. Heat and drought push insects and rodents indoors looking for water. Mosquitoes breed in any standing water that accumulates from irrigation. Cockroaches thrive in the heat. Wasps and yellow jackets build nests.
        </p>
        <div className="bg-primary-50 border-l-4 border-primary-600 p-5 rounded-r-xl my-6">
          <p className="font-semibold text-primary-900 mb-1">Summer Tip</p>
          <p className="text-primary-800 text-sm">
            Check your irrigation system for standing water in pots, saucers, and low spots. Mosquitoes can breed in as little as one teaspoon of standing water.
          </p>
        </div>
        <p><strong>Watch for:</strong> Argentine ants, cockroaches, mosquitoes, fleas, wasps, bed bugs</p>

        <h2>Fall (October–December): Rodent Season</h2>
        <p>
          As temperatures drop at night, roof rats and mice begin moving indoors seeking warmth. Fall is peak rodent season in San Diego — and the most important time to inspect your home for entry points. Also watch for ant pressure as the season transitions, since dry conditions continue driving them inside.
        </p>
        <p><strong>Watch for:</strong> Roof rats, house mice, ants, earwigs, silverfish</p>

        <h2>Winter (January–February): The &quot;Off Season&quot; That Isn&apos;t</h2>
        <p>
          San Diego&apos;s mild winters mean pest activity never fully stops. Rain events drive ants, earwigs, and cockroaches into homes. Rodents that got in during fall are nesting and breeding. Bed bugs, cockroaches, and spiders are active year-round regardless of temperature.
        </p>
        <p><strong>Watch for:</strong> Ants after rain, rodents, cockroaches, silverfish, spiders</p>

        <h2>The Case for Quarterly Pest Control in San Diego</h2>
        <p>
          Because pests in San Diego are active 12 months a year, a single annual treatment isn&apos;t enough. A <strong>quarterly service plan</strong> — treatments every 3 months timed to seasonal pest pressures — keeps populations under control before they become infestations. It&apos;s also significantly more cost-effective than emergency treatments.
        </p>
        <p>
          <Link href="/contact">Contact us</Link> to learn about our recurring service plans and get a free quote for your San Diego home.
        </p>
      </BlogPostLayout>
    </>
  );
}
