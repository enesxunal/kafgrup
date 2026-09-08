/**
 * Content & SEO architecture models for the future production site.
 * Presentation project stays noindex; these types show the intended structure.
 */

export type LocaleCode = "tr" | "en";

export type LocalizedString = Record<LocaleCode, string>;

export type SeoEntityBase = {
  slug: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  canonicalPath: LocalizedString;
  /** hreflang map keys: tr | en | x-default */
  hreflang: Partial<Record<LocaleCode | "x-default", string>>;
};

export type CategorySeoModel = SeoEntityBase & {
  type: "Category";
  parentCategoryId?: string;
  brandIds: string[];
  productIds: string[];
};

export type ProductSeoModel = SeoEntityBase & {
  type: "Product";
  categoryId: string;
  brand: string;
  sku?: string;
  gtin?: string;
  imagePath: string;
  features: LocalizedString[];
};

export type ArticleSeoModel = SeoEntityBase & {
  type: "Article";
  datePublished: string;
  imagePath: string;
};

export type BreadcrumbItem = {
  name: LocalizedString;
  path: LocalizedString;
};

/** Example FAQ content grounded in real company facts (for FAQPage schema). */
export const companyFaqs = [
  {
    question: "KAF Grup nerede üretim yapıyor?",
    answer:
      "Genel merkez İstanbul’dadır. Van ve İstanbul’da toplam 15.000 m² kapalı üretim alanı bulunmaktadır.",
  },
  {
    question: "Hangi temiz oda sınıflarında üretim yapılıyor?",
    answer:
      "Class 1000, Class 10.000 ve Class 100.000 üretim alanlarında GMP belgeli tıbbi cihaz sterilizasyon üniteleri mevcuttur.",
  },
  {
    question: "KAF Grup hangi ülkelere ihracat yapıyor?",
    answer:
      "50’den fazla ülkeye ihracat gerçekleştirilmektedir; pazarlar arasında Fransa, İsviçre, Filipinler, Kore, Suudi Arabistan, Ürdün, Brezilya ve Singapur yer alır.",
  },
  {
    question: "OEM / Private Label hizmeti sunuyor musunuz?",
    answer:
      "Evet. Ürün oluşturma, revizyon, üretim, test ve sertifikasyon aşamalarında OEM, OBL ve Private Label çözümleri sunulur.",
  },
  {
    question: "İletişim bilgileri nelerdir?",
    answer:
      "Adres: Atakent Mah. 221 Sk. No:3A Rota Office A Blok Kat:14 D:82-83 K.Çekmece / İstanbul. E-posta: info@kafgrup.com. Telefon: +90 212 471 42 00 / +90 530 545 46 87.",
  },
] as const;

/**
 * Planned production URL tree (TR default, EN under /en).
 * Used as documentation for IA + sitemap expansion.
 */
export const productionRoutePlan = [
  { tr: "/", en: "/en/", intent: "home" },
  { tr: "/hakkimizda", en: "/en/about-us", intent: "organization" },
  { tr: "/urunler", en: "/en/products", intent: "category-index" },
  {
    tr: "/urunler/[kategori]",
    en: "/en/products/[category]",
    intent: "category",
  },
  {
    tr: "/urunler/[kategori]/[urun]",
    en: "/en/products/[category]/[product]",
    intent: "product",
  },
  { tr: "/oem-obl-pl", en: "/en/oem-obl-pl", intent: "service" },
  { tr: "/fuarlar", en: "/en/fairs", intent: "gallery" },
  { tr: "/haberler", en: "/en/news", intent: "article-index" },
  { tr: "/haberler/[slug]", en: "/en/news/[slug]", intent: "article" },
  { tr: "/iletisim", en: "/en/contact", intent: "contact" },
] as const;
