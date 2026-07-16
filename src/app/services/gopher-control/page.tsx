import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/serviceData";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const data = servicePages["gopher-control"];

export const metadata: Metadata = generateSEO({
  title: `${data.name} San Diego CA`,
  description: `Gopher and ground squirrel removal for San Diego lawns, slopes, and canyon properties. Trapping and burrow treatment programs. Call ${BUSINESS.phone} for a free quote.`,
  path: `/services/gopher-control`,
  keywords: [`gopher control San Diego`, `gopher removal San Diego`, `ground squirrel control San Diego`],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
