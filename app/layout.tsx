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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Isabela Sixel",
    title: titulo,
    description: descricao,
    images: [
      {
        url: "/og-marca.jpg",
        width: 1200,
        height: 630,
        alt: "Isabela Sixel — psicanálise clínica. Um espaço para entender o que se repete.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
    images: [
      {
        url: "/og-marca.jpg",
        alt: "Isabela Sixel — psicanálise clínica. Um espaço para entender o que se repete.",
      },
    ],
  },
};

// Identidade em dados estruturados. Person — NUNCA um tipo médico/de saúde
// (Physician, Psychologist, MedicalBusiness…): declarar isso afirmaria por
// máquina uma qualificação que ela não tem. Psicanálise não é regulamentada e
// ela não é psicóloga (ver resposta 2 da FAQ).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isabela Sixel",
  jobTitle: "Psicanalista clínica",
  url: siteUrl,
  image: `${siteUrl}/hero-isabela.jpg`,
  sameAs: ["https://instagram.com/isabelasixelpsi"],
  // Sem areaServed: a análise é online e ela já atende pacientes fora do Brasil.
  description:
    "Psicanálise clínica com escuta cristã. Análise online, atendimento no Brasil e no exterior.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${petrona.variable} ${karla.variable}`}>
      <body>
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
