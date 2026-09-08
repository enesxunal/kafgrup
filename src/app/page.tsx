import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { company } from "@/data/company";
import { drafts } from "@/data/presentation";

const scope = [
  "Kurumsal web sitesi bilgi mimarisi ve kullanıcı akışı",
  "Ana sayfa ile ürün / kategori sayfalarının tasarım sistemi",
  "OEM / Private Label ve ihracat odaklı teklif toplama akışları",
  "Mobil, tablet ve masaüstü uyumlu arayüz",
  "Türkçe / İngilizce içerik yapısına uygun sayfa mimarisi",
  "Yayına hazır performans, erişilebilirlik ve temel SEO altyapısı",
];

const outcomes = [
  { n: "01", t: "Daha güçlü ilk izlenim", d: "KAF Grup’un üretim kapasitesi, ihracat gücü ve kalite standardı ilk ekranda anlaşılır." },
  { n: "02", t: "Daha kolay ürün keşfi", d: "Ziyaretçi ürünleri uzun listelerde kaybolmadan ihtiyacına göre keşfeder." },
  { n: "03", t: "Daha nitelikli talepler", d: "Distribütörlük, OEM ve kurumsal satın alma talepleri doğru sayfalardan yönlendirilir." },
];

const phases = [
  ["01", "Tasarım yönü seçimi", "Bu sunumdaki üç yaklaşımdan biri seçilir ve marka dili kesinleştirilir."],
  ["02", "Sayfa sistemi", "Seçilen yöne göre ana sayfa, ürün, kategori, kurumsal ve OEM sayfaları tasarlanır."],
  ["03", "İçerik ve geliştirme", "Gerçek ürün içerikleri, görseller ve iki dil yapısı uygulanır; mobil deneyim tamamlanır."],
  ["04", "Kontrol ve yayın", "Son kontroller, performans iyileştirmeleri ve yayın hazırlığı tamamlanır."],
];

export default function PresentationPage() {
  return (
    <main className="bg-[#f4f1eb] text-[#161616]">
      <section className="border-b border-black/15">
        <div className="mx-auto max-w-[1240px] px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-6">
            <Image src={company.logo} alt="KAF Grup" width={150} height={24} className="h-6 w-auto" priority unoptimized />
            <p className="text-xs tracking-[0.18em] text-black/45 uppercase">Web sitesi yenileme teklifi · 2026</p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15">
        <div className="mx-auto grid min-h-[74svh] max-w-[1240px] items-end gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#d97800] uppercase">KAF Grup dijital dönüşüm</p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[0.96] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[5.2rem]">
              Güçlü bir üretici için,<br />daha güçlü bir dijital vitrin.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/60 sm:text-xl">
              Bu çalışma yalnızca ana sayfanın görünümünü yenilemeyi değil; KAF Grup’un ürünlerini, üretim gücünü ve global iş ortaklığı fırsatlarını daha anlaşılır ve daha güven veren bir web deneyimine dönüştürmeyi amaçlıyor.
            </p>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-sm leading-relaxed text-black/50">Sunum kapsamında üç farklı tasarım yönü hazırlanmıştır. Amaç “hangisi daha güzel?” sorusundan çok, KAF Grup’un dijitalde nasıl konumlanması gerektiğine birlikte karar vermektir.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-sm font-semibold tracking-[0.16em] text-[#d97800] uppercase">Projenin amacı</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Web sitesi yalnızca güzel görünmemeli; iş geliştirmeye hizmet etmeli.</h2></div>
            <div className="lg:col-span-8"><div className="divide-y divide-black/12 border-y border-black/12">{outcomes.map((item)=><article key={item.n} className="grid gap-3 py-7 sm:grid-cols-[72px_1fr] sm:gap-5"><span className="text-sm font-semibold text-[#d97800]">{item.n}</span><div><h3 className="text-xl font-semibold">{item.t}</h3><p className="mt-2 max-w-2xl text-base leading-relaxed text-black/55">{item.d}</p></div></article>)}</div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#ebe6dd]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="text-sm font-semibold tracking-[0.16em] text-[#d97800] uppercase">Kapsam</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Teslim edilecek yapı</h2><p className="mt-4 text-black/55">Seçilen tasarım yönü, tek bir ana sayfa olarak bırakılmayacak; gerçek kurumsal site sistemine dönüştürülecek.</p></div>
            <ul className="grid gap-px bg-black/15 sm:grid-cols-2 lg:col-span-8">{scope.map((item)=><li key={item} className="flex gap-3 bg-[#f4f1eb] p-5"><Check className="mt-0.5 size-4 shrink-0 text-[#d97800]"/><span className="text-sm leading-relaxed">{item}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <section id="tasarimlar" className="border-b border-black/15 bg-[#111] text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#e58a1b] uppercase">Üç farklı tasarım yönü</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Aynı sitenin üç rengi değil; üç farklı marka yaklaşımı.</h2><p className="max-w-sm text-sm leading-relaxed text-white/50">Her taslak farklı bir hedef kitle, içerik sıralaması ve görsel karakter üzerinden tasarlandı.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">{drafts.map((draft,i)=><article key={draft.id} className="group border border-white/15 bg-[#181818]"><div className="relative aspect-[4/3] overflow-hidden bg-[#222]"><Image src={draft.previewImage} alt={draft.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"/><span className="absolute top-4 left-4 bg-black/75 px-3 py-1.5 text-xs tracking-[0.14em] uppercase">0{i+1}</span></div><div className="p-6"><p className="text-xs tracking-[0.15em] text-[#e58a1b] uppercase">{draft.label}</p><h3 className="mt-2 text-2xl font-semibold">{draft.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/55">{draft.summary}</p><Link href={draft.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">Taslağı incele <ArrowRight className="size-4"/></Link></div></article>)}</div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-sm font-semibold tracking-[0.16em] text-[#d97800] uppercase">Önerimiz</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Taslak 2:<br/>Editoryal Ürün Dünyası</h2></div><div className="lg:col-span-8"><p className="max-w-2xl text-xl leading-relaxed text-black/70">KAF Grup’un geniş ürün gamını, üretim gücünü ve ihracat hikâyesini aynı sayfada boğmadan anlatabildiği için en dengeli yaklaşım olarak görüyoruz.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{["Ürünü merkeze alır","Kurumsal güveni korur","Rakiplerden daha kolay ayrışır"].map(x=><div key={x} className="border-t-2 border-[#d97800] pt-4 text-sm font-medium">{x}</div>)}</div></div></div>
        </div>
      </section>

      <section className="bg-[#f4f1eb]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#d97800] uppercase">Sonraki adımlar</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Seçimden yayına kadar</h2>
          <div className="mt-10 grid gap-px bg-black/15 lg:grid-cols-4">{phases.map(([n,t,d])=><article key={n} className="bg-[#f4f1eb] p-6"><p className="text-sm font-semibold text-[#d97800]">{n}</p><h3 className="mt-5 text-lg font-semibold">{t}</h3><p className="mt-3 text-sm leading-relaxed text-black/55">{d}</p></article>)}</div>
          <div className="mt-12 flex flex-col gap-5 border-t border-black/15 pt-8 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm text-black/45">Karar noktası</p><p className="mt-1 text-xl font-semibold">Önce tasarım yönünü birlikte seçelim.</p></div><a href="#tasarimlar" className="inline-flex items-center gap-2 bg-[#161616] px-5 py-3.5 text-sm font-semibold text-white">3 tasarımı karşılaştır <ArrowRight className="size-4"/></a></div>
        </div>
      </section>
    </main>
  );
}
