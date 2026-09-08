"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

const nav = [
  { href: "#veri", label: "Veri" },
  { href: "#sistemler", label: "Sistemler" },
  { href: "#kalite", label: "Kalite" },
  { href: "#kapasite", label: "Kapasite" },
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B16]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="/taslak-3"
          className="relative z-[51] flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={company.logo}
            alt="KAF Grup"
            width={148}
            height={28}
            className="h-6 w-auto brightness-0 invert sm:h-7"
            priority
            unoptimized
          />
          <span className="hidden h-5 w-px bg-white/15 lg:block" aria-hidden />
          <span className="hidden text-[10px] tracking-[0.28em] text-white/45 uppercase lg:block">
            Industrial Systems
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Ana navigasyon"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2.5 py-2 text-[11px] font-medium tracking-[0.14em] text-white/65 uppercase transition hover:text-[#E08000]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#global"
            className="hidden border border-[#E08000] bg-[#E08000] px-3.5 py-2 text-[11px] font-semibold tracking-[0.16em] text-[#070B16] uppercase transition hover:bg-[#c66d00] hover:border-[#c66d00] sm:inline-flex"
          >
            Teklif al
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-white/15 text-white xl:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id={panelId}
        className={cn(
          "fixed inset-0 z-40 bg-[#070B16]/96 xl:hidden",
          open ? "block" : "hidden",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <nav className="flex flex-col gap-1" aria-label="Mobil navigasyon">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 text-sm font-medium tracking-[0.18em] text-white/85 uppercase transition hover:text-[#E08000]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#global"
            className="mt-8 inline-flex w-full items-center justify-center border border-[#E08000] bg-[#E08000] px-4 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#070B16] uppercase"
            onClick={() => setOpen(false)}
          >
            Teklif al
          </a>
          <p className="mt-auto text-xs tracking-wide text-white/40">
            {company.contact.phones[0]} · {company.hq}
          </p>
        </div>
      </div>
    </header>
  );
}
