import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sintomas from "@/components/Sintomas";

export default function Home() {
  return (
    <div className="px-4 py-6 md:px-12 md:py-14">
      {/* Moldura editorial: página centralizada em 1180px com fio areia ao redor. */}
      <div id="topo" className="mx-auto max-w-[1180px] border border-areia bg-aveia">
        <Header />
        <main>
          <Hero />
          <Sintomas />
          {/* TODO: Sobre · ComoFunciona · Formação · Conteúdo · FAQ · CtaFinal */}
        </main>
        {/* TODO: Footer */}
      </div>
    </div>
  );
}
