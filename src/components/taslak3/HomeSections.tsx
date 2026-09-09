import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { categories, products } from "@/data/products";
import { fairs, news, oemContent } from "@/data/content";

const featured = [products[2], products[0], products[7]];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f5f7f8] text-[#172033]">
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">KAF Grup · Medical Manufacturing</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[4rem]">
                Sağlık profesyonelleri için üretimden ürüne güvenilir çözümler.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#172033]/60">
                Medikal dezenfeksiyon, jel ve hasta bakım ürünlerini; GMP üretim altyapısı, temiz oda standartları ve global tedarik deneyimiyle geliştiriyoruz.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#urunler" className="inline-flex items-center gap-2 bg-[#172033] px-5 py-3 text-sm font-semibold text-white">Ürünleri keşfedin <ArrowRight className="size-4" /></a>
                <a href="#uretim" className="inline-flex items-center gap-2 border border-[#172033]/15 bg-white px-5 py-3 text-sm font-semibold text-[#172033]">Üretim altyapısı</a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="grid gap-3 sm:grid-cols-[1.15fr_.85fr]">
                <figure className="relative min-h-[330px] overflow-hidden bg-white sm:min-h-[430px]">
                  <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill priority sizes="(max-width:1024px) 100vw, 35vw" className="object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[#172033]/88 px-5 py-4 text-sm text-white"><strong>Van üretim tesisi</strong><span className="ml-2 text-white/55">YYÜ Teknokent</span></figcaption>
                </figure>
                <div className="grid grid-rows-2 gap-3">
                  {featured.slice(0, 2).map((item) => (
                    <figure key={item.id} className="relative min-h-[160px] overflow-hidden bg-white">
                      <Image src={item.image} alt={item.name} fill sizes="(max-width:640px) 100vw, 18vw" className="object-contain p-6" />
                      <figcaption className="absolute left-4 top-4 text-[9px] font-semibold tracking-[0.16em] text-[#172033]/35 uppercase">{item.brand}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#172033]/10 bg-white text-[#172033]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
          {metrics.map((m, index) => (
            <div key={m.id} className={`py-6 ${index % 2 ? "border-l border-[#172033]/10 pl-5" : ""} ${index > 1 ? "border-t border-[#172033]/10 md:border-t-0" : ""} md:border-l md:border-[#172033]/10 md:px-6 first:md:border-l-0 first:md:pl-0`}>
              <p className="text-2xl font-semibold tracking-[-0.03em]">{m.value}{m.unit ? <span className="ml-1 text-sm">{m.unit}</span> : null}</p>
              <p className="mt-1 text-xs text-[#172033]/45">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="uygulamalar" className="bg-white text-[#172033]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">Ürün aileleri</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">İhtiyaca göre doğru çözümü bulun.</h2>
            </div>
            <a href="#urunler" className="inline-flex items-center gap-2 text-sm font-semibold text-[#d97800]">Tüm ürünleri görüntüleyin <ArrowRight className="size-4" /></a>
          </div>

          <div className="mt-8 grid border-t border-[#172033]/10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item, index) => (
              <article key={item.id} className={`group min-h-[210px] border-b border-[#172033]/10 py-6 sm:px-6 ${index % 2 ? "sm:border-l" : ""} lg:border-l lg:first:border-l-0 lg:[&:nth-child(4)]:border-l-0`}>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-[#d97800] uppercase">{item.brand}</p>
                    <h3 className="mt-2 max-w-xs text-xl font-semibold leading-snug">{item.name}</h3>
                  </div>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-[#172033]/25 transition group-hover:text-[#d97800]" />
                </div>
                <p className="mt-5 max-w-sm text-sm leading-6 text-[#172033]/50">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-[#eef2f4] text-[#172033]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">Öne çıkan ürünler</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Portföyden seçili çözümler.</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[#172033]/50">Klinik ve profesyonel kullanım için geliştirilen ürünlerden seçili örnekler.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
              {featured.map((item) => (
                <article key={item.id} className="bg-white">
                  <div className="relative aspect-square border-b border-[#172033]/8"><Image src={item.image} alt={item.name} fill sizes="(max-width:768px) 100vw, 23vw" className="object-contain p-8" /></div>
                  <div className="p-5">
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-[#d97800] uppercase">{item.brand}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug">{item.name}</h3>
                    <p className="mt-2 text-sm leading-5 text-[#172033]/50">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="uretim" className="bg-white text-[#172033]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[380px] bg-[#eef2f4] lg:min-h-[560px]">
            <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup üretim tesisi" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">Üretim kapasitesi</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Üretim, kalite ve tedarik tek organizasyon içinde.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#172033]/55">İstanbul ve Van’daki toplam 15.000 m² kapalı üretim alanı; GMP belgeli altyapı, Class 1.000 / 10.000 / 100.000 temiz oda standartları ve deneyimli ekiplerle desteklenir.</p>
            <div className="mt-8 grid gap-0 border-y border-[#172033]/10 sm:grid-cols-2">
              <div className="py-5 sm:border-r sm:pr-5"><strong className="block text-xl">GMP</strong><span className="mt-1 block text-sm text-[#172033]/45">Belgeli üretim altyapısı</span></div>
              <div className="border-t border-[#172033]/10 py-5 sm:border-t-0 sm:pl-5"><strong className="block text-xl">3 temiz oda sınıfı</strong><span className="mt-1 block text-sm text-[#172033]/45">1.000 · 10.000 · 100.000</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#172033] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-9 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#f0a33e] uppercase">OEM / Private Label</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Markanız için ürün geliştirme ve üretim.</h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">{oemContent.summary}</p>
              <a href={`mailto:${company.contact.email}`} className="mt-7 inline-flex items-center gap-2 bg-[#d97800] px-5 py-3 text-sm font-semibold text-white">OEM görüşmesi <ArrowRight className="size-4" /></a>
            </div>
            <div className="lg:col-span-7">
              <div className="relative min-h-[320px] overflow-hidden bg-white/5 sm:min-h-[430px]"><Image src={oemContent.image} alt="KAF Grup OEM ve Private Label" fill sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="kurumsal" className="bg-white text-[#172033]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">KAF Grup</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">25+ yıllık sektör deneyimi, 50+ ülkeye uzanan iş ortaklığı.</h2>
              <p className="mt-5 max-w-lg text-sm leading-6 text-[#172033]/50">KAF Grup, medikal üretim tecrübesini ürün geliştirme, üretim, teknik destek ve uluslararası tedarik kabiliyetiyle birleştirir.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
              {fairs.slice(0, 3).map((fair) => (
                <figure key={fair.id}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eef2f4]"><Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 24vw" className="object-cover" /></div>
                  <figcaption className="mt-2 flex items-center justify-between gap-3 text-xs"><strong>{fair.name}</strong><span className="text-[#172033]/40">{fair.location}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-14 grid border-t border-[#172033]/10 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-3"><p className="text-[10px] font-semibold tracking-[0.18em] text-[#d97800] uppercase">Haberler</p></div>
            <div className="lg:col-span-9">
              {news.slice(0, 2).map((item) => (
                <article key={item.id} className="flex flex-col gap-3 border-b border-[#172033]/10 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div><p className="text-xs text-[#172033]/35">{item.date}</p><h3 className="mt-1 max-w-2xl text-lg font-semibold">{item.title}</h3></div>
                  <ArrowUpRight className="size-4 shrink-0 text-[#172033]/30" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
