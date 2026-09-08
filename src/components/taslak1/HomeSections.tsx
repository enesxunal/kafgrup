import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { productSets } from "@/data/media";

const capabilities = [
  ["01", "Enfeksiyon kontrolü", "Yüzey, el ve tıbbi cihaz dezenfeksiyonu için profesyonel ürün sistemleri."],
  ["02", "Medikal jel sistemleri", "Tanı ve girişimsel uygulamalar için steril ve iletken jel ürünleri."],
  ["03", "Hasta bakım çözümleri", "İnkontinans, bariyer ve antibakteriyel bakım ürünleri."],
  ["04", "OEM / Private Label", "Formülasyondan ambalaja, markanız adına uçtan uca üretim."],
];

export function HomeSections() {
  return <>
    <section className="bg-[#f6f7f4] text-[#152033]">
      <div className="mx-auto grid min-h-[78svh] max-w-[1320px] lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:col-span-5 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#d97800] uppercase">Medical manufacturing · Türkiye</p>
          <h1 className="mt-5 text-5xl leading-[0.95] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[4.8rem]">Sağlık için üretiyoruz.<br/><span className="text-[#7c8797]">Dünyaya ulaştırıyoruz.</span></h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5e6878]">GMP belgeli üretim altyapısı, temiz oda standartları ve 50’den fazla ülkeye uzanan tedarik ağı.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#cozumler" className="inline-flex items-center gap-2 bg-[#152033] px-5 py-3.5 text-sm font-semibold text-white">Çözümlerimizi inceleyin <ArrowRight className="size-4"/></a><a href="#oem" className="inline-flex border border-[#152033]/25 px-5 py-3.5 text-sm font-semibold">OEM / Private Label</a></div>
        </div>
        <div className="relative min-h-[480px] overflow-hidden lg:col-span-7 lg:min-h-full"><Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup üretim tesisi" fill priority sizes="(max-width:1024px) 100vw, 58vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-[#f6f7f4] via-transparent to-transparent lg:w-1/3"/></div>
      </div>
      <div className="border-y border-[#152033]/15"><div className="mx-auto grid max-w-[1320px] grid-cols-2 lg:grid-cols-4">{[["15.000 m²","Üretim alanı"],["50+","İhracat ülkesi"],["GMP","Kalite standardı"],["25+ yıl","Sektör tecrübesi"]].map(([v,l],i)=><div key={l} className={`px-5 py-6 sm:px-8 ${i?"border-l border-[#152033]/15":""}`}><p className="text-2xl font-semibold">{v}</p><p className="mt-1 text-sm text-[#697486]">{l}</p></div>)}</div></div>
    </section>

    <section id="cozumler" className="bg-white text-[#152033]"><div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-xs font-semibold tracking-[0.18em] text-[#d97800] uppercase">Ürün ve yetkinlikler</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Dört ana iş alanı,<br/>tek kalite standardı.</h2></div><div className="lg:col-span-8"><div className="divide-y divide-[#152033]/15 border-y border-[#152033]/15">{capabilities.map(([n,t,d])=><article key={n} className="grid gap-4 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center"><span className="text-xs font-semibold text-[#d97800]">{n}</span><div><h3 className="text-xl font-semibold">{t}</h3><p className="mt-1 max-w-xl text-sm leading-relaxed text-[#697486]">{d}</p></div><ArrowRight className="hidden size-4 text-[#9aa1aa] sm:block"/></article>)}</div></div></div></div></section>

    <section className="bg-[#edf0f2] text-[#152033]"><div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24"><div className="lg:col-span-5"><p className="text-xs font-semibold tracking-[0.18em] text-[#d97800] uppercase">Ürün portföyü</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Klinik ihtiyaca göre düzenlenmiş ürün aileleri.</h2><p className="mt-4 text-[#697486]">Katalog mantığı yerine kullanım alanına göre keşif: dezenfeksiyon, medikal jel, hasta bakım ve özel üretim.</p></div><div className="grid grid-cols-2 gap-3 lg:col-span-7">{productSets.taslak1.slice(0,4).map((src,i)=><div key={src} className={`relative aspect-square bg-white ${i===1||i===2?"lg:translate-y-6":""}`}><Image src={src} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-contain p-8"/></div>)}</div></div></section>

    <section id="oem" className="bg-[#152033] text-white"><div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24"><div className="lg:col-span-5"><p className="text-xs font-semibold tracking-[0.18em] text-[#f0a33e] uppercase">OEM / Private Label</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Markanız için güvenilir üretim ortağı.</h2><p className="mt-5 max-w-md text-base leading-relaxed text-white/60">Ürün fikrinden formülasyona, ambalajdan seri üretime kadar süreci tek merkezden yönetiyoruz.</p></div><ol className="grid gap-px bg-white/15 sm:grid-cols-3 lg:col-span-7">{[["01","Brief","Pazar, ürün ve regülasyon hedefleri"],["02","Geliştirme","Formülasyon, numune ve onay"],["03","Üretim","GMP koşullarında üretim ve sevkiyat"]].map(([n,t,d])=><li key={n} className="bg-[#152033] p-6"><span className="text-xs text-[#f0a33e]">{n}</span><h3 className="mt-8 text-xl font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-white/50">{d}</p></li>)}</ol></div></section>

    <section className="bg-white text-[#152033]"><div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><p className="text-xs font-semibold tracking-[0.18em] text-[#d97800] uppercase">Global iş ortaklığı</p><h2 className="mt-3 text-3xl font-semibold">Distribütörlük ve kurumsal tedarik için görüşelim.</h2></div><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 bg-[#152033] px-5 py-3.5 text-sm font-semibold text-white">{company.contact.email} <ArrowRight className="size-4"/></a></div></section>
  </>;
}
