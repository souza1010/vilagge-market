"use client";

import { motion } from "framer-motion";
import HeroRender from "@/components/HeroRender";
import { site } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center bg-ivory pt-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[45fr_55fr] lg:gap-14">
        <div>
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-sage/25 bg-white/70 px-4 py-2 text-sm text-sage-dark"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
            {site.hero.badge}
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl xl:text-6xl"
          >
            {site.hero.title}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg font-normal leading-relaxed text-ink/80">
            {site.hero.text}
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contato"
              className="rounded-full bg-sage-dark px-8 py-4 text-center text-white shadow-soft transition hover:bg-sage-deep sm:whitespace-nowrap"
            >
              Quero a Vilagge no meu condomínio
            </a>
            <a
              href="#metodo"
              className="rounded-full border border-ink/20 px-8 py-4 text-center text-ink transition hover:border-ink/40 hover:bg-white/60 sm:whitespace-nowrap"
            >
              Conheça como funciona
            </a>
          </motion.div>
        </div>

        <HeroRender className="w-full" />
      </div>
    </section>
  );
}
