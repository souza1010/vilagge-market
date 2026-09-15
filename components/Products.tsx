import { site } from "@/lib/site";

export default function Products() {
  return (
    <section id="produtos" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-forest sm:text-4xl">O que você encontra</h2>
        <p className="mt-3 max-w-xl text-foreground/70">
          O essencial do dia a dia, sempre abastecido.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.categories.map((c) => (
            <li
              key={c.name}
              className="rounded-2xl bg-white/70 p-6 ring-1 ring-forest/10 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl" aria-hidden>
                {c.emoji}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-forest">{c.name}</h3>
              <p className="mt-1 text-foreground/70">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
