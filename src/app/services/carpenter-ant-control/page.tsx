import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/serviceData";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const data = servicePages["carpenter-ant-control"];

export const metadata: Metadata = generateSEO({
  title: `${data.name} San Diego CA`,
  description: `Protect your home's structure from carpenter ants with source-targeted treatment. Call ${BUSINESS.phone} for same-day San Diego service.`,
  path: `/services/carpenter-ant-control`,
  keywords: [`${data.name.toLowerCase()} San Diego`, `${data.name.toLowerCase()} San Diego CA`],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
