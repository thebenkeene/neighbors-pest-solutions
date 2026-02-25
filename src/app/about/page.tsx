import Image from "next/image";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";
import TestimonialCard from "@/components/TestimonialCard";
import { BUSINESS, TESTIMONIALS } from "@/lib/constants";

export const metadata = generateSEO({
  title: "About Us — Locally Owned San Diego Pest Control",
  description: "Meet Josh and Derek, the founders of Neighbors Pest Solutions. 15+ years of industry experience, San Diego natives, and your true neighborhood bug guys. Learn our story.",
  path: "/about",
  keywords: ["about Neighbors Pest Solutions", "San Diego pest control company", "locally owned pest control San Diego"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "About Us", url: `${BUSINESS.url}/about` },
]);

const values = [
  {
    title: "Safety First",
    desc: "We use only eco-friendly, California-approved products that are safe for your family, pets, and the environment.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "We never oversell. If you don't need it, we won't recommend it. Our technicians give honest assessments and honest prices.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    desc: "Every technician stands behind their work. If pests return, we return — no questions, no extra charge.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "We live and work in San Diego. We give back to the community that has given us so much.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const schema = generateLocalBusinessSchema();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-dark-900 text-white py-20 -mt-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">About Us</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">{BUSINESS.tagline}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">About Neighbors Pest Solutions</h1>
            <p className="text-gray-200 text-xl leading-relaxed">
              We&apos;re not a national franchise. We&apos;re your neighbors — born and raised in Southern California, building a pest control company we&apos;d want for our own homes.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Owners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">Meet The Owners — Josh & Derek</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We are long-time friends, born and raised locally in the SoCal area. Collectively, we have 15+ years of industry experience and climbed the ladder together at Florida&apos;s fastest-growing pest company. Josh was named Vice President and Derek was a regional manager and industry-leading sales leader.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Although we had great success, we felt it was time to come back home and start our entrepreneurial journey together in our favorite place — San Diego. We pledge to maintain the highest level of service for our local San Diego neighbors while using top-of-the-line products that are not only effective but most importantly environmentally and family friendly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We could not be more excited to serve this amazing county and look forward to giving back to a community that has given us so much!
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
                <a href={BUSINESS.phoneHref} className="btn-outline">Call Us</a>
              </div>
            </div>

            {/* Team photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image src="/images/team-1.jpg" alt="Josh - Co-founder of Neighbors Pest Solutions" width={400} height={400} className="object-cover w-full h-full" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square mt-8">
                <Image src="/images/team-2.jpg" alt="Derek - Co-founder of Neighbors Pest Solutions" width={400} height={400} className="object-cover w-full h-full" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image src="/images/team-4.jpg" alt="Neighbors Pest Solutions team in the field" width={400} height={400} className="object-cover w-full h-full" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square mt-8">
                <Image src="/images/team-5.jpg" alt="Neighbors Pest Solutions technician" width={400} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "5,000+", label: "Homes Treated" },
              { value: "30+", label: "Areas Served" },
              { value: "100%", label: "Satisfaction Guaranteed" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold">{s.value}</p>
                <p className="text-primary-100 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-3">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-primary-600">
              <h3 className="text-xl font-bold text-dark-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe and effective pest control solutions to our customers, while maintaining the highest standards of professionalism, integrity, and customer service.
              </p>
            </div>
            <div className="bg-dark-800 rounded-2xl p-8 text-white border-t-4 border-primary-400">
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading provider of pest control services in our community, through innovative solutions, and an unwavering commitment to environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">What We Stand For</p>
            <h2 className="text-3xl font-bold text-dark-800">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-7 rounded-2xl bg-gray-50 hover:bg-primary-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} name={t.name} text={t.text} rating={t.rating} source={t.source} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Your Neighborhood Bug Guys?</h2>
          <p className="text-gray-300 mb-8">Call us today for a free inspection and quote. Same-day service available throughout San Diego County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">Get a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="btn-outline-white text-base px-10 py-4">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
