import type { ReactNode } from "react";

export default function Taslak1Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-white text-kaf-navy antialiased"
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      {children}
    </div>
  );
}
