import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { categories, products } from "@/data/products";
import { fairs, oemContent } from "@/data/content";

const features = [products[3], products[0], products[12]];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f1ece3] text-[#161616]">
        <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 lg:px-12 lg:pb-14 lg:pt-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <p className="text-[10px] tracking-[0.26em] text-[#d97800] uppercase">KAF Product Review · Vol. 01</p>
              <h1 className="mt-4 max-w-5xl font-[family-name:var(--font-fraunces)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[4.8rem]">
                Medikal ürünleri bir liste değil, yaşayan bir ürün dünyası gibi anlatmak.
              </h1>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 lg:pt-16">
              <p className="text-sm leading-6 text-black/55">Ürün ailesi, kullanım bağlamı ve üretim kültürü aynı editoryal akışta buluşuyor. Bu yön klasik kurumsal katalog hissinden özellikle uzaklaşıyor.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-3 lg:grid-cols-12 lg:grid-rows-[210px_210px]">
            <figure className="relative overflow-hidden bg-[#ddd4c5] lg:col-span-6 lg:row-span-2">
              <Image src={features[0].image} alt={features[0].name} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-contain p-10 sm:p-16" />
              <figcaption className="absolute left-4 top-4 text-[10px] tracking-[0.18em] uppercase">Cover / {features[0].brand}</figcaption>
            </figure>
            <figure className="relative min-h-[260px] overflow-hidden bg-[#cad9d6] lg:col-span-3 lg:min-h-0">
              <Image src={features[1].image} alt={features[1].name} fill sizes="(max-width:1024px) 100vw, 25vw" className="object-contain p-8" />
            </figure>
            <div className="flex min-h-[260px] flex-col justify-between bg-[#171717] p-6 text-white lg:col-span-3 lg:min-h-0">
              <p className="text-[10px] tracking-[0.18em] text-white/40 uppercase">Inside this issue</p>
              <p className="font-[family-name:var(--font-fraunces)] text-2xl leading-tight">Ürün hikâyeleri<br />OEM süreci<br />Üretim notları</p>
            </div>
            <div className="bg-[#d97800] p-6 lg:col-span-3"><p className="text-[10px] tracking-[0.18em] uppercase">Editorial note</p><p className="mt-6 max-w-xs text-lg font-medium leading-snug">KAF’ın geniş portföyünü daha seçici ve daha akılda kalıcı bir ritimle göstermek.</p></div>
            <figure className="relative min-h-[260px] overflow-hidden bg-[#e2ded6] lg:col-span-3 lg:min-h-0"><Image src={features[2].image} alt={features[2].name} fill sizes="(max-width:1024px) 100vw, 25vw" className="object-contain p-8" /></figure>
          </div>
        </div>
      </section>

      <section id="giris" className="bg-white text-black">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-3"><p className="text-[10px] tracking-[0.2em] text-[#d97800] uppercase">Editor’s note</p></div>
          <div className="lg:col-span-6"><h2 className="font-[family-name:var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">Ürün merkeze alınırken kurumsal güven geride kalmıyor.</h2></div>
          <div className="lg:col-span-3"><p className="text-base leading-7 text-black/55">Üretim kapasitesi ve kalite belgeleri, ürün hikâyelerinin içine dağıtılıyor; ziyaretçi sayfayı “kurumsal bilgi blokları” olarak değil, keşif akışı olarak okuyor.</p></div>
        </div>
      </section>

      <section id="hikaye-1" className="bg-[#f1ece3] text-black">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex items-end justify-between gap-6 border-b border-black/15 pb-5"><div><p className="text-[10px] tracking-[0.2em] text-[#d97800] uppercase">Selected stories</p><h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">Üç ürün, üç ayrı okuma biçimi.</h2></div><span className="hidden text-xs text-black/40 sm:block">01—03 / Product stories</span></div>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            {features.map((item, i) => (
              <article key={item.id} className={`${i === 0 ? "lg:col-span-5" : i === 1 ? "lg:col-span-4 lg:pt-20" : "lg:col-span-3 lg:pt-8"}`}>
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5] bg-[#d8d0c5]" : i === 1 ? "aspect-square bg-[#c9d9d6]" : "aspect-[3/4] bg-white"}`}><Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-contain p-8 sm:p-10" /></div>
                <p className="mt-4 text-[10px] tracking-[0.18em] text-[#d97800] uppercase">0{i + 1} · {item.brand}</p>
                <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="indeks" className="bg-[#181818] text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-[10px] tracking-[0.2em] text-[#f0a33e] uppercase">Product index</p><h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl">Hızlı bakış için ürün indeksi.</h2><p className="mt-4 text-sm leading-6 text-white/45">Editoryal karakter korunurken satın alma ekipleri ürün gruplarına hızlıca ulaşabilir.</p></div>
            <div className="lg:col-span-8">
              {categories.map((item, i) => <article key={item.id} className="grid gap-3 border-t border-white/15 py-4 sm:grid-cols-[36px_1fr_auto] sm:items-center"><span className="text-xs text-[#f0a33e]">{String(i + 1).padStart(2, "0")}</span><div><h3 className="text-lg font-medium">{item.name}</h3><p className="mt-1 text-xs text-white/40">{item.brand}</p></div><ArrowUpRight className="hidden size-4 text-white/35 sm:block" /></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="fikirden" className="bg-[#d97800] text-[#171717]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-[540px]"><Image src={oemContent.image} alt="KAF Grup OEM ve Private Label" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div>
          <div className="p-6 sm:p-10 lg:p-14"><p className="text-[10px] tracking-[0.2em] uppercase">OEM / Private Label</p><h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">Markanızın bir sonraki ürünü nasıl doğar?</h2><p className="mt-5 max-w-xl text-base leading-7 text-black/65">{oemContent.summary}</p><div className="mt-10 grid gap-5 sm:grid-cols-3">{["Ürün fikri", "Numune + onay", "Üretim + teslimat"].map((x,i)=><div key={x} className="border-t border-black/25 pt-4"><span className="text-xs">0{i+1}</span><p className="mt-6 font-semibold">{x}</p></div>)}</div></div>
        </div>
      </section>

      <section id="tesis" className="bg-white text-black"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-[10px] tracking-[0.2em] text-[#d97800] uppercase">Field notes</p><h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl">Üretim ve global temas, ürün hikâyelerinin arka planı.</h2></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">{fairs.slice(0,3).map(f=><figure key={f.id}><div className="relative aspect-square overflow-hidden bg-[#eee]"><Image src={f.image} alt={f.name} fill sizes="(max-width:640px) 50vw, 20vw" className="object-cover" /></div><figcaption className="mt-2 text-xs"><strong>{f.name}</strong><span className="ml-2 text-black/45">{f.location}</span></figcaption></figure>)}</div></div></div></section>

      <section id="katalog" className="bg-[#f1ece3] text-black"><div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><p className="text-[10px] tracking-[0.2em] text-[#d97800] uppercase">Next issue</p><h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">Katalog, numune veya OEM görüşmesi.</h2></div><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold">{company.contact.email}<ArrowUpRight className="size-4" /></a></div></section>
    </>
  );
}
