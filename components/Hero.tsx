import ContainerIllustration from "@/components/ContainerIllustration";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber/20 px-3 py-1 text-sm font-semibold text-amber-dark">
            <span className="h-2 w-2 rounded-full bg-amber" />
            {site.hours}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-foreground/75">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#como-funciona"
              className="rounded-full bg-amber px-6 py-3 font-semibold text-forest-dark transition hover:bg-amber-dark"
            >
              Como funciona
            </a>
            <a
              href="#onde-estamos"
              className="rounded-full border-2 border-forest px-6 py-3 font-semibold text-forest transition hover:bg-forest hover:text-cream"
            >
              Onde estamos
            </a>
          </div>
        </div>
        <ContainerIllustration className="w-full drop-shadow-xl" />
      </div>
    </section>
  );
}
