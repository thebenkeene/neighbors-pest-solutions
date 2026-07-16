import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/serviceData";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const data = servicePages["commercial-pest-control"];

export const metadata: Metadata = generateSEO({
  title: `Commercial Pest Control San Diego CA`,
  description: `Scheduled, documented pest management for San Diego restaurants, offices, HOAs, and multi-unit properties. Service records for health inspections. Call ${BUSINESS.phone}.`,
  path: `/services/commercial-pest-control`,
  keywords: [`commercial pest control San Diego`, `restaurant pest control San Diego`, `HOA pest control San Diego`],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
