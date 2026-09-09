import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { company, metrics } from "@/data/company";
import { products } from "@/data/products";
import { fairs, oemContent, oemSteps } from "@/data/content";

const spotlightProducts = [products[2], products[0], products[7], products[12]];

const disciplines = [
  ["01", "Ürün geliştirme", "Formülasyon, kullanım senaryosu ve ambalaj ihtiyacı birlikte ele alınır."],
  ["02", "Kontrollü üretim", "GMP altyapısı ve temiz oda standartları üretimin merkezindedir."],
  ["03", "Kalite kontrol", "Üretim süreci kontrollü, tekrarlanabilir ve kurumsal ölçekte yönetilir."],
  ["04", "Global tedarik", "Üretim 50’den fazla ülkeye uzanan iş ortaklığı ağına bağlanır."],
] as const;

export function HomeSections() {
  return (
    <>
      <section className="bg-[#0a0a0a] text-[#f3f0e8]">
        <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-[1440px] flex-col px-5 py-7 sm:px-8 lg:max-h-[720px] lg:min-h-[580px] lg:px-12 lg:py-8">
          <div className="grid gap-5 border-b border-white/10 pb-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.22em] text-[#e58a1b] uppercase">KAF Grup · Medical Manufacturing</p>
              <h1 className="mt-3 max-w-3xl text-[2.45rem] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[3.55rem]">
                Kontrollü üretim. Güvenilir kalite. Global medikal tedarik.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-md text-sm leading-6 text-white/50">
                İstanbul ve Van’daki üretim altyapısı; dezenfeksiyon, medikal jel ve hasta bakım ürünlerini aynı kalite standardında buluşturur.
              </p>
              <a href="#uretim" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e58a1b]">Üretim altyapısı <ArrowRight className="size-4" /></a>
            </div>
          </div>

          <div className="mt-5 grid flex-1 gap-3 lg:grid-cols-[1.35fr_.65fr]">
            <figure className="relative min-h-[300px] overflow-hidden bg-[#171717] lg:min-h-0">
              <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill priority sizes="(max-width:1024px) 100vw, 68vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div><p className="text-[9px] tracking-[0.17em] text-white/45 uppercase">Üretim tesisi</p><p className="mt-1 text-lg font-medium">Van · YYÜ Teknokent</p></div>
                <span className="hidden text-[9px] tracking-[0.15em] text-white/35 uppercase sm:block">KAF Grup</span>
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:grid-rows-2">
              {spotlightProducts.slice(0, 2).map((product, index) => (
                <div key={product.id} className={`relative min-h-[190px] overflow-hidden ${index === 0 ? "bg-[#ddd9cf]" : "bg-[#151515]"}`}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width:1024px) 50vw, 28vw" className="object-contain p-6 sm:p-8" />
                  <span className={`absolute left-4 top-4 text-[9px] tracking-[0.16em] uppercase ${index === 0 ? "text-black/45" : "text-white/35"}`}>{product.brand}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.id} className="bg-[#111] px-4 py-4 sm:px-5">
                <p className="text-xl font-semibold tracking-[-0.03em]">{m.value}{m.unit ? <span className="ml-1 text-sm">{m.unit}</span> : null}</p>
                <p className="mt-1 text-[9px] text-white/35">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="uretim" className="bg-[#d8d4ca] text-[#111]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.2em] text-[#8f4e00] uppercase">Üretim altyapısı</p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Ürünün arkasında planlı bir üretim süreci var.</h2>
            </div>
            <div className="lg:col-span-8">
              {disciplines.map(([n, title, desc]) => (
                <article key={n} className="grid gap-3 border-t border-black/15 py-5 sm:grid-cols-[52px_180px_1fr] sm:items-baseline">
                  <span className="text-xs text-[#8f4e00]">{n}</span><h3 className="text-lg font-semibold">{title}</h3><p className="text-sm leading-6 text-black/55">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sistemler" className="bg-[#0c0c0c] text-[#f2efe8]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-6 border-b border-white/10 pb-7 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7"><p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">Ürün sistemleri</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Klinik kullanım alanlarına göre düzenlenmiş ürün portföyü.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-white/40 lg:col-span-4 lg:col-start-9">Tıbbi cihaz dezenfeksiyonu, yüzey kontrolü, hasta bakımı ve medikal jel ürünleri.</p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {spotlightProducts.map((product, index) => (
              <article key={product.id} className="bg-[#111]">
                <div className={`relative aspect-[4/5] ${index % 2 ? "bg-[#171717]" : "bg-[#dedad0]"}`}><Image src={product.image} alt={product.name} fill sizes="(max-width:640px) 100vw, 25vw" className="object-contain p-8" /></div>
                <div className="p-5"><p className="text-[9px] tracking-[0.16em] text-[#e58a1b] uppercase">{product.brand}</p><h3 className="mt-2 text-xl font-semibold leading-tight">{product.name}</h3><p className="mt-3 text-sm leading-6 text-white/40">{product.summary}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kalite" className="bg-[#181818] text-[#f2efe8]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
          <div className="lg:col-span-5"><p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">Kalite</p><h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Üretim standardı, net verilerle görünür.</h2></div>
          <div className="grid grid-cols-2 border-y border-white/10 lg:col-span-7">
            <div className="border-r border-white/10 py-6 pr-5"><p className="text-3xl font-semibold">GMP</p><p className="mt-2 text-xs text-white/35">Belgeli üretim altyapısı</p></div>
            <div className="py-6 pl-5"><p className="text-3xl font-semibold">3</p><p className="mt-2 text-xs text-white/35">Temiz oda sınıfı</p></div>
            <div className="border-r border-t border-white/10 py-6 pr-5"><p className="text-2xl font-semibold">Class 1.000</p><p className="mt-2 text-xs text-white/35">Kontrollü alan</p></div>
            <div className="border-t border-white/10 py-6 pl-5"><p className="text-2xl font-semibold">Class 100.000</p><p className="mt-2 text-xs text-white/35">Kontrollü alan</p></div>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#d8d4ca] text-[#111]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
          <div className="lg:col-span-6"><div className="relative min-h-[340px] overflow-hidden bg-[#c9c3b7] sm:min-h-[430px]"><Image src={oemContent.image} alt="KAF Grup OEM ve Private Label" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div></div>
          <div className="lg:col-span-6"><p className="text-[10px] tracking-[0.2em] text-[#8f4e00] uppercase">OEM / Private Label</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Markanız için ürün geliştirme ve üretim.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-black/55">{oemContent.summary}</p><ol className="mt-8 border-t border-black/15">{oemSteps.map((step) => <li key={step.step} className="grid gap-2 border-b border-black/15 py-4 sm:grid-cols-[44px_150px_1fr]"><span className="text-xs text-[#8f4e00]">{step.step}</span><strong className="text-sm">{step.title}</strong><span className="text-xs leading-5 text-black/45">{step.description}</span></li>)}</ol></div>
        </div>
      </section>

      <section id="global" className="bg-[#0a0a0a] text-[#f2efe8]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">Global görünürlük</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">50+ ülkeye uzanan iş ortaklığı ağı.</h2></div>
            <div className="lg:col-span-8"><div className="grid gap-3 sm:grid-cols-3">{fairs.slice(0, 3).map((fair) => <figure key={fair.id} className="relative min-h-[260px] overflow-hidden bg-[#171717]"><Image src={fair.image} alt={fair.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><figcaption className="absolute inset-x-0 bottom-0 p-5"><p className="text-lg font-semibold">{fair.name}</p><p className="mt-1 text-xs text-white/45">{fair.location}</p></figcaption></figure>)}</div><div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-white/40">OEM, distribütörlük veya kurumsal tedarik</p><a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#e58a1b]">{company.contact.email}<ArrowUpRight className="size-4" /></a></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
