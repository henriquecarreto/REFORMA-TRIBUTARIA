import React from 'react';
import { main12Materials, bonus4Materials } from '../data/landingData';
import { CheckCircle2, Layers, Sparkles, Gift, ArrowRight } from 'lucide-react';

export const ProductBundle: React.FC = () => {
  const getCategoryStyle = (slug: string) => {
    switch (slug) {
      case 'fundamentos':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'tributos':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'negocios':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'municipios':
        return 'bg-slate-100 text-slate-800 border-slate-300';
      case 'licitacoes':
        return 'bg-yellow-50 text-yellow-900 border-yellow-300';
      case 'bonus':
        return 'bg-teal-50 text-teal-900 border-teal-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section className="py-12 sm:py-24 bg-[#F7F3EA] text-slate-900 relative overflow-hidden border-b border-amber-200/60" id="materiais">
      {/* Glows sutis de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#138A60]/40 text-[#138A60] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3.5 shadow-xs">
            <Layers className="w-4 h-4 text-[#138A60]" />
            <span>COLEÇÃO COMPLETA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#112A46] leading-tight tracking-tight mb-3">
            Conheça os <span className="text-[#00A859]">16 materiais</span> da sua coleção
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#44566C] font-medium leading-relaxed max-w-2xl mx-auto mb-3">
            Guias visuais organizados para ajudar você a entender e consultar os principais assuntos da Reforma Tributária.
          </p>

          <span className="text-xs sm:text-sm font-bold text-[#176BAA] bg-blue-50 px-3 py-1 rounded-md border border-blue-200 inline-block">
            12 guias principais e 4 bônus • Total de 16 materiais digitais
          </span>
        </div>

        {/* 2. GRUPO 1: 12 GUIAS PRINCIPAIS */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6 pb-2 border-b border-amber-200/80">
            <div className="w-7 h-7 rounded-lg bg-[#112A46] text-white flex items-center justify-center text-xs font-bold shrink-0">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#112A46]">
              12 guias principais
            </h3>
          </div>

          {/* GRADE DOS 12 GUIAS: CARDS HORIZONTAIS COMPACTOS NO CELULAR (< 640PX) E 3 COLUNAS NO DESKTOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {main12Materials.map((mat) => (
              <div
                key={mat.id}
                className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E5E0D7] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                {/* ESTRUTURA HORIZONTAL COMPACTA NO MOBILE (< 640PX) */}
                <div className="flex sm:flex-col items-start gap-3.5 sm:gap-0">
                  
                  {/* MINIATURA DA CAPA REAL COM OBJECT-FIT CONTAIN (68 x 102 PX NO MOBILE) */}
                  {mat.coverImage && (
                    <div className="w-[68px] h-[102px] sm:w-16 sm:h-22 shrink-0 rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-slate-50 p-0.5 group-hover:scale-105 transition-transform duration-200 sm:order-2 sm:self-end sm:mb-4">
                      <img
                        src={mat.coverImage}
                        alt={mat.title}
                        className="w-full h-full object-contain rounded-md"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex-1 sm:order-1 sm:w-full">
                    {/* CABEÇALHO DESKTOP: NUMERAÇÃO + ETIQUETA */}
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-4">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#112A46] text-white text-[11px] sm:text-xs font-black flex items-center justify-center shrink-0 shadow-xs">
                        {mat.number < 10 ? `0${mat.number}` : mat.number}
                      </span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getCategoryStyle(mat.categorySlug)}`}>
                        {mat.category}
                      </span>
                    </div>

                    {/* TÍTULO (16-18PX) */}
                    <h4 className="text-[16px] sm:text-lg font-extrabold text-[#112A46] leading-snug mb-1.5 group-hover:text-[#176BAA] transition-colors">
                      {mat.title}
                    </h4>

                    {/* DESCRIÇÃO (MÍNIMO 14PX) */}
                    <p className="text-sm text-[#44566C] leading-relaxed font-normal">
                      {mat.description}
                    </p>
                  </div>

                </div>

                {/* RODAPÉ DO CARD */}
                <div className="mt-3.5 sm:mt-5 pt-2.5 sm:pt-3 border-t border-[#FAF5EE] flex items-center justify-between text-xs font-semibold text-[#00A859]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Material digital em PDF
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. GRUPO 2: 4 BÔNUS INCLUÍDOS */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-5 sm:mb-6 pb-2 border-b border-emerald-300/80">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#00A859] text-white flex items-center justify-center text-xs font-bold shrink-0">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#112A46]">
                4 bônus para complementar seus estudos
              </h3>
            </div>
            <span className="text-xs font-bold text-[#00A859]">
              Materiais adicionais que já fazem parte da sua coleção completa.
            </span>
          </div>

          {/* GRADE DOS 4 BÔNUS: CARDS COMPACTOS NO MOBILE E 4 COLUNAS NO DESKTOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bonus4Materials.map((mat) => (
              <div
                key={mat.id}
                className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-emerald-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* ETIQUETA DE BÔNUS */}
                <div className="absolute top-0 right-0 bg-[#00A859] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-bl-lg flex items-center gap-1">
                  <Gift className="w-3 h-3" /> BÔNUS INCLUÍDO
                </div>

                <div className="flex sm:flex-col items-start gap-3.5 sm:gap-0 pt-1 sm:pt-0">
                  
                  {/* MINIATURA DA CAPA DO BÔNUS (68 x 102 PX NO MOBILE) */}
                  {mat.coverImage && (
                    <div className="w-[68px] h-[102px] sm:w-14 sm:h-20 shrink-0 rounded-lg overflow-hidden border border-emerald-200 shadow-xs bg-slate-50 p-0.5 group-hover:scale-105 transition-transform duration-200 sm:order-2 sm:self-end sm:mb-4">
                      <img
                        src={mat.coverImage}
                        alt={mat.title}
                        className="w-full h-full object-contain rounded-md"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex-1 sm:order-1 sm:w-full">
                    {/* CABEÇALHO DO CARD DO BÔNUS */}
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-4">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00A859] text-white text-[11px] sm:text-xs font-black flex items-center justify-center shrink-0 shadow-xs">
                        {mat.number}
                      </span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getCategoryStyle('bonus')}`}>
                        {mat.category}
                      </span>
                    </div>

                    {/* TÍTULO DO BÔNUS (16-18PX) */}
                    <h4 className="text-[16px] sm:text-lg font-extrabold text-[#112A46] leading-snug mb-1.5 group-hover:text-[#00A859] transition-colors">
                      {mat.title}
                    </h4>

                    {/* DESCRIÇÃO DO BÔNUS (MÍNIMO 14PX) */}
                    <p className="text-sm text-[#44566C] leading-relaxed font-normal">
                      {mat.description}
                    </p>
                  </div>

                </div>

                {/* RODAPÉ DO BÔNUS */}
                <div className="mt-3.5 sm:mt-5 pt-2.5 sm:pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-semibold text-[#00A859]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Material digital em PDF
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. BLOCO COMERCIAL FINAL REESTRUTURADO */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0D7] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-extrabold text-xs uppercase mb-2 border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" /> ACERVO VISUAL ORGANIZADO
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#112A46] mb-2">
              Acesse os 16 materiais da coleção completa
            </h3>
            <p className="text-xs sm:text-sm text-[#44566C] leading-relaxed">
              Receba 12 guias principais e 4 bônus para estudar a Reforma Tributária de forma visual e organizada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="#precos"
              className="w-full sm:w-auto bg-[#00A859] hover:bg-[#008C4A] text-white font-extrabold text-sm sm:text-base py-4 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 cursor-pointer transition-transform hover:scale-[1.01] border border-emerald-400/30"
            >
              <span>ACESSAR A COLEÇÃO COMPLETA</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductBundle;
