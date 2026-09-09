import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { products } from "@/data/products";
import { fairs, oemContent, oemSteps } from "@/data/content";

const systems = [products[2], products[7], products[12], products[0]];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#0b0b0b] text-white">
        <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-7 sm:px-8 lg:px-12 lg:pb-10 lg:pt-8">
          <div className="grid gap-5 border-b border-white/10 pb-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">KAF Grup / Medical Manufacturing</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-[3.8rem]">
                Üretim kabiliyetini gerçek kanıtlarla anlatan kurumsal yapı.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-md text-sm leading-6 text-white/45">KAF Grup’un üretim altyapısı, kalite standardı, ürün sistemleri ve global erişimi tek bir güçlü marka hikâyesi içinde ilerler.</p>
            </div>
          </div>

          <div className="mt-5 grid min-h-[390px] overflow-hidden border border-white/10 bg-[#121212] sm:min-h-[500px] lg:grid-cols-[.85fr_1.15fr] lg:min-h-[560px]">
            <div className="flex flex-col justify-between border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-white/35 uppercase">Manufacturing partner</p>
                <p className="mt-4 max-w-lg text-2xl font-semibold leading-tight sm:text-3xl">Formülasyondan seri üretime, medikal ürün geliştirme ve tedarik.</p>
              </div>
              <a href="#kanit" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f0a33e]">Üretim altyapısını incele <ArrowRight className="size-4" /></a>
            </div>
            <div className="grid grid-cols-3 bg-[#e6e1d8]">
              {systems.slice(0, 3).map((item, index) => (
                <figure key={item.id} className={`relative min-h-[300px] ${index ? "border-l border-black/10" : ""}`}>
                  <Image src={item.image} alt={item.name} fill priority={index === 0} sizes="(max-width:1024px) 33vw, 20vw" className="object-contain p-4 sm:p-8 lg:p-7" />
                  <figcaption className="absolute inset-x-4 bottom-4 text-[9px] tracking-[0.14em] text-black/40 uppercase">{item.brand}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-white/10 md:grid-cols-4">
            {metrics.map((m, index) => <div key={m.id} className={`py-5 ${index ? "md:border-l md:border-white/10 md:pl-5" : ""}`}><p className="text-2xl font-semibold">{m.value}{m.unit ? <span className="ml-1 text-sm">{m.unit}</span> : null}</p><p className="mt-1 text-[10px] text-white/35">{m.label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="kanit" className="bg-[#ece9e2] text-[#141414]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.85fr_1.15fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="text-[10px] tracking-[0.2em] text-[#9a5200] uppercase">Üretim kanıtı</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Kalite söylemi, üretim altyapısıyla destekleniyor.</h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-black/55">İstanbul ve Van’da toplam 15.000 m² kapalı üretim alanı, GMP belgeli üretim altyapısı ve farklı temiz oda sınıfları KAF Grup’un kurumsal gücünün temelini oluşturur.</p>
            <dl className="mt-10 border-t border-black/15">
              {[ ["GMP", "Belgeli üretim altyapısı"], ["Class 1.000 / 10.000 / 100.000", "Temiz oda standartları"], ["İstanbul + Van", "Üretim lokasyonları"], ["50+ ülke", "Global tedarik ağı"] ].map(([value,label]) => <div key={label} className="flex items-baseline justify-between gap-6 border-b border-black/15 py-4"><dt className="text-sm text-black/45">{label}</dt><dd className="text-right font-semibold">{value}</dd></div>)}
            </dl>
          </div>
          <figure className="relative min-h-[420px] bg-[#d7d4cc] lg:min-h-[640px]">
            <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
            <figcaption className="absolute bottom-0 left-0 bg-[#ece9e2] px-5 py-4 text-xs"><strong>Van üretim tesisi</strong><span className="ml-2 text-black/45">YYÜ Teknokent</span></figcaption>
          </figure>
        </div>
      </section>

      <section id="urunler" className="bg-[#0b0b0b] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-12">
            <div className="lg:col-span-6"><p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">Ürün sistemleri</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Dört klinik ihtiyaç, dört ürün sistemi.</h2></div>
            <div className="lg:col-span-4 lg:col-start-9"><p className="text-sm leading-6 text-white/40">Ürünler tek tek kartlara bölünmek yerine klinik kullanım alanları üzerinden gruplanır.</p></div>
          </div>

          <div className="divide-y divide-white/10">
            {systems.map((item, index) => (
              <article key={item.id} className="grid gap-5 py-7 sm:grid-cols-[54px_1fr_210px] sm:items-center">
                <span className="text-xs text-[#e58a1b]">0{index + 1}</span>
                <div><p className="text-[10px] tracking-[0.14em] text-white/30 uppercase">{item.brand}</p><h3 className="mt-1 text-2xl font-semibold">{item.name}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/40">{item.summary}</p></div>
                <div className="relative h-40 bg-[#e7e3da]"><Image src={item.image} alt={item.name} fill sizes="210px" className="object-contain p-5" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kalite" className="bg-[#c56b00] text-[#111]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="text-[10px] tracking-[0.2em] uppercase">Kalite standardı</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Üretim disiplinini sade, ölçülebilir verilerle göster.</h2></div>
            <div className="grid grid-cols-2 border-y border-black/20 lg:col-span-7">
              {[ ["GMP", "Belgeli altyapı"], ["3", "Temiz oda sınıfı"], ["15.000 m²", "Kapalı üretim alanı"], ["25+ yıl", "Sektör deneyimi"] ].map(([value,label],index) => <div key={label} className={`p-5 sm:p-7 ${index % 2 ? "border-l border-black/20" : ""} ${index > 1 ? "border-t border-black/20" : ""}`}><p className="text-3xl font-semibold tracking-[-0.04em]">{value}</p><p className="mt-2 text-xs text-black/55">{label}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#e9e6df] text-black">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-[10px] tracking-[0.2em] text-[#9a5200] uppercase">OEM / Private Label</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Markanız için uçtan uca üretim desteği.</h2><p className="mt-5 text-sm leading-6 text-black/50">{oemContent.summary}</p></div>
            <ol className="lg:col-span-8">
              {oemSteps.map((step) => <li key={step.step} className="grid gap-3 border-t border-black/15 py-5 sm:grid-cols-[50px_180px_1fr]"><span className="text-xs text-[#9a5200]">{step.step}</span><strong>{step.title}</strong><span className="text-sm leading-6 text-black/50">{step.description}</span></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">Global temas</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Sektörün önemli buluşma noktalarında görünürlük.</h2></div>
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-8">{fairs.slice(0,3).map((fair) => <figure key={fair.id}><div className="relative aspect-[4/3] overflow-hidden bg-[#181818]"><Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" /></div><figcaption className="mt-2 flex justify-between gap-3 text-xs"><strong>{fair.name}</strong><span className="text-white/35">{fair.location}</span></figcaption></figure>)}</div>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-white/40">OEM, distribütörlük veya kurumsal tedarik</p><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#e58a1b]">{company.contact.email}<ArrowUpRight className="size-4" /></a></div>
        </div>
      </section>
    </>
  );
}
