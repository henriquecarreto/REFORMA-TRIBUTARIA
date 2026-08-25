import React from 'react';
import { collection16Materials } from '../data/landingData';
import { CheckCircle2, Zap, Layers, Sparkles } from 'lucide-react';

export const ProductBundle: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#1C3972] via-[#132A55] to-[#081426] text-white relative overflow-hidden border-b border-blue-900/60" id="materiais">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A878]/15 border border-[#00A878]/40 text-[#00A878] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-4 h-4 text-[#00A878]" />
            <span>COLEÇÃO COMPLETA DE MATERIAIS DIGITAIS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-4">
            Conheça os <span className="text-[#F5B700]">16 Materiais Visuais</span> Incluídos na Coleção
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Uma acervo digital organizado por temas essenciais para você consultar, estudar e aplicar o conhecimento sobre a Reforma Tributária com facilidade.
          </p>
        </div>

        {/* 16 MATERIALS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-12">
          {collection16Materials.map((mat) => (
            <div
              key={mat.id}
              className="bg-white/10 hover:bg-white/[0.14] backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-[#F5B700]/20 border border-[#F5B700]/40 text-[#F5B700] text-xs font-black flex items-center justify-center shrink-0">
                    {mat.number < 10 ? `0${mat.number}` : mat.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 bg-white/10 px-2 py-0.5 rounded-md truncate max-w-[170px]">
                    {mat.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug mb-1.5 group-hover:text-amber-200 transition-colors">
                  {mat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {mat.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Incluído no PDF
                </span>
                <span className="text-amber-300">Formato Digital</span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER WITH MOCKUP & ACTION */}
        <div className="bg-gradient-to-r from-amber-500/15 via-blue-600/20 to-emerald-500/15 p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400 text-slate-950 font-black text-xs uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" /> ACERVO EM PDF PRONTO PARA DOWNLOAD
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Acesse a Coleção Completa e consulte quando quiser
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Todos os 16 materiais reunidos em um ambiente organizado com acesso liberado imediatamente após a confirmação do pagamento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="#precos"
              className="w-full sm:w-auto bg-[#00A878] hover:bg-[#009368] text-white font-extrabold text-sm sm:text-base py-3.5 px-7 rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <Zap className="w-4 h-4 text-amber-200 fill-amber-200" />
              <span>QUERO ACESSAR OS 16 MATERIAIS</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
