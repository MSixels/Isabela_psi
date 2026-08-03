import type { Metadata } from "next";
import { Petrona, Karla } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// Petrona para leitura (display + corpo), com itálico. Karla para UI.
const petrona = Petrona({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-petrona",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-karla",
  display: "swap",
});

const titulo = "Isabela Sixel · Psicanálise cristã online";
const descricao =
  "Análise online para mulheres. Psicanálise clínica com escuta cristã — um espaço para entender o que se repete, no seu tempo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titulo,
    template: "%s · Isabela Sixel",
  },
  description: descricao,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Isabela Sixel",
    title: titulo,
    description: descricao,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Isabela Sixel — psicanálise cristã online",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${petrona.variable} ${karla.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
