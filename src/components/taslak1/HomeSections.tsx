import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { categories } from "@/data/products";
import { exportMarkets, oemSteps } from "@/data/content";

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f7f8f6] text-[#16313a]">
        <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-10 border-b border-[#16313a]/15 pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#d97800] uppercase">KAF Grup · Medikal üretim</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Üretim kapasitesini, ürün bilgisini ve global güveni tek kurumsal dilde buluşturan yapı.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-7 text-[#5e6f74]">{company.description}</p>
              <a href="#urunler" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#16313a]">Ürün ailelerine geç <ArrowRight className="size-4" /></a>
            </div>
          </div>
          <div id="kanit" className="grid grid-cols-2 border-b border-[#16313a]/15 md:grid-cols-4">
            {metrics.map((item, i) => (
              <div key={item.id} className={`py-7 ${i % 2 ? "pl-5" : "pr-5"} md:border-l md:border-[#16313a]/15 md:px-6 first:md:border-l-0`}>
                <p className="text-3xl font-semibold tracking-tight">{item.value}{item.unit ? <span className="ml-1 text-lg">{item.unit}</span> : null}</p>
                <p className="mt-2 text-sm font-medium">{item.label}</p>
                <p className="mt-1 text-xs text-[#78878b]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-white text-[#16313a]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">Ürün aileleri</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Katalog değil, klinik ihtiyaca göre keşif.</h2>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-[#16313a]/15">
                {categories.slice(0, 5).map((item, i) => (
                  <article key={item.id} className="grid gap-5 border-b border-[#16313a]/15 py-5 sm:grid-cols-[54px_112px_1fr_auto] sm:items-center">
                    <span className="text-xs font-semibold text-[#d97800]">0{i + 1}</span>
                    <div className="relative h-24 w-24 bg-[#f3f5f3]"><Image src={item.image} alt="" fill sizes="96px" className="object-contain p-3" /></div>
                    <div><p className="text-[10px] tracking-[0.18em] text-[#728287] uppercase">{item.brand}</p><h3 className="mt-1 text-xl font-semibold">{item.name}</h3><p className="mt-1 max-w-2xl text-sm leading-6 text-[#66767b]">{item.summary}</p></div>
                    <ArrowRight className="hidden size-4 text-[#879397] sm:block" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kalite" className="bg-[#e9eeec] text-[#16313a]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe5e2]">
              <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
            </div>
            <p className="mt-3 text-xs text-[#728287]">YYÜ Teknokent · Van üretim tesisi</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">Üretim ve kalite</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Kalite iddiası değil, üretim altyapısı görünür.</h2>
            <div className="mt-8 divide-y divide-[#16313a]/15 border-y border-[#16313a]/15">
              {["GMP belgeli üretim altyapısı", "Class 1.000 / 10.000 / 100.000 temiz oda standardı", "İstanbul ve Van üretim organizasyonu", "50+ ülkeye uzanan tedarik ağı"].map((x, i) => <div key={x} className="grid grid-cols-[42px_1fr] py-4 text-sm"><span className="text-[#d97800]">0{i + 1}</span><span>{x}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#16313a]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-[11px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">Global ağ</p><h2 className="mt-4 text-3xl font-semibold">Üretim Türkiye’de, erişim farklı pazarlarda.</h2></div>
            <div className="grid gap-px bg-[#16313a]/15 sm:grid-cols-2 lg:col-span-8">
              {exportMarkets.map((m) => <div key={m.region} className="bg-white p-5"><p className="font-semibold">{m.region}</p><p className="mt-2 text-sm text-[#6c7a7e]">{m.countries.join(" · ")}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#16313a] text-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-4"><p className="text-[11px] font-semibold tracking-[0.18em] text-[#f0a33e] uppercase">OEM / Private Label</p><h2 className="mt-4 text-3xl font-semibold">Markanız için üretim ortağı.</h2></div>
          <ol className="lg:col-span-8">
            {oemSteps.map((s) => <li key={s.step} className="grid gap-3 border-t border-white/15 py-5 sm:grid-cols-[58px_190px_1fr]"><span className="text-[#f0a33e]">{s.step}</span><strong>{s.title}</strong><span className="text-sm leading-6 text-white/55">{s.description}</span></li>)}
          </ol>
        </div>
      </section>

      <section id="iletisim" className="bg-[#f7f8f6] text-[#16313a]"><div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><h2 className="text-2xl font-semibold">Distribütörlük, OEM veya kurumsal tedarik için görüşelim.</h2><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold">{company.contact.email}<ArrowRight className="size-4" /></a></div></section>
    </>
  );
}
