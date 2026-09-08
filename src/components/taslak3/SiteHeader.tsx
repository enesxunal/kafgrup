"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

const nav = [
  { href: "#sistemler", label: "Üretim" },
  { href: "#kalite", label: "Kalite" },
  { href: "#kapasite", label: "Ürün sistemleri" },
  { href: "#oem", label: "OEM" },
  { href: "#global", label: "Global" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0b0c]/96 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:h-[4.5rem] lg:px-12">
        <Link href="/taslak-3" className="relative z-[51] flex items-center gap-4" onClick={() => setOpen(false)}>
          <Image src={company.logo} alt="KAF Grup" width={150} height={28} className="h-6 w-auto brightness-0 invert" priority unoptimized />
          <span className="hidden border-l border-white/15 pl-4 text-[9px] tracking-[0.24em] text-white/35 uppercase lg:block">Industrial Systems</span>
        </Link>

        <nav aria-label="Ana navigasyon" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[11px] font-medium tracking-[0.08em] text-white/55 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#global" className="hidden border-b border-[#e58a1b] pb-1 text-[11px] font-semibold tracking-[0.08em] text-[#e58a1b] sm:inline-flex">İş ortaklığı ↗</a>
          <button type="button" aria-expanded={open} aria-controls={panelId} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setOpen((v) => !v)} className="relative z-[51] inline-flex size-10 items-center justify-center border border-white/15 lg:hidden">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div id={panelId} className={cn("fixed inset-0 z-40 bg-[#0a0b0c] lg:hidden", open ? "block" : "hidden")} role="dialog" aria-modal="true" aria-label="Mobil menü">
        <div className="flex h-full flex-col px-5 pb-8 pt-24 sm:px-8">
          <p className="text-[10px] tracking-[0.2em] text-[#e58a1b] uppercase">Industrial navigation</p>
          <nav className="mt-6 border-t border-white/12" aria-label="Mobil navigasyon">
            {nav.map((item, index) => (
              <a key={item.href} href={item.href} className="flex items-center justify-between border-b border-white/12 py-5 text-lg font-medium text-white/85" onClick={() => setOpen(false)}>
                <span>{item.label}</span><span className="text-xs text-white/25">0{index + 1}</span>
              </a>
            ))}
          </nav>
          <a href={`mailto:${company.contact.email}`} className="mt-auto flex items-center justify-between border-t border-white/12 pt-5 text-sm text-[#e58a1b]" onClick={() => setOpen(false)}>
            <span>{company.contact.email}</span><span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
