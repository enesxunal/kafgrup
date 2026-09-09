import type { Metadata } from "next";
import { ConceptBar } from "@/components/shared/ConceptBar";
import { SiteHeader } from "@/components/taslak2/SiteHeader";
import { SiteFooter } from "@/components/taslak2/SiteFooter";
import { HomeSections } from "@/components/taslak2/HomeSections";

export const metadata: Metadata = {
  title: "Taslak 2 — Medikal Ürün Kataloğu",
  description:
    "KAF Grup medikal ürün kataloğu: ürün aileleri, seçili ürünler, OEM ve global görünürlük.",
  robots: { index: false, follow: false },
};

export default function Taslak2Page() {
  return (
    <>
      <ConceptBar />
      <SiteHeader />
      <main>
        <HomeSections />
      </main>
      <SiteFooter />
    </>
  );
}
