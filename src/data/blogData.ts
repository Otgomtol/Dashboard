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
  id: "Living-Waters",
  name: "Águas Vivas Correm",
  level: 0,
  description: "Blog de Origem",
  children: [
  {
    id: "biblical-studies",
    name: "Estudos Bíblicos",
    level: 1,
    parentId: "Living-Waters",
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
            name: "Introdução Geral",
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
            name: "Conclusão",
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
                name: "Introdução Geral",
                level: 4,
                parentId: "letters-to-churches",
                description: "Introdução geral às cartas de Paulo às igrejas.",
                children: [],
                articles: ["churches-intro"]
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
                id: "romans",
                name: "Romanos",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta de Paulo aos Romanos",
                children: [],
                articles: ["romans"]
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
                id: "colossians",
                name: "Colossenses",
                level: 4,
                parentId: "letters-to-churches",
                description: "Estudos sobre a carta de Paulo aos Colossenses",
                children: [],
                articles: ["colossians"]
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
                name: "Introdução Geral",
                level: 4,
                parentId: "letters-to-collaborators",
                description: "Introdução geral às cartas de Paulo aos seus colaboradores.",
                children: [],
                articles: ["collaborators-intro"]
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
            children: [
                  {
                    id: "aboliu-a-morte",
                    name: "Aboliu a Morte",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre como Jesus aboliu a morte.",
                    children: [],
                    articles: ["aboliu-a-morte"]
                  },
                  {
                    id: "batismo",
                    name: "Batismo",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre o batismo de Jesus.",
                    children: [],
                    articles: ["batismo"]
                  },
                  {
                    id: "chamado-nazareno",
                    name: "Chamado Nazareno",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre por que Jesus foi chamado de Nazareno.",
                    children: [],
                    articles: ["chamado-nazareno"]
                  },
                  {
                    id: "dia-da-ressurreicao",
                    name: "Dia da Ressurreição",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre o dia da ressurreição de Jesus.",
                    children: [],
                    articles: ["dia-da-ressurreicao"]
                  },
                  {
                    id: "dia-e-hora",
                    name: "Dia e Hora",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre o dia e a hora da volta de Jesus.",
                    children: [],
                    articles: ["dia-e-hora"]
                  },
                  {
                    id: "genealogia",
                    name: "Genealogia",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre a genealogia de Jesus.",
                    children: [],
                    articles: ["genealogia"]
                  },
                  {
                    id: "haja-luz",
                    name: "Haja Luz",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre Haja Luz.",
                    children: [],
                    articles: ["haja-luz"]
                  },
                  {
                    id: "levantado-na-cruz",
                    name: "Levantado na Cruz",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre Jesus sendo levantado na cruz.",
                    children: [],
                    articles: ["levantado-na-cruz"]
                  },
                  {
                    id: "levou-nossos-pecados",
                    name: "Levou Nossos Pecados",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre como Jesus levou nossos pecados.",
                    children: [],
                    articles: ["levou-nossos-pecados"]
                  },
                  {
                    id: "natureza-em-3-etapas",
                    name: "Natureza em 3 Etapas",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre a natureza de Cristo em 3 etapas.",
                    children: [],
                    articles: ["natureza-em-3-etapas"]
                  },
                  {
                    id: "nome",
                    name: "Nome",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre o nome de Jesus.",
                    children: [],
                    articles: ["nome"]
                  },
                  {
                    id: "ordem-melquisedeque",
                    name: "Ordem Melquisedeque",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre Jesus e a ordem de Melquisedeque.",
                    children: [],
                    articles: ["ordem-melquisedeque"]
                  },
                  {
                    id: "palavra-de-deus",
                    name: "Palavra de Deus",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre Jesus como a Palavra de Deus.",
                    children: [],
                    articles: ["palavra-de-deus"]
                  },
                  {
                    id: "pedra-da-igreja",
                    name: "Pedra da Igreja",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre a pedra da igreja.",
                    children: [],
                    articles: ["pedra-da-igreja"]
                  },
                  {
                    id: "siga-jesus",
                    name: "Siga Jesus",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre seguir Jesus.",
                    children: [],
                    articles: ["siga-jesus"]
                  },
                  {
                    id: "templo-restaurado",
                    name: "Templo Restaurado",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre Jesus como o templo restaurado.",
                    children: [],
                    articles: ["templo-restaurado"]
                  },
                  {
                    id: "tentacao-no-deserto",
                    name: "Tentação no Deserto",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre a tentação de Jesus no deserto.",
                    children: [],
                    articles: ["tentacao-no-deserto"]
                  },
                  {
                    id: "primeira-profecia",
                    name: "Primeira Profecia",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre a primeira profecia de Jesus em Gênesis.",
                    children: [],
                    articles: ["primeira-profecia"]
                  },
                  {
                    id: "ministerio-aos-30",
                    name: "Ministério aos 30",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre o ministério de Jesus aos 30 anos.",
                    children: [],
                    articles: ["ministerio-aos-30"]
                  },
                  {
                    id: "paz",
                    name: "Paz",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre a paz que Jesus oferece.",
                    children: [],
                    articles: ["paz"]
                  },
                  {
                    id: "moradas-foi-preparar",
                    name: "Moradas foi Preparar",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Muitos cristãos ainda não entenderam que essas moradas são lugares para que os seus seguidores estivessem para sempre com ele.",
                    children: [],
                    articles: ["moradas-foi-preparar"]
                  },
                  {
                    id: "levou-o-cativeiro",
                    name: "Levou o Cativeiro",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Artigo sobre Jesus ter levado cativo o cativeiro.",
                    children: [],
                    articles: ["levou-o-cativeiro"]
                  },
                  {
                    id: "nossa-pascoa",
                    name: "Nossa Páscoa",
                    level: 4,
                    parentId: "jesus-christ",
                    description: "Para entendermos a revelação desse mistério de Deus e podermos torná-lo claro, precisamos olhar para o conteúdo do Evangelho de João de maneira abrangente e completa, considerando todo o contexto apresentado no livro do princípio até o fim.",
                    children: [],
                    articles: ["nossa-pascoa"]
                  }
                ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },
          {
            id: "deus",
            name: "Deus",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Deus",
            children: [
              {
                id: "aliancas",
                name: "Alianças",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre as alianças de Deus com os homens.",
                children: [],
                articles: ["aliancas"]
              },
              {
                id: "coracao-preparado",
                name: "Coração Preparado",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre ter um coração preparado para Deus.",
                children: [],
                articles: ["coracao-preparado"]
              },
              {
                id: "descendencia",
                name: "Descendência",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre a descendência para Deus.",
                children: [],
                articles: ["descendencia"]
              },
              {
                id: "honrar",
                name: "Honrar",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre como honrar a Deus.",
                children: [],
                articles: ["honrar"]
              },
              {
                id: "justica",
                name: "Justiça",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre a justiça de Deus.",
                children: [],
                articles: ["justica"]
              },
              {
                id: "nome-de-deus",
                name: "Nome de Deus",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre o nome de Deus.",
                children: [],
                articles: ["nome-de-deus"]
              },
              {
                id: "oracao-do-pai",
                name: "Oração do Pai",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre a Oração do Pai Nosso.",
                children: [],
                articles: ["oracao-do-pai"]
              },
              {
                id: "perdao-diario",
                name: "Perdão Diário",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre o perdão diário.",
                children: [],
                articles: ["perdao-diario"]
              },
              {
                id: "quem-viu",
                name: "Quem viu",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre quem viu a Deus.",
                children: [],
                articles: ["quem-viu"]
              },
              {
                id: "reis-e-sacerdotes",
                name: "Reis e Sacerdotes",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre sermos reis e sacerdotes para Deus.",
                children: [],
                articles: ["reis-e-sacerdotes"]
              },
              {
                id: "sacrificio-de-louvor",
                name: "Sacrifício de Louvor",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre o sacrifício de louvor a Deus.",
                children: [],
                articles: ["sacrificio-de-louvor"]
              },
              {
                id: "sangue-clama",
                name: "Sangue Clama",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre o sangue que clama diante de Deus.",
                children: [],
                articles: ["sangue-clama"]
              },
              {
                id: "visitacao",
                name: "Visitação",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre a visitação de Deus.",
                children: [],
                articles: ["visitacao"]
              },
              {
                id: "viver-da-palavra",
                name: "Viver da Palavra",
                level: 4,
                parentId: "deus",
                description: "Artigo sobre viver da Palavra de Deus.",
                children: [],
                articles: ["viver-da-palavra"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },
          {
            id: "paul",
            name: "Paulo",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados no Apóstolo Paulo",
            children: [
              {
                id: "assinatura-cartas",
                name: "Assinatura Cartas",
                level: 4,
                parentId: "paul",
                description: "Uma característica interessante em todas as Cartas ou Epístolas de Paulo, que na verdade se torna sua marca, e deveria servir como parâmetro de avaliação se o documento tem origem autoral da parte de Paulo é a sua assinatura.",
                children: [],
                articles: ["assinatura-cartas"]
              },
              {
                id: "autor-hebreus",
                name: "Autor Hebreus",
                level: 4,
                parentId: "paul",
                description: "Segue análise sobre o texto do Livro de Hebreus, utilizando critério de comparação com todos os outros textos considerados, irrefutavelmente, como sendo de autoria do apóstolo Paulo.",
                children: [],
                articles: ["autor-hebreus"]
              },
              {
                id: "carta-laodicenses",
                name: "Carta Laodicenses",
                level: 4,
                parentId: "paul",
                description: "Surpreenda-se com a leitura completa desse Artigo sobre a Carta aos Laodicenses: Correção de Destinatário e através dos textos bíblicos descubra sobre esse encontro?",
                children: [],
                articles: ["carta-laodicenses"]
              },
              {
                id: "pedro-redesignado",
                name: "Pedro Redesignado",
                level: 4,
                parentId: "paul",
                description: "Pedro não estava cumprindo bem a tarefa dada a ele por Jesus, por isso fez-se necessário a redesignação do Ministério da Ciruncisão de Pedro para Paulo.",
                children: [],
                articles: ["pedro-redesignado"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },
          {
            id: "moses",
            name: "Moisés",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Moisés",
            children: [
              {
                id: "impedido",
                name: "Impedido",
                level: 4,
                parentId: "moses",
                description: "Por que DEUS impediu Moisés de entrar na Terra Prometida? Leia o Artigo completo para saber a resposta.",
                children: [],
                articles: ["impedido"]
              },
              {
                id: "pentecostes",
                name: "Pentecostes",
                level: 4,
                parentId: "moses",
                description: "Estamos falando de eventos específicos em que ocorreram a distribuição do Espírito Santo, como promessa de Deus, para uma quantidade específica de pessoas do povo de Israel.",
                children: [],
                articles: ["pentecostes"]
              },
              {
                id: "profecia-jesus",
                name: "Profecia Jesus",
                level: 4,
                parentId: "moses",
                description: "Artigo sobre a profecia de Moisés a respeito de Jesus.",
                children: [],
                articles: ["profecia-jesus"]
              },
              {
                id: "peso-da-lideranca",
                name: "Peso da Liderança",
                level: 4,
                parentId: "moses",
                description: "A pressão era extrema e Moisés não aguentou a carga de liderança, dada por Deus, na condução do Povo de Israel da saída do Egito até a entrada na Terra prometida. Mesmo Moisés, tendo recebido capacitação espiritual de Deus para exercê-la, pede a Deus que reduza sua responsabilidade perante o Povo.",
                children: [],
                articles: ["peso-da-lideranca"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },
          {
            id: "abraham",
            name: "Abraão",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Abraão",
            children: [
              {
                id: "profetizou-jesus",
                name: "Profetizou Jesus",
                level: 4,
                parentId: "abraham",
                description: "Será que Deus realmente queria que Abraão sacrificasse o seu único filho de verdade? Veremos qual a verdadeira intenção de Deus ao pedir que Abraão sacrificasse seu Filho único.",
                children: [],
                articles: ["profetizou-jesus"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },
          {
            id: "jo",
            name: "Jó",
            level: 3,
            parentId: "biblical-figures",
            description: "Estudos focados em Jó",
            children: [
              {
                id: "origem-periodo",
                name: "Origem/Período",
                level: 4,
                parentId: "jo",
                description: "Há muito tempo nos perguntamos qual a origem de Jó? E qual o seu tempo ou momento dentro da cronologia da Bíblia? É o que analisamos.",
                children: [],
                articles: ["origem-periodo"]
              },
              {
                id: "sabio-davi-salomao",
                name: "Sábio Davi/Salomão",
                level: 4,
                parentId: "jo",
                description: "Até onde vai a sabedoria de Jó? Será que sua sabedoria, exposta expressamente nos capítulos do seu Livro, merece o mesmo grau de reconhecimento da sabedoria apresentada por Davi e seu filho Salomão?",
                children: [],
                articles: ["sabio-davi-salomao"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          }
        ].sort((a, b) => a.name.localeCompare(b.name)),
        articles: []
      },
      {
        id: "apocalypse",
        name: "Apocalipse",
        level: 2,
        parentId: "biblical-studies",
        description: "Estudos sobre o Livro de Apocalipse",
        children: [
          {
            id: "arrebatamento",
            name: "Arrebatamento",
            level: 3,
            parentId: "apocalypse",
            description: "Será que a doutrina do Arrebatamento Antecipado da Igreja, antes da Tribulação, está prevista em Apocalipse ou na Bíblia?f",
            children: [],
            articles: ["arrebatamento"]
          },
          {
            id: "livrar-da-ira",
            name: "Livrar da Ira",
            level: 3,
            parentId: "apocalypse",
            description: "Esse Dia será crucial, pois nele ocorrerá a Vinda de Jesus onde ele pisará o lagar da Ira de Deus, previsto no final dos capítulos 14 e 19 do livro de Apocalipse. Ainda, sendo mais específico, é o dia da Volta de Cristo e não os dias que antecedem sua volta e nem os dias posteriores.",
            children: [],
            articles: ["livrar-da-ira"]
          },
          {
            id:  "operacao-do-erro",
            name: "Operação do Erro",
            level: 3,
            parentId: "apocalypse",
            description: "Muita gente se admira e se pergunta como alguém seria enganado com mentira? Pois é, parece admirável que assim aconteça, mas é assim mesmo que vai acontecer e vai enganar muita gente e até muitos que se dizem cristãos.",
            children: [],
            articles: ["operacao-do-erro"]
          },		
          {
            id: "apocalypse-audiovisual",
            name: "Audiovisual",
            level: 3,
            parentId: "apocalypse",
            description: "Estudo do Livro de Apocalipse em 34 Vídeos. Podcast e mais.",
            children: [],
            articles: ["apocalypse-audiovisual"]
          },
          {
            id: "apocalypse-book-commented",
            name: "Livro Comentado",
            level: 3,
            parentId: "apocalypse",
            description: `Livro "APOCALIPSE. Entendendo a Revelação de Jesus Cristo: Comentários e Mistérios Revelados". Solicite agora e aproveite essa oportunidade única de conhecer e entender a revelação dos mistérios do Livro Apocalipse.`,
            children: [],
            articles: ["apocalypse-book-commented"]
          },
          {
            id: "apocalypse-author-prophetized",
            name: "Autor Profetizado",
            level: 3,
            parentId: "apocalypse",
            description: "Em uma das profecias de Jesus sobre a sua volta Ele acaba revelando quem seria o autor do Livro de Apocalipse. Você já tinha se apercebido disso quando fez a leitura desse texto em João 21?",
            children: [],
            articles: ["apocalypse-author-prophetized"]
          },
		  {
			id: "dar-gloria",
			name: "Dar Glória a Deus",
			level: 3,
			parentId: "apocalypse",
			description: "Artigo sobre dar glória a Deus.",
			children: [],
			articles: ["dar-gloria"]
		  },
		  {
			id: "culpados-pelo-sangue",
			name: "Culpados pelo Sangue",
			level: 3,
			parentId: "apocalypse",
			description: "Artigo sobre os culpados pelo sangue de Jesus.",
			children: [],
			articles: ["culpados-pelo-sangue"]
		  },
          {
            id: "babilonia",
            name: "Babilônia",
            level: 3,
            parentId: "apocalypse",
            description: "Estudos sobre a Babilônia do Apocalipse.",
            children: [
              {
                id: "babilonia-anunciada-por-jesus",
                name: "Anunciada por Jesus",
                level: 4,
                parentId: "babilonia",
                description: "Há diversos relatos de Jesus, em todo o Evangelho de Mateus e outros livros, que nos apontam para o entendimento de qual é a babilônia do Apocalipse e os motivos.",
                children: [],
                articles: ["babilonia-anunciada-por-jesus"]
              },
              {
                id: "babilonia-declarada-por-pedro",
                name: "Declarada por Pedro",
                level: 4,
                parentId: "babilonia",
                description: "Precisamos entender alguns outros aspectos para saber qual era esse lugar físico, chamado babilônia, e que já existia na época de Pedro e conhecido por todos os apóstolos e irmãos da época.",
                children: [],
                articles: ["babilonia-declarada-por-pedro"]
              },
              {
                id: "babilonia-revelacao-biblica",
                name: "Revelação Bíblica",
                level: 4,
                parentId: "babilonia",
                description: "Será revelado o nome da grande cidade de babilônia citada em Apocalipse. E não é o que todos costumam pensar ou dizer, porém essa resposta está anunciada clara e explicitamente nos textos bíblicos, portanto é entendimento espiritual.",
                children: [],
                articles: ["babilonia-revelacao-biblica"]
              },
              {
                id: "babilonia-sai-dela",
                name: "Sai dela",
                level: 4,
                parentId: "babilonia",
                description: "Sai dela, povo meu, para que não sejas participante dos seus pecados, e para que não incorras nas suas pragas.",
                children: [],
                articles: ["babilonia-sai-dela"]
              },
              {
                id: "babilonia-volta-a-origem",
                name: "Volta à Origem",
                level: 4,
                parentId: "babilonia",
                description: "Que origem será essa? Quase ninguém se lembra mais do lugar do nascimento do Povo de Israel. Qual a importância desse entendimento para sabermos quem é a babilônia do Apocalipse?",
                children: [],
                articles: ["babilonia-volta-a-origem"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          }
        ].sort((a, b) => a.name.localeCompare(b.name)),
        articles: []
      },
      {
        id: "pdfs-gratis",
        name: "Pdf's Grátis",
        level: 2,
        parentId: "biblical-studies",
        description: "Arquivos em formato 'Pdf' que estão disponíveis para serem baixados gratuitamente.",
        children: [],
        articles: ["pdfs-gratis"]
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
                name: "Só em Jesus Cristo",
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
                name: "Janela Oportunidade",
                level: 4,
                parentId: "salvation",
                description: "Artigo sobre a janela de oportunidade para a salvação.",
                children: [],
                articles: ["salvacao-janela-de-oportunidade"]
              },
              {
                id: "salvacao-fe-e-esperanca",
                name: "Fé e Esperança",
                level: 4,
                parentId: "salvation",
                description: "Artigo sobre a mensagem de fé e esperança.",
                children: [],
                articles: ["salvacao-fe-e-esperanca"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },
          {
            id: "localidade",
            name: "Localidade",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre localidades bíblicas.",
            children: [
              {
                id: "salem",
                name: "Salém",
                level: 4,
                parentId: "localidade",
                description: "Artigo sobre a cidade de Salém.",
                children: [],
                articles: ["salem"]
              },
              {
                id: "jebus",
                name: "Jebus",
                level: 4,
                parentId: "localidade",
                description: "Artigo sobre a cidade de Jebus.",
                children: [],
                articles: ["jebus"]
              },
              {
                id: "zelza",
                name: "Zelza ou Tzeltzach",
                level: 4,
                parentId: "localidade",
                description: "Artigo sobre o lugar da morte e sepultamento de Raquel.",
                children: [],
                articles: ["zelza"]
              },
              {
                id: "efrata",
                name: "Efrata",
                level: 4,
                parentId: "localidade",
                description: "Artigo sobre a origem de Efraim ou Efrata.",
                children: [],
                articles: ["efrata"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },		  
          {
            id: "biblical-terms",
            name: "Termos Bíblicos",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre termos bíblicos específicos.",
            children: [
              {
                id: "hosana",
                name: "Hosana",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre o termo Hosana.",
                children: [],
                articles: ["hosana"]
              },
              {
                id: "jedidiah",
                name: "Jedidiah",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre o termo Jedidiah.",
                children: [],
                articles: ["jedidiah"]
              },
              {
                id: "jesurun",
                name: "Jesurun",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre o termo Jesurun.",
                children: [],
                articles: ["jesurun"]
              },
              {
                id: "aleluia",
                name: "Aleluia",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre o termo Aleluia.",
                children: [],
                articles: ["aleluia"]
              },
              {
                id: "raabe-racabe",
                name: "Raabe ou Racabe",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre a distinção entre Raabe e Racabe.",
                children: [],
                articles: ["raabe-racabe"]
              },
              {
                id: "a-tua-paz-pertence",
                name: "À tua Paz Pertence",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre a expressão 'o que à tua paz pertence'.",
                children: [],
                articles: ["a-tua-paz-pertence"]
              },
              {
                id: "soberba-e-as-trevas",
                name: "Soberba e as Trevas",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre a relação entre soberba e trevas.",
                children: [],
                articles: ["soberba-e-as-trevas"]
              },
              {
                id: "nao-peques-mais",
                name: "Não Peques mais",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre a expressão 'vai e não peques mais'.",
                children: [],
                articles: ["nao-peques-mais"]
              },
              {
                id: "fe-salvou-ou-curou",
                name: "Fé Salvou ou Curou",
                level: 4,
                parentId: "biblical-terms",
                description: "Artigo sobre a relação entre fé, salvação e cura.",
                children: [],
                articles: ["fe-salvou-ou-curou"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },		  
		  {
            id: "discipleship",
            name: "Discipulado",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre o discipulado cristão.",
            children: [
              {
                id: "discipulo-missoes",
                name: "Discípulo/Missões",
                level: 4,
                parentId: "discipleship",
                description: "Repercussão desta Obra de Deus sobre toda a face da Terra; alcançando, por enquanto, mais de 90 Países, somando mais de 48.000 visitações ao Blog 'ÁGUAS VIVAS QUE CORREM MANSAMENTE' até 2025.",
                children: [],
                articles: ["discipulo-missoes"]
              },
              {
                id: "passo-a-passo",
                name: "Passo a Passo",
                level: 4,
                parentId: "discipleship",
                description: "Aspectos fundamentais do discipulado cristão descritos passo a passo. Baseando-nos nos textos Bíblicos do Novo Testamento, podemos identificar vários aspectos cruciais do discipulado.",
                children: [],
                articles: ["passo-a-passo"]
              },
              {
                id: "bem-aventurancas",
                name: "Bem-Aventuranças",
                level: 4,
                parentId: "discipleship",
                description: "As Bem-Aventuranças, como todo o resto do sermão do Monte, faziam parte dos ensinamentos de Jesus sobre o Reino de Deus e como aqueles que queriam segui-lo deveriam se comportar.",
                children: [],
                articles: ["bem-aventurancas"]
              },
              {
                id: "lava-pes",
                name: "Lava Pés",
                level: 4,
                parentId: "discipleship",
                description: "O que será que Cristo quis ensinar quando transmitiu essa doutrina para os seus discípulos e ainda disse que deveriam repetir?",
                children: [],
                articles: ["lava-pes"]
              },
              {
                id: "verdade-libertara",
                name: "Verdade Libertará",
                level: 4,
                parentId: "discipleship",
                description: "Esta frase, dita por Jesus, é tão manipulada por oportunistas que a utilizam fora do contexto e, por isso, nem eles mesmos conseguem entender e, muito menos, manifestar seu real significado. Vamos aproveitar para refletir sobre esse tema extremamente relevante e entender, afinal, o quê Jesus quis dizer com essa afirmação.",
                children: [],
                articles: ["verdade-libertara"]
              },
              {
                id: "somos-deuses",
                name: "Somos deuses",
                level: 4,
                parentId: "discipleship",
                description: "Jesus manifesta abertamente que os santificados e enviados por Deus são Filhos de Deus, logo são deuses. Será que essa afirmação de Jesus tem a ver conosco?",
                children: [],
                articles: ["somos-deuses"]
              },
              {
                id: "perseveranca-fe",
                name: "Perseverança Fé",
                level: 4,
                parentId: "discipleship",
                description: "A 'paciência ou perseverança de Jesus ou dos santos' é uma expressão que perpassa todo o Novo Testamento, revelando um dos aspectos mais fundamentais da fé cristã: a necessidade de permanecermos firmes até o fim.",
                children: [],
                articles: ["perseveranca-fe"]
              },
              {
                id: "viver-por-jesus",
                name: "Viver por Jesus",
                level: 4,
                parentId: "discipleship",
                description: "Há muito tempo que o crente tenta entender como fazer para viver por meio de Cristo, assim como Jesus Cristo vivia por meio do PAI.",
                children: [],
                articles: ["viver-por-jesus"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          },
          {
            id: "erva-seca",
            name: "Erva Seca",
            level: 3,
            parentId: "biblical-concepts",
            description: "Estudos sobre a Erva Seca, a Palavra Eterna, a Árvore de Vida e o Manancial.",
            children: [
              {
                id: "palavra-eterna",
                name: "1. Palavra Eterna",
                level: 4,
                parentId: "erva-seca",
                description: "Seca-se a erva, murcha e cai a flor, porém a palavra de nosso Deus subsiste eternamente.",
                children: [],
                articles: ["palavra-eterna"]
              },
              {
                id: "arvore-de-vida",
                name: "2. Árvore de Vida",
                level: 4,
                parentId: "erva-seca",
                description: "Os nascidos de semente incorruptível somos feitos novas criaturas para viver eternamente. Afirmamos que nos tornamos e somos assim chamados de Árvores de Vida, que dão frutos de justiça, agradáveis a Deus e duram para sempre.",
                children: [],
                articles: ["arvore-de-vida"]
              },
              {
                id: "manancial",
                name: "3. Manancial",
                level: 4,
                parentId: "erva-seca",
                description: "Após o nascimento espiritual, devemos nos alimentar pela Palavra de Deus a ser guardada em nossos corações para a obediência da fé. A Palavra de Deus é Espírito e Vida. Deus é a fonte da Vida, o manancial de águas vivas.",
                children: [],
                articles: ["manancial"]
              }
            ].sort((a, b) => a.name.localeCompare(b.name)),
            articles: []
          }
        ].sort((a, b) => a.name.localeCompare(b.name)),
        articles: []
      }
    ].sort((a, b) => a.name.localeCompare(b.name)),
    articles: []
  },
  {
    id: "practical-knowledge",
    name: "Conhec. Práticos",
    level: 1,
    parentId: "Living-Waters",	
    description: "Informações e dicas práticas",
    children: [
      {
        id: "math-secrets",
        name: "Segredos Matemáticos",
        level: 2,
        parentId: "practical-knowledge",
        description: "Estudos sobre princípios e aplicações matemáticas",
        children: [],
        articles: ["math-secrets"]
      },
      {
        id: "tarifa-zero",
        name: "Dicas Financeiras",
        level: 2,
        parentId: "practical-knowledge",
        description: "Conselhos financeiros práticos",
        children: [],
        articles: ["tarifa-zero"]
      }
    ].sort((a, b) => a.name.localeCompare(b.name)),
    articles: []
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    level: 1,
    parentId: "Living-Waters",	
    description: "Ferramentas e utilitários para análise e estudo.",
    children: [
      {
        id: "analise-de-textos",
        name: "Análise de textos",
        level: 2,
        parentId: "ferramentas",
        description: "Ferramentas para análise de textos digitais.",
        children: [],
        articles: ["analise-de-textos"]
      }
    ],
    articles: []
  },
 ],
 articles: []
 }  
];

// Article data
export const articles: Article[] = [
  {
    id: "analise-de-textos",
    title: "Análise de textos",
    date: "2023-11-28",
    summary: "A equipe Voyant Tools disponibiliza a ferramenta de modo púbico, livre e gratuito; porém, o conteúdo ou o texto a ser lido ou analisado é inserido por qualquer um que quiser fazer uso da ferramenta.",
    url: "https://otaviotolentino.wordpress.com/2023/11/28/analise-textos-digitais/",
    tags: ["Ferramentas", "Análise de Texto", "Voyant Tools"],
    category: "Ferramentas"
  },
  {
    id: "arrebatamento",
    title: "Arrebatamento",
    date: "2022-06-26",
    summary: "Será que a doutrina do Arrebatamento Antecipado da Igreja, antes da Tribulação, está prevista em Apocalipse ou na Bíblia?",
    url: "https://otaviotolentino.wordpress.com/2022/06/26/arrebatamento-antecipado/",
    tags: ["Apocalipse", "Arrebatamento", "Tribulação"],
    category: "Estudos"
  },
  {
    id: "livrar-da-ira",
    title: "Livrar da Ira",
    date: "2023-12-10",
    summary: "Esse Dia será crucial, pois nele ocorrerá a Vinda de Jesus onde ele pisará o lagar da Ira de Deus, previsto no final dos capítulos 14 e 19 do livro de Apocalipse. Ainda, sendo mais específico, é o dia da Volta de Cristo e não os dias que antecedem sua volta e nem os dias posteriores.",
    url: "https://otaviotolentino.wordpress.com/2023/12/10/livrar-do-dia-da-ira/",
    tags: ["Apocalipse", "Ira de Deus", "Volta de Cristo"],
    category: "Estudos"
  },
  {
    id: "operacao-do-erro",
    title: "Operação do Erro",
    date: "2023-02-05",
    summary: "Muita gente se admira e se pergunta como alguém seria enganado com mentira? Pois é, parece admirável que assim aconteça, mas é assim mesmo que vai acontecer e vai enganar muita gente e até muitos que se dizem cristãos.",
    url: "https://otaviotolentino.wordpress.com/2023/02/05/operacao-do-erro/",
    tags: ["Apocalipse", "Engano", "Mentira"],
    category: "Estudos"
  },
  {
    id: "discipulo-missoes",
    title: "Discípulo/Missões",
    date: "2025-07-28",
    summary: "Repercussão desta Obra de Deus sobre toda a face da Terra; alcançando, por enquanto, mais de 90 Países, somando mais de 48.000 visitações ao Blog 'ÁGUAS VIVAS QUE CORREM MANSAMENTE' até 2025.",
    url: "https://otaviotolentino.wordpress.com/missoes/",
    tags: ["Discipulado", "Missões", "Evangelismo"],
    category: "Estudos"
  },
  {
    id: "passo-a-passo",
    title: "Passo a Passo",
    date: "2024-07-28",
    summary: "Aspectos fundamentais do discipulado cristão descritos passo a passo. Baseando-nos nos textos Bíblicos do Novo Testamento, podemos identificar vários aspectos cruciais do discipulado.",
    url: "https://otaviotolentino.wordpress.com/2024/07/28/discipulado-em-cristo-passo-a-passo/",
    tags: ["Discipulado", "Passo a Passo", "Novo Testamento"],
    category: "Estudos"
  },
  {
    id: "bem-aventurancas",
    title: "Bem-Aventuranças",
    date: "2022-01-04",
    summary: "As Bem-Aventuranças, como todo o resto do sermão do Monte, faziam parte dos ensinamentos de Jesus sobre o Reino de Deus e como aqueles que queriam segui-lo deveriam se comportar.",
    url: "https://otaviotolentino.wordpress.com/2022/01/04/bem-aventurancas/",
    tags: ["Discipulado", "Bem-Aventuranças", "Sermão do Monte", "Jesus"],
    category: "Estudos"
  },
  {
    id: "lava-pes",
    title: "Lava Pés",
    date: "2023-05-14",
    summary: "O que será que Cristo quis ensinar quando transmitiu essa doutrina para os seus discípulos e ainda disse que deveriam repetir?",
    url: "https://otaviotolentino.wordpress.com/2023/05/14/lava-pes/",
    tags: ["Discipulado", "Lava Pés", "Doutrina", "Discípulos"],
    category: "Estudos"
  },
  {
    id: "verdade-libertara",
    title: "Verdade Libertará",
    date: "2023-04-30",
    summary: "Esta frase, dita por Jesus, é tão manipulada por oportunistas que a utilizam fora do contexto e, por isso, nem eles mesmos conseguem entender e, muito menos, manifestar seu real significado. Vamos aproveitar para refletir sobre esse tema extremamente relevante e entender, afinal, o quê Jesus quis dizer com essa afirmação.",
    url: "https://otaviotolentino.wordpress.com/2023/04/30/verdade-vos-libertara/",
    tags: ["Discipulado", "Verdade", "Jesus"],
    category: "Estudos"
  },
  {
    id: "somos-deuses",
    title: "Somos deuses",
    date: "2022-03-13",
    summary: "Jesus manifesta abertamente que os santificados e enviados por Deus são Filhos de Deus, logo são deuses. Será que essa afirmação de Jesus tem a ver conosco?",
    url: "https://otaviotolentino.wordpress.com/2022/03/13/somos-deuses/",
    tags: ["Discipulado", "Filhos de Deus", "Santificação"],
    category: "Estudos"
  },
  {
    id: "perseveranca-fe",
    title: "Perseverança Fé",
    date: "2025-07-27",
    summary: "A 'paciência ou perseverança de Jesus ou dos santos' é uma expressão que perpassa todo o Novo Testamento, revelando um dos aspectos mais fundamentais da fé cristã: a necessidade de permanecermos firmes até o fim.",
    url: "https://otaviotolentino.wordpress.com/2025/07/27/paciencia-ou-perseveranca-de-jesus-ou-dos-santos/",
    tags: ["Discipulado", "Perseverança", "Fé", "Novo Testamento"],
    category: "Estudos"
  },
  {
    id: "viver-por-jesus",
    title: "Viver por Jesus",
    date: "2023-01-08",
    summary: "Há muito tempo que o crente tenta entender como fazer para viver por meio de Cristo, assim como Jesus Cristo vivia por meio do PAI.",
    url: "https://otaviotolentino.wordpress.com/2023/01/08/viver-por-jesus/",
    tags: ["Discipulado", "Viver por Cristo", "Fé"],
    category: "Estudos"
  },
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
    title: "Só em Jesus Cristo",
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
    url: "https://otaviotolentino.wordpress.com/2025/05/18/cartas-de-paulo-aos-colaboradores-1-timoteo/",
    tags: ["Paulo", "Epístolas", "Timóteo", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "2-timothy",
    title: "Cartas de Paulo aos Colaboradores: 2 TIMÓTEO",
    date: "June 1, 2025",
    summary: "A Segunda Carta a Timóteo é considerada a última carta escrita pelo apóstolo Paulo, provavelmente durante seu segundo aprisionamento em Roma, por volta de 66-67 d.C. Esta carta tem um tom pessoal e urgente, pois Paulo acredita que sua execução está próxima.",
    url: "https://otaviotolentino.wordpress.com/2025/06/01/cartas-de-paulo-aos-colaboradores-2-timoteo/",
    tags: ["Paulo", "Epístolas", "Timóteo", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "tito",
    title: "Cartas de Paulo aos Colaboradores: TITO",
    date: "May 25, 2025",
    summary: "A Carta a Tito é uma das cartas pastorais de Paulo, escrita provavelmente entre 63-65 d.C. Ela é dirigida a Tito, um colaborador grego de Paulo, que estava encarregado de organizar e supervisionar as igrejas na ilha de Creta.",
    url: "https://otaviotolentino.wordpress.com/2025/05/25/cartas-de-paulo-aos-colaboradores-tito/",
    tags: ["Paulo", "Epístolas", "Tito", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "philemon",
    title: "Cartas de Paulo aos Colaboradores: FILEMOM",
    date: "May 11, 2025",
    summary: "Escrita provavelmente durante o primeiro aprisionamento de Paulo em Roma, por volta de 60-62 d.C.. Esta carta aborda uma situação delicada envolvendo Filemom, um cristão proeminente e cooperador de Paulo, e Onésimo, seu escravo fugitivo que se converteu ao cristianismo através do ministério de Paulo.",
    url: "https://otaviotolentino.wordpress.com/2025/05/11/cartas-de-paulo-aos-colaboradores-filemom/",
    tags: ["Paulo", "Epístolas", "Filemom", "Colaboradores"],
    category: "Estudos"
  },
  {
    id: "collaborators-intro",
    title: "CARTAS de PAULO aos COLABORADORES: Introdução Geral",
    date: "May 4, 2025",
    summary: "Cartas de Paulo em geral, com foco especial nas cartas dirigidas aos seus colaboradores: Filemom, Timóteo e Tito.",
    url: "https://otaviotolentino.wordpress.com/2025/05/04/cartas-de-paulo-aos-colaboradores-introducao-geral/",
    tags: ["Paulo", "Epístolas", "Colaboradores", "Timóteo", "Filemom", "Tito"],
    category: "Estudos"
  },
  {
    id: "hebreus",
    title: "Epístolas de Paulo às Igrejas: HEBREUS",
    date: "April 27, 2025",
    summary: "A Carta aos Hebreus é uma obra única no Novo Testamento, combinando exposição teológica profunda com exortação prática, escrita provavelmente por volta de 64-68 d.C. Dirigida a cristãos de origem judaica, a Epístola visa fortalecer a fé em Cristo diante de alertas para evitar a desobediência dos judeus e a perda do repouso prometido por Deus.",
    url: "https://otaviotolentino.wordpress.com/2025/04/27/epistolas-de-paulo-as-igrejas-hebreus/",
    tags: ["Paulo", "Epístolas", "Hebreus", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "philippians",
    title: "Epístolas de Paulo às Igrejas: FILIPENSES",
    date: "April 20, 2025",
    summary: "A Carta aos Filipenses é um dos textos do apóstolo Paulo, escrita provavelmente durante seu primeiro aprisionamento em Roma, por volta de 61-62 d.C. Esta carta foi endereçada à igreja de Filipos, que ficava na Macedônia. A primeira igreja fundada por Paulo na Europa (Atos 16:11-40).",
    url: "https://otaviotolentino.wordpress.com/2025/04/20/epistolas-de-paulo-as-igrejas-filipenses/",
    tags: ["Paulo", "Epístolas", "Filipenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "colossians",
    title: "Epístolas de Paulo às Igrejas: COLOSSENSES",
    date: "April 13, 2025",
    summary: "A Carta aos Colossenses é um dos textos do apóstolo Paulo, escrita provavelmente durante seu primeiro aprisionamento em Roma, por volta de 60-62 d.C. Esta carta foi endereçada à igreja de Colossos, uma cidade na região da Frígia, na Ásia Menor (atual Turquia).",
    url: "https://otaviotolentino.wordpress.com/2025/04/13/epistolas-de-paulo-as-igrejas-colossenses/",
    tags: ["Paulo", "Epístolas", "Colossenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "ephesians",
    title: "Epístolas de Paulo às Igrejas: EFÉSIOS",
    date: "April 06, 2025",
    summary: "A Carta aos Efésios, atribuída ao apóstolo Paulo e escrita por volta de 60-62 d.C., é uma epístola profunda e inspiradora que aborda temas centrais da fé cristã. Éfeso localizava-se na região então chamada de Ásia Menor. Uma das cartas mais inspiradas de toda a Bíblia, por seu conteúdo doutrinária de extrema relevância. Paulo, nesse texto, faz um fantástico resumo de conceitos e doutrinas condensadas em apenas 6 capítulos. Apresenta Temas de extrema relevância e maturidade espiritual.",
    url: "https://otaviotolentino.wordpress.com/2025/04/06/epistolas-de-paulo-as-igrejas-efesios/",
    tags: ["Paulo", "Epístolas", "Efésios", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "romans",
    title: "Epístolas de Paulo às Igrejas: ROMANOS",
    date: "March 30, 2025",
    summary: "A Carta aos Romanos, escrita pelo apóstolo Paulo por volta de 57 d.C., é considerada uma das mais profundas e influentes epístolas do Novo Testamento. Este texto apresenta uma exposição sistemática do evangelho e da doutrina cristã, abordando temas fundamentais como justificação pela fé, pecado, graça, santificação e o plano de Deus para judeus e gentios.",
    url: "https://otaviotolentino.wordpress.com/2025/03/30/epistolas-de-paulo-as-igrejas-romanos/",
    tags: ["Paulo", "Epístolas", "Romanos", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "2-corinthians",
    title: "Epístolas de Paulo às Igrejas: 2 CORÍNTIOS",
    date: "March 23, 2025",
    summary: "A Segunda Carta aos Coríntios, escrita pelo apóstolo Paulo por volta de 55-56 d.C., é uma epístola profundamente pessoal e emocional. Ela revela o coração pastoral de Paulo e sua defesa apaixonada do ministério apostólico, ao mesmo tempo em que aborda questões cruciais sobre o serviço cristão, a reconciliação e a vida no Espírito.",
    url: "https://otaviotolentino.wordpress.com/2025/03/23/epistolas-de-paulo-as-igrejas-2-corintios/",
    tags: ["Paulo", "Epístolas", "Coríntios", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "1-corinthians",
    title: "Epístolas de Paulo às Igrejas: 1 CORÍNTIOS",
    date: "March 16, 2025",
    summary: "A Primeira Carta aos Coríntios, escrita pelo apóstolo Paulo por volta de 55 d.C., é um texto pastoral endereçada à igreja de Corinto, na região da Acaia no sul da Grécia, uma comunidade cristã enfrentando diversos desafios espirituais e morais. Este texto oferece orientações práticas e doutrinárias para uma igreja em meio a uma cultura moralmente permissiva.",
    url: "https://otaviotolentino.wordpress.com/2025/03/16/epistolas-de-paulo-as-igrejas-1-corintios/",
    tags: ["Paulo", "Epístolas", "Coríntios", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "2-thessalonians",
    title: "Epístolas de Paulo às Igrejas: 2 TESSALONICENSES",
    date: "March 09, 2025",
    summary: "A Segunda Carta aos Tessalonicenses, escrita pelo apóstolo Paulo pouco tempo após a primeira epístola, provavelmente por volta de 51-52 d.C., aborda questões escatológicas e práticas que surgiram na igreja de Tessalônica, na Macedônia. Esta carta visa corrigir mal-entendidos sobre a segunda vinda de Cristo e fornece orientações para a vida cristã em meio à expectativa do retorno do Senhor.",
    url: "https://otaviotolentino.wordpress.com/2025/03/09/epistolas-de-paulo-as-igrejas-2-tessalonicenses/",
    tags: ["Paulo", "Epístolas", "Tessalonicenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "1-thessalonians",
    title: "Epístolas de Paulo às Igrejas: 1 TESSALONICENSES",
    date: "March 02, 2025",
    summary: "A Primeira Carta aos Tessalonicenses, escrita pelo apóstolo Paulo por volta de 50-51 d.C., é considerada uma das primeiras epístolas do Novo Testamento. Dirigida à igreja de Tessalônica, fundada por Paulo durante sua segunda viagem missionária.",
    url: "https://otaviotolentino.wordpress.com/2025/03/02/epistolas-de-paulo-as-igrejas-1-tessalonicenses/",
    tags: ["Paulo", "Epístolas", "Tessalonicenses", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "galatians",
    title: "Epístolas de Paulo às Igrejas: GÁLATAS",
    date: "February 23, 2025",
    summary: "A Carta aos Gálatas, escrita pelo apóstolo Paulo por volta de 49 d.C., é uma das epístolas teologicamente mais intensas do Novo Testamento. Dirigida às igrejas da Galácia, este texto aborda questões cruciais sobre a natureza do evangelho, a justificação pela fé e a liberdade cristã.",
    url: "https://otaviotolentino.wordpress.com/2025/02/23/epistolas-de-paulo-as-igrejas-galatas/",
    tags: ["Paulo", "Epístolas", "Gálatas", "Igrejas"],
    category: "Estudos"
  },
  {
    id: "churches-intro",
    title: "EPÍSTOLAS de PAULO às IGREJAS: Introdução Geral",
    date: "February 16, 2025",
    summary: "As Cartas de Paulo são uma parte fundamental do Novo Testamento, oferecendo ensinamentos teológicos profundos e orientações práticas para as primeiras comunidades cristãs. Escritas pelo apóstolo Paulo, estas cartas abordam uma variedade de temas e questões enfrentadas pelos primeiros cristãos, fornecendo uma base sólida para a doutrina e prática cristãs.",
    url: "https://otaviotolentino.wordpress.com/2025/02/16/epistolas-de-paulo-as-igrejas-introducao-geral/",
    tags: ["Paulo", "Epístolas", "Igrejas", "Introdução"],
    category: "Estudos"
  },
  {
    id: "conclusao-festas-judaicas",
    title: "FESTAS JUDAICAS: Conclusão",
    date: "September 29, 2024",
    summary: "As Festas Judaicas, instituídas por Deus no Antigo Testamento e ricas em significado no Novo Testamento, oferecem um panorama abrangente do plano redentor de Deus para a humanidade. Cada festa não apenas comemora eventos históricos cruciais, mas também aponta profeticamente para a obra de Cristo e para a esperança futura dos crentes.",
    url: "https://otaviotolentino.wordpress.com/2024/09/29/festas-judaicas-conclusao/",
    tags: ["Festas Judaicas", "Bíblia", "Conclusão"],
    category: "Estudos"
  },
  {
    id: "tabernaculos-sukkot",
    title: "Festas Judaicas: 7. TABERNÁCULOS (SUKKOT)",
    date: "September 22, 2024",
    summary: "Sukkot em Hebraico significa Cabana, Tenda, Tabernáculo ou construção precária de moradia temporária. Era o que os nômades costumavam usar em suas peregrinações sobre a terra em busca de um ambiente com melhores condições de provisão que desse sustento para manutenção da vida das pessoas e seus animais.",
    url: "https://otaviotolentino.wordpress.com/2024/09/22/festas-judaicas-7-tabernaculos-sukkot/",
    tags: ["Festas Judaicas", "Bíblia", "Sukkot"],
    category: "Estudos"
  },
  {
    id: "expiacao-yom-kippur",
    title: "Festas Judaicas: 6. EXPIAÇÃO (YOM KIPPUR)",
    date: "September 15, 2024",
    summary: "Yom Kippur, conhecido como o Dia da Expiação ou Dia do Perdão, é considerado o dia mais sagrado do calendário judaico. Esta festa única foca na expiação dos pecados, na reconciliação com Deus e na purificação espiritual para que possamos viver e andar na presença de Deus.",
    url: "https://otaviotolentino.wordpress.com/2024/09/15/festas-judaicas-6-expiacao-yom-kippur/",
    tags: ["Festas Judaicas", "Bíblia", "Yom Kippur"],
    category: "Estudos"
  },
  {
    id: "trombetas-yom-teruah",
    title: "Festas Judaicas: 5. TROMBETAS (YOM TERUAH)",
    date: "September 08, 2024",
    summary: "Yom Teruah, também conhecida como Festa das Trombetas ou Rosh Hashanah (Ano Novo Judaico), é uma celebração única no calendário judaico. Esta festa marca o início do ano civil judaico e inicia os Dias Temíveis, um período de introspecção e arrependimento que culmina no Yom Kippur, dia da Expiação ou dia do Perdão.",
    url: "https://otaviotolentino.wordpress.com/2024/09/08/festas-judaicas-5-trombetas-yom-teruah/",
    tags: ["Festas Judaicas", "Bíblia", "Yom Teruah"],
    category: "Estudos"
  },
  {
    id: "pentecostes-shavuot",
    title: "Festas Judaicas: 4. PENTECOSTES (SHAVUOT)",
    date: "September 01, 2024",
    summary: "Shavuot, também conhecida como Festa das Semanas ou Pentecostes, é uma das três festas de peregrinação no calendário judaico. Esta celebração marca o fim da colheita da cevada e o início da colheita do trigo, além de comemorar a entrega da Torá no Monte Sinai.",
    url: "https://otaviotolentino.wordpress.com/2024/09/01/festas-judaicas-4-pentecostes-shavuot/",
    tags: ["Festas Judaicas", "Bíblia", "Shavuot"],
    category: "Estudos"
  },
  {
    id: "primicias-hag-habikkurim",
    title: "Festas Judaicas: 3. PRIMÍCIAS (HAG HABIKKURIM)",
    date: "August 25, 2024",
    summary: "Bikkurim, ou a Festa das Primícias, é uma celebração única no calendário judaico que marca o início da colheita da cevada e expressa gratidão a Deus pela abundância da terra. Esta festa carrega um profundo significado espiritual e profético, apontando para a ressurreição de Jesus Cristo.",
    url: "https://otaviotolentino.wordpress.com/2024/08/25/festas-judaicas-3-primicias-hag-habikkurim/",
    tags: ["Festas Judaicas", "Bíblia", "Primícias"],
    category: "Estudos"
  },
  {
    id: "paes-azimos-hag-hamatzot",
    title: "Festas Judaicas: 2. PÃES ÁZIMOS (HAG HAMATZOT)",
    date: "August 18, 2024",
    summary: "Hag HaMatzot, ou a Festa dos Pães Ázimos, é uma celebração intimamente ligada ao Pessach (Páscoa), ocorrendo imediatamente após esta. Esta festa enfatiza a importância da pureza e da santidade na vida do povo de Deus, utilizando o simbolismo do pão sem fermento.",
    url: "https://otaviotolentino.wordpress.com/2024/08/18/festas-judaicas-2-paes-azimos-hag-hamatzot/",
    tags: ["Festas Judaicas", "Bíblia", "Pães Ázimos"],
    category: "Estudos"
  },
  {
    id: "pascoa-pessach",
    title: "Festas Judaicas: 1. PÁSCOA (PESSACH)",
    date: "August 11, 2024",
    summary: "Esta festa comemora a libertação do povo de Israel da escravidão no Egito e carrega profundas implicações espirituais e proféticas que se estendem até o Novo Testamento. E o sacrifício do cordeiro imaculado serviria de sinal entre o Povo de Israel, para que soubessem como eles seriam resgatados diante de Deus e se lembrassem disso para sempre.",
    url: "https://otaviotolentino.wordpress.com/2024/08/11/festas-judaicas-1-pascoa-pessach/",
    tags: ["Festas Judaicas", "Bíblia", "Páscoa"],
    category: "Estudos"
  },
  {
    id: "jewish-feasts-intro",
    title: "FESTAS JUDAICAS: Introdução Geral",
    date: "August 04, 2024",
    summary: "As festas judaicas são celebrações fundamentais na fé e cultura do povo judeu, estabelecidas por Deus no Antigo Testamento e carregadas de significado profético e espiritual. Essas festas não apenas comemoram eventos históricos cruciais na jornada do povo de Israel, mas também apontam para o plano redentor de Deus, culminando no Messias.",
    url: "https://otaviotolentino.wordpress.com/2024/08/04/festas-judaicas-introducao-geral/",
    tags: ["Festas Judaicas", "Bíblia", "Introdução"],
    category: "Estudos"
  },
  {
    id: "math-secrets",
    title: "Quadrado/Raiz Quadrada",
    date: "December 1, 2024",
    summary: "Uma exploração de conceitos matemáticos relacionados a quadrados, raízes quadradas e o teorema de Pitágoras, usando visualização gráfica para tornar esses conceitos mais acessíveis e compreensíveis.",
    url: "https://otaviotolentino.wordpress.com/2024/12/01/square-square-root-pythagoras-claude-ai-subjected-to-god-en/",
    tags: ["Matemática", "Teorema de Pitágoras", "Visualização"],
    category: "Dicas Úteis"
  },
  {
    id: "tarifa-zero",
    title: "Tarifa Zero no Banco",
    date: "November 15, 2024",
    summary: "Conselhos práticos sobre como evitar taxas bancárias no Brasil, com base na Resolução 3.919/2010 do Banco Central. O artigo fornece informações legais e passos práticos para os leitores economizarem dinheiro em serviços bancários.",
    url: "https://otaviotolentino.wordpress.com/2021/12/11/tarifa-zero/",
    tags: ["Finanças", "Bancos", "Economia"],
    category: "Estudos"
  },
  {
    id: "aboliu-a-morte",
    title: "Aboliu a Morte",
    date: "June 22, 2025",
    summary: "A morte sempre foi o grande terror da humanidade, uma realidade inevitável que assombra todos os povos e culturas ao longo da história. Porém, as Escrituras Sagradas nos revelam uma verdade extraordinária e transformadora: Jesus Cristo aboliu a morte.",
    url: "https://otaviotolentino.wordpress.com/2025/06/22/jesus-aboliu-a-morte/",
    tags: ["Jesus Cristo", "Morte", "Ressurreição"],
    category: "Estudos"
  },
  {
    id: "dia-da-ressurreicao",
    title: "Dia da Ressurreição",
    date: "November 3, 2024",
    summary: "Será DOMINGO o DIA da RESSURREIÇÃO de Jesus Cristo?",
    url: "https://otaviotolentino.wordpress.com/2024/11/03/dia-da-ressurreicao-de-jesus-cristo/",
    tags: ["Jesus Cristo", "Ressurreição", "Domingo"],
    category: "Estudos"
  },
  {
    id: "chamado-nazareno",
    title: "Chamado Nazareno",
    date: "July 21, 2024",
    summary: "No Evangelho de Mateus há uma referência ao cumprimento de uma profecia que não foi dada nenhum detalhe de quem ou onde estava esta profecia. E chegou, e habitou numa cidade chamada Nazaré, para que se cumprisse o que fora dito pelos profetas: Ele será chamado Nazareno. Mateus 2:23",
    url: "https://otaviotolentino.wordpress.com/2024/07/21/jesus-nazareno/",
    tags: ["Jesus Cristo", "Nazareno", "Profecia"],
    category: "Estudos"
  },
  {
    id: "templo-restaurado",
    title: "Templo Restaurado",
    date: "March 31, 2024",
    summary: "O nome de Jesus carrega a Glória e Honra de Deus, pois ele é o Templo restabelecido por Deus.",
    url: "https://otaviotolentino.wordpress.com/2024/03/31/jesus-e-o-templo/",
    tags: ["Jesus Cristo", "Templo", "Glória de Deus"],
    category: "Estudos"
  },
  {
    id: "culpados-pelo-sangue",
    title: "Culpados pelo Sangue",
    date: "November 12, 2023",
    summary: "Seremos breves e diretos na abordagem dos responsáveis pelo derramamento do sangue de Jesus, dos profetas e dos santos em Apocalipse.",
    url: "https://otaviotolentino.wordpress.com/2023/11/12/sangue-de-jesus-dos-profetas-e-dos-santos/",
    tags: ["Jesus Cristo", "Sangue", "Apocalipse"],
    category: "Estudos"
  },
  {
    id: "levou-nossos-pecados",
    title: "Levou Nossos Pecados",
    date: "October 15, 2023",
    summary: "Jesus teve que vir em carne, em forma plenamente humana, e tomou sobre si os nossos pecados, enfermidades, dores, iniquidades etc, para que pudesse remir os nossos pecados e resgatar as nossas almas diante de Deus.",
    url: "https://otaviotolentino.wordpress.com/2023/10/15/jesus-levou-nossos-pecados/",
    tags: ["Jesus Cristo", "Pecado", "Salvação"],
    category: "Estudos"
  },
  {
    id: "tentacao-no-deserto",
    title: "Tentação no Deserto",
    date: "October 1, 2023",
    summary: "A tentação de Jesus no deserto representa uma declaração de intenções e comprometimentos através do testemunho de fé dado por Jesus.",
    url: "https://otaviotolentino.wordpress.com/2023/10/01/tentacao-de-jesus-no-deserto/",
    tags: ["Jesus Cristo", "Tentação", "Fé"],
    category: "Estudos"
  },
  {
    id: "pedra-da-igreja",
    title: "Pedra da Igreja",
    date: "July 30, 2023",
    summary: "Será Pedro a Pedra sobre a qual Jesus construiria a sua Igreja?",
    url: "https://otaviotolentino.wordpress.com/2023/07/30/pedra-da-igreja-de-cristo/",
    tags: ["Jesus Cristo", "Igreja", "Pedro"],
    category: "Estudos"
  },
  {
    id: "nome",
    title: "Nome",
    date: "June 25, 2023",
    summary: "Esse nome foi anunciado pelo anjo de Deus a Maria e também a José que o Filho de Deus, que nasceria de Maria, deveria ser chamado Jesus. Então o nome em questão a ser analisado neste estudo, numa abordagem de questão semântica, é o nome “JESUS“.",
    url: "https://otaviotolentino.wordpress.com/2023/06/25/nome-de-jesus/",
    tags: ["Jesus Cristo", "Nome", "Anjo"],
    category: "Estudos"
  },
  {
    id: "palavra-de-deus",
    title: "Palavra de Deus",
    date: "June 18, 2023",
    summary: "Importante saber que Jesus sustenta todas as coisas com a Palavra do seu Poder, dando assim o cumprimento e a confirmação de toda palavra e promessa de Deus.",
    url: "https://otaviotolentino.wordpress.com/2023/06/18/jesus-cristo-a-palavra-de-deus/",
    tags: ["Jesus Cristo", "Palavra de Deus", "Poder"],
    category: "Estudos"
  },
  {
    id: "natureza-em-3-etapas",
    title: "Natureza em 3 Etapas",
    date: "June 11, 2023",
    summary: "Cristo Teve 3 etapas diferentes em sua vida, por causa da sua vinda à Terra em forma humana. Quais são elas?",
    url: "https://otaviotolentino.wordpress.com/2023/06/11/natureza-de-cristo-em-3-etapas/",
    tags: ["Jesus Cristo", "Natureza de Cristo", "Humanidade"],
    category: "Estudos"
  },
  {
    id: "genealogia",
    title: "Genealogia",
    date: "April 16, 2023",
    summary: "Existem muitos segredos e mistérios revelados nas genealogias da Bíblia. Neste artigo vamos desvendar um dos grandes mistérios revelados na genealogia de Jesus e que poucas pessoas dão atenção.",
    url: "https://otaviotolentino.wordpress.com/2023/04/16/genealogia-de-jesus/",
    tags: ["Jesus Cristo", "Genealogia", "Bíblia"],
    category: "Estudos"
  },
  {
    id: "profecia-jesus",
    title: "Profecia Jesus",
    date: "December 18, 2022",
    summary: "Pouco se fala entre os cristãos sobre a profecia de Moisés de que viria um profeta dentre o povo de Israel e que falaria as palavras de Deus. Essa profecia é uma das maiores expectativas que o povo de Israel tem sobre a vinda do Messias, chamado de Cristo.",
    url: "https://otaviotolentino.wordpress.com/2022/12/18/moises-e-jesus/",
    tags: ["Jesus Cristo", "Moisés", "Profecia"],
    category: "Estudos"
  },
  {
    id: "ordem-melquisedeque",
    title: "Ordem Melquisedeque",
    date: "November 6, 2022",
    summary: "Jesus Cristo é Rei e Sumo sacerdote eternamente, segundo a ordem de Melquisedeque.",
    url: "https://otaviotolentino.wordpress.com/2022/11/06/jesus-sumo-sacerdote/",
    tags: ["Jesus Cristo", "Melquisedeque", "Sacerdote"],
    category: "Estudos"
  },
  {
    id: "levantado-na-cruz",
    title: "Levantado na Cruz",
    date: "May 1, 2022",
    summary: "O que será que tem a ver a serpente ardente do deserto, numa haste de metal, com Jesus Cristo pendurado na Cruz?",
    url: "https://otaviotolentino.wordpress.com/2022/05/01/serpente-e-jesus/",
    tags: ["Jesus Cristo", "Cruz", "Serpente"],
    category: "Estudos"
  },
  {
    id: "dia-e-hora",
    title: "Dia e Hora",
    date: "March 6, 2022",
    summary: "Perceba que não se trata apenas de saber ou não o dia e a hora, trata-se também de saber as demais implicações. Ninguém sabe o dia nem a hora da volta de Jesus, pois virá de improviso quando ninguém pensar que vem.",
    url: "https://otaviotolentino.wordpress.com/2022/03/06/dia-e-hora-jesus/",
    tags: ["Jesus Cristo", "Volta de Jesus", "Escatologia"],
    category: "Estudos"
  },
  {
    id: "batismo",
    title: "Batismo",
    date: "February 1, 2022",
    summary: "Os critérios do Batismo, morrer para o pecado e nascer do Espírito, se aplicam a Jesus Cristo? Ou será que o Batismo de Jesus tem outro significado?",
    url: "https://otaviotolentino.wordpress.com/2022/02/01/batismo-jesus/",
    tags: ["Jesus Cristo", "Batismo", "Espírito Santo"],
    category: "Estudos"
  },
  {
    id: "descendencia",
    title: "Descendência",
    date: "June 15, 2025",
    summary: "Desde os primeiros capítulos de Gênesis até as páginas finais do Apocalipse, mostrando-nos como o Criador tem trabalhado incansavelmente para formar um povo que seja verdadeiramente Seu.",
    url: "https://otaviotolentino.wordpress.com/2025/06/15/descendencia-para-deus-o-que-significa/",
    tags: ["Deus", "Descendência", "Gênesis", "Apocalipse"],
    category: "Estudos"
  },
  {
    id: "coracao-preparado",
    title: "Coração Preparado",
    date: "January 26, 2025",
    summary: "Para os que leem a Bíblia com atenção Deus já deixou muito claro que o que ele quer do ser humano é que ele, individualmente, ame a Deus com inteireza do seu coração.",
    url: "https://otaviotolentino.wordpress.com/2025/01/26/nosso-coracao-esta-preparado-para-deus/",
    tags: ["Deus", "Coração", "Bíblia"],
    category: "Estudos"
  },
  {
    id: "viver-da-palavra",
    title: "Viver da Palavra",
    date: "June 2, 2024",
    summary: "O pão alimenta a carne, mas a palavra de Deus é o alimento da alma e do espírito, saindo direto do seu coração.",
    url: "https://otaviotolentino.wordpress.com/2024/06/02/nem-so-de-pao-vivera-o-homem/",
    tags: ["Deus", "Palavra de Deus", "Alma", "Espírito"],
    category: "Estudos"
  },
  {
    id: "sangue-clama",
    title: "Sangue Clama",
    date: "March 24, 2024",
    summary: "A expressão ‘clama ou fala diante de Deus’, quer dizer que ‘chamou a atenção de Deus’ ou que ‘chegou aos seus ouvidos’. Então, como podemos entender o que isso significa: ‘o SANGUE que CLAMA ou FALA diante de Deus’?",
    url: "https://otaviotolentino.wordpress.com/2024/03/24/sangue-que-clama-diante-de-deus/",
    tags: ["Deus", "Sangue", "Clamor"],
    category: "Estudos"
  },
  {
    id: "aliancas",
    title: "Alianças",
    date: "March 17, 2024",
    summary: "Você sabe a cronologia, desde Adão, das Alianças estipuladas por Deus e as várias quebras pelo ser humano?",
    url: "https://otaviotolentino.wordpress.com/2024/03/17/aliancas-de-deus-com-os-homens/",
    tags: ["Deus", "Aliança", "Adão"],
    category: "Estudos"
  },
  {
    id: "sacrificio-de-louvor",
    title: "Sacrifício de Louvor",
    date: "February 4, 2024",
    summary: "Existia no serviço do sacerdócio judaico um sacrifício chamado ‘Todah‘, que é a oferta do sacrifício de agradecimento a Deus ou de ação de graças.",
    url: "https://otaviotolentino.wordpress.com/2024/02/04/agradecimento-sacrificio-de-louvor-a-deus/",
    tags: ["Deus", "Sacrifício", "Louvor", "Agradecimento"],
    category: "Estudos"
  },
  {
    id: "perdao-diario",
    title: "Perdão Diário",
    date: "January 15, 2023",
    summary: "Perdão diário dos nossos pecados involuntários para o processo de santificação até a volta de Cristo.",
    url: "https://otaviotolentino.wordpress.com/2023/01/15/perdao-diario/",
    tags: ["Deus", "Perdão", "Santificação", "Jesus Cristo"],
    category: "Estudos"
  },
  {
    id: "honrar",
    title: "Honrar",
    date: "November 20, 2022",
    summary: "Como todo tema bíblico, obviamente, tem base e referência bíblica que define o que ‘Honrar a Deus’ significa e o que devemos fazer para efetivamente honrarmos a Deus de maneira que de fato o agrade.",
    url: "https://otaviotolentino.wordpress.com/2022/11/20/honrar-a-deus/",
    tags: ["Deus", "Honra", "Bíblia"],
    category: "Estudos"
  },
  {
    id: "reis-e-sacerdotes",
    title: "Reis e Sacerdotes",
    date: "November 13, 2022",
    summary: "Jesus foi consagrado por uma ordem excepcional, não prevista na Lei de Moisés; para que, além de derrogar a regra anterior, pudesse estipular uma nova ordem de Reis e sacerdotes para Deus.",
    url: "https://otaviotolentino.wordpress.com/2022/11/13/reis-e-sacerdotes/",
    tags: ["Deus", "Reis", "Sacerdotes", "Jesus Cristo", "Moisés"],
    category: "Estudos"
  },
  {
    id: "dar-gloria",
    title: "Dar Glória a Deus",
    date: "October 23, 2022",
    summary: "Dar Glória a Deus e ao cordeiro, Jesus Cristo, seu filho, é uma ordem, pois somos o povo de Deus e fomos escolhidos e chamados para o adorar e glorificar.",
    url: "https://otaviotolentino.wordpress.com/2022/10/23/gloria-a-deus/",
    tags: ["Deus", "Glória", "Jesus Cristo"],
    category: "Estudos"
  },
  {
    id: "visitacao",
    title: "Visitação",
    date: "July 10, 2022",
    summary: "A Plenitude dos Tempos é o tempo em que foi consumada a promessa da visitação de Deus na Terra, concretizada através de Jesus Cristo.",
    url: "https://otaviotolentino.wordpress.com/2022/07/10/plenitude-tempos/",
    tags: ["Deus", "Visitação", "Jesus Cristo"],
    category: "Estudos"
  },
  {
    id: "justica",
    title: "Justiça",
    date: "January 11, 2022",
    summary: "As pessoas sempre perguntam: Por que Deus permite que coisas injustas aconteçam? Será que estamos prontos para encarar de vez essa questão?",
    url: "https://otaviotolentino.wordpress.com/2022/01/11/justica-ou-injustica/",
    tags: ["Deus", "Justiça", "Injustiça"],
    category: "Estudos"
  },
  {
    id: "quem-viu",
    title: "Quem viu",
    date: "December 28, 2021",
    summary: "Será que alguém já viu a face de Deus? Algum dos patriarcas, os profetas, Jesus ou Paulo? Quem?",
    url: "https://otaviotolentino.wordpress.com/2021/12/28/quem-viu-deus/",
    tags: ["Deus", "Face de Deus", "Profetas", "Jesus", "Paulo"],
    category: "Estudos"
  },
  {
    id: "oracao-do-pai",
    title: "Oração do Pai",
    date: "December 21, 2021",
    summary: "Jesus nos deu uma oração pronta, para ser repetida, ou nos ensinou a orar?",
    url: "https://otaviotolentino.wordpress.com/2021/12/21/oracao-pai-nosso/",
    tags: ["Deus", "Oração", "Pai Nosso", "Jesus"],
    category: "Estudos"
  },
  {
    id: "nome-de-deus",
    title: "Nome de Deus",
    date: "December 14, 2021",
    summary: "Muito se fala categoricamente que o nome de Deus é YHWH (יהוה) – o Tetragrama. Essa abordagem, pela sua importância divina, requer maior reflexão e consequente elaboração sobre o verdadeiro nome de Deus.",
    url: "https://otaviotolentino.wordpress.com/2021/12/14/nome-deus/",
    tags: ["Deus", "Nome de Deus", "YHWH", "Tetragrama"],
    category: "Estudos"
  },
  {
    id: "haja-luz",
    title: "Haja Luz",
    date: "July 13, 2025",
    summary: "Assim como a terra estava em trevas antes da luz divina, o coração humano permanece nas trevas espirituais até que Cristo, a verdadeira luz, o ilumine.",
    url: "https://otaviotolentino.wordpress.com/2025/07/13/haja-luz-e-jesus-iluminou-o-coracao-dos-homens/",
    tags: ["Jesus Cristo", "Luz", "Coração", "Trevas"],
    category: "Estudos"
  },
  {
    id: "siga-jesus",
    title: "Siga Jesus",
    date: "July 6, 2025",
    summary: "Jesus Cristo nos convida a uma jornada de transformação radical através de três imperativos fundamentais: tomar a cruz, negar a si mesmo e segui-Lo.",
    url: "https://otaviotolentino.wordpress.com/2025/07/06/tome-sua-cruz-negue-a-si-mesmo-e-siga-a-jesus/",
    tags: ["Jesus Cristo", "Cruz", "Transformação"],
    category: "Estudos"
  },
  {
    id: "pentecostes",
    title: "Pentecostes",
    date: "July 19, 2025",
    summary: "Estamos falando de eventos específicos em que ocorreram a distribuição do Espírito Santo, como promessa de Deus, para uma quantidade específica de pessoas do povo de Israel.",
    url: "https://otaviotolentino.wordpress.com/2022/05/15/pentecoste-velho-testamento/",
    tags: ["Pentecostes", "Moisés"],
    category: "Estudos"
  },
  {
    id: "impedido",
    title: "Impedido",
    date: "July 19, 2025",
    summary: "Por que DEUS impediu Moisés de entrar na Terra Prometida? Leia o Artigo completo para saber a resposta.",
    url: "https://otaviotolentino.wordpress.com/2023/06/04/moises-nao-entrou-na-terra-prometida/",
    tags: ["Impedido", "Moisés"],
    category: "Estudos"
  },
  {
    id: "assinatura-cartas",
    title: "Assinatura Cartas",
    date: "July 19, 2025",
    summary: "Uma característica interessante em todas as Cartas ou Epístolas de Paulo, que na verdade se torna sua marca, e deveria servir como parâmetro de avaliação se o documento tem origem autoral da parte de Paulo é a sua assinatura.",
    url: "https://otaviotolentino.wordpress.com/2021/12/13/assinatura-paulo-cartas/",
    tags: ["Paulo", "Assinatura"],
    category: "Estudos"
  },
  {
    id: "autor-hebreus",
    title: "Autor Hebreus",
    date: "July 19, 2025",
    summary: "Segue análise sobre o texto do Livro de Hebreus, utilizando critério de comparação com todos os outros textos considerados, irrefutavelmente, como sendo de autoria do apóstolo Paulo.",
    url: "https://otaviotolentino.wordpress.com/2023/02/19/autor-de-hebreus/",
    tags: ["Paulo", "Hebreus"],
    category: "Estudos"
  },
  {
    id: "carta-laodicenses",
    title: "Carta Laodicenses",
    date: "July 19, 2025",
    summary: "Surpreenda-se com a leitura completa desse Artigo sobre a Carta aos Laodicenses: Correção de Destinatário e através dos textos bíblicos descubra sobre esse encontro?",
    url: "https://otaviotolentino.wordpress.com/2022/07/31/carta-laodicenses/",
    tags: ["Paulo", "Laodicenses"],
    category: "Estudos"
  },
  {
    id: "profetizou-jesus",
    title: "Profetizou Jesus",
    date: "July 19, 2025",
    summary: "Será que Deus realmente queria que Abraão sacrificasse o seu único filho de verdade? Veremos qual a verdadeira intenção de Deus ao pedir que Abraão sacrificasse seu Filho único.",
    url: "https://otaviotolentino.wordpress.com/2024/01/07/sacrificio-de-isaque/",
    tags: ["Abraão", "Isaque", "Sacrifício"],
    category: "Estudos"
  },
  {
    id: "origem-periodo",
    title: "Origem/Período",
    date: "July 19, 2025",
    summary: "Há muito tempo nos perguntamos qual a origem de Jó? E qual o seu tempo ou momento dentro da cronologia da Bíblia? É o que analisamos.",
    url: "https://otaviotolentino.wordpress.com/2023/02/26/jo-origem-e-periodo/",
    tags: ["Jó", "Origem"],
    category: "Estudos"
  },
  {
    id: "sabio-davi-salomao",
    title: "Sábio Davi/Salomão",
    date: "July 19, 2025",
    summary: "Até onde vai a sabedoria de Jó? Será que sua sabedoria, exposta expressamente nos capítulos do seu Livro, merece o mesmo grau de reconhecimento da sabedoria apresentada por Davi e seu filho Salomão?",
    url: "https://otaviotolentino.wordpress.com/2024/05/26/jo-era-sabio-como-davi-e-salomao/",
    tags: ["Jó", "Sabedoria"],
    category: "Estudos"
  },
  {
    id: "hosana",
    title: "Hosana",
    date: "2022-08-28",
    summary: "O termo HOSANA aparece na passagem que aborda a Entrada triunfal de Jesus em Jerusalém. Ele se repete nos Evangelhos de Mateus 21, Marcos 11 e João 12. Afinal qual o significado desse termo? O que ele quer dizer?",
    url: "https://otaviotolentino.wordpress.com/2022/08/28/hosana/",
    tags: ["Hosana", "Jesus", "Jerusalém", "Evangelhos"],
    category: "Estudos"
  },
  {
    id: "jedidiah",
    title: "Jedidiah",
    date: "2024-07-14",
    summary: "Quem ou o que é Jedidiah ou Jedidias? A quem será então que este nome está se referindo? Será que foi usado em referência a uma pessoa específica ou a várias pessoas na Bíblia?",
    url: "https://otaviotolentino.wordpress.com/2024/07/14/jedidiah-amado-de-deus/",
    tags: ["Jedidiah", "Jedidias", "Bíblia"],
    category: "Estudos"
  },
  {
    id: "jesurun",
    title: "Jesurun",
    date: "2022-10-09",
    summary: "Foi o título honorífico de Israel. Na Septuaginta grega, “Jesurun” torna-se um termo afetuoso, sendo traduzido “amado”. O designativo “Jesurun” devia lembrar Israel da sua chamada como povo pactuado de Deus, e, assim, da sua obrigação de permanecer reto. Porém, em Deuteronômio 32:15, o nome Jesurun é usado de forma irônica. Por quê?",
    url: "https://otaviotolentino.wordpress.com/2022/10/09/jesurun/",
    tags: ["Jesurun", "Israel", "Septuaginta", "Deuteronômio"],
    category: "Estudos"
  },
{
    id: "aleluia",
    title: "Aleluia",
    date: "2022-10-30",
    summary: "Essa questão é bastante interessante, pois Aleluia é um termo em hebraico que significa “Louvai a Deus” ou “Louvai ao Senhor” e não foi traduzido e sim transliterado como encontramos nas citações de Apocalipse 19:1-6. Em poucos textos da bíblia em grego, no Novo Testamento, aparece a palavra Ἁλληλουϊά· transliterada do hebraico הַּלֲלוּיָהּ, Haleluyah, para o grego.",
    url: "https://otaviotolentino.wordpress.com/2022/10/30/aleluia/",
    tags: ["Aleluia", "Hebraico", "Grego", "Apocalipse"],
    category: "Estudos"
  },
  {
    id: "raabe-racabe",
    title: "Raabe ou Racabe",
    date: "2025-06-08",
    summary: "A Bíblia apresenta diversos personagens cujos nomes, à primeira vista, parecem idênticos, mas que na verdade carregam significados e origens completamente distintos. Um exemplo fascinante dessa complexidade linguística e teológica encontra-se no que comumente chamamos de “Raabe”.",
    url: "https://otaviotolentino.wordpress.com/2025/06/08/raabe-e-racabe-revelando-a-distincao-entre-dois-nomes/",
    tags: ["Raabe", "Racabe", "Bíblia", "Personagens"],
    category: "Estudos"
  },
  {
    id: "a-tua-paz-pertence",
    title: "À tua Paz Pertence",
    date: "2023-11-26",
    summary: "Qual o significado da expressão “o que à tua paz pertence” em Lucas 19:41-44? Interessante que nessa mesma passagem Jesus fala que havia uma paz reservada à Jerusalém e seu povo, mas logo em seguida menciona que a cidade e seu povo seriam cercados e destruídos.",
    url: "https://otaviotolentino.wordpress.com/2023/11/26/o-que-a-tua-paz-pertence/",
    tags: ["Paz", "Jerusalém", "Lucas", "Jesus"],
    category: "Estudos"
  },
  {
    id: "soberba-e-as-trevas",
    title: "Soberba e as Trevas",
    date: "2022-12-11",
    summary: "A soberba é o motivo da queda dos chamados “anjos caídos”, principalmente o líder deles, chamado de “Luz ou estrela da manhã” ou Lúcifer, bem como de todos os seus seguidores. Não causando nenhuma estranheza, portanto, a clara alusão da atitude e comportamento do maligno com o comportamento das nações e com a sua decorrente destruição por Deus como demonstração da manifestação da justiça divina.",
    url: "https://otaviotolentino.wordpress.com/2022/12/11/soberba-trevas/",
    tags: ["Soberba", "Trevas", "Anjos Caídos", "Lúcifer"],
    category: "Estudos"
  },
  {
    id: "nao-peques-mais",
    title: "Não Peques mais",
    date: "2022-04-03",
    summary: "Neste estudo daremos atenção a uma expressão mencionada algumas vezes por Jesus: “vai e não peques mais”. Alguns acham que por sermos justificados pela fé, estarmos debaixo da graça e sob a lei da liberdade, então não precisamos nos preocupar em deixar de pecar. Será?",
    url: "https://otaviotolentino.wordpress.com/2022/04/03/nao-peques/",
    tags: ["Pecado", "Jesus", "Fé", "Graça", "Lei da Liberdade"],
    category: "Estudos"
  },
  {
    id: "fe-salvou-ou-curou",
    title: "Fé Salvou ou Curou",
    date: "2022-03-27",
    summary: "Claro que a fé salva, mas a fé também é necessária para que haja cura e milagres. E precisamos entender que se todos os que foram curados por Jesus tivessem sido salvos, então a vinda de Jesus teria sido o período de maior quantidade de pessoas salvas. Porém vemos que, na verdade, Jesus passa o capítulo inteiro de Mateus 11 falando exatamente dos lugares onde os milagres de cura aconteceram e que não se converteram.",
    url: "https://otaviotolentino.wordpress.com/2022/03/27/fe-curou/",
    tags: ["Fé", "Salvação", "Cura", "Milagres", "Jesus"],
    category: "Estudos"
  },  
  {
    id: "palavra-eterna",
    title: "1. Palavra Eterna",
    date: "February 13, 2022",
    summary: "Seca-se a erva, murcha e cai a flor, porém a palavra de nosso Deus subsiste eternamente.",
    url: "https://otaviotolentino.wordpress.com/2022/02/13/erva-seca/",
    tags: ["Palavra Eterna", "Erva Seca", "Deus"],
    category: "Estudos"
  },
  {
    id: "arvore-de-vida",
    title: "2. Árvore de Vida",
    date: "February 20, 2022",
    summary: "Os nascidos de semente incorruptível somos feitos novas criaturas para viver eternamente. Afirmamos que nos tornamos e somos assim chamados de Árvores de Vida, que dão frutos de justiça, agradáveis a Deus e duram para sempre.",
    url: "https://otaviotolentino.wordpress.com/2022/02/20/arvore-de-vida/",
    tags: ["Árvore de Vida", "Justiça", "Deus"],
    category: "Estudos"
  },
  {
    id: "manancial",
    title: "3. Manancial",
    date: "February 27, 2022",
    summary: "Após o nascimento espiritual, devemos nos alimentar pela Palavra de Deus a ser guardada em nossos corações para a obediência da fé. A Palavra de Deus é Espírito e Vida. Deus é a fonte da Vida, o manancial de águas vivas.",
    url: "https://otaviotolentino.wordpress.com/2022/02/27/arvore-e-manancial/",
    tags: ["Manancial", "Palavra de Deus", "Vida"],
    category: "Estudos"
  },
  {
    id: "apocalypse-audiovisual",
    title: "Audiovisual",
    date: "January 18, 2022",
    summary: "Estudo do Livro de Apocalipse em 34 Vídeos. Podcast e mais.",
    url: "https://otaviotolentino.wordpress.com/2022/01/18/apocalipse-comentado-otavio-tolentino/",
    tags: ["Apocalipse", "Audiovisual", "Estudo"],
    category: "Estudos"
  },
  {
    id: "apocalypse-book-commented",
    title: "Livro Comentado",
    date: "January 18, 2022",
    summary: `Livro "APOCALIPSE. Entendendo a Revelação de Jesus Cristo: Comentários e Mistérios Revelados". Solicite agora e aproveite essa oportunidade única de conhecer e entender a revelação dos mistérios do Livro Apocalipse.`,
    url: "https://otaviotolentino.wordpress.com/livro-apocalipse-comentado-otavio-tolentino/",
    tags: ["Apocalipse", "Livro", "Comentário"],
    category: "Estudos"
  },
  {
    id: "apocalypse-author-prophetized",
    title: "Autor Profetizado",
    date: "April 14, 2024",
    summary: "Em uma das profecias de Jesus sobre a sua volta Ele acaba revelando quem seria o autor do Livro de Apocalipse. Você já tinha se apercebido disso quando fez a leitura desse texto em João 21?",
    url: "https://otaviotolentino.wordpress.com/2024/04/14/autor-do-livro-de-apocalipse-profetizado/",
    tags: ["Apocalipse", "Profecia", "Jesus"],
    category: "Estudos"
  },
  {
    id: "babilonia-declarada-por-pedro",
    title: "Declarada por Pedro",
    date: "July 18, 2022",
    summary: "Precisamos entender alguns outros aspectos para saber qual era esse lugar físico, chamado babilônia, e que já existia na época de Pedro e conhecido por todos os apóstolos e irmãos da época.",
    url: "https://otaviotolentino.wordpress.com/2022/07/18/babilonia-pedro/",
    tags: ["Babilônia", "Apocalipse", "Pedro"],
    category: "Estudos"
  },
  {
    id: "babilonia-anunciada-por-jesus",
    title: "Anunciada por Jesus",
    date: "April 24, 2022",
    summary: "Há diversos relatos de Jesus, em todo o Evangelho de Mateus e outros livros, que nos apontam para o entendimento de qual é a babilônia do Apocalipse e os motivos.",
    url: "https://otaviotolentino.wordpress.com/2022/04/24/babilonia-por-jesus/",
    tags: ["Babilônia", "Apocalipse", "Jesus", "Mateus"],
    category: "Estudos"
  },
  {
    id: "babilonia-sai-dela",
    title: "Sai dela",
    date: "July 24, 2022",
    summary: "Sai dela, povo meu, para que não sejas participante dos seus pecados, e para que não incorras nas suas pragas.",
    url: "https://otaviotolentino.wordpress.com/2022/07/24/babilonia-sai-dela/",
    tags: ["Babilônia", "Apocalipse", "Pecado", "Pragas"],
    category: "Estudos"
  },
  {
    id: "babilonia-volta-a-origem",
    title: "Volta à Origem",
    date: "April 17, 2022",
    summary: "Que origem será essa? Quase ninguém se lembra mais do lugar do nascimento do Povo de Israel. Qual a importância desse entendimento para sabermos quem é a babilônia do Apocalipse?",
    url: "https://otaviotolentino.wordpress.com/2022/04/17/jerusalem-babilonia/",
    tags: ["Babilônia", "Apocalipse", "Israel", "Jerusalém"],
    category: "Estudos"
  },
  {
    id: "babilonia-revelacao-biblica",
    title: "Revelação Bíblica",
    date: "April 10, 2022",
    summary: "Será revelado o nome da grande cidade de babilônia citada em Apocalipse. E não é o que todos costumam pensar ou dizer, porém essa resposta está anunciada clara e explicitamente nos textos bíblicos, portanto é entendimento espiritual.",
    url: "https://otaviotolentino.wordpress.com/2022/04/10/nome-da-babilonia/",
    tags: ["Babilônia", "Apocalipse", "Revelação", "Bíblia"],
    category: "Estudos"
  },
  {
    id: "primeira-profecia",
    title: "Primeira Profecia",
    date: "July 16, 2023",
    summary: "Apresentaremos, incontestavelmente, algumas outras profecias anteriores a Gênesis 3:15, que remetem diretamente a Jesus e, obviamente, as devidas referências bíblicas que confirmam essa afirmação.",
    url: "https://otaviotolentino.wordpress.com/2023/07/16/gen-3-15-primeira-profecia-sobre-jesus/",
    tags: ["Jesus", "Profecia", "Gênesis"],
    category: "Estudos"
  },
  {
    id: "ministerio-aos-30",
    title: "Ministério aos 30",
    date: "May 8, 2022",
    summary: "Será apenas coincidência ou existe alguma referência bíblica para que fosse assim? E, se há, qual seria essa referência então?",
    url: "https://otaviotolentino.wordpress.com/2022/05/08/ministerio-30-anos/",
    tags: ["Jesus", "Ministério", "30 anos"],
    category: "Estudos"
  },
  {
    id: "paz",
    title: "Paz",
    date: "September 4, 2022",
    summary: "Jesus quando se aproximava de Jerusalém faz uma ressalva que o povo não conhecia o que implicava para que eles tivessem paz, porque estavam sem entendimento.",
    url: "https://otaviotolentino.wordpress.com/2022/09/04/paz/",
    tags: ["Jesus", "Paz", "Jerusalém"],
    category: "Estudos"
  },
  {
    id: "moradas-foi-preparar",
    title: "Moradas foi Preparar",
    date: "January 29, 2023",
    summary: "Muitos cristãos ainda não entenderam que essas moradas são lugares para que os seus seguidores estivessem para sempre com ele.",
    url: "https://otaviotolentino.wordpress.com/2023/01/29/moradas-de-deus/",
    tags: ["Jesus", "Moradas", "Deus"],
    category: "Estudos"
  },
    {
    id: "levou-o-cativeiro",
    title: "Levou o Cativeiro",
    date: "July 20, 2025",
    summary: "Artigo sobre Jesus ter levado cativo o cativeiro.",
    url: "https://otaviotolentino.wordpress.com/2022/09/11/levou-cativo-o-cativeiro/",
    tags: ["Jesus", "Cativeiro", "Libertação"],
    category: "Estudos"
  },
  {
    id: "nossa-pascoa",
    title: "Nossa Páscoa",
    date: "2024-05-19",
    summary: "Para entendermos a revelação desse mistério de Deus e podermos torná-lo claro, precisamos olhar para o conteúdo do Evangelho de João de maneira abrangente e completa, considerando todo o contexto apresentado no livro do princípio até o fim.",
    url: "https://otaviotolentino.wordpress.com/2024/05/19/misterio-ev-de-joao-jesus-cumprimento-da-pascoa/",
    tags: ["Jesus Cristo", "Páscoa", "Evangelho de João"],
    category: "Estudos"
  },
  {
    id: "pedro-redesignado",
    title: "Pedro Redesignado",
    date: "2023-04-09",
    summary: "Pedro não estava cumprindo bem a tarefa dada a ele por Jesus, por isso fez-se necessário a redesignação do Ministério da Ciruncisão de Pedro para Paulo.",
    url: "https://otaviotolentino.wordpress.com/2023/04/09/ministerio-dos-gentios-redesignacao/",
    tags: ["Pedro", "Paulo", "Ministério"],
    category: "Estudos"
  },
  {
    id: "peso-da-lideranca",
    title: "Peso da Liderança",
    date: "2024-02-18",
    summary: "A pressão era extrema e Moisés não aguentou a carga de liderança, dada por Deus, na condução do Povo de Israel da saída do Egito até a entrada na Terra prometida. Mesmo Moisés, tendo recebido capacitação espiritual de Deus para exercê-la, pede a Deus que reduza sua responsabilidade perante o Povo.",
    url: "https://otaviotolentino.wordpress.com/2024/02/18/moises-e-a-lideranca/",
    tags: ["Moisés", "Liderança", "Israel"],
    category: "Estudos"
  },
  {
    id: "salem",
    title: "Salém",
    date: "2024-06-16",
    summary: "Qual a importância da cidade de Salém e por que devemos identificá-la? Ora, seria mais fácil responder, e a todos parece ser, que Salém é a cidade de Jerusalém. Porém, parece, mas “só que não”, como dizem hodiernamente.",
    url: "https://otaviotolentino.wordpress.com/2024/06/16/salem-seria-jerusalem/",
    tags: ["Salém", "Jerusalém", "Bíblia"],
    category: "Estudos"
  },
  {
    id: "jebus",
    title: "Jebus",
    date: "2024-04-07",
    summary: "Você sabe qual era o nome prévio da cidade Jerusalém? A cidade de Jerusalém não se chamava assim nos primórdios, pois era habitada originalmente por outra nação, antes do Povo de Israel entrar na terra prometida e de uma de suas tribos herdá-la e tomar posse dela.",
    url: "https://otaviotolentino.wordpress.com/2024/04/07/jerusalem-nome-previo-e-tribo-herdeira/",
    tags: ["Jebus", "Jerusalém", "Israel"],
    category: "Estudos"
  },
  {
    id: "zelza",
    title: "Zelza ou Tzeltzach",
    date: "2024-11-24",
    summary: "Raquel morreu quando deu à luz Benjamim, pois teve trabalho em seu parto. A pergunta é simples e direta. Qual o nome do lugar onde Raquel, a mulher de Jacó, foi enterrada?",
    url: "https://otaviotolentino.wordpress.com/2024/11/24/lugar-da-morte-e-sepultamento-de-raquel/",
    tags: ["Zelza", "Tzeltzach", "Raquel", "Jacó"],
    category: "Estudos"
  },
  {
    id: "efrata",
    title: "Efrata",
    date: "2024-04-28",
    summary: "Qual a diferença entre a origem de Efraim ou Efrata? Ao fim e ao cabo, chegaremos a uma conclusão surpreendente jamais vista ou indicada mesmo nas próprias escrituras, mas prepare o seu coração para mais uma revelação de Deus diante dos seus olhos.",
    url: "https://otaviotolentino.wordpress.com/2024/04/28/belem-efrata/",
    tags: ["Efrata", "Efraim", "Belém"],
    category: "Estudos"
  },  
  {
    id: "pdfs-gratis",
    title: "Pdf's Grátis",
    date: "2025-07-29",
    summary: "Arquivos anexados a determinados artigos que disponibilizam o conteúdo completo de estudos sobre temas específicos. São arquivos em formato 'Pdf' que estão disponíveis para serem baixados gratuitamente.",
    url: "https://otaviotolentino.wordpress.com/pdfs-gratis/",
    tags: ["Pdf's Grátis", "Downloads", "Estudos"],
    category: "Estudos"
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
  const resultArticles = uniqueArticleIds.map(id => articles.find(a => a.id === id)).filter(a => a !== undefined) as Article[];

  // Apply sorting for specific themes
  if (themeId === "jesus-christ" || themeId === "deus" || themeId === "moses" || themeId === "paul" || themeId === "abraham" || themeId === "jo" || themeId === "babilonia" || themeId === "discipleship" || themeId === "biblical-terms" || themeId === "localidade") {
    resultArticles.sort((a, b) => a.title.localeCompare(b.title));
  }

  return resultArticles;
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