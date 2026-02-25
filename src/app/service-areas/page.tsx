import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Pest Control Service Areas — San Diego County CA",
  description: "Neighbors Pest Solutions serves all of San Diego County. Find pest control near you in La Jolla, Mira Mesa, Chula Vista, Carlsbad, Escondido, and 25+ more cities and neighborhoods.",
  path: "/service-areas",
  keywords: ["pest control near me San Diego", "San Diego County pest control", "pest control service areas"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
]);

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-dark-900 text-white py-20 -mt-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-primary-300">Where We Work</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control Across San Diego County</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            From La Jolla to Oceanside, Downtown to Escondido — we serve all of San Diego County with same-day service and a 100% satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Get a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="btn-outline-white text-base px-8 py-4">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* All Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label">Where We Serve</p>
            <h2 className="text-3xl font-bold text-dark-800 mb-2">San Diego Neighborhoods</h2>
            <p className="text-gray-600">We serve all communities and cities throughout San Diego County.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...SERVICE_AREAS.neighborhoods, ...SERVICE_AREAS.cities].map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-primary-50 hover:border-primary-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0"></span>
                  <span className="font-semibold text-dark-800 group-hover:text-primary-700 transition-colors text-sm">{area.name}</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-primary-500 transition-colors">Pest Control →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">Why Neighbors Pest Solutions</p>
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Locally Owned. San Diego Proud.</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We&apos;re not a national franchise — we&apos;re your neighbors. Josh and Derek grew up in Southern California and built this business specifically to serve our San Diego community. That means faster response times, technicians who know the local pest pressures, and a team that genuinely cares about your home.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { value: "30+", label: "Areas Served" },
              { value: "15+", label: "Years Experience" },
              { value: "5★", label: "Average Rating" },
              { value: "100%", label: "Guaranteed" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-primary-600">{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">Get a Free Quote Today →</Link>
        </div>
      </section>
    </>
  );
}
