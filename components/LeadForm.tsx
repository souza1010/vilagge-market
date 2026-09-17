"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Icon from "@/components/Icons";
import { emptyLead, submitLead, type Lead } from "@/lib/lead";

type Status = "idle" | "sending" | "sent" | "whatsapp" | "error";

const inputClass =
  "mt-2 w-full rounded-2xl border border-ink/10 bg-ivory/60 px-5 py-4 font-normal text-ink outline-none transition placeholder:text-ink/45 focus:border-sage focus:bg-white focus:ring-4 focus:ring-sage/15";

export default function LeadForm() {
  const [lead, setLead] = useState<Lead>(emptyLead);
  const [status, setStatus] = useState<Status>("idle");

  const set = <K extends keyof Lead>(key: K, value: Lead[K]) => setLead((l) => ({ ...l, [key]: value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      setStatus(await submitLead(lead));
      setLead(emptyLead);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="scroll-mt-20 px-3 pb-24 sm:px-5 sm:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-7xl gap-12 rounded-3xl border border-ink/5 bg-white p-6 shadow-soft sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:p-16"
      >
        <div>
          <p className="text-sm tracking-[0.18em] text-wood">CONTATO</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl">Fale com a Village</h2>
          <p className="mt-5 text-lg font-normal leading-relaxed text-ink/80">
            Conte um pouco sobre o seu condomínio. Vamos entender o espaço e o perfil dos moradores para indicar o
            modelo mais adequado.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
          <Field label="Condomínio" className="sm:col-span-2">
            <input required className={inputClass} value={lead.condominio} onChange={(e) => set("condominio", e.target.value)} placeholder="Nome do condomínio" />
          </Field>
          <Field label="Nome">
            <input required autoComplete="name" className={inputClass} value={lead.nome} onChange={(e) => set("nome", e.target.value)} placeholder="Seu nome" />
          </Field>
          <Field label="Cidade">
            <input required autoComplete="address-level2" className={inputClass} value={lead.cidade} onChange={(e) => set("cidade", e.target.value)} placeholder="Cidade" />
          </Field>
          <Field label="WhatsApp">
            <input required type="tel" inputMode="tel" autoComplete="tel" className={inputClass} value={lead.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="(00) 00000-0000" />
          </Field>
          <Field label="Quantidade de unidades">
            <input required type="number" min={1} inputMode="numeric" className={inputClass} value={lead.unidades} onChange={(e) => set("unidades", e.target.value)} placeholder="Ex.: 120" />
          </Field>
          <YesNo label="Possui sala ou espaço disponível?" name="possuiSala" value={lead.possuiSala} onChange={(v) => set("possuiSala", v)} />
          <YesNo label="Deseja lavanderia?" name="desejaLavanderia" value={lead.desejaLavanderia} onChange={(v) => set("desejaLavanderia", v)} />

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-dark px-8 py-4 text-white transition hover:bg-sage-deep disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Enviando…" : "Enviar para a Village"}
              <Icon name="arrow" className="h-4 w-4" />
            </button>
            <p aria-live="polite" className="mt-4 text-sm font-normal">
              {status === "sent" && <span className="text-sage-dark">Obrigado! Entraremos em contato em breve.</span>}
              {status === "whatsapp" && (
                <span className="text-sage-dark">Abrimos o WhatsApp com os seus dados. É só enviar a mensagem.</span>
              )}
              {status === "error" && <span className="text-wood">Não foi possível enviar. Tente novamente.</span>}
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block text-sm text-ink ${className}`}>
      {label}
      {children}
    </label>
  );
}

function YesNo({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: "sim" | "nao";
  onChange: (v: "sim" | "nao") => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm text-ink">{label}</legend>
      <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl border border-ink/10 bg-ivory/60 p-1.5">
        {(["sim", "nao"] as const).map((opt) => (
          <label
            key={opt}
            className={`cursor-pointer rounded-xl py-3 text-center transition has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-sage/25 ${
              value === opt ? "bg-sage-dark text-white" : "text-ink/80 hover:bg-white"
            }`}
          >
            <input type="radio" name={name} value={opt} checked={value === opt} onChange={() => onChange(opt)} className="sr-only" />
            {opt === "sim" ? "Sim" : "Não"}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
