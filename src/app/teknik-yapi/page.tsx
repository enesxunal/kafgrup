import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { advantages } from "@/data/presentation-advantages";
import { productionRoutePlan, companyFaqs } from "@/data/seo-architecture";
import { PresentationSchema } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Teknik Yapı",
  description:
    "KAF Grup dijital dönüşüm projesi için SEO, schema ve rota mimarisi.",
  robots: { index: false, follow: false },
};

export default function TeknikYapiPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f7] text-kaf-ink">
      <PresentationSchema />
      <header className="border-b border-kaf-line bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-kaf-muted transition hover:text-kaf-orange"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Sunuma dön
          </Link>
          <p className="text-sm text-kaf-muted">Geliştirici / teknik notlar</p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Teknik yapı
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-kaf-muted">
          Bu sayfa müşteri karar ekranından ayrılmıştır. Sunum projesi noindex
          kalır; aşağıdaki mimari canlı siteye geçiş için hazırdır.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Sistem avantajları</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <li
                key={item.id}
                className="border border-kaf-line bg-white p-4"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kaf-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold">Üretim rota planı (TR / EN)</h2>
          <div className="mt-6 overflow-x-auto border border-kaf-line bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-kaf-line bg-kaf-paper text-xs tracking-[0.12em] text-kaf-muted uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium">Amaç</th>
                  <th className="px-4 py-3 font-medium">TR</th>
                  <th className="px-4 py-3 font-medium">EN</th>
                </tr>
              </thead>
              <tbody>
                {productionRoutePlan.map((row) => (
                  <tr
                    key={row.intent}
                    className="border-b border-kaf-line last:border-0"
                  >
                    <td className="px-4 py-3">{row.intent}</td>
                    <td className="px-4 py-3 font-mono text-xs text-kaf-muted">
                      {row.tr}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-kaf-muted">
                      {row.en}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold">FAQ (schema hazır içerik)</h2>
          <dl className="mt-6 space-y-5">
            {companyFaqs.map((faq) => (
              <div key={faq.question} className="border-t border-kaf-line pt-4">
                <dt className="font-semibold">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-kaf-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </div>
  );
}
