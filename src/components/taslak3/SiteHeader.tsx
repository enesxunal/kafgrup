"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";

const nav = [
  { href: "#kanit", label: "Üretim" },
  { href: "#urunler", label: "Ürünler" },
  { href: "#kalite", label: "Kalite" },
  { href: "#oem", label: "OEM" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0b] text-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between border-b border-white/10 px-5 sm:px-8 lg:px-12">
        <Link href="/taslak-3" onClick={() => setOpen(false)} className="flex items-center gap-4">
          <Image src={company.logo} alt="KAF Grup" width={145} height={24} className="h-5 w-auto brightness-0 invert" priority unoptimized />
          <span className="hidden text-[9px] tracking-[0.18em] text-white/30 uppercase sm:block">Manufacturing / Türkiye</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana navigasyon">
          {nav.map((item) => <a key={item.href} href={item.href} className="text-xs text-white/50 transition hover:text-white">{item.label}</a>)}
        </nav>

        <div className="flex items-center gap-4">
          <a href={`mailto:${company.contact.email}`} className="hidden text-xs font-semibold text-[#e58a1b] sm:block">İletişim ↗</a>
          <button type="button" className="inline-flex size-9 items-center justify-center border border-white/15 lg:hidden" aria-expanded={open} aria-controls={menuId} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setOpen((value) => !value)}>
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="fixed inset-0 top-16 z-40 bg-[#0b0b0b] px-5 py-8 sm:px-8 lg:hidden">
          <p className="text-[10px] tracking-[0.18em] text-[#e58a1b] uppercase">KAF Grup / Manufacturing</p>
          <nav className="mt-6 border-t border-white/12">
            {nav.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/12 py-5 text-xl text-white/90"><span>{item.label}</span><span className="text-xs text-white/25">0{index + 1}</span></a>)}
          </nav>
          <a href={`mailto:${company.contact.email}`} className="mt-8 inline-block text-sm font-semibold text-[#e58a1b]">{company.contact.email} ↗</a>
        </div>
      ) : null}
    </header>
  );
}
