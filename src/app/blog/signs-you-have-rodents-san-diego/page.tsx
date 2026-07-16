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
  publishedTime: "2026-02-24",
  modifiedTime: "2026-03-15",
});

const articleSchema = generateArticleSchema(
  "10 Signs You Have a Rodent Problem in Your San Diego Home",
  "Roof rats are one of San Diego's most common and destructive pests. Learn the early warning signs before the problem gets out of hand.",
  "/blog/signs-you-have-rodents-san-diego",
  "2026-02-24",
  "2026-03-15",
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
        date="February 24, 2026"
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

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">1</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Noises in Walls or Ceiling at Night</h2>
          </div>
          <p className="!mb-0">Scratching, scurrying, or thumping sounds, especially between 11 PM and 3 AM, are the most common early sign of roof rats. They&apos;re active after dark and often travel along the same paths inside your walls.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">2</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Droppings</h2>
          </div>
          <p className="!mb-0">Rat droppings are capsule-shaped, about ½ inch long, and dark brown or black. They&apos;re commonly found along walls, in cabinets, under sinks, and in the attic. Fresh droppings are shiny and soft, older ones are gray and crumbly.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">3</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Gnaw Marks</h2>
          </div>
          <p className="!mb-0">Rats have teeth that never stop growing, they must gnaw constantly. Look for gnaw marks on wood, plastic, electrical wiring, food packaging, and insulation. Chewed wires are a serious fire hazard.</p>
        </div>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-xl my-4">
          <p className="font-semibold text-primary-900 !mb-1">Fire Hazard Alert</p>
          <p className="text-primary-800">
            Rats chewing on electrical wiring inside walls is one of the leading causes of house fires with unknown origins. If you suspect rodents, have an electrician inspect your wiring.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">4</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Nesting Material</h2>
          </div>
          <p className="!mb-0">Rats build nests from shredded paper, fabric, insulation, and plant material. Check attic corners, inside walls, behind appliances, and in storage boxes for nesting material.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">5</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Grease Marks on Walls</h2>
          </div>
          <p className="!mb-0">Rats travel the same routes repeatedly, leaving oily rub marks (called &quot;grease marks&quot;) along walls, pipes, and beams. Dark smudge marks at entry points are a telltale sign.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">6</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Footprints or Tail Drag Marks</h2>
          </div>
          <p className="!mb-0">In dusty areas, attics, garages, or beneath appliances, you may see rat footprints or the drag mark left by a rat&apos;s tail.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">7</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Pet Behavior Changes</h2>
          </div>
          <p className="!mb-0">Dogs and cats often detect rodents before humans do. If your pet is suddenly sniffing at walls, pawing at baseboards, or acting agitated at night, take it seriously.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">8</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Burrows or Runways in Your Yard</h2>
          </div>
          <p className="!mb-0">Norway rats (less common than roof rats in San Diego, but present) burrow in the ground. Look for golf ball-sized holes along fences, under concrete slabs, or near compost piles.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">9</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Food Packaging Damage</h2>
          </div>
          <p className="!mb-0">Gnaw holes in pantry items, cereal boxes, pet food bags, or garden products are a clear sign rodents are foraging in your home.</p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">10</span>
            <h2 className="!mt-0 !mb-0 !text-2xl">Visible Rodents</h2>
          </div>
          <p className="!mb-0">Seeing a rat, inside or outside your home, at any time of day is a serious sign. Rats are typically nocturnal; a rat seen in daylight often indicates a large, overcrowded infestation.</p>
        </div>

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
