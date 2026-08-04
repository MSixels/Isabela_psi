"use client";

import { track } from "@vercel/analytics";

type Size = "sm" | "md" | "follow";

type Props = {
  href: string;
  /** Nome do evento de analytics disparado no clique. */
  evento: string;
  /** Seção de origem — vira propriedade do evento. */
  secao: string;
  size?: Size;
  /** true em fundo umbre: ajusta hover e cor do anel de foco. */
  onDark?: boolean;
  children: React.ReactNode;
  className?: string;
};

const BASE =
  "inline-block rounded-marca bg-barro font-ui font-medium text-aveia transition-colors";

const SIZES: Record<Size, string> = {
  sm: "px-5 py-[11px] text-[14px]",
  md: "px-8 py-[17px] text-[16px]",
  follow: "px-6 py-[14px] text-[15px]",
};

// Link de ação em barro, rastreado. Base compartilhada por todo CTA da página
// (WhatsApp, seguir no Instagram): um clique = um evento, com a seção de origem.
export default function AcaoLink({
  href,
  evento,
  secao,
  size = "md",
  onDark = false,
  children,
  className = "",
}: Props) {
  const estados = onDark
    ? "hover:bg-barro-claro focus-visible:[outline:2px_solid_var(--color-aveia)] focus-visible:[outline-offset:3px]"
    : "hover:bg-barro-hover focus-visible:[outline:2px_solid_var(--color-umbre)] focus-visible:[outline-offset:3px]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(evento, { secao })}
      className={`${BASE} ${SIZES[size]} ${estados} ${className}`}
    >
      {children}
    </a>
  );
}
