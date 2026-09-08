"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Sunum", icon: true },
  { href: "/taslak-1", label: "T1" },
  { href: "/taslak-2", label: "T2" },
  { href: "/taslak-3", label: "T3" },
] as const;

const fullLabels = [
  { href: "/", label: "Sunuma dön", icon: true },
  { href: "/taslak-1", label: "Taslak 1" },
  { href: "/taslak-2", label: "Taslak 2" },
  { href: "/taslak-3", label: "Taslak 3" },
] as const;

function NavLinks({
  items,
  compact,
}: {
  items: typeof links | typeof fullLabels;
  compact?: boolean;
}) {
  const pathname = usePathname();

  return (
    <>
      {items.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "inline-flex shrink-0 items-center gap-1 rounded-md px-2.5 py-1.5 font-medium tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E08000]",
              compact ? "text-[11px]" : "text-xs",
              active
                ? "bg-[#E08000] text-white"
                : "text-white/75 hover:bg-white/10 hover:text-white",
            )}
          >
            {"icon" in link && link.icon ? (
              <ArrowLeft className="size-3" aria-hidden />
            ) : null}
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

/**
 * Concept switcher — visually separate from site nav.
 * Desktop: right edge rail (does not cover hero).
 * Mobile: compact bottom bar; pages must keep pb-safe spacing.
 */
export function ConceptBar() {
  return (
    <>
      {/* Desktop rail */}
      <div
        role="navigation"
        aria-label="Konsept seçici"
        className="pointer-events-none fixed top-1/2 right-3 z-[60] hidden -translate-y-1/2 lg:block xl:right-5"
      >
        <div className="pointer-events-auto flex flex-col gap-1 rounded-lg border border-white/15 bg-[#111827]/92 p-1.5 shadow-lg backdrop-blur-md">
          <p className="px-2 pt-1 pb-0.5 text-[9px] tracking-[0.16em] text-white/40 uppercase">
            Konsept
          </p>
          <NavLinks items={fullLabels} />
        </div>
      </div>

      {/* Mobile bar */}
      <div
        role="navigation"
        aria-label="Konsept seçici mobil"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden"
      >
        <div className="pointer-events-auto flex max-w-[100vw] items-center gap-0.5 overflow-x-auto rounded-lg border border-white/15 bg-[#111827]/94 px-1 py-1 text-white shadow-lg backdrop-blur-md">
          <NavLinks items={links} compact />
        </div>
      </div>
    </>
  );
}
