import Image from "next/image";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { asset, site } from "@/lib/site";

// Experiência do morador no mercado autônomo: Entre → Escolha → Pague → Pronto.
export default function HowItWorks() {
  const { experience } = site;

  return (
    <section id="experiencia" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[40/26] overflow-hidden rounded-3xl bg-sage-light shadow-soft">
            <Image
              src={asset(experience.image)}
              alt={experience.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {["Totem dentro da loja", "Sem caixa convencional", "Aberto 24h"].map((tag) => (
              <li key={tag} className="rounded-full bg-ivory px-4 py-2 text-sm text-ink/80">
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-sm tracking-[0.18em] text-wood">EXPERIÊNCIA DO MORADOR</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl">{experience.title}</h2>
            <p className="mt-5 text-lg font-normal text-ink/80">{experience.text}</p>
          </Reveal>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {experience.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-ink/5 bg-ivory/60 p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-sage-dark ring-1 ring-sage/20">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                  </div>
                  <p className="mt-3 font-normal leading-relaxed text-ink/75">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
