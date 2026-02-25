import { Metadata } from 'next';
import AreaPageTemplate from '@/components/AreaPageTemplate';
import { areaPages } from '@/lib/areaData';
import { generateSEO } from '@/lib/seo';
import { BUSINESS } from '@/lib/constants';

const data = areaPages['pacific-beach'];

export const metadata: Metadata = generateSEO({
  title: `Pest Control ${data.cityName} CA`,
  description: `Professional pest control in ${data.cityName}, CA. Same-day service available. Ants, spiders, bed bugs, rodents & more. Call ${BUSINESS.phone} for a free quote.`,
  path: `/service-areas/pacific-beach`,
  keywords: [`pest control ${data.cityName}`, `exterminator ${data.cityName} CA`, `${data.cityName} pest control`],
});

export default function Page() {
  return <AreaPageTemplate data={data} />;
}