import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/active-site";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Newsreader({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteData.seo.url),
  title: siteData.seo.title,
  description: siteData.seo.description,
  openGraph: { title: siteData.seo.title, description: siteData.seo.description, type: "website", locale: "da_DK" },
  twitter: { card: "summary", title: siteData.seo.title, description: siteData.seo.description },
  robots: siteData.demo ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const brandStyles = {
    "--ink": siteData.brand.colors.ink,
    "--pine": siteData.brand.colors.primary,
    "--pine-dark": siteData.brand.colors.primaryDark,
    "--cream": siteData.brand.colors.background,
    "--oat": siteData.brand.colors.surface,
    "--sun": siteData.brand.colors.accent,
    "--moss": siteData.brand.colors.mutedAccent,
  } as CSSProperties;

  return (
    <html lang="da" className={`${sans.variable} ${display.variable}`}>
      <body className="antialiased" style={brandStyles}>{children}</body>
    </html>
  );
}
