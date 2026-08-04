import SectionLabel from "./SectionLabel";
import { FAQ, faqJsonLd } from "@/content/faq";

export default function Faq() {
  return (
    <section
      id="faq"
      className="revelar border-b border-areia px-6 py-[clamp(64px,8vw,104px)] md:px-[60px]"
    >
      {/* JSON-LD FAQPage, gerado do mesmo array das perguntas (texto idêntico
          ao visível). O rich result foi aposentado, mas o Google segue usando
          os dados estruturados para entender a página. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <SectionLabel className="mb-[18px]">Perguntas frequentes</SectionLabel>
      <h2 className="mb-11 font-display text-h2 font-light text-umbre">
        O que costumam me perguntar antes de começar
      </h2>

      <div className="max-w-[74ch]">
        {FAQ.map((qa, i) => (
          <details key={i} className="border-t border-areia py-6 last:border-b">
            <summary className="faq-summary flex items-center justify-between gap-5">
              <h3 className="font-display text-[22px] font-normal text-umbre">
                {qa.pergunta}
              </h3>
              <span
                aria-hidden="true"
                className="faq-mais font-ui text-2xl leading-none text-barro"
              >
                +
              </span>
            </summary>
            <div>
              <p className="mt-4 max-w-[66ch] font-display text-corpo leading-[1.7] text-texto-corpo">
                {qa.resposta}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
