import type { Metadata } from "next";
import { Fraunces, Manrope, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KAF Grup Dijital Dönüşüm Projesi",
    template: "%s | KAF Grup",
  },
  description:
    "KAF Grup için hazırlanan dijital dönüşüm ve tasarım sunumu. Üç farklı ana sayfa taslağını inceleyin.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${sora.variable} ${manrope.variable} ${fraunces.variable} ${space.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
