import Link from "next/link";
import Image from "next/image";
import FAQItem from "./FAQItem";
import TestimonialCard from "./TestimonialCard";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS, TESTIMONIALS } from "@/lib/constants";

export interface ServicePageData {
  slug: string;
  name: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage?: string;
  intro: string;
  features: { title: string; desc: string }[];
  signs: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; slug: string }[];
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const serviceSchema = generateServiceSchema(data.name, data.heroSubheading, data.slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: data.name, url: `${BUSINESS.url}/services/${data.slug}` },
  ]);
  const faqSchema = generateFAQSchema(data.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[560px] md:h-[560px] flex items-center text-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          {data.heroImage ? (
            <Image src={data.heroImage} alt={data.heroHeading} fill className="object-cover object-center" priority />
          ) : (
            <div className="absolute inset-0 bg-dark-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/75 via-dark-900/55 to-dark-800/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-300">{data.name}</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-primary-300 font-semibold uppercase tracking-widest text-sm mb-3">San Diego, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">{data.heroHeading}</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">{data.heroSubheading}</p>
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
          <span>✓ Same-Day Service</span>
          <span>✓ Satisfaction Guaranteed</span>
          <span>✓ Licensed & Insured</span>
          <span>✓ Family & Pet Safe</span>
        </div>
      </div>

      {/* Intro + features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">About This Service</p>
              <h2 className="text-3xl font-bold text-dark-800 mb-5">{data.name} in San Diego, CA</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{data.intro}</p>
              <Link href="/contact" className="btn-dark">Schedule a Free Inspection →</Link>
            </div>
            <div className="space-y-4">
              {data.features.map((f, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-gray-50 hover:bg-primary-50 hover:shadow-md transition-all duration-200">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-800 mb-1">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs you have a problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800">Signs You Need {data.name}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.signs.map((sign, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary-200 border border-transparent transition-all duration-200">
                <span className="text-primary-600 font-bold mt-0.5 shrink-0">⚠</span>
                <span className="text-gray-700 text-sm leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Our Approach</p>
            <h2 className="text-3xl font-bold text-dark-800">How We Eliminate {data.name.replace(" Control", "s")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.process.map((p) => (
              <div key={p.step} className="text-center group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-800 text-white text-xl font-bold mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time vs Recurring */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800">Treatment Options</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-dark-800 mb-3">One-Time Treatment</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">A targeted treatment for your current infestation. Ideal for first-time pest issues or non-recurring problems.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Full inspection included", "Customized treatment plan", "30-day re-treatment guarantee"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-600 rounded-2xl p-7 text-white relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-3 right-3 bg-white text-primary-600 text-xs font-bold px-2 py-1 rounded-full">Most Popular</div>
              <h3 className="text-xl font-bold mb-3">Recurring Service Plan</h3>
              <p className="text-primary-100 text-sm mb-4 leading-relaxed">Quarterly preventative treatments to keep pests away year-round. Best value for long-term protection.</p>
              <ul className="space-y-2 text-sm text-primary-100">
                {["Quarterly visits (every 3 months)", "Year-round pest prevention", "Free re-treatments between visits", "Discounted rate vs. one-time"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (3 random) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} name={t.name} text={t.text} rating={t.rating} source={t.source} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800">{data.name} FAQ</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {data.relatedServices.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-dark-800 mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {data.relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-dark-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Rid of {data.name.replace(" Control", "s")}?</h2>
          <p className="text-gray-300 mb-8">Same-day service available. 100% satisfaction guaranteed. Call or request a free quote online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Get a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="btn-outline-white text-base px-8 py-4">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
