import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "10 Signs You Have a Rodent Problem in San Diego",
  description: "Roof rats are one of San Diego's most destructive pests. Learn the 10 early warning signs of a rodent infestation before it gets out of hand.",
  path: "/blog/signs-you-have-rodents-san-diego",
  type: "article",
  keywords: ["signs of rodents San Diego", "roof rats San Diego", "rodent infestation San Diego", "how to tell if you have rats"],
  image: `${BUSINESS.url}/images/technician-walkway.jpg`,
  publishedTime: "2025-01-05",
  modifiedTime: "2025-01-05",
});

const articleSchema = generateArticleSchema(
  "10 Signs You Have a Rodent Problem in Your San Diego Home",
  "Roof rats are one of San Diego's most common and destructive pests. Learn the early warning signs before the problem gets out of hand.",
  "/blog/signs-you-have-rodents-san-diego",
  "2025-01-05",
  "2025-01-05",
  `${BUSINESS.url}/images/technician-walkway.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "Signs You Have Rodents San Diego", url: `${BUSINESS.url}/blog/signs-you-have-rodents-san-diego` },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="10 Signs You Have a Rodent Problem in Your San Diego Home"
        category="Rodents"
        date="January 5, 2025"
        readTime="7 min read"
        image="/images/technician-walkway.jpg"
        imageAlt="Rodent control service"
      >
        <p className="text-xl text-gray-700 leading-relaxed">
          Roof rats are among the most common and destructive pests in San Diego County. They&apos;re expert climbers that access homes through trees, utility lines, and roof openings, and they breed fast. A single pair of rats can produce 40+ offspring in a year.
        </p>
        <p>
          The problem: rodents are secretive, and many homeowners don&apos;t realize they have an infestation until significant damage has been done. Here are 10 warning signs to watch for.
        </p>

        <h2>1. Noises in Walls or Ceiling at Night</h2>
        <p>Scratching, scurrying, or thumping sounds, especially between 11 PM and 3 AM, are the most common early sign of roof rats. They&apos;re active after dark and often travel along the same paths inside your walls.</p>

        <h2>2. Droppings</h2>
        <p>Rat droppings are capsule-shaped, about ½ inch long, and dark brown or black. They&apos;re commonly found along walls, in cabinets, under sinks, and in the attic. Fresh droppings are shiny and soft, older ones are gray and crumbly.</p>

        <h2>3. Gnaw Marks</h2>
        <p>Rats have teeth that never stop growing, they must gnaw constantly. Look for gnaw marks on wood, plastic, electrical wiring, food packaging, and insulation. Chewed wires are a serious fire hazard.</p>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-xl my-4">
          <p className="font-semibold text-primary-900 !mb-1">Fire Hazard Alert</p>
          <p className="text-primary-800">
            Rats chewing on electrical wiring inside walls is one of the leading causes of house fires with unknown origins. If you suspect rodents, have an electrician inspect your wiring.
          </p>
        </div>

        <h2>4. Nesting Material</h2>
        <p>Rats build nests from shredded paper, fabric, insulation, and plant material. Check attic corners, inside walls, behind appliances, and in storage boxes for nesting material.</p>

        <h2>5. Grease Marks on Walls</h2>
        <p>Rats travel the same routes repeatedly, leaving oily rub marks (called &quot;grease marks&quot;) along walls, pipes, and beams. Dark smudge marks at entry points are a telltale sign.</p>

        <h2>6. Footprints or Tail Drag Marks</h2>
        <p>In dusty areas, attics, garages, or beneath appliances, you may see rat footprints or the drag mark left by a rat&apos;s tail.</p>

        <h2>7. Pet Behavior Changes</h2>
        <p>Dogs and cats often detect rodents before humans do. If your pet is suddenly sniffing at walls, pawing at baseboards, or acting agitated at night, take it seriously.</p>

        <h2>8. Burrows or Runways in Your Yard</h2>
        <p>Norway rats (less common than roof rats in San Diego, but present) burrow in the ground. Look for golf ball-sized holes along fences, under concrete slabs, or near compost piles.</p>

        <h2>9. Food Packaging Damage</h2>
        <p>Gnaw holes in pantry items, cereal boxes, pet food bags, or garden products are a clear sign rodents are foraging in your home.</p>

        <h2>10. Visible Rodents</h2>
        <p>Seeing a rat, inside or outside your home, at any time of day is a serious sign. Rats are typically nocturnal; a rat seen in daylight often indicates a large, overcrowded infestation.</p>

        <h2>What to Do If You Spot These Signs</h2>
        <p>
          Don&apos;t wait. Rodent infestations grow quickly, and DIY trapping alone rarely solves the problem if entry points aren&apos;t sealed. <Link href="/services/rodent-control">Professional rodent control</Link> combines exclusion (sealing entry points), trapping, and bait stations for complete elimination.
        </p>
        <p>
          <Link href="/contact">Call us at {BUSINESS.phone}</Link> for a free inspection. We serve all of San Diego County and offer same-day service for urgent situations.
        </p>
      </BlogPostLayout>
    </>
  );
}
