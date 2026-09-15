import Icon, { type IconName } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const stepIcons: IconName[] = ["search", "spark", "grid", "refresh"];

// Método V.360™ — seção principal, com identidade própria (fundo escuro + anel 360).
export default function Method() {
  return (
    <section id="metodo" className="scroll-mt-20 px-3 sm:px-5">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-ink px-5 py-24 text-ivory sm:px-12 sm:py-32">
        {/* anel 360 decorativo */}
        <svg
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] opacity-[0.08]"
          aria-hidden
        >
          <circle cx="200" cy="200" r="180" fill="none" stroke="#F7F5EF" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="#F7F5EF" strokeWidth="1.5" strokeDasharray="4 10" />
          {[0, 90, 180, 270].map((a) => (
            <circle
              key={a}
              cx={200 + 180 * Math.cos((a * Math.PI) / 180)}
              cy={200 + 180 * Math.sin((a * Math.PI) / 180)}
              r="8"
              fill="#F2A23A"
            />
          ))}
        </svg>

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-4 py-2 text-xs tracking-[0.18em] text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              NOSSA METODOLOGIA
            </span>
            <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
              Método V.360<span className="align-super text-2xl text-amber sm:text-3xl">™</span>
            </h2>
            <p className="mt-5 text-lg font-normal text-ivory/70 sm:text-xl">
              Conhecemos o condomínio antes de montar o mercado.
            </p>
          </Reveal>

          <div className="relative mt-20">
            {/* linha do fluxo */}
            <div className="absolute left-7 top-7 bottom-7 w-px bg-ivory/15 md:inset-x-7 md:bottom-auto md:h-px md:w-auto" aria-hidden />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {site.method.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.15} className="relative flex gap-6 md:block">
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sage text-white ring-8 ring-ink">
                  <Icon name={stepIcons[i]} />
                </span>
                <div className="md:mt-8">
                  <span className="text-sm tracking-[0.18em] text-amber">ETAPA {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 font-normal leading-relaxed text-ivory/65">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
