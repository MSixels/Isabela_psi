import WhatsappButton from "./WhatsappButton";

export default function CtaFinal() {
  return (
    <section className="revelar bg-umbre px-6 py-[clamp(72px,9vw,120px)] text-center md:px-[60px]">
      <h2 className="mx-auto mb-6 max-w-[22ch] font-display text-[clamp(30px,4.5vw,46px)] font-light leading-[1.15] text-aveia">
        Você não precisa continuar segurando tudo sozinha.
      </h2>
      <p className="mx-auto mb-9 max-w-[44ch] font-display text-[18px] italic leading-[1.6] text-areia">
        A primeira conversa é só um começo. Gratuita, pelo WhatsApp.
      </p>
      <WhatsappButton secao="cta-final" tom="escuro">
        Agendar uma primeira conversa
      </WhatsappButton>
    </section>
  );
}
