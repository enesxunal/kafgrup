import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/products";
import { company, metrics } from "@/data/company";
import { fairs, news, oemContent } from "@/data/content";

const featured = [products[2], products[0], products[7]];

export function HomeSections() {
  return (
    <>
      <section className="bg-white text-[#171717]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#ef8a00] uppercase">KAF Grup · Medical Manufacturing</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[4rem]">Üretimi kolaylaştıran, güveni büyüten medikal çözümler.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/55">Ürün portföyü, üretim kapasitesi, OEM hizmetleri ve teknik bilgi tek bir merkezde. KAF Grup’un medikal üretim gücünü ihtiyacınıza göre keşfedin.</p>
          <div className="mt-7 flex flex-wrap gap-3"><a href="#urunler" className="inline-flex items-center gap-2 bg-[#ef8a00] px-5 py-3 text-sm font-semibold text-white">Tüm ürünler <ArrowRight className="size-4" /></a><a href="#kapasite" className="inline-flex items-center gap-2 border border-black/15 px-5 py-3 text-sm font-semibold">Üretim kapasitesi</a></div>
        </div>
      </section>

      <section id="urunler" className="bg-[#f5f5f3] text-[#171717]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] tracking-[0.18em] text-[#ef8a00] uppercase">Explore Products</p><h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Ürün ailelerini keşfedin.</h2></div><a href={`mailto:${company.contact.email}`} className="text-sm font-semibold">Ürün desteği alın ↗</a></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item)=><article key={item.id} className="group bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,.08)]"><div className="relative h-36 bg-[#f7f7f5]"><Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-contain p-4" /></div><p className="mt-4 text-[10px] tracking-[0.14em] text-[#ef8a00] uppercase">{item.brand}</p><h3 className="mt-2 text-lg font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-5 text-black/50">{item.summary}</p><a href="#uygulamalar" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Daha fazla <ArrowRight className="size-4" /></a></article>)}
          </div>
        </div>
      </section>

      <section id="uygulamalar" className="bg-white text-[#171717]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-[10px] tracking-[0.18em] text-[#ef8a00] uppercase">Featured Products</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Öne çıkan ürünler.</h2><p className="mt-4 text-sm leading-6 text-black/50">Klinik ve profesyonel kullanım için portföyümüzden seçili çözümler.</p></div><div className="grid gap-5 lg:col-span-8 sm:grid-cols-3">{featured.map((item)=><article key={item.id} className="border border-black/10"><div className="relative aspect-square bg-[#f6f6f4]"><Image src={item.image} alt={item.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-contain p-7" /></div><div className="p-5"><p className="text-[10px] tracking-[0.14em] text-[#ef8a00] uppercase">{item.brand}</p><h3 className="mt-2 text-lg font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-5 text-black/50">{item.summary}</p></div></article>)}</div></div>
        </div>
      </section>

      <section id="kapasite" className="bg-[#202733] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div><p className="text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">Expansion of production capacities</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Üretim kapasitemizi ihtiyaçlarla birlikte büyütüyoruz.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/60">İstanbul ve Van’da toplam 15.000 m² kapalı üretim alanı; GMP belgeli altyapı, temiz oda standartları ve deneyimli ekiple destekleniyor.</p><div className="mt-8 grid grid-cols-2 gap-px bg-white/10">{metrics.map((m)=><div key={m.id} className="bg-[#202733] p-4"><p className="text-2xl font-semibold">{m.value}{m.unit ? <span className="ml-1 text-sm">{m.unit}</span>:null}</p><p className="mt-1 text-xs text-white/40">{m.label}</p></div>)}</div></div>
            <figure className="relative min-h-[420px] overflow-hidden bg-white/5"><Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-sm"><strong>Van · YYÜ Teknokent</strong><span className="ml-2 text-white/55">Üretim tesisi</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#ef8a00] text-[#171717]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-[10px] tracking-[0.18em] uppercase">OEM / Private Label</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Markanız için fikirden üretime.</h2></div><div className="lg:col-span-6 lg:col-start-7"><p className="text-base leading-7 text-black/65">{oemContent.summary}</p><a href={`mailto:${company.contact.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">OEM görüşmesi başlat <ArrowUpRight className="size-4" /></a></div></div>
        </div>
      </section>

      <section id="bilgi" className="bg-white text-[#171717]"><div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-[10px] tracking-[0.18em] text-[#ef8a00] uppercase">Knowledge & Events</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Bilgi, etkinlik ve sektör gündemi.</h2></div><div className="lg:col-span-8"><div className="grid gap-4 sm:grid-cols-2">{news.slice(0,2).map((item)=><article key={item.id} className="border-t border-black/12 pt-4"><p className="text-xs text-black/35">{item.date}</p><h3 className="mt-2 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-5 text-black/50">{item.excerpt}</p></article>)}</div><div className="mt-8 grid gap-3 sm:grid-cols-3">{fairs.slice(0,3).map((fair)=><figure key={fair.id}><div className="relative aspect-[4/3] overflow-hidden bg-[#eee]"><Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" /></div><figcaption className="mt-2 text-xs"><strong>{fair.name}</strong><span className="ml-2 text-black/40">{fair.location}</span></figcaption></figure>)}</div></div></div></div></section>

      <section id="sirket" className="bg-[#f5f5f3] text-[#171717]"><div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><p className="text-[10px] tracking-[0.18em] text-[#ef8a00] uppercase">A trusted manufacturing partner</p><div className="mt-3 grid gap-6 lg:grid-cols-12"><h2 className="text-4xl font-semibold tracking-[-0.04em] lg:col-span-5">25+ yıllık deneyimle medikal üretimin güvenilir ortağı.</h2><div className="lg:col-span-6 lg:col-start-7"><p className="text-base leading-7 text-black/55">KAF Grup, ürün geliştirme, üretim, teknik destek ve global tedarik kabiliyetini aynı organizasyon içinde birleştirir.</p><a href={`mailto:${company.contact.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">KAF Grup ile iletişime geçin <ArrowRight className="size-4" /></a></div></div></div></section>
    </>
  );
}
