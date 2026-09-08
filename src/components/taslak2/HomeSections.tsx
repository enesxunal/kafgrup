import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { productSets } from "@/data/media";

const stories = [
  { no: "01", brand: "ONESEPT", title: "Enfeksiyon kontrolünde ürün ailesi mantığı", text: "Tıbbi cihaz, yüzey ve süreç dezenfeksiyonu için aynı üretim kültüründen çıkan farklı çözümler.", image: productSets.taslak2[0] },
  { no: "02", brand: "ONE GEL", title: "Tanı süreçlerinde görünmeyen yardımcı", text: "Ultrason, EKG ve girişimsel uygulamalar için geliştirilen medikal jel sistemleri.", image: productSets.taslak2[1] },
  { no: "03", brand: "WANCARE", title: "Hasta bakımını sadeleştiren ürünler", text: "Bariyer, hijyen ve antibakteriyel bakım odağında günlük kullanımı kolaylaştıran ürün ailesi.", image: productSets.taslak2[2] },
] as const;

export function HomeSections() {
  return (
    <>
      <section className="bg-[#f3efe8] text-[#171717]">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-16 lg:pt-14">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.24em] text-[#d97800] uppercase">KAF Product Journal · 01</p>
              <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-fraunces)] text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[4.7rem]">
                Ürünleri katalogdan çıkarıp hikâyeye dönüştürmek.
              </h1>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-sm leading-relaxed text-black/55">KAF Grup’un ürün ailelerini, kullanım bağlamlarını ve üretim kültürünü bir yayın ritmiyle anlatan editoryal yaklaşım.</p>
            </div>
          </div>

          <div className="mt-10 grid min-h-[540px] grid-cols-12 grid-rows-12 gap-3 sm:min-h-[620px] lg:mt-14 lg:min-h-[700px]">
            <div className="relative col-span-8 row-span-9 overflow-hidden bg-[#ded5c8] sm:col-span-7">
              <Image src={productSets.taslak2[0]} alt="ONESEPT ürün ailesi" fill priority sizes="(max-width:1024px) 70vw, 58vw" className="object-contain p-8 sm:p-12 lg:p-20" />
              <span className="absolute left-4 top-4 text-xs tracking-[0.2em] uppercase">Cover story / 01</span>
            </div>
            <div className="relative col-span-4 row-span-5 overflow-hidden bg-[#c8d7d3] sm:col-span-5">
              <Image src={productSets.taslak2[1]} alt="ONE GEL ürün ailesi" fill priority sizes="(max-width:1024px) 35vw, 40vw" className="object-contain p-5 sm:p-8 lg:p-12" />
            </div>
            <div className="col-span-4 row-span-4 flex items-end bg-[#171717] p-4 text-white sm:col-span-5 sm:p-6">
              <p className="font-[family-name:var(--font-fraunces)] text-2xl leading-tight sm:text-3xl">Three product stories.<br /><em className="font-normal text-white/45">One manufacturing culture.</em></p>
            </div>
            <div className="relative col-span-7 row-span-3 overflow-hidden bg-[#e6d3bc] sm:col-span-5">
              <Image src={productSets.taslak2[2]} alt="WANCARE bakım ürünü" fill sizes="(max-width:1024px) 58vw, 40vw" className="object-contain p-4 sm:p-7" />
            </div>
            <div className="col-span-5 row-span-3 border border-black/15 p-4 sm:col-span-7 sm:p-6">
              <p className="text-xs tracking-[0.18em] text-black/45 uppercase">Issue note</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed sm:text-base">Büyük hero fotoğrafı yerine ürün kadrajları, sayfa kenarları ve içerik blokları bir dergi kapağı gibi birlikte çalışır.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="giris" className="bg-white text-black">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <p className="text-xs tracking-[0.22em] text-[#d97800] uppercase lg:col-span-2">Editor’s note</p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-4xl leading-[1.06] sm:text-5xl lg:col-span-6">Kurumsal güven ile ürün merakı aynı sayfada kurulabilir.</h2>
          <p className="text-base leading-relaxed text-black/55 lg:col-span-4">Bu yön; ziyaretçiyi önce ürün dünyasına çeker, ardından kalite, üretim ve OEM yetkinliklerini hikâyenin doğal devamı olarak gösterir.</p>
        </div>
      </section>

      <section id="hikaye-1" className="bg-[#171717] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:pt-10">
              <p className="text-xs tracking-[0.2em] text-[#f1a140] uppercase">Product stories</p>
              <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">Üç ürün ailesi, üç farklı okuma biçimi.</h2>
            </div>
            <div className="space-y-16 lg:col-span-8">
              {stories.map((story, index) => (
                <article key={story.no} className={`grid gap-6 border-t border-white/15 pt-6 ${index === 1 ? "sm:grid-cols-[1fr_1.15fr]" : "sm:grid-cols-[1.15fr_1fr]"}`}>
                  <div className={index === 1 ? "sm:order-2" : ""}>
                    <p className="text-[11px] tracking-[0.2em] text-[#f1a140] uppercase">{story.no} · {story.brand}</p>
                    <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl leading-tight sm:text-4xl">{story.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">{story.text}</p>
                  </div>
                  <div className={`relative min-h-[300px] overflow-hidden ${index === 0 ? "bg-[#efe8de]" : index === 1 ? "bg-[#ccd9d5]" : "bg-[#ead9c4]"}`}>
                    <Image src={story.image} alt={story.title} fill sizes="(max-width:768px) 100vw, 40vw" className="object-contain p-8 sm:p-10" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="indeks" className="bg-[#f3efe8] text-black">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-5 border-b border-black/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs tracking-[0.2em] text-[#d97800] uppercase">Product index</p><h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl">Katalog, daha okunabilir bir indeks gibi.</h2></div>
            <p className="max-w-sm text-sm leading-relaxed text-black/50">Marka ve ürün gruplarına hızlı geçiş; gereksiz kart kalabalığı olmadan.</p>
          </div>
          <div className="grid border-b border-black/15 md:grid-cols-3">
            {[['A','Dezenfeksiyon','Yüzey · cihaz · el'],['B','Medikal jel','Ultrason · EKG · uygulama'],['C','Hasta bakım','Bariyer · hijyen · antibakteriyel']].map(([letter,title,desc]) => (
              <div key={letter} className="border-t border-black/15 py-8 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <p className="text-xs text-[#d97800]">{letter}</p><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm text-black/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fikirden" className="bg-[#d97800] text-[#171717]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
          <div className="lg:col-span-5"><p className="text-xs tracking-[0.2em] uppercase">OEM / Private Label</p><h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">Bir ürün fikrinin üretime dönüşen editoryal akışı.</h2></div>
          <ol className="lg:col-span-7">
            {[['01','Brief','Ürün ve pazar hedefi'],['02','Sample','Formülasyon ve numune'],['03','Approve','Ambalaj ve kalite onayı'],['04','Produce','Seri üretim ve teslimat']].map(([n,t,d]) => (
              <li key={n} className="grid grid-cols-[52px_1fr] gap-3 border-t border-black/25 py-4 sm:grid-cols-[52px_160px_1fr]"><span className="text-xs">{n}</span><strong>{t}</strong><span className="col-start-2 text-sm text-black/60 sm:col-start-auto">{d}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="tesis" className="bg-white text-black">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-5"><p className="text-xs tracking-[0.2em] text-[#d97800] uppercase">Factory note</p><h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl leading-tight">Üretim hikâyesi de ürün kadar görünür.</h2><p className="mt-5 text-sm leading-relaxed text-black/55">Van ve İstanbul’daki üretim organizasyonu, temiz oda standartları ve GMP altyapısı; ürün hikâyelerini destekleyen güven katmanı olarak anlatılır.</p></div>
          <div className="lg:col-span-7"><div className="relative aspect-[11/6] overflow-hidden bg-[#eee]"><Image src="/images/factory/van-fabrika.jpg" alt="KAF Grup Van üretim tesisi" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" /></div><p className="mt-3 text-xs tracking-[0.14em] text-black/40 uppercase">YYÜ Teknokent · Van</p></div>
        </div>
      </section>

      <section id="katalog" className="bg-[#171717] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div><p className="text-xs tracking-[0.2em] text-white/40 uppercase">Next issue</p><h2 className="mt-4 max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">Katalog, numune veya OEM görüşmesi için yeni bir başlangıç.</h2></div>
          <a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#f1a140]">{company.contact.email} <ArrowUpRight className="size-4" /></a>
        </div>
      </section>
    </>
  );
}
