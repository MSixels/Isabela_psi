// Página TEMPORÁRIA de scaffold. Existe só para provar que Petrona, Karla e os
// tokens de cor estão resolvendo. Será substituída pelas 8 seções.
const CORES: { nome: string; classe: string }[] = [
  { nome: "aveia", classe: "bg-aveia" },
  { nome: "umbre", classe: "bg-umbre" },
  { nome: "barro", classe: "bg-barro" },
  { nome: "areia", classe: "bg-areia" },
  { nome: "ocre", classe: "bg-ocre" },
  { nome: "texto-corpo", classe: "bg-texto-corpo" },
  { nome: "texto-suave", classe: "bg-texto-suave" },
  { nome: "texto-nota", classe: "bg-texto-nota" },
  { nome: "sobre-suave", classe: "bg-sobre-suave" },
  { nome: "superficie", classe: "bg-superficie" },
  { nome: "barro-hover", classe: "bg-barro-hover" },
  { nome: "barro-claro", classe: "bg-barro-claro" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-barro">
        Scaffold · prova de tema
      </p>

      <h1 className="mt-4 font-display text-hero font-light leading-[1.1] text-umbre">
        Petrona resolvendo em display.
      </h1>

      <p className="mt-6 font-display text-corpo leading-[1.7] text-texto-corpo">
        Corpo em Petrona 400. <em className="italic">Este trecho em itálico</em>{" "}
        prova a variante itálica carregada por next/font.
      </p>

      <p className="mt-4 font-ui text-corpo text-texto-suave">
        Karla resolvendo na UI — este parágrafo usa a fonte de interface.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-h2 font-light text-umbre">
          Cores da marca e papéis derivados
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CORES.map((c) => (
            <li
              key={c.nome}
              className="overflow-hidden rounded-marca border border-linha"
            >
              <div className={`${c.classe} h-16`} />
              <div className="bg-aveia px-3 py-2 font-ui text-[13px] text-texto-corpo">
                {c.nome}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 font-ui text-[13px] text-texto-nota">
        Página temporária de scaffold. Nenhuma das 8 seções foi criada ainda.
      </p>
    </main>
  );
}
