import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { heroBenefits } from '../data/landingData';
import { Check, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = siteConfig.COMPLETE_CHECKOUT_URL;
    }
  };

  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 bg-[#FAF7F2] border-b border-amber-200/60 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO — INFORMAÇÕES E CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. BADGE AUDIÊNCIA */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#F5B700] text-[#0B1F3A] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs">
              <Users className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>PARA CONTADORES, SERVIDORES PÚBLICOS, ASSISTENTES, ESTUDANTES E EMPRESÁRIOS</span>
            </div>

            {/* 2. TÍTULO PRINCIPAL */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-[1.18] tracking-tight mb-5">
              Entenda a Reforma Tributária <br className="hidden sm:inline" />
              de um jeito que <span className="text-[#0A8FF0]">finalmente faz sentido.</span>
            </h1>

            {/* 3. SUBTÍTULO */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6 max-w-2xl">
              IBS, CBS, Imposto Seletivo, transição e as principais mudanças organizados visualmente para você enxergar como tudo se conecta sem se perder em explicações excessivamente técnicas.
            </p>

            {/* 4. LISTA DE BENEFÍCIOS COM CHECKMARKS EM COLUNA */}
            <ul className="space-y-3 mb-8 w-full max-w-xl">
              {heroBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* 5. BOTÃO CTA PRINCIPAL */}
            <div className="flex flex-col items-start gap-3 w-full sm:w-auto">
              <button
                onClick={scrollToPricing}
                className="btn-cta-primary w-full sm:w-auto text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 cursor-pointer group shadow-xl hover:scale-[1.02] transition-all"
              >
                <span>QUERO ACESSAR O MATERIAL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#00A878]" />
                <span>Material digital • Acesso online • 7 dias de garantia</span>
              </div>
            </div>

          </div>

          {/* LADO DIREITO — MOCKUP / IMAGEM DO MATERIAL */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-white p-3 sm:p-4 rounded-3xl border border-amber-200/80 shadow-2xl shadow-amber-900/10 transition-transform duration-300 hover:scale-[1.01]">
              <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <img
                  src="/hero/mapas-conectados.jpg"
                  alt="Guia Visual da Reforma Tributária - Visão dos Materiais"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
