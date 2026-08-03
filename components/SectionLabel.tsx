// Rótulo (eyebrow) que abre quase toda seção: Karla, caixa alta, tracking largo.
// Em fundo claro é barro; em fundo umbre é ocre.
type Props = {
  children: React.ReactNode;
  tone?: "barro" | "ocre";
  className?: string;
};

export default function SectionLabel({
  children,
  tone = "barro",
  className = "",
}: Props) {
  const cor = tone === "ocre" ? "text-ocre" : "text-barro";
  return (
    <p className={`font-ui text-[11px] uppercase tracking-[0.18em] ${cor} ${className}`}>
      {children}
    </p>
  );
}
