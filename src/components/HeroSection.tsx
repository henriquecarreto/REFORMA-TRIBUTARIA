import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPricing = (e?: React.MouseEvent<Element>) => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      trackInitiateCheckoutAndNavigate(e || null, siteConfig.COMPLETE_CHECKOUT_URL, 27.90, 'Plano Completo');
    }
  };

  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 bg-[#FAF7F2] border-b border-amber-200/60 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LADO ESQUERDO — INFORMAÇÕES E CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* 1. BADGE TOPO */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#F5B700] text-[#0B1F3A] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>GUIA VISUAL DA REFORMA TRIBUTÁRIA</span>
            </div>

            {/* 2. TÍTULO PRINCIPAL (HEADLINE COM POSITIVIDADE E EQUILÍBRIO) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] leading-[1.18] tracking-tight mb-5">
              <span className="text-[#0B1F3A]">Entenda a </span>
              <span className="text-[#0A8FF0]">Reforma Tributária </span> <br className="hidden sm:inline" />
              <span className="text-[#0B1F3A]">de forma </span>
              <span className="text-[#00A878]">simples e visual.</span>
            </h1>

            {/* 3. SUBTÍTULO COM HIERARQUIA DE CORES E ESPAÇAMENTO EXATO */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 font-normal max-w-2xl">
              <span className="text-[#0A8FF0] font-semibold">IBS, CBS</span> e <span className="text-[#C7463E] font-semibold">Imposto Seletivo</span> explicados em um <span className="text-[#00A878] font-semibold">guia visual</span>, organizado e direto ao ponto — sem leis extensas, vídeos longos ou explicações difíceis.
            </p>

            {/* 4. LISTA DE BENEFÍCIOS REFINADA COM UM DESTAQUE PRINCIPAL POR LINHA */}
            <ul className="space-y-3 mb-8 w-full">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  <span className="text-[#0A8FF0] font-bold">IBS, CBS e Imposto Seletivo</span> explicados com clareza.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  <span className="text-[#00A878] font-bold">Mapas visuais</span> para estudar, revisar e consultar.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  Principais mudanças <span className="text-[#0A8FF0] font-bold">organizadas por assunto.</span>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  <span className="text-[#00A878] font-bold">Explicações simples</span>, sem excesso de linguagem técnica.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  <span className="text-[#0A8FF0] font-bold">Glossários, checklists</span> e materiais complementares.
                </span>
              </li>
            </ul>

            {/* 5. BOTÃO CTA PRINCIPAL */}
            <div className="flex flex-col items-start gap-3 w-full sm:w-auto">
              <button
                onClick={scrollToPricing}
                className="btn-cta-primary w-full sm:w-auto text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full flex items-center justify-center gap-3 cursor-pointer group shadow-xl hover:scale-[1.02] transition-all"
              >
                <span>QUERO ENTENDER A REFORMA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#00A878]" />
                <span>
                  Material digital <span className="text-slate-400">•</span> Acesso online <span className="text-slate-400">•</span> <span className="text-[#00A878] font-bold">7 dias de garantia</span>
                </span>
              </div>
            </div>

          </div>

          {/* LADO DIREITO — MOCKUP / IMAGEM DO MATERIAL (MANTIDA 100% INTACTA) */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full bg-white p-1.5 sm:p-2.5 rounded-3xl border border-amber-200/80 shadow-2xl shadow-amber-900/10 transition-transform duration-300 hover:scale-[1.01]">
              <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                <img
                  src="/hero/mapas-conectados.jpg"
                  alt="Guia Visual da Reforma Tributária - Visão dos Materiais"
                  className="w-full h-auto object-contain rounded-xl"
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

export default HeroSection;
