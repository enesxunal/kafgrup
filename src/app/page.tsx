import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  Globe2,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { drafts } from "@/data/presentation";
import { company, metrics } from "@/data/company";
import { advantages } from "@/data/presentation-advantages";

const objectives = [
  "KAF Grup’un üretim gücünü dijitalde daha premium ve güvenilir göstermek",
  "Ürün, marka ve kategori yapısını ziyaretçinin daha hızlı keşfetmesini sağlamak",
  "İhracat ve OEM / Private Label kabiliyetlerini ayrı bir B2B değer önerisine dönüştürmek",
  "Mobil, SEO ve çoklu dil altyapısını yeni sitenin temeline yerleştirmek",
];

const scope = [
  { icon: Layers3, title: "Bilgi mimarisi", text: "Kurumsal, ürün, kategori, OEM, ihracat, haber ve iletişim akışlarının yeniden kurgulanması." },
  { icon: Search, title: "Ürün keşfi", text: "Kategori → ürün → marka ilişkisini sadeleştiren, teklif talebine bağlanan keşif akışı." },
  { icon: Globe2, title: "Global iletişim", text: "50+ ülkeye ihracat, tesisler ve kalite belgelerini güven katmanına dönüştüren anlatım." },
  { icon: Factory, title: "OEM / Private Label", text: "Üretim kabiliyeti, süreç ve teklif toplama alanlarını ayrı bir dönüşüm hattında sunma." },
  { icon: ShieldCheck, title: "Teknik temel", text: "Responsive yapı, performans, teknik SEO, schema ve TR/EN genişleme planı." },
  { icon: Sparkles, title: "Marka deneyimi", text: "KAF Grup’u katalog sitesi yerine modern bir medikal üretici markası olarak konumlandırma." },
];

const approachDetails = [
  {
    tone: "Global B2B · kurumsal · güven odaklı",
    focus: "İhracat, üretim altyapısı ve kurumsal itibar",
    fit: "Satın alma ekipleri ve distribütörler için güçlü",
  },
  {
    tone: "Premium · editoryal · ürün hikâyesi",
    focus: "Ürün gamı, marka algısı ve keşif deneyimi",
    fit: "KAF Grup’u daha çağdaş ve ayrışan göstermek için en dengeli yaklaşım",
  },
  {
    tone: "Teknik · koyu · endüstriyel",
    focus: "GMP, kalite, tesis, Ar-Ge ve OEM kabiliyeti",
    fit: "Teknik güven ve üretim gücünü öne çıkarmak için güçlü",
  },
] as const;

const process = ["Yön seçimi", "Bilgi mimarisi", "UI sistemi", "İçerik uyarlama", "Responsive geliştirme", "SEO + yayın hazırlığı"];

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f7] text-kaf-ink">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f3f4f7]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Image src={company.logo} alt="KAF Grup" width={150} height={28} className="h-6 w-auto" priority unoptimized />
          <div className="flex items-center gap-5 text-sm text-kaf-muted">
            <a href="#kapsam" className="hidden transition hover:text-kaf-ink sm:inline">Kapsam</a>
            <a href="#yaklasimlar" className="hidden transition hover:text-kaf-ink sm:inline">Yaklaşımlar</a>
            <Link href="/teknik-yapi" className="transition hover:text-kaf-orange">Teknik yapı</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-black/5 bg-[#eceff3]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(224,128,0,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.55),transparent)]" />
          <div className="relative mx-auto grid w-full max-w-[1380px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-28">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-kaf-orange uppercase">Dijital dönüşüm sunumu · 2026</p>
              <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[4.65rem]">
                KAF Grup’un dijital vitrini, üretim gücü kadar güçlü olmalı.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-kaf-muted sm:text-lg">
                Bu çalışma yalnızca yeni bir ana sayfa tasarımı değil; ürün keşfi, global güven, OEM iletişimi ve teknik altyapıyı tek bir dijital sistemde yeniden kurgulama önerisidir.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#yaklasimlar" className="inline-flex items-center gap-2 bg-kaf-ink px-5 py-3.5 text-sm font-medium text-white transition hover:bg-kaf-orange">3 tasarım yönünü incele <ArrowRight className="size-4" /></a>
                <a href="#kapsam" className="inline-flex items-center gap-2 border border-kaf-line bg-white px-5 py-3.5 text-sm font-medium">Proje kapsamı</a>
              </div>
            </div>
            <div className="self-end border border-black/8 bg-white/75 p-6 backdrop-blur sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-kaf-muted uppercase">Bugünkü temel</p>
              <div className="mt-6 grid grid-cols-2 gap-px bg-kaf-line">
                {metrics.map((item) => (
                  <div key={item.id} className="bg-white p-4 sm:p-5">
                    <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{item.value}<span className="ml-1 text-sm text-kaf-orange">{item.unit}</span></p>
                    <p className="mt-1 text-xs leading-5 text-kaf-muted">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-kaf-muted">
                Üretim kapasitesi, sektör tecrübesi, ekip ve ihracat ağı güçlü. Yeni sitenin görevi bu verileri güven ve talebe dönüştürmek.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-kaf-orange uppercase">01 · Stratejik çerçeve</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Neyi değiştiriyoruz?</h2>
              <p className="mt-4 max-w-xl leading-7 text-kaf-muted">Amaç mevcut içeriği yalnızca daha şık göstermek değil; ziyaretçinin KAF Grup’u nasıl algıladığını ve nasıl aksiyon aldığını yeniden tasarlamak.</p>
            </div>
            <div className="grid gap-px bg-kaf-line sm:grid-cols-2">
              {objectives.map((item, index) => (
                <div key={item} className="bg-white p-6 sm:p-7">
                  <span className="text-xs font-semibold text-kaf-orange">0{index + 1}</span>
                  <p className="mt-8 text-lg leading-7 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="kapsam" className="border-y border-black/5 bg-[#11141d] text-white">
          <div className="mx-auto w-full max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#f0a02c] uppercase">02 · Proje kapsamı</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Sadece tasarım değil, sürdürülebilir bir dijital yapı.</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-white/60">Sunumdaki üç konsept, aynı kapsamın farklı görsel ve deneyim yönleridir. Seçilen yaklaşım canlı site mimarisine uygulanır.</p>
            </div>
            <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {scope.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-[#11141d] p-6 sm:p-7">
                    <Icon className="size-5 text-[#f0a02c]" aria-hidden />
                    <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="yaklasimlar" className="mx-auto w-full max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-kaf-orange uppercase">03 · Tasarım yönleri</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Üç farklı marka karakteri.</h2>
            <p className="mt-4 leading-7 text-kaf-muted">Buradaki seçim “hangi renk daha güzel?” sorusu değil. KAF Grup’un dijitalde hangi karakterle algılanacağına dair stratejik bir yön seçimidir.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {drafts.map((draft, index) => {
              const detail = approachDetails[index];
              return (
                <article key={draft.id} className="overflow-hidden border border-kaf-line bg-white">
                  <div className="relative aspect-[16/10] bg-[#e5e7ec]">
                    <Image src={draft.previewImage} alt={`${draft.title} ön izleme`} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover object-top" />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                      <span className="bg-white/95 px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase">{draft.label}</span>
                      {draft.recommended ? <span className="bg-kaf-orange px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">Önerimiz</span> : null}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold tracking-tight">{draft.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-kaf-muted">{draft.summary}</p>
                    <dl className="mt-6 space-y-4 border-t border-kaf-line pt-5 text-sm">
                      <div><dt className="text-xs font-semibold tracking-[0.1em] text-kaf-muted uppercase">Karakter</dt><dd className="mt-1 font-medium">{detail.tone}</dd></div>
                      <div><dt className="text-xs font-semibold tracking-[0.1em] text-kaf-muted uppercase">Ana odak</dt><dd className="mt-1 leading-6">{detail.focus}</dd></div>
                      <div><dt className="text-xs font-semibold tracking-[0.1em] text-kaf-muted uppercase">En uygun kullanım</dt><dd className="mt-1 leading-6">{detail.fit}</dd></div>
                    </dl>
                    <Link href={draft.href} className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-kaf-ink px-4 py-3.5 text-sm font-medium text-white transition hover:bg-kaf-orange">Canlı taslağı incele <ArrowUpRight className="size-4" /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="border-y border-black/5 bg-white">
          <div className="mx-auto grid w-full max-w-[1380px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-kaf-orange uppercase">04 · Önerilen yön</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Taslak 2 neden önde?</h2>
              <p className="mt-4 max-w-xl leading-7 text-kaf-muted">KAF Grup’un teknik güvenilirliğini kaybetmeden ürünleri ve markaları daha çağdaş, premium ve hatırlanabilir bir dijital deneyime dönüştürdüğü için.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Ürünleri yalnız listelemek yerine hikâyeleştiriyor", "Kurumsal rakiplerden görsel olarak daha fazla ayrışıyor", "Mobilde keşif ve içerik tüketimine uygun bir ritim kuruyor", "Canlı sitede kurumsal güven bloklarıyla kolayca dengelenebilir"].map((item) => (
                <div key={item} className="flex gap-3 border border-kaf-line bg-[#f8f8fa] p-5">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-kaf-orange text-white"><Check className="size-3.5" /></span>
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-kaf-orange uppercase">05 · Teknik kazanımlar</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Tasarımın arkasındaki sistem.</h2>
              <p className="mt-4 leading-7 text-kaf-muted">Sunum noindex kalır. Seçilen yön canlı siteye taşınırken performans, içerik modeli, SEO ve ölçüm altyapısıyla birlikte ele alınır.</p>
              <Link href="/teknik-yapi" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-kaf-orange">Teknik yapıyı incele <ArrowRight className="size-4" /></Link>
            </div>
            <div className="grid gap-px bg-kaf-line sm:grid-cols-2">
              {advantages.slice(0, 8).map((item) => (
                <div key={item.id} className="bg-white p-5 sm:p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-kaf-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-black/5 bg-[#eceff3]">
          <div className="mx-auto w-full max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-kaf-orange uppercase">06 · Sonraki adım</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Bir yön seçilir, sonra gerçek site derinleşir.</h2>
              <p className="mt-4 leading-7 text-kaf-muted">Bu sunum konsept seçimi içindir. Seçimden sonra sayfa mimarisi, ürün detayları, içerik, responsive davranışlar ve canlı yayın altyapısı tek yön üzerinde detaylandırılır.</p>
            </div>
            <ol className="mt-10 grid gap-px bg-[#cfd4dc] sm:grid-cols-2 lg:grid-cols-6">
              {process.map((item, index) => (
                <li key={item} className="bg-white p-5">
                  <span className="text-xs font-semibold text-kaf-orange">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-8 text-sm font-semibold">{item}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-col justify-between gap-6 border border-kaf-line bg-white p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-sm font-semibold">Karar noktası</p>
                <p className="mt-1 text-sm leading-6 text-kaf-muted">Taslakları inceleyin; seçilen yaklaşımı birlikte gerçek ürün ve kurumsal site mimarisine dönüştürelim.</p>
              </div>
              <a href="#yaklasimlar" className="inline-flex shrink-0 items-center justify-center gap-2 bg-kaf-orange px-5 py-3.5 text-sm font-semibold text-white">Tasarımlara dön <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#11141d] text-white">
        <div className="mx-auto flex w-full max-w-[1380px] flex-col justify-between gap-5 px-5 py-7 sm:flex-row sm:items-center sm:px-8 lg:px-10">
          <Image src={company.logoAlt} alt="KAF Grup" width={140} height={28} className="h-6 w-auto" unoptimized />
          <p className="text-xs leading-5 text-white/45">Dijital dönüşüm ve tasarım yönü sunumu · Arama motorlarına kapalı müşteri çalışma alanı</p>
        </div>
      </footer>
    </div>
  );
}
