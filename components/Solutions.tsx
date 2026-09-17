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
          <p className="text-sm tracking-[0.18em] text-wood">SOLUÇÕES</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Um formato para cada condomínio.
          </h2>
          <p className="mt-5 text-lg font-normal text-ink/80">
            O modelo é definido pelo espaço disponível e pelo perfil dos moradores.
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift sm:flex-row lg:flex-col"
            >
              <div className="relative m-2 aspect-[16/9] shrink-0 overflow-hidden rounded-2xl bg-sage-light sm:w-[44%] sm:self-start lg:w-auto lg:self-auto">
                <Image
                  src={asset(s.image)}
                  alt={`${s.eyebrow} — ${s.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 44vw, 100vw"
                  loading="lazy"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-sm font-bold text-ink shadow-soft">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-8 pt-6 pb-8 sm:pl-6 lg:pl-8">
                <p className="text-xs tracking-[0.18em] text-wood">{s.eyebrow.toUpperCase()}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-3 font-normal leading-relaxed text-ink/80">{s.text}</p>
                <ul className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="rounded-full bg-ivory px-3 py-1.5 text-xs text-ink/80">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#simulador"
                  aria-label={`Saiba mais sobre ${s.title}`}
                  className="group/btn mt-8 inline-flex items-center gap-3 self-start rounded-full bg-ivory py-2 pr-2 pl-6 text-sm text-ink ring-1 ring-ink/10 transition duration-300 hover:bg-sage-dark hover:text-white hover:ring-sage-dark"
                >
                  Saiba mais
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-dark text-white transition duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:bg-white group-hover/btn:text-sage-dark">
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
