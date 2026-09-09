import type { Metadata } from "next";
import { ConceptBar } from "@/components/shared/ConceptBar";
import { SiteHeader } from "@/components/taslak3/SiteHeader";
import { SiteFooter } from "@/components/taslak3/SiteFooter";
import { HomeSections } from "@/components/taslak3/HomeSections";

export const metadata: Metadata = {
  title: "Taslak 3 — Global Üretim ve Çözümler",
  description:
    "KAF Grup global üretim ve çözümler taslağı: ürün aileleri, üretim kapasitesi, OEM ve uluslararası sektör deneyimi.",
  robots: { index: false, follow: false },
};

export default function Taslak3Page() {
  return (
    <div className="pb-concept">
      <ConceptBar />
      <SiteHeader />
      <main>
        <HomeSections />
      </main>
      <SiteFooter />
    </div>
  );
}
