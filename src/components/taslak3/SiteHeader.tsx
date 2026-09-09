"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { company } from "@/data/company";

const nav = [
  { href: "#urunler", label: "Ürünler" },
  { href: "#uygulamalar", label: "Uygulamalar" },
  { href: "#uretim", label: "Üretim" },
  { href: "#oem", label: "OEM" },
  { href: "#kurumsal", label: "KAF Grup" },
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
    <header className="sticky top-0 z-50 border-b border-[#1b2430]/10 bg-white/95 text-[#172033] backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link href="/taslak-3" onClick={() => setOpen(false)} className="flex items-center gap-4">
          <Image src={company.logo} alt="KAF Grup" width={150} height={26} className="h-6 w-auto" priority unoptimized />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana navigasyon">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[#172033]/65 transition hover:text-[#d97800]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" className="hidden size-9 items-center justify-center text-[#172033]/55 sm:inline-flex" aria-label="Ara">
            <Search className="size-4" />
          </button>
          <a href={`mailto:${company.contact.email}`} className="hidden bg-[#172033] px-4 py-2.5 text-xs font-semibold text-white sm:inline-flex">İletişim</a>
          <button type="button" className="inline-flex size-10 items-center justify-center border border-[#172033]/15 lg:hidden" aria-expanded={open} aria-controls={menuId} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setOpen((value) => !value)}>
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="fixed inset-0 top-[4.5rem] z-40 bg-white px-5 py-8 sm:px-8 lg:hidden">
          <nav className="border-t border-[#172033]/10">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-[#172033]/10 py-5 text-xl font-medium text-[#172033]">{item.label}</a>
            ))}
          </nav>
          <a href={`mailto:${company.contact.email}`} className="mt-8 inline-flex bg-[#d97800] px-4 py-3 text-sm font-semibold text-white">{company.contact.email}</a>
        </div>
      ) : null}
    </header>
  );
}
