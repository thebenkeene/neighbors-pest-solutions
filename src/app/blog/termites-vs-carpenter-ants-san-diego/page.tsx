import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "Termites vs. Carpenter Ants in San Diego: How to Tell the Difference",
  description: "Wood damage in your San Diego home? Learn how to tell drywood termites from carpenter ants, wings, frass, damage patterns, and what to do about each.",
  path: "/blog/termites-vs-carpenter-ants-san-diego",
  type: "article",
  image: `${BUSINESS.url}/images/technician-inspection.jpg`,
  publishedTime: "2026-07-15",
  modifiedTime: "2026-07-15",
});

const articleSchema = generateArticleSchema(
  "Termites vs. Carpenter Ants in San Diego: How to Tell the Difference",
  "How to tell drywood termites from carpenter ants in San Diego homes, wings, frass, damage patterns, and what to do about each.",
  "/blog/termites-vs-carpenter-ants-san-diego",
  "2026-07-15",
  "2026-07-15",
  `${BUSINESS.url}/images/technician-inspection.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "Termites vs. Carpenter Ants", url: `${BUSINESS.url}/blog/termites-vs-carpenter-ants-san-diego` },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="Termites vs. Carpenter Ants in San Diego: How to Tell the Difference"
        category="Termites"
        date="July 15, 2026"
        readTime="6 min read"
        image="/images/technician-inspection.jpg"
        imageAlt="Technician inspecting wood damage in a San Diego home"
      >
        <p className="text-xl text-gray-700 leading-relaxed">
          You found winged insects on a windowsill, or little piles of what looks like sawdust, or wood that sounds hollow when you knock. In San Diego, that discovery comes down to two main suspects, drywood termites or carpenter ants, and telling them apart matters, because the treatments (and the stakes) are completely different.
        </p>

        <h2>Why This Matters So Much in San Diego</h2>
        <p>
          San Diego is one of the heaviest drywood termite regions in the country. Unlike the subterranean termites common elsewhere, <strong>drywood termites</strong> live entirely inside the wood they eat, no soil contact, no mud tubes, which makes them harder to spot until the damage is done. Carpenter ants, meanwhile, don&apos;t eat wood at all: they excavate it to nest in, typically targeting wood that&apos;s already moist or damaged.
        </p>

        <h2>The Fastest Tells</h2>
        <ul>
          <li><strong>The wings.</strong> Both species send out winged swarmers. Termite swarmers have two pairs of equal-length wings and straight antennae; carpenter ant swarmers have unequal wing pairs (front longer than back), elbowed antennae, and a pinched waist. Finding a pile of identical shed wings on a windowsill leans strongly termite.</li>
          <li><strong>The &quot;sawdust.&quot;</strong> Drywood termite droppings (frass) are tiny, hard, six-sided pellets, like coarse sand or ground pepper, pushed out of small kick-out holes. Carpenter ant debris is actual wood shavings, often mixed with insect parts, and looks fibrous.</li>
          <li><strong>The damage pattern.</strong> Termite galleries run with the grain and contain packed frass. Carpenter ant galleries are smooth, clean, and almost sanded-looking, they keep their nests tidy.</li>
          <li><strong>The timing.</strong> In San Diego, drywood termites typically swarm in the warm months, often late summer through fall; carpenter ant swarmers usually appear in spring.</li>
        </ul>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-xl my-4">
          <p className="font-semibold text-primary-900 !mb-1">Quick Test</p>
          <p className="text-primary-800">
            Sweep up the debris pile and check back in a few days. Six-sided pellets that reappear from a tiny hole above = drywood termites actively kicking out frass. Fibrous shavings near moist or damaged wood = likely carpenter ants.
          </p>
        </div>

        <h2>If It&apos;s Carpenter Ants</h2>
        <p>
          Good news: carpenter ants are very treatable, and the damage is usually limited compared to termites. Treatment targets the nest, often in moisture-damaged wood, wall voids, or dead tree limbs near the house, plus the moisture condition that attracted them. That&apos;s exactly what our <Link href="/services/carpenter-ant-control">carpenter ant control service</Link> does, and it pairs with fixing the leak, drainage, or wood-to-soil contact that started it.
        </p>

        <h2>If It&apos;s Termites</h2>
        <p>
          Termite treatment in California is its own licensed specialty (wood-destroying organisms are regulated separately from general pest control), and depending on the extent, options range from localized treatment to whole-structure fumigation. Our honest advice: get a proper termite inspection before anyone quotes you a treatment, the inspection determines whether you have an active infestation, how far it extends, and which treatment actually fits.
        </p>
        <p>
          If you&apos;re not sure which insect you&apos;re looking at, that part we can help with today, <Link href="/contact">send us a photo or schedule a free inspection</Link> and we&apos;ll identify it. If it&apos;s carpenter ants, we&apos;ll treat it. If it&apos;s termites, we&apos;ll tell you straight and point you in the right direction.
        </p>

        <h2>Don&apos;t Wait on Wood Damage</h2>
        <p>
          Both pests get more expensive with time, carpenter ants expand their galleries season over season, and drywood termite colonies grind away invisibly for years. Winged swarmers indoors, recurring debris piles, or hollow-sounding wood are all reasons to get eyes on it now. Call {BUSINESS.phone}, identification is free, and knowing what you&apos;re dealing with is half the battle.
        </p>
      </BlogPostLayout>
    </>
  );
}
