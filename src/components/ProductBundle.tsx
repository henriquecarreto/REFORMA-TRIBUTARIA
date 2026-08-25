import React from 'react';
import { collection16Materials } from '../data/landingData';
import { CheckCircle2, Zap, Layers, Sparkles, Gift } from 'lucide-react';

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
    <section className="py-16 sm:py-24 bg-[#F7F3EA] text-slate-900 relative overflow-hidden border-b border-amber-200/60" id="materiais">
      {/* Elementos sutis de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#138A60]/40 text-[#138A60] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-4 h-4 text-[#138A60]" />
            <span>COLEÇÃO COMPLETA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#112A46] leading-tight tracking-tight mb-4">
            Conheça os <span className="text-[#138A60]">16 materiais</span> da sua coleção
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#526273] font-medium leading-relaxed max-w-3xl mx-auto">
            Guias visuais organizados para ajudar você a entender a Reforma Tributária e consultar os principais assuntos sempre que precisar.
          </p>
        </div>

        {/* GRADE DOS 16 MATERIAIS (3 COLUNAS NO DESKTOP AMPLO PARA CONFORTO TIPOGRÁFICO) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
          {collection16Materials.map((mat) => (
            <div
              key={mat.id}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E5E0D7] shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between group"
            >
              <div>
                {/* CABEÇALHO DO CARD: NUMERAÇÃO + CATEGORIA + BÔNUS */}
                <div className="flex items-center justify-between gap-2 mb-3.5 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#112A46] text-white text-xs font-black flex items-center justify-center shrink-0 shadow-xs">
                      {mat.number < 10 ? `0${mat.number}` : mat.number}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${getCategoryStyle(mat.categorySlug)}`}>
                      {mat.category}
                    </span>
                  </div>

                  {mat.isBonus && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#138A60] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      <Gift className="w-3 h-3 text-[#138A60]" />
                      Bônus incluído
                    </span>
                  )}
                </div>

                {/* TÍTULO LIMPO DO MATERIAL */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#112A46] leading-snug mb-2 group-hover:text-[#176BAA] transition-colors">
                  {mat.title}
                </h3>

                {/* DESCRIÇÃO CLARA */}
                <p className="text-xs sm:text-sm text-[#526273] leading-relaxed font-normal">
                  {mat.description}
                </p>
              </div>

              {/* RODAPÉ DO CARD */}
              <div className="mt-5 pt-3 border-t border-[#F0EBE1] flex items-center justify-between text-xs font-semibold text-[#526273]">
                <span className="flex items-center gap-1.5 text-[#138A60] font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Material digital em PDF
                </span>
                <span className="text-slate-400 font-medium">Download imediato</span>
              </div>
            </div>
          ))}
        </div>

        {/* CHAMADA COMERCIAL FINAL DA SEÇÃO */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0D7] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-extrabold text-xs uppercase mb-2 border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" /> ACERVO VISUAL ORGANIZADO
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#112A46] mb-2">
              Tenha os 16 materiais em uma coleção completa
            </h3>
            <p className="text-xs sm:text-sm text-[#526273] leading-relaxed">
              Estude, consulte e acompanhe os principais assuntos da Reforma Tributária em materiais visuais organizados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="#precos"
              className="w-full sm:w-auto bg-[#138A60] hover:bg-[#0F704E] text-white font-extrabold text-sm sm:text-base py-3.5 px-7 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer transition-transform hover:scale-[1.01]"
            >
              <Zap className="w-4 h-4 text-amber-200 fill-amber-200" />
              <span>ACESSAR A COLEÇÃO COMPLETA</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductBundle;
