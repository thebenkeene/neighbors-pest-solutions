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
      {/* Thin hero — gives the transparent navbar a dark backdrop */}
      <div className="relative h-40 -mt-20 bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-700" />
      </div>

      {/* Single white article section — mirrors Boise Cleaning Crew layout */}
      <article className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="mb-5 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700 transition-colors">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 transition-colors">Blog</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500">{category}</span>
          </nav>

          {/* Article header */}
          <header className="mb-7">
            <div className="mb-3">
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                {category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-3 leading-tight">
              {title}
            </h1>
            <div className="flex items-center text-gray-500 text-sm space-x-3">
              <span>{BUSINESS.name}</span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </header>

          {/* Featured image — sits between header and body, matching Boise layout */}
          {image && (
            <div className="relative rounded-xl h-80 mb-7 overflow-hidden shadow-lg">
              <Image src={image} alt={imageAlt || title} fill className="object-cover" priority />
            </div>
          )}

          {/* Article body */}
          <div className="blog-content">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-3 text-white">Need Professional Pest Control in San Diego?</h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              Same-day service available. 100% satisfaction guaranteed. Call or get a free quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-bold rounded-lg bg-white text-primary-700 hover:bg-gray-100 transition-all duration-200 shadow-xl hover:scale-105"
              >
                Get a Free Quote →
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-block px-8 py-4 text-lg font-bold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center transition-colors"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
