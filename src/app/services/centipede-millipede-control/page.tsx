import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/serviceData";
import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const data = servicePages["centipede-millipede-control"];

export const metadata: Metadata = generateSEO({
  title: `${data.name} San Diego CA`,
  description: `Moisture management and perimeter treatments that keep centipedes and millipedes out. Call ${BUSINESS.phone} for same-day San Diego service.`,
  path: `/services/centipede-millipede-control`,
  keywords: [`${data.name.toLowerCase()} San Diego`, `${data.name.toLowerCase()} San Diego CA`],
});

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
