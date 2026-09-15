"use client";

import { motion, useReducedMotion } from "framer-motion";
import Icon, { type IconName } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const stepIcons: IconName[] = ["search", "spark", "grid", "refresh"];

// Método V.360™ — seção principal, com identidade própria (fundo escuro, anel 360 e selo exclusivo).
export default function Method() {
  const reduce = useReducedMotion();

  return (
    <section id="metodo" className="scroll-mt-20 px-3 py-6 sm:px-5">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-ink px-6 py-28 text-ivory sm:px-12 sm:py-36 lg:px-16">
        {/* luz ambiente */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-sage/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-48 right-0 h-[420px] w-[420px] rounded-full bg-amber/10 blur-3xl"
          aria-hidden
        />

        {/* anel 360 decorativo */}
        <motion.svg
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] opacity-[0.07]"
          aria-hidden
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="180" fill="none" stroke="#F7F5EF" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="#F7F5EF" strokeWidth="1.5" strokeDasharray="4 10" />
          <circle cx="380" cy="200" r="8" fill="#F2A23A" />
          <circle cx="200" cy="380" r="8" fill="#F2A23A" />
          <circle cx="20" cy="200" r="8" fill="#F2A23A" />
          <circle cx="200" cy="20" r="8" fill="#F2A23A" />
        </motion.svg>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-4 py-2 text-xs tracking-[0.18em] text-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                NOSSA METODOLOGIA
              </span>
              <h2 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">
                Método V.360<span className="align-super text-2xl text-amber sm:text-4xl">™</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg font-normal leading-relaxed text-ivory/70 sm:text-xl">
                Conhecemos o condomínio antes de montar o mercado.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="shrink-0">
              <Seal spin={!reduce} />
            </Reveal>
          </div>

          {/* trilha do fluxo */}
          <div className="relative mt-20 hidden lg:block" aria-hidden>
            <motion.div
              className="h-px origin-left bg-gradient-to-r from-amber/70 via-ivory/25 to-ivory/5"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-x-0 -top-[5px] grid grid-cols-4 gap-5">
              {site.method.map((step, i) => (
                <motion.span
                  key={step.title}
                  className="ml-8 h-[11px] w-[11px] rounded-full border-2 border-ink bg-amber"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.25 }}
                />
              ))}
            </div>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {site.method.map((step, i) => (
              <Reveal as="li" key={step.title} delay={0.1 + i * 0.12}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ivory/10 bg-gradient-to-b from-ivory/[0.07] to-ivory/[0.02] p-8 transition duration-500 hover:-translate-y-1.5 hover:border-amber/35 hover:from-ivory/[0.1]">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sage text-white shadow-[0_8px_24px_-8px_rgb(110_143_114/0.6)] transition duration-500 group-hover:bg-amber group-hover:text-ink">
                      <Icon name={stepIcons[i]} />
                    </span>
                    <span className="text-6xl font-bold leading-none text-ivory/[0.07] transition duration-500 group-hover:text-ivory/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="mt-14 text-xs tracking-[0.2em] text-amber">
                    ETAPA {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 font-normal leading-relaxed text-ivory/65">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Seal({ spin }: { spin: boolean }) {
  return (
    <div className="relative h-36 w-36 sm:h-40 sm:w-40" role="img" aria-label="Exclusivo Vilagge">
      <motion.svg
        viewBox="0 0 160 160"
        className="absolute inset-0 h-full w-full"
        animate={spin ? { rotate: 360 } : undefined}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <defs>
          <path id="seal-circle" d="M80 80m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0" />
        </defs>
        <circle cx="80" cy="80" r="76" fill="none" stroke="#F2A23A" strokeOpacity="0.5" strokeWidth="1" />
        <text fill="#F7F5EF" fontSize="10.5" fontWeight="500" letterSpacing="3.2">
          <textPath href="#seal-circle">EXCLUSIVO VILAGGE • MÉTODO V.360™ •</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-[30%] grid place-items-center rounded-full bg-amber text-ink shadow-[0_8px_32px_-8px_rgb(242_162_58/0.6)]">
        <span className="text-sm font-bold tracking-tight">V.360</span>
      </div>
    </div>
  );
}
