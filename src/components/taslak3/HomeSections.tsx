import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { categories, products } from "@/data/products";
import { exportMarkets, fairs, news, oemContent, oemSteps } from "@/data/content";
import { productSets, fairArtDirection } from "@/data/media";
import { Reveal } from "@/components/shared/Reveal";

const processImage = oemContent.image;

const productGroups = [
  {
    title: "Yüksek düzey dezenfeksiyon",
    blurb:
      "Endoskop ve tıbbi cihaz hatları için OPA, PA, GA ve enzim bazlı sistemler.",
    categoryIds: ["device-disinfectants"] as const,
    images: [productSets.taslak3[0], productSets.taslak3[1]],
  },
  {
    title: "Antisepsi ve yüzey",
    blurb:
      "El-cilt antisepsisi, hızlı yüzey spreyleri ve konsantre ortam çözümleri.",
    categoryIds: ["antiseptics"] as const,
    images: [productSets.taslak3[2], productSets.taslak3[5]],
  },
  {
    title: "Hasta bakım hattı",
    blurb:
      "Bariyer kremli inkontinans ve antibakteriyel bakım ürünleri.",
    categoryIds: ["incontinence", "body-care"] as const,
    images: [productSets.taslak3[4], productSets.taslak3[3]],
  },
  {
    title: "Medikal jel sistemleri",
    blurb:
      "Steril kaydırıcı ve iletken jel hatları — tanı ve girişimsel uygulamalar için.",
    categoryIds: ["lubricant-gel", "ultrasound-gel"] as const,
    images: [productSets.taslak3[6], productSets.taslak3[7]],
  },
] as const;

const qualityBand = [
  { label: "Belgelendirme", value: company.certifications[0] },
  {
    label: "Temiz oda",
    value: company.cleanRooms.map((r) => r.replace("Class ", "")).join(" · "),
  },
  { label: "Kapalı alan", value: "15.000 m²" },
  { label: "İhracat", value: "50+ ülke" },
] as const;

const fairMeta = Object.fromEntries(
  fairArtDirection.map((f) => [f.id, f]),
) as Record<
  string,
  (typeof fairArtDirection)[number]
>;

export function HomeSections() {
  return (
    <>
      {/* 1. Immersive industrial hero */}
      <section className="relative min-h-[92svh] overflow-hidden bg-[#070b12] text-white">
        <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup üretim tesisi" fill priority sizes="100vw" className="object-cover object-center opacity-48" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,18,.96)_0%,rgba(7,11,18,.78)_44%,rgba(7,11,18,.28)_75%,rgba(7,11,18,.5)_100%)]" />
        <div className="absolute inset-0 opacity-25" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',backgroundSize:'64px 64px'}} />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-[#E08000] uppercase"><span className="h-px w-12 bg-[#E08000]" /> Medical manufacturing systems</p>
            <h1 className="mt-7 text-[3.4rem] leading-[0.9] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
              Precision
              <span className="block text-white/35">at industrial scale.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/62 sm:text-lg">
              GMP belgeli üretim, temiz oda standardizasyonu ve 50+ ülkeye uzanan medikal tedarik altyapısı.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#urunler" className="inline-flex items-center gap-2 bg-[#E08000] px-6 py-4 text-sm font-semibold text-[#070b12] transition hover:bg-white">Sistemleri keşfet <ArrowUpRight className="size-4" aria-hidden /></a>
              <a href="#oem" className="inline-flex border border-white/25 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-white/55">OEM altyapısı</a>
            </div>
          </div>

          <div className="mt-14 grid max-w-4xl grid-cols-2 border-y border-white/15 sm:grid-cols-4">
            {qualityBand.map((item, i) => (
              <div key={item.label} className={`px-4 py-5 ${i>0?'border-l border-white/15':''}`}>
                <p className="text-[10px] tracking-[0.18em] text-white/35 uppercase">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white sm:text-xl">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product systems — large contain images */}
      <section id="urunler" className="scroll-mt-24 bg-[#0c1018]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.16em] text-[#E08000] uppercase">
                Ürün sistemleri
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Dört üretim hattı.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/55">
                Klinik ve hastane süreçlerine göre tanımlı ürün grupları —
                katalog satırlarından ziyade uygulanabilir sistemler.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 space-y-16 lg:space-y-24">
            {productGroups.map((group, index) => {
              const cats = categories.filter((c) =>
                (group.categoryIds as readonly string[]).includes(c.id),
              );
              const count = products.filter((p) =>
                (group.categoryIds as readonly string[]).includes(p.categoryId),
              ).length;

              return (
                <Reveal key={group.title} delay={index * 0.04}>
                  <article
                    className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                      index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-3 lg:col-span-7">
                      {group.images.map((src) => (
                        <div
                          key={src}
                          className="relative aspect-square bg-[#141a24]"
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            sizes="(max-width:1024px) 45vw, 28vw"
                            className="object-contain p-8 sm:p-10 lg:p-12"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="lg:col-span-5">
                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {group.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-white/55">
                        {group.blurb}
                      </p>
                      <ul className="mt-6 space-y-2">
                        {cats.map((c) => (
                          <li
                            key={c.id}
                            className="text-sm text-white/70"
                          >
                            {c.brand ? (
                              <span className="text-white/40">{c.brand} — </span>
                            ) : null}
                            {c.name}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-sm text-white/35">
                        {count} ürün hattı
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process modules — oemSteps */}
      <section id="oem" className="scroll-mt-24 bg-[#141a24]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="text-sm tracking-[0.16em] text-[#E08000] uppercase">
                  Özel üretim
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  {oemContent.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/55">
                  {oemContent.summary}
                </p>
                <div className="relative mt-8 aspect-[16/10] overflow-hidden bg-[#1a2230]">
                  <Image
                    src={processImage}
                    alt={oemContent.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8 lg:items-stretch">
              {oemSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.05}>
                  <div
                    className={`flex h-full flex-col border border-white/8 bg-[#1a2230] p-6 sm:p-7 ${
                      i === 1 ? "sm:mt-8" : i === 2 ? "sm:mt-16" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold tracking-[0.2em] text-[#E08000]">
                      {step.step}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capacity + export */}
      <section id="kapasite" className="scroll-mt-24 bg-[#0c1018]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-sm tracking-[0.16em] text-[#E08000] uppercase">
                  Kapasite
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                  Üretim gücü ve pazarlar
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/55">
                  {company.aboutExtended}
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                  {metrics.map((m) => (
                    <div key={m.id}>
                      <dt className="text-sm text-white/40">{m.label}</dt>
                      <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">
                        {m.value}
                        {m.unit ? (
                          <span className="ml-1 text-lg text-[#E08000]">
                            {m.unit}
                          </span>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-10 space-y-4 border-t border-white/8 pt-8">
                  {company.facilities.map((f) => (
                    <li key={f.city}>
                      <p className="text-lg font-semibold tracking-tight text-white">
                        {f.city}
                      </p>
                      <p className="mt-0.5 text-base text-white/50">{f.role}</p>
                      {"note" in f && f.note ? (
                        <p className="mt-1 text-sm text-white/35">{f.note}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-10 max-w-md overflow-hidden bg-[#141a24]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/factory/van-fabrika.jpg"
                      alt="Van YYÜ Teknokent üretim tesisi"
                      fill
                      sizes="(max-width:768px) 100vw, 28rem"
                      className="object-cover object-[center_40%]"
                    />
                  </div>
                  <p className="px-4 py-3 text-sm text-white/45">
                    Van — YYÜ Teknokent üretim tesisi
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-sm tracking-[0.16em] text-white/40 uppercase">
                  İhracat pazarları
                </p>
                <div className="mt-6 grid gap-px bg-white/8 sm:grid-cols-2">
                  {exportMarkets.map((market) => (
                    <div
                      key={market.region}
                      className="bg-[#141a24] px-6 py-8"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {market.region}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {market.countries.map((c) => (
                          <li key={c} className="text-base text-white/55">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/8 pt-8">
                  {company.cleanRooms.map((room) => (
                    <p
                      key={room}
                      className="text-sm tracking-wide text-white/50"
                    >
                      {room}
                    </p>
                  ))}
                  {company.certifications.map((cert) => (
                    <p
                      key={cert}
                      className="text-sm tracking-wide text-[#E08000]"
                    >
                      {cert}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Fairs */}
      <section id="fuarlar" className="scroll-mt-24 bg-[#141a24]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-[#E08000] uppercase">
              Uluslararası varlık
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Fuarlar
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fairs.map((fair, i) => {
              const art = fairMeta[fair.id];
              const aspect = art?.aspect ?? "1/1";
              const objectPosition = art?.objectPosition ?? "center center";

              return (
                <Reveal key={fair.id} delay={(i % 3) * 0.04}>
                  <article className="bg-[#1a2230]">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: aspect.replace("/", " / ") }}
                    >
                      <Image
                        src={fair.image}
                        alt={`${fair.name} — ${fair.location}`}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        className="object-cover"
                        style={{ objectPosition }}
                      />
                    </div>
                    <div className="px-5 py-4">
                      <h3 className="text-lg font-semibold tracking-tight text-white">
                        {fair.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/45">{fair.location}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. News briefs */}
      <section id="haberler" className="scroll-mt-24 bg-[#0c1018]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-[#E08000] uppercase">
              Güncel
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Haberler
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
            {news.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04}>
                <article className="grid gap-6 py-8 sm:grid-cols-[140px_1fr] sm:gap-10 lg:grid-cols-[160px_1fr_auto] lg:items-start">
                  <time
                    dateTime={item.date}
                    className="text-sm tracking-wide text-white/40"
                  >
                    {item.date}
                  </time>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/50">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="relative hidden h-24 w-36 overflow-hidden bg-[#141a24] lg:block">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact band */}
      <section id="iletisim" className="scroll-mt-24 bg-[#1a2230]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="text-sm tracking-[0.16em] text-[#E08000] uppercase">
                  İletişim
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                  Distribütörlük ve OEM için yazın.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">
                  Üretim, ihracat ve özel etiket talepleriniz için doğrudan
                  iletişim bilgileri.
                </p>
              </div>

              <div className="space-y-5 lg:col-span-5">
                <div>
                  <p className="text-sm text-white/40">Adres</p>
                  <p className="mt-1 text-base leading-relaxed text-white/80">
                    {company.contact.address}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/40">E-posta</p>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="mt-1 inline-block text-base text-white transition hover:text-[#E08000]"
                  >
                    {company.contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-white/40">Telefon</p>
                  <ul className="mt-1 space-y-1">
                    {company.contact.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-base text-white transition hover:text-[#E08000]"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={company.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#E08000] bg-[#E08000] px-5 py-3.5 text-sm font-semibold tracking-wide text-[#0c1018] transition hover:bg-[#c66d00]"
                >
                  kafgrup.com
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
