import type { MetadataRoute } from "next";

/** Presentation project is closed to search engines. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
