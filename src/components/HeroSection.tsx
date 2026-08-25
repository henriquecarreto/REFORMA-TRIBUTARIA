import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { Check, ArrowRight, ShieldCheck, BookOpen, Layers, Lock, Sparkles } from 'lucide-react';

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
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#FAF7F2] border-b border-amber-200/60 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* 1. FAIXA SUPERIOR DISCRETA / DESTACA DE MARCA */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#F5B700]/80 text-[#0B1F3A] text-[12px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-xs">
          <BookOpen className="w-4 h-4 text-[#D97706] shrink-0" />
          <span>COLEÇÃO COMPLETA DA REFORMA TRIBUTÁRIA</span>
        </div>

        {/* 2. TÍTULO PRINCIPAL (HEADLINE ORIENTADA A BENEFÍCIO) */}
        <h1 className="text-[32px] min-[375px]:text-[35px] min-[430px]:text-[38px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#0B1F3A] leading-[1.12] tracking-tight mb-4 max-w-3xl">
          Entenda a Reforma Tributária <br className="hidden sm:inline" />
          <span className="text-[#0A8FF0]">sem se perder em leis</span> e <span className="text-[#00A878]">explicações complicadas</span>
        </h1>

        {/* 3. SUBTÍTULO (EXPLICAÇÃO OBJETIVA & PÚBLICO ALVO) */}
        <p className="text-[15px] sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium max-w-2xl text-center">
          Receba uma coleção completa com materiais visuais sobre <strong className="text-[#0B1F3A]">IBS, CBS, Simples Nacional, MEI, municípios, licitações</strong> e outras mudanças essenciais.
        </p>

        {/* TAG DE PÚBLICO RELEVANTE */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200/90 text-amber-900 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Ideal para contadores, profissionais fiscais, servidores públicos, estudantes e empreendedores.</span>
        </div>

        {/* 4. MOCKUP DAS CAPAS COM SELO DE 16 MATERIAIS */}
        <div className="w-full max-w-3xl mb-8 relative">
          
          {/* SELO DE DESTAQUE "16 MATERIAIS DIGITAIS INCLUÍDOS" */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#00A878] text-white text-[12px] sm:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5 whitespace-nowrap">
            <Layers className="w-4 h-4 text-emerald-100" />
            <span>16 MATERIAIS DIGITAIS INCLUÍDOS</span>
          </div>

          <div className="w-full bg-white p-2.5 sm:p-4 rounded-3xl border border-amber-200/90 shadow-2xl shadow-amber-900/10 transition-transform duration-300">
            <div className="rounded-2xl overflow-hidden bg-[#FAF5E8] p-3 sm:p-5 border border-amber-200/60 pt-6 sm:pt-8">
              
              {/* LAYOUT DE CAPAS: 3 COLUNAS */}
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                
                {/* COLUNA ESQUERDA */}
                <div className="w-[31%] flex flex-col gap-2 sm:gap-3.5 shrink-0">
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 sm:p-1">
                    <img
                      src="/hero/capas/capa-01-cbs-ibs.jpg"
                      alt="Guia Visual CBS e IBS"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 sm:p-1">
                    <img
                      src="/hero/capas/capa-03-licitacoes.jpg"
                      alt="Reforma Tributária nas Licitações Públicas"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* COLUNA CENTRAL (DESTAQUE) */}
                <div className="w-[36%] shrink-0 shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-400 bg-white p-0.5 sm:p-1 z-10 my-auto">
                  <img
                    src="/hero/capas/capa-05-consumo.jpg"
                    alt="Reforma Tributária do Consumo - Guia Principal"
                    className="w-full h-auto object-cover rounded-lg sm:rounded-xl"
                    loading="eager"
                  />
                </div>

                {/* COLUNA DIREITA */}
                <div className="w-[31%] flex flex-col gap-2 sm:gap-3.5 shrink-0">
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 sm:p-1">
                    <img
                      src="/hero/capas/capa-02-municipios.jpg"
                      alt="Reforma Tributária para Municípios"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 sm:p-1">
                    <img
                      src="/hero/capas/capa-04-trilha-fiscal.jpg"
                      alt="Trilha Fiscal"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                </div>

              </div>

              <div className="mt-3 text-center">
                <span className="text-[12px] sm:text-xs font-bold text-amber-900/80 uppercase tracking-wider">
                  Biblioteca Visual da Reforma Tributária • Arquivos em PDF para download
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* 5. RESUMO DOS PRINCIPAIS BENEFÍCIOS PRÁTICOS */}
        <div className="w-full max-w-xl mb-7 bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-amber-200/70 shadow-xs">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                <strong className="text-[#0A8FF0]">IBS e CBS</strong> explicados de forma simples.
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Impacto no <strong className="text-[#00A878]">Simples Nacional e MEI</strong>.
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Regras para <strong className="text-[#0B1F3A]">Municípios e Licitações</strong>.
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#00A878]/15 text-[#00A878] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Materiais visuais para <strong className="text-[#00A878]">consulta rápida</strong>.
              </span>
            </li>
          </ul>
        </div>

        {/* 6. DESTAQUE DE PREÇO NA PRIMEIRA DOBRA */}
        <div className="mb-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-slate-800">
            <span className="text-xs sm:text-sm font-semibold text-slate-600">Acesso à Coleção Completa por apenas:</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs text-slate-400 line-through font-medium">R$ {siteConfig.completeOldPrice}</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">R$ {siteConfig.completePrice}</span>
              <span className="text-xs font-bold text-[#00A878] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Preço Atual Garantido</span>
            </div>
          </div>
        </div>

        {/* 7. BOTÃO DE COMPRA DESTACADO & INFORMAÇÕES DE SEGURANÇA */}
        <div className="flex flex-col items-center gap-2.5 w-full max-w-md">
          <button
            onClick={scrollToPricing}
            className="w-full bg-[#00A878] hover:bg-[#009368] text-white font-extrabold text-[16px] min-[375px]:text-[17px] sm:text-lg lg:text-[19px] py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 cursor-pointer group shadow-xl shadow-emerald-900/15 hover:scale-[1.01] active:scale-[0.99] transition-all border border-emerald-400/30"
          >
            <span>ACESSAR A COLEÇÃO COMPLETA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          {/* INFORMATIONS TRUTHFUL MICROCOPY */}
          <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-3 text-[12px] sm:text-xs font-semibold text-slate-600 pt-1 text-center">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#00A878] shrink-0" />
              Acesso digital imediato
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A878] shrink-0" />
              Pagamento seguro via Pix ou Cartão
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[#00A878] font-bold">Garantia de 7 dias</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
