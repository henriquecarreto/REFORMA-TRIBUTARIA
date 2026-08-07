import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = siteConfig.COMPLETE_CHECKOUT_URL;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER HORIZONTAL EXECUTIVO */}
        <div className="bg-gradient-to-r from-[#0B1F3A] via-[#132A55] to-[#081426] text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-900/60 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            
            {/* ESQUERDA: SELO DE GARANTIA */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#00A878] to-emerald-400 p-1 flex items-center justify-center shadow-xl shadow-emerald-950/40">
                <div className="w-full h-full rounded-full bg-[#081426] flex flex-col items-center justify-center text-center p-2 border border-emerald-500/40">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#00A878] mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest text-slate-300 uppercase">GARANTIA DE</span>
                  <span className="text-lg sm:text-xl font-black text-[#00A878] leading-none">7 DIAS</span>
                </div>
              </div>
            </div>

            {/* CENTRO: TÍTULO E TEXTO EXPLICATIVO */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A878]/10 border border-[#00A878]/40 text-[#00A878] text-xs font-bold uppercase tracking-wider mb-2.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>RISCO ZERO PARA VOCÊ</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2">
                7 Dias para Testar e Comprovar o Material
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Você pode acessar o material, analisar o conteúdo e verificar a qualidade do produto. Se por qualquer motivo não ficar 100% satisfeito, basta solicitar o reembolso integral.
              </p>
            </div>

            {/* DIREITA: BOTÃO CTA HORIZONTAL */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <button
                onClick={scrollToPricing}
                className="btn-cta-primary w-full sm:w-auto bg-[#00A878] hover:bg-[#008F66] text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-[1.02] transition-transform text-center"
              >
                <span>QUERO ACESSAR SEM RISCO</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

