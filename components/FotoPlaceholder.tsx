// Stand-in de foto: reproduz o retângulo listrado do design e reserva o espaço
// da foto final. Quem usa passa a proporção/altura por className, para que a
// troca por <Image fill className="object-cover"> não cause salto de layout.
type Props = {
  label: string;
  className?: string;
};

export default function FotoPlaceholder({ label, className = "" }: Props) {
  return (
    <div
      className={`relative flex items-end p-[22px] ${className}`}
      style={{
        background:
          "repeating-linear-gradient(45deg, var(--color-areia), var(--color-areia) 12px, var(--color-superficie) 12px, var(--color-superficie) 24px)",
      }}
    >
      <span className="bg-aveia px-[11px] py-2 font-ui text-[12px] tracking-[0.03em] text-texto-suave">
        {label}
      </span>
    </div>
  );
}
