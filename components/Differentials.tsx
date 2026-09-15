import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Differentials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Mais do que um mercado. Uma experiência para o condomínio.
          </h2>
          <p className="mt-5 text-lg font-normal text-ink/65">
            Cada unidade é projetada conforme o perfil dos moradores.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.differentials.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-ink/5 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sage-light text-sage transition group-hover:bg-sage group-hover:text-white">
                  <Icon name={d.icon} />
                </span>
                <h3 className="mt-8 text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-2 font-normal leading-relaxed text-ink/65">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
