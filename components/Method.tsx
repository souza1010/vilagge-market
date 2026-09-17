"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

// Posições dos 4 nós no ciclo (topo, direita, base, esquerda) — em % do quadrado do diagrama.
const nodes = [
  { left: "50%", top: "12.5%" },
  { left: "87.5%", top: "50%" },
  { left: "50%", top: "87.5%" },
  { left: "12.5%", top: "50%" },
];

// Arcos do anel (r=150, centro 200) entre os nós, no sentido horário.
const arcs = [
  "M246.4 57.3A150 150 0 0 1 342.7 153.6",
  "M342.7 246.4A150 150 0 0 1 246.4 342.7",
  "M153.6 342.7A150 150 0 0 1 57.3 246.4",
  "M57.3 153.6A150 150 0 0 1 153.6 57.3",
];

// Método V.360™ — seção principal: ciclo contínuo Conhecer → Selecionar → Abastecer → Evoluir.
export default function Method() {
  const { method } = site;

  return (
    <section id="metodo" className="scroll-mt-20 px-3 py-6 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-3xl bg-sage-light px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs tracking-[0.18em] text-sage-dark shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
                EXCLUSIVO VILLAGE
              </span>
              <h2 className="mt-7 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                Método V.360<span className="align-super text-2xl text-wood sm:text-3xl">™</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg font-normal leading-relaxed text-ink/80">{method.text}</p>
            </Reveal>

            <ol className="mt-12 space-y-3">
              {method.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={0.1 + i * 0.1}>
                  <div className="flex items-start gap-5 rounded-3xl bg-white/70 p-5 ring-1 ring-ink/5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-dark text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                      <p className="mt-1 font-normal leading-relaxed text-ink/75">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Cycle />
        </div>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center">
          <p className="text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">{method.message}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Cycle() {
  const { steps } = site.method;

  return (
    <div className="mx-auto w-full max-w-[520px] px-4 pb-10 sm:px-8">
      <div className="relative aspect-square w-full">
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <marker id="cycle-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M1 1l6 4-6 4" fill="none" stroke="#557459" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          <circle cx="200" cy="200" r="150" fill="none" stroke="#6E8F72" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="2 7" />
          {arcs.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke="#557459"
              strokeWidth="2"
              strokeLinecap="round"
              markerEnd="url(#cycle-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.25, ease: "easeOut" }}
            />
          ))}
        </svg>

        {/* selo central */}
        <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2" role="img" aria-label="Método V.360, exclusivo Village">
          <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <path id="cycle-seal" d="M80 80m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0" />
            </defs>
            <circle cx="80" cy="80" r="78" fill="#FFFFFF" />
            <text fill="#557459" fontSize="10" fontWeight="500" letterSpacing="3.4">
              <textPath href="#cycle-seal">EXCLUSIVO VILLAGE • MÉTODO V.360™ •</textPath>
            </text>
          </svg>
          <div className="absolute inset-[27%] grid place-items-center rounded-full bg-amber text-ink">
            <span className="text-[clamp(0.7rem,2.6vw,1rem)] font-bold tracking-tight">V.360</span>
          </div>
        </div>

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={nodes[i]}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.25 }}
          >
            <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-sage-dark shadow-soft ring-1 ring-sage/20 sm:h-16 sm:w-16">
              <Icon name={step.icon} />
              <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-sage-dark text-[11px] font-bold text-white">
                {i + 1}
              </span>
            </span>
            <span className="mt-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold tracking-wide text-ink sm:text-sm">
              {step.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
