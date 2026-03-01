import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Pest Control Services San Diego CA",
  description: "Complete pest control services in San Diego, CA. Treatments for ants, bed bugs, spiders, rodents, cockroaches, mosquitoes, fleas, ticks, and 15+ more pests. Licensed & insured.",
  path: "/services",
  keywords: ["pest control services San Diego", "exterminator services San Diego CA"],
});

const serviceMeta: Record<string, { icon: string; description: string }> = {
  "ant-control": { icon: "🐜", description: "Eliminate ant colonies at the source — Argentine, fire, carpenter, and more." },
  "bed-bug-control": { icon: "🛏️", description: "Heat and chemical treatments to fully eliminate bed bug infestations." },
  "spider-control": { icon: "🕷️", description: "Keep black widows, brown recluses, and other spiders out of your home." },
  "rodent-control": { icon: "🐭", description: "Full rodent exclusion, trapping, and sanitation programs." },
  "cockroach-control": { icon: "🪳", description: "Targeted treatments for German, American, and Oriental cockroach infestations." },
  "mosquito-control": { icon: "🦟", description: "Barrier treatments to reduce mosquito populations in your yard." },
  "flea-control": { icon: "🐾", description: "Interior and exterior flea elimination timed with the pest life cycle." },
  "tick-control": { icon: "🐞", description: "Perimeter and yard treatments to protect against tick-borne illness." },
  "beetle-control": { icon: "🪲", description: "Treatment for carpet beetles, bark beetles, and other destructive beetle species." },
  "earwig-control": { icon: "🪲", description: "Perimeter and garden treatments to control earwig populations." },
  "carpenter-ant-control": { icon: "🐜", description: "Structural protection from carpenter ants that damage wood in your home." },
  "cricket-control": { icon: "🦗", description: "Interior and exterior treatments to stop cricket infestations." },
  "fly-control": { icon: "🪰", description: "Source identification and treatment to control flies indoors and out." },
  "moth-control": { icon: "🦋", description: "Pantry and clothing moth treatments to protect your home and belongings." },
  "silverfish-control": { icon: "🐟", description: "Moisture control and chemical treatments to eliminate silverfish." },
  "stinging-pest-control": { icon: "🐝", description: "Safe removal and treatment of wasps, hornets, bees, and yellow jackets." },
  "stink-bug-control": { icon: "🐞", description: "Exclusion and treatment to prevent stink bug invasions." },
  "centipede-millipede-control": { icon: "🐛", description: "Moisture management and perimeter treatments for centipedes and millipedes." },
  "mite-control": { icon: "🕷️", description: "Treatment for spider mites, clover mites, and other mite infestations." },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Services", url: `${BUSINESS.url}/services` },
]);

export default function ServicesPage() {
  // Deduplicate services by slug
  const uniqueServices = SERVICES.filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-dark-900 text-white py-20 -mt-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-primary-300">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pest Control Services in San Diego, CA</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Comprehensive treatments for every pest common to San Diego homes. Licensed, eco-friendly, and 100% guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Get a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="btn-outline-white text-base px-8 py-4">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {uniqueServices.map((service) => {
              const meta = serviceMeta[service.slug];
              const hasPage = ["ant-control","bed-bug-control","spider-control","rodent-control","cockroach-control","mosquito-control","flea-control","tick-control"].includes(service.slug);
              const href = hasPage ? `/services/${service.slug}` : "/contact";
              return (
                <Link
                  key={service.slug}
                  href={href}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 transition-all duration-300"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {meta?.icon ?? service.emoji}
                  </div>
                  <h2 className="text-base font-bold text-dark-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {meta?.description ?? `Professional ${service.name.toLowerCase()} in San Diego, CA.`}
                  </p>
                  <div className="mt-3 text-primary-600 text-sm font-semibold flex items-center gap-1">
                    {hasPage ? "Learn More" : "Get a Quote"}
                    <svg className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Don&apos;t See Your Pest?</h2>
          <p className="text-primary-100 text-lg mb-6">We handle just about anything. Call us or fill out a quote form and we&apos;ll take care of it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">Get a Free Quote →</Link>
            <a href={BUSINESS.phoneHref} className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-700 transition-all">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
