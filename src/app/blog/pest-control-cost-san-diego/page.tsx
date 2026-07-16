import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "How Much Does Pest Control Cost in San Diego?",
  description: "What San Diego homeowners actually pay for pest control: one-time treatments, quarterly plans, and specialty services like bed bugs and rodent exclusion — and what drives the price up or down.",
  path: "/blog/pest-control-cost-san-diego",
  type: "article",
  image: `${BUSINESS.url}/images/technician-customer.jpg`,
  publishedTime: "2026-07-15",
  modifiedTime: "2026-07-15",
});

const articleSchema = generateArticleSchema(
  "How Much Does Pest Control Cost in San Diego?",
  "What San Diego homeowners actually pay for pest control: one-time treatments, quarterly plans, and specialty services — and what drives the price.",
  "/blog/pest-control-cost-san-diego",
  "2026-07-15",
  "2026-07-15",
  `${BUSINESS.url}/images/technician-customer.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "Pest Control Cost in San Diego", url: `${BUSINESS.url}/blog/pest-control-cost-san-diego` },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="How Much Does Pest Control Cost in San Diego?"
        category="Guides"
        date="July 15, 2026"
        readTime="7 min read"
        image="/images/technician-customer.jpg"
        imageAlt="Pest control technician discussing service with a San Diego homeowner"
      >
        <p className="text-xl text-gray-700 leading-relaxed">
          &quot;How much is this going to cost me?&quot; is the first question most homeowners have — and the hardest one to answer from a website, because pest control pricing genuinely depends on what&apos;s bugging you, how bad it is, and how big your property is. Here&apos;s an honest breakdown of how pricing works in the San Diego market, so you know what to expect before anyone knocks on your door.
        </p>

        <h2>The Two Pricing Models: One-Time vs. Recurring</h2>
        <p>
          Nearly every San Diego pest company offers two paths. A <strong>one-time treatment</strong> addresses a current problem — you pay for the visit, usually with a short re-treatment guarantee. A <strong>recurring plan</strong> (typically quarterly, sometimes bi-monthly) maintains a protective barrier year-round at a lower per-visit rate.
        </p>
        <p>
          In San Diego&apos;s climate, recurring service isn&apos;t an upsell gimmick — it reflects biology. Argentine ant supercolonies, year-round spider activity, and mild winters mean pest pressure never fully stops here. A one-time treatment solves today&apos;s infestation; it can&apos;t stop next season&apos;s.
        </p>

        <h2>What Drives the Price Up or Down</h2>
        <ul>
          <li><strong>The pest.</strong> General perimeter pests (ants, spiders, roaches) sit at the affordable end. Bed bugs, rodent exclusion, and gopher programs cost more because they take more labor, follow-up visits, and specialized methods.</li>
          <li><strong>Infestation severity.</strong> A few scout ants and a full German cockroach infestation in a kitchen are very different jobs.</li>
          <li><strong>Property size and type.</strong> A Mira Mesa tract home, a <Link href="/service-areas/poway">Poway horse property</Link>, and a Pacific Beach fourplex each price differently — more perimeter, more structures, more units means more time and product.</li>
          <li><strong>Location factors.</strong> Canyon-edge and open-space-adjacent homes often need more robust (and more frequent) perimeter work, because re-invasion pressure is constant.</li>
          <li><strong>Follow-up requirements.</strong> Some pests — bed bugs, fleas, rodents — essentially always need a follow-up visit to catch the next life-cycle stage. Quotes that skip the follow-up usually aren&apos;t cheaper; they&apos;re just incomplete.</li>
        </ul>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-xl my-4">
          <p className="font-semibold text-primary-900 !mb-1">Red Flag</p>
          <p className="text-primary-800">
            Be cautious with door-to-door quotes that pressure you to sign a long-term contract on the spot for a &quot;today-only neighborhood discount.&quot; Reputable companies put pricing, terms, and guarantees in writing and give you time to decide.
          </p>
        </div>

        <h2>Questions That Reveal the Real Price</h2>
        <p>Whoever you get quotes from, ask these five questions — the answers matter more than the sticker number:</p>
        <ul>
          <li>Is the follow-up visit included, or billed separately?</li>
          <li>What exactly does the guarantee cover, and for how long?</li>
          <li>Is this a contract? What&apos;s the cancellation policy?</li>
          <li>Interior and exterior, or exterior only?</li>
          <li>Are specialty pests (bed bugs, rodents in the attic, gophers) covered by the plan or quoted separately?</li>
        </ul>

        <h2>Why We Quote After an Inspection</h2>
        <p>
          We give quotes after a free inspection instead of a flat rate-card because the inspection is what makes the number honest. Two identical-looking ant problems can be a surface trail or a wall-void colony — and quoting blind means either overcharging the easy job or underquoting the hard one and cutting corners later.
        </p>
        <p>
          Every quote we give is free, in writing, and no-obligation, whether it&apos;s a <Link href="/services/ant-control">one-time ant treatment</Link>, a quarterly plan, or a <Link href="/services/commercial-pest-control">commercial service program</Link>.
        </p>

        <h2>Bottom Line</h2>
        <p>
          Pest control in San Diego is priced by pest, severity, and property — not by zip code mystery. Get the inspection, get the quote in writing, ask the five questions above, and you&apos;ll never be surprised by a pest control bill.
        </p>
        <p>
          Ready for a real number instead of a range? <Link href="/contact">Request a free quote</Link> or call {BUSINESS.phone} — same-day service is available throughout San Diego County.
        </p>
      </BlogPostLayout>
    </>
  );
}
