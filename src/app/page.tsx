import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQItem from "@/components/FAQItem";
import { generateFAQSchema, generateLocalBusinessSchema } from "@/lib/schema";
import { BUSINESS, TOP_SERVICES, TESTIMONIALS, FAQS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Pest Control San Diego CA | ${BUSINESS.name}`,
  description:
    "San Diego's trusted pest control experts. Same-day service available. Safe, eco-friendly treatments for ants, spiders, bed bugs, rodents, cockroaches, mosquitoes & more. Call (858) 878-2847.",
  alternates: { canonical: BUSINESS.url },
};

const benefits = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Fast response when you need it most, often same-day or next-day.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "100% Guaranteed",
    desc: "If pests return, we come back and re-treat, no extra charge.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Family & Pet Safe",
    desc: "Eco-friendly products safe for your children, pets, and garden.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Licensed & Insured",
    desc: "California-licensed technicians with full liability coverage.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Locally Owned",
    desc: "Born and raised in SoCal, your true neighborhood bug guys.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden fees. Free inspections and upfront quotes.",
  },
];

const pestIcons = [
  { name: "Ants", href: "/services/ant-control", icon: "🐜" },
  { name: "Bed Bugs", href: "/services/bed-bug-control", icon: "🛏️" },
  { name: "Spiders", href: "/services/spider-control", icon: "🕷️" },
  { name: "Rodents", href: "/services/rodent-control", icon: "🐭" },
  { name: "Cockroaches", href: "/services/cockroach-control", icon: "🪳" },
  { name: "Mosquitoes", href: "/services/mosquito-control", icon: "🦟" },
  { name: "Fleas", href: "/services/flea-control", icon: "🐾" },
  { name: "Ticks", href: "/services/tick-control", icon: "🐞" },
  { name: "Earwigs", href: "/services/earwig-control", icon: "🪲" },
  { name: "Moths", href: "/services/moth-control", icon: "🦋" },
  { name: "Flies", href: "/services/fly-control", icon: "🪰" },
  { name: "Silverfish", href: "/services/silverfish-control", icon: "🐟" },
];

const serviceImages: Record<string, string> = {
  "ant-control": "/images/ants-infestation.jpg",
  "bed-bug-control": "/images/bed-bugs.jpg",
  "spider-control": "/images/spider-webs-before-after.jpg",
  "rodent-control": "/images/rodent.jpg",
  "cockroach-control": "/images/cockroach.jpg",
  "mosquito-control": "/images/mosquito.jpg",
  "flea-control": "/images/flea.jpg",
  "tick-control": "/images/tick.jpg",
};

const serviceDescriptions: Record<string, string> = {
  "ant-control": "From Argentine ants to fire ants, we eliminate colonies at the source and protect your home year-round.",
  "bed-bug-control": "Thorough bed bug inspections and treatments using the latest heat and chemical methods to eliminate infestations fast.",
  "spider-control": "We treat crawl spaces, eaves, and entry points to keep black widows, brown recluses, and other spiders out.",
  "rodent-control": "Comprehensive rodent exclusion, trapping, and sanitation to remove rats and mice safely from your property.",
  "cockroach-control": "German, American, and Oriental cockroach treatments targeting harborage zones for fast, lasting elimination.",
  "mosquito-control": "Barrier treatments and breeding site reduction to slash mosquito populations and protect your outdoor spaces.",
  "flea-control": "Interior and exterior flea treatments timed with the pest life cycle for complete elimination.",
  "tick-control": "Yard and perimeter tick treatments to protect your family and pets from tick-borne illness.",
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[700px] md:min-h-[800px] flex items-center text-white -mt-20 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-bg-animate absolute inset-0">
            <Image
              src="/images/hero-bg.png"
              alt="Pest control service in San Diego neighborhood"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/85 via-dark-900/55 to-dark-800/15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <p className="text-primary-300 font-semibold uppercase tracking-widest text-sm mb-4">
              {BUSINESS.tagline}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
              Pest Control<br />
              <span className="text-primary-400">San Diego, CA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 drop-shadow-md leading-relaxed">
              Safe, reliable pest control for San Diego homeowners. Ants, spiders, bed bugs, rodents, and more, eliminated fast and guaranteed.
            </p>

            {/* Pest pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { name: "Spiders",    href: "/services/spider-control" },
                { name: "Ants",       href: "/services/ant-control" },
                { name: "Roaches",    href: "/services/cockroach-control" },
                { name: "Rodents",    href: "/services/rodent-control" },
                { name: "Ticks",      href: "/services/tick-control" },
                { name: "Mosquitoes", href: "/services/mosquito-control" },
                { name: "Bed Bugs",   href: "/services/bed-bug-control" },
                { name: "Beetles",    href: "/services/beetle-control" },
              ].map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-white hover:text-dark-800 hover:border-white hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {p.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block px-8 py-4 text-lg font-bold rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all duration-200 text-center shadow-xl hover:shadow-primary-600/40 hover:scale-105">
                Get a Free Quote →
              </Link>
              <a href={BUSINESS.phoneHref} className="inline-block px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-dark-800 transition-all duration-200 text-center">
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ──────────────────────────────────────── */}
      <section className="bg-dark-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white">
            {[
              { label: "Licensed & Insured", icon: "✓" },
              { label: "Eco-Friendly Products", icon: "🌿" },
              { label: "Satisfaction Guaranteed", icon: "⭐" },
              { label: "15+ Years Experience", icon: "🏆" },
              { label: "Same-Day Available", icon: "⚡" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-gray-200">
                <span className="text-primary-400 text-base">{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "5,000+", label: "Homes Treated" },
              { value: "100%", label: "Satisfaction Guaranteed" },
              { value: "5★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="fade-up">
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-primary-100 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PEST ICON GRID ─────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label">What We Treat</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-3">We Eliminate Any Pest</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">San Diego&apos;s warm climate means pests year-round. We&apos;re trained and equipped to handle them all.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {pestIcons.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{p.icon}</span>
                <span className="text-xs font-semibold text-dark-700 group-hover:text-primary-600 transition-colors text-center">{p.name}</span>
              </Link>
            ))}
            <Link
              href="/services"
              className="flex flex-col items-center justify-center gap-2 p-4 bg-primary-50 rounded-xl border border-primary-200 hover:bg-primary-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <span className="text-3xl">+</span>
              <span className="text-xs font-semibold text-primary-700 text-center">More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Professional Pest Control Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every treatment is customized to your home and pest situation. We never oversell, just effective solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOP_SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={serviceDescriptions[service.slug] ?? `Professional ${service.name.toLowerCase()} in San Diego, CA.`}
                href={`/services/${service.slug}`}
                imageSrc={serviceImages[service.slug]}
                imageAlt={`${service.name} in San Diego`}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All 20+ Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Why Neighbors Pest Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">San Diego&apos;s Top-Rated Pest Control</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We take pride in our attention to detail and ability to customize services for each unique home.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Getting Rid of Pests Is Simple</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-primary-200" />
            {[
              { step: "1", title: "Call or Request Online", desc: "Call us at (858) 878-2847 or fill out our quick quote form. We&apos;ll ask a few questions about your home and pest problem." },
              { step: "2", title: "We Inspect & Treat", desc: "A licensed technician visits your property, performs a thorough inspection, and applies a customized treatment plan." },
              { step: "3", title: "Enjoy a Pest-Free Home", desc: "Sit back and relax. We guarantee our work, if pests return, so do we, at no additional cost." },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark-800 text-white text-2xl font-bold mb-5 group-hover:bg-primary-600 transition-colors duration-300 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT OWNERS ───────────────────────────────────────── */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet the Owners, Josh & Derek</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We&apos;re longtime friends, born and raised right here in Southern California. Together, we have 15+ years of industry experience, Josh as Vice President and Derek as a regional manager and industry-leading sales leader at Florida&apos;s fastest-growing pest company.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Although we had great success, we felt it was time to come back home and start our entrepreneurial journey together in our favorite place, San Diego. We pledge to maintain the highest level of service for our local neighbors, using top-of-the-line products that are not only effective but environmentally and family friendly.
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="btn-outline-white">
                  Learn More About Us
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] col-span-2">
                <Image src="/images/owners.jpg" alt="Josh and Derek, co-founders of Neighbors Pest Solutions" fill={false} width={800} height={533} className="object-cover w-full h-full" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <Image src="/images/technician-portrait.jpg" alt="Neighbors Pest Solutions technician on the job" fill={false} width={400} height={533} className="object-cover w-full h-full" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                <Image src="/images/technician-customer.jpg" alt="Neighbors Pest Solutions technician with customer" fill={false} width={400} height={533} className="object-cover w-full h-full object-[35%_50%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ──────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label">Where We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">Proudly Serving San Diego County</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide pest control throughout San Diego County, from the coast to inland communities.</p>
          </div>

          <div>
            <h3 className="font-bold text-dark-800 mb-3 text-sm uppercase tracking-wide text-center">San Diego Neighborhoods</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[...SERVICE_AREAS.neighborhoods, ...SERVICE_AREAS.cities].map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-dark-600 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-200"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/service-areas" className="btn-primary">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We guarantee our work. If pests return, we come back and re-treat, at no extra cost.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} name={t.name} text={t.text} rating={t.rating} source={t.source} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Answers to the most common pest control questions from San Diego homeowners.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/truck.jpg"
            alt="Neighbors Pest Solutions truck in San Diego"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/96 via-dark-900/88 to-primary-900/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-300 font-semibold uppercase tracking-widest text-sm mb-3">Ready to Get Started?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Get a Free Pest Control Quote Today</h2>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Same-day service available. Licensed, insured, and 100% satisfaction guaranteed. Serving all of San Diego County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Request a Free Quote →
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-outline-white text-lg px-10 py-4">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
