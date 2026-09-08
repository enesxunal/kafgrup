export type Category = {
  id: string;
  name: string;
  slug: string;
  summary: string;
  image: string;
  brand?: string;
};

export const categories: Category[] = [
  {
    id: "lubricant-gel",
    name: "Lidokain İçerikli Kaydırıcı Jel",
    slug: "lubricant-gel-with-lidocaine",
    summary:
      "Üretral kateterizasyon, endoskopi ve sistoskopi uygulamaları için steril, suda çözünebilir kaydırıcı jel.",
    image: "/images/products/portfolio-1.png",
    brand: "ONE GEL",
  },
  {
    id: "ultrasound-gel",
    name: "Ultrason, EKG ve IPL Jel",
    slug: "ultrasound-ecg-ipl-gel",
    summary:
      "Tanı ve tedavi cihazlarında iletkenlik ve temas kalitesi sağlayan medikal jel ürünleri.",
    image: "/images/products/portfolio-2.png",
    brand: "ONE GEL",
  },
  {
    id: "device-disinfectants",
    name: "Tıbbi Cihaz ve Endoskop Dezenfektanları",
    slug: "medical-device-and-endoscope-disinfectants",
    summary:
      "Yüksek düzey dezenfeksiyon için OPA, PA, GA ve enzim bazlı temizleyici/dezenfektan sistemleri.",
    image: "/images/products/onesept-opa.png",
    brand: "ONESEPT",
  },
  {
    id: "incontinence",
    name: "Bariyer Kremli İnkontinans Ürünleri",
    slug: "onecare-incontinence-care-products",
    summary:
      "Hasta bakımında cilt koruma odaklı bariyer kremli mendil, bone ve bakım setleri.",
    image: "/images/products/bariyer-vucut-mendili.png",
    brand: "ONE CARE",
  },
  {
    id: "antiseptics",
    name: "Antiseptik ve Yüzey Dezenfektanları",
    slug: "antiseptics-and-surface-disinfectants",
    summary:
      "El-cilt antiseptikleri, hızlı yüzey spreyleri ve konsantre ortam dezenfektanları.",
    image: "/images/products/onespray-1000ml.png",
    brand: "ONE CARE",
  },
  {
    id: "body-care",
    name: "Antibakteriyel Hasta Bakım Ürünleri",
    slug: "body-care-wipes",
    summary:
      "Yatan hastalar için antibakteriyel, antifungal ve virüsidal ıslak kese, mendil ve yıkama ürünleri.",
    image: "/images/products/antibacterial-kese.png",
    brand: "WANCARE",
  },
];

export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  brand: string;
  summary: string;
  image: string;
  features?: string[];
};

export const products: Product[] = [
  {
    id: "onegel-lidocaine",
    name: "ONEGEL Lidokain İçerikli Kaydırıcı Jel",
    slug: "lubricant-gel-with-lidocaine",
    categoryId: "lubricant-gel",
    brand: "ONE GEL",
    summary:
      "Steril ambalajda, tek kullanımlık şırınga ve akordeon tüp formlarında; lidokain hidroklorür ve klorheksidin glukonat içeren kaydırıcı jel.",
    image: "/images/products/portfolio-1.png",
    features: [
      "Tek kullanımlık ve steril",
      "Suda çözünebilir",
      "Lokal anestezik etki",
      "Antiseptik koruma",
    ],
  },
  {
    id: "onegel-ekg",
    name: "Ultrason / EKG / IPL Jel",
    slug: "ultrasound-ecg-ipl-gel",
    categoryId: "ultrasound-gel",
    brand: "ONE GEL",
    summary:
      "Tanı cihazlarında iletkenliği destekleyen medikal ultrason, EKG ve IPL jelleri.",
    image: "/images/products/portfolio-2.png",
  },
  {
    id: "onesept-opa",
    name: "ONESEPT OPA",
    slug: "high-level-disinfectant-for-medical-instruments-and-endoscopes-opa",
    categoryId: "device-disinfectants",
    brand: "ONESEPT",
    summary:
      "Tıbbi cihaz ve endoskoplar için yüksek düzey dezenfektan.",
    image: "/images/products/onesept-opa.png",
  },
  {
    id: "onesept-pa",
    name: "ONESEPT PA",
    slug: "high-level-disinfectant-for-medical-instruments-and-endoscopes-pa",
    categoryId: "device-disinfectants",
    brand: "ONESEPT",
    summary: "Perasetik asit bazlı yüksek düzey dezenfeksiyon çözeltisi.",
    image: "/images/products/onesept-pa.png",
  },
  {
    id: "onesept-ga",
    name: "ONESEPT GA",
    slug: "high-level-disinfectant-for-medical-instruments-and-endoscopes-ga",
    categoryId: "device-disinfectants",
    brand: "ONESEPT",
    summary: "Glutaraldehit bazlı yüksek düzey tıbbi cihaz dezenfektanı.",
    image: "/images/products/onesept-ga.png",
  },
  {
    id: "pa-powder",
    name: "ONESEPT PA Powder",
    slug: "high-level-disinfectant-for-medical-instruments-and-endoscopes-pa-powder",
    categoryId: "device-disinfectants",
    brand: "ONESEPT",
    summary: "Tıbbi cihaz ve endoskoplar için toz formda yüksek düzey dezenfektan.",
    image: "/images/products/pa-powder.png",
  },
  {
    id: "onesept-enzym",
    name: "ONESEPT Enzym Temizleyici",
    slug: "onesept-enzym-enzymatic-cleaner-for-medical-instruments-and-endoscopes",
    categoryId: "device-disinfectants",
    brand: "ONESEPT",
    summary: "Tıbbi alet ve endoskoplar için enzimatik temizleyici.",
    image: "/images/products/onesept-enzym.png",
  },
  {
    id: "onespray",
    name: "ONESPRAY Alkol Bazlı Hızlı Yüzey Dezenfektanı",
    slug: "onespray-alcohol-based-rapid-surface-disinfectant",
    categoryId: "antiseptics",
    brand: "ONE CARE",
    summary: "Kullanıma hazır hızlı yüzey dezenfektanı; sprey ve mendil formları.",
    image: "/images/products/onespray-1000ml.png",
  },
  {
    id: "onesurface",
    name: "ONESURFACE C Konsantre Yüzey Dezenfektanı",
    slug: "onesurface-c-concentrated-floor-surface-disinfectant",
    categoryId: "antiseptics",
    brand: "ONE CARE",
    summary: "Zemin ve yüzeyler için konsantre ortam dezenfektanı.",
    image: "/images/products/onesurface-5l.png",
  },
  {
    id: "wancare-soap",
    name: "WANCARE Antibakteriyel Sabun",
    slug: "wancare-antibacterial-soap",
    categoryId: "antiseptics",
    brand: "WANCARE",
    summary:
      "Hijyenik ve cerrahi el yıkama ile cilt dezenfeksiyonunda kullanılan antiseptik sıvı sabun.",
    image: "/images/products/wancare-antibacterial-soap.png",
  },
  {
    id: "wancare-povidion",
    name: "WANCARE Povidion İyot",
    slug: "wancare-povidion-iodine",
    categoryId: "antiseptics",
    brand: "WANCARE",
    summary: "Cilt ve yara çevresi antisepsisi için povidon iyot ürünleri.",
    image: "/images/products/wancare-povidion.png",
  },
  {
    id: "bariyer-vucut",
    name: "Bariyer Kremli Vücut Mendili",
    slug: "barrier-cream-incontitence-wipes",
    categoryId: "incontinence",
    brand: "ONE CARE",
    summary: "İnkontinans bakımında cildi koruyan bariyer kremli vücut mendilleri.",
    image: "/images/products/bariyer-vucut-mendili.png",
  },
  {
    id: "bariyer-perine",
    name: "Bariyer Kremli Perine Mendili",
    slug: "barrier-cream-incontitence-perineal-cloths",
    categoryId: "incontinence",
    brand: "ONE CARE",
    summary: "Perineal bölge bakımı için bariyer kremli özel mendiller.",
    image: "/images/products/bariyer-perine-mendili.png",
  },
  {
    id: "antibacterial-kese",
    name: "Antibakteriyel Islak Kese",
    slug: "antibacterial-antifungicidal-and-virucidal-body-care-set",
    categoryId: "body-care",
    brand: "WANCARE",
    summary:
      "Yatan hastalarda vücut temizliğine yönelik antibakteriyel, antifungal ve virüsidal ıslak kese.",
    image: "/images/products/antibacterial-kese.png",
  },
  {
    id: "sodium-hypo",
    name: "ONECARE Sodyum Hipoklorit %5",
    slug: "onecare-sodium-hypochlorite-5",
    categoryId: "antiseptics",
    brand: "ONE CARE",
    summary: "Yüzey ve ortam dezenfeksiyonunda kullanılan sodyum hipoklorit çözeltisi.",
    image: "/images/products/sodium-hypochlorite.png",
  },
];
