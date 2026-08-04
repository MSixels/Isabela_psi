// Rótulo (eyebrow) que abre quase toda seção: Karla, caixa alta, tracking largo.
// Em fundo claro é barro; sobre umbre é ocre-escuro (ocre puro reprova contraste).
type Props = {
  children: React.ReactNode;
  tone?: "barro" | "ocre" | "ocre-escuro";
  className?: string;
};

const TONS: Record<NonNullable<Props["tone"]>, string> = {
  barro: "text-barro",
  ocre: "text-ocre",
  "ocre-escuro": "text-ocre-escuro",
};

export default function SectionLabel({
  children,
  tone = "barro",
  className = "",
}: Props) {
  const cor = TONS[tone];
  return (
    <p className={`font-ui text-[11px] uppercase tracking-[0.18em] ${cor} ${className}`}>
      {children}
    </p>
  );
}
