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
    <section id="inicio" className="relative flex min-h-screen items-center pt-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.span
            {...fadeUp(0)}
            className="inline-flex rounded-full border border-sage/25 bg-white/60 px-4 py-2 text-xs tracking-[0.18em] text-sage"
          >
            {site.hero.badge}
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl xl:text-6xl"
          >
            {site.hero.title}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg font-normal leading-relaxed text-ink/70">
            {site.hero.text}
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="rounded-full bg-sage px-8 py-4 text-center text-white shadow-soft transition hover:bg-sage-dark"
            >
              Solicitar Estudo Gratuito
            </a>
            <a
              href="#solucoes"
              className="rounded-full border border-ink/20 px-8 py-4 text-center text-ink transition hover:border-ink/40 hover:bg-white/60"
            >
              Conhecer Soluções
            </a>
          </motion.div>
        </div>

        <HeroRender className="w-full" />
      </div>
    </section>
  );
}
