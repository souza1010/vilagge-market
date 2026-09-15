import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vilagge Market | Mercado Inteligente para Condomínios",
  description:
    "Mercados autônomos em container, sala ou lavanderia para condomínios. Solução personalizada com pesquisa de consumo e operação 24 horas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans font-medium">{children}</body>
    </html>
  );
}
