"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

const concepts = [
  { href: "/taslak-1", label: "01", title: "Global" },
  { href: "/taslak-2", label: "02", title: "Editorial" },
  { href: "/taslak-3", label: "03", title: "Industrial" },
] as const;

export function ConceptBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Tasarım konseptleri"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-black/10 bg-white/96 text-[#151515] shadow-[0_-8px_30px_rgba(0,0,0,.06)] backdrop-blur-md"
    >
      <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-between gap-3 px-3 sm:h-14 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-black/55 uppercase transition hover:text-black"
        >
          <ArrowLeft className="size-3.5" />
          <span className="hidden sm:inline">Sunuma dön</span>
          <span className="sm:hidden">Sunum</span>
        </Link>

        <div className="flex min-w-0 items-center divide-x divide-black/10 overflow-x-auto border-x border-black/10">
          {concepts.map((concept) => {
            const active = pathname === concept.href;
            return (
              <Link
                key={concept.href}
                href={concept.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-12 shrink-0 items-center gap-2 px-3 text-[11px] font-semibold tracking-[0.08em] uppercase transition sm:h-14 sm:px-5",
                  active
                    ? "bg-[#161616] text-white"
                    : "bg-white text-black/55 hover:bg-[#f3f1ed] hover:text-black",
                )}
              >
                <span className={active ? "text-[#f0a33e]" : "text-[#d97800]"}>{concept.label}</span>
                <span className="hidden md:inline">{concept.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
