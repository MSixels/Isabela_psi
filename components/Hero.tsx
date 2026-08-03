import SectionLabel from "./SectionLabel";
import WhatsappButton from "./WhatsappButton";

export default function Hero() {
  return (
    <section className="grid border-b border-areia md:grid-cols-[1.1fr_0.9fr]">
      {/* Coluna de texto */}
      <div className="flex flex-col justify-center px-6 py-16 md:px-[60px] md:py-[88px]">
        <SectionLabel className="mb-[26px]">Psicanálise cristã online</SectionLabel>

        <h1 className="max-w-[15ch] font-display text-hero font-light leading-[1.1] text-umbre">
          Análise online para mulheres que carregam mais do que conseguem
          nomear.
        </h1>

        <p className="mt-[26px] max-w-[46ch] font-display text-[18px] leading-[1.65] text-texto-corpo">
          Psicanálise clínica com escuta cristã. Um espaço para entender o que
          se repete — sem julgamento, no seu tempo.
        </p>

        <WhatsappButton secao="hero" size="md" className="mt-9 self-start">
          Agendar uma primeira conversa
        </WhatsappButton>

        <p className="mt-4 font-ui text-[14px] text-texto-suave">
          Uma primeira conversa de 20 minutos, gratuita, pelo WhatsApp.
        </p>
      </div>

      {/* Coluna da foto — placeholder listrado com a proporção da foto final já
          reservada, para não haver salto de layout na troca.
          TODO: substituir por
            <Image src="/fotos/hero.jpg" alt="[descrever a foto]" fill
                   className="object-cover" sizes="(min-width:768px) 45vw, 100vw" />
          mantendo este container (retrato vertical) como o positioning parent. */}
      <div
        className="relative flex aspect-[3/4] items-end p-[22px] md:aspect-auto md:min-h-[480px]"
        style={{
          background:
            "repeating-linear-gradient(45deg, var(--color-areia), var(--color-areia) 12px, var(--color-superficie) 12px, var(--color-superficie) 24px)",
        }}
      >
        <span className="bg-aveia px-[11px] py-2 font-ui text-[12px] tracking-[0.03em] text-texto-suave">
          FOTO — rosto dela, olhando para a câmera · retrato vertical
        </span>
      </div>
    </section>
  );
}
