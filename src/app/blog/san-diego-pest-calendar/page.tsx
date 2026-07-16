import { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostLayout from "@/components/BlogPostLayout";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generateSEO({
  title: "San Diego Pest Activity Calendar: What's Active Every Month",
  description: "A month-by-month reference to pest activity in San Diego County, when ants, rodents, mosquitoes, spiders, termites, and more peak, and why. Built for homeowners, HOAs, and property managers.",
  path: "/blog/san-diego-pest-calendar",
  type: "article",
  image: `${BUSINESS.url}/images/technician-grass.jpg`,
  publishedTime: "2026-07-15",
  modifiedTime: "2026-07-15",
});

const articleSchema = generateArticleSchema(
  "San Diego Pest Activity Calendar: What's Active Every Month",
  "A month-by-month reference to pest activity in San Diego County, when ants, rodents, mosquitoes, spiders, termites, and more peak, and why.",
  "/blog/san-diego-pest-calendar",
  "2026-07-15",
  "2026-07-15",
  `${BUSINESS.url}/images/technician-grass.jpg`
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
  { name: "San Diego Pest Calendar", url: `${BUSINESS.url}/blog/san-diego-pest-calendar` },
]);

const MONTHS: Array<{ month: string; headline: string; pests: string[]; note: string }> = [
  {
    month: "January",
    headline: "Rodents indoors, moisture pests waking up",
    pests: ["Roof rats & mice (indoor harborage)", "American cockroaches (drains)", "Silverfish (rain moisture)"],
    note: "Cool, wet weather keeps rodents sheltering in attics and garages. Winter rains raise moisture in crawl spaces, silverfish and roach activity follows the dampness.",
  },
  {
    month: "February",
    headline: "Rain-driven ant scouting begins",
    pests: ["Argentine ants (post-rain trails)", "Rodents (still indoors)", "Earwigs (damp mulch)"],
    note: "Heavy rain floods Argentine ant colonies out of the soil and sends scouts indoors. The first big ant calls of the year usually follow February storms.",
  },
  {
    month: "March",
    headline: "Spring emergence, ants, spiders, carpenter ant swarmers",
    pests: ["Argentine ants", "Carpenter ant swarmers", "Spiders (egg sacs hatching)"],
    note: "Warming soil wakes everything up. Carpenter ant swarmers appear near moisture-damaged wood, and spider populations begin their spring build.",
  },
  {
    month: "April",
    headline: "Mosquito season opens; gopher digging peaks",
    pests: ["Mosquitoes (first broods)", "Gophers (spring digging)", "Ants", "Fleas (rising)"],
    note: "Standing water from spring rains plus warming temperatures starts mosquito breeding, especially near lagoons, the San Diego River, and lake corridors. Gopher mound activity peaks with soft spring soil.",
  },
  {
    month: "May",
    headline: "Ticks and fleas climb; May Gray moisture pests",
    pests: ["Fleas & ticks (peak season begins)", "Mosquitoes", "Silverfish & earwigs (marine layer)"],
    note: "Pet and wildlife activity spreads fleas and ticks through canyons and yards. The May Gray marine layer keeps coastal homes damp enough for moisture pests to thrive.",
  },
  {
    month: "June",
    headline: "June Gloom coastal pests; wasp nests grow",
    pests: ["Stinging pests (nest building)", "Mosquitoes", "Coastal moisture pests", "Ants"],
    note: "Paper wasp and yellowjacket nests reach noticeable size. Aedes ('ankle-biter') mosquitoes get active in neighborhoods with any standing water.",
  },
  {
    month: "July",
    headline: "Peak summer pressure, everything is active",
    pests: ["Ants (heat-driven indoor pushes)", "Mosquitoes (peak)", "Fleas & ticks (peak)", "Crickets"],
    note: "Inland heat drives ants and crickets indoors chasing water, especially in El Cajon, Escondido, and Poway. Mosquito activity peaks countywide.",
  },
  {
    month: "August",
    headline: "Hottest month, biggest indoor invasions",
    pests: ["Argentine ants (peak indoor season)", "Cockroaches (drain emergence)", "Mosquitoes", "Stinging pests (aggressive late-season nests)"],
    note: "The largest ant invasions of the year hit in late summer as colonies chase water indoors. American cockroaches surge up drains in older neighborhoods.",
  },
  {
    month: "September",
    headline: "Drywood termite swarms; ant pressure continues",
    pests: ["Drywood termite swarmers", "Ants", "Yellowjackets (peak aggression)", "Spiders (building to fall peak)"],
    note: "Warm, still September days are classic drywood termite swarming weather in San Diego. Piles of shed wings on windowsills are the signature sign.",
  },
  {
    month: "October",
    headline: "Spider season peaks; rodents head indoors",
    pests: ["Spiders (peak visibility)", "Roof rats (fall entry season begins)", "Drywood termite swarmers", "Stink bugs (overwintering entry)"],
    note: "Mature orb weavers and black widows are at maximum size and visibility. Cooling nights start the fall rodent push into attics, the year's biggest exclusion season.",
  },
  {
    month: "November",
    headline: "Fall rodent push in full swing",
    pests: ["Roof rats & mice (peak entry)", "Spiders (moving indoors)", "Stink bugs & crickets (sheltering)"],
    note: "Rodent pressure on structures peaks as temperatures drop. Attic noise complaints spike this month across the county's canyon and grove neighborhoods.",
  },
  {
    month: "December",
    headline: "Indoor pest season; rain returns moisture pests",
    pests: ["Rodents (established indoors)", "German cockroaches (kitchens)", "Silverfish (winter rains)"],
    note: "Holiday cooking and warmth concentrate indoor pest activity in kitchens. Early winter rains restart the moisture-pest cycle in crawl spaces and garages.",
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <BlogPostLayout
        title="San Diego Pest Activity Calendar: What's Active Every Month"
        category="Reference"
        date="July 15, 2026"
        readTime="10 min read"
        image="/images/technician-grass.jpg"
        imageAlt="Pest control technician treating a San Diego yard"
      >
        <p className="text-xl text-gray-700 leading-relaxed">
          San Diego&apos;s mild climate means pests never really stop, they just rotate. This calendar maps what&apos;s active in San Diego County month by month, based on what our technicians see across 30+ neighborhoods and the seasonal patterns documented by UC&apos;s Integrated Pest Management program and county vector control. Bookmark it, share it with your HOA, and you&apos;ll never be surprised by a season again.
        </p>

        <p>
          <em>Feel free to reference or link to this calendar, a link back to this page is appreciated. For neighborhood-specific patterns, see our <Link href="/service-areas">service area guides</Link>.</em>
        </p>

        {MONTHS.map((m, i) => (
          <div
            key={m.month}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-5 hover:shadow-md hover:border-primary-200 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="w-9 h-9 shrink-0 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <h2 className="!mt-0 !mb-0 !text-2xl">{m.month}: {m.headline}</h2>
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {m.pests.map((p) => (
                <span
                  key={p}
                  className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="!mb-0">{m.note}</p>
          </div>
        ))}

        <h2>The Three Big Seasonal Turns</h2>
        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-xl my-4">
          <p className="font-semibold text-primary-900 !mb-1">If You Remember Nothing Else</p>
          <p className="text-primary-800">
            Three moments generate most of San Diego&apos;s pest emergencies: the <strong>first heavy rains</strong> (ants flood indoors, usually February), the <strong>late-summer heat peak</strong> (the year&apos;s biggest ant and roach invasions, August), and the <strong>first cool nights</strong> (rodents enter attics, October). A perimeter treatment placed <em>ahead</em> of each turn prevents what a reactive treatment can only clean up.
          </p>
        </div>

        <h2>Sources and Further Reading</h2>
        <p>
          Seasonal patterns referenced from the{" "}
          <a href="https://ipm.ucanr.edu/" target="_blank" rel="noopener noreferrer">UC Statewide Integrated Pest Management Program</a>{" "}
          and the{" "}
          <a href="https://www.sandiegocounty.gov/content/sdc/deh/pests.html" target="_blank" rel="noopener noreferrer">County of San Diego Vector Control Program</a>, combined with our field experience across San Diego County. For what to do about each season, see our{" "}
          <Link href="/blog/year-round-pest-prevention-san-diego">year-round prevention checklist</Link>.
        </p>

        <p>
          Facing this month&apos;s pest right now? <Link href="/contact">Request a free quote</Link> or call {BUSINESS.phone}, same-day service available throughout San Diego County.
        </p>
      </BlogPostLayout>
    </>
  );
}
