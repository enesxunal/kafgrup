import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Taslak 3 — Endüstriyel Teknoloji",
  description:
    "KAF Grup endüstriyel teknoloji ana sayfa taslağı: üretim kapasitesi, sistemler, kalite ve global dağıtım ağı.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Taslak3Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-[#070B16] text-white antialiased"
      style={{ fontFamily: "var(--font-space)" }}
    >
      {children}
    </div>
  );
}
