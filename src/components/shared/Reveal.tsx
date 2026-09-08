"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility — unused (content must stay visible). */
  delay?: number;
  y?: number;
};

/**
 * Progressive enhancement stub:
 * Content is always visible (SSR, no-JS, reduced-motion, full-page screenshots).
 * Previous opacity:0 / whileInView pattern caused blank page captures — removed.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}

export function FadeIn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}
