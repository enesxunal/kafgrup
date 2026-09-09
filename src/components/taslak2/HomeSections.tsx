import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/products";
import { company } from "@/data/company";
import { fairs, oemContent } from "@/data/content";

const featured = [products[2], products[0], products[7], products[12]];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f4f0e8] text-[#171717]">
        <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-[1440px] grid-cols-1 border-x border-black/10 lg:grid-cols-[260px_1fr]">
          <aside className="hidden border-r border-black/10 p-7 lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#b96100] uppercase">Medical portfolio / 2026</p>
              <p className="mt-5 text-sm leading-6 text-black/50">KAF Grup ürünlerini kategori, kullanım alanı ve marka ailesi üzerinden keşfedin.</p>
            </div>
            <div className="space-y-2 text-xs text-black/45">
              <p>06 ürün ailesi</p>
              <p>50+ ihracat ülkesi</p>
              <p>OEM / Private Label</p>
            </div>
          </aside>

          <div className="flex min-w-0 flex-col">
            <div className="grid gap-6 border-b border-black/10 px-5 py-7 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-8">
              <div className="lg:col-span-7">
                <p className="text-[10px] tracking-[0.2em] text-[#b96100] uppercase">KAF Medical Collection</p>
                <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[3.8rem]">
                  Ürünleri hızlı keşfetmek için tasarlanmış dijital portföy.
                </h1>
              </div>
              <div className="flex items-end lg:col-span-4 lg:col-start-9">
                <p className="max-w-md text-sm leading-6 text-black/55">Dezenfeksiyon, medikal jel ve hasta bakım ürünleri; satın alma ekiplerinin aradığı bilgiye doğrudan ulaşabileceği sade bir katalog yapısında.</p>
              </div>
            </div>

            <div className="grid flex-1 lg:grid-cols-[1.25fr_.75fr]">
              <figure className="relative min-h-[360px] overflow-hidden border-b border-black/10 bg-[#ddd5c8] lg:min-h-0 lg:border-b-0 lg:border-r">
                <Image src={featured[0].image} alt={featured[0].name} fill priority sizes="(max-width:1024px) 100vw, 60vw" className="object-contain p-10 sm:p-14 lg:p-16" />
                <figcaption className="absolute inset-x-5 bottom-5 border-t border-black/15 pt-4 sm:inset-x-8 sm:bottom-7">
                  <div className="flex items-center justify-between gap-4 text-[10px] tracking-[0.15em] text-black/45 uppercase"><span>{featured[0].brand}</span><span>Featured</span></div>
                  <p className="mt-2 text-2xl font-semibold">{featured[0].name}</p>
                </figcaption>
              </figure>

              <div className="grid grid-cols-2 lg:grid-cols-1">
                {featured.slice(1, 3).map((item, index) => (
                  <article key={item.id} className={`relative min-h-[220px] overflow-hidden border-b border-black/10 ${index === 0 ? "bg-[#dce8e5]" : "bg-[#171717] text-white"}`}>
                    <Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 50vw, 35vw" className="object-contain p-8" />
                    <span className={`absolute left-4 top-4 text-[9px] tracking-[0.16em] uppercase ${index === 0 ? "text-black/40" : "text-white/35"}`}>{item.brand}</span>
                  </article>
                ))}
                <a href="#koleksiyonlar" className="col-span-2 flex min-h-[110px] items-center justify-between bg-[#c96f00] px-5 text-sm font-semibold lg:col-span-1">
                  Tüm ürün ailelerini gör <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="koleksiyonlar" className="bg-white text-black">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-[10px] tracking-[0.2em] text-[#b96100] uppercase">Koleksiyonlar</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Klinik ihtiyaca göre ürün aileleri.</h2>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-black/15">
                {categories.map((item, index) => (
                  <article key={item.id} className="grid gap-4 border-b border-black/15 py-5 sm:grid-cols-[44px_1fr_150px_28px] sm:items-center">
                    <span className="text-xs text-[#b96100]">{String(index + 1).padStart(2, "0")}</span>
                    <div><p className="text-[10px] tracking-[0.14em] text-black/35 uppercase">{item.brand}</p><h3 className="mt-1 text-lg font-semibold">{item.name}</h3><p className="mt-1 max-w-xl text-sm leading-5 text-black/45">{item.summary}</p></div>
                    <div className="relative hidden h-20 bg-[#f2efe9] sm:block"><Image src={item.image} alt="" fill sizes="150px" className="object-contain p-3" /></div>
                    <ArrowUpRight className="hidden size-4 text-black/30 sm:block" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-[#151515] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 flex flex-col gap-5 border-b border-white/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">Seçili ürünler</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Ürün bilgisini görselin gerisinde bırakmayan düzen.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-white/40">Büyük görsel alanlar, kısa ürün özeti ve marka ayrımı. Satın alma odaklı, sakin ve okunaklı.</p>
          </div>
          <div className="grid gap-px bg-white/10 lg:grid-cols-4">
            {featured.map((item) => (
              <article key={item.id} className="bg-[#151515]">
                <div className="relative aspect-[4/5] bg-[#ece8df]"><Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-contain p-8" /></div>
                <div className="p-5"><p className="text-[10px] tracking-[0.14em] text-[#e58a1b] uppercase">{item.brand}</p><h3 className="mt-2 text-lg font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-5 text-white/40">{item.summary}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#c96f00] text-[#151515]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[380px] bg-[#b96300] lg:min-h-[560px]"><Image src={oemContent.image} alt="KAF Grup OEM / Private Label" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" /></div>
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            <div><p className="text-[10px] tracking-[0.2em] uppercase">OEM / Private Label</p><h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Markanız için ürün geliştirme ve üretim.</h2><p className="mt-5 max-w-xl text-base leading-7 text-black/65">{oemContent.summary}</p></div>
            <a href={`mailto:${company.contact.email}`} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold">OEM görüşmesi başlat <ArrowUpRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="global" className="bg-[#f4f0e8] text-black">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-[10px] tracking-[0.2em] text-[#b96100] uppercase">Global görünürlük</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Ürün portföyünün arkasında uluslararası sektör deneyimi.</h2></div>
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-8">{fairs.slice(0,3).map((fair) => <figure key={fair.id}><div className="relative aspect-[4/3] overflow-hidden bg-[#ddd]"><Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" /></div><figcaption className="mt-2 flex justify-between gap-3 text-xs"><strong>{fair.name}</strong><span className="text-black/40">{fair.location}</span></figcaption></figure>)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
