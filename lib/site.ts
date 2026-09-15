// Conteúdo do site em um só lugar.
// Troque os valores marcados com TODO pelos dados reais do Vilagge Market.

export const site = {
  name: "Vilagge Market",
  tagline: "O mercado inteligente do seu condomínio.",
  footerPhrase: "Condomínios mais modernos. Moradores mais felizes.",

  // TODO: número real com DDI + DDD, só dígitos (ex.: 5511999999999)
  whatsapp: "5500000000000",
  whatsappMessage: "Olá! Vim pelo site do Vilagge Market.",
  // TODO: usuário real do Instagram, sem @
  instagram: "vilaggemarket",

  nav: [
    { href: "#inicio", label: "Início" },
    { href: "#solucoes", label: "Soluções" },
    { href: "#metodo", label: "Método V.360™" },
    { href: "#contato", label: "Contato" },
  ],

  hero: {
    badge: "CONTAINER • SALA • LAVANDERIA",
    title: "Conveniência inteligente para condomínios.",
    text: "Mercados personalizados, lavanderia e operação 24 horas baseados no perfil real dos moradores.",
    image: "/images/hero-container.webp",
  },

  differentials: [
    {
      icon: "wallet",
      title: "Preços Competitivos",
      text: "Preços justos, alinhados ao mercado, sem sair do condomínio.",
    },
    {
      icon: "users",
      title: "Pesquisa com Moradores",
      text: "O mix de produtos nasce do que os moradores realmente consomem.",
    },
    {
      icon: "smartphone",
      title: "QR Code 24h",
      text: "Compra rápida pelo celular, a qualquer hora do dia.",
    },
    {
      icon: "chart",
      title: "Gestão Completa",
      text: "Reposição, limpeza e operação inteiramente por nossa conta.",
    },
  ],

  method: [
    { title: "Pesquisa de consumo", text: "Marcas, hábitos e necessidades." },
    { title: "Análise inteligente", text: "Identificamos os produtos com maior potencial." },
    { title: "Curadoria personalizada", text: "Cada condomínio recebe um mix exclusivo." },
    { title: "Reposição contínua", text: "O estoque evolui conforme as vendas." },
  ],

  solutions: [
    {
      kind: "container",
      title: "Mercado em Container",
      text: "Ideal para condomínios sem espaço interno.",
      image: "/images/container.webp",
      simulator: {
        label: "Container",
        description:
          "Uma estrutura arquitetônica instalada na área externa, integrada ao paisagismo e sem obras dentro do condomínio.",
        benefits: [
          "Instalação rápida e sem obras internas",
          "Não ocupa áreas comuns cobertas",
          "Fachada em vidro e pergolado de madeira",
        ],
      },
    },
    {
      kind: "sala",
      title: "Mercado em Sala",
      text: "Transformamos áreas ociosas em mercados premium.",
      image: "/images/sala.webp",
      simulator: {
        label: "Sala",
        description:
          "Uma sala sem uso vira um empório completo, com marcenaria sob medida e iluminação acolhedora.",
        benefits: [
          "Aproveita um espaço que já existe",
          "Projeto de marcenaria personalizado",
          "Menor custo de implantação",
        ],
      },
    },
    {
      kind: "lavanderia",
      title: "Mercado + Lavanderia",
      text: "Dois serviços em um único ambiente.",
      image: "/images/lavanderia.webp",
      simulator: {
        label: "Lavanderia",
        description:
          "Mercado e lavanderia compartilhada no mesmo ambiente: enquanto a roupa lava, o morador faz as compras.",
        benefits: [
          "Dois serviços em um só espaço",
          "Mais frequência de uso",
          "Conveniência completa para o dia a dia",
        ],
      },
    },
  ],

  timeline: [
    { icon: "clipboard", title: "Estudo gratuito", text: "Entendemos o condomínio e o perfil dos moradores." },
    { icon: "ruler", title: "Projeto personalizado", text: "Formato, layout e mix de produtos sob medida." },
    { icon: "tool", title: "Instalação", text: "Montagem completa, sem trabalho para o síndico." },
    { icon: "clock", title: "Operação 24h", text: "Mercado aberto todos os dias, a qualquer hora." },
  ],
} as const;

export type SolutionKind = (typeof site.solutions)[number]["kind"];

// Arquivos de /public com o basePath do GitHub Pages (next/image não aplica o basePath sozinho).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
export const instagramUrl = `https://instagram.com/${site.instagram}`;
