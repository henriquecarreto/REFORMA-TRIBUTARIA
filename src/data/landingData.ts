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
  categorySlug: 'fundamentos' | 'tributos' | 'negocios' | 'municipios' | 'licitacoes' | 'bonus';
  description: string;
  iconName: string;
  coverImage?: string;
  isBonus?: boolean;
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
  "IBS e CBS explicados de forma simples.",
  "Entenda os impactos no Simples Nacional e no MEI.",
  "Conheça as mudanças para municípios e licitações.",
  "Materiais visuais para consulta rápida."
];

export const trustItems = [
  { id: "1", title: "ACESSO DIGITAL", subtitle: "Liberação imediata", icon: "Zap" },
  { id: "2", title: "ÁREA DE MEMBROS", subtitle: "Plataforma organizada", icon: "ShieldCheck" },
  { id: "3", title: "ESTUDE ONDE QUISER", subtitle: "Celular, Tablet ou PC", icon: "Smartphone" },
  { id: "4", title: "DOWNLOAD DOS MATERIAIS", subtitle: "Arquivos em PDF de alta qualidade", icon: "Download" },
];

export const carouselImages: CarouselImage[] = [
  {
    id: "carrossel-01",
    title: "1. Trilha Fiscal - Fundamentos da Área Fiscal",
    category: "Fundamentos Fiscais",
    src: "/material/carrossel-01-trilha-fiscal.jpg",
    alt: "Guia Visual Trilha Fiscal - Fundamentos da Área Fiscal"
  },
  {
    id: "carrossel-02",
    title: "2. Reforma Tributária para Municípios",
    category: "Gestão Municipal",
    src: "/material/carrossel-02-municipios.jpg",
    alt: "Guia Visual Reforma Tributária para Municípios"
  },
  {
    id: "carrossel-03",
    title: "3. Reforma Tributária nas Licitações Públicas",
    category: "Licitações Públicas",
    src: "/material/carrossel-03-licitacoes.jpg",
    alt: "Guia Visual Reforma Tributária nas Licitações Públicas"
  },
  {
    id: "carrossel-04",
    title: "4. SINTER, CIB, CNIR e CNM",
    category: "Cadastro Imobiliário",
    src: "/material/carrossel-04-sinter-cib.jpg",
    alt: "Guia Visual SINTER, CIB, CNIR e CNM"
  },
  {
    id: "carrossel-05",
    title: "5. CBS & IBS - O Novo IVA Dual Brasileiro",
    category: "Tributação do Consumo",
    src: "/material/carrossel-05-cbs-ibs.jpg",
    alt: "Guia Visual CBS & IBS - O Novo IVA Dual Brasileiro"
  }
];

export const differentials: DifferentialCard[] = [
  {
    id: "diff-1",
    title: "ENXERGUE O TODO",
    description: "Mapas visuais organizam os principais conceitos para você entender onde cada assunto entra e como as mudanças se conectam.",
    iconName: "FileSpreadsheet"
  },
  {
    id: "diff-2",
    title: "ENTENDA OS NOVOS TRIBUTOS",
    description: "IBS, CBS, Imposto Seletivo e outros pontos importantes explicados de forma visual, direta e fácil de acompanhar.",
    iconName: "PieChart"
  },
  {
    id: "diff-3",
    title: "SAIBA O QUE ESTUDAR PRIMEIRO",
    description: "Em vez de pular entre conteúdos soltos, siga uma sequência que ajuda você a construir conhecimento passo a passo.",
    iconName: "Layers"
  },
  {
    id: "diff-4",
    title: "TENHA A RESPOSTA À MÃO",
    description: "Use o material de apoio para consultar conceitos e recuperar informações rapidamente sempre que precisar.",
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
  }
];

export const main12Materials: DigitalMaterial[] = [
  { 
    id: "mat-1", 
    number: 1, 
    title: "Trilha Fiscal: Fundamentos da Área Fiscal", 
    category: "Fundamentos", 
    categorySlug: "fundamentos",
    description: "Bases conceituais do sistema tributário e premissas da reforma.", 
    iconName: "BookOpen",
    coverImage: "/hero/capas/capa-04-trilha-fiscal.jpg"
  },
  { 
    id: "mat-2", 
    number: 2, 
    title: "Guia Visual da Reforma Tributária", 
    category: "Fundamentos", 
    categorySlug: "fundamentos",
    description: "Visão geral completa e linha do tempo do novo modelo tributário.", 
    iconName: "Map",
    coverImage: "/hero/capas/capa-05-consumo.jpg"
  },
  { 
    id: "mat-3", 
    number: 3, 
    title: "Guia Visual do IBS", 
    category: "Tributos", 
    categorySlug: "tributos",
    description: "Imposto sobre Bens e Serviços para estados e municípios detalhado.", 
    iconName: "Layers",
    coverImage: "/hero/capas/capa-01-cbs-ibs.jpg"
  },
  { 
    id: "mat-4", 
    number: 4, 
    title: "Guia Visual da CBS", 
    category: "Tributos", 
    categorySlug: "tributos",
    description: "Contribuição sobre Bens e Serviços no âmbito federal em mapa explicativo.", 
    iconName: "PieChart",
    coverImage: "/material/amostra-01.jpg"
  },
  { 
    id: "mat-5", 
    number: 5, 
    title: "Guia Visual do Imposto Seletivo", 
    category: "Tributos", 
    categorySlug: "tributos",
    description: "Conheça a finalidade, a incidência e as principais regras do Imposto Seletivo.", 
    iconName: "AlertTriangle",
    coverImage: "/material/amostra-07.jpg"
  },
  { 
    id: "mat-6", 
    number: 6, 
    title: "Guia Visual do Simples Nacional", 
    category: "Pequenos negócios", 
    categorySlug: "negocios",
    description: "Regras de opção, aproveitamento de créditos e apuração no Simples.", 
    iconName: "Store",
    coverImage: "/material/amostra-04.jpg"
  },
  { 
    id: "mat-7", 
    number: 7, 
    title: "Guia Visual do MEI", 
    category: "Pequenos negócios", 
    categorySlug: "negocios",
    description: "Impactos da reforma para o Microempreendedor Individual.", 
    iconName: "UserCheck",
    coverImage: "/material/amostra-04.jpg"
  },
  { 
    id: "mat-8", 
    number: 8, 
    title: "Guia Visual do Split Payment", 
    category: "Tributos", 
    categorySlug: "tributos",
    description: "Segregação e recolhimento automático no momento do pagamento.", 
    iconName: "Zap",
    coverImage: "/material/amostra-02.jpg"
  },
  { 
    id: "mat-9", 
    number: 9, 
    title: "Guia Visual do SINTER, CIB, SINIR e CNM", 
    category: "Municípios", 
    categorySlug: "municipios",
    description: "Cadastros nacionais, integração de dados e novos registros fiscais.", 
    iconName: "Database",
    coverImage: "/material/amostra-08.jpg"
  },
  { 
    id: "mat-10", 
    number: 10, 
    title: "Guia Visual para Municípios", 
    category: "Municípios", 
    categorySlug: "municipios",
    description: "Transição do ISS para o IBS, retenções e gestão de receitas.", 
    iconName: "Building2",
    coverImage: "/hero/capas/capa-02-municipios.jpg"
  },
  { 
    id: "mat-11", 
    number: 11, 
    title: "Guia Visual das Licitações Públicas", 
    category: "Licitações", 
    categorySlug: "licitacoes",
    description: "Formação de preços, reequilíbrio econômico e contratos públicos.", 
    iconName: "FileText",
    coverImage: "/hero/capas/capa-03-licitacoes.jpg"
  },
  { 
    id: "mat-12", 
    number: 12, 
    title: "Guia Visual do CNPJ Técnico", 
    category: "Pequenos negócios", 
    categorySlug: "negocios",
    description: "Entenda a inscrição de pessoas físicas no CNPJ para fins cadastrais e fiscais.", 
    iconName: "Briefcase",
    coverImage: "/material/amostra-05.jpg"
  }
];

export const bonus4Materials: DigitalMaterial[] = [
  { 
    id: "mat-13", 
    number: 13, 
    title: "Pessoa Física na Reforma", 
    category: "Bônus", 
    categorySlug: "bonus",
    description: "Veja quando pessoas físicas podem ser alcançadas pelas regras do IBS e da CBS.", 
    iconName: "User",
    coverImage: "/material/amostra-01.jpg",
    isBonus: true
  },
  { 
    id: "mat-14", 
    number: 14, 
    title: "Nanoempreendedor", 
    category: "Bônus", 
    categorySlug: "bonus",
    description: "Entenda a nova figura fiscal e seus critérios operacionais.", 
    iconName: "Sparkles",
    coverImage: "/material/amostra-02.jpg",
    isBonus: true
  },
  { 
    id: "mat-15", 
    number: 15, 
    title: "Cashback do IBS e da CBS", 
    category: "Bônus", 
    categorySlug: "bonus",
    description: "Entenda a devolução de tributos para famílias de baixa renda.", 
    iconName: "RefreshCw",
    coverImage: "/material/amostra-03.jpg",
    isBonus: true
  },
  { 
    id: "mat-16", 
    number: 16, 
    title: "Créditos do IBS e da CBS", 
    category: "Bônus", 
    categorySlug: "bonus",
    description: "Regras da não-cumulatividade plena e apropriação de créditos.", 
    iconName: "CreditCard",
    coverImage: "/material/amostra-06.jpg",
    isBonus: true
  }
];

export const collection16Materials: DigitalMaterial[] = [
  ...main12Materials,
  ...bonus4Materials
];

export const targetAudience: AudienceCard[] = [
  {
    id: "aud-1",
    title: "Para Profissionais Contábeis e Fiscais",
    description: "Compreenda a estrutura do IBS, CBS, créditos acumulados, Split Payment e adaptações no Simples Nacional para acompanhar as mudanças com mais clareza."
  },
  {
    id: "aud-2",
    title: "Para Servidores Públicos e Municípios",
    description: "Entenda os impactos municipais na arrecadação, a transição do ISS para o IBS e a aplicação prática dos novos cadastros nacionais."
  },
  {
    id: "aud-3",
    title: "Para Quem Trabalha com Licitações",
    description: "Saiba como o novo modelo afeta a composição de custos em propostas, a revisão de contratos públicos e os julgamentos em editais."
  },
  {
    id: "aud-4",
    title: "Para MEIs, Autônomos e Empreendedores",
    description: "Acompanhe as mudanças diretas no MEI, a figura do Nanoempreendedor, o CNPJ Técnico e os reflexos tributários."
  }
];

export const bundleItems = [
  "Trilha Fiscal: Fundamentos da Área Fiscal",
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
  "Pessoa Física na Reforma (Bônus)",
  "Nanoempreendedor (Bônus)",
  "Cashback do IBS e da CBS (Bônus)",
  "Créditos do IBS e da CBS (Bônus)"
];

export const bonusList: BonusItem[] = [
  {
    number: "01",
    title: "Pessoa Física na Reforma",
    description: "Veja quando pessoas físicas podem ser alcançadas pelas regras do IBS e da CBS.",
    benefits: ["Entendimento do consumo", "Tributação de patrimônio", "Critérios cadastrais"],
    imageSrc: "/material/amostra-01.jpg",
    tagText: "BÔNUS 01",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "02",
    title: "Nanoempreendedor",
    description: "Análise da nova figura fiscal criada na reforma para atividades de menor porte.",
    benefits: ["Limites operacionais", "Regras de apuração", "Conceito didático"],
    imageSrc: "/material/amostra-02.jpg",
    tagText: "BÔNUS 02",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "03",
    title: "Cashback do IBS e da CBS",
    description: "Como funciona o mecanismo de devolução de tributos para famílias de baixa renda.",
    benefits: ["Devolução social", "Cálculo simplificado", "Regras operacionais"],
    imageSrc: "/material/amostra-03.jpg",
    tagText: "BÔNUS 03",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  },
  {
    number: "04",
    title: "Créditos do IBS e da CBS",
    description: "Guia visual sobre o funcionamento da não-cumulatividade plena e apropriação de créditos.",
    benefits: ["Aproveitamento amplo", "Regras de creditamento", "Comparativo didático"],
    imageSrc: "/material/amostra-05.jpg",
    tagText: "BÔNUS 04",
    planInclusion: "INCLUSO NO PLANO COMPLETO"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Ana Paula Silva",
    role: "Analista Fiscal Sênior",
    text: "Tentava ler a lei pura e ficava com a cabeça cheia de dúvidas. Quando abri os guias visuais e vi a transição do IBS e CBS tudo organizado, deu aquele alívio imediato. Salvou meu tempo de estudo!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-2",
    name: "Henrique Santos",
    role: "Contador e Consultor Tributário",
    text: "Eu perdia horas tentando juntar informações soltas na internet para entender a Reforma. O material entregou tudo estruturado e visual. Ficou muito mais fácil de consultar.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "test-3",
    name: "Edson Ferreira",
    role: "Auxiliar Fiscal e Estudante",
    text: "Tinha receio de ficar desatualizado com as mudanças da Reforma. Os resumos e a linha do tempo me deram uma clareza excelente. Hoje consigo acompanhar os assuntos com tranquilidade.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

export const accessSteps: AccessStepItem[] = [
  {
    number: "01",
    title: "1. Escolha sua opção",
    description: "Selecione o plano ideal para suas necessidades.",
    iconName: "CreditCard"
  },
  {
    number: "02",
    title: "2. Realize o pagamento",
    description: "Pagamento seguro via Pix ou Cartão de Crédito com confirmação rápida.",
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
    answer: "Sim. Todos os 16 materiais são disponibilizados no formato digital em PDF de alta qualidade para download e consulta em qualquer dispositivo."
  },
  {
    question: "Para quem os materiais são indicados?",
    answer: "A coleção foi desenvolvida para contadores, profissionais fiscais, servidores públicos, profissionais de licitação, empreendedores, MEIs e estudantes que precisam entender a Reforma Tributária com clareza."
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
    answer: "Sim. Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você considerar que o material não atendeu suas expectativas, basta solicitar o reembolso."
  }
];
