// Blog data structure for the dashboard

export interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
  url?: string;
  tags: string[];
  category: string;
}

export interface Theme {
  id: string;
  name: string;
  level: number;
  parentId?: string;
  description?: string;
  children: Theme[];
  articles: string[]; // Article IDs
}

// Theme hierarchy data
export const themes: Theme[] = [
  {
    id: "biblical-studies",
    name: "Estudos Bíblicos",
    level: 1,
    description: "Estudos focados em conteúdo bíblico e interpretação",
    children: [
      {
        id: "jewish-feasts",
        name: "Festas Judaicas",
        level: 2,
        parentId: "biblical-studies",
        description: "Estudos sobre as festas e celebrações judaicas na Bíblia",
        children: [
          {
            id: "jewish-feasts-intro",
            name: "Introdução Geral - Festas Judaicas",
            level: 3,
            parentId: "jewish-feasts",
            description: "Introdução geral às festas judaicas.",
            children: [],
            articles: ["jewish-feasts-intro"]
          },
          {
            id: "pascoa-pessach",
            name: "Páscoa (Pessach)",
            level: 3,
            parentId: "jewish-feasts",
            description: "Estudos sobre a festa da Páscoa",
            children: [],
            articles: ["pascoa-pessach"]
          },
          {
            id: "paes-azimos-hag-hamatzot",
            name: "Pães Ázimos (Hag HaMatzot)",
            level: 3,
            parentId: "jewish-feasts",
            description: "Estudos sobre a festa dos Pães Ázimos",
            children: [],
            articles: ["paes-azimos-hag-hamatzot"]
          },
          {
            id: "primicias-hag-habikkurim",
            name: "Primícias (Hag HaBikkurim)",
            level: 3,
            parentId: "jewish-feasts",
            description: "Estudos sobre a festa das Primícias",
            children: [],
            articles: ["primicias-hag-habikkurim"]
          },
          {
            id: "pentecostes-shavuot",
            name: "Pentecostes (Shavuot)",
            level: 3,
            parentId: "jewish-feasts",
            description: "Estudos sobre a festa de Pentecostes",
            children: [],
            articles: ["pentecostes-shavuot"]
          },
          {
            id: "trombetas-yom-teruah",
            name: "Trombetas (Yom Teruah)",
            level: 3,
            parentId: "jewish-feasts",
            description: "Estudos sobre a festa das Trombetas",
            children: [],
            articles: ["trombetas-yom-teruah"]
          },
          {
            id: "expiacao-yom-kippur",
            name: "Expiação (Yom Kippur)",
            level: 3,
            parentId: "jewish-feasts",
            description: "Estudos sobre o Dia da Expiação",
            children: [],
            articles: ["expiacao-yom-kippur"]
          },
          {
            id: "tabernaculos-sukkot",
            name: "Tabernáculos (Sukkot)",
            level: 3,
            parentId: "jewish-feasts",
            description: "Estudos sobre a Festa dos Tabernáculos",
            children: [],
            articles: ["tabernaculos-sukkot"]
          },
          {
            id: "conclusao-festas-judaicas",
            name: "Conclusão - Festas Judaicas",
            level: 3,
            parentId: "jewish-feasts",
            description: "Conclusão sobre as festas judaicas.",
            children: [],
            articles: ["conclusao-festas-judaicas"]
          }
        ],
        articles: []
      },
      {
        id: "epistles-of-paul",
        name: "Epístolas de Paulo",
        level: 2,
        parentId: "biblical-studies",
        description: "Estudos sobre as cartas escritas pelo Apóstolo Paulo",
        children: [
          {
            id: "letters-to-churches",
            name: "Cartas às Igrejas",
            level: 3,
            parentId: "epistles-of-paul",
            description: "Cartas de Paulo endereçadas a várias igrejas",
            children: [
              {
                id: "churches-intro",
                name: "Introdução Geral - Igrejas",
                level: 4,
                parentId: "letters-to-churches",
                description: "Introdução geral às cartas de Paulo às igrejas.",
                children: [],
                articles: ["churches-intro"]
              },
              {
                id: "romans",
                name: "Romanos",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta de Paulo aos Romanos",
                children: [],
                articles: ["romans"]
              },
              {
                id: "1-corinthians",
                name: "1 Coríntios",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a primeira carta de Paulo aos Coríntios",
                children: [],
                articles: ["1-corinthians"]
              },
              {
                id: "2-corinthians",
                name: "2 Coríntios",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a segunda carta de Paulo aos Coríntios",
                children: [],
                articles: ["2-corinthians"]
              },
              {
                id: "galatians",
                name: "Gálatas",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta de Paulo aos Gálatas",
                children: [],
                articles: ["galatians"]
              },
              {
                id: "ephesians",
                name: "Efésios",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta de Paulo aos Efésios",
                children: [],
                articles: ["ephesians"]
              },
              {
                id: "philippians",
                name: "Filipenses",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta de Paulo aos Filipenses",
                children: [],
                articles: ["philippians"]
              },
              {
                id: "colossians",
                name: "Colossenses",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta de Paulo aos Colossenses",
                children: [],
                articles: ["colossians"]
              },
              {
                id: "1-thessalonians",
                name: "1 Tessalonicenses",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a primeira carta de Paulo aos Tessalonicenses",
                children: [],
                articles: ["1-thessalonians"]
              },
              {
                id: "2-thessalonians",
                name: "2 Tessalonicenses",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a segunda carta de Paulo aos Tessalonicenses",
                children: [],
                articles: ["2-thessalonians"]
              },
              {
                id: "hebreus",
                name: "Hebreus",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta aos Hebreus",
                children: [],
                articles: ["hebreus"]
              }
            ],
            articles: []
          },
          {
            id: "letters-to-collaborators",
            name: "Cartas aos Colaboradores",
            level: 3,
            parentId: "epistles-of-paul",
            description: "Cartas de Paulo endereçadas aos seus colaboradores pessoais",
            children: [
              {
                id: "collaborators-intro",
                name: "Introdução Geral - Colaboradores",
                level: 4,
                parentId: "letters-to-collaborators",
                description: "Introdução geral às cartas de Paulo aos seus colaboradores.",
                children: [],
                articles: ["collaborators-intro"]
              },
              {
                id: "1-timothy",
                name: "1 Timóteo",
                level: 4,
                parentId: "letters-to-collaborators",
                description: "Estudos sobre a primeira carta de Paulo a Timóteo",
                children: [],
                articles: ["1-timothy"]
              },
              {
                id: "2-timothy",
                name: "2 Timóteo",
                level: 4,
                parentId: "letters-to-collaborators",
                description: "Estudos sobre a segunda carta de Paulo a Timóteo",
                children: [],
                articles: ["2-timothy"]
              },
              {
                id: "philemon",
                name: "Filemom",
                level: 4,
                parentId: "letters-to-collaborators",
                description: "Estudos sobre a carta de Paulo a Filemom",
                children: [],
                articles: ["philemon"]
              },
              {
                id: "tito",
                name: "Tito",
                level: 4,
                parentId: "letters-to-collaborators",
                description: "Estudos sobre a carta de Paulo a Tito",
                children: [],
                articles: ["tito"]
              }
            ],
            articles: []
          }
        ],
        articles: []
      },
      {
        id: "biblical-figures",
        name: "Figuras Bíblicas",
        level: 2,
        parentId: "biblical-studies",
        description: "Estudos sobre figuras importantes na Bíblia",
        children: [
          {
            id: "jesus-christ",
            name: "Jesus Cristo",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Jesus Cristo",
            children: [],
            articles: []
          },
          {
            id: "paul",
            name: "Paulo",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados no Apóstolo Paulo",
            children: [],
            articles: []
          },
          {
            id: "moses",
            name: "Moisés",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Moisés",
            children: [],
            articles: []
          },
          {
            id: "abraham",
            name: "Abraão",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Abraão",
            children: [],
            articles: []
          },
          {
            id: "samuel",
            name: "Samuel",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Samuel",
            children: [],
            articles: []
          },
          {
            id: "david",
            name: "Davi",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados no Rei Davi",
            children: [],
            articles: []
          },
          {
            id: "melchisedech",
            name: "Melquisedeque",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Melquisedeque",
            children: [],
            articles: []
          }
        ],
        articles: []
      },
      {
        id: "biblical-concepts",
        name: "Conceitos Bíblicos",
        level: 2,
        parentId: "biblical-studies",
        description: "Estudos sobre conceitos teológicos na Bíblia",
        children: [
          {
            id: "salvation",
            name: "Salvação",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre o conceito de salvação",
            children: [
              {
                id: "salvacao-so-em-jesus-cristo",
                name: "SÓ em JESUS CRISTO",
                level: 4,
                parentId: "salvation",
                description: "Artigo sobre a salvação somente em Jesus Cristo.",
                children: [],
                articles: ["salvacao-so-em-jesus-cristo"]
              },
              {
                id: "salvacao-qual-o-preco",
                name: "Qual o preço?",
                level: 4,
                parentId: "salvation",
                description: "Artigo sobre o preço da salvação.",
                children: [],
                articles: ["salvacao-qual-o-preco"]
              },
              {
                id: "salvacao-janela-de-oportunidade",
                name: "Janela de Oportunidade",
                level: 4,
                parentId: "salvation",
                description: "Artigo sobre a janela de oportunidade para a salvação.",
                children: [],
                articles: ["salvacao-janela-de-oportunidade"]
              },
              {
                id: "salvacao-fe-e-esperanca",
                name: "Mensagem de Fé e Esperança",
                level: 4,
                parentId: "salvation",
                description: "Artigo sobre a mensagem de fé e esperança.",
                children: [],
                articles: ["salvacao-fe-e-esperanca"]
              }
            ],
            articles: []
          },
          {
            id: "faith",
            name: "Fé",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre fé",
            children: [],
            articles: []
          },
          {
            id: "obedience",
            name: "Obediência",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre obediência a Deus",
            children: [],
            articles: []
          },
          {
            id: "eternal-life",
            name: "Vida Eterna",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre vida eterna",
            children: [],
            articles: []
          },
          {
            id: "love",
            name: "Amor",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre o amor bíblico",
            children: [],
            articles: []
          },
          {
            id: "repentance",
            name: "Arrependimento",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre arrependimento",
            children: [],
            articles: []
          },
          {
            id: "sanctification",
            name: "Santificação",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre santificação",
            children: [],
            articles: []
          },
          {
            id: "word-of-god",
            name: "Palavra de Deus",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre a Palavra de Deus",
            children: [],
            articles: []
          }
        ],
        articles: []
      }
    ],
    articles: []
  },
  {
    id: "practical-knowledge",
    name: "Conhecimentos Práticos",
    level: 1,
    description: "Informações e dicas práticas",
    children: [
      {
        id: "mathematical-concepts",
        name: "Conceitos Matemáticos",
        level: 2,
        parentId: "practical-knowledge",
        description: "Estudos sobre princípios e aplicações matemáticas",
        children: [],
        articles: ["math-secrets"]
      },
      {
        id: "financial-tips",
        name: "Dicas Financeiras",
        level: 2,
        parentId: "practical-knowledge",
        description: "Conselhos financeiros práticos",
        children: [],
        articles: ["tarifa-zero"]
      }
    ],
    articles: []
  }
];

// Article data
export const articles: Article[] = [
  {
    id: "salvacao-fe-e-esperanca",
    title: "Mensagem de Fé e Esperança",
    date: "September 10, 2023",
    summary: "Apresentamos a mensagem de Fé e Esperança que foi anunciada pelo apóstolo Pedro sobre a Salvação em Jesus Cristo. É muito importante que se tenha em mente que precisamos atender ao apelo do Espírito Santo e nos arrependermos e convertermos ao Senhor nosso Deus por meio do sacrifício remidor e resgatador suportado pelo Príncipe da Vida, Jesus Cristo.",
    url: "https://otaviotolentino.wordpress.com/2023/09/10/salvacao-fe-e-esperanca/",
    tags: ["Salvação", "Fé", "Esperança", "Jesus Cristo"],
    category: "Estudos"
  },
  {
    id: "salvacao-janela-de-oportunidade",
    title: "Janela de Oportunidade",
    date: "May 22, 2022",
    summary: "Ainda há uma Janela de oportunidade para salvação do homem diante de Deus. Vejamos os motivos pelos quais devemos aproveitá-la o quanto antes.",
    url: "https://otaviotolentino.wordpress.com/2022/05/22/salvacao-oportunidade/",
    tags: ["Salvação", "Oportunidade"],
    category: "Estudos"
  },
  {
    id: "salvacao-qual-o-preco",
    title: "Qual o preço?",
    date: "June 19, 2022",
    summary: "O ser humano dificilmente pensa sobre o custo da Salvação para Jesus e, consequentemente, qual é o preço que Deus cobraria de nós para obtermos a salvação da nossa alma.",
    url: "https://otaviotolentino.wordpress.com/2022/06/19/salvacao-preco/",
    tags: ["Salvação", "Preço"],
    category: "Estudos"
  },
  {
    id: "salvacao-so-em-jesus-cristo",
    title: "SÓ em JESUS CRISTO",
    date: "June 13, 2022",
    summary: "Não nos deixemos enganar mais por nenhuma outra afirmação e nem devemos perder mais tempo com outras artimanhas, que não a verdade. Nenhum outro nome há pelo qual devamos ser salvos.",
    url: "https://otaviotolentino.wordpress.com/2022/06/13/salvacao-jesus-cristo/",
    tags: ["Salvação", "Jesus Cristo"],
    category: "Estudos"
  },
  {
    id: "1-timothy",

    title: "Cartas de Paulo aos Colaboradores: 1 TIMÓTEO",
    date: "May 18, 2025",
    summary: "A Primeira Carta a Timóteo é uma das cartas pastorais de Paulo, escrita provavelmente em 64 d.C. Ela é endereçada a Timóteo, um jovem colaborador de Paulo, que estava encarregado de supervisionar a igreja em Éfeso.",
    url: "cartas-de-paulo-aos-colaboradores-1-timoteo",
    tags: ["Paulo", "Epístolas", "Timóteo", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "2-timothy",
    title: "Cartas de Paulo aos Colaboradores: 2 TIMOTEO",
    date: "June 1, 2025",
    summary: "A Segunda Carta a Timóteo é considerada a última carta escrita pelo apóstolo Paulo, provavelmente durante seu segundo aprisionamento em Roma, por volta de 66-67 d.C. Esta carta tem um tom pessoal e urgente, pois Paulo acredita que sua execução está próxima.",
    url: "cartas-de-paulo-aos-colaboradores-2-timoteo",
    tags: ["Paulo", "Epístolas", "Timóteo", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "tito",
    title: "Cartas de Paulo aos Colaboradores: TITO",
    date: "May 25, 2025",
    summary: "A Carta a Tito é uma das cartas pastorais de Paulo, escrita provavelmente entre 63-65 d.C. Ela é dirigida a Tito, um colaborador grego de Paulo, que estava encarregado de organizar e supervisionar as igrejas na ilha de Creta.",
    url: "cartas-de-paulo-aos-colaboradores-tito",
    tags: ["Paulo", "Epístolas", "Tito", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "philemon",
    title: "Cartas de Paulo aos Colaboradores: FILEMOM",
    date: "May 11, 2025",
    summary: "Escrita provavelmente durante o primeiro aprisionamento de Paulo em Roma, por volta de 60-62 d.C.. Esta carta aborda uma situação delicada envolvendo Filemom, um cristão proeminente e cooperador de Paulo, e Onésimo, seu escravo fugitivo que se converteu ao cristianismo através do ministério de Paulo.",
    url: "cartas-de-paulo-aos-colaboradores-filemom",
    tags: ["Paulo", "Epístolas", "Filemom", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "collaborators-intro",
    title: "Introdução Geral - Colaboradores",
    date: "May 4, 2025",
    summary: "Cartas de Paulo em geral, com foco especial nas cartas dirigidas aos seus colaboradores: Filemom, Timóteo e Tito.",
    url: "cartas-de-paulo-aos-colaboradores-introducao-geral",
    tags: ["Paulo", "Epístolas", "Colaboradores", "Timóteo", "Filemom", "Tito"],
    category: "Estudos"
  },
  {
    id: "hebreus",
    title: "Epístolas de Paulo às Igrejas: HEBREUS",
    date: "April 27, 2025",
    summary: "A Carta aos Hebreus é uma obra única no Novo Testamento, combinando exposição teológica profunda com exortação prática, escrita provavelmente por volta de 64-68 d.C. Dirigida a cristãos de origem judaica, a Epístola visa fortalecer a fé em Cristo diante de alertas para evitar a desobediência dos judeus e a perda do repouso prometido por Deus.",
    url: "epistolas-de-paulo-as-igrejas-hebreus",
    tags: ["Paulo", "Epístolas", "Hebreus", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "philippians",
    title: "Epístolas de Paulo às Igrejas: FILIPENSES",
    date: "April 20, 2025",
    summary: "A Carta aos Filipenses é um dos textos do apóstolo Paulo, escrita provavelmente durante seu primeiro aprisionamento em Roma, por volta de 61-62 d.C. Esta carta foi endereçada à igreja de Filipos, que ficava na Macedônia. A primeira igreja fundada por Paulo na Europa (Atos 16:11-40).",
    url: "epistolas-de-paulo-as-igrejas-filipenses",
    tags: ["Paulo", "Epístolas", "Filipenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "colossians",
    title: "Epístolas de Paulo às Igrejas: COLOSSENSES",
    date: "April 13, 2025",
    summary: "A Carta aos Colossenses é um dos textos do apóstolo Paulo, escrita provavelmente durante seu primeiro aprisionamento em Roma, por volta de 60-62 d.C. Esta carta foi endereçada à igreja de Colossos, uma cidade na região da Frígia, na Ásia Menor (atual Turquia).",
    url: "epistolas-de-paulo-as-igrejas-colossenses",
    tags: ["Paulo", "Epístolas", "Colossenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "ephesians",
    title: "Epístolas de Paulo às Igrejas: EFÉSIOS",
    date: "April 06, 2025",
    summary: "A Carta aos Efésios, atribuída ao apóstolo Paulo e escrita por volta de 60-62 d.C., é uma epístola profunda e inspiradora que aborda temas centrais da fé cristã. Éfeso localizava-se na região então chamada de Ásia Menor. Uma das cartas mais inspiradas de toda a Bíblia, por seu conteúdo doutrinária de extrema relevância. Paulo, nesse texto, faz um fantástico resumo de conceitos e doutrinas condensadas em apenas 6 capítulos. Apresenta Temas de extrema relevância e maturidade espiritual.",
    url: "epistolas-de-paulo-as-igrejas-efesios",
    tags: ["Paulo", "Epístolas", "Efésios", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "romans",
    title: "Epístolas de Paulo às Igrejas: ROMANOS",
    date: "March 30, 2025",
    summary: "A Carta aos Romanos, escrita pelo apóstolo Paulo por volta de 57 d.C., é considerada uma das mais profundas e influentes epístolas do Novo Testamento. Este texto apresenta uma exposição sistemática do evangelho e da doutrina cristã, abordando temas fundamentais como justificação pela fé, pecado, graça, santificação e o plano de Deus para judeus e gentios.",
    url: "epistolas-de-paulo-as-igrejas-romanos",
    tags: ["Paulo", "Epístolas", "Romanos", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "2-corinthians",
    title: "Epístolas de Paulo às Igrejas: 2 CORÍNTIOS",
    date: "March 23, 2025",
    summary: "A Segunda Carta aos Coríntios, escrita pelo apóstolo Paulo por volta de 55-56 d.C., é uma epístola profundamente pessoal e emocional. Ela revela o coração pastoral de Paulo e sua defesa apaixonada do ministério apostólico, ao mesmo tempo em que aborda questões cruciais sobre o serviço cristão, a reconciliação e a vida no Espírito.",
    url: "epistolas-de-paulo-as-igrejas-2-corintios",
    tags: ["Paulo", "Epístolas", "Coríntios", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "1-corinthians",
    title: "Epístolas de Paulo às Igrejas: 1 CORÍNTIOS",
    date: "March 16, 2025",
    summary: "A Primeira Carta aos Coríntios, escrita pelo apóstolo Paulo por volta de 55 d.C., é um texto pastoral endereçada à igreja de Corinto, na região da Acaia no sul da Grécia, uma comunidade cristã enfrentando diversos desafios espirituais e morais. Este texto oferece orientações práticas e doutrinárias para uma igreja em meio a uma cultura moralmente permissiva.",
    url: "epistolas-de-paulo-as-igrejas-1-corintios",
    tags: ["Paulo", "Epístolas", "Coríntios", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "2-thessalonians",
    title: "Epístolas de Paulo às Igrejas: 2 TESSALONICENSES",
    date: "March 09, 2025",
    summary: "A Segunda Carta aos Tessalonicenses, escrita pelo apóstolo Paulo pouco tempo após a primeira epístola, provavelmente por volta de 51-52 d.C., aborda questões escatológicas e práticas que surgiram na igreja de Tessalônica, na Macedônia. Esta carta visa corrigir mal-entendidos sobre a segunda vinda de Cristo e fornece orientações para a vida cristã em meio à expectativa do retorno do Senhor.",
    url: "epistolas-de-paulo-as-igrejas-2-tessalonicenses",
    tags: ["Paulo", "Epístolas", "Tessalonicenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "1-thessalonians",
    title: "Epístolas de Paulo às Igrejas: 1 TESSALONICENSES",
    date: "March 02, 2025",
    summary: "A Primeira Carta aos Tessalonicenses, escrita pelo apóstolo Paulo por volta de 50-51 d.C., é considerada uma das primeiras epístolas do Novo Testamento. Dirigida à igreja de Tessalônica, fundada por Paulo durante sua segunda viagem missionária.",
    url: "epistolas-de-paulo-as-igrejas-1-tessalonicenses",
    tags: ["Paulo", "Epístolas", "Tessalonicenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "galatians",
    title: "Epístolas de Paulo às Igrejas: GÁLATAS",
    date: "February 23, 2025",
    summary: "A Carta aos Gálatas, escrita pelo apóstolo Paulo por volta de 49 d.C., é uma das epístolas teologicamente mais intensas do Novo Testamento. Dirigida às igrejas da Galácia, este texto aborda questões cruciais sobre a natureza do evangelho, a justificação pela fé e a liberdade cristã.",
    url: "epistolas-de-paulo-as-igrejas-galatas",
    tags: ["Paulo", "Epístolas", "Gálatas", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "churches-intro",
    title: "EPÍSTOLAS de PAULO às IGREJAS: Introdução Geral",
    date: "February 16, 2025",
    summary: "As Cartas de Paulo são uma parte fundamental do Novo Testamento, oferecendo ensinamentos teológicos profundos e orientações práticas para as primeiras comunidades cristãs. Escritas pelo apóstolo Paulo, estas cartas abordam uma variedade de temas e questões enfrentadas pelos primeiros cristãos, fornecendo uma base sólida para a doutrina e prática cristãs.",
    url: "epistolas-de-paulo-as-igrejas-introducao-geral",
    tags: ["Paulo", "Epístolas", "Igrejas", "Introdução"],
    category: "Estudos"
  },
  {
    id: "conclusao-festas-judaicas",
    title: "FESTAS JUDAICAS: Conclusão",
    date: "September 29, 2024",
    summary: "As Festas Judaicas, instituídas por Deus no Antigo Testamento e ricas em significado no Novo Testamento, oferecem um panorama abrangente do plano redentor de Deus para a humanidade. Cada festa não apenas comemora eventos históricos cruciais, mas também aponta profeticamente para a obra de Cristo e para a esperança futura dos crentes.",
    url: "festas-judaicas-conclusao",
    tags: ["Festas Judaicas", "Bíblia", "Conclusão"],
    category: "Estudos"
  },
  {
    id: "tabernaculos-sukkot",
    title: "Festas Judaicas: 7. TABERNÁCULOS (SUKKOT)",
    date: "September 22, 2024",
    summary: "Sukkot em Hebraico significa Cabana, Tenda, Tabernáculo ou construção precária de moradia temporária. Era o que os nômades costumavam usar em suas peregrinações sobre a terra em busca de um ambiente com melhores condições de provisão que desse sustento para manutenção da vida das pessoas e seus animais.",
    url: "festas-judaicas-7-tabernaculos-sukkot",
    tags: ["Festas Judaicas", "Bíblia", "Sukkot"],
    category: "Estudos"
  },
  {
    id: "expiacao-yom-kippur",
    title: "Festas Judaicas: 6. EXPIAÇÃO (YOM KIPPUR)",
    date: "September 15, 2024",
    summary: "Yom Kippur, conhecido como o Dia da Expiação ou Dia do Perdão, é considerado o dia mais sagrado do calendário judaico. Esta festa única foca na expiação dos pecados, na reconciliação com Deus e na purificação espiritual para que possamos viver e andar na presença de Deus.",
    url: "festas-judaicas-6-expiacao-yom-kippur",
    tags: ["Festas Judaicas", "Bíblia", "Yom Kippur"],
    category: "Estudos"
  },
  {
    id: "trombetas-yom-teruah",
    title: "Festas Judaicas: 5. TROMBETAS (YOM TERUAH)",
    date: "September 08, 2024",
    summary: "Yom Teruah, também conhecida como Festa das Trombetas ou Rosh Hashanah (Ano Novo Judaico), é uma celebração única no calendário judaico. Esta festa marca o início do ano civil judaico e inicia os Dias Temíveis, um período de introspecção e arrependimento que culmina no Yom Kippur, dia da Expiação ou dia do Perdão.",
    url: "festas-judaicas-5-trombetas-yom-teruah",
    tags: ["Festas Judaicas", "Bíblia", "Yom Teruah"],
    category: "Estudos"
  },
  {
    id: "pentecostes-shavuot",
    title: "Festas Judaicas: 4. PENTECOSTES (SHAVUOT)",
    date: "September 01, 2024",
    summary: "Shavuot, também conhecida como Festa das Semanas ou Pentecostes, é uma das três festas de peregrinação no calendário judaico. Esta celebração marca o fim da colheita da cevada e o início da colheita do trigo, além de comemorar a entrega da Torá no Monte Sinai.",
    url: "festas-judaicas-4-pentecostes-shavuot",
    tags: ["Festas Judaicas", "Bíblia", "Shavuot"],
    category: "Estudos"
  },
  {
    id: "primicias-hag-habikkurim",
    title: "Festas Judaicas: 3. PRIMÍCIAS (HAG HABIKKURIM)",
    date: "August 25, 2024",
    summary: "Bikkurim, ou a Festa das Primícias, é uma celebração única no calendário judaico que marca o início da colheita da cevada e expressa gratidão a Deus pela abundância da terra. Esta festa carrega um profundo significado espiritual e profético, apontando para a ressurreição de Jesus Cristo.",
    url: "festas-judaicas-3-primicias-hag-habikkurim",
    tags: ["Festas Judaicas", "Bíblia", "Primícias"],
    category: "Estudos"
  },
  {
    id: "paes-azimos-hag-hamatzot",
    title: "Festas Judaicas: 2. PÃES ÁZIMOS (HAG HAMATZOT)",
    date: "August 18, 2024",
    summary: "Hag HaMatzot, ou a Festa dos Pães Ázimos, é uma celebração intimamente ligada ao Pessach (Páscoa), ocorrendo imediatamente após esta. Esta festa enfatiza a importância da pureza e da santidade na vida do povo de Deus, utilizando o simbolismo do pão sem fermento.",
    url: "festas-judaicas-2-paes-azimos-hag-hamatzot",
    tags: ["Festas Judaicas", "Bíblia", "Pães Ázimos"],
    category: "Estudos"
  },
  {
    id: "pascoa-pessach",
    title: "Festas Judaicas: 1. PÁSCOA (PESSACH)",
    date: "August 11, 2024",
    summary: "Esta festa comemora a libertação do povo de Israel da escravidão no Egito e carrega profundas implicações espirituais e proféticas que se estendem até o Novo Testamento. E o sacrifício do cordeiro imaculado serviria de sinal entre o Povo de Israel, para que soubessem como eles seriam resgatados diante de Deus e se lembrassem disso para sempre.",
    url: "festas-judaicas-1-pascoa-pessach",
    tags: ["Festas Judaicas", "Bíblia", "Páscoa"],
    category: "Estudos"
  },
  {
    id: "jewish-feasts-intro",
    title: "FESTAS JUDAICAS: Introdução Geral",
    date: "August 04, 2024",
    summary: "As festas judaicas são celebrações fundamentais na fé e cultura do povo judeu, estabelecidas por Deus no Antigo Testamento e carregadas de significado profético e espiritual. Essas festas não apenas comemoram eventos históricos cruciais na jornada do povo de Israel, mas também apontam para o plano redentor de Deus, culminando no Messias.",
    url: "festas-judaicas-introducao-geral",
    tags: ["Festas Judaicas", "Bíblia", "Introdução"],
    category: "Estudos"
  },
  {
    id: "math-secrets",
    title: "SEGREDOS MATEMÁTICOS sobre QUADRADO, RAIZ QUADRADA e PROVA do TEOREMA de PITÁGORAS resolvidos através de VISUALIZAÇÃO GRÁFICA",
    date: "December 1, 2024",
    summary: "Uma exploração de conceitos matemáticos relacionados a quadrados, raízes quadradas e o teorema de Pitágoras, usando visualização gráfica para tornar esses conceitos mais acessíveis e compreensíveis.",
    url: "https://otaviotolentino.wordpress.com/2024/12/01/square-square-root-pythagoras-claude-ai-subjected-to-god-en/",
    tags: ["Matemática", "Teorema de Pitágoras", "Visualização"],
    category: "Dicas Úteis"
  },
  {
    id: "tarifa-zero",
    title: "TARIFA ZERO no seu Banco",
    date: "November 15, 2024",
    summary: "Conselhos práticos sobre como evitar taxas bancárias no Brasil, com base na Resolução 3.919/2010 do Banco Central. O artigo fornece informações legais e passos práticos para os leitores economizarem dinheiro em serviços bancários.",
    url: "https://otaviotolentino.wordpress.com/2021/12/11/tarifa-zero/",
    tags: ["Finanças", "Bancos", "Economia"],
    category: "Dicas Úteis"
  }
];

// Generate connections for mindmap visualization
export interface Connection {
  source: string;
  target: string;
  value: number; // Strength of connection
}

// Flatten themes to easily find by ID
const allThemes: { [key: string]: Theme } = {};
const flattenThemes = (themes: Theme[]) => {
  themes.forEach(theme => {
    allThemes[theme.id] = theme;
    flattenThemes(theme.children);
  });
};
flattenThemes(themes);

// Helper function to get articles for a theme and its children
export const getArticlesForTheme = (themeId: string): Article[] => {
  const theme = allThemes[themeId];
  if (!theme) return [];
  
  let articleIds: string[] = [...theme.articles];
  
  const collectChildArticles = (children: Theme[]) => {
    children.forEach(child => {
      articleIds = [...articleIds, ...child.articles];
      collectChildArticles(child.children);
    });
  };
  
  collectChildArticles(theme.children);
  
  // Remove duplicates and map IDs to actual articles
  const uniqueArticleIds = [...new Set(articleIds)];
  return uniqueArticleIds.map(id => articles.find(a => a.id === id)).filter(a => a !== undefined) as Article[];
};

// Helper function to find a theme by ID
export const findThemeById = (themeId: string): Theme | undefined => {
  return allThemes[themeId];
};

// Generate connections based on theme hierarchy and article links
export const connections: Connection[] = [];

// Theme-to-Theme connections (Parent-Child)
const addThemeConnections = (themeList: Theme[]) => {
  themeList.forEach(theme => {
    if (theme.parentId) {
      connections.push({ source: theme.parentId, target: theme.id, value: 2 });
    }
    addThemeConnections(theme.children);
  });
};
addThemeConnections(themes);

// Theme-to-Article connections
Object.values(allThemes).forEach(theme => {
  theme.articles.forEach(articleId => {
    connections.push({ source: theme.id, target: articleId, value: 1 });
  });
});

// Article-to-Article connections (based on shared tags or themes - simple example)
articles.forEach((article1, i) => {
  articles.slice(i + 1).forEach(article2 => {
    const sharedTags = article1.tags.filter(tag => article2.tags.includes(tag));
    if (sharedTags.length > 0) {
      // Optional: Add article-to-article links if needed
      // connections.push({ source: article1.id, target: article2.id, value: sharedTags.length * 0.5 });
    }
  });
});

// Helper function to get related articles (simple: same theme)
export const getRelatedArticles = (articleId: string): Article[] => {
  let parentThemeId: string | null = null;
  for (const theme of Object.values(allThemes)) {
    if (theme.articles.includes(articleId)) {
      parentThemeId = theme.id;
      break;
    }
  }
  
  if (!parentThemeId) return [];
  
  const themeArticles = getArticlesForTheme(parentThemeId);
  return themeArticles.filter(a => a.id !== articleId);
};

// Helper function for search
export const searchArticles = (query: string): Article[] => {
  const lowerCaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerCaseQuery) ||
    article.summary.toLowerCase().includes(lowerCaseQuery) ||
    (article.content && article.content.toLowerCase().includes(lowerCaseQuery)) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
};

