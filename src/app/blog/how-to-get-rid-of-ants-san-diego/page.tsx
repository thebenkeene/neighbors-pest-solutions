import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "How to Get Rid of Ants in Your San Diego Home",
  description: "Argentine ants invade San Diego homes every year. Learn why they come in, which treatments actually work, and when to call a professional ant exterminator in San Diego.",
  path: "/blog/how-to-get-rid-of-ants-san-diego",
  type: "article",
  keywords: ["how to get rid of ants San Diego", "ant control San Diego", "Argentine ants San Diego"],
});

const articleSchema = generateArticleSchema(
  "How to Get Rid of Ants in Your San Diego Home",
  "Argentine ants invade San Diego homes every year. Learn why they come in, which treatments actually work, and when to call a professional ant exterminator in San Diego.",
  "/blog/how-to-get-rid-of-ants-san-diego",
  "2025-02-10",
  "2025-02-10",
  `${BUSINESS.url}/images/ants-windowsill.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "How to Get Rid of Ants in San Diego", url: `${BUSINESS.url}/blog/how-to-get-rid-of-ants-san-diego` },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="How to Get Rid of Ants in Your San Diego Home"
        category="Ants"
        date="February 10, 2025"
        readTime="6 min read"
        image="/images/ants-windowsill.jpg"
        imageAlt="Ant control service in San Diego"
      >
        <p>
          If you&apos;ve lived in San Diego for more than one summer, you&apos;ve almost certainly dealt with ants. They appear out of nowhere — a trail across the kitchen counter, scouts in the bathroom, a line marching along the baseboards. San Diego has one of the highest ant pressures in the country, and there&apos;s a good reason for that.
        </p>

        <h2>Why Ants Invade San Diego Homes</h2>
        <p>
          The dominant ant species in San Diego is the <strong>Argentine ant</strong> (<em>Linepithema humile</em>). Unlike most ant species, Argentine ants don&apos;t form single colonies — they form supercolonies that can span acres. San Diego County is home to one of the world&apos;s largest known Argentine ant supercolonies.
        </p>
        <p>
          These ants move indoors when outside conditions become unfavorable — typically during hot, dry spells (late summer and fall) or after heavy rain. They&apos;re looking for three things: food, water, and shelter. Your kitchen and bathroom offer all three.
        </p>

        <h2>DIY Ant Control: What Actually Works</h2>
        <p>
          There are a few things you can do yourself before (or alongside) professional treatment:
        </p>
        <ul>
          <li><strong>Eliminate food sources.</strong> Store food in airtight containers, wipe down counters daily, and don&apos;t leave pet food out overnight.</li>
          <li><strong>Fix moisture issues.</strong> Fix dripping faucets, dry out under-sink areas, and ensure proper drainage around your foundation.</li>
          <li><strong>Seal entry points.</strong> Caulk gaps around windows, doors, and utility penetrations. Even a crack the width of a credit card is enough for ants to enter.</li>
          <li><strong>Use slow-acting bait, not spray.</strong> Spraying ants kills the foragers you see, but the colony survives and often splits (called &quot;budding&quot;), making the problem worse. Slow-acting gel bait allows foragers to carry poison back to the colony.</li>
        </ul>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-5 rounded-r-xl my-6">
          <p className="font-semibold text-primary-900 mb-1">Pro Tip</p>
          <p className="text-primary-800 text-sm">
            Don&apos;t spray over bait. Residual sprays and bait repel each other — ants won&apos;t pick up bait that&apos;s been contaminated with repellent insecticide. Use one method at a time.
          </p>
        </div>

        <h2>When DIY Isn&apos;t Enough</h2>
        <p>
          If you&apos;ve tried over-the-counter solutions and the ants keep coming back, there are a few reasons why:
        </p>
        <ul>
          <li>The colony is too large and dispersed for surface bait to make a dent</li>
          <li>There are multiple entry points you haven&apos;t identified or sealed</li>
          <li>The infestation includes carpenter ants, which require a different treatment approach</li>
          <li>Seasonal pressure from the supercolony is simply overwhelming DIY solutions</li>
        </ul>

        <h2>What Professional Ant Control Looks Like</h2>
        <p>
          A professional ant treatment from <Link href="/">Neighbors Pest Solutions</Link> in San Diego includes:
        </p>
        <ul>
          <li>A full interior and exterior inspection to identify the species, entry points, and harborage areas</li>
          <li>Targeted gel bait placement inside cabinets, along wall voids, and near harborage zones</li>
          <li>A residual perimeter treatment applied around the foundation, eaves, and entry points</li>
          <li>Entry point recommendations and follow-up if ants return</li>
        </ul>
        <p>
          Most San Diego homeowners see dramatic improvement within 24–72 hours. For Argentine ant colonies, we recommend a quarterly service plan — the supercolony never fully goes away, but with regular perimeter treatments, you can keep it out of your home year-round.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Ants in San Diego are a fact of life — but a major infestation doesn&apos;t have to be. With the right approach (bait over spray, addressing moisture and food sources, and a professional perimeter treatment), you can keep your home ant-free for good.
        </p>
        <p>
          If you&apos;re dealing with a persistent ant problem, <Link href="/contact">give us a call at {BUSINESS.phone}</Link> — we offer free inspections and same-day service throughout San Diego County.
        </p>
      </BlogPostLayout>
    </>
  );
}
