"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";

const nav = [
  { href: "#koleksiyonlar", label: "Koleksiyonlar" },
  { href: "#urunler", label: "Ürünler" },
  { href: "#oem", label: "OEM" },
  { href: "#global", label: "Global" },
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
    <header className="sticky top-0 z-50 bg-[#f4f0e8] text-[#171717]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between border-b border-black/15 px-5 sm:px-8 lg:px-12">
        <Link href="/taslak-2" onClick={() => setOpen(false)}>
          <Image src={company.logo} alt="KAF Grup" width={138} height={24} className="h-5 w-auto" priority unoptimized />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ürün navigasyonu">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-medium text-black/55 transition hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={`mailto:${company.contact.email}`} className="hidden text-xs font-semibold text-[#b96100] sm:block">Ürün talebi ↗</a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center border border-black/20 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="fixed inset-0 top-16 z-40 bg-[#f4f0e8] px-5 py-8 sm:px-8 lg:hidden">
          <p className="text-[10px] tracking-[0.18em] text-black/35 uppercase">KAF Medical Portfolio</p>
          <nav className="mt-6 border-t border-black/15">
            {nav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-black/15 py-5 text-xl">
                <span>{item.label}</span><span className="text-xs text-[#b96100]">0{index + 1}</span>
              </a>
            ))}
          </nav>
          <a href={`mailto:${company.contact.email}`} className="mt-8 inline-block text-sm font-semibold text-[#b96100]">{company.contact.email} ↗</a>
        </div>
      ) : null}
    </header>
  );
}
