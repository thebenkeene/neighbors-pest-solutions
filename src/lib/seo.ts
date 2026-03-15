import { Metadata } from "next";
import { BUSINESS } from "./constants";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
}

export function generateSEO({
  title,
  description,
  path,
  image,
  type = "website",
  keywords = [],
}: SEOProps): Metadata {
  const url = `${BUSINESS.url}${path}`;
  const defaultImage = `${BUSINESS.url}/images/og-image.png`;
  const fullTitle = `${title} | ${BUSINESS.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: [
      "pest control San Diego",
      "exterminator San Diego",
      "San Diego pest control",
      ...keywords,
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image || defaultImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Pest Control San Diego CA`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "San Diego's trusted pest control experts. Safe, effective treatments for ants, spiders, bed bugs, rodents, cockroaches, mosquitoes, and more. Locally owned. Satisfaction guaranteed.",
  keywords: [
    "pest control San Diego",
    "exterminator San Diego CA",
    "San Diego pest control company",
    "ant control San Diego",
    "bed bug treatment San Diego",
    "spider exterminator San Diego",
    "rodent control San Diego",
    "cockroach exterminator San Diego",
    "mosquito control San Diego",
    "pest control Solana Beach",
    "pest control La Jolla",
    "pest control Mira Mesa",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  openGraph: {
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BUSINESS.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} | Pest Control San Diego CA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${BUSINESS.url}/images/og-image.png`],
  },
};
