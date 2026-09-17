import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

// Como funciona para o condomínio: Condomínio → Village → Moradores.
export default function BusinessModel() {
  const { model } = site;

  return (
    <section id="modelo" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm tracking-[0.18em] text-wood">PARA O CONDOMÍNIO</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">{model.title}</h2>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-ink/80">{model.text}</p>
        </Reveal>

        <ol className="mt-16 grid gap-4 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr] lg:items-stretch">
          {model.parties.map((party, i) => {
            const highlight = i === 1;
            return (
              <Arrowed key={party.name} last={i === model.parties.length - 1}>
                <Reveal as="li" delay={i * 0.12} className="h-full">
                  <div
                    className={`flex h-full flex-col rounded-3xl p-8 ${
                      highlight
                        ? "bg-white shadow-lift ring-2 ring-sage/40"
                        : "border border-ink/5 bg-white/60"
                    }`}
                  >
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-2xl ${
                        highlight ? "bg-sage-dark text-white" : "bg-sage-light text-sage-dark"
                      }`}
                    >
                      <Icon name={party.icon} />
                    </span>
                    <h3 className="mt-6 text-sm tracking-[0.18em] text-wood">{party.name.toUpperCase()}</h3>
                    <p className={`mt-2 font-bold leading-snug text-ink ${highlight ? "text-2xl" : "text-xl"}`}>
                      {party.role}
                    </p>

                    {highlight && (
                      <ul className="mt-6 grid gap-2 border-t border-ink/5 pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {model.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm font-normal text-ink/80">
                            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              </Arrowed>
            );
          })}
        </ol>

        <p className="mt-8 text-sm font-normal text-ink/75">{model.note}</p>
      </div>
    </section>
  );
}

// Seta entre as colunas (horizontal no desktop, vertical no mobile).
function Arrowed({ children, last }: { children: React.ReactNode; last: boolean }) {
  return (
    <>
      {children}
      {!last && (
        <div className="grid place-items-center text-sage lg:px-1" aria-hidden>
          <Icon name="arrow" className="h-6 w-6 rotate-90 lg:rotate-0" />
        </div>
      )}
    </>
  );
}
