import Link from "next/link";
import Image from "next/image";
import FAQItem from "./FAQItem";
import TestimonialCard from "./TestimonialCard";
import { generateAreaSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS, TOP_SERVICES, TESTIMONIALS } from "@/lib/constants";

export interface AreaPageData {
  cityName: string;
  slug: string;
  intro: string;
  bodyParagraph: string;
  commonPests: string[];
  faqs: { question: string; answer: string }[];
}

export default function AreaPageTemplate({ data }: { data: AreaPageData }) {
  const areaSchema = generateAreaSchema(data.cityName, data.slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: data.cityName, url: `${BUSINESS.url}/service-areas/${data.slug}` },
  ]);
  const faqSchema = generateFAQSchema(data.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-dark-900 text-white py-24 -mt-20 pt-44">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-bg.png"
            alt={`Pest control in ${data.cityName}, CA`}
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span>/</span>
            <span className="text-gray-300">{data.cityName}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Pest Control Near You</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Pest Control in {data.cityName}, CA
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">Get a Free Quote →</Link>
              <a href={BUSINESS.phoneHref} className="btn-outline-white text-base px-8 py-4">{BUSINESS.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-primary-600 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-white text-sm font-semibold">
          <span>✓ Serving {data.cityName}</span>
          <span>✓ Same-Day Available</span>
          <span>✓ Satisfaction Guaranteed</span>
          <span>✓ Licensed & Insured</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">Why {BUSINESS.name}</p>
              <h2 className="text-3xl font-bold text-dark-800 mb-5">
                Your Local Pest Control Experts in {data.cityName}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">{data.bodyParagraph}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We treat every home in {data.cityName} the same way we&apos;d treat our own, with attention to detail, eco-friendly products, and a 100% satisfaction guarantee. If pests return after treatment, so do we, at no additional charge.
              </p>
              <Link href="/contact" className="btn-dark">Schedule a Free Inspection →</Link>
            </div>

            {/* Common pests */}
            <div>
              <h3 className="text-xl font-bold text-dark-800 mb-4">Common Pests in {data.cityName}</h3>
              <div className="space-y-3">
                {data.commonPests.map((pest, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{pest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800">
              Pest Control Services Available in {data.cityName}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {TOP_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-300 hover:bg-primary-50 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-xl">{s.emoji}</span>
                <span className="text-sm font-semibold text-dark-700 group-hover:text-primary-600 transition-colors">{s.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/services" className="text-primary-600 font-semibold hover:underline text-sm">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark-800">What San Diego Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(3, 6).map((t) => (
              <TestimonialCard key={t.name} name={t.name} text={t.text} rating={t.rating} source={t.source} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark-800">
              Pest Control FAQ, {data.cityName}
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get Pest Control in {data.cityName} Today</h2>
          <p className="text-gray-300 mb-8">Same-day service available. 100% satisfaction guaranteed. Serving {data.cityName} and all of San Diego County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Request a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="btn-outline-white text-base px-8 py-4">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
