import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { categories, products } from "@/data/products";
import { fairs, oemContent } from "@/data/content";

const selected = [products[3], products[0], products[12]];

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f2eee6] text-[#171717]">
        <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-[1440px] flex-col px-5 py-7 sm:px-8 lg:max-h-[720px] lg:min-h-[580px] lg:px-12 lg:py-8">
          <div className="grid gap-5 border-b border-black/15 pb-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.24em] text-[#c96e00] uppercase">KAF Product Review · Medical Portfolio</p>
              <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-fraunces)] text-[2.55rem] leading-[1.01] tracking-[-0.035em] sm:text-5xl lg:text-[3.7rem]">
                Klinik ihtiyaçlara göre geliştirilmiş medikal ürün aileleri.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-md text-sm leading-6 text-black/55">
                Dezenfeksiyon, medikal jel ve hasta bakım ürünleri; kullanım alanlarına göre düzenlenen seçili bir portföy içinde sunulur.
              </p>
            </div>
          </div>

          <div className="mt-5 grid flex-1 gap-3 lg:grid-cols-[1.45fr_.8fr_.8fr] lg:grid-rows-2">
            <figure className="relative min-h-[280px] overflow-hidden bg-[#ded5c7] lg:row-span-2 lg:min-h-0">
              <Image src={selected[0].image} alt={selected[0].name} fill priority sizes="(max-width:1024px) 100vw, 46vw" className="object-contain p-8 sm:p-12 lg:p-10" />
              <figcaption className="absolute inset-x-4 top-4 flex justify-between text-[10px] tracking-[0.16em] uppercase">
                <span>{selected[0].brand}</span><span>Featured product</span>
              </figcaption>
              <div className="absolute inset-x-4 bottom-4 border-t border-black/15 pt-3 sm:inset-x-6">
                <p className="font-[family-name:var(--font-fraunces)] text-xl leading-tight sm:text-2xl">{selected[0].name}</p>
              </div>
            </figure>

            <figure className="relative min-h-[210px] overflow-hidden bg-[#cbdad7] lg:min-h-0">
              <Image src={selected[1].image} alt={selected[1].name} fill sizes="(max-width:1024px) 100vw, 24vw" className="object-contain p-7" />
              <figcaption className="absolute left-4 top-4 text-[9px] tracking-[0.16em] uppercase">{selected[1].brand}</figcaption>
            </figure>

            <div className="flex min-h-[190px] flex-col justify-between bg-[#191919] p-5 text-white lg:min-h-0">
              <p className="text-[9px] tracking-[0.18em] text-white/40 uppercase">Bu sayıda</p>
              <div className="space-y-1 font-[family-name:var(--font-fraunces)] text-xl leading-tight">
                <p>Ürün hikâyeleri</p><p>Ürün indeksi</p><p>OEM üretim</p>
              </div>
            </div>

            <div className="flex min-h-[190px] flex-col justify-between bg-[#d97700] p-5 lg:min-h-0">
              <p className="text-[9px] tracking-[0.18em] uppercase">Editorial direction</p>
              <p className="max-w-xs text-base font-medium leading-snug">Daha az kutu, daha az açıklama; daha güçlü ürün seçimi.</p>
            </div>

            <figure className="relative min-h-[210px] overflow-hidden bg-[#e4e0d8] lg:min-h-0">
              <Image src={selected[2].image} alt={selected[2].name} fill sizes="(max-width:1024px) 100vw, 24vw" className="object-contain p-7" />
            </figure>
          </div>
        </div>
      </section>

      <section id="giris" className="bg-white text-black">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-3"><p className="text-[10px] tracking-[0.2em] text-[#c96e00] uppercase">Editoryal yaklaşım</p></div>
          <div className="lg:col-span-6"><h2 className="font-[family-name:var(--font-fraunces)] text-3xl leading-tight sm:text-4xl">Her şeyi aynı anda söylemek yerine, doğru ürünü doğru sırada göstermek.</h2></div>
          <div className="lg:col-span-3"><p className="text-sm leading-7 text-black/55">Üretim gücü ve kalite bilgisi kaybolmuyor; ürün keşfini kesmeden, ihtiyaç duyulan yerde devreye giriyor.</p></div>
        </div>
      </section>

      <section id="hikaye-1" className="bg-[#f2eee6] text-black">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex items-end justify-between gap-6 border-b border-black/15 pb-5"><div><p className="text-[10px] tracking-[0.2em] text-[#c96e00] uppercase">Seçili ürünler</p><h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">Üç farklı ürün, üç farklı kadraj.</h2></div><span className="hidden text-xs text-black/40 sm:block">01—03</span></div>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {selected.map((item, i) => (
              <article key={item.id} className={i === 0 ? "lg:col-span-5" : i === 1 ? "lg:col-span-4 lg:pt-12" : "lg:col-span-3 lg:pt-24"}>
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5] bg-[#d8d0c5]" : i === 1 ? "aspect-square bg-[#c9d9d6]" : "aspect-[3/4] bg-white"}`}><Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-contain p-8" /></div>
                <p className="mt-4 text-[10px] tracking-[0.18em] text-[#c96e00] uppercase">0{i + 1} · {item.brand}</p>
                <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl leading-tight">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="indeks" className="bg-[#191919] text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-[10px] tracking-[0.2em] text-[#f0a33e] uppercase">Ürün indeksi</p><h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl">Portföye hızlı erişim.</h2></div>
            <div className="lg:col-span-8">{categories.map((item, i) => <article key={item.id} className="grid gap-3 border-t border-white/15 py-4 sm:grid-cols-[36px_1fr_auto] sm:items-center"><span className="text-xs text-[#f0a33e]">{String(i + 1).padStart(2, "0")}</span><div><h3 className="text-lg font-medium">{item.name}</h3><p className="mt-1 text-xs text-white/40">{item.brand}</p></div><ArrowUpRight className="hidden size-4 text-white/35 sm:block" /></article>)}</div>
          </div>
        </div>
      </section>

      <section id="fikirden" className="bg-[#d97700] text-[#171717]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[340px] lg:min-h-[500px]"><Image src={oemContent.image} alt="KAF Grup OEM ve Private Label" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div>
          <div className="p-6 sm:p-10 lg:p-14"><p className="text-[10px] tracking-[0.2em] uppercase">OEM / Private Label</p><h2 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl leading-tight">Markanızın bir sonraki ürünü nasıl doğar?</h2><p className="mt-5 max-w-xl text-base leading-7 text-black/65">{oemContent.summary}</p><div className="mt-10 grid gap-5 sm:grid-cols-3">{["Ürün fikri", "Numune + onay", "Üretim + teslimat"].map((x,i)=><div key={x} className="border-t border-black/25 pt-4"><span className="text-xs">0{i+1}</span><p className="mt-6 font-semibold">{x}</p></div>)}</div></div>
        </div>
      </section>

      <section id="tesis" className="bg-white text-black"><div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-[10px] tracking-[0.2em] text-[#c96e00] uppercase">Global temas</p><h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl">Ürün hikâyesinin arkasında gerçek sektör görünürlüğü.</h2></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">{fairs.slice(0,3).map(f=><figure key={f.id}><div className="relative aspect-square overflow-hidden bg-[#eee]"><Image src={f.image} alt={f.name} fill sizes="(max-width:640px) 50vw, 20vw" className="object-cover" /></div><figcaption className="mt-2 text-xs"><strong>{f.name}</strong><span className="ml-2 text-black/45">{f.location}</span></figcaption></figure>)}</div></div></div></section>

      <section id="katalog" className="bg-[#f2eee6] text-black"><div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><p className="text-[10px] tracking-[0.2em] text-[#c96e00] uppercase">İletişim</p><h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl">Katalog, numune veya OEM görüşmesi.</h2></div><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold">{company.contact.email}<ArrowUpRight className="size-4" /></a></div></section>
    </>
  );
}
