"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/data/company";

const navItems = [
  { href: "#kanit", label: "Üretim gücü" },
  { href: "#urunler", label: "Ürün aileleri" },
  { href: "#kalite", label: "Kalite" },
  { href: "#oem", label: "OEM" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

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
    <header className="sticky top-0 z-50 border-b border-[#d8dce6] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-6 px-5 lg:h-[4.5rem] lg:px-10">
        <Link href="/taslak-1" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={company.logo}
            alt="KAF Grup"
            width={148}
            height={24}
            className="h-6 w-auto"
            priority
            unoptimized
          />
        </Link>

        <nav
          aria-label="Kurumsal menü"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-[0.04em] text-[#1a1f4d]/75 transition hover:text-[#E08000]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#iletisim"
            className="hidden border border-[#1a1f4d] bg-[#1a1f4d] px-4 py-2.5 text-[12px] font-semibold tracking-[0.08em] text-white uppercase transition hover:border-[#E08000] hover:bg-[#E08000] sm:inline-flex"
          >
            İş ortaklığı
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-[#d8dce6] text-[#1a1f4d] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[#d8dce6] bg-white px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobil menü">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[#eceef3] py-3 text-base font-medium text-[#1a1f4d]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="mt-3 bg-[#1a1f4d] px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              İş ortaklığı
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
