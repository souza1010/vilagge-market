// Conteúdo do site em um só lugar.
// Troque os valores marcados com TODO pelos dados reais do Village Market.

export const site = {
  name: "Village Market",
  tagline: "Seu minimercado 24h, a poucos passos de casa.",
  description:
    "Minimercado autônomo em container: entre, escolha e pague sozinho no totem. Aberto 24 horas, todos os dias.",

  // TODO: número real com DDI + DDD, só dígitos (ex.: 5511999999999)
  whatsapp: "5500000000000",
  whatsappMessage: "Olá! Vim pelo site do Village Market.",
  // TODO: usuário real do Instagram, sem @
  instagram: "villagemarket",

  // TODO: endereço real
  address: {
    line1: "Rua Exemplo, 123",
    line2: "Condomínio Village — Cidade/UF",
    mapsQuery: "Village Market",
  },
  hours: "Aberto 24 horas, 7 dias por semana",

  steps: [
    {
      title: "Entre",
      text: "Acesse o container quando quiser — dia, noite ou fim de semana.",
    },
    {
      title: "Escolha",
      text: "Pegue o que precisa nas prateleiras e geladeiras.",
    },
    {
      title: "Pague no totem",
      text: "Passe os produtos no totem e pague com Pix, cartão de débito ou crédito.",
    },
  ],

  categories: [
    { emoji: "🥤", name: "Bebidas", text: "Águas, refrigerantes, sucos e cervejas geladas." },
    { emoji: "🍞", name: "Padaria", text: "Pães, bolos e biscoitos para o café." },
    { emoji: "🥛", name: "Frios e laticínios", text: "Leite, queijos, iogurtes e manteiga." },
    { emoji: "🍫", name: "Snacks e doces", text: "Chocolates, salgadinhos e guloseimas." },
    { emoji: "🧊", name: "Congelados", text: "Pratos prontos, pizzas e sorvetes." },
    { emoji: "🧴", name: "Higiene e limpeza", text: "O básico do dia a dia sem sair do condomínio." },
  ],

  features: [
    { title: "24 horas", text: "Sem fila e sem horário: o mercado funciona quando você precisa." },
    { title: "Autoatendimento", text: "Totem simples e rápido, com pagamento por Pix ou cartão." },
    { title: "Seguro", text: "Ambiente monitorado por câmeras e acesso controlado." },
    { title: "Pertinho", text: "Dentro do condomínio — dá para ir a pé, de chinelo." },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
export const instagramUrl = `https://instagram.com/${site.instagram}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`;
