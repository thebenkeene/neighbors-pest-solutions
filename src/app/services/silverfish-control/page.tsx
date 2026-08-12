import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/serviceData";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const data = servicePages["silverfish-control"];

export const metadata: Metadata = generateSEO({
  title: `${data.name} San Diego CA`,
  description: `Moisture control and targeted treatment to eliminate silverfish for good. Call ${BUSINESS.phone} for same-day silverfish control in San Diego.`,
  path: `/services/silverfish-control`,
  keywords: [`${data.name.toLowerCase()} San Diego`, `${data.name.toLowerCase()} San Diego CA`],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
