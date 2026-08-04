import SectionLabel from "./SectionLabel";

const ITENS = [
  {
    titulo: "Instituto Fazendo a Diferença",
    desc: "Formação em psicanálise clínica.",
  },
  {
    titulo: "Formação continuada",
    // TODO: trocar "[temas — a preencher]" pelos temas reais quando chegarem.
    desc: "Cursos e estudos em [temas — a preencher].",
  },
  {
    titulo: "Observatórios clínicos semanais",
    desc: "Participação semanal em espaços de estudo e supervisão entre analistas.",
  },
  {
    titulo: "Prática clínica",
    // TODO: trocar "[X] anos" pelo número real de anos de prática.
    desc: "[X] anos de atendimento — a preencher.",
  },
];

export default function Formacao() {
  return (
    <section
      id="formacao"
      className="revelar border-b border-areia px-6 py-[clamp(64px,8vw,104px)] md:px-[60px]"
    >
      <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <SectionLabel className="mb-[18px]">Formação</SectionLabel>
          <h2 className="font-display text-h2 font-light leading-[1.15] text-umbre">
            Onde me formo e sigo estudando.
          </h2>
        </div>

        <ul className="m-0 list-none p-0">
          {ITENS.map((item, i) => (
            <li
              key={i}
              data-n={String(i + 1).padStart(2, "0")}
              className={`formacao-item flex gap-5 border-t border-areia py-[22px] ${
                i === ITENS.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <h3 className="mb-[6px] font-display text-[20px] font-normal text-umbre">
                  {item.titulo}
                </h3>
                <p className="font-ui text-[15px] leading-[1.6] text-texto-corpo">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
