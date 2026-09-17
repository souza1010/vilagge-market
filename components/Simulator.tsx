"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/Icons";
import { asset, site, type SolutionKind } from "@/lib/site";

export default function Simulator() {
  const [kind, setKind] = useState<SolutionKind>(site.solutions[0].kind);
  const current = site.solutions.find((s) => s.kind === kind) ?? site.solutions[0];

  return (
    <section id="simulador" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Qual solução combina com seu condomínio?
          </h2>
          <p className="mt-5 text-lg font-normal text-ink/80">Comece pelo espaço que o condomínio tem hoje.</p>
          <div
            role="tablist"
            aria-label="Tipo de solução"
            className="mx-auto mt-10 grid w-full max-w-xl grid-cols-3 rounded-3xl border border-ink/10 bg-white p-1.5 shadow-soft sm:rounded-full"
          >
            {site.solutions.map((s) => {
              const active = s.kind === kind;
              return (
                <button
                  key={s.kind}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setKind(s.kind)}
                  className={`relative rounded-[18px] px-2 py-3 text-sm leading-tight transition-colors sm:rounded-full sm:text-base ${
                    active ? "text-white" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="simulator-pill"
                      className="absolute inset-0 rounded-[18px] bg-sage-dark sm:rounded-full"
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  <span className="relative">{s.simulator.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft">
          <AnimatePresence mode="wait">
            <motion.div
              key={kind}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid items-center lg:grid-cols-2"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={asset(current.image)}
                  alt={`${current.eyebrow} — ${current.title}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-12">
                <p className="text-xs tracking-[0.18em] text-wood">{current.eyebrow.toUpperCase()}</p>
                <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{current.title}</h3>
                <p className="mt-4 text-lg font-normal leading-relaxed text-ink/80">
                  {current.simulator.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {current.simulator.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-ink">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage-light text-sage-dark">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="mt-10 inline-flex rounded-full bg-sage-dark px-8 py-4 text-center text-white transition hover:bg-sage-deep"
                >
                  Quero a Village no meu condomínio
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
