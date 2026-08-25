export interface CarouselImage {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export interface DigitalMaterial {
  id: string;
  number: number;
  title: string;
  category: string;
  description: string;
  iconName: string;
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

export const collection16Materials: DigitalMaterial[] = [
  { id: "mat-1", number: 1, title: "Trilha Fiscal — Fundamentos da Área Fiscal", category: "Fundamentos da Reforma", description: "Bases conceituais do sistema tributário e premissas da reforma.", iconName: "BookOpen" },
  { id: "mat-2", number: 2, title: "Guia Visual da Reforma Tributária", category: "Fundamentos da Reforma", description: "Visão geral completa e linha do tempo do novo modelo tributário.", iconName: "Map" },
  { id: "mat-3", number: 3, title: "Guia Visual do IBS", category: "Tributos e Mecanismos", description: "Imposto sobre Bens e Serviços (estados e municípios) detalhado.", iconName: "Layers" },
  { id: "mat-4", number: 4, title: "Guia Visual da CBS", category: "Tributos e Mecanismos", description: "Contribuição sobre Bens e Serviços (federal) em mapa explicativo.", iconName: "PieChart" },
  { id: "mat-5", number: 5, title: "Guia Visual do Imposto Seletivo", category: "Tributos e Mecanismos", description: "O 'Imposto do Pecado', incidência, alíquotas e regras tributárias.", iconName: "AlertTriangle" },
  { id: "mat-6", number: 6, title: "Guia Visual do Simples Nacional", category: "Pequenos Negócios e Pessoas Físicas", description: "Regras de opção, aproveitamento de créditos e cálculo no Simples.", iconName: "Store" },
  { id: "mat-7", number: 7, title: "Guia Visual do MEI", category: "Pequenos Negócios e Pessoas Físicas", description: "Impactos da reforma para o Microempreendedor Individual.", iconName: "UserCheck" },
  { id: "mat-8", number: 8, title: "Guia Visual do Split Payment", category: "Tributos e Mecanismos", description: "Segregação e recolhimento automático no momento do pagamento.", iconName: "Zap" },
  { id: "mat-9", number: 9, title: "Guia Visual do SINTER, CIB, SINIR e CNM", category: "Administração Pública e Municípios", description: "Cadastros nacionais, integração de dados e novos registros fiscais.", iconName: "Database" },
  { id: "mat-10", number: 10, title: "Guia Visual para Municípios", category: "Administração Pública e Municípios", description: "Transição do ISS para o IBS, retenções e gestão de receitas.", iconName: "Building2" },
  { id: "mat-11", number: 11, title: "Guia Visual das Licitações Públicas", category: "Licitações e Temas Práticos", description: "Formação de preços, reequilíbrio econômico e novos editais.", iconName: "FileText" },
  { id: "mat-12", number: 12, title: "Guia Visual do CNPJ Técnico", category: "Pequenos Negócios e Pessoas Físicas", description: "Adequação operacional de prestadores de serviços e PJ.", iconName: "Briefcase" },
  { id: "mat-13", number: 13, title: "Pessoa Física na Reforma", category: "Pequenos Negócios e Pessoas Físicas", description: "Impactos no consumo, tributação de renda e patrimônio.", iconName: "User" },
  { id: "mat-14", number: 14, title: "Nanoempreendedor", category: "Pequenos Negócios e Pessoas Físicas", description: "Nova figura tributária e limites de enquadramento.", iconName: "Sparkles" },
  { id: "mat-15", number: 15, title: "Cashback do IBS e da CBS", category: "Tributos e Mecanismos", description: "Mecanismo de devolução de tributos para famílias de baixa renda.", iconName: "RefreshCw" },
  { id: "mat-16", number: 16, title: "Créditos do IBS e da CBS", category: "Tributos e Mecanismos", description: "Regra da não-cumulatividade plena e apropriação de créditos.", iconName: "CreditCard" }
];

export const targetAudience: AudienceCard[] = [
  {
    id: "aud-1",
    title: "Para Profissionais Contábeis e Fiscais",
    description: "Compreenda a estrutura do IBS, CBS, créditos acumulados, Split Payment e adaptações no Simples Nacional para atender clientes com total segurança."
  },
  {
    id: "aud-2",
    title: "Para Servidores Públicos e Municípios",
    description: "Entenda os impactos municipais na arrecadação, a transição do ISS para o IBS e a aplicação prática do SINTER, CIB, SINIR e CNM."
  },
  {
    id: "aud-3",
    title: "Para Quem Trabalha com Licitações",
    description: "Saiba como o novo modelo afeta a composição de custos em propostas, a revisão de contratos públicos e as regras de julgamento em editais."
  },
  {
    id: "aud-4",
    title: "Para MEIs, Autônomos e Empreendedores",
    description: "Acompanhe as mudanças diretas no MEI, a figura do Nanoempreendedor, o CNPJ Técnico e os reflexos tributários para pessoas físicas."
  }
];

export const bundleItems = [
  "Trilha Fiscal — Fundamentos da Área Fiscal",
  "Guia Visual da Reforma Tributária",
  "Guia Visual do IBS",
  "Guia Visual da CBS",
  "Guia Visual do Imposto Seletivo",
  "Guia Visual do Simples Nacional",
  "Guia Visual do MEI",
  "Guia Visual do Split Payment",
  "Guia Visual do SINTER, CIB, SINIR e CNM",
  "Guia Visual para Municípios",
  "Guia Visual das Licitações Públicas",
  "Guia Visual do CNPJ Técnico",
  "Pessoa Física na Reforma",
  "Nanoempreendedor",
  "Cashback do IBS e da CBS",
  "Créditos do IBS e da CBS"
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
    title: "1. Escolha sua opção",
    description: "Selecione o plano ideal para suas necessidades (Plano Básico ou Coleção Completa).",
    iconName: "CreditCard"
  },
  {
    number: "02",
    title: "2. Realize o pagamento",
    description: "Pagamento 100% seguro via Pix ou Cartão de Crédito com confirmação rápida.",
    iconName: "ShieldCheck"
  },
  {
    number: "03",
    title: "3. Receba as instruções de acesso",
    description: "Você receberá imediatamente em seu e-mail o link para acessar o conteúdo.",
    iconName: "MailCheck"
  },
  {
    number: "04",
    title: "4. Consulte os materiais digitais",
    description: "Baixe os arquivos em PDF ou consulte direto pelo celular, tablet ou computador.",
    iconName: "Download"
  }
];

export const faqsData: FAQItem[] = [
  {
    question: "O material é digital?",
    answer: "Sim. Todos os 16 materiais são disponibilizados no formato digital em PDF de alta qualidade para download e consulta em qualquer dispositivo (celular, tablet ou computador)."
  },
  {
    question: "Para quem os materiais são indicados?",
    answer: "A coleção foi desenvolvida para contadores, profissionais fiscais, servidores públicos, profissionais de licitação, empreendedores, MEIs e estudantes que precisam entender a Reforma Tributária sem complicações."
  },
  {
    question: "Quais assuntos estão incluídos?",
    answer: "A coleção completa reúne 16 materiais visuais abrangendo IBS, CBS, Imposto Seletivo, Simples Nacional, MEI, Split Payment, SINTER/CIB, Municípios, Licitações Públicas, CNPJ Técnico, Pessoa Física, Nanoempreendedor, Cashback e Créditos Tributários."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Assim que o pagamento for confirmado pela plataforma de checkout, as instruções de acesso à área de membros exclusiva são enviadas automaticamente para o e-mail cadastrado."
  },
  {
    question: "Quais formas de pagamento estão disponíveis?",
    answer: "O pagamento pode ser realizado por Pix (com liberação rápida) ou Cartão de Crédito diretamente na página oficial e segura do checkout."
  },
  {
    question: "Posso consultar pelo celular?",
    answer: "Sim. Todos os PDFs foram formatados para proporcionar uma excelente leitura em smartphones, tablets e computadores."
  },
  {
    question: "Existe garantia?",
    answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você achar que o material não atendeu suas expectativas, basta solicitar o reembolso conforme as regras da plataforma."
  }
];
