import Image from "next/image";
import { company } from "@/data/company";
import { productSets } from "@/data/media";

const stories = [
  {
    id: "hikaye-1",
    num: "01",
    brand: "ONESEPT",
    name: "ONESEPT PA",
    image: productSets.taslak2[0],
    layout: "visual-left" as const,
    lead: "Yüksek düzey dezenfeksiyon hattının klinik omurgası.",
    body: "Perasetik asit bazlı formülasyon; endoskop ve tıbbi cihaz protokollerinde tekrarlanabilir performans için tasarlandı. Katalogda önce ürünün hikâyesi, sonra teknik dipnot gelir.",
    notes: ["Yüksek düzey", "Endoskop uyumu", "Seri üretim"],
  },
  {
    id: "hikaye-2",
    num: "02",
    brand: "ONE GEL",
    name: "Ultrason / EKG / IPL Jel",
    image: productSets.taslak2[1],
    layout: "full-bleed" as const,
    lead: "Tanı cihazıyla temas eden her mililitrede tutarlılık.",
    body: "İletkenlik ve viskozite dengesi; muayenehane ve klinik rutininin görünmeyen parçası. Büyük görsel, kısa dipnot — dergi kapağından sayfa ikiye.",
    notes: ["İletkenlik", "Stabil formül", "Klinik kullanım"],
  },
  {
    id: "hikaye-3",
    num: "03",
    brand: "WANCARE",
    name: "Antibakteriyel Islak Kese",
    image: productSets.taslak2[2],
    layout: "text-left-circle" as const,
    lead: "Yatan hasta bakımında pratik hijyen.",
    body: "Antibakteriyel ve antifungal etki; bakım ekibinin temposuna uygun kullanıma hazır format. Ürün kadrajı dairesel bir pencere gibi — ambalaj kesilmeden.",
    notes: ["Hasta bakımı", "Hazır format", "Koruyucu formül"],
  },
] as const;

const indexItems = [
  { name: "Dezenfeksiyon", image: productSets.taslak2[0] },
  { name: "Medikal jel", image: productSets.taslak2[1] },
  { name: "Hasta bakımı", image: productSets.taslak2[2] },
  { name: "Yüzey mendilleri", image: productSets.taslak2[3] },
  { name: "Bariyer bakım", image: productSets.taslak2[4] },
  { name: "Yüksek düzey GA", image: productSets.taslak2[5] },
] as const;

const oemChapters = [
  { n: "01", title: "Brief", text: "Marka hedefi, pazar ve regülasyon çerçevesi." },
  { n: "02", title: "Formülasyon", text: "Laboratuvar denemeleri ve stabilite." },
  { n: "03", title: "Numune", text: "Onay için kontrollü numune üretimi." },
  { n: "04", title: "Üretim", text: "GMP hattında seri üretim." },
  { n: "05", title: "Ambalaj", text: "Etiket, dil ve marka kimliği." },
  { n: "06", title: "Teslimat", text: "Test, sertifikasyon ve sevkiyat." },
] as const;

const diary = [
  {
    date: "2025",
    place: "Düsseldorf",
    title: "MEDICA notları",
    image: "/images/fairs/medica.jpg",
    wide: true,
    note: "Stand ziyaretleri ve dağıtım görüşmeleri.",
  },
  {
    date: "2024",
    place: "Dubai",
    title: "Arab Health",
    image: "/images/fairs/arab-health.jpg",
    wide: false,
    note: "Ortadoğu alıcılarıyla kısa saha günlüğü.",
  },
  {
    date: "2024",
    place: "İstanbul",
    title: "Expomed",
    image: "/images/fairs/expomed.jpg",
    wide: false,
    note: "Yerel ağ ve distribütör buluşmaları.",
  },
] as const;

export function HomeSections() {
  return (
    <>
      {/* 1. Premium editorial cover */}
      <section aria-labelledby="cover-title" className="relative overflow-hidden bg-[#f3efe8]">
        <div className="mx-auto grid min-h-[92svh] max-w-[1500px] lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative z-10 flex flex-col justify-between border-r border-black/10 px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
            <div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-black/45 uppercase">
              <span>KAF Journal</span><span>Issue 01 — 2026</span>
            </div>
            <div className="py-14 lg:py-0">
              <p className="text-xs font-semibold tracking-[0.24em] text-[#E08000] uppercase">Medikal ürün kültürü</p>
              <h1 id="cover-title" className="mt-5 font-[family-name:var(--font-fraunces)] text-[4rem] leading-[0.84] tracking-[-0.05em] text-black sm:text-7xl lg:text-[6.5rem]">
                Form.
                <span className="block italic text-black/32">Function.</span>
                Care.
              </h1>
              <p className="mt-7 max-w-md text-base leading-relaxed text-black/55 sm:text-lg">
                KAF Grup ürün ailesine katalog gibi değil, güçlü bir marka dünyası gibi yaklaşan editoryal deneyim.
              </p>
              <a href="#hikaye-1" className="mt-8 inline-flex border-b border-black pb-1 text-sm font-semibold tracking-[0.12em] text-black uppercase transition hover:border-[#E08000] hover:text-[#E08000]">Sayfayı çevir →</a>
            </div>
            <div className="flex items-end justify-between border-t border-black/10 pt-5 text-xs text-black/45">
              <span>Products / OEM / Global</span><span>01</span>
            </div>
          </div>

          <div className="relative min-h-[620px] bg-[#e6e0d7] lg:min-h-full">
            <div className="absolute inset-0 opacity-60" style={{backgroundImage:'linear-gradient(rgba(0,0,0,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.06) 1px,transparent 1px)',backgroundSize:'48px 48px'}} />
            <div className="absolute left-[8%] top-[7%] text-[14vw] font-semibold leading-none tracking-[-0.08em] text-black/[0.045] lg:text-[9vw]">KAF</div>
            <div className="absolute inset-x-[8%] bottom-[10%] top-[9%]">
              <Image src={productSets.taslak2[0]} alt="ONESEPT PA" fill priority sizes="(max-width:1024px) 80vw, 48vw" className="object-contain object-center drop-shadow-[0_28px_30px_rgba(0,0,0,0.16)]" />
            </div>
            <div className="absolute right-[7%] top-[10%] w-40 border-t border-black/25 pt-3 text-xs leading-relaxed text-black/55 sm:w-48">
              <span className="block font-semibold text-black">Cover story</span> High-level disinfection as visual identity.
            </div>
            <div className="absolute bottom-[7%] left-[7%] flex gap-2">
              {productSets.taslak2.slice(1,3).map((src) => (
                <div key={src} className="relative h-24 w-20 border border-black/10 bg-white/65 backdrop-blur sm:h-32 sm:w-28">
                  <Image src={src} alt="" fill sizes="112px" className="object-contain p-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editor intro */}
      <section
        id="giris"
        className="scroll-mt-24 border-y border-black/10 bg-white"
      >
        <div className="mx-auto max-w-[720px] px-4 py-12 sm:px-8 lg:py-14">
          <p className="text-sm tracking-[0.2em] text-[#E08000] uppercase">
            Editörden
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl leading-tight text-black sm:text-4xl">
            Bu sayı, ürünün kendisini merkeze alır.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/60">
            Kurumsal metrik listeleri yerine üç ürünün hikâyesi; OEM sürecini
            dergi ritmiyle anlatan bir zaman çizgisi; fuarlardan kısa saha
            notları. {company.shortName} burada bir katalog kapağı gibi okunur.
          </p>
          <p className="mt-6 border-l-2 border-[#E08000] pl-4 text-base italic text-black/50">
            Global erişim: Fransa’dan Kore’ye, Suudi Arabistan’dan Brezilya’ya —
            dipnot olarak, tablo olarak değil.
          </p>
        </div>
      </section>

      {/* 3. Three product stories — different compositions */}
      {stories.map((story) => {
        if (story.layout === "visual-left") {
          return (
            <section
              key={story.id}
              id={story.id}
              className="scroll-mt-24 border-b border-black/10 bg-[#f7f5f1]"
            >
              <div className="mx-auto grid max-w-[1400px] lg:grid-cols-12">
                <div className="relative min-h-[420px] bg-[#ebe7e0] lg:col-span-7 lg:min-h-[560px]">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="(max-width:1024px) 100vw, 58vw"
                    className="object-contain p-10 sm:p-16"
                  />
                </div>
                <div className="flex flex-col justify-center px-4 py-10 sm:px-8 lg:col-span-5 lg:px-12 lg:py-12">
                  <p className="font-[family-name:var(--font-fraunces)] text-6xl text-black/10">
                    {story.num}
                  </p>
                  <p className="mt-2 text-sm tracking-[0.18em] text-[#E08000] uppercase">
                    {story.brand}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl text-black sm:text-4xl">
                    {story.name}
                  </h2>
                  <p className="mt-4 text-lg font-medium text-black/80">
                    {story.lead}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-black/55">
                    {story.body}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {story.notes.map((n) => (
                      <li
                        key={n}
                        className="border border-black/15 px-2.5 py-1 text-xs tracking-wide text-black/55"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        }

        if (story.layout === "full-bleed") {
          return (
            <section
              key={story.id}
              id={story.id}
              className="scroll-mt-24 relative border-b border-black/10 bg-black text-white"
            >
              <div className="relative mx-auto min-h-[520px] max-w-[1400px] lg:min-h-[640px]">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="100vw"
                  className="object-contain object-center p-8 opacity-90 sm:p-16 lg:p-20"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pt-24 pb-10 sm:px-8 lg:px-12">
                  <p className="text-sm tracking-[0.18em] text-[#E08000] uppercase">
                    {story.num} · {story.brand}
                  </p>
                  <h2 className="mt-2 max-w-xl font-[family-name:var(--font-fraunces)] text-3xl sm:text-5xl">
                    {story.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
                    {story.body}
                  </p>
                </div>
              </div>
            </section>
          );
        }

        return (
          <section
            key={story.id}
            id={story.id}
            className="scroll-mt-24 border-b border-black/10 bg-white"
          >
            <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-16">
              <div className="lg:col-span-6">
                <p className="font-[family-name:var(--font-fraunces)] text-6xl text-black/10">
                  {story.num}
                </p>
                <p className="text-sm tracking-[0.18em] text-[#E08000] uppercase">
                  {story.brand}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl text-black sm:text-4xl">
                  {story.name}
                </h2>
                <p className="mt-4 text-lg text-black/80">{story.lead}</p>
                <p className="mt-4 text-base leading-relaxed text-black/55">
                  {story.body}
                </p>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full bg-[#f7f5f1] lg:col-span-6 lg:max-w-lg">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width:1024px) 80vw, 420px"
                  className="object-contain p-10"
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* 4. Visual product family index */}
      <section id="indeks" className="scroll-mt-24 bg-[#111111] py-12 text-white lg:py-14">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">
            Ürün aileleri indeksi
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
            {indexItems.map((item) => (
              <div
                key={item.name}
                className="border border-white/10 bg-white/[0.03] p-2 sm:p-3"
              >
                <div className="relative aspect-square bg-white/5">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width:640px) 45vw, 14vw"
                    className="object-contain p-3"
                  />
                </div>
                <p className="mt-2 text-xs tracking-wide text-white/70 sm:text-sm">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OEM editorial chapters — not same as T1 3-step */}
      <section id="fikirden" className="scroll-mt-24 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-8 lg:py-16">
          <p className="text-sm tracking-[0.2em] text-[#E08000] uppercase">
            OEM
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl text-black sm:text-5xl">
            Fikrinizden ürüne
          </h2>
          <p className="mt-4 text-lg text-black/55">
            Altı bölümlük editoryal zaman çizgisi — infografik değil, sayfa
            ritmi.
          </p>
          <div className="mt-8 space-y-0">
            {oemChapters.map((ch) => (
              <article
                key={ch.n}
                className="grid gap-2 border-t border-black/15 py-5 sm:grid-cols-[5rem_1fr] sm:gap-8"
              >
                <p className="font-[family-name:var(--font-fraunces)] text-2xl text-[#E08000] sm:text-3xl">
                  {ch.n}
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-xl text-black sm:text-2xl">
                    {ch.title}
                  </h3>
                  <p className="mt-1 text-base text-black/55">{ch.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Facility short note */}
      <section id="tesis" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-12 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl text-black">
              Tesis notu
            </h2>
            <p className="mt-4 text-base leading-relaxed text-black/55">
              Van ve İstanbul tesisleri; Class temiz oda sınıfları ve GMP
              sterilizasyon üniteleri. Bu sayfada fabrika görseli küçük bir
              kanıt karesi — kapak değil.
            </p>
            <dl className="mt-6 space-y-2 text-sm text-black/50">
              <div className="flex justify-between border-b border-black/10 py-2">
                <dt>Alan</dt>
                <dd className="font-medium text-black">15.000 m²</dd>
              </div>
              <div className="flex justify-between border-b border-black/10 py-2">
                <dt>Standart</dt>
                <dd className="font-medium text-black">GMP</dd>
              </div>
            </dl>
          </div>
          <figure className="mx-auto w-full max-w-[520px] lg:col-span-7">
            <div className="relative aspect-[16/10] border border-black/10">
              <Image
                src="/images/factory/van-fabrika.jpg"
                alt="Üretim tesisi"
                fill
                sizes="520px"
                className="object-cover object-[center_40%]"
              />
            </div>
            <figcaption className="mt-2 text-sm text-black/40">
              Van YYÜ Teknokent — küçük çerçeve
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 7. Fair diary — 3 items only */}
      <section id="gunluk" className="scroll-mt-24 border-y border-black/10 bg-[#f7f5f1]">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-8 lg:px-12">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl text-black">
            Fuar günlüğü
          </h2>
          <p className="mt-2 text-base text-black/50">
            Üç seçilmiş not — afiş duvarı değil.
          </p>

          <div className="mt-8 hidden gap-4 lg:grid lg:grid-cols-12">
            <article className="lg:col-span-7">
              <div className="relative aspect-[16/9] bg-[#ebe7e0]">
                <Image
                  src={diary[0].image}
                  alt={diary[0].title}
                  fill
                  sizes="60vw"
                  className="object-cover object-[center_40%]"
                />
              </div>
              <p className="mt-3 text-sm text-[#E08000]">
                {diary[0].date} · {diary[0].place}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl">
                {diary[0].title}
              </h3>
              <p className="mt-1 text-base text-black/55">{diary[0].note}</p>
            </article>
            <div className="flex flex-col gap-4 lg:col-span-5">
              {diary.slice(1).map((item) => (
                <article key={item.title} className="flex gap-4">
                  <div className="relative aspect-square w-36 shrink-0 bg-[#ebe7e0] sm:w-40">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#E08000]">
                      {item.date} · {item.place}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-fraunces)] text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-black/55">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile horizontal diary */}
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2 lg:hidden">
            {diary.map((item) => (
              <article
                key={item.title}
                className="w-[78%] shrink-0 border border-black/10 bg-white p-3"
              >
                <div
                  className={`relative bg-[#ebe7e0] ${
                    item.wide ? "aspect-[16/9]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="80vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm text-[#E08000]">
                  {item.date} · {item.place}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-fraunces)] text-xl">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Catalog / quote CTA */}
      <section
        id="katalog"
        className="scroll-mt-24 bg-black px-4 py-16 text-center text-white sm:px-8"
      >
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">
          Katalog veya özel teklif
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-white/55">
          Ürün hikâyesini iş ortaklığına çevirmek için yazın.
        </p>
        <a
          href={`mailto:${company.contact.email}?subject=Katalog%20/%20teklif`}
          className="mt-8 inline-flex bg-[#E08000] px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-black uppercase transition hover:bg-white"
        >
          Talep gönder
        </a>
      </section>
    </>
  );
}
