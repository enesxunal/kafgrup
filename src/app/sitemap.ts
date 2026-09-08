import type { MetadataRoute } from "next";

/**
 * Sitemap scaffold for the future production site.
 * Presentation routes remain noindex via robots.ts / metadata.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kafgrup.com";

  const routes = [
    "",
    "/hakkimizda",
    "/urunler",
    "/oem-obl-pl",
    "/fuarlar",
    "/haberler",
    "/iletisim",
    "/en",
    "/en/about-us",
    "/en/products",
    "/en/contact",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
