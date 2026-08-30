// Canonical list of blog posts for contextual internal linking.
// Keep in sync with src/app/blog/ routes and src/app/sitemap.ts.
export interface BlogPostRef {
  slug: string;
  title: string;
  teaser: string;
}

export const BLOG_POSTS: BlogPostRef[] = [
  {
    slug: "east-county-san-diego-pest-control-guide",
    title: "Pest Control in East County San Diego: A City-by-City Guide",
    teaser: "Why El Cajon, Santee, La Mesa, Lakeside, and Spring Valley see the county's heaviest pest pressure.",
  },
  {
    slug: "san-diego-pest-calendar",
    title: "San Diego Pest Activity Calendar: What's Active Every Month",
    teaser: "Month-by-month guide to which pests surge and when to act.",
  },
  {
    slug: "pest-control-cost-san-diego",
    title: "How Much Does Pest Control Cost in San Diego?",
    teaser: "Real price ranges for one-time and quarterly service.",
  },
  {
    slug: "termites-vs-carpenter-ants-san-diego",
    title: "Termites vs. Carpenter Ants: How to Tell the Difference",
    teaser: "Two wood destroyers, two very different treatments.",
  },
  {
    slug: "how-to-get-rid-of-ants-san-diego",
    title: "How to Get Rid of Ants in Your San Diego Home",
    teaser: "Why Argentine ants keep coming back and what actually works.",
  },
  {
    slug: "san-diego-bed-bug-treatment-guide",
    title: "San Diego Bed Bug Treatment: What to Expect",
    teaser: "Inspection, prep, treatment, and follow-up, step by step.",
  },
  {
    slug: "pest-control-san-diego-climate",
    title: "Why San Diego's Climate Makes Pest Control a Year-Round Job",
    teaser: "Mild winters mean pests never really go away.",
  },
  {
    slug: "signs-you-have-rodents-san-diego",
    title: "10 Signs You Have a Rodent Problem",
    teaser: "Droppings, noises, and the subtle clues homeowners miss.",
  },
  {
    slug: "year-round-pest-prevention-san-diego",
    title: "Year-Round Pest Prevention Guide for San Diego Homeowners",
    teaser: "Seasonal checklist to keep your home protected.",
  },
];

const bySlug = Object.fromEntries(BLOG_POSTS.map((p) => [p.slug, p]));

// Service page → most relevant posts (descriptive, editorially chosen).
const SERVICE_READING: Record<string, string[]> = {
  "ant-control": ["how-to-get-rid-of-ants-san-diego", "san-diego-pest-calendar", "year-round-pest-prevention-san-diego"],
  "carpenter-ant-control": ["termites-vs-carpenter-ants-san-diego", "how-to-get-rid-of-ants-san-diego"],
  "bed-bug-control": ["san-diego-bed-bug-treatment-guide", "pest-control-cost-san-diego"],
  "rodent-control": ["signs-you-have-rodents-san-diego", "san-diego-pest-calendar"],
  "cockroach-control": ["pest-control-cost-san-diego", "pest-control-san-diego-climate"],
  "mosquito-control": ["san-diego-pest-calendar", "year-round-pest-prevention-san-diego"],
  "flea-control": ["year-round-pest-prevention-san-diego", "pest-control-san-diego-climate"],
  "tick-control": ["san-diego-pest-calendar", "year-round-pest-prevention-san-diego"],
  "spider-control": ["pest-control-san-diego-climate", "year-round-pest-prevention-san-diego"],
  "fly-control": ["pest-control-san-diego-climate", "san-diego-pest-calendar"],
  "commercial-pest-control": ["pest-control-cost-san-diego", "pest-control-san-diego-climate"],
  "exterminator-san-diego": ["pest-control-cost-san-diego", "san-diego-pest-calendar", "pest-control-san-diego-climate"],
};

export function readingForService(slug: string): BlogPostRef[] {
  return (SERVICE_READING[slug] ?? ["san-diego-pest-calendar", "pest-control-cost-san-diego"])
    .map((s) => bySlug[s])
    .filter(Boolean);
}

// Area pages rotate through the catalog deterministically so every post
// collects contextual inlinks without an identical sitewide block.
export function readingForArea(slug: string): BlogPostRef[] {
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) % 997;
  const start = hash % BLOG_POSTS.length;
  return [0, 1, 2].map((i) => BLOG_POSTS[(start + i * 3) % BLOG_POSTS.length]);
}
