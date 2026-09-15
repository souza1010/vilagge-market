import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { asset } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const title = "Vilagge Market | O mercado que conhece o seu condomínio";
const description =
  "Mercados autônomos personalizados para condomínios, em espaço existente ou container, com operação Vilagge e conveniência 24 horas para os moradores.";

export const metadata: Metadata = {
  // TODO: trocar pelo domínio oficial quando existir
  metadataBase: new URL("https://souza1010.github.io"),
  title,
  description,
  alternates: { canonical: asset("/") },
  icons: { icon: { url: asset("/favicon.svg"), type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Vilagge Market",
    title,
    description,
    url: asset("/"),
    images: [{ url: asset("/images/hero-container.webp"), width: 1600, height: 1300, alt: "Vilagge Market em container" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans font-medium">{children}</body>
    </html>
  );
}
