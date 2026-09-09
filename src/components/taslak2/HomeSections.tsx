import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/products";
import { company } from "@/data/company";
import { fairs, oemContent } from "@/data/content";

const heroProducts = [products[2], products[0], products[7], products[12]];
const selected = [products[2], products[0], products[7]];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f6f4ef] text-[#171717]">
        <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 lg:px-12 lg:pb-12 lg:pt-10">
          <div className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#c76d00] uppercase">KAF Grup · Medical Products</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl lg:text-[3.6rem]">
                Hastane ve klinikler için geliştirilmiş medikal ürün portföyü.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-md text-sm leading-6 text-black/55">
                Dezenfeksiyon, medikal jel ve hasta bakım çözümleri; ürün ailesi, kullanım alanı ve marka bazında sade bir yapı içinde sunulur.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-[220px_1fr]">
            <aside className="border-y border-black/10 py-5 lg:border-y-0 lg:border-r lg:py-3 lg:pr-6">
              <p className="text-[10px] tracking-[0.18em] text-black/35 uppercase">Ürün aileleri</p>
              <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-1" aria-label="Ürün aileleri">
                {categories.map((category) => (
                  <a key={category.id} href="#koleksiyonlar" className="border-b border-black/10 py-2 text-black/65 transition hover:text-[#c76d00]">
                    {category.name}
                  </a>
                ))}
              </nav>
            </aside>

            <div>
              <div className="grid min-h-[420px] overflow-hidden border border-black/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
                {heroProducts.map((product, index) => (
                  <article key={product.id} className={`relative flex min-h-[300px] flex-col justify-between p-5 ${index ? "border-t border-black/10 sm:border-l sm:border-t-0" : ""} ${index > 1 ? "sm:border-t lg:border-t-0" : ""}`}>
                    <div className="flex items-center justify-between text-[9px] tracking-[0.16em] text-black/35 uppercase">
                      <span>{product.brand}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <div className="relative h-52 sm:h-60">
                      <Image src={product.image} alt={product.name} fill priority={index === 0} sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" className="object-contain p-3" />
                    </div>
                    <div className="border-t border-black/10 pt-4">
                      <h2 className="text-base font-semibold leading-snug">{product.name}</h2>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-3 flex flex-col gap-3 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-black/45">50+ ülkeye ihracat · GMP belgeli üretim · OEM / Private Label</p>
                <a href="#koleksiyonlar" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a95700]">Tüm portföyü incele <ArrowRight className="size-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="koleksiyonlar" className="bg-white text-black">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-9 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.2em] text-[#b96100] uppercase">Ürün kategorileri</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">İhtiyaca göre doğru ürün ailesine ulaşın.</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-sm leading-6 text-black/50">Her kategori, klinik kullanım bağlamı ve marka ailesiyle birlikte açıklanır; kullanıcı uzun ürün listelerinde kaybolmaz.</p>
            </div>
          </div>

          <div className="grid gap-x-8 border-t border-black/15 md:grid-cols-2">
            {categories.map((item, index) => (
              <article key={item.id} className="grid grid-cols-[46px_1fr_92px] items-center gap-4 border-b border-black/15 py-5">
                <span className="text-xs text-[#b96100]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[10px] tracking-[0.12em] text-black/35 uppercase">{item.brand}</p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug">{item.name}</h3>
                  <p className="mt-2 text-sm leading-5 text-black/45">{item.summary}</p>
                </div>
                <div className="relative h-20 bg-[#f5f3ee]"><Image src={item.image} alt="" fill sizes="92px" className="object-contain p-2" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-[#efede7] text-black">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.2em] text-[#b96100] uppercase">Öne çıkan ürünler</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Ürünü büyük görselle değil, doğru bilgiyle öne çıkarın.</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-black/50">Ürün adı, kullanım amacı ve marka bilgisi ilk bakışta okunur; görsel destekleyici rol üstlenir.</p>
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-black/15 border-y border-black/15">
                {selected.map((item, index) => (
                  <article key={item.id} className="grid gap-5 py-6 sm:grid-cols-[42px_1fr_180px] sm:items-center">
                    <span className="text-xs text-[#b96100]">0{index + 1}</span>
                    <div>
                      <p className="text-[10px] tracking-[0.14em] text-black/35 uppercase">{item.brand}</p>
                      <h3 className="mt-1 text-xl font-semibold">{item.name}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-black/50">{item.summary}</p>
                    </div>
                    <div className="relative h-32 bg-white"><Image src={item.image} alt={item.name} fill sizes="180px" className="object-contain p-4" /></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#161616] text-white">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">OEM / Private Label</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Markanız için geliştirme ve üretim desteği.</h2>
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/45">{oemContent.summary}</p>
              <a href={`mailto:${company.contact.email}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#f0a33e]">OEM görüşmesi başlat <ArrowUpRight className="size-4" /></a>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/8] overflow-hidden bg-[#222]"><Image src={oemContent.image} alt="KAF Grup OEM / Private Label" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="global" className="bg-white text-black">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.2em] text-[#b96100] uppercase">Global görünürlük</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Ürün portföyünün arkasında uluslararası sektör deneyimi.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
              {fairs.slice(0, 3).map((fair) => (
                <figure key={fair.id}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd]"><Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" /></div>
                  <figcaption className="mt-3 flex justify-between gap-3 text-xs"><strong>{fair.name}</strong><span className="text-black/40">{fair.location}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
