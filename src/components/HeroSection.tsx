import React from 'react';
import { Check, ArrowRight, BookOpen } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToMaterials = (e?: React.MouseEvent<Element>) => {
    e?.preventDefault();
    const el = document.getElementById('materiais');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'materiais';
    }
  };

  return (
    <section className="relative pt-6 pb-10 sm:pt-10 sm:pb-14 bg-[#FAF7F2] border-b border-amber-200/60 overflow-hidden">
      {/* Glows sutis de fundo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* 1. SELO SUPERIOR DISCRETO */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F5B700]/70 text-[#0B1F3A] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
          <span>COLEÇÃO VISUAL DA REFORMA TRIBUTÁRIA</span>
        </div>

        {/* 2. TÍTULO PRINCIPAL */}
        <h1 className="text-[30px] min-[375px]:text-[34px] min-[430px]:text-[36px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#0B1F3A] leading-[1.12] tracking-tight mb-3.5 max-w-3xl">
          A Reforma Tributária ficou <br className="hidden sm:inline" />
          <span className="text-[#138A60]">mais fácil de entender.</span>
        </h1>

        {/* 3. SUBTÍTULO */}
        <p className="text-[15px] sm:text-lg text-slate-700 leading-relaxed mb-4 font-medium max-w-2xl text-center">
          Descubra uma coleção com 16 materiais visuais que explicam IBS, CBS, Simples Nacional, MEI, municípios e licitações de forma clara e organizada.
        </p>

        {/* PÚBLICO ALVO EM TEXTO DIRETO (SEM CAIXA AMARELA/BORDA) */}
        <p className="text-xs sm:text-sm font-semibold text-amber-900/90 mb-6 text-center max-w-xl">
          Para profissionais fiscais, contadores, servidores públicos, estudantes e empreendedores.
        </p>

        {/* 4. COMPOSIÇÃO DAS CAPAS COMPLETAS (OBJECT-FIT: CONTAIN - ZERO CORTES) */}
        <div className="w-full max-w-2xl sm:max-w-3xl mb-6 relative">
          
          {/* LAYOUT COMPACTO DE CAPAS COM PROPORÇÃO PRESERVADA (OBJECT-FIT CONTAIN) */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 py-2 px-1">
            
            {/* COLUNA ESQUERDA - CAPAS SECUNDÁRIAS */}
            <div className="w-[28%] sm:w-[26%] flex flex-col gap-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
              <div className="shadow-sm rounded-lg overflow-hidden bg-white p-1 border border-amber-200/70">
                <img
                  src="/hero/capas/capa-01-cbs-ibs.jpg"
                  alt="Guia Visual CBS e IBS"
                  className="w-full h-auto object-contain max-h-[120px] sm:max-h-[170px] rounded-xs"
                  loading="eager"
                />
              </div>
              <div className="shadow-sm rounded-lg overflow-hidden bg-white p-1 border border-amber-200/70">
                <img
                  src="/hero/capas/capa-03-licitacoes.jpg"
                  alt="Reforma Tributária nas Licitações Públicas"
                  className="w-full h-auto object-contain max-h-[120px] sm:max-h-[170px] rounded-xs"
                  loading="eager"
                />
              </div>
            </div>

            {/* COLUNA CENTRAL - CAPA PRINCIPAL EM DESTAQUE */}
            <div className="w-[38%] sm:w-[36%] shrink-0 shadow-lg rounded-xl overflow-hidden bg-white p-1.5 border-2 border-amber-400 z-10 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/hero/capas/capa-05-consumo.jpg"
                alt="Reforma Tributária do Consumo - Guia Principal"
                className="w-full h-auto object-contain max-h-[240px] sm:max-h-[340px] rounded-md"
                loading="eager"
              />
            </div>

            {/* COLUNA DIREITA - CAPAS SECUNDÁRIAS */}
            <div className="w-[28%] sm:w-[26%] flex flex-col gap-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
              <div className="shadow-sm rounded-lg overflow-hidden bg-white p-1 border border-amber-200/70">
                <img
                  src="/hero/capas/capa-02-municipios.jpg"
                  alt="Reforma Tributária para Municípios"
                  className="w-full h-auto object-contain max-h-[120px] sm:max-h-[170px] rounded-xs"
                  loading="eager"
                />
              </div>
              <div className="shadow-sm rounded-lg overflow-hidden bg-white p-1 border border-amber-200/70">
                <img
                  src="/hero/capas/capa-04-trilha-fiscal.jpg"
                  alt="Trilha Fiscal"
                  className="w-full h-auto object-contain max-h-[120px] sm:max-h-[170px] rounded-xs"
                  loading="eager"
                />
              </div>
            </div>

          </div>

          {/* MENSAGEM DA COLEÇÃO DIRETA SOBRE O FUNDO BEGE */}
          <div className="mt-3 text-center">
            <span className="text-xs sm:text-sm font-bold text-amber-950 uppercase tracking-wide">
              12 guias principais e 4 bônus para consultar quando precisar.
            </span>
          </div>
        </div>

        {/* 5. BENEFÍCIOS INTEGRADOS DIRETO AO FUNDO BEGE (SEM CAIXA BRANCA E SEM BORDAS) */}
        <div className="w-full max-w-2xl mb-6 px-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/15 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                <strong className="text-[#0B1F3A]">IBS e CBS</strong> explicados com clareza.
              </span>
            </li>

            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/15 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Entenda o <strong className="text-[#138A60]">Simples Nacional e o MEI</strong>.
              </span>
            </li>

            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/15 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Veja os impactos para <strong className="text-[#0B1F3A]">municípios e licitações</strong>.
              </span>
            </li>

            <li className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#138A60]/15 text-[#138A60] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                Consulte os principais temas de <strong className="text-[#138A60]">forma visual</strong>.
              </span>
            </li>
          </ul>
        </div>

        {/* 6. BOTÃO PRINCIPAL "CONHECER OS 16 MATERIAIS" -> #materiais (ZERO PREÇO NA 1ª DOBRA!) */}
        <div className="flex flex-col items-center gap-2.5 w-full max-w-md">
          <a
            href="#materiais"
            onClick={scrollToMaterials}
            className="w-full bg-[#138A60] hover:bg-[#0F704E] text-white font-extrabold text-[16px] sm:text-lg min-h-[56px] sm:min-h-[62px] py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 cursor-pointer group shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-center border border-emerald-500/20"
          >
            <span>CONHECER OS 16 MATERIAIS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          {/* INFORMAÇÃO COMPLEMENTAR DISCRETA */}
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-600 text-center">
            <span>Material digital</span>
            <span className="text-slate-300">•</span>
            <span>Consulta pelo celular</span>
            <span className="text-slate-300">•</span>
            <span>Acesso imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
