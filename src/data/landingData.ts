export interface CarouselImage {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export interface DifferentialCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  description: string;
}

export interface BonusItem {
  number: string;
  title: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  tagText: string;
  planInclusion: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface AccessStepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const heroBenefits = [
  "Materiais digitais organizados por assunto",
  "Mapas visuais para consulta rápida",
  "IBS, CBS e Imposto Seletivo explicados com clareza",
  "Conteúdos para estudo e revisão",
  "Glossários, checklists e materiais complementares"
];

export const trustItems = [
  { id: "1", title: "ACESSO DIGITAL", subtitle: "Liberação imediata", icon: "Zap" },
  { id: "2", title: "ÁREA DE MEMBROS", subtitle: "Plataforma organizada", icon: "ShieldCheck" },
  { id: "3", title: "ESTUDE ONDE QUISER", subtitle: "Celular, Tablet ou PC", icon: "Smartphone" },
  { id: "4", title: "DOWNLOAD DOS MATERIAIS", subtitle: "Arquivos em PDF de alta qualidade", icon: "Download" },
];

export const carouselImages: CarouselImage[] = [
  {
    id: "amostra-01",
    title: "1. O Que É a Reforma Tributária?",
    category: "Visão Geral",
    src: "/material/amostra-01.jpg",
    alt: "Mapa mental resumindo o que é a reforma tributária no Brasil"
  },
  {
    id: "amostra-08",
    title: "02. Como Funciona Hoje e O Que Mudará?",
    category: "Comparativo de Transição",
    src: "/material/amostra-08.jpg",
    alt: "Infográfico comparando o momento do pagamento do fornecedor e recolhimento de tributos antes e depois do Split Payment"
  },
  {
    id: "amostra-03",
    title: "2. Por Que o Sistema Precisa Mudar?",
    category: "Diagnóstico Fiscal",
    src: "/material/amostra-03.jpg",
    alt: "Infográfico dos problemas atuais do sistema tributário e consequências para empresas e consumidores"
  },
  {
    id: "amostra-02",
    title: "01. O Que É Split Payment?",
    category: "Mecanismo Financeiro",
    src: "/material/amostra-02.jpg",
    alt: "Infográfico explicativo sobre o mecanismo de Split Payment, segregação de IBS e CBS"
  },
  {
    id: "amostra-07",
    title: "01. O Que É o Imposto Seletivo?",
    category: "Tributo Específico",
    src: "/material/amostra-07.jpg",
    alt: "Infográfico detalhando características, finalidade e regras do Imposto Seletivo (IS)"
  },
  {
    id: "amostra-06",
    title: "5. Como Funcionam os Créditos?",
    category: "Não-Cumulatividade",
    src: "/material/amostra-06.jpg",
    alt: "Infográfico explicando o aproveitamento amplo de créditos no novo sistema tributário"
  },
  {
    id: "amostra-04",
    title: "1. MEI, Autônomo ou Informal?",
    category: "Regimes e Formalização",
    src: "/material/amostra-04.jpg",
    alt: "Mapa comparativo de regras para MEI, trabalhador autônomo e informal com definições"
  },
  {
    id: "amostra-05",
    title: "02. O Que É Planejamento Tributário?",
    category: "Estratégia Fiscal",
    src: "/material/amostra-05.jpg",
    alt: "Quadro comparativo entre planejar com segurança jurídica e improvisar obrigações fiscais"
  }
];

export const differentials: DifferentialCard[] = [
  {
    id: "diff-1",
    title: "ENXERGUE O TODO",
    description: "Mapas visuais organizam os principais conceitos para você entender onde cada assunto entra — e como as mudanças se conectam.",
    iconName: "FileSpreadsheet"
  },
  {
    id: "diff-2",
    title: "ENTENDA OS NOVOS TRIBUTOS",
    description: "IBS, CBS, Imposto Seletivo e outros pontos importantes explicados de forma visual, direta e muito mais fácil de acompanhar.",
    iconName: "PieChart"
  },
  {
    id: "diff-3",
    title: "SAIBA O QUE ESTUDAR PRIMEIRO",
    description: "Em vez de pular entre vídeos, notícias e textos soltos, siga uma sequência que ajuda você a construir conhecimento passo a passo.",
    iconName: "Layers"
  },
  {
    id: "diff-4",
    title: "TENHA A RESPOSTA À MÃO",
    description: "Esqueceu um conceito? Ficou com uma dúvida? Volte ao material e encontre rapidamente o assunto que precisa revisar.",
    iconName: "FolderCheck"
  }
];

export interface BenefitDetail {
  title: string;
  description: string;
}

export const benefitsList: BenefitDetail[] = [
  {
    title: "GANHE TEMPO NOS ESTUDOS",
    description: "Encontre informações organizadas sem precisar começar sua pesquisa do zero."
  },
  {
    title: "CONECTE IBS, CBS E IMPOSTO SELETIVO",
    description: "Entenda onde cada tributo entra e como eles fazem parte do novo modelo."
  },
  {
    title: "VISUALIZE A TRANSIÇÃO",
    description: "Acompanhe as mudanças por etapas sem se perder entre datas e regras."
  },
  {
    title: "CONSTRUA UMA BASE MAIS SÓLIDA",
    description: "Entenda primeiro o essencial para depois avançar aos conteúdos mais técnicos."
  },
  {
    title: "CONSULTE SEMPRE QUE PRECISAR",
    description: "Use os mapas como apoio para revisar conceitos e recuperar informações rapidamente."
  },
  {
    title: "APRENDA NO SEU RITMO",
    description: "Estude, revise e volte aos assuntos quantas vezes precisar."
  }
];

export const targetAudience: AudienceCard[] = [
  {
    id: "aud-1",
    title: "COMECE PELO QUE REALMENTE IMPORTA",
    description: "Construa uma base clara da Reforma antes de avançar para leis, detalhes técnicos e conteúdos mais complexos."
  },
  {
    id: "aud-2",
    title: "TRANSFORME INFORMAÇÃO SOLTA EM UMA VISÃO CLARA",
    description: "Entenda onde IBS, CBS, Imposto Seletivo, transição e outros temas se encaixam dentro da Reforma."
  },
  {
    id: "aud-3",
    title: "APRENDA SEM DEPENDER DE HORAS DE CONTEÚDO",
    description: "Use mapas visuais para estudar, revisar e consultar os principais assuntos de forma muito mais prática."
  },
  {
    id: "aud-4",
    title: "SAIBA EXATAMENTE O QUE ESTUDAR DEPOIS",
    description: "Siga uma sequência lógica e pare de perder tempo tentando descobrir sozinho qual assunto vem primeiro."
  },
  {
    id: "aud-5",
    title: "FALE SOBRE A REFORMA COM MAIS SEGURANÇA",
    description: "Construa uma base que ajude você a acompanhar notícias, reuniões, aulas e conversas profissionais com muito mais clareza."
  },
  {
    id: "aud-6",
    title: "TRADUZA O “FISCALÊS” SEM COMPLICAÇÃO",
    description: "Consulte termos e conceitos técnicos em uma linguagem mais simples sempre que surgir uma dúvida."
  }
];

export const bundleItems = [
  "Mapa Fácil da Reforma Tributária",
  "Visão geral da Reforma",
  "IBS explicado visualmente",
  "CBS explicado visualmente",
  "Imposto Seletivo",
  "Cronograma de transição",
  "Impactos fiscais e contábeis",
  "Documentos fiscais",
  "Obrigações relacionadas à Reforma",
  "Simples Nacional",
  "MEI",
  "Regimes tributários",
  "Termos técnicos traduzidos",
  "Mapas organizados por assunto",
  "Materiais complementares"
];

export const bonusList: BonusItem[] = [
  {
    number: "01",
    title: "Glossário Visual da Reforma Tributária",
    description: "Material de consulta rápida para compreender termos frequentemente utilizados nas discussões sobre a Reforma.",
    benefits: ["IBS", "CBS", "Imposto Seletivo", "Termos técnicos traduzidos", "Consulta rápida"],
    imageSrc: "/material/amostra-01.jpg",
    tagText: "BÔNUS 01",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "02",
    title: "Tabelas de códigos fiscais",
    description: "Material prático e explicativo para rápida consulta aos principais códigos e campos fiscais aplicados ao novo modelo.",
    benefits: ["Consulta CST", "Regras cClassTrib", "Identificação cIndOp", "Orientação cCredPres"],
    imageSrc: "/material/amostra-02.jpg",
    tagText: "BÔNUS 02",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "03",
    title: "Checklist — O que estudar primeiro",
    description: "Uma sequência prática para ajudar quem ainda não sabe por onde começar seus estudos sobre a nova legislação.",
    benefits: ["Trilha de aprendizagem", "Passo a passo por prioridade", "Checklist de conceitos fundamentais"],
    imageSrc: "/material/amostra-03.jpg",
    tagText: "BÔNUS 03",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "04",
    title: "Calculadora de IBS e CBS",
    description: "Planilha de apoio destinada a facilitar simulações e conferências relacionadas aos novos tributos do IVA Dual.",
    benefits: ["Simulação visual", "Crédito vs Débito", "Estimativa por alíquota", "Apoio didático"],
    imageSrc: "/material/amostra-05.jpg",
    tagText: "BÔNUS 04",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "05",
    title: "Linha do Tempo da Reforma",
    description: "Visualize as principais etapas da implantação do novo sistema tributário de 2026 até 2033.",
    benefits: ["Marcos 2026-2033", "Extinção gradativa", "Fases de testes", "Acompanhamento anual"],
    imageSrc: "/material/amostra-08.jpg",
    tagText: "BÔNUS 05",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "06",
    title: "Guia de preenchimento IBS/CBS",
    description: "Material de apoio visual para identificar campos e informações relacionadas ao preenchimento de documentos fiscais.",
    benefits: ["Orientação visual de campos", "Destaque de IBS e CBS", "Evita dúvidas operacionais"],
    imageSrc: "/material/amostra-06.jpg",
    tagText: "BÔNUS 06",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "07",
    title: "Antes e Depois da Reforma",
    description: "Quadro comparativo para visualizar algumas das principais diferenças entre o sistema anterior e o novo modelo unificado.",
    benefits: ["PIS/COFINS vs CBS", "ICMS/ISS vs IBS", "Não-cumulatividade ampla", "Tabela comparativa"],
    imageSrc: "/material/amostra-07.jpg",
    tagText: "BÔNUS 07",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "08",
    title: "Guia de Documentos Fiscais",
    description: "Material organizado para facilitar o entendimento das alterações relacionadas aos documentos fiscais eletrônicos.",
    benefits: ["Mudanças na NF-e", "Impacto no NFC-e", "Alterações no CT-e", "Padronização da NFS-e"],
    imageSrc: "/material/amostra-04.jpg",
    tagText: "BÔNUS 08",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Ana Paula Silva",
    role: "Analista Fiscal Sênior",
    text: "Tentava ler a lei pura e ficava com a cabeça dando nós. Quando abri o mapa visual e vi a transição do IBS e CBS tudo desenhadinho, deu aquele alívio imediato. Salvou demais o meu tempo no trabalho!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-2",
    name: "Henrique Santos",
    role: "Contador & Consultor Tributário",
    text: "Eu perdia horas tentando juntar informações soltas na internet para explicar a Reforma pros meus clientes. O material entregou tudo mastigado e organizado. Fica impossível não entender.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-3",
    name: "Edson Ferreira",
    role: "Auxiliar Fiscal & Estudante",
    text: "Tinha muito medo de ficar pra trás no escritório com toda essa mudança da Reforma. Os resumos e a linha do tempo me deram uma clareza absurda. Hoje consigo discutir os pontos da transição com total segurança!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

export const accessSteps: AccessStepItem[] = [
  {
    number: "01",
    title: "FINALIZE SUA COMPRA",
    description: "O pagamento é processado pela plataforma de checkout segura com criptografia.",
    iconName: "CreditCard"
  },
  {
    number: "02",
    title: "RECEBA SEU ACESSO",
    description: "Após a confirmação, as informações necessárias para acessar o conteúdo serão enviadas para seu e-mail.",
    iconName: "MailCheck"
  },
  {
    number: "03",
    title: "ACESSE OS MATERIAIS",
    description: "Encontre todos os arquivos em PDF e bônus organizados dentro da área de membros exclusiva.",
    iconName: "FolderKanban"
  },
  {
    number: "04",
    title: "ESTUDE ONDE PREFERIR",
    description: "Utilize celular, tablet ou computador e consulte seus materiais sempre que surgir uma dúvida.",
    iconName: "MonitorCheck"
  }
];

export const faqsData: FAQItem[] = [
  {
    question: "Preciso ser contador para utilizar o material?",
    answer: "Não. O conteúdo foi estruturado para estudantes, profissionais fiscais e contábeis e também para quem está começando a conhecer a Reforma Tributária."
  },
  {
    question: "O acesso é liberado após a compra?",
    answer: "Sim. O acesso é disponibilizado após a confirmação do pagamento, de acordo com o processamento realizado pela plataforma."
  },
  {
    question: "O conteúdo aborda IBS e CBS?",
    answer: "Sim. IBS e CBS fazem parte dos temas centrais e aparecem em diferentes materiais da coleção."
  },
  {
    question: "Os bônus fazem parte de qual plano?",
    answer: "Os materiais adicionais indicados como bônus fazem parte do Plano Completo."
  },
  {
    question: "Os materiais podem receber atualizações?",
    answer: "Materiais relacionados à Reforma poderão ser revisados quando alterações relevantes tornarem uma atualização necessária."
  },
  {
    question: "Por quanto tempo posso acessar?",
    answer: "Você terá acesso contínuo aos materiais dentro da área de membros para consultar e baixar os PDFs sempre que desejar."
  },
  {
    question: "O material substitui uma consultoria?",
    answer: "Não. O conteúdo possui finalidade educacional e informativa e não substitui orientação contábil, fiscal, tributária ou jurídica individualizada."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "As opções disponíveis (como PIX, Cartão de Crédito e Boleto) serão exibidas diretamente na página oficial de checkout."
  }
];
