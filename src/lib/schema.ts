import { BUSINESS, ALL_AREAS, TESTIMONIALS } from "./constants";

const ADDRESS_SCHEMA = {
  "@type": "PostalAddress" as const,
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.city,
  addressRegion: BUSINESS.address.state,
  postalCode: BUSINESS.address.zip,
  addressCountry: "US",
};

const CONTACT_POINT_SCHEMA = {
  "@type": "ContactPoint" as const,
  contactType: "customer service",
  telephone: BUSINESS.phoneFull,
  email: BUSINESS.email,
  areaServed: "San Diego County, CA",
  availableLanguage: ["English", "Spanish"],
};

const OPENING_HOURS_SCHEMA = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "08:00",
  closes: "17:00",
};

const GEO_SCHEMA = {
  "@type": "GeoCoordinates" as const,
  latitude: BUSINESS.geo.latitude,
  longitude: BUSINESS.geo.longitude,
};

const AGGREGATE_RATING_SCHEMA = {
  "@type": "AggregateRating" as const,
  ratingValue: "5.0",
  reviewCount: TESTIMONIALS.length,
  bestRating: 5,
};

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: BUSINESS.url,
    description:
      "Professional pest control services in San Diego, CA. Safe, reliable treatments for ants, spiders, bed bugs, rodents, cockroaches, mosquitoes, and more.",
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["PestControlService", "LocalBusiness"],
    "@id": BUSINESS.url,
    name: BUSINESS.name,
    description:
      "Professional pest control services in San Diego, CA. Safe, reliable treatments for ants, spiders, bed bugs, rodents, cockroaches, mosquitoes, and more. Locally owned and operated.",
    url: BUSINESS.url,
    telephone: BUSINESS.phoneFull,
    email: BUSINESS.email,
    address: ADDRESS_SCHEMA,
    contactPoint: CONTACT_POINT_SCHEMA,
    geo: GEO_SCHEMA,
    areaServed: ALL_AREAS.map((area) => ({
      "@type": "City",
      name: `${area.name}, CA`,
    })),
    priceRange: "$$",
    image: `${BUSINESS.url}/images/og-image.png`,
    logo: `${BUSINESS.url}/images/logo-full.png`,
    sameAs: [BUSINESS.socialFacebook, BUSINESS.socialInstagram],
    openingHoursSpecification: [OPENING_HOURS_SCHEMA],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest Control Services",
      itemListElement: [
        "Ant Control",
        "Bed Bug Control",
        "Spider Control",
        "Rodent Control",
        "Cockroach Control",
        "Mosquito Control",
        "Flea Control",
        "Tick Control",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    review: TESTIMONIALS.slice(0, 5).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
    })),
    aggregateRating: AGGREGATE_RATING_SCHEMA,
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: `${serviceName} in San Diego, CA`,
    description,
    category: "Pest Control Services",
    url: `${BUSINESS.url}/services/${slug}`,
    provider: {
      "@type": "PestControlService",
      "@id": BUSINESS.url,
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phoneFull,
      logo: `${BUSINESS.url}/images/logo-full.png`,
      contactPoint: CONTACT_POINT_SCHEMA,
    },
    areaServed: {
      "@type": "Place",
      name: "San Diego County, CA",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "Contact for quote",
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateAreaSchema(cityName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["PestControlService", "LocalBusiness"],
    "@id": `${BUSINESS.url}/service-areas/${slug}`,
    name: `${BUSINESS.name} - ${cityName}`,
    description: `Professional pest control services in ${cityName}, CA. Treatments for ants, spiders, bed bugs, rodents, cockroaches, and more.`,
    url: `${BUSINESS.url}/service-areas/${slug}`,
    telephone: BUSINESS.phoneFull,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/images/og-image.png`,
    logo: `${BUSINESS.url}/images/logo-full.png`,
    address: ADDRESS_SCHEMA,
    contactPoint: CONTACT_POINT_SCHEMA,
    geo: GEO_SCHEMA,
    priceRange: "$$",
    sameAs: [BUSINESS.socialFacebook, BUSINESS.socialInstagram],
    openingHoursSpecification: [OPENING_HOURS_SCHEMA],
    areaServed: {
      "@type": "City",
      name: `${cityName}, CA`,
    },
    aggregateRating: AGGREGATE_RATING_SCHEMA,
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  path: string,
  publishedDate: string,
  modifiedDate: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BUSINESS.url}${path}`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${BUSINESS.url}/images/logo-full.png`,
      },
    },
    ...(image && {
      image: { "@type": "ImageObject", url: image },
    }),
  };
}
