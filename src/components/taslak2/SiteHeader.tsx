"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { List, X } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

const contents = [
  { href: "#giris", label: "01 · Editörden" },
  { href: "#hikaye-1", label: "02 · Ürün hikâyeleri" },
  { href: "#indeks", label: "03 · Ürün indeksi" },
  { href: "#fikirden", label: "04 · Fikirden ürüne" },
  { href: "#tesis", label: "05 · Tesis notu" },
  { href: "#katalog", label: "06 · Katalog / teklif" },
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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5f1]/95 backdrop-blur-sm">
      <div className="mx-auto grid h-16 max-w-[1400px] grid-cols-3 items-center px-4 sm:h-[4.25rem] sm:px-8 lg:px-12">
        <Link
          href="/taslak-2"
          className="justify-self-start"
          onClick={() => setOpen(false)}
        >
          <Image
            src={company.logo}
            alt="KAF Grup"
            width={140}
            height={22}
            className="h-5 w-auto sm:h-6"
            priority
            unoptimized
          />
        </Link>

        <p className="justify-self-center text-center text-[11px] tracking-[0.22em] text-black/45 uppercase sm:text-xs">
          Sayı 01 · 2026
        </p>

        <div className="justify-self-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-black/15 bg-white px-3 py-2 text-xs font-semibold tracking-[0.12em] text-black uppercase transition hover:border-[#E08000] hover:text-[#E08000]"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-3.5" /> : <List className="size-3.5" />}
            İçindekiler
          </button>
        </div>
      </div>

      {/* Editorial contents panel */}
      <div
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full border-b border-black/10 bg-[#111111] text-white shadow-xl",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="İçindekiler"
          className="mx-auto grid max-w-[1400px] gap-1 px-4 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12"
        >
          {contents.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-3 text-base tracking-wide text-white/80 transition hover:text-[#E08000] sm:text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-[-1] cursor-default bg-black/20"
          aria-label="İçindekileri kapat"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
