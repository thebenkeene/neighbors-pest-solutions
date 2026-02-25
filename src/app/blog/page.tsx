import Link from "next/link";
import Image from "next/image";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Pest Control Blog — San Diego Tips & Guides",
  description: "Expert pest control tips, guides, and resources for San Diego homeowners. Learn how to prevent and eliminate ants, bed bugs, rodents, and more in San Diego's climate.",
  path: "/blog",
  keywords: ["pest control tips San Diego", "San Diego pest guide", "how to get rid of pests San Diego"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Blog", url: `${BUSINESS.url}/blog` },
]);

const posts = [
  {
    slug: "how-to-get-rid-of-ants-san-diego",
    title: "How to Get Rid of Ants in Your San Diego Home",
    excerpt: "Argentine ants are everywhere in San Diego. Learn why they invade, what actually works, and when it's time to call a professional.",
    category: "Ants",
    readTime: "6 min read",
    date: "February 10, 2025",
    image: "/images/pest-control-san-diego.jpg",
  },
  {
    slug: "san-diego-bed-bug-treatment-guide",
    title: "San Diego Bed Bug Treatment: What to Expect",
    excerpt: "Bed bugs are on the rise in San Diego. This guide covers how to identify an infestation, what treatment options exist, and how to prepare your home.",
    category: "Bed Bugs",
    readTime: "8 min read",
    date: "January 28, 2025",
    image: "/images/bug.jpg",
  },
  {
    slug: "pest-control-san-diego-climate",
    title: "Why San Diego's Climate Makes Pest Control a Year-Round Job",
    excerpt: "San Diego's mild winters and warm summers mean pests never fully go away. Here's what to expect each season and how to stay ahead of infestations.",
    category: "Prevention",
    readTime: "5 min read",
    date: "January 15, 2025",
    image: "/images/pest-control-san-diego.jpg",
  },
  {
    slug: "signs-you-have-rodents-san-diego",
    title: "10 Signs You Have a Rodent Problem in Your San Diego Home",
    excerpt: "Roof rats are one of San Diego's most common and destructive pests. Learn the early warning signs before the problem gets out of hand.",
    category: "Rodents",
    readTime: "7 min read",
    date: "January 5, 2025",
    image: "/images/team-3.jpg",
  },
  {
    slug: "year-round-pest-prevention-san-diego",
    title: "Year-Round Pest Prevention Guide for San Diego Homeowners",
    excerpt: "A complete monthly checklist to keep your San Diego home pest-free every month of the year — from spring ant invasions to fall rodent exclusion.",
    category: "Prevention",
    readTime: "9 min read",
    date: "December 20, 2024",
    image: "/images/pest-control-san-diego.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-dark-900 text-white py-20 -mt-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-primary-300">Pest Control Tips & Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Neighbors Pest Solutions Blog</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Expert advice from your local San Diego pest control professionals.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/10 transition-all" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-dark-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-primary-600 font-semibold text-sm">
                    Read Article
                    <svg className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Have a Pest Problem Right Now?</h2>
          <p className="text-gray-300 mb-6">Don&apos;t wait — same-day service is available throughout San Diego County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4">Get a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="btn-outline-white px-8 py-4">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
