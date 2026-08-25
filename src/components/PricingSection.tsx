import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Zap, BookOpen, Layers } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [basicImgError, setBasicImgError] = useState(false);
  const [completeImgError, setCompleteImgError] = useState(false);

  return (
    <section id="precos" className="py-16 md:py-24 bg-[#FAF5E8] text-slate-900 relative overflow-hidden border-b border-amber-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F5B700] text-[#0B1F3A] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Zap className="w-4 h-4 text-[#F5B700] fill-[#F5B700]" />
            <span>OPÇÕES DISPONÍVEIS • ACESSO DIGITAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-3">
            Escolha o Plano Ideal para Você
          </h2>
          <p className="text-[#475569] text-base sm:text-lg font-normal leading-relaxed">
            Selecione entre a versão de introdução ou a coleção completa com todos os 16 materiais visuais.
          </p>
        </div>

        {/* 2 PLANOS LADO A LADO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* 1. PLANO BÁSICO */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#0B1F3A]/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-start h-fit self-start">
            <div>
              {/* NOME E DESCRIÇÃO DO PLANO */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] mb-1.5">
                  PLANO BÁSICO
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Materiais essenciais para iniciar a compreensão dos conceitos fundamentais da Reforma Tributária.
                </p>
              </div>

              {/* IMAGEM DO PLANO BÁSICO */}
              <div className="w-full bg-[#FAF7F2] rounded-xl border border-slate-200/90 overflow-hidden mb-6 p-1.5 sm:p-2 flex items-center justify-center shadow-xs">
                {!basicImgError ? (
                  <img
                    src="/plans/plano-basico.jpg"
                    alt="Coleção de Materiais do Plano Básico"
                    onError={() => setBasicImgError(true)}
                    className="w-full h-auto object-contain rounded-lg drop-shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-50 to-amber-50/40 w-full h-48">
                    <div className="p-3 rounded-full bg-white border border-slate-200 shadow-xs mb-2">
                      <BookOpen className="w-6 h-6 text-[#176BAA]" />
                    </div>
                    <span className="text-xs font-extrabold text-[#0B1F3A] uppercase tracking-wide">
                      PLANO BÁSICO
                    </span>
                  </div>
                )}
              </div>

              {/* BLOCO DE PREÇO NÍTIDO */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-xs text-slate-400 line-through font-semibold block mb-0.5">
                  De R$ {siteConfig.basicOldPrice}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold text-[#0B1F3A] uppercase">POR</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#138A60] tracking-tight">R$ {siteConfig.basicPrice}</span>
                </div>
                <div className="mt-1">
                  <span className="text-xs font-bold text-[#138A60] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 inline-block">
                    Pagamento único
                  </span>
                </div>
              </div>

              {/* LISTA DE CONTEÚDOS */}
              <div className="space-y-3 mb-2">
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#138A60] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Trilha Fiscal: Fundamentos da Área Fiscal
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#138A60] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual da Reforma Tributária
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#138A60] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual do IBS
                  </span>
                </div>
                <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100/80">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#138A60] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Guia Visual da CBS
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#138A60] shrink-0 mt-0.5" />
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
                onClick={(e) => trackInitiateCheckoutAndNavigate(e, siteConfig.BASIC_CHECKOUT_URL, 17.90, 'Plano Básico')}
                className="w-full bg-[#138A60] hover:bg-[#0F704E] text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-center shadow-md transition-transform hover:scale-[1.01]"
              >
                <span>QUERO ACESSAR O PLANO BÁSICO</span>
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#138A60]" />
                <span>PAGAMENTO SEGURO • PIX OU CARTÃO</span>
              </div>
            </div>
          </div>

          {/* 2. PLANO COMPLETO */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-2xl border-2 border-[#F5B700] shadow-xl shadow-amber-900/10 relative flex flex-col justify-between h-full">
            
            {/* BADGE DE MAIOR VALOR */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5B700] text-[#0B1F3A] font-extrabold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-[#0B1F3A]" />
              <span>12 GUIAS + 4 BÔNUS = 16 MATERIAIS DIGITAIS</span>
            </div>

            <div>
              {/* NOME E DESCRIÇÃO DO PLANO */}
              <div className="mt-2 mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-1.5">
                  COLEÇÃO COMPLETA
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  A coleção inteira reunindo os 12 guias principais e 4 bônus (total de 16 materiais digitais) abrangendo Simples Nacional, MEI, Split Payment, Municípios e Licitações.
                </p>
              </div>

              {/* IMAGEM DO PLANO COMPLETO */}
              <div className="w-full bg-[#FAF7F2] rounded-xl border border-slate-200/90 overflow-hidden mb-6 p-1.5 sm:p-2 flex items-center justify-center shadow-xs">
                {!completeImgError ? (
                  <img
                    src="/plans/plano-completo.jpg"
                    alt="Coleção Completa de Materiais"
                    onError={() => setCompleteImgError(true)}
                    className="w-full h-auto object-contain rounded-lg drop-shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-50 to-amber-50/50 w-full h-48">
                    <div className="p-3.5 rounded-full bg-white border border-amber-200 shadow-xs mb-2">
                      <Star className="w-7 h-7 text-[#F5B700] fill-[#F5B700]" />
                    </div>
                    <span className="text-xs font-extrabold text-[#0B1F3A] uppercase tracking-wide">
                      COLEÇÃO COMPLETA (16 MATERIAIS DIGITAIS)
                    </span>
                  </div>
                )}
              </div>

              {/* BLOCO DE PREÇO NÍTIDO */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-600 block mb-0.5">
                  Coleção completa com 16 materiais
                </span>
                <span className="text-xs text-slate-400 line-through font-semibold block mb-0.5">
                  De R$ {siteConfig.completeOldPrice}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-bold text-[#0B1F3A] uppercase">POR</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">R$ {siteConfig.completePrice}</span>
                </div>
                <div className="mt-1">
                  <span className="text-xs font-bold text-[#138A60] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 inline-block">
                    Pagamento único
                  </span>
                </div>
              </div>

              {/* LISTA COMPLETA DOS CONTEÚDOS */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200">
                  <Layers className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>12 GUIAS PRINCIPAIS + 4 BÔNUS = 16 MATERIAIS DIGITAIS:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>1. Trilha Fiscal: Fundamentos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>2. Guia Visual da Reforma</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>3. Guia Visual do IBS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>4. Guia Visual da CBS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>5. Imposto Seletivo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>6. Simples Nacional</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>7. Guia Visual do MEI</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>8. Split Payment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>9. SINTER, CIB, SINIR e CNM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>10. Guia para Municípios</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>11. Licitações Públicas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>12. CNPJ Técnico</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-teal-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>13. Pessoa Física (Bônus)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-teal-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>14. Nanoempreendedor (Bônus)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-teal-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>15. Cashback IBS/CBS (Bônus)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-teal-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138A60] shrink-0" />
                    <span>16. Créditos IBS/CBS (Bônus)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTÃO E MICROCOPY DO PLANO COMPLETO */}
            <div className="mt-auto pt-4">
              <a
                href={siteConfig.COMPLETE_CHECKOUT_URL}
                onClick={(e) => trackInitiateCheckoutAndNavigate(e, siteConfig.COMPLETE_CHECKOUT_URL, 27.90, 'Plano Completo')}
                className="w-full bg-[#138A60] hover:bg-[#0F704E] text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-xl flex items-center justify-center gap-3 cursor-pointer text-center shadow-lg transition-transform hover:scale-[1.01]"
              >
                <span>ACESSAR A COLEÇÃO COMPLETA</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#138A60]" />
                <span>PAGAMENTO SEGURO • GARANTIA DE 7 DIAS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;
