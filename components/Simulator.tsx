"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Icon from "@/components/Icons";
import SolutionArt from "@/components/SolutionArt";
import { site, type SolutionKind } from "@/lib/site";

export default function Simulator() {
  const [kind, setKind] = useState<SolutionKind>("container");
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
          <div
            role="tablist"
            aria-label="Tipo de solução"
            className="mx-auto mt-10 inline-flex w-full max-w-md rounded-full border border-ink/10 bg-white p-1.5 shadow-soft"
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
                  className={`relative flex-1 rounded-full px-3 py-3 text-sm transition-colors sm:text-base ${
                    active ? "text-white" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="simulator-pill"
                      className="absolute inset-0 rounded-full bg-sage"
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
              <SolutionArt kind={kind} className="aspect-[40/26] h-auto w-full" />
              <div className="p-8 sm:p-12">
                <h3 className="text-2xl font-bold text-ink sm:text-3xl">{current.title}</h3>
                <p className="mt-4 text-lg font-normal leading-relaxed text-ink/65">
                  {current.simulator.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {current.simulator.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-ink">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage-light text-sage">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="mt-10 inline-flex rounded-full bg-sage px-8 py-4 text-white transition hover:bg-sage-dark"
                >
                  Solicitar Estudo Gratuito
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
