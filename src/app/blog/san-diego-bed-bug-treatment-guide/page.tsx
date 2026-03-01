import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "San Diego Bed Bug Treatment: What to Expect",
  description: "Bed bugs are rising across San Diego. This complete guide covers how to identify bed bugs, compare treatment options, prepare your home, and what to do if they come back.",
  path: "/blog/san-diego-bed-bug-treatment-guide",
  type: "article",
  keywords: ["bed bug treatment San Diego", "bed bug exterminator San Diego", "how to get rid of bed bugs San Diego CA"],
});

const articleSchema = generateArticleSchema(
  "San Diego Bed Bug Treatment: What to Expect",
  "Bed bugs are rising across San Diego. This complete guide covers how to identify bed bugs, compare treatment options, and prepare your home for professional treatment.",
  "/blog/san-diego-bed-bug-treatment-guide",
  "2025-01-28",
  "2025-01-28",
  `${BUSINESS.url}/images/technician-spraying.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "San Diego Bed Bug Treatment Guide", url: `${BUSINESS.url}/blog/san-diego-bed-bug-treatment-guide` },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="San Diego Bed Bug Treatment: What to Expect"
        category="Bed Bugs"
        date="January 28, 2025"
        readTime="8 min read"
        image="/images/technician-spraying.jpg"
        imageAlt="Bed bug close-up"
      >
        <p>
          Bed bug infestations have been rising across the country — and San Diego is no exception. Hotels, apartments, used furniture, and even public transit can all be sources. Once they get into your home, bed bugs are notoriously difficult to eliminate without professional help.
        </p>
        <p>
          This guide walks you through how to identify bed bugs, compare treatment options, prepare your home, and know what to do if the infestation returns.
        </p>

        <h2>How to Identify Bed Bugs</h2>
        <p>Bed bugs are small — about the size and shape of an apple seed — reddish-brown, and flat unless recently fed. They don&apos;t fly and are mostly nocturnal.</p>
        <p><strong>Signs of a bed bug infestation include:</strong></p>
        <ul>
          <li>Waking up with bites in a line or cluster (often arms, shoulders, neck)</li>
          <li>Small blood spots on sheets or pillowcases</li>
          <li>Dark brown or rust-colored spots (fecal matter) on mattress seams or headboard</li>
          <li>Shed skins or tiny white egg cases in cracks and crevices</li>
          <li>A sweet, musty odor in the bedroom</li>
        </ul>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-5 rounded-r-xl my-6">
          <p className="font-semibold text-primary-900 mb-1">Not Sure if It&apos;s Bed Bugs?</p>
          <p className="text-primary-800 text-sm">
            Bed bug bites are often confused with mosquito bites, flea bites, or dermatitis. The best confirmation is finding a live bug or fecal spots on the mattress. When in doubt, call us for a free inspection.
          </p>
        </div>

        <h2>Treatment Options: Heat vs. Chemical</h2>
        <p>There are two primary professional treatment methods:</p>
        <h3>Chemical Treatment</h3>
        <p>
          Residual insecticides and insect growth regulators (IGR) are applied to all harborage sites — mattress seams, box spring, headboard, furniture joints, and baseboards. This is the most common and cost-effective treatment. It typically requires a follow-up visit 2 weeks later to treat newly hatched eggs.
        </p>
        <h3>Heat Treatment</h3>
        <p>
          The entire room (or home) is heated to temperatures above 120°F for several hours — a temperature lethal to all life stages including eggs. Heat treatment is thorough and can eliminate an infestation in a single day, but is more expensive and requires careful preparation.
        </p>

        <h2>How to Prepare for Bed Bug Treatment</h2>
        <p>Preparation is essential for successful treatment. Your pest control provider will give you a specific checklist, but standard prep includes:</p>
        <ul>
          <li>Strip all bedding and wash/dry on the highest heat setting (min. 120°F)</li>
          <li>Bag and seal washed items in plastic until treatment is complete</li>
          <li>Reduce clutter on floors and under beds</li>
          <li>Move furniture slightly away from walls</li>
          <li>Vacuum carpets and floors (dispose of the vacuum bag immediately after)</li>
          <li>Vacate the home (with pets) for 4–6 hours after chemical treatment</li>
        </ul>

        <h2>What Happens After Treatment</h2>
        <p>
          You may continue to see some bed bug activity for 1–2 weeks after treatment — this is normal. Eggs laid before treatment take 7–14 days to hatch. A follow-up visit treats the new hatch. Don&apos;t wash treated surfaces or vacuum treated areas for at least 2 weeks — this removes the residual protection.
        </p>

        <h2>Preventing Reinfestation</h2>
        <ul>
          <li>Encase your mattress and box spring in bed bug-proof encasements</li>
          <li>Inspect used furniture and clothing thoroughly before bringing them home</li>
          <li>Check hotel rooms when traveling (inspect seams, headboard, and nightstand)</li>
          <li>Reduce clutter to eliminate hiding spots</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>
          Bed bugs are stressful — but they are completely treatable with professional help. The sooner you act, the smaller the infestation and the simpler the treatment. If you suspect bed bugs in your San Diego home, <Link href="/contact">call us at {BUSINESS.phone}</Link> for a free inspection. We offer same-day service and guaranteed results.
        </p>
      </BlogPostLayout>
    </>
  );
}
