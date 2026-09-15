import { site } from "@/lib/site";

export type Lead = {
  condominio: string;
  nome: string;
  cidade: string;
  whatsapp: string;
  unidades: string;
  possuiSala: "sim" | "nao";
  desejaLavanderia: "sim" | "nao";
};

export const emptyLead: Lead = {
  condominio: "",
  nome: "",
  cidade: "",
  whatsapp: "",
  unidades: "",
  possuiSala: "nao",
  desejaLavanderia: "nao",
};

// Ponto único de integração do formulário.
// Com NEXT_PUBLIC_LEAD_ENDPOINT definido (CRM, planilha, webhook), envia o lead como JSON.
// Sem endpoint, abre o WhatsApp com os dados preenchidos.
export async function submitLead(lead: Lead): Promise<"sent" | "whatsapp"> {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`Falha ao enviar (${res.status})`);
    return "sent";
  }

  const yesNo = (v: Lead["possuiSala"]) => (v === "sim" ? "Sim" : "Não");
  const message = [
    "Olá! Quero entender como levar a Vilagge para o meu condomínio.",
    `Condomínio: ${lead.condominio}`,
    `Nome: ${lead.nome}`,
    `Cidade: ${lead.cidade}`,
    `WhatsApp: ${lead.whatsapp}`,
    `Unidades: ${lead.unidades}`,
    `Possui sala ou espaço disponível: ${yesNo(lead.possuiSala)}`,
    `Deseja lavanderia: ${yesNo(lead.desejaLavanderia)}`,
  ].join("\n");

  window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  return "whatsapp";
}
