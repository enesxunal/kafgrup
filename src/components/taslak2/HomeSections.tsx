import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/products";
import { company, metrics } from "@/data/company";
import { fairs, news, oemContent } from "@/data/content";

const featured = [products[2], products[0], products[7]];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f2f5f7] text-[#18202b]">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[#e28100] uppercase">KAF Grup · Sağlık için üretim</p>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.8rem]">Hastane, klinik ve profesyonel bakım için güvenilir medikal çözümler.</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#657080]">Ürün geliştirmeden üretime, dezenfeksiyondan hasta bakımına uzanan portföyümüzü sağlık profesyonellerinin ihtiyaçları etrafında şekillendiriyoruz.</p>
              <div className="mt-7 flex flex-wrap gap-3"><a href="#cozumler" className="inline-flex items-center gap-2 bg-[#1b2940] px-5 py-3 text-sm font-semibold text-white">Ürünleri keşfedin <ArrowRight className="size-4" /></a><a href="#hakkimizda" className="inline-flex items-center gap-2 border border-black/15 bg-white px-5 py-3 text-sm font-semibold">KAF Grup hakkında</a></div>
            </div>
            <figure className="relative min-h-[360px] overflow-hidden bg-white sm:min-h-[460px]">
              <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-xs uppercase tracking-[0.16em] text-white/65">Üretim altyapısı</p><p className="mt-2 text-2xl font-semibold">İstanbul + Van</p></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="cozumler" className="bg-white text-[#18202b]">
        <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] tracking-[0.18em] text-[#e28100] uppercase">Ürünler & çözümler</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">İhtiyacınıza göre keşfedin.</h2></div><a href="#urunler" className="text-sm font-semibold text-[#1b2940]">Tüm ürünleri görüntüleyin ↗</a></div>
          <div className="mt-8 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => <a key={item.id} href="#urunler" className="group flex min-h-[170px] flex-col justify-between bg-[#f7f8f9] p-5 transition hover:bg-[#eef2f5]"><div><p className="text-[10px] tracking-[0.15em] text-[#e28100] uppercase">{item.brand}</p><h3 className="mt-2 text-xl font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-5 text-[#667180]">{item.summary}</p></div><ArrowUpRight className="mt-5 size-4 text-[#7e8794] transition group-hover:text-[#e28100]" /></a>)}
          </div>
        </div>
      </section>

      <section id="uretim" className="bg-[#eef2f4] text-[#18202b]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="p-6 sm:p-10 lg:p-14"><p className="text-[10px] tracking-[0.18em] text-[#e28100] uppercase">Üretim ve kalite</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Üretim gücü, ölçülebilir standartlarla destekleniyor.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#667180]">15.000 m² kapalı alan, GMP belgeli altyapı ve Class 1.000 / 10.000 / 100.000 temiz oda standartları ile medikal üretim süreçlerini yönetiyoruz.</p><div className="mt-8 grid grid-cols-2 gap-px bg-black/10">{metrics.map((m)=><div key={m.id} className="bg-[#eef2f4] p-4"><p className="text-2xl font-semibold">{m.value}{m.unit ? <span className="ml-1 text-sm">{m.unit}</span>:null}</p><p className="mt-1 text-xs text-[#7a8490]">{m.label}</p></div>)}</div></div>
          <figure className="relative min-h-[420px] bg-[#dde2e5]"><Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup üretim tesisi" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></figure>
        </div>
      </section>

      <section id="urunler" className="bg-white text-[#18202b]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="mb-8"><p className="text-[10px] tracking-[0.18em] text-[#e28100] uppercase">Öne çıkan ürünler</p><h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Portföyden seçili çözümler.</h2></div><div className="grid gap-5 lg:grid-cols-3">{featured.map((item)=><article key={item.id} className="border border-black/10 bg-[#fafafa]"><div className="relative aspect-[4/3] bg-[#f0f2f3]"><Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-contain p-8" /></div><div className="p-5"><p className="text-[10px] tracking-[0.14em] text-[#e28100] uppercase">{item.brand}</p><h3 className="mt-2 text-xl font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-6 text-[#677180]">{item.summary}</p><a href={`mailto:${company.contact.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Bilgi alın <ArrowRight className="size-4" /></a></div></article>)}</div></div>
      </section>

      <section id="oem" className="bg-[#1b2940] text-white"><div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.9fr_1.1fr]"><div className="p-6 sm:p-10 lg:p-14"><p className="text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">OEM / Private Label</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Markanız için geliştirme ve üretim desteği.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-white/60">{oemContent.summary}</p><a href={`mailto:${company.contact.email}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#f0a33e]">OEM görüşmesi başlat <ArrowUpRight className="size-4" /></a></div><div className="relative min-h-[360px] bg-white/5"><Image src={oemContent.image} alt="KAF Grup OEM" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" /></div></div></section>

      <section id="haberler" className="bg-white text-[#18202b]"><div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-[10px] tracking-[0.18em] text-[#e28100] uppercase">Haberler & etkinlikler</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">KAF Grup’tan güncel gelişmeler.</h2></div><div className="lg:col-span-8"><div className="grid gap-4 sm:grid-cols-2">{news.slice(0,2).map((item)=><article key={item.id} className="border-t border-black/12 pt-4"><p className="text-xs text-[#8a929c]">{item.date}</p><h3 className="mt-2 text-lg font-semibold leading-snug">{item.title}</h3><p className="mt-2 text-sm leading-5 text-[#667180]">{item.excerpt}</p></article>)}</div><div className="mt-8 grid gap-3 sm:grid-cols-3">{fairs.slice(0,3).map((fair)=><figure key={fair.id}><div className="relative aspect-[4/3] overflow-hidden bg-[#eee]"><Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" /></div><figcaption className="mt-2 text-xs"><strong>{fair.name}</strong><span className="ml-2 text-[#8a929c]">{fair.location}</span></figcaption></figure>)}</div></div></div></div></section>

      <section id="hakkimizda" className="bg-[#f2f5f7] text-[#18202b]"><div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-10"><p className="text-[10px] tracking-[0.18em] text-[#e28100] uppercase">KAF Grup</p><div className="mt-3 grid gap-5 lg:grid-cols-12"><h2 className="text-3xl font-semibold lg:col-span-5">25+ yıllık sektör deneyimi, 50+ ülkeye uzanan iş ortaklığı.</h2><p className="text-base leading-7 text-[#667180] lg:col-span-6 lg:col-start-7">Medikal üretim tecrübemizi ürün geliştirme, üretim, teknik destek ve uluslararası tedarik kabiliyetiyle birleştiriyoruz.</p></div></div></section>
    </>
  );
}
