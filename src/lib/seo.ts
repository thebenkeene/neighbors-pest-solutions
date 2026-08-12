import { Metadata } from "next";
import { BUSINESS } from "./constants";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  /** Set false to omit the "| Neighbors Pest Solutions" suffix when the
   *  title is already long (mainly blog posts). Default true. */
  brandSuffix?: boolean;
}

export function generateSEO({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  publishedTime,
  modifiedTime,
  authors,
  brandSuffix = true,
}: SEOProps): Metadata {
  const url = `${BUSINESS.url}${path}`;
  const defaultImage = `${BUSINESS.url}/images/og-image.png`;
  const fullTitle = brandSuffix ? `${title} | ${BUSINESS.name}` : title;

  const openGraph: Metadata["openGraph"] = {
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
    ...(type === "article" && {
      publishedTime,
      modifiedTime,
      authors: authors || [BUSINESS.name],
    }),
  };

  return {
    title: { absolute: fullTitle },
    description,
    ...(keywords && keywords.length > 0 && { keywords }),
    openGraph,
    twitter: {
      card: "summary_large_image",
      site: "@NeighborsPest",
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
    site: "@NeighborsPest",
    images: [`${BUSINESS.url}/images/og-image.png`],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};
