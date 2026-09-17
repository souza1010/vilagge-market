// Conteúdo do site em um só lugar.
// Troque os valores marcados com TODO pelos dados reais da Village.

export const site = {
  name: "Village Market",
  footerPhrase: "O mercado que conhece o seu condomínio.",

  // TODO: número real com DDI + DDD, só dígitos (ex.: 5511999999999)
  whatsapp: "5500000000000",
  whatsappMessage: "Olá! Quero entender como levar a Village para o meu condomínio.",
  // TODO: usuário real do Instagram, sem @
  instagram: "villagemarket",

  nav: [
    { href: "#metodo", label: "Método V.360™" },
    { href: "#modelo", label: "Para o condomínio" },
    { href: "#solucoes", label: "Soluções" },
    { href: "#contato", label: "Contato" },
  ],

  hero: {
    badge: "Antes de vender, a Village entende.",
    title: "O mercado que conhece o seu condomínio.",
    text: "Mercados autônomos personalizados para cada condomínio, com operação completa da Village e conveniência 24 horas para os moradores.",
    image: "/images/mercado-lavanderia.webp",
    imageAlt: "Fachada do Village Market em container, com mercado autônomo e lavanderia integrada",
  },

  problem: {
    title: "Conveniência não deveria significar pagar mais e encontrar menos.",
    text: "Mercados de condomínio costumam repetir os mesmos problemas. A Village nasceu para resolvê-los.",
    items: [
      {
        icon: "tag",
        title: "Preços fora da realidade",
        text: "A conveniência vira desculpa para preços excessivamente altos.",
      },
      {
        icon: "package",
        title: "Falta do que importa",
        text: "Abastecimento ineficiente deixa as prateleiras sem os itens mais procurados.",
      },
      {
        icon: "layers",
        title: "Mix que não conversa com o morador",
        text: "O mesmo sortimento para perfis diferentes, com muitos produtos de pouco giro.",
      },
      {
        icon: "eye",
        title: "Pouco conhecimento de quem compra",
        text: "Sem entender os moradores, o mercado não evolui.",
      },
    ],
    concept: "Antes de vender, a Village entende.",
    quote: "Não queremos ser o mercado mais cheio. Queremos ser o mercado que tem aquilo que você procura.",
  },

  method: {
    title: "Método V.360™",
    text: "A Village estuda o condomínio antes e depois da implantação. O mercado evolui com os dados reais de consumo.",
    message: "Cada condomínio recebe um mercado diferente, porque cada comunidade consome de um jeito.",
    steps: [
      { icon: "users", title: "Conhecer", text: "Entender os moradores e seus hábitos." },
      { icon: "grid", title: "Selecionar", text: "Definir produtos, marcas e categorias relevantes." },
      { icon: "package", title: "Abastecer", text: "Usar dados de consumo para reduzir rupturas e melhorar a reposição." },
      { icon: "chart", title: "Evoluir", text: "Analisar as vendas continuamente e adaptar o mercado." },
    ],
  },

  model: {
    title: "Seu condomínio ganha conveniência sem precisar operar um mercado.",
    text: "O condomínio não compra o mercado. A Village realiza o investimento da implantação e fica responsável pela operação e pelos seus resultados.",
    parties: [
      { icon: "building", name: "Condomínio", role: "Disponibiliza o espaço." },
      { icon: "leaf", name: "Village", role: "Planeja, investe, instala e opera." },
      { icon: "home", name: "Moradores", role: "Ganham conveniência 24 horas dentro do condomínio." },
    ],
    responsibilities: [
      "Estudo do condomínio",
      "Investimento na implantação",
      "Instalação",
      "Abastecimento",
      "Administração",
      "Tecnologia e manutenção",
      "Acompanhamento de vendas e estoque",
    ],
    note: "A disponibilização do espaço segue as condições comerciais acordadas com cada condomínio.",
  },

  solutions: [
    {
      kind: "sala",
      eyebrow: "Village Market",
      title: "Espaço do condomínio",
      text: "Quando o condomínio já possui uma sala ou espaço adequado, a Village transforma o ambiente em um mercado autônomo.",
      image: "/images/espaco-condominio.webp",
      features: ["Aproveita o espaço existente", "Projeto adaptado ao ambiente"],
      simulator: {
        label: "Tenho um espaço",
        description:
          "Uma sala ou área disponível vira um mercado autônomo completo, projetado para o ambiente e para o perfil dos moradores.",
        benefits: [
          "Aproveita um espaço que o condomínio já tem",
          "Layout e mix planejados para o ambiente",
          "Totem de autoatendimento dentro da loja",
        ],
      },
    },
    {
      kind: "container",
      eyebrow: "Village Market",
      title: "Mercado em Container",
      text: "Quando não há espaço interno disponível, a Village implanta uma unidade modular planejada para o condomínio.",
      image: "/images/mercado-container.webp",
      features: ["Mercado completo e autônomo", "Solução adaptada ao condomínio"],
      simulator: {
        label: "Não tenho espaço",
        description:
          "Uma unidade modular bonita, com fachada em vidro e acabamento em madeira, pensada para fazer parte do condomínio.",
        benefits: [
          "Não depende de uma sala disponível",
          "Integrada à arquitetura e ao paisagismo",
          "Loja completa com totem interno e operação 24h",
        ],
      },
    },
    {
      kind: "lavanderia",
      eyebrow: "Village Market",
      title: "Mercado + Lavanderia",
      text: "Uma unidade maior que integra mercado autônomo e lavanderia no mesmo espaço.",
      image: "/images/mercado-lavanderia.webp",
      features: ["Duas máquinas lava e seca", "Mais praticidade para os moradores"],
      simulator: {
        label: "Com lavanderia",
        description:
          "Mercado e lavanderia no mesmo container: a lavanderia complementa a conveniência do dia a dia dos moradores.",
        benefits: [
          "Mercado e lavanderia integrados no mesmo espaço",
          "Duas máquinas lava e seca",
          "Mais praticidade para os moradores",
        ],
      },
    },
  ],

  experience: {
    title: "Entre. Escolha. Pague. Pronto.",
    text: "Um mercado autônomo, aberto 24 horas, a poucos passos de casa.",
    image: "/images/espaco-condominio.webp",
    imageAlt: "Interior de um mercado Village com prateleiras, geladeira e totem de autoatendimento",
    steps: [
      { icon: "door", title: "Entre", text: "Acesse a loja a qualquer hora do dia." },
      { icon: "bag", title: "Escolha", text: "Produtos selecionados para o perfil do seu condomínio." },
      { icon: "smartphone", title: "Pague", text: "No totem de autoatendimento, dentro da loja." },
      { icon: "check", title: "Pronto", text: "Sem filas e sem caixa convencional." },
    ],
  },

  differentials: [
    { icon: "clock", title: "Aberto 24h", text: "Conveniência a qualquer hora, todos os dias." },
    { icon: "grid", title: "Mix personalizado", text: "Produtos escolhidos a partir do perfil de cada condomínio." },
    { icon: "chart", title: "Gestão baseada em dados", text: "Decisões guiadas pelo consumo real dos moradores." },
    { icon: "refresh", title: "Reposição inteligente", text: "Abastecimento planejado para reduzir faltas." },
    { icon: "spark", title: "Ambiente premium", text: "Espaços acolhedores, bem iluminados e bem cuidados." },
    { icon: "shield", title: "Operação Village", text: "Instalação, abastecimento e tecnologia com a Village." },
  ],

  finalCta: {
    title: "Quer entender qual modelo faz sentido para o seu condomínio?",
    button: "Falar com a Village",
  },
} as const;

export type SolutionKind = (typeof site.solutions)[number]["kind"];

// Arquivos de /public com o basePath do GitHub Pages (next/image não aplica o basePath sozinho).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
export const instagramUrl = `https://instagram.com/${site.instagram}`;
