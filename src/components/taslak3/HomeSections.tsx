import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { products } from "@/data/products";
import { fairs, oemContent, oemSteps } from "@/data/content";

const spotlightProducts = [products[2], products[0], products[7], products[12]];

const disciplines = [
  ["01", "Ürün geliştirme", "Formülasyon, kullanım senaryosu ve ambalaj ihtiyacı birlikte ele alınır."],
  ["02", "Kontrollü üretim", "GMP altyapısı ve temiz oda standartları üretimin merkezindedir."],
  ["03", "Kalite disiplini", "Süreçler tekrarlanabilir, izlenebilir ve kurumsal ölçekte yönetilir."],
  ["04", "Global tedarik", "Üretim 50’den fazla ülkeye uzanan iş ortaklığı ağına bağlanır."],
] as const;

export function HomeSections() {
  return (
    <>
      <section className="bg-[#090909] text-[#f2efe8]">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-16 lg:pt-14">
          <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] tracking-[0.2em] text-white/35 uppercase">
            <span>KAF Grup · Medical Manufacturing</span>
            <span className="hidden sm:inline">İstanbul + Van · Türkiye</span>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-12 lg:py-16">
            <div className="lg:col-span-9">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[#e58a1b] uppercase">Concept 03 · Dark Manufacturer</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.4rem]">
                Medikal üretim, güçlü bir görsel dil ve gerçek üretim kanıtlarıyla anlatılıyor.
              </h1>
            </div>
            <div className="flex flex-col justify-end lg:col-span-3">
              <p className="text-sm leading-6 text-white/45">
                Daha az teknik kutu, daha fazla üretim hissi. Ürünler, tesis, kalite ve global ağ aynı marka atmosferinde ilerliyor.
              </p>
              <a href="#uretim" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#e58a1b]">
                Üretim hikâyesi <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[1.4fr_.6fr]">
            <figure className="relative min-h-[320px] overflow-hidden bg-[#171717] sm:min-h-[430px] lg:min-h-[520px]">
              <Image
                src="/images/factory/van-fabrika.jpg"
                alt="KAF Grup Van üretim tesisi"
                fill
                priority
                sizes="(max-width:768px) 100vw, 70vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <div>
                  <p className="text-[10px] tracking-[0.18em] text-white/45 uppercase">Production site</p>
                  <p className="mt-2 text-xl font-medium">Van · YYÜ Teknokent</p>
                </div>
                <span className="text-[10px] tracking-[0.16em] text-white/40 uppercase">Real facility image</span>
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {spotlightProducts.slice(0, 2).map((product, index) => (
                <div key={product.id} className={`relative min-h-[200px] overflow-hidden ${index === 0 ? "bg-[#ddd9cf]" : "bg-[#171717]"}`}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-contain p-6 sm:p-9" />
                  <span className={`absolute left-4 top-4 text-[9px] tracking-[0.18em] uppercase ${index === 0 ? "text-black/45" : "text-white/35"}`}>Selected product</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.id} className="bg-[#0f0f0f] px-4 py-5 sm:px-5">
                <p className="text-2xl font-semibold tracking-[-0.03em]">{m.value}{m.unit ? <span className="ml-1 text-sm">{m.unit}</span> : null}</p>
                <p className="mt-1 text-[10px] text-white/35">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="uretim" className="bg-[#d8d4ca] text-[#111]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.2em] text-[#8f4e00] uppercase">01 · Manufacturing culture</p>
              <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Üretim kültürü, sayfanın ana hikâyesi.</h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-black/55">
                Tasarım burada “teknik sistem ekranı” gibi görünmek yerine yüksek kalite üretim markası hissi veriyor. Bilgi, sade çizgiler ve gerçek içerik üzerinden akıyor.
              </p>
            </div>
            <div className="lg:col-span-7">
              {disciplines.map(([n, title, desc]) => (
                <article key={n} className="grid gap-3 border-t border-black/15 py-6 sm:grid-cols-[58px_190px_1fr] sm:items-baseline">
                  <span className="text-xs text-[#8f4e00]">{n}</span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-black/55">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sistemler" className="bg-[#0c0c0c] text-[#f2efe8]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">02 · Product systems</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Ürünler katalog kutuları değil, büyük görsel sahneler halinde.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/40">Klinik kullanım alanı, ürün ailesi ve marka karakteri daha güçlü kadrajlarla ayrışıyor.</p>
          </div>

          <div className="mt-10 space-y-4">
            {spotlightProducts.map((product, index) => (
              <article key={product.id} className={`grid overflow-hidden border border-white/10 ${index % 2 ? "lg:grid-cols-[.8fr_1.2fr]" : "lg:grid-cols-[1.2fr_.8fr]"}`}>
                <div className={`relative min-h-[300px] ${index % 2 ? "lg:order-2" : ""} ${index % 2 ? "bg-[#171717]" : "bg-[#dedad0]"}`}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width:1024px) 100vw, 55vw" className="object-contain p-10 sm:p-14 lg:p-16" />
                </div>
                <div className={`flex flex-col justify-between p-6 sm:p-8 lg:p-10 ${index % 2 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-white/30 uppercase">
                    <span>0{index + 1}</span><span>{product.brand}</span>
                  </div>
                  <div className="mt-16">
                    <h3 className="max-w-md text-3xl font-semibold tracking-[-0.035em]">{product.name}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/45">{product.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kalite" className="bg-[#151515] text-[#f2efe8]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">03 · Quality</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Kaliteyi ikonlarla değil, ölçülebilir gerçeklerle göster.</h2>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 border-y border-white/10">
              <div className="border-r border-white/10 py-7 pr-5"><p className="text-4xl font-semibold">GMP</p><p className="mt-2 text-xs text-white/35">Belgeli üretim altyapısı</p></div>
              <div className="py-7 pl-5"><p className="text-4xl font-semibold">3</p><p className="mt-2 text-xs text-white/35">Temiz oda sınıfı</p></div>
              <div className="border-r border-t border-white/10 py-7 pr-5"><p className="text-3xl font-semibold">1.000</p><p className="mt-2 text-xs text-white/35">Class 1.000</p></div>
              <div className="border-t border-white/10 py-7 pl-5"><p className="text-3xl font-semibold">100.000</p><p className="mt-2 text-xs text-white/35">Class 100.000</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#d8d4ca] text-[#111]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative min-h-[360px] overflow-hidden bg-[#c9c3b7] sm:min-h-[480px]">
                <Image src={oemContent.image} alt="KAF Grup OEM ve Private Label" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-between">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#8f4e00] uppercase">04 · OEM / Private Label</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Markaya özel üretim, ayrı bir servis değil; üretim kültürünün devamı.</h2>
                <p className="mt-5 text-sm leading-6 text-black/55">{oemContent.summary}</p>
              </div>
              <ol className="mt-10 border-t border-black/15">
                {oemSteps.map((step) => (
                  <li key={step.step} className="grid gap-2 border-b border-black/15 py-5 sm:grid-cols-[48px_150px_1fr] lg:grid-cols-[42px_1fr]">
                    <span className="text-xs text-[#8f4e00]">{step.step}</span>
                    <div><strong className="text-sm">{step.title}</strong><p className="mt-1 text-xs leading-5 text-black/45">{step.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="global" className="bg-[#090909] text-[#f2efe8]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">05 · Global presence</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Üretim Türkiye’de. Marka dünyada görünür.</h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">Fuarlar ve ihracat ağı, global B2B güveni destekleyen gerçek temas noktaları olarak kullanılır.</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {fairs.slice(0, 3).map((fair) => (
                  <figure key={fair.id} className="group relative min-h-[300px] overflow-hidden bg-[#171717]">
                    <Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5"><p className="text-lg font-semibold">{fair.name}</p><p className="mt-1 text-xs text-white/45">{fair.location}</p></figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-white/40">OEM, distribütörlük veya kurumsal tedarik</p>
                <a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#e58a1b]">{company.contact.email}<ArrowUpRight className="size-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
