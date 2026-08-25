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
    title: "PESSOA FÍSICA NA REFORMA",
    description: "Entenda em quais situações a Reforma Tributária também pode alcançar **pessoas físicas** e por que inscrição no **CNPJ** não significa automaticamente virar empresa.",
    benefits: [
      "Veja quando a **pessoa física** pode ser abrangida",
      "Entenda a inscrição no **CNPJ** a partir de **2027**",
      "Saiba por que **CNPJ** não significa pessoa jurídica",
      "Evite uma das confusões mais comuns sobre a Reforma"
    ],
    imageSrc: "/bonus/bonus-01-pessoa-fisica.jpg",
    alt: "Capa Bônus 01 - Pessoa Física na Reforma"
  },
  {
    id: "bonus-02",
    badge: "BÔNUS 02",
    title: "NANOEMPREENDEDOR",
    description: "Conheça uma das figuras menos comentadas da Reforma e entenda, de forma visual, a diferença entre **nanoempreendedor** e **MEI**.",
    benefits: [
      "Descubra o que é um **nanoempreendedor**",
      "Entenda a diferença para o **MEI**",
      "Conheça o critério dos 50%",
      "Veja a regra especial dos 25% para transporte e entrega"
    ],
    imageSrc: "/bonus/bonus-02-nanoempreendedor.jpg",
    alt: "Capa Bônus 02 - Nanoempreendedor"
  },
  {
    id: "bonus-03",
    badge: "BÔNUS 03",
    title: "CASHBACK DO IBS E DA CBS",
    description: "Veja como funciona a devolução de parte dos novos tributos para famílias de baixa renda e conheça os principais requisitos da sistemática.",
    benefits: [
      "Entenda quem pode receber",
      "Conheça os requisitos necessários",
      "Veja quando **CBS** e **IBS** entram no **cashback**",
      "Entenda os principais percentuais de devolução"
    ],
    imageSrc: "/bonus/bonus-03-cashback.jpg",
    alt: "Capa Bônus 03 - Cashback do IBS e da CBS"
  },
  {
    id: "bonus-04",
    badge: "BÔNUS 04",
    title: "CRÉDITOS DO IBS E DA CBS",
    description: "Entenda uma das mudanças mais importantes do novo sistema: quando os créditos podem ser apropriados e por que nota fiscal não significa **crédito automático**.",
    benefits: [
      "Entenda a lógica dos novos créditos",
      "Veja como o débito pode ser extinto",
      "Conheça o papel do **split payment**",
      "Entenda a regra de transição do creditamento"
    ],
    imageSrc: "/bonus/bonus-04-creditos.jpg",
    alt: "Capa Bônus 04 - Créditos do IBS e da CBS"
  }
];

export const BonusSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className="font-bold text-[#0B1F3A]">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
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
            A COLEÇÃO INCLUI <span className="text-[#00A878]">4 BÔNUS</span> PARA COMPLETAR SEUS ESTUDOS.
          </h2>

          {/* SUBTÍTULO */}
          <p className="text-sm sm:text-base md:text-lg text-[#1F2937] font-normal leading-relaxed max-w-3xl mx-auto mb-5">
            Materiais complementares integrados à coleção para ajudar você a revisar, organizar e visualizar os principais pontos da Reforma Tributária com facilidade.
          </p>

          {/* MICROCOPY INDICADOR */}
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0A8FF0] tracking-wider uppercase pt-1">
            <span>(OS 4 BÔNUS FAZEM PARTE DOS 16 MATERIAIS DIGITAIS DA COLEÇÃO COMPLETA)</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* CARDS CONTAINER (DESKTOP: 4 COLUNAS / TABLET: 2 COLUNAS / MOBILE: 1 COLUNA) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {fourBonuses.map((bonus) => {
            const hasError = imageErrors[bonus.id];

            return (
              <div
                key={bonus.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group"
              >
                {/* 1. ÁREA DA IMAGEM DO BÔNUS */}
                <div className="relative h-56 sm:h-60 w-full bg-slate-50 border-b border-slate-100 p-3.5 flex items-center justify-center overflow-hidden">
                  {!hasError ? (
                    <img
                      src={bonus.imageSrc}
                      alt={bonus.alt}
                      onError={() => handleImageError(bonus.id)}
                      className="max-h-full max-w-full object-contain rounded-lg drop-shadow-sm group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    /* PLACEHOLDER SE HOUVER ERRO DE CARREGAMENTO DE IMAGEM */
                    <div className="flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-slate-50 to-blue-50/50 w-full h-full rounded-lg">
                      <div className="p-3 rounded-full bg-white border border-slate-200 shadow-xs mb-2">
                        <FileText className="w-6 h-6 text-[#0A8FF0]" />
                      </div>
                      <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wide">
                        {bonus.title}
                      </span>
                    </div>
                  )}

                  {/* BADGE FLUTUANTE NO CANTO SUPERIOR */}
                  <div className="absolute top-3 left-3 bg-[#0B1F3A] text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md tracking-wider">
                    {bonus.badge}
                  </div>
                </div>

                {/* 2. CONTEÚDO DO CARD */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col">
                    {/* TÍTULO */}
                    <h3 className="text-base font-extrabold text-[#0B1F3A] mb-2.5 leading-snug tracking-tight">
                      {bonus.title}
                    </h3>

                    {/* DESCRIÇÃO */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                      {renderFormattedText(bonus.description)}
                    </p>

                    {/* LISTA DE BENEFÍCIOS */}
                    <ul className="space-y-2.5 mb-6">
                      {bonus.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00A878] shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-700 leading-snug">
                            {renderFormattedText(benefit)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. RODAPÉ DO CARD — ALINHADO SEMPRE NA PARTE INFERIOR */}
                  <div className="pt-3 border-t border-slate-100 mt-auto">
                    <div className="bg-[#0B1F3A] text-white text-[11px] font-extrabold py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A878]" />
                      <span>INCLUSO NO PLANO COMPLETO</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BonusSection;
