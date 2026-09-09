"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { company } from "@/data/company";

const nav = [
  { href: "#urunler", label: "Ürünler" },
  { href: "#uygulamalar", label: "Uygulamalar" },
  { href: "#kapasite", label: "Üretim Kapasitesi" },
  { href: "#oem", label: "OEM" },
  { href: "#bilgi", label: "Bilgi Merkezi" },
  { href: "#sirket", label: "Şirket" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white text-[#171717] shadow-[0_1px_0_rgba(0,0,0,.08)]">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/taslak-3" onClick={() => setOpen(false)}><Image src={company.logo} alt="KAF Grup" width={148} height={26} className="h-6 w-auto" priority unoptimized /></Link>
        <nav aria-label="Ana navigasyon" className="hidden items-center gap-6 xl:flex">{nav.map((item)=><a key={item.href} href={item.href} className="text-[13px] font-medium text-black/60 transition hover:text-[#e28100]">{item.label}</a>)}</nav>
        <div className="flex items-center gap-2"><button type="button" className="hidden size-9 items-center justify-center sm:inline-flex" aria-label="Ara"><Search className="size-4" /></button><a href={`mailto:${company.contact.email}`} className="hidden bg-[#ef8a00] px-4 py-2.5 text-xs font-semibold text-white sm:inline-flex">Bize ulaşın</a><button type="button" className="inline-flex size-10 items-center justify-center border border-black/15 xl:hidden" aria-expanded={open} aria-controls={menuId} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} onClick={()=>setOpen(v=>!v)}>{open ? <X className="size-4"/>:<Menu className="size-4"/>}</button></div>
      </div>
      {open ? <div id={menuId} className="fixed inset-0 top-[4.5rem] z-40 bg-white px-5 py-6 sm:px-8 xl:hidden"><nav className="border-t border-black/10">{nav.map((item)=><a key={item.href} href={item.href} onClick={()=>setOpen(false)} className="block border-b border-black/10 py-4 text-lg font-medium">{item.label}</a>)}</nav></div>:null}
    </header>
  );
}
