import Image from "next/image";
import { company } from "@/data/company";
import { productSets } from "@/data/media";
import { news } from "@/data/content";

const heroProducts = productSets.taslak1.slice(0, 3);

const band = [
  { value: "15.000", unit: "m²", label: "Kapalı alan" },
  { value: "50+", unit: "", label: "İhracat ülkesi" },
  { value: "GMP", unit: "", label: "Üretim standardı" },
  { value: "25+", unit: "", label: "Yıl tecrübe" },
] as const;

const reasons = [
  {
    title: "Temiz oda disiplini",
    text: "Class 1000, 10.000 ve 100.000 üretim alanlarında kontrollü medikal üretim.",
  },
  {
    title: "İki tesis, tek standart",
    text: "İstanbul merkezi ve Van YYÜ Teknokent tesisi aynı kalite protokolüyle çalışır.",
  },
  {
    title: "Uluslararası tedarik",
    text: "Avrupa, Ortadoğu, Asya ve Amerika pazarlarına düzenli sevkiyat ağı.",
  },
] as const;

const regions = [
  {
    code: "EU",
    name: "Avrupa",
    note: "Fransa, İsviçre, Almanya",
    weight: "Yoğun sevkiyat",
  },
  {
    code: "ME",
    name: "Ortadoğu",
    note: "Suudi Arabistan, Ürdün, BAE",
    weight: "Büyüyen talep",
  },
  {
    code: "AS",
    name: "Asya",
    note: "Filipinler, Kore, Singapur",
    weight: "Stratejik pazar",
  },
  {
    code: "AM",
    name: "Amerika",
    note: "Brezilya",
    weight: "Seçili tedarik",
  },
] as const;

const lines = [
  {
    name: "Yüzey ve el antisepsisi",
    desc: "ONESPRAY ve yüzey hatları — klinik ve kamu alanı kullanımı.",
    count: "12+ referans",
    image: productSets.taslak1[0],
    tone: "bg-[#f4f5f8]",
  },
  {
    name: "Cihaz ve endoskop dezenfeksiyonu",
    desc: "Yüksek düzey dezenfektan ailesi — hastane sterilizasyon süreçleri.",
    count: "8+ referans",
    image: productSets.taslak1[1],
    tone: "bg-white",
  },
  {
    name: "Medikal jel sistemleri",
    desc: "Lidokain kaydırıcı ve ultrason/EKG jelleri.",
    count: "6+ referans",
    image: productSets.taslak1[2],
    tone: "bg-[#f4f5f8]",
  },
  {
    name: "Hasta bakım ve bariyer",
    desc: "İnkontinans ve antibakteriyel bakım ürünleri.",
    count: "10+ referans",
    image: productSets.taslak1[5],
    tone: "bg-white",
  },
] as const;

const selectedNews = news.slice(0, 2);

export function HomeSections() {
  return (
    <>
      {/* 1. Premium corporate hero */}
      <section aria-labelledby="t1-hero-title" className="relative overflow-hidden border-b border-[#d8dce6] bg-[#f8f9fb]">
        <div className="mx-auto grid min-h-[min(88svh,860px)] max-w-[1360px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#E08000] uppercase">
              <span className="h-px w-10 bg-[#E08000]" /> Global medikal üretici
            </div>
            <h1 id="t1-hero-title" className="mt-6 max-w-[720px] text-[3.25rem] leading-[0.94] font-semibold tracking-[-0.055em] text-[#11162d] sm:text-6xl lg:text-[4.9rem]">
              Sağlık için üretim.
              <span className="block text-[#8b91a0]">Dünya için güven.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#5c6478] sm:text-lg">
              GMP belgeli üretim, temiz oda altyapısı ve 50+ ülkeye uzanan tedarik ağıyla; distribütörler ve OEM partnerleri için ölçeklenebilir medikal çözümler.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#hatlar" className="inline-flex items-center bg-[#11162d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#E08000]">Ürün sistemlerini keşfet</a>
              <a href="#ortaklik" className="inline-flex items-center border border-[#11162d]/20 bg-white/80 px-6 py-4 text-sm font-semibold text-[#11162d] transition hover:border-[#E08000] hover:text-[#E08000]">OEM / Private Label</a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-[#cfd4de] pt-6 sm:grid-cols-4">
              {band.map((item) => (
                <div key={item.label}>
                  <p className="text-xl font-semibold tracking-tight text-[#11162d]">{item.value}<span className="ml-1 text-xs text-[#E08000]">{item.unit}</span></p>
                  <p className="mt-1 text-[11px] leading-tight text-[#7a8294]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
            <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup üretim tesisi" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fb] via-[#f8f9fb]/10 to-transparent lg:block" />
            <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2 sm:inset-x-8 sm:bottom-8 lg:left-auto lg:right-8 lg:w-[66%]">
              {heroProducts.map((src, i) => (
                <div key={src} className="relative aspect-[4/5] border border-white/50 bg-white/92 p-2 shadow-[0_18px_50px_rgba(10,18,38,0.18)] backdrop-blur">
                  <Image src={src} alt="" fill sizes="180px" className="object-contain p-4" />
                  <span className="absolute left-3 top-3 text-[10px] font-semibold tracking-[0.16em] text-[#11162d]/45">0{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why KAF — proof */}
      <section id="kanit" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#E08000] uppercase">
              Neden KAF Grup?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1a1f4d] sm:text-4xl">
              Kurumsal kanıt, ölçülebilir kapasite
            </h2>
            <figure className="mt-8 max-w-md overflow-hidden border border-[#d8dce6]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/factory/van-fabrika.jpg"
                  alt="Van üretim tesisi"
                  fill
                  sizes="(max-width:1024px) 100vw, 400px"
                  className="object-cover object-[center_40%]"
                />
              </div>
              <figcaption className="bg-[#f4f5f8] px-4 py-3 text-sm text-[#5c6478]">
                Van YYÜ Teknokent — üretim kanıtı
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-[#d8dce6] border-y border-[#d8dce6]">
              {reasons.map((r, i) => (
                <li key={r.title} className="grid gap-2 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="text-sm font-semibold text-[#E08000]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a1f4d]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-[#5c6478]">
                      {r.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Export network — visual map-like blocks (NOT same 4-col as before) */}
      <section id="ag" className="scroll-mt-24 bg-[#f4f5f8]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-[#E08000] uppercase">
                İhracat ağı
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1a1f4d] sm:text-4xl">
                Bölgesel tedarik haritası
              </h2>
            </div>
            <p className="max-w-sm text-base text-[#5c6478]">
              Seçili pazar yoğunlukları — operasyonel öncelik sırasına göre.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-[#d8dce6] sm:grid-cols-2">
            {regions.map((region) => (
              <article
                key={region.code}
                className="group relative min-h-[160px] bg-white p-6 transition hover:bg-[#1a1f4d] sm:min-h-[180px] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm tracking-[0.2em] text-[#E08000] group-hover:text-[#E08000]">
                    {region.code}
                  </span>
                  <span className="text-sm text-[#8a93a6] group-hover:text-white/50">
                    {region.weight}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[#1a1f4d] group-hover:text-white">
                  {region.name}
                </h3>
                <p className="mt-2 text-base text-[#5c6478] group-hover:text-white/70">
                  {region.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Four horizontal category rows */}
      <section id="hatlar" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#E08000] uppercase">
            Ürün hatları
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[#1a1f4d] sm:text-4xl">
            Kategoriye göre keşif
          </h2>
          <p className="mt-3 max-w-lg text-base text-[#5c6478]">
            Ana sayfada katalog listesi yok — dört ana hat üzerinden yönlendirme.
          </p>

          {/* Mobile: horizontal snap selector */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2 lg:hidden">
            {lines.map((line) => (
              <a
                key={line.name}
                href={`mailto:${company.contact.email}?subject=${encodeURIComponent(line.name)}`}
                className="w-[78%] shrink-0 border border-[#d8dce6] bg-[#f4f5f8] p-4"
              >
                <div className="relative mx-auto aspect-square w-40">
                  <Image
                    src={line.image}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-contain p-3"
                  />
                </div>
                <p className="mt-3 text-lg font-semibold text-[#1a1f4d]">
                  {line.name}
                </p>
                <p className="mt-1 text-sm text-[#5c6478]">{line.count}</p>
              </a>
            ))}
          </div>

          {/* Desktop: full-width rows */}
          <div className="mt-10 hidden lg:block">
            {lines.map((line) => (
              <a
                key={line.name}
                href={`mailto:${company.contact.email}?subject=${encodeURIComponent(line.name)}`}
                className={`group grid grid-cols-12 items-center gap-6 border-t border-[#d8dce6] py-8 transition last:border-b hover:bg-[#fafbfc] ${line.tone}`}
              >
                <div className="col-span-5 pl-2">
                  <h3 className="text-2xl font-semibold text-[#1a1f4d] transition group-hover:text-[#E08000]">
                    {line.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#5c6478]">
                    {line.desc}
                  </p>
                </div>
                <p className="col-span-2 text-sm font-medium tracking-wide text-[#8a93a6]">
                  {line.count}
                </p>
                <div className="relative col-span-5 h-40">
                  <Image
                    src={line.image}
                    alt=""
                    fill
                    sizes="320px"
                    className="object-contain object-right p-2 transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quality */}
      <section id="kalite" className="scroll-mt-24 border-y border-[#d8dce6] bg-[#1a1f4d] text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16">
          <div className="max-w-lg">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#E08000] uppercase">
              Kalite ve sertifikasyon
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              GMP ve sterilizasyon altyapısı
            </h2>
          </div>
          <ul className="flex flex-wrap gap-3">
            {[...company.certifications, ...company.cleanRooms].map((item) => (
              <li
                key={item}
                className="border border-white/25 px-4 py-2.5 text-sm font-medium text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. OEM partnership CTA — HTML process, no infographic image */}
      <section id="ortaklik" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#E08000] uppercase">
            OEM / Private Label
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#1a1f4d] sm:text-4xl">
            Markanız için üretim ortaklığı
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5c6478]">
            İhtiyaç tanımından sevkiyata kadar; formülasyon, ambalaj ve
            sertifikasyon süreçlerini birlikte yönetiyoruz.
          </p>
          <ol className="mt-10 grid gap-6 border-t border-[#d8dce6] pt-10 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Brief",
                d: "Hedef pazar, regülasyon ve ambalaj gereksinimleri netleşir.",
              },
              {
                n: "02",
                t: "Üretim",
                d: "GMP koşullarında numune, revizyon ve seri üretim.",
              },
              {
                n: "03",
                t: "Teslimat",
                d: "Test, etiketleme ve anlaşılan takvimde sevkiyat.",
              },
            ].map((step) => (
              <li key={step.n}>
                <p className="font-mono text-sm text-[#E08000]">{step.n}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#1a1f4d]">
                  {step.t}
                </h3>
                <p className="mt-2 text-base text-[#5c6478]">{step.d}</p>
              </li>
            ))}
          </ol>
          <a
            href={`mailto:${company.contact.email}?subject=OEM%20ortakl%C4%B1k`}
            className="mt-10 inline-flex bg-[#E08000] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c66d00]"
          >
            OEM talebi gönderin
          </a>
        </div>
      </section>

      {/* 7. Two news only */}
      <section className="bg-[#f4f5f8]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
          <h2 className="text-2xl font-semibold text-[#1a1f4d]">
            Seçilmiş kurumsal haberler
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {selectedNews.map((item) => (
              <article key={item.id} className="border border-[#d8dce6] bg-white">
                <div className="relative aspect-[16/9] max-w-full bg-[#e8eaef]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width:1024px) 100vw, 560px"
                    className="object-cover object-[center_35%]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#8a93a6]">{item.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#1a1f4d]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact CTA */}
      <section
        id="iletisim"
        className="scroll-mt-24 border-t border-[#d8dce6] bg-white"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#1a1f4d]">
              Distribütörlük ve kurumsal tedarik için yazın
            </h2>
            <p className="mt-2 text-base text-[#5c6478]">
              {company.contact.address}
            </p>
          </div>
          <a
            href={`mailto:${company.contact.email}`}
            className="inline-flex shrink-0 bg-[#1a1f4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E08000]"
          >
            {company.contact.email}
          </a>
        </div>
      </section>
    </>
  );
}
