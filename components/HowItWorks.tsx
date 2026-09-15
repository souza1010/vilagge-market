import { site } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Como funciona</h2>
        <p className="mt-3 max-w-xl text-cream/75">Comprar leva menos de dois minutos. Sem fila, sem caixa.</p>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {site.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-forest-dark/60 p-6 ring-1 ring-cream/10">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-amber font-display text-xl font-bold text-forest-dark">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-cream/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
