import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — Minimercado 24h`,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
