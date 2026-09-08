import type { Metadata } from "next";
import { ConceptBar } from "@/components/shared/ConceptBar";
import { SiteHeader } from "@/components/taslak3/SiteHeader";
import { SiteFooter } from "@/components/taslak3/SiteFooter";
import { HomeSections } from "@/components/taslak3/HomeSections";

export const metadata: Metadata = {
  title: "Taslak 3 — Endüstriyel Kalite",
  description:
    "KAF Grup endüstriyel kalite taslağı: ürün yakın planları, GMP verileri ve üretim süreci.",
  robots: { index: false, follow: false },
};

export default function Taslak3Page() {
  return (
    <div className="pb-concept">
      <SiteHeader />
      <main>
        <HomeSections />
      </main>
      <SiteFooter />
      <ConceptBar />
    </div>
  );
}
