"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icons";
import SolutionArt from "@/components/SolutionArt";
import { site } from "@/lib/site";

export default function Solutions() {
  return (
    <section id="solucoes" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-5xl">Soluções</h2>
          <p className="mt-5 text-lg font-normal text-ink/65">
            Três formatos para se adaptar ao espaço de cada condomínio.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {site.solutions.map((s, i) => (
            <motion.article
              key={s.kind}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <SolutionArt kind={s.kind} className="aspect-[40/26] h-auto w-full" />
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 font-normal leading-relaxed text-ink/65">{s.text}</p>
                <a
                  href="#simulador"
                  className="mt-8 inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-6 py-3 text-sm text-ink transition hover:border-sage hover:bg-sage hover:text-white"
                >
                  Saiba mais
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
