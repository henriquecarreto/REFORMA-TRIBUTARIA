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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* 1. IDENTIFICAÇÃO DO PRODUTO */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#F5B700] text-[#0B1F3A] text-[13px] sm:text-sm font-extrabold uppercase tracking-wider mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
          <span>GUIA VISUAL DA REFORMA TRIBUTÁRIA</span>
        </div>

        {/* 2. HEADLINE PRINCIPAL */}
        <h1 className="text-[36px] min-[375px]:text-[40px] min-[430px]:text-[42px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#0B1F3A] leading-[1.1] sm:leading-[1.12] tracking-tight mb-5 max-w-3xl">
          <span className="text-[#0B1F3A]">Entenda a </span>
          <span className="text-[#0A8FF0]">Reforma Tributária </span> <br className="hidden sm:inline" />
          <span className="text-[#0B1F3A]">de forma </span>
          <span className="text-[#00A878]">simples e visual.</span>
        </h1>

        {/* 3. SUBTÍTULO */}
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8 font-normal max-w-2xl text-center">
          <span className="text-[#0A8FF0] font-semibold">IBS, CBS</span> e <span className="text-[#C7463E] font-semibold">Imposto Seletivo</span> explicados em um <span className="text-[#00A878] font-semibold">guia visual</span>, organizado e direto ao ponto — sem leis extensas, vídeos longos ou explicações difíceis.
        </p>

        {/* 4. QUADRO ÚNICO DO MATERIAL COM LAYOUT DE 3 COLUNAS (IDÊNTICO À DISPOSIÇÃO DA IMAGEM ORIGINAL) */}
        <div className="w-full max-w-3xl mb-10">
          <div className="relative w-full bg-white p-2 sm:p-3 rounded-3xl border border-amber-200/80 shadow-2xl shadow-amber-900/10 transition-transform duration-300 hover:scale-[1.01]">
            <div className="rounded-2xl overflow-hidden bg-[#FAF5E8] p-2.5 sm:p-4 border border-amber-200/60 relative">
              
              {/* DISPOSIÇÃO DE 3 COLUNAS: 2 À ESQUERDA (EMPILHADAS), 1 CENTRAL PRINCIPAL, 2 À DIREITA (EMPILHADAS) */}
              <div className="grid grid-cols-12 gap-2 sm:gap-3.5 items-center">
                
                {/* COLUNA ESQUERDA: 2 CAPAS EMPILHADAS */}
                <div className="col-span-3 flex flex-col gap-2 sm:gap-3">
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/80 bg-white">
                    <img
                      src="/hero/capas/capa-01-cbs-ibs.jpg"
                      alt="Guia Visual CBS & IBS"
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/80 bg-white">
                    <img
                      src="/hero/capas/capa-03-licitacoes.jpg"
                      alt="Reforma Tributária nas Licitações Públicas"
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* COLUNA CENTRAL: CAPA PRINCIPAL EM DESTAQUE (REFORMA TRIBUTÁRIA DO CONSUMO) */}
                <div className="col-span-6 shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-400 bg-white z-10">
                  <img
                    src="/hero/capas/capa-05-consumo.jpg"
                    alt="Reforma Tributária do Consumo - Guia Principal"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>

                {/* COLUNA DIREITA: 2 CAPAS EMPILHADAS */}
                <div className="col-span-3 flex flex-col gap-2 sm:gap-3">
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/80 bg-white">
                    <img
                      src="/hero/capas/capa-02-municipios.jpg"
                      alt="Reforma Tributária para Municípios"
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/80 bg-white">
                    <img
                      src="/hero/capas/capa-04-trilha-fiscal.jpg"
                      alt="Trilha Fiscal"
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 5. LISTA DE BENEFÍCIOS */}
        <div className="w-full max-w-xl mb-10">
          <ul className="space-y-3.5 text-left">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-[15px] sm:text-base font-semibold text-slate-800 leading-snug">
                <span className="text-[#0A8FF0] font-bold">IBS, CBS e Imposto Seletivo</span> explicados com clareza.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-[15px] sm:text-base font-semibold text-slate-800 leading-snug">
                <span className="text-[#00A878] font-bold">Mapas visuais</span> para estudar, revisar e consultar.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-[15px] sm:text-base font-semibold text-slate-800 leading-snug">
                Principais mudanças <span className="text-[#0A8FF0] font-bold">organizadas por assunto.</span>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-[15px] sm:text-base font-semibold text-slate-800 leading-snug">
                <span className="text-[#00A878] font-bold">Explicações simples</span>, sem excesso de linguagem técnica.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-[15px] sm:text-base font-semibold text-slate-800 leading-snug">
                <span className="text-[#0A8FF0] font-bold">Glossários, checklists</span> e materiais complementares.
              </span>
            </li>
          </ul>
        </div>

        {/* 6. BOTÃO DE COMPRA & 7. INFORMAÇÕES DE ACESSO E GARANTIA */}
        <div className="flex flex-col items-center gap-3 w-full max-w-md">
          <button
            onClick={scrollToPricing}
            className="btn-cta-primary w-full text-white font-extrabold text-[17px] sm:text-lg lg:text-[19px] py-4 px-8 rounded-full flex items-center justify-center gap-3 cursor-pointer group shadow-xl hover:scale-[1.02] transition-all"
          >
            <span>QUERO ENTENDER A REFORMA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[13px] sm:text-sm font-semibold text-slate-600 pt-1 text-center">
            <ShieldCheck className="w-4 h-4 text-[#00A878] shrink-0" />
            <span>
              Material digital <span className="text-slate-400">•</span> Acesso online <span className="text-slate-400">•</span> <span className="text-[#00A878] font-bold">7 dias de garantia</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
