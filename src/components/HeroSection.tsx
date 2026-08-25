import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { Check, ArrowRight, ShieldCheck, BookOpen, Layers, Lock, Sparkles, CreditCard, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPricing = (e?: React.MouseEvent<Element>) => {
    e?.preventDefault();
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      trackInitiateCheckoutAndNavigate(e || null, siteConfig.COMPLETE_CHECKOUT_URL, 27.90, 'Plano Completo');
    }
  };

  return (
    <section className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 bg-[#FAF7F2] border-b border-amber-200/60 overflow-hidden">
      {/* Glow de fundo sutil */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* FAIXA SUPERIOR INSTITUCIONAL */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F5B700]/80 text-[#0B1F3A] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
          <BookOpen className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
          <span>COLEÇÃO COMPLETA DA REFORMA TRIBUTÁRIA</span>
        </div>

        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-[28px] min-[375px]:text-[32px] min-[430px]:text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#0B1F3A] leading-[1.14] tracking-tight mb-3 max-w-3xl">
          Entenda a Reforma Tributária <br className="hidden sm:inline" />
          <span className="text-[#176BAA]">sem se perder em leis</span> e <span className="text-[#138A60]">explicações complicadas</span>
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-[14px] sm:text-base text-slate-700 leading-relaxed mb-4 font-medium max-w-2xl text-center">
          Encontre os principais pontos da Reforma Tributária organizados de forma visual, clara e fácil de consultar.
        </p>

        {/* TAG DE PÚBLICO RELEVANTE */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50/90 border border-amber-200 text-amber-900 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Ideal para contadores, profissionais fiscais, servidores públicos, estudantes e empreendedores.</span>
        </div>

        {/* COMPOSIÇÃO VISUAL DAS CAPAS COM ALTURA CONTROLADA */}
        <div className="w-full max-w-xl sm:max-w-2xl mb-5 relative">
          {/* SELO DA OFERTA PADRONIZADA */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#138A60] text-white text-[11px] sm:text-xs font-extrabold uppercase px-3.5 py-1 rounded-full shadow-md border-2 border-white flex items-center gap-1.5 whitespace-nowrap">
            <Layers className="w-3.5 h-3.5 text-emerald-100" />
            <span>12 GUIAS PRINCIPAIS + 4 BÔNUS = 16 MATERIAIS DIGITAIS</span>
          </div>

          <div className="w-full bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200/90 shadow-md">
            <div className="rounded-xl overflow-hidden bg-[#FAF5E8] p-2 sm:p-3 border border-amber-200/60 pt-5 sm:pt-6">
              
              <div className="flex items-center justify-between gap-1.5 sm:gap-3">
                {/* COLUNA ESQUERDA */}
                <div className="w-[31%] flex flex-col gap-1.5 sm:gap-2 shrink-0">
                  <div className="shadow-xs rounded-md sm:rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5 max-h-[85px] sm:max-h-[130px] flex items-center justify-center">
                    <img
                      src="/hero/capas/capa-01-cbs-ibs.jpg"
                      alt="Guia Visual CBS e IBS"
                      className="w-full h-full object-cover rounded-xs max-h-[80px] sm:max-h-[120px]"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-xs rounded-md sm:rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5 max-h-[85px] sm:max-h-[130px] flex items-center justify-center">
                    <img
                      src="/hero/capas/capa-03-licitacoes.jpg"
                      alt="Reforma Tributária nas Licitações Públicas"
                      className="w-full h-full object-cover rounded-xs max-h-[80px] sm:max-h-[120px]"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* COLUNA CENTRAL EM DESTAQUE */}
                <div className="w-[36%] shrink-0 shadow-md rounded-lg sm:rounded-xl overflow-hidden border-2 border-amber-400 bg-white p-0.5 z-10 my-auto max-h-[185px] sm:max-h-[270px] flex items-center justify-center">
                  <img
                    src="/hero/capas/capa-05-consumo.jpg"
                    alt="Reforma Tributária do Consumo Guia Principal"
                    className="w-full h-full object-cover rounded-md max-h-[175px] sm:max-h-[260px]"
                    loading="eager"
                  />
                </div>

                {/* COLUNA DIREITA */}
                <div className="w-[31%] flex flex-col gap-1.5 sm:gap-2 shrink-0">
                  <div className="shadow-xs rounded-md sm:rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5 max-h-[85px] sm:max-h-[130px] flex items-center justify-center">
                    <img
                      src="/hero/capas/capa-02-municipios.jpg"
                      alt="Reforma Tributária para Municípios"
                      className="w-full h-full object-cover rounded-xs max-h-[80px] sm:max-h-[120px]"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-xs rounded-md sm:rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5 max-h-[85px] sm:max-h-[130px] flex items-center justify-center">
                    <img
                      src="/hero/capas/capa-04-trilha-fiscal.jpg"
                      alt="Trilha Fiscal"
                      className="w-full h-full object-cover rounded-xs max-h-[80px] sm:max-h-[120px]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 text-center">
                <span className="text-[11px] sm:text-xs font-bold text-amber-900/80 uppercase tracking-wider">
                  Biblioteca Visual da Reforma Tributária • Arquivos Digitais em PDF
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* 1. BLOCO REDESENHADO DE 4 BENEFÍCIOS */}
        <div className="w-full max-w-2xl mb-6 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/10 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                IBS e CBS explicados de forma simples.
              </span>
            </li>

            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/10 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Entenda os impactos no Simples Nacional e no MEI.
              </span>
            </li>

            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/10 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Conheça as mudanças para municípios e licitações.
              </span>
            </li>

            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/10 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Materiais visuais para consulta rápida.
              </span>
            </li>
          </ul>
        </div>

        {/* 2. ÁREA DE PREÇO NÍTIDA E DE ALTO CONTRASTE */}
        <div className="w-full max-w-md mb-4 bg-white/80 p-3.5 rounded-2xl border border-amber-200/80 text-center shadow-xs">
          <span className="text-xs sm:text-sm font-semibold text-slate-600 block mb-1">
            Coleção completa com 16 materiais
          </span>

          <div className="flex items-baseline justify-center gap-2">
            <span className="text-sm sm:text-base text-slate-400 line-through font-semibold">
              De R$ {siteConfig.completeOldPrice}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#0B1F3A] uppercase">POR</span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
              R$ {siteConfig.completePrice}
            </span>
          </div>

          <div className="mt-1">
            <span className="text-xs font-bold text-[#138A60] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 inline-block">
              Pagamento único
            </span>
          </div>
        </div>

        {/* 3. BOTÃO PRINCIPAL COM VERDE INSTITUCIONAL #138A60 */}
        <div className="flex flex-col items-center gap-2.5 w-full max-w-md">
          <a
            href="#precos"
            onClick={scrollToPricing}
            className="w-full bg-[#138A60] hover:bg-[#0F704E] text-white font-extrabold text-[16px] sm:text-lg min-h-[56px] sm:min-h-[62px] py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer group shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-center border border-emerald-500/20"
          >
            <span>ACESSAR A COLEÇÃO COMPLETA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          {/* INFORMAÇÕES ABAIXO DO BOTÃO */}
          <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-3 text-[11px] sm:text-xs font-semibold text-slate-600 text-center">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
              Acesso digital
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
              Pagamento seguro
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
              Pix ou cartão
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-[#138A60] font-bold">
              <Award className="w-3.5 h-3.5 shrink-0" />
              Garantia de 7 dias
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
