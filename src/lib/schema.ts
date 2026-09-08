import { company } from "@/data/company";
import type { Product } from "@/data/products";
import type { news } from "@/data/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kafgrup.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.shortName,
    legalName: company.legalName,
    url: company.contact.website,
    logo: `${siteUrl}${company.logo}`,
    email: company.contact.email,
    telephone: company.contact.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: company.contact.address,
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    brand: company.brands.map((b) => ({
      "@type": "Brand",
      name: b.name,
    })),
    sameAs: [company.contact.website],
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${siteUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.shortName,
    },
    category: product.categoryId,
  };
}

export function articleSchema(item: (typeof news)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.excerpt,
    datePublished: item.date,
    image: `${siteUrl}${item.image}`,
    author: {
      "@type": "Organization",
      name: company.shortName,
    },
    publisher: {
      "@type": "Organization",
      name: company.shortName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${company.logo}`,
      },
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>,
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

/** i18n / hreflang plan for production site */
export const localePlan = {
  defaultLocale: "tr",
  locales: ["tr", "en"],
  hreflangExample: {
    tr: `${siteUrl}/`,
    en: `${siteUrl}/en/`,
    "x-default": `${siteUrl}/`,
  },
} as const;
