import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-5xl">Como funciona</h2>
          <p className="mt-5 text-lg font-normal text-ink/65">
            Do primeiro contato ao mercado aberto, cuidamos de tudo.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-7 top-7 bottom-7 w-px bg-sage/25 md:inset-x-[12.5%] md:bottom-auto md:h-px md:w-auto" aria-hidden />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {site.timeline.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.12} className="flex gap-6 md:flex-col md:items-center md:text-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-sage/30 bg-ivory text-sage ring-8 ring-white">
                  <Icon name={step.icon} />
                </span>
                <div>
                  <span className="text-sm tracking-[0.18em] text-wood">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 font-normal leading-relaxed text-ink/65">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
