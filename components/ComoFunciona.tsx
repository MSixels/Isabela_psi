import SectionLabel from "./SectionLabel";

const ITENS = [
  {
    titulo: "Online, por vídeo",
    desc: "Você atende de onde se sente segura. Sem deslocamento, no seu horário.",
  },
  {
    titulo: "Uma vez por semana",
    desc: "Encontros regulares, de cerca de 50 minutos cada.",
  },
  {
    titulo: "Sigilo absoluto",
    desc: "O que se fala na análise fica na análise. Sempre.",
  },
  {
    titulo: "Sem número mínimo",
    desc: "Você segue enquanto fizer sentido para você. Nada é imposto.",
  },
  {
    titulo: "A primeira conversa",
    desc: "Vinte minutos, gratuita, pelo WhatsApp. Para nos conhecermos, sem compromisso.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como" className="bg-umbre px-6 py-[clamp(64px,8vw,104px)] md:px-[60px]">
      <div className="revelar mb-12 max-w-[66ch]">
        <SectionLabel tone="ocre-escuro" className="mb-[22px]">
          Como funciona
        </SectionLabel>
        <h2 className="font-display text-h2 font-light text-aveia">
          Se você nunca fez análise, talvez não saiba o que esperar.
        </h2>
        <p className="mt-[14px] font-display text-corpo leading-[1.6] text-areia">
          Funciona assim, sem mistério:
        </p>
      </div>

      {/* Cinco itens = lista. O filete de topo é decorativo: barro nos quatro
          primeiros, ocre no quinto (destaca "A primeira conversa"). Sem link
          wa.me aqui — o CTA vive no Header, no Hero e no CTA final. */}
      <ul
        className="m-0 grid list-none gap-x-12 gap-y-10 p-0"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        }}
      >
        {ITENS.map((item, i) => (
          <li
            key={i}
            className={`revelar border-t pt-5 ${i === 4 ? "border-ocre" : "border-barro"}`}
          >
            <h3 className="font-display text-[22px] font-normal text-aveia">
              {item.titulo}
            </h3>
            <p className="mt-[10px] font-ui text-[15px] leading-[1.65] text-sobre-suave">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
