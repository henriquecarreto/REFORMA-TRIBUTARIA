import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Zap, BookOpen } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [basicImgError, setBasicImgError] = useState(false);
  const [completeImgError, setCompleteImgError] = useState(false);

  return (
    <section id="precos" className="py-16 md:py-24 bg-[#FAF5E8] text-slate-900 relative overflow-hidden border-b border-amber-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F5B700] text-[#0B1F3A] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#F5B700] fill-[#F5B700]" />
            <span>ESCOLHA COMO VOCÊ QUER AVANÇAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
            COMECE PELO ESSENCIAL OU TENHA A COLEÇÃO COMPLETA AO SEU LADO.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Escolha a opção que mais combina com o seu momento: uma base direta para começar ou o pacote completo para estudar, revisar e consultar a Reforma com muito mais clareza.
          </p>
        </div>

        {/* 2 PLANOS LADO A LADO (DESKTOP) / EMPILHADOS (MOBILE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start max-w-5xl mx-auto">
          
          {/* 1. PLANO BÁSICO (COL 5 - MAIS COMPACTO E DIRETO) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#0B1F3A]/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-start h-fit self-start">
            <div>
              {/* NOME E DESCRIÇÃO DO PLANO */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] mb-1.5">
                  PLANO BÁSICO
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  O essencial para começar a entender a Reforma Tributária e construir uma base fiscal mais clara.
                </p>
              </div>

              {/* IMAGEM DO PLANO BÁSICO (COMPLETA E SEM CORTES) */}
              <div className="w-full bg-[#FAF7F2] rounded-xl border border-slate-200/90 overflow-hidden mb-6 p-1.5 sm:p-2 flex items-center justify-center shadow-xs">
                {!basicImgError ? (
                  <img
                    src="/plans/plano-basico.jpg"
                    alt="Coleção de Materiais do Plano Básico - Guia Visual"
                    onError={() => setBasicImgError(true)}
                    className="w-full h-auto object-contain rounded-lg drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
                ) : (
                  /* PLACEHOLDER ELEGANTE */
                  <div className="flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-50 to-amber-50/40 w-full h-48">
                    <div className="p-3 rounded-full bg-white border border-slate-200 shadow-xs mb-2">
                      <BookOpen className="w-6 h-6 text-[#0A8FF0]" />
                    </div>
                    <span className="text-xs font-extrabold text-[#0B1F3A] uppercase tracking-wide">
                      PLANO BÁSICO
                    </span>
                  </div>
                )}
              </div>

              {/* BLOCO DE PREÇO */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-xs text-slate-400 line-through font-semibold block mb-0.5">
                  De R$ 29,90
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold text-[#0B1F3A] uppercase">POR</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#00A878] tracking-tight">R$ 17,90</span>
                  <span className="text-xs text-[#475569] font-medium">/ pagamento único</span>
                </div>
              </div>

              {/* LISTA DE CONTEÚDOS DO PLANO BÁSICO */}
              <div className="space-y-3 mb-2">
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Trilha Fiscal — Fundamentos da Área Fiscal
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual da Reforma Tributária
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do IBS
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual da CBS
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do Imposto Seletivo
                  </span>
                </div>
              </div>
            </div>

            {/* BOTÃO E MICROCOPY */}
            <div className="mt-6 pt-2">
              <a
                href={siteConfig.BASIC_CHECKOUT_URL}
                className="btn-cta-primary w-full text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer text-center shadow-lg hover:scale-[1.01]"
              >
                <span>QUERO COMEÇAR PELO BÁSICO</span>
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A878]" />
                <span>🔒 PAGAMENTO 100% SEGURO</span>
              </div>
              
              {/* MÉTODOS DE PAGAMENTO */}
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-2.5 pt-1">
                <span className="text-[10px] font-bold text-[#32BCAD] bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 flex items-center gap-1">
                  <span className="font-extrabold text-xs">◆</span> PIX
                </span>
                <span className="text-[10px] font-extrabold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200 tracking-wider uppercase">
                  VISA
                </span>
                <div className="flex items-center gap-0.5 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block -mr-1"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] inline-block"></span>
                  <span className="text-[10px] font-bold text-slate-600 ml-1">Mastercard</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. PLANO COMPLETO (COL 7 - MAIS ROBUSTO COM BORDA DOURADA) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-2xl border-2 border-[#F5B700] shadow-xl shadow-amber-900/10 relative flex flex-col justify-between h-full">
            
            {/* BADGE DE MAIOR VALOR DA OFERTA */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5B700] text-[#0B1F3A] font-extrabold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-[#0B1F3A]" />
              <span>MAIS COMPLETO</span>
            </div>

            <div>
              {/* NOME E DESCRIÇÃO DO PLANO */}
              <div className="mt-2 mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-1.5">
                  PLANO COMPLETO
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A coleção completa para quem quer entender a Reforma, aprofundar os principais temas e ter materiais de consulta para diferentes áreas fiscais.
                </p>
              </div>

              {/* IMAGEM DO PLANO COMPLETO (COMPLETA E SEM CORTES) */}
              <div className="w-full bg-[#FAF7F2] rounded-xl border border-slate-200/90 overflow-hidden mb-6 p-1.5 sm:p-2 flex items-center justify-center shadow-xs">
                {!completeImgError ? (
                  <img
                    src="/plans/plano-completo.jpg"
                    alt="Coleção Completa de Materiais + Bônus do Fiscal Simplificado"
                    onError={() => setCompleteImgError(true)}
                    className="w-full h-auto object-contain rounded-lg drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
                ) : (
                  /* PLACEHOLDER ELEGANTE */
                  <div className="flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-50 to-amber-50/50 w-full h-48">
                    <div className="p-3.5 rounded-full bg-white border border-amber-200 shadow-xs mb-2">
                      <Star className="w-7 h-7 text-[#F5B700] fill-[#F5B700]" />
                    </div>
                    <span className="text-xs font-extrabold text-[#0B1F3A] uppercase tracking-wide">
                      PLANO COMPLETO (TODOS OS MATERIAIS + 4 BÔNUS)
                    </span>
                  </div>
                )}
              </div>

              {/* BLOCO DE PREÇO DO PLANO COMPLETO */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-xs text-slate-400 line-through font-semibold block mb-0.5">
                  De R$ {siteConfig.completeOldPrice}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold text-[#0B1F3A] uppercase">POR</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#00A878] tracking-tight">R$ {siteConfig.completePrice}</span>
                  <span className="text-xs text-[#475569] font-medium">/ pagamento único</span>
                </div>
              </div>

              {/* LISTA COMPLETA DOS CONTEÚDOS E BÔNUS */}
              <div className="space-y-3 mb-8">
                {/* TUDO DO PLANO BÁSICO */}
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Trilha Fiscal — Fundamentos da Área Fiscal
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual da Reforma Tributária
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do IBS
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual da CBS
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do Imposto Seletivo
                  </span>
                </div>

                {/* MATERIAIS ADICIONAIS EXCLUSIVOS */}
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do Simples Nacional
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do MEI
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do Split Payment
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual dos Sistemas de Tributação
                  </span>
                </div>

                {/* FAIXA DE DESTAQUE DOS BÔNUS */}
                <div className="bg-[#FFFBEB] border border-[#FDE68A] text-[#0B1F3A] font-extrabold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl my-4 flex items-center gap-2 shadow-xs">
                  <Zap className="w-4 h-4 text-[#F5B700] fill-[#F5B700] shrink-0" />
                  <span>+ 4 BÔNUS INCLUSOS NO PLANO COMPLETO</span>
                </div>

                {/* OS 4 BÔNUS */}
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    BÔNUS 01 — Pessoa Física na Reforma
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    BÔNUS 02 — Nanoempreendedor
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    BÔNUS 03 — Cashback do IBS e da CBS
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A878] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    BÔNUS 04 — Créditos do IBS e da CBS
                  </span>
                </div>
              </div>
            </div>

            {/* BOTÃO E MICROCOPY DO PLANO COMPLETO */}
            <div className="mt-auto pt-4">
              <a
                href={siteConfig.COMPLETE_CHECKOUT_URL}
                className="btn-cta-primary w-full text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl flex items-center justify-center gap-3 cursor-pointer text-center shadow-xl hover:scale-[1.01]"
              >
                <span>QUERO ACESSAR O PLANO COMPLETO</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A878]" />
                <span>🔒 PAGAMENTO 100% SEGURO</span>
              </div>

              {/* MÉTODOS DE PAGAMENTO */}
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-2.5 pt-1">
                <span className="text-[10px] font-bold text-[#32BCAD] bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 flex items-center gap-1">
                  <span className="font-extrabold text-xs">◆</span> PIX
                </span>
                <span className="text-[10px] font-extrabold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200 tracking-wider uppercase">
                  VISA
                </span>
                <div className="flex items-center gap-0.5 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block -mr-1"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] inline-block"></span>
                  <span className="text-[10px] font-bold text-slate-600 ml-1">Mastercard</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* QUADRANTE PERSUASIVO ABAIXO DA OFERTA COMPLETA */}
        <div className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-md flex items-start gap-4 sm:gap-5">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-[#E6F4EA] border border-[#00A878]/30 shrink-0 text-[#00A878]">
            <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="space-y-1.5 text-left">
            <h4 className="text-sm sm:text-base font-extrabold text-[#0B1F3A] uppercase tracking-wide leading-snug">
              UM ÚNICO GUIA VISUAL PODE ECONOMIZAR DEZENAS DE HORAS TENTANDO DECODIFICAR A REFORMA POR CONTEÚDOS SOLTOS.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Todo o excesso de teoria vira clareza imediata para estudar com foco, revisar pontos-chave com rapidez e acompanhar a evolução tributária com total segurança.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
