# KAF Grup Dijital Dönüşüm — Tasarım Sunumu

Müşteriye tek bağlantıda sunulan Next.js projesi. Giriş sayfasında dijital dönüşüm avantajları ve üç birbirinden farklı ana sayfa taslağı yer alır.

## Rotalar

| Rota | Açıklama |
| --- | --- |
| `/` | Dijital dönüşüm ve tasarım seçim sayfası |
| `/taslak-1` | Kurumsal güven tasarımı |
| `/taslak-2` | Editoryal ürün odaklı tasarım |
| `/taslak-3` | Endüstriyel / teknolojik tasarım |

Sunum projesi arama motorlarına kapalıdır (`robots.ts` + sayfa metadata `noindex`).

## Teknik yığın

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Vercel uyumlu statik üretim

## Kurulum

Node.js 20+ önerilir.

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Tarayıcıda: [http://localhost:3000](http://localhost:3000)

## Production build

```bash
npm run build
npm start
```

## Vercel’e yayınlama

1. Bu klasörü GitHub / GitLab / Bitbucket’a push edin (veya Vercel CLI kullanın).
2. [vercel.com](https://vercel.com) → **Add New Project** → depoyu seçin.
3. Framework: **Next.js** (otomatik algılanır).
4. Build Command: `npm run build`
5. Output: Next.js varsayılanı (ek ayar gerekmez).
6. İsteğe bağlı ortam değişkeni: `NEXT_PUBLIC_SITE_URL=https://sizin-domaininiz.com`
7. **Deploy**

CLI ile:

```bash
npx vercel
```

Production için:

```bash
npx vercel --prod
```

## Klasör yapısı

```text
src/
  app/                 # Rotalar, robots, sitemap, layout
  components/
    presentation/      # (gerekirse genişletme)
    shared/            # ConceptBar, Reveal, JsonLd
    taslak1/           # Kurumsal tasarım bileşenleri
    taslak2/           # Editoryal tasarım bileşenleri
    taslak3/           # Endüstriyel tasarım bileşenleri
  data/                # Şirket, ürün, haber, SEO mimarisi
  lib/                 # Schema yardımcıları
public/images/         # Yerel, optimize görseller (hotlink yok)
```

## İçerik kaynağı

Metinler ve görseller [kafgrup.com](https://kafgrup.com/) üzerinden derlenmiştir. Tema şablonundan kalan sahte iletişim (Seattle / Onum) kullanılmamıştır.

Gerçek iletişim:

- Atakent Mah. 221 Sk. No:3A Rota Office A Blok Kat:14 D:82-83 K.Çekmece / İstanbul
- info@kafgrup.com
- +90 212 471 42 00 / +90 530 545 46 87

## SEO mimarisi (gelecek canlı site)

Kod seviyesinde hazır olanlar:

- Metadata ve canonical alanları
- `robots.ts` / `sitemap.ts`
- Organization, Product, Article, FAQ, Breadcrumb schema yardımcıları (`src/lib/schema.ts`)
- TR/EN rota ve hreflang planı (`src/data/seo-architecture.ts`)
- Ürün / kategori veri modeli (`src/data/products.ts`)
