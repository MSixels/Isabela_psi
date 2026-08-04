"use client";

import { track } from "@vercel/analytics";

type Size = "sm" | "md" | "follow";
/** claro = botão sobre fundo claro (barro); escuro = sobre fundo umbre (invertido). */
type Tom = "claro" | "escuro";

type Props = {
  href: string;
  /** Nome do evento de analytics disparado no clique. */
  evento: string;
  /** Seção de origem — vira propriedade do evento. */
  secao: string;
  size?: Size;
  tom?: Tom;
  children: React.ReactNode;
  className?: string;
};

const BASE =
  "inline-block rounded-marca font-ui font-medium transition-colors";

const SIZES: Record<Size, string> = {
  sm: "px-5 py-[11px] text-[14px]",
  md: "px-8 py-[17px] text-[16px]",
  follow: "px-6 py-[14px] text-[15px]",
};

// Contraste medido: barro/umbre = 2,06:1 reprova a WCAG 1.4.11 (não-texto, 3:1).
// Por isso o botão inverte em fundo escuro: aveia/umbre = 10,96:1.
const TONS: Record<Tom, string> = {
  claro:
    "bg-barro text-aveia hover:bg-barro-hover focus-visible:[outline:2px_solid_var(--color-umbre)] focus-visible:[outline-offset:3px]",
  escuro:
    "bg-aveia text-umbre hover:bg-superficie focus-visible:[outline:2px_solid_var(--color-aveia)] focus-visible:[outline-offset:3px]",
};

// Link de ação rastreado. Base compartilhada por todo CTA da página (WhatsApp,
// seguir no Instagram): um clique = um evento, com a seção de origem.
export default function AcaoLink({
  href,
  evento,
  secao,
  size = "md",
  tom = "claro",
  children,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(evento, { secao })}
      className={`${BASE} ${SIZES[size]} ${TONS[tom]} ${className}`}
    >
      {children}
    </a>
  );
}
