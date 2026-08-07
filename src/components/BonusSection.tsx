import React, { useState } from 'react';
import { Gift, CheckCircle2, FileText, ArrowDown } from 'lucide-react';

interface BonusCardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  alt: string;
}

const fourBonuses: BonusCardData[] = [
  {
    id: "bonus-01",
    badge: "BÔNUS 01",
    title: "QUADRO ANTES X DEPOIS DA REFORMA",
    description: "Compare de forma visual alguns dos principais pontos do sistema atual com as mudanças trazidas pelo novo modelo tributário.",
    benefits: [
      "Visualize as principais diferenças",
      "Compare o cenário atual com o novo modelo",
      "Identifique mudanças importantes com mais rapidez",
      "Use como material de revisão e consulta"
    ],
    imageSrc: "/bonus/bonus-01.webp",
    alt: "Quadro Antes x Depois da Reforma Tributária"
  },
  {
    id: "bonus-02",
    badge: "BÔNUS 02",
    title: "LINHA DO TEMPO VISUAL",
    description: "Acompanhe as principais etapas da transição da Reforma Tributária em uma sequência visual organizada e fácil de consultar.",
    benefits: [
      "Entenda a progressão da transição",
      "Visualize períodos importantes",
      "Organize datas e etapas",
      "Consulte rapidamente quando precisar revisar"
    ],
    imageSrc: "/bonus/bonus-02.webp",
    alt: "Linha do Tempo Visual da Reforma Tributária"
  },
  {
    id: "bonus-03",
    badge: "BÔNUS 03",
    title: "CHECKLIST — O QUE ENTENDER PRIMEIRO",
    description: "Um roteiro simples para ajudar você a identificar os assuntos fundamentais antes de avançar para conteúdos mais técnicos.",
    benefits: [
      "Saiba por onde começar",
      "Organize sua sequência de estudos",
      "Evite estudar assuntos aleatoriamente",
      "Acompanhe sua evolução com mais clareza"
    ],
    imageSrc: "/bonus/bonus-03.webp",
    alt: "Checklist O Que Entender Primeiro na Reforma Tributária"
  },
  {
    id: "bonus-04",
    badge: "BÔNUS 04",
    title: "GLOSSÁRIO VISUAL DA REFORMA TRIBUTÁRIA",
    description: "Tenha uma fonte de consulta rápida para compreender termos e conceitos que aparecem com frequência nos conteúdos sobre a Reforma.",
    benefits: [
      "IBS, CBS e Imposto Seletivo",
      "Termos técnicos explicados de forma acessível",
      "Consulta rápida durante os estudos",
      "Apoio para revisão de conceitos"
    ],
    imageSrc: "/bonus/bonus-04.webp",
    alt: "Glossário Visual da Reforma Tributária"
  }
];

export const BonusSection: React.FC = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollPosition = target.scrollLeft;
    const cardWidth = target.offsetWidth * 0.8;
    if (cardWidth > 0) {
      const index = Math.round(scrollPosition / cardWidth);
      setActiveMobileIdx(Math.min(Math.max(index, 0), fourBonuses.length - 1));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* BADGE DE ABERTURA */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-[#00A878]/40 text-[#00A878] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Gift className="w-3.5 h-3.5 text-[#00A878]" />
            <span>+ 4 BÔNUS INCLUÍDOS</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-4">
            E AINDA TEM MAIS: <br className="hidden sm:inline" />
            VOCÊ RECEBE <span className="text-[#F5B700]">4 BÔNUS</span> PARA COMPLETAR SEUS ESTUDOS.
          </h2>

          {/* SUBTÍTULO */}
          <p className="text-sm sm:text-base md:text-lg text-[#1F2937] font-normal leading-relaxed max-w-3xl mx-auto mb-5">
            Materiais complementares pensados para ajudar você a revisar, organizar e visualizar os principais pontos da Reforma Tributária com ainda mais facilidade.
          </p>

          {/* MICROCOPY INDICADOR */}
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0A8FF0] tracking-wider uppercase pt-1">
            <span>ELES JÁ FAZEM PARTE DO PLANO COMPLETO</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* CARDS CONTAINER (DESKTOP: 4 COLUNAS / TABLET: 2 COLUNAS / MOBILE: CARROSSEL SWIPE) */}
        <div
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 lg:pb-0 px-2 sm:px-0 -mx-4 sm:mx-0"
        >
          {fourBonuses.map((bonus) => {
            const hasError = imageErrors[bonus.id];

            return (
              <div
                key={bonus.id}
                className="w-[85vw] max-w-[320px] sm:max-w-none lg:w-auto shrink-0 snap-center bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group"
              >
                {/* 1. ÁREA DA IMAGEM DO BÔNUS / PLACEHOLDER ELEGANTE */}
                <div className="relative h-44 sm:h-48 w-full bg-slate-100 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                  {!hasError ? (
                    <img
                      src={bonus.imageSrc}
                      alt={bonus.alt}
                      onError={() => handleImageError(bonus.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    /* PLACEHOLDER VISUAL DISCRETO ENQUANTO NÃO EXISTIR A IMAGEM */
                    <div className="flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-slate-50 to-blue-50/50 w-full h-full">
                      <div className="p-3 rounded-full bg-white border border-slate-200 shadow-xs mb-2">
                        <FileText className="w-6 h-6 text-[#0A8FF0]" />
                      </div>
                      <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wide">
                        {bonus.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium mt-1">
                        [{bonus.badge} — Imagem do Bônus]
                      </span>
                    </div>
                  )}

                  {/* BADGE FLUTUANTE SOBRE A IMAGEM */}
                  <div className="absolute top-3 left-3 bg-[#0B1F3A] text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md tracking-wider">
                    {bonus.badge}
                  </div>
                </div>

                {/* 2. CONTEÚDO DO CARD */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* TÍTULO */}
                    <h3 className="text-base font-extrabold text-[#0B1F3A] mb-2.5 leading-snug">
                      {bonus.title}
                    </h3>

                    {/* DESCRIÇÃO */}
                    <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed mb-4 font-normal">
                      {bonus.description}
                    </p>

                    {/* LISTA DE BENEFÍCIOS */}
                    <div className="space-y-2 mb-6">
                      {bonus.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00A878] shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-700 leading-tight">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. RODAPÉ DO CARD */}
                  <div className="pt-3 border-t border-slate-100 mt-auto">
                    <div className="bg-[#0B1F3A] text-white text-[11px] font-extrabold py-2 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A878]" />
                      <span>INCLUSO NO PLANO COMPLETO</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INDICADORES DO CARROSSEL NO MOBILE (PONTOS ● ○ ○ ○) */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {fourBonuses.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeMobileIdx === idx ? 'w-6 bg-[#0A8FF0]' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BonusSection;
