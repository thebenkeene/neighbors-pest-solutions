import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Contact Us — Free Pest Control Quote San Diego",
  description: "Contact Neighbors Pest Solutions for a free pest control quote in San Diego, CA. Call (858) 878-2847 or fill out our online form. Same-day service available.",
  path: "/contact",
  keywords: ["pest control quote San Diego", "contact pest control San Diego", "free pest inspection San Diego"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Contact", url: `${BUSINESS.url}/contact` },
]);

const contactItems = [
  {
    label: "Call or Text",
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Office Address",
    value: BUSINESS.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: BUSINESS.hours,
    href: null,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-dark-900 text-white py-20 -mt-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Contact Us</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get a Free Pest Control Quote</h1>
            <p className="text-gray-200 text-xl leading-relaxed">
              Same-day service available. Fill out the form or call us directly at <a href={BUSINESS.phoneHref} className="text-primary-300 font-bold hover:underline">{BUSINESS.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark-800 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-dark-500 uppercase tracking-wide mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-dark-800 hover:text-primary-600 transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-dark-800 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why contact us box */}
              <div className="bg-dark-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Why Choose Neighbors?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    "Free inspections & quotes",
                    "Same-day service available",
                    "100% satisfaction guaranteed",
                    "Licensed & insured in California",
                    "Eco-friendly, family-safe products",
                    "15+ years of industry experience",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service areas snippet */}
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="font-bold text-dark-800 mb-2">Serving All of San Diego County</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  La Jolla · Mira Mesa · Chula Vista · El Cajon · Carlsbad · Encinitas · Escondido · Poway · Solana Beach · Del Mar and 20+ more cities.{" "}
                  <Link href="/service-areas" className="text-primary-600 font-semibold hover:underline">View all areas →</Link>
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-dark-800 mb-2">Request a Free Quote</h2>
                <p className="text-gray-500 text-sm mb-6">We typically respond within 1 business day. For immediate help, call <a href={BUSINESS.phoneHref} className="text-primary-600 font-semibold hover:underline">{BUSINESS.phone}</a>.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-sm">
              Map embed — <a href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">View on Google Maps</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
