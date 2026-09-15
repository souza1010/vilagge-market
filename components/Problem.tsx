import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Problem() {
  const { problem } = site;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-sm tracking-[0.18em] text-wood">O PROBLEMA</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {problem.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg font-normal leading-relaxed text-ink/80">{problem.text}</p>

          <figure className="mt-12 border-l-2 border-amber pl-6">
            <p className="text-2xl font-bold tracking-tight text-sage-dark">{problem.concept}</p>
            <blockquote className="mt-3 max-w-md font-normal leading-relaxed text-ink/80">
              “{problem.quote}”
            </blockquote>
          </figure>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {problem.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-ink/5 bg-white p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ivory text-wood">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 font-normal leading-relaxed text-ink/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
