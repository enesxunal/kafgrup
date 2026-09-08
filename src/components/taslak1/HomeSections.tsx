import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { company, metrics } from "@/data/company";
import { productSets } from "@/data/media";

const families = [
  ["01", "Enfeksiyon kontrolü", "Yüzey, el ve tıbbi cihaz dezenfeksiyonu", productSets.taslak1[0]],
  ["02", "Medikal jel sistemleri", "Tanı ve girişimsel uygulamalar", productSets.taslak1[1]],
  ["03", "Hasta bakım ürünleri", "Bariyer, hijyen ve antibakteriyel bakım", productSets.taslak1[4]],
  ["04", "OEM / Private Label", "Markaya özel geliştirme ve üretim", productSets.taslak1[5]],
] as const;

const quality = [
  "GMP belgeli üretim altyapısı",
  "Class 1.000 / 10.000 / 100.000 temiz oda standardı",
  "İstanbul ve Van'da üretim organizasyonu",
  "50'den fazla ülkeye uzanan ihracat ağı",
] as const;

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f4f6f5] text-[#17303a]">
        <div className="mx-auto max-w-[1320px] px-5 pb-14 pt-12 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="grid gap-10 border-b border-[#17303a]/15 pb-10 lg:grid-cols-12 lg:items-end lg:pb-14">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#d97800] uppercase">KAF Grup · Medical Manufacturing</p>
              <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-5xl lg:text-[4.1rem]">
                Üretim gücü, kalite disiplini ve global tedarik tek kurumsal yapıda.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-relaxed text-[#5b6b72]">
                KAF Grup; medikal dezenfeksiyon, jel ve hasta bakım ürünlerini kendi üretim altyapısı, temiz oda standartları ve ihracat deneyimiyle geliştirir.
              </p>
              <a href="#urunler" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#17303a]">
                Ürün ailelerini inceleyin <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div id="kanit" className="grid divide-y divide-[#17303a]/15 border-b border-[#17303a]/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.id} className="py-6 sm:px-5 first:sm:pl-0">
                <p className="text-3xl font-semibold tracking-tight">{item.value}{item.unit ? ` ${item.unit}` : ""}</p>
                <p className="mt-1 text-sm font-medium">{item.label}</p>
                <p className="mt-1 text-xs text-[#6a787e]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="urunler" className="bg-white text-[#17303a]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#d97800] uppercase">Ürün portföyü</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Klinik ihtiyaca göre düzenlenmiş ürün aileleri.</h2>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-[#17303a]/15">
                {families.map(([no, title, desc, image]) => (
                  <article key={no} className="grid gap-5 border-b border-[#17303a]/15 py-6 sm:grid-cols-[52px_1fr_150px] sm:items-center lg:py-7">
                    <span className="text-xs font-semibold text-[#d97800]">{no}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-1 text-sm text-[#6a787e]">{desc}</p>
                    </div>
                    <div className="relative h-28 bg-[#f4f6f5] sm:h-24">
                      <Image src={image} alt="" fill sizes="150px" className="object-contain p-3" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kalite" className="border-y border-[#17303a]/10 bg-[#e9eeec] text-[#17303a]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#d97800] uppercase">Üretim & kalite</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">Kalite anlatısı, slogan yerine kanıtla kuruluyor.</h2>
            <div className="mt-8 relative max-w-[720px] overflow-hidden border border-[#17303a]/10 bg-white">
              <div className="relative aspect-[11/6]">
                <Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill sizes="(max-width:1024px) 100vw, 42vw" className="object-cover" />
              </div>
              <p className="border-t border-[#17303a]/10 px-4 py-3 text-xs text-[#6a787e]">YYÜ Teknokent · Van üretim tesisi</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <div className="border-t border-[#17303a]/15">
              {quality.map((item, index) => (
                <div key={item} className="flex gap-4 border-b border-[#17303a]/15 py-5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#d97800]" />
                  <div>
                    <p className="text-sm font-semibold text-[#17303a]/40">0{index + 1}</p>
                    <p className="mt-1 text-lg font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-[#5b6b72]">Bu yaklaşım, satın alma ve distribütör ekiplerinin aradığı temel güven unsurlarını ürünlerin önüne geçmeden görünür kılar.</p>
          </div>
        </div>
      </section>

      <section id="oem" className="bg-[#17303a] text-white">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#f2a13b] uppercase">OEM / Private Label</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Markanız için üretim ortağı.</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55">Ürün fikrinden formülasyon ve ambalaja, seri üretimden sevkiyata kadar süreç tek çatı altında ilerler.</p>
            </div>
            <ol className="lg:col-span-8">
              {[['01','İhtiyacı tanımlama','Pazar, ürün ve ambalaj hedefi'],['02','Geliştirme','Formülasyon, numune ve onay'],['03','Üretim','GMP koşullarında seri üretim'],['04','Teslimat','Paketleme ve sevkiyat hazırlığı']].map(([n,t,d]) => (
                <li key={n} className="grid gap-2 border-t border-white/15 py-5 sm:grid-cols-[60px_1fr_1fr] sm:items-baseline last:border-b">
                  <span className="text-xs text-[#f2a13b]">{n}</span><strong className="font-semibold">{t}</strong><span className="text-sm text-white/50">{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-white text-[#17303a]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div><p className="text-xs font-semibold tracking-[0.18em] text-[#d97800] uppercase">Global iş ortaklığı</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Distribütörlük, OEM ve kurumsal tedarik için görüşelim.</h2></div>
          <a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 bg-[#17303a] px-5 py-3.5 text-sm font-semibold text-white">{company.contact.email} <ArrowRight className="size-4" /></a>
        </div>
      </section>
    </>
  );
}
