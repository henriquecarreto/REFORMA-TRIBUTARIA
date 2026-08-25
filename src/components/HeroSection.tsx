import React from 'react';
import { ArrowRight, BookOpen, BarChart3, Building, Landmark, Eye, FileText, Smartphone, Zap } from 'lucide-react';

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

        {/* 2. TÍTULO PRINCIPAL RESTAURADO */}
        <h1 className="text-[28px] min-[375px]:text-[32px] min-[430px]:text-[35px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#0B1F3A] leading-[1.14] tracking-tight mb-4 max-w-3xl">
          Entenda a Reforma Tributária <br className="hidden sm:inline" />
          <span className="text-[#1769D1]">sem se perder em leis</span> e <span className="text-[#138A60]">explicações complicadas</span>
        </h1>

        {/* 3. SUBTÍTULO OTIMIZADO */}
        <p className="text-[17px] min-[375px]:text-[18px] sm:text-[20px] lg:text-[21px] text-[#14233B] leading-[1.6] mb-3.5 font-semibold max-w-3xl text-center">
          Descubra uma coleção com <strong className="text-[#D72638] font-black">16 materiais visuais</strong> que explicam <strong className="text-[#1769D1] font-extrabold">IBS, CBS, Simples Nacional, MEI e os impactos nos municípios e licitações</strong> de forma clara e organizada.
        </p>

        {/* PÚBLICO ALVO EM TEXTO PRETO (#0B1F3A) COM EMOJI 👥 */}
        <p className="text-sm sm:text-base font-bold text-[#0B1F3A] mb-6 text-center max-w-2xl">
          👥 Para profissionais fiscais, contadores, servidores públicos, estudantes e empreendedores.
        </p>

        {/* 4. COMPOSIÇÃO ORIGINAL DE CAPAS */}
        <div className="w-full max-w-2xl sm:max-w-3xl mb-8">
          <div className="relative w-full bg-white p-2.5 sm:p-4 rounded-3xl border border-amber-200/90 shadow-2xl shadow-amber-900/10 transition-transform duration-300 hover:scale-[1.01]">
            <div className="rounded-2xl overflow-hidden bg-[#FAF5E8] p-3 sm:p-5 border border-amber-200/60 relative">
              
              {/* DISPOSIÇÃO DE 3 COLUNAS PADRÃO */}
              <div className="flex items-center justify-between gap-2.5 sm:gap-4">
                
                {/* COLUNA ESQUERDA */}
                <div className="w-[31%] flex flex-col gap-2.5 sm:gap-4 shrink-0">
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/90 bg-white p-0.5 sm:p-1 transition-transform hover:scale-[1.02]">
                    <img
                      src="/hero/capas/capa-01-cbs-ibs.jpg"
                      alt="Guia Visual CBS e IBS"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/90 bg-white p-0.5 sm:p-1 transition-transform hover:scale-[1.02]">
                    <img
                      src="/hero/capas/capa-03-licitacoes.jpg"
                      alt="Reforma Tributária nas Licitações Públicas"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* COLUNA CENTRAL */}
                <div className="w-[36%] shrink-0 shadow-xl rounded-xl sm:rounded-2xl overflow-hidden border-2 border-amber-400/90 bg-white p-0.5 sm:p-1 z-10 my-auto transition-transform hover:scale-[1.03]">
                  <img
                    src="/hero/capas/capa-05-consumo.jpg"
                    alt="Reforma Tributária do Consumo - Guia Principal"
                    className="w-full h-auto object-cover rounded-lg sm:rounded-xl"
                    loading="eager"
                  />
                </div>

                {/* COLUNA DIREITA */}
                <div className="w-[31%] flex flex-col gap-2.5 sm:gap-4 shrink-0">
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/90 bg-white p-0.5 sm:p-1 transition-transform hover:scale-[1.02]">
                    <img
                      src="/hero/capas/capa-02-municipios.jpg"
                      alt="Reforma Tributária para Municípios"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                  <div className="shadow-md rounded-lg sm:rounded-xl overflow-hidden border border-slate-200/90 bg-white p-0.5 sm:p-1 transition-transform hover:scale-[1.02]">
                    <img
                      src="/hero/capas/capa-04-trilha-fiscal.jpg"
                      alt="Trilha Fiscal"
                      className="w-full h-auto object-cover rounded-md"
                      loading="eager"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* LEGENDA PADRONIZADA COM TEXTO EM PRETO (#0B1F3A), MANTENDO EMOJIS E SÍMBOLOS */}
          <div className="mt-3.5 text-center">
            <span className="text-xs sm:text-sm font-extrabold text-[#0B1F3A] tracking-wide">
              📚 <strong className="text-[#0B1F3A] font-black">12 GUIAS PRINCIPAIS</strong> + 🎁 <strong className="text-[#0B1F3A] font-black">4 BÔNUS</strong> PARA CONSULTAR QUANDO PRECISAR
            </span>
          </div>
        </div>

        {/* 5. BENEFÍCIOS PADRONIZADOS EM TEXTO PRETO (#0B1F3A), MANTENDO OS ÍCONES E SÍMBOLOS */}
        <div className="w-full max-w-2xl mb-7 px-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-[#1769D1]/15 text-[#1769D1] flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0B1F3A] leading-snug">
                <strong className="text-[#0B1F3A] font-extrabold">IBS e CBS</strong> explicados com clareza.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-[#138A60]/15 text-[#138A60] flex items-center justify-center shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0B1F3A] leading-snug">
                Entenda o <strong className="text-[#0B1F3A] font-extrabold">Simples Nacional e o MEI</strong>.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-[#D72638]/15 text-[#D72638] flex items-center justify-center shrink-0">
                <Landmark className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0B1F3A] leading-snug">
                Veja os impactos para <strong className="text-[#0B1F3A] font-extrabold">municípios e licitações</strong>.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-[#138A60]/15 text-[#138A60] flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0B1F3A] leading-snug">
                Consulte os principais temas de <strong className="text-[#0B1F3A] font-extrabold">forma visual</strong>.
              </span>
            </li>
          </ul>
        </div>

        {/* 6. BOTÃO PRINCIPAL "CONHECER OS 16 MATERIAIS" */}
        <div className="flex flex-col items-center gap-3 w-full max-w-md">
          <a
            href="#materiais"
            onClick={scrollToMaterials}
            className="w-full bg-[#138A60] hover:bg-[#0F704E] text-white font-extrabold text-[16px] sm:text-lg min-h-[56px] sm:min-h-[62px] py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 cursor-pointer group shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all text-center border border-emerald-500/20"
          >
            <span>CONHECER OS 16 MATERIAIS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          {/* INFORMAÇÃO COMPLEMENTAR REORGANIZADA ABAIXO DO BOTÃO */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm font-semibold text-[#14233B] text-center pt-1">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#1769D1] shrink-0" />
              Material digital
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-[#138A60] shrink-0" />
              Consulta pelo celular
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#D72638] fill-[#D72638] shrink-0" />
              <strong className="text-[#D72638] font-extrabold">Acesso imediato</strong>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
