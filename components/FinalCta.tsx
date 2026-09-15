import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="px-3 pb-6 sm:px-5">
      <Reveal className="mx-auto max-w-[1400px] rounded-3xl bg-sage-light px-6 py-20 text-center sm:px-12 sm:py-24">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          {site.finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg font-normal text-ink/80">{site.problem.quote}</p>
        <a
          href="#contato"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-sage-dark py-2 pr-2 pl-8 text-white shadow-soft transition hover:bg-sage-deep"
        >
          {site.finalCta.button}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sage-dark">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
