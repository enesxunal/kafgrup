import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { products } from "@/data/products";
import { exportMarkets, oemContent, oemSteps } from "@/data/content";

const systems = [
  { code: "01", title: "Instrument care", desc: "Tıbbi cihaz ve endoskop dezenfeksiyonu", image: products[2].image },
  { code: "02", title: "Surface control", desc: "Yüzey ve çevresel dezenfeksiyon", image: products[7].image },
  { code: "03", title: "Patient care", desc: "Bariyer ve antibakteriyel bakım", image: products[12].image },
  { code: "04", title: "Medical gels", desc: "Tanı ve uygulama destek ürünleri", image: products[0].image },
];

const productionFlow = [
  ["01", "Geliştirme", "Ürün ihtiyacı, formülasyon ve kullanım senaryosu"],
  ["02", "Kontrollü üretim", "GMP altyapısı ve temiz oda standartları"],
  ["03", "Kalite kontrol", "Üretim sürecinin kontrollü ve tekrarlanabilir ilerlemesi"],
  ["04", "Global tedarik", "50+ ülkeye uzanan dağıtım ve iş ortaklığı ağı"],
] as const;

export function HomeSections() {
  return (
    <>
      <section id="veri" className="overflow-hidden bg-[#0a0b0c] text-[#f3f0e8]">
        <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-5 text-[10px] tracking-[0.2em] text-white/40 uppercase">
            <span>KAF Grup · Medical Manufacturing</span>
            <span>İstanbul + Van · Türkiye</span>
          </div>

          <div className="py-10 sm:py-14 lg:py-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e58a1b] uppercase">Industrial systems / concept 03</p>
            <h1 className="mt-5 max-w-[1080px] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.65rem]">
              Medikal üretimi ürünlerden değil, üretim disiplininden anlatan bir dijital sistem.
            </h1>
            <div className="mt-7 grid gap-6 border-t border-white/12 pt-6 md:grid-cols-12">
              <p className="max-w-2xl text-base leading-7 text-white/55 md:col-span-7">
                KAF Grup’un temiz oda altyapısı, GMP üretim standardı, ürün aileleri ve global tedarik kabiliyeti; birbirinden kopuk kurumsal bloklar yerine tek bir üretim hikâyesi içinde ilerler.
              </p>
              <a href="#sistemler" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e58a1b] md:col-span-5 md:justify-self-end">
                Üretim sistemine geç <ArrowDownRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.05fr_1.45fr_.8fr]">
            <figure className="relative min-h-[250px] overflow-hidden bg-[#16191c] sm:min-h-[320px] lg:min-h-[390px]">
              <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill priority sizes="(max-width:1024px) 100vw, 32vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-[10px] tracking-[0.16em] text-white/65 uppercase">
                <span>Gerçek üretim tesisi</span><span>Van · YYÜ Teknokent</span>
              </figcaption>
            </figure>

            <div className="relative min-h-[300px] overflow-hidden bg-[#e3e0d8] text-[#111315] sm:min-h-[390px]">
              <div className="absolute inset-x-5 top-5 flex items-center justify-between border-b border-black/15 pb-3 text-[10px] tracking-[0.18em] text-black/45 uppercase sm:inset-x-7 sm:top-6">
                <span>Selected production</span><span>04 systems</span>
              </div>
              <div className="absolute inset-x-2 bottom-5 top-14 grid grid-cols-4 items-end gap-0 sm:inset-x-5 sm:bottom-6 sm:top-16">
                {systems.map((item, index) => (
                  <div key={item.code} className={`relative h-[78%] ${index % 2 ? "translate-y-[-7%]" : ""}`}>
                    <Image src={item.image} alt={item.title} fill sizes="(max-width:1024px) 24vw, 14vw" className="object-contain object-bottom p-1 sm:p-3" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/12 lg:grid-cols-1">
              {metrics.map((m) => (
                <div key={m.id} className="flex min-h-[118px] flex-col justify-between bg-[#111417] p-5 lg:min-h-0">
                  <p className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{m.value}{m.unit ? <span className="ml-1 text-base">{m.unit}</span> : null}</p>
                  <div><p className="text-xs font-medium text-white/70">{m.label}</p><p className="mt-1 text-[10px] leading-4 text-white/30">{m.detail}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sistemler" className="bg-[#111315] text-[#f3f0e8]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">01 · Production flow</p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Ürünün arkasındaki sistem görünür hale geliyor.</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-white/15">
                {productionFlow.map(([n, t, d]) => (
                  <article key={n} className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[54px_180px_1fr] sm:items-baseline">
                    <span className="text-xs text-[#e58a1b]">{n}</span>
                    <h3 className="text-lg font-semibold">{t}</h3>
                    <p className="max-w-xl text-sm leading-6 text-white/45">{d}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kalite" className="bg-[#dedbd3] text-[#121416]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-5 border-b border-black/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="text-[10px] tracking-[0.2em] text-[#9c5500] uppercase">02 · Quality architecture</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Kalite, ayrı bir bölüm değil; tüm yapının omurgası.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-black/55">GMP üretim altyapısı ile Class 1.000, 10.000 ve 100.000 temiz oda standartları sade ve ölçülü bir veri diliyle anlatılır.</p>
          </div>
          <div className="grid border-b border-black/15 md:grid-cols-3">
            {[ ["GMP", "Belgeli üretim altyapısı"], ["1.000 / 10.000 / 100.000", "Temiz oda sınıfları"], ["15.000 m²", "İstanbul + Van toplam kapalı alan"] ].map(([v,l], i) => (
              <div key={l} className={`py-8 md:px-7 ${i ? "md:border-l md:border-black/15" : ""}`}>
                <p className="text-3xl font-semibold tracking-[-0.04em] lg:text-4xl">{v}</p><p className="mt-3 text-sm text-black/50">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kapasite" className="bg-[#0a0b0c] text-[#f3f0e8]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">03 · Clinical systems</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Dört ürün sistemi. Tek üretim disiplini.</h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/45">Ürünler kutular içinde tekrar eden kartlar olarak değil; her biri ayrı bir klinik iş akışının parçası olarak sunulur.</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {systems.map((item, index) => (
                <article key={item.code} className="grid min-h-[240px] border-t border-white/15 py-7 sm:grid-cols-[72px_1fr_220px] sm:items-center">
                  <span className="mb-5 text-xs text-[#e58a1b] sm:mb-0">{item.code}</span>
                  <div className="pr-5"><h3 className="text-2xl font-semibold tracking-[-0.025em]">{item.title}</h3><p className="mt-2 text-sm text-white/45">{item.desc}</p></div>
                  <div className={`relative mt-6 h-44 overflow-hidden sm:mt-0 ${index % 2 ? "bg-[#d8d5cd]" : "bg-[#171a1d]"}`}>
                    <Image src={item.image} alt={item.title} fill sizes="220px" className="object-contain p-5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#181b1e] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#22272b]">
                <Image src={oemContent.image} alt="KAF Grup OEM ve Private Label üretim" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/15" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">04 · OEM / Private Label</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Markaya özel üretim, sistemin doğal devamı.</h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">{oemContent.summary}</p>
              <ol className="mt-8 border-t border-white/15">
                {oemSteps.map((step) => (
                  <li key={step.step} className="grid gap-2 border-b border-white/15 py-5 sm:grid-cols-[48px_160px_1fr]">
                    <span className="text-xs text-[#e58a1b]">{step.step}</span><strong className="text-sm">{step.title}</strong><span className="text-sm leading-6 text-white/40">{step.description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="global" className="bg-[#0a0b0c] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-9 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">05 · Global supply</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Üretim Türkiye’de. İş ortaklığı farklı pazarlarda.</h2></div>
            <div className="lg:col-span-7">
              <div className="grid border-y border-white/15 sm:grid-cols-2">
                {exportMarkets.map((market, index) => <div key={market.region} className={`py-5 sm:px-5 ${index % 2 ? "sm:border-l sm:border-white/15" : ""} ${index > 1 ? "border-t border-white/15" : ""}`}><p className="text-sm font-semibold">{market.region}</p><p className="mt-2 text-xs leading-5 text-white/40">{market.countries.join(" · ")}</p></div>)}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-white/45">OEM, distribütörlük veya kurumsal tedarik için</p><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#e58a1b]">{company.contact.email}<ArrowUpRight className="size-4" /></a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
