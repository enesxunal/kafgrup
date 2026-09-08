import type { Metadata } from "next";
import { ConceptBar } from "@/components/shared/ConceptBar";
import { SiteHeader } from "@/components/taslak1/SiteHeader";
import { SiteFooter } from "@/components/taslak1/SiteFooter";
import { HomeSections } from "@/components/taslak1/HomeSections";

export const metadata: Metadata = {
  title: "Taslak 1 — Kurumsal Güven",
  description:
    "KAF Grup kurumsal güven tasarım taslağı: ürün ailesi, GMP üretim ve B2B tedarik.",
  robots: { index: false, follow: false },
};

export default function Taslak1Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-concept">
        <HomeSections />
      </main>
      <SiteFooter />
      <ConceptBar />
    </>
  );
}
