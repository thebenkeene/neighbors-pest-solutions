import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

interface BlogPostLayoutProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, category, date, readTime, image, imageAlt, children }: BlogPostLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-900 text-white py-16 -mt-20 pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-400 line-clamp-1">{title}</span>
          </nav>
          <span className="inline-block bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            {category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{BUSINESS.name}</span>
            <span>·</span>
            <span>{date}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      {image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image src={image} alt={imageAlt || title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-dark-800
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-li:text-gray-600 prose-li:leading-relaxed
          prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-dark-800
        ">
          {children}
        </div>

        {/* Article CTA */}
        <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Need Professional Pest Control in San Diego?</h3>
          <p className="text-primary-100 mb-6">Same-day service available. 100% satisfaction guaranteed. Call or get a free quote online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">Get a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-primary-700 transition-all">{BUSINESS.phone}</a>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-8">
          <Link href="/blog" className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}
