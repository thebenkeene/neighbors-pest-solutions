import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/serviceData";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const data = servicePages["mosquito-control"];

export const metadata: Metadata = generateSEO({
  title: `${data.name} San Diego CA`,
  description: `Barrier sprays and breeding-site reduction that slash mosquito populations. Call ${BUSINESS.phone} for same-day mosquito control in San Diego.`,
  path: `/services/mosquito-control`,
  keywords: [`${data.name.toLowerCase()} San Diego`, `${data.name.toLowerCase()} San Diego CA`],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
