import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

// Dedicated page for "exterminator" search intent — the highest-volume
// term the site previously had no page for. Lives under /services so the
// middleware allowlist covers it automatically.
const data: ServicePageData = {
  slug: "exterminator-san-diego",
  name: "Exterminator Services",
  heroHeading: "San Diego Exterminators",
  heroSubheading:
    "Licensed local exterminators for ants, roaches, rodents, bed bugs, spiders, and every other pest San Diego throws at your home. Same-day appointments available.",
  heroImage: "/images/technician-spraying.jpg",
  intro:
    "When people search for an exterminator, they usually mean one thing: someone who shows up fast and makes the problem gone. That's exactly what our licensed technicians do, but with modern methods that go beyond the old spray-and-pray approach. We identify the species, treat the source (not just the bugs you can see), seal the entry points, and back every visit with a satisfaction guarantee. Whether you call it an exterminator, pest control, or the bug guys, we're the neighbors San Diego homeowners have trusted for over 15 years.",
  features: [
    {
      title: "True Extermination, Not Just Repellent",
      desc: "We eliminate the colony, nest, or harborage at its source, so pests stay gone instead of coming back next month.",
    },
    {
      title: "Same-Day Exterminator Visits",
      desc: "Most San Diego appointments can be scheduled the day you call. Bed bugs, roaches, and rodents don't wait, neither do we.",
    },
    {
      title: "Family & Pet Safe Treatments",
      desc: "Eco-friendly, EPA-registered products applied by California-licensed technicians. Safe for kids, pets, and gardens.",
    },
    {
      title: "Every Pest, One Team",
      desc: "Ants, cockroaches, rodents, bed bugs, spiders, fleas, ticks, wasps, and 20+ services, one local company handles it all.",
    },
  ],
  signs: [
    "You've tried store-bought sprays and the pests keep coming back",
    "Droppings, gnaw marks, or scratching sounds in walls or the attic",
    "Live roaches or ants appearing during the day (a sign of large numbers)",
    "Bites or welts appearing overnight",
    "Neighbors dealing with the same infestation",
    "A pest problem before a home sale, rental turnover, or inspection",
  ],
  process: [
    {
      step: "1",
      title: "Inspect & Identify",
      desc: "A licensed exterminator inspects your home, identifies the exact species, and locates nests, colonies, and entry points.",
    },
    {
      step: "2",
      title: "Treat & Eliminate",
      desc: "Targeted treatment of the source using professional-grade, family-safe products, interior, exterior, or both as needed.",
    },
    {
      step: "3",
      title: "Prevent & Guarantee",
      desc: "We seal entry points, advise on prevention, and back the work: if pests return between visits, so do we, free.",
    },
  ],
  faqs: [
    {
      question: "What's the difference between an exterminator and pest control?",
      answer:
        "Traditionally, an exterminator sprayed chemicals to kill visible pests, while pest control takes an integrated approach: identifying the species, eliminating the source, sealing entry points, and preventing re-infestation. Our technicians do both, the fast knockdown you want from an exterminator, plus the long-term prevention that keeps pests from returning.",
    },
    {
      question: "How much does an exterminator cost in San Diego?",
      answer:
        "Most one-time exterminator visits in San Diego run between $150 and $400 depending on the pest and the size of the infestation, and quarterly prevention plans cost less per visit. We give free, no-obligation quotes over the phone at (858) 878-2847, and new customers get 50% off their first service.",
    },
    {
      question: "Can I get a same-day exterminator appointment?",
      answer:
        "Yes. We hold room in our schedule for same-day and next-day appointments across San Diego County. Call before noon and we can usually have a licensed technician at your door the same day.",
    },
    {
      question: "Are your exterminators licensed in California?",
      answer:
        "Yes. Neighbors Pest Solutions is licensed for structural pest control in California, fully insured, and every technician is trained on current treatment methods and safety practices.",
    },
    {
      question: "Do you exterminate all types of pests?",
      answer:
        "We handle every common San Diego pest: ants, cockroaches, rodents, bed bugs, spiders, fleas, ticks, mosquitoes, wasps, earwigs, silverfish, crickets, beetles, moths, gophers, and more. If it's bugging your home, we have a treatment for it.",
    },
  ],
  relatedServices: [
    { name: "Ant Control", slug: "ant-control" },
    { name: "Cockroach Control", slug: "cockroach-control" },
    { name: "Rodent Control", slug: "rodent-control" },
    { name: "Bed Bug Control", slug: "bed-bug-control" },
    { name: "Commercial Pest Control", slug: "commercial-pest-control" },
  ],
};

export const metadata: Metadata = generateSEO({
  title: "Exterminator San Diego CA",
  description: `Licensed San Diego exterminators with same-day service. Ants, roaches, rodents, bed bugs & more, eliminated at the source. Call ${BUSINESS.phone} for a free quote.`,
  path: "/services/exterminator-san-diego",
  keywords: ["exterminator San Diego", "exterminator San Diego CA", "San Diego exterminators"],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
