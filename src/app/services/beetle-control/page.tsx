import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/serviceData";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const data = servicePages["beetle-control"];

export const metadata: Metadata = generateSEO({
  title: `${data.name} San Diego CA`,
  description: `${data.heroSubheading} Call ${BUSINESS.phone} for same-day ${data.name.toLowerCase()} in San Diego.`,
  path: `/services/beetle-control`,
  keywords: [`${data.name.toLowerCase()} San Diego`, `${data.name.toLowerCase()} San Diego CA`],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
