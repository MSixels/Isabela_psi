"use client";

import { track } from "@vercel/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

type Size = "sm" | "md";

type Props = {
  /** Seção de origem do clique — vira propriedade do evento (hero, header, cta-final...). */
  secao: string;
  children: React.ReactNode;
  size?: Size;
  /** true em fundo umbre: ajusta hover e cor do anel de foco. */
  onDark?: boolean;
  /** Mensagem pré-preenchida alternativa; por padrão usa a mensagem padrão. */
  mensagem?: string;
  className?: string;
};

const BASE =
  "inline-block rounded-marca bg-barro font-ui font-medium text-aveia transition-colors";

const SIZES: Record<Size, string> = {
  sm: "px-5 py-[11px] text-[14px]",
  md: "px-8 py-[17px] text-[16px]",
};

export default function WhatsappButton({
  secao,
  children,
  size = "md",
  onDark = false,
  mensagem,
  className = "",
}: Props) {
  const estados = onDark
    ? "hover:bg-barro-claro focus-visible:[outline:2px_solid_var(--color-aveia)] focus-visible:[outline-offset:3px]"
    : "hover:bg-barro-hover focus-visible:[outline:2px_solid_var(--color-umbre)] focus-visible:[outline-offset:3px]";

  return (
    <a
      href={whatsappUrl(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("agendar", { secao })}
      className={`${BASE} ${SIZES[size]} ${estados} ${className}`}
    >
      {children}
    </a>
  );
}
