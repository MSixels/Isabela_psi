import AcaoLink from "./AcaoLink";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = {
  /** Seção de origem do clique — vira propriedade do evento. */
  secao: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  onDark?: boolean;
  /** Mensagem pré-preenchida alternativa; por padrão usa a mensagem padrão. */
  mensagem?: string;
  className?: string;
};

// Atalho do AcaoLink para o WhatsApp: monta o wa.me e dispara "agendar".
export default function WhatsappButton({
  secao,
  children,
  size = "md",
  onDark = false,
  mensagem,
  className = "",
}: Props) {
  return (
    <AcaoLink
      href={whatsappUrl(mensagem)}
      evento="agendar"
      secao={secao}
      size={size}
      onDark={onDark}
      className={className}
    >
      {children}
    </AcaoLink>
  );
}
