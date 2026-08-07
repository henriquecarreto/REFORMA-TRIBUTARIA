import React from 'react';
import { bundleItems } from '../data/landingData';
import { CheckCircle2, Zap, Download, Layers } from 'lucide-react';

export const ProductBundle: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1C3972] via-[#132A55] to-[#081426] text-white relative overflow-hidden border-b border-blue-900/60">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* 3. SELO */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A878]/10 border border-[#00A878]/40 text-[#00A878] text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#00A878] fill-[#00A878]" />
            <span>CONTEÚDO COMPLETO • ACESSO DIGITAL</span>
          </div>

          {/* 4. TÍTULO PRINCIPAL */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-4">
            TUDO O QUE VOCÊ PRECISA PARA ENTENDER A REFORMA <br className="hidden sm:inline" />
            <span className="text-[#F5B700]">ORGANIZADO EM UM SÓ LUGAR.</span>
          </h2>

          {/* 5. SUBTÍTULO */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 font-normal leading-relaxed max-w-3xl mx-auto mb-6">
            Em vez de procurar informações espalhadas, você recebe uma coleção visual estruturada para <strong className="font-bold text-white">estudar, revisar e consultar</strong> os principais pontos da Reforma Tributária com muito mais clareza.
          </p>

          {/* 15. MICRODESTAQUES DE VALOR */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-slate-200 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A878]" />
              <span>CONTEÚDO VISUAL</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-slate-200 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A878]" />
              <span>ACESSO DIGITAL</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-slate-200 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A878]" />
              <span>CONSULTA SEMPRE QUE PRECISAR</span>
            </div>
          </div>
        </div>

        {/* TWO COLUMN HORIZONTAL LAYOUT (Desktop: 60/40, Mobile: Mockup First, List Second) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: MATERIAL CHECKLIST (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1 bg-white/[0.06] backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/[0.12] shadow-2xl">
            {/* 7. TITLE OF THE LEFT CARD */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400/30">
                <Layers className="w-5 h-5 text-[#0A8FF0]" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                UMA COLEÇÃO PENSADA PARA <br className="hidden sm:inline" />
                <span className="text-[#F5B700]">TRANSFORMAR COMPLEXIDADE EM CLAREZA</span>
              </h3>
            </div>

            {/* 9 & 10. LIST OF MATERIALS (2 columns on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {bundleItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* 11. BOTTOM CARD INFO */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#0A8FF0]" />
                ↓ PDF EM ALTA RESOLUÇÃO
              </span>
              <span className="flex items-center gap-1.5 text-[#00A878] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#00A878]" />
                IMPRESSÃO LIBERADA
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: MOCKUP PRODUCT DISPLAY (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* 13. HALO / GLOW BEHIND MOCKUP */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl -z-10" />

              <div className="bg-white/10 p-3 sm:p-4 rounded-2xl border border-white/20 shadow-2xl shadow-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="rounded-xl overflow-hidden bg-slate-900/60 border border-white/10">
                  <img
                    src="/hero/hero-bundle-mockup.jpg"
                    alt="Visão Geral da Coleção Digital do Fiscal Simplificado"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
                
                {/* 14. BOTTOM CARD BELOW MOCKUP */}
                <div className="mt-3.5 p-3.5 bg-[#06101E] border border-white/10 text-white rounded-xl text-center shadow-inner">
                  <span className="text-xs sm:text-sm font-extrabold text-[#F5B700] uppercase tracking-widest block mb-1">
                    COLEÇÃO DIGITAL COMPLETA
                  </span>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    Seus materiais organizados e prontos para acessar após a confirmação da compra.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
