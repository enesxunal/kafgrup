import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { products } from "@/data/products";
import { oemSteps } from "@/data/content";

const systems = [
  { code: "SYS-01", title: "Instrument care", desc: "Tıbbi cihaz ve endoskop süreçleri", image: products[2].image },
  { code: "SYS-02", title: "Surface control", desc: "Yüzey ve çevresel dezenfeksiyon", image: products[7].image },
  { code: "SYS-03", title: "Patient care", desc: "Bariyer ve antibakteriyel bakım", image: products[12].image },
  { code: "SYS-04", title: "Medical gels", desc: "Tanı ve uygulama destek ürünleri", image: products[0].image },
];

export function HomeSections() {
  return (
    <>
      <section id="veri" className="bg-[#090d12] text-white">
        <div className="mx-auto max-w-[1380px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid overflow-hidden border border-white/12 lg:grid-cols-[1fr_320px]">
            <div className="p-5 sm:p-8 lg:p-12">
              <div className="flex items-center justify-between border-b border-white/12 pb-5 text-[9px] tracking-[0.22em] text-white/35 uppercase"><span>KAF / production protocol</span><span>TR · MED</span></div>
              <div className="grid gap-8 py-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8"><p className="font-mono text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">Manufacturing system / 2026</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Üründen önce sistemi gösteren, üretim disiplinini merkeze alan dijital yapı.</h1></div>
                <p className="text-sm leading-6 text-white/45 lg:col-span-4">Temiz oda, GMP altyapısı, kapasite, ürün sistemleri ve OEM akışı tek bir operasyon mantığı içinde okunur.</p>
              </div>
              <div className="grid grid-cols-2 border-t border-white/12 md:grid-cols-4">
                {metrics.map((m) => <div key={m.id} className="border-b border-white/12 py-5 pr-4 md:border-b-0 md:border-r md:px-4 first:md:pl-0 last:md:border-r-0"><p className="text-xl font-semibold">{m.value}{m.unit ? <span className="ml-1 text-sm">{m.unit}</span> : null}</p><p className="mt-1 text-[9px] tracking-[0.14em] text-white/30 uppercase">{m.label}</p></div>)}
              </div>
            </div>
            <aside className="border-t border-white/12 bg-[#0f151c] p-5 sm:p-8 lg:border-l lg:border-t-0">
              <p className="font-mono text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">Operational facts</p>
              <dl className="mt-6 divide-y divide-white/12 border-y border-white/12 text-sm">
                <div className="py-4"><dt className="font-mono text-[9px] tracking-[0.16em] text-white/30 uppercase">Facilities</dt><dd className="mt-2">İstanbul · Van</dd></div>
                <div className="py-4"><dt className="font-mono text-[9px] tracking-[0.16em] text-white/30 uppercase">Clean rooms</dt><dd className="mt-2">Class 1.000 / 10.000 / 100.000</dd></div>
                <div className="py-4"><dt className="font-mono text-[9px] tracking-[0.16em] text-white/30 uppercase">Quality</dt><dd className="mt-2">GMP</dd></div>
              </dl>
              <a href="#sistemler" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#f0a33e] uppercase">Sistemleri incele <ArrowUpRight className="size-4" /></a>
            </aside>
          </div>
        </div>
      </section>

      <section id="sistemler" className="bg-[#0e141a] text-white">
        <div className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-8 grid gap-5 lg:grid-cols-12"><div className="lg:col-span-3"><p className="font-mono text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">System portfolio</p></div><div className="lg:col-span-7"><h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Ürün portföyü, klinik iş akışları üzerinden okunur.</h2></div></div>
          <div className="border-y border-white/12">
            {systems.map((item) => (
              <article key={item.code} className="grid gap-4 border-b border-white/12 py-5 last:border-b-0 sm:grid-cols-[72px_1fr_140px] sm:items-center">
                <span className="font-mono text-[10px] text-[#f0a33e]">{item.code}</span>
                <div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-1 text-sm text-white/40">{item.desc}</p></div>
                <div className="relative h-24 bg-[#151d25]"><Image src={item.image} alt="" fill sizes="140px" className="object-contain p-3 grayscale" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kalite" className="bg-[#cfd4d1] text-[#10161b]">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5"><p className="font-mono text-[10px] tracking-[0.18em] text-[#8a4b00] uppercase">Quality architecture</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Kontrol, ürünün son adımı değil; üretim sisteminin parçası.</h2></div>
          <div className="lg:col-span-7">
            {[ ["01","GMP","Belgeli üretim altyapısı"], ["02","Clean room","Class 1.000 · 10.000 · 100.000"], ["03","Production discipline","Geliştirme, üretim ve kalite adımlarının kontrollü ilerlemesi"] ].map(([n,t,d]) => <div key={n} className="grid gap-3 border-t border-black/20 py-5 sm:grid-cols-[52px_180px_1fr]"><span className="font-mono text-xs text-[#8a4b00]">{n}</span><strong>{t}</strong><span className="text-sm leading-6 text-black/55">{d}</span></div>)}
          </div>
        </div>
      </section>

      <section id="kapasite" className="bg-[#090d12] text-white">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] max-w-[620px] overflow-hidden border border-white/12 bg-[#111820]"><Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" /></div>
            <p className="mt-3 font-mono text-[9px] tracking-[0.16em] text-white/30 uppercase">Facility image / Van YYÜ Teknokent</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7"><p className="font-mono text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">Capacity / facility</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Fabrika görseli dekor değil, operasyon kanıtı.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/45">KAF Grup’un İstanbul ve Van’daki üretim yapısı, 15.000 m² kapalı alan ve temiz oda altyapısıyla birlikte gösterilir. Görsel yalnızca gerçek tesis bağlamında kullanılır.</p><div className="mt-8 grid grid-cols-2 gap-px bg-white/12">{[["15.000 m²","Kapalı alan"],["2","Üretim lokasyonu"],["60+","Ekip"],["50+","İhracat ülkesi"]].map(([v,l])=><div key={l} className="bg-[#090d12] p-5"><p className="text-2xl font-semibold">{v}</p><p className="mt-1 font-mono text-[9px] tracking-[0.14em] text-white/30 uppercase">{l}</p></div>)}</div></div>
        </div>
      </section>

      <section id="oem" className="bg-[#141b22] text-white">
        <div className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-4"><p className="font-mono text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">OEM production line</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Brief’ten sevkiyata üretim protokolü.</h2></div><ol className="lg:col-span-8">{oemSteps.map((s,i)=><li key={s.step} className="grid gap-3 border-t border-white/12 py-5 sm:grid-cols-[50px_160px_1fr]"><span className="font-mono text-xs text-[#f0a33e]">0{i+1}</span><strong>{s.title}</strong><span className="text-sm leading-6 text-white/45">{s.description}</span></li>)}</ol></div>
        </div>
      </section>

      <section id="global" className="bg-[#f0a33e] text-[#10161b]"><div className="mx-auto flex max-w-[1380px] flex-col gap-5 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><p className="font-mono text-[10px] tracking-[0.18em] uppercase">Business development / global supply</p><h2 className="mt-2 text-2xl font-semibold">OEM, distribütörlük veya kurumsal tedarik.</h2></div><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold">{company.contact.email}<ArrowUpRight className="size-4" /></a></div></section>
    </>
  );
}
