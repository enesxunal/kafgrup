"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

const concepts = [
  { href: "/taslak-1", no: "01", label: "Global Medical" },
  { href: "/taslak-2", no: "02", label: "Product Editorial" },
  { href: "/taslak-3", no: "03", label: "Industrial Systems" },
] as const;

export function ConceptBar() {
  const pathname = usePathname();
  return (
    <nav aria-label="Tasarım konseptleri" className="border-b border-black/10 bg-[#f2efe9] text-[#171717]">
      <div className="mx-auto flex min-h-10 max-w-[1440px] items-center gap-2 overflow-x-auto px-4 sm:px-8 lg:px-12">
        <Link href="/" className="mr-2 inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold tracking-[0.12em] text-black/50 uppercase hover:text-black">
          <ArrowLeft className="size-3" /> Sunum
        </Link>
        <span className="h-4 w-px shrink-0 bg-black/15" />
        {concepts.map((concept) => {
          const active = pathname === concept.href;
          return (
            <Link
              key={concept.href}
              href={concept.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex h-10 shrink-0 items-center gap-2 border-b-2 px-2 text-[10px] font-semibold tracking-[0.08em] uppercase",
                active ? "border-[#d97800] text-black" : "border-transparent text-black/45 hover:text-black",
              )}
            >
              <span className="text-[#d97800]">{concept.no}</span>
              <span>{concept.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
