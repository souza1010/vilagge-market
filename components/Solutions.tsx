"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "@/components/Icons";
import { asset, site } from "@/lib/site";

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
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
            >
              <div className="relative m-2 aspect-[40/26] overflow-hidden rounded-2xl bg-sage-light">
                <Image
                  src={asset(s.image)}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  loading="lazy"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-8 pt-6 pb-8">
                <h3 className="text-2xl font-bold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 font-normal leading-relaxed text-ink/65">{s.text}</p>
                <a
                  href="#simulador"
                  className="group/btn mt-8 inline-flex items-center gap-3 self-start rounded-full bg-ivory py-2 pr-2 pl-6 text-sm text-ink ring-1 ring-ink/10 transition duration-300 hover:bg-sage hover:text-white hover:ring-sage"
                >
                  Saiba mais
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sage text-white transition duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:bg-white group-hover/btn:text-sage">
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
