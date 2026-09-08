export const company = {
  legalName: "KAF GRUP SAĞ. HİZM. İNŞ. SAN. VE TİC. LTD. ŞTİ.",
  shortName: "KAF Grup",
  tagline: "GMP belgeli medikal üretim ve global tedarik",
  description:
    "Merkezi İstanbul’da bulunan KAF Grup; Van ve İstanbul’da toplam 15.000 m² kapalı üretim alanında Class 1000, 10.000 ve 100.000 temiz oda standartlarında GMP belgeli tıbbi cihaz sterilizasyon üniteleri ile hastane ve kliniklere yönelik dezenfektan grubu, antibakteriyel mendiller ve medikal jel ürünleri üretmektedir. Üretimini 50’den fazla ülkeye ihraç eder.",
  aboutExtended:
    "Yönetim kurulu üyelerinin medikal sektördeki 25 yılı aşkın tecrübesi, Türkiye genelindeki satış ve teknik destek ağı ile 60’tan fazla ekip arkadaşı; Fransa’dan İsviçre’ye, Filipinler’den Kore’ye, Suudi Arabistan’dan Ürdün’e, Brezilya’dan Singapur’a uzanan ihracat ağına güç katmaktadır.",
  hq: "İstanbul",
  facilities: [
    {
      city: "İstanbul",
      role: "Genel merkez ve üretim",
    },
    {
      city: "Van",
      role: "YYÜ Teknokent üretim tesisi",
      note: "15 milyon TL’lik yatırımla kurulan fabrika",
    },
  ],
  cleanRooms: ["Class 1000", "Class 10.000", "Class 100.000"],
  certifications: ["GMP", "Tıbbi cihaz sterilizasyon üniteleri"],
  brands: [
    { name: "ONE CARE", slug: "one-care", logo: "/images/brands/one-care.png" },
    { name: "ONE GEL", slug: "one-gel", logo: "/images/brands/one-gel.png" },
    { name: "WANCARE", slug: "wancare", logo: "/images/brands/wancare.png" },
    { name: "ARVEN", slug: "arven", logo: "/images/brands/arven.png" },
  ],
  contact: {
    address:
      "Atakent Mah. 221 Sk. No:3A Rota Office A Blok Kat:14 D:82-83 K.Çekmece / İstanbul",
    email: "info@kafgrup.com",
    phones: ["+90 212 471 42 00", "+90 530 545 46 87"],
    website: "https://kafgrup.com",
  },
  logo: "/images/logo/kaf-grup-logo.png",
  logoAlt: "/images/logo/kaf-grup-logo-alt.png",
} as const;

export const metrics = [
  {
    id: "area",
    value: "15.000",
    unit: "m²",
    label: "Kapalı üretim alanı",
    detail: "İstanbul ve Van tesisleri",
  },
  {
    id: "experience",
    value: "25+",
    unit: "",
    label: "Yıl sektör tecrübesi",
    detail: "Yönetim kurulu medikal deneyimi",
  },
  {
    id: "team",
    value: "60+",
    unit: "",
    label: "Ekip arkadaşı",
    detail: "Satış, teknik destek ve üretim",
  },
  {
    id: "export",
    value: "50+",
    unit: "",
    label: "İhracat ülkesi",
    detail: "Avrupa, Asya, Ortadoğu ve Amerika",
  },
] as const;
