export const news = [
  {
    id: "van-export",
    title: "Van’da üretilen tıbbi cihaz ve dezenfektan ürünleri yurt dışına gönderiliyor",
    slug: "vanda-uretilen-tibbi-cihaz-ve-dezenfektan-urunleri-yurt-disina-gonderiliyor",
    excerpt:
      "Van Yüzüncü Yıl Üniversitesi Teknokent bünyesinde kurulan fabrikada üretilen tıbbi cihaz ve dezenfektan ürünleri uluslararası pazarlara ulaşıyor.",
    date: "2023-09-14",
    image: "/images/factory/van-fabrika.jpg",
  },
  {
    id: "france-export",
    title: "Van’dan Fransa’ya tıbbi cihaz ihracatı",
    slug: "vandan-fransaya-tibbi-cihaz-ihracati",
    excerpt:
      "YYÜ Teknokent’teki üretim tesisinden Fransa’ya gerçekleştirilen tıbbi cihaz sevkiyatı, KAF Grup’un Avrupa pazarındaki varlığını güçlendiriyor.",
    date: "2023-09-14",
    image: "/images/news/fransa-ihracat.jpg",
  },
  {
    id: "interview",
    title: "Yönetim Kurulu Başkanı Gökmen Aytin’in Sağlık Dergisi röportajı",
    slug: "yonetim-kurulu-baskanimiz-gokmen-aytinin-saglik-dergisine-verdigi-roportaj",
    excerpt:
      "Yönetim Kurulu Başkanı Gökmen Aytin, üretim kapasitesi, ihracat vizyonu ve medikal sektördeki büyüme hedeflerini değerlendirdi.",
    date: "2023-09-14",
    image: "/images/news/roportaj.jpg",
  },
] as const;

export const fairs = [
  {
    id: "medica",
    name: "MEDICA",
    location: "Düsseldorf",
    image: "/images/fairs/medica.jpg",
  },
  {
    id: "arab-health",
    name: "Arab Health",
    location: "Dubai",
    image: "/images/fairs/arab-health.jpg",
  },
  {
    id: "expomed",
    name: "Expomed Eurasia",
    location: "İstanbul",
    image: "/images/fairs/expomed.jpg",
  },
  {
    id: "arabica",
    name: "Uluslararası Sağlık Fuarı",
    location: "Ortadoğu",
    image: "/images/fairs/arabica.jpg",
  },
  {
    id: "africa-health",
    name: "Africa Health",
    location: "Afrika",
    image: "/images/fairs/africa-health.jpg",
  },
  {
    id: "germany",
    name: "Almanya Medikal Fuarları",
    location: "Almanya",
    image: "/images/fairs/germany.jpg",
  },
] as const;

export const exportMarkets = [
  { region: "Avrupa", countries: ["Fransa", "İsviçre", "Almanya"] },
  { region: "Ortadoğu", countries: ["Suudi Arabistan", "Ürdün", "BAE"] },
  { region: "Asya", countries: ["Filipinler", "Kore", "Singapur"] },
  { region: "Amerika", countries: ["Brezilya"] },
] as const;

export const oemSteps = [
  {
    step: "01",
    title: "Ürün oluşturma",
    description:
      "Müşteri ihtiyacına göre formülasyon, ambalaj ve regülasyon gereksinimleri birlikte netleştirilir.",
  },
  {
    step: "02",
    title: "Ürün revizyonu",
    description:
      "Marka stratejisine uygun içerik, etiket ve ürün iyileştirmeleri laboratuvar ve üretim hattında uygulanır.",
  },
  {
    step: "03",
    title: "Üretim ve teslimat",
    description:
      "Anlaşılan takvimde GMP koşullarında üretim yapılır; test, sertifikasyon ve sevkiyat süreçleri yönetilir.",
  },
] as const;

export const oemContent = {
  title: "OEM / OBL / Private Label",
  summary:
    "KAF Grup; ürün tasarımı, geliştirme, üretim, test ve sertifikasyon aşamalarında müşterilerine özel etiket ve OEM çözümleri sunar. Ürünler müşteri markasıyla pazara çıkabilir; kalite, performans ve dayanıklılık standartları KAF üretim altyapısıyla güvence altına alınır.",
  image: "/images/oem/oem-private-label.png",
} as const;
