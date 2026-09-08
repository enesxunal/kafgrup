import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { productSets } from "@/data/media";

const systems = [
  ["SYS-01", "Instrument care", "Tıbbi cihaz ve endoskop süreçleri", productSets.taslak3[0]],
  ["SYS-02", "Surface control", "Yüzey ve çevresel dezenfeksiyon", productSets.taslak3[2]],
  ["SYS-03", "Patient care", "Bariyer ve antibakteriyel bakım", productSets.taslak3[4]],
  ["SYS-04", "Medical gels", "Tanı ve uygulama destek ürünleri", productSets.taslak3[5]],
] as const;

const stages = [
  ["01", "Specify", "Ürün, pazar ve teknik gereksinim"],
  ["02", "Develop", "Formülasyon, numune ve ambalaj"],
  ["03", "Validate", "Kalite kontrol ve üretim onayı"],
  ["04", "Produce", "Seri üretim ve dolum"],
  ["05", "Release", "Sevkiyat ve teslimat hazırlığı"],
] as const;

export function HomeSections() {
  return (
    <>
      <section className="bg-[#080c11] text-white">
        <div className="mx-auto max-w-[1360px] px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-16 lg:pt-14">
          <div className="grid border border-white/12 lg:grid-cols-[1fr_320px]">
            <div className="min-h-[520px] p-6 sm:p-9 lg:min-h-[620px] lg:p-12">
              <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-4 text-[10px] tracking-[0.2em] text-white/40 uppercase">
                <span>KAF / Production Protocol</span>
                <span>TR · MED</span>
              </div>
              <div className="flex min-h-[420px] flex-col justify-between pt-10 lg:min-h-[510px]">
                <div className="max-w-3xl">
                  <p className="font-mono text-xs text-[#f0a33e]">MANUFACTURING SYSTEM / 2026</p>
                  <h1 className="mt-6 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-5xl lg:text-[4.5rem]">
                    Kontrollü üretim için tasarlanmış medikal sistemler.
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/52">Temiz oda standardı, GMP altyapısı, ürün geliştirme disiplini ve global tedarik kabiliyeti aynı operasyon modelinde birleşir.</p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-px bg-white/12 sm:grid-cols-4">
                  {[['15.000 m²','Üretim alanı'],['50+','İhracat ülkesi'],['GMP','Kalite standardı'],['25+ yıl','Sektör deneyimi']].map(([v,l]) => (
                    <div key={l} className="bg-[#080c11] p-4"><p className="text-xl font-semibold">{v}</p><p className="mt-1 text-[10px] tracking-[0.15em] text-white/35 uppercase">{l}</p></div>
                  ))}
                </div>
              </div>
            </div>
            <aside id="veri" className="border-t border-white/12 bg-[#0d131a] p-6 lg:border-l lg:border-t-0 lg:p-8">
              <p className="font-mono text-[10px] tracking-[0.18em] text-[#f0a33e] uppercase">Operational facts</p>
              <dl className="mt-7 divide-y divide-white/12 border-y border-white/12">
                {[['Facilities','İstanbul · Van'],['Clean rooms','Class 1.000 / 10.000 / 100.000'],['Team','60+'],['Export','50+ ülke']].map(([k,v]) => (
                  <div key={k} className="py-5"><dt className="text-[10px] tracking-[0.15em] text-white/35 uppercase">{k}</dt><dd className="mt-2 text-sm font-medium leading-relaxed">{v}</dd></div>
                ))}
              </dl>
              <a href="#sistemler" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#f0a33e] uppercase">Sistemleri incele <ArrowUpRight className="size-4" /></a>
            </aside>
          </div>
        </div>
      </section>

      <section id="sistemler" className="bg-[#111820] text-white">
        <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div><p className="font-mono text-[10px] tracking-[0.2em] text-[#f0a33e] uppercase">System portfolio</p><h2 className="mt-4 text-3xl font-semibold tracking-tight">Ürünler kategori değil, çalışma sistemi olarak okunur.</h2></div>
            <div className="grid border-l border-t border-white/12 sm:grid-cols-2">
              {systems.map(([code,title,desc,image]) => (
                <article key={code} className="grid min-h-[260px] grid-rows-[auto_1fr_auto] border-b border-r border-white/12 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4"><span className="font-mono text-[10px] text-[#f0a33e]">{code}</span><div className="relative h-24 w-24 bg-[#0b1016]"><Image src={image} alt="" fill sizes="96px" className="object-contain p-2" /></div></div>
                  <div className="self-end"><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm text-white/42">{desc}</p></div>
                  <div className="mt-5 h-px bg-white/12" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kalite" className="bg-[#d9e0df] text-[#101820]">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#9a5700] uppercase">Quality architecture</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Kontrol, ürünün son adımı değil; üretim sisteminin kendisi.</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-px bg-[#101820]/15 sm:grid-cols-3">
              {[['01','GMP','Belgeli üretim altyapısı'],['02','Clean room','Class 1.000 · 10.000 · 100.000'],['03','Traceability','Üretim ve kalite adımlarının kontrollü ilerlemesi']].map(([n,t,d]) => (
                <div key={n} className="bg-[#d9e0df] p-5"><p className="font-mono text-xs text-[#9a5700]">{n}</p><h3 className="mt-10 text-xl font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-[#101820]/55">{d}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kapasite" className="bg-[#0b1016] text-white">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-7">
            <div className="relative max-w-[720px] overflow-hidden border border-white/10 bg-[#111820]">
              <div className="relative aspect-[11/6]"><Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" /></div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 text-[10px] tracking-[0.14em] text-white/35 uppercase"><span>Facility / Van</span><span>YYÜ Teknokent</span></div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#f0a33e] uppercase">Capacity / Facility</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Fabrika fotoğrafı dekor değil, operasyon kanıtı olarak kullanılıyor.</h2>
            <p className="mt-5 text-sm leading-relaxed text-white/48">Düşük çözünürlüklü üretim görseli büyütülmeden, gerçek tesis bağlamını destekleyen kontrollü bir kanıt alanında tutuluyor.</p>
            <dl className="mt-8 divide-y divide-white/12 border-y border-white/12">
              {[['Toplam kapalı alan','15.000 m²'],['Lokasyon','İstanbul + Van'],['İhracat ağı','50+ ülke']].map(([k,v]) => <div key={k} className="flex items-center justify-between gap-4 py-4 text-sm"><dt className="text-white/35">{k}</dt><dd className="font-medium">{v}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#111820] text-white">
        <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div><p className="font-mono text-[10px] tracking-[0.2em] text-[#f0a33e] uppercase">OEM production line</p><h2 className="mt-4 text-3xl font-semibold tracking-tight">Specification to shipment.</h2></div>
            <ol className="border-t border-white/12">
              {stages.map(([n,t,d]) => (
                <li key={n} className="grid gap-3 border-b border-white/12 py-5 sm:grid-cols-[70px_180px_1fr] sm:items-baseline"><span className="font-mono text-xs text-[#f0a33e]">{n}</span><strong className="font-semibold">{t}</strong><span className="text-sm text-white/42">{d}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="global" className="bg-[#d97800] text-[#101820]">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div><p className="font-mono text-[10px] tracking-[0.2em] uppercase">Global supply / Business development</p><h2 className="mt-3 text-3xl font-semibold">OEM, distribütörlük ve kurumsal tedarik.</h2></div>
          <a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 border border-[#101820] px-5 py-3 text-sm font-semibold">{company.contact.email} <ArrowUpRight className="size-4" /></a>
        </div>
      </section>
    </>
  );
}
