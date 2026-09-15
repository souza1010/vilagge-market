import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Differentials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm tracking-[0.18em] text-wood">DIFERENCIAIS</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Mais do que um mercado. Uma experiência para o condomínio.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.differentials.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 0.06}>
              <div className="group flex h-full gap-5 rounded-3xl border border-ink/5 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage-light text-sage-dark transition group-hover:bg-sage-dark group-hover:text-white">
                  <Icon name={d.icon} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                  <p className="mt-1 font-normal leading-relaxed text-ink/75">{d.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
