"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { company } from "@/data/company";

const nav = [
  { href: "#cozumler", label: "Ürünler & Çözümler" },
  { href: "#uretim", label: "Üretim" },
  { href: "#oem", label: "OEM" },
  { href: "#haberler", label: "Haberler & Etkinlikler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
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
    <header className="sticky top-0 z-50 bg-white text-[#18202b]">
      <div className="border-b border-black/8 bg-[#f6f6f4]">
        <div className="mx-auto flex h-8 max-w-[1440px] items-center justify-end gap-5 px-5 text-[10px] text-black/45 sm:px-8 lg:px-12">
          <span>Türkiye</span><span>Profesyonel kullanım</span><a href={`mailto:${company.contact.email}`} className="hover:text-black">İletişim</a>
        </div>
      </div>
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/taslak-2" onClick={() => setOpen(false)}>
          <Image src={company.logo} alt="KAF Grup" width={146} height={26} className="h-6 w-auto" priority unoptimized />
        </Link>
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Ana navigasyon">
          {nav.map((item) => <a key={item.href} href={item.href} className="text-[13px] font-medium text-[#46505f] transition hover:text-[#e28100]">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Ara" className="hidden size-9 items-center justify-center text-[#556070] sm:inline-flex"><Search className="size-4" /></button>
          <a href={`mailto:${company.contact.email}`} className="hidden bg-[#1b2940] px-4 py-2.5 text-xs font-semibold text-white sm:inline-flex">İletişim</a>
          <button type="button" className="inline-flex size-10 items-center justify-center border border-black/15 xl:hidden" aria-expanded={open} aria-controls={menuId} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setOpen((value) => !value)}>
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open ? (
        <div id={menuId} className="fixed inset-0 top-[6.5rem] z-40 bg-white px-5 py-7 sm:px-8 xl:hidden">
          <nav className="border-t border-black/10">
            {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-black/10 py-4 text-lg font-medium">{item.label}</a>)}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
