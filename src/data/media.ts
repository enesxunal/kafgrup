/**
 * Art-direction metadata for local media assets.
 * Low-res assets must not be used as full-bleed heroes.
 */
export const mediaLimits = {
  factoryVan: {
    src: "/images/factory/van-fabrika.jpg",
    width: 825,
    height: 450,
    maxDisplayWidth: 720,
    roles: ["inline-story", "small-proof"] as const,
    forbidden: ["full-bleed-hero", "scale-up"] as const,
    objectPosition: "center 40%",
  },
  oemBanner: {
    src: "/images/oem/oem-private-label.png",
    width: 1920,
    height: 1080,
    roles: ["wide-section", "process"] as const,
  },
} as const;

export const fairArtDirection = [
  {
    id: "medica",
    src: "/images/fairs/medica.jpg",
    aspect: "1/1" as const,
    objectPosition: "center 45%",
  },
  {
    id: "arab-health",
    src: "/images/fairs/arab-health.jpg",
    aspect: "16/7" as const,
    objectPosition: "center 40%",
  },
  {
    id: "expomed",
    src: "/images/fairs/expomed.jpg",
    aspect: "1/1" as const,
    objectPosition: "center center",
  },
  {
    id: "arabica",
    src: "/images/fairs/arabica.jpg",
    aspect: "1/1" as const,
    objectPosition: "center 35%",
  },
  {
    id: "africa-health",
    src: "/images/fairs/africa-health.jpg",
    aspect: "1/1" as const,
    objectPosition: "center center",
  },
  {
    id: "germany",
    src: "/images/fairs/germany.jpg",
    aspect: "1/1" as const,
    objectPosition: "center 30%",
  },
  {
    id: "istanbul",
    src: "/images/fairs/istanbul.jpg",
    aspect: "1/1" as const,
    objectPosition: "center 40%",
  },
  {
    id: "arsb",
    src: "/images/fairs/arsb-tr.jpg",
    aspect: "16/5" as const,
    objectPosition: "center center",
  },
] as const;

/** Distinct product sets per draft to avoid repetition */
export const productSets = {
  /** Kurumsal ürün aileleri — geniş tedarik portföyü */
  taslak1: [
    "/images/products/onespray-5l.png",
    "/images/products/onesept-opa.png",
    "/images/products/portfolio-1.png",
    "/images/products/onesurface-5l.png",
    "/images/products/wancare-antibacterial-soap.png",
    "/images/products/bariyer-vucut-mendili.png",
  ],
  /** Editoryal hikâye ürünleri — seçilmiş katalog kapakları */
  taslak2: [
    "/images/products/onesept-pa.png",
    "/images/products/portfolio-2.png",
    "/images/products/antibacterial-kese.png",
    "/images/products/onespray-wipes-200.png",
    "/images/products/bariyer-perine-mendili.png",
    "/images/products/onesept-ga.png",
    "/images/products/pa-powder.png",
  ],
  taslak3: [
    "/images/products/pa-powder.png",
    "/images/products/onesept-enzym.png",
    "/images/products/onespray-5l.png",
    "/images/products/wancare-povidion.png",
    "/images/products/bariyer-bone.png",
    "/images/products/onesurface-750ml.png",
    "/images/products/onesept-a.png",
    "/images/products/portfolio-4.png",
  ],
} as const;
