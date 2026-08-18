import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { AlertCircle, ArrowRight } from 'lucide-react';

export const ProblemBlock: React.FC = () => {
  const scrollToPricing = (e?: React.MouseEvent<Element>) => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      trackInitiateCheckoutAndNavigate(e || null, siteConfig.COMPLETE_CHECKOUT_URL, 27.90, 'Plano Completo');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-amber-500/10 border-b border-amber-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge / Selo */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
          <AlertCircle className="w-4 h-4 text-amber-700" />
          <span>CHEGA DE CONTEÚDO SOLTO</span>
        </div>

        {/* Novo Título Principal */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5 tracking-tight">
          VOCÊ NÃO PRECISA DE MAIS INFORMAÇÃO. <br className="hidden sm:inline" />
          <span className="text-emerald-700 font-extrabold">PRECISA SABER O QUE IMPORTA — E COMO TUDO SE CONECTA.</span>
        </h2>

        {/* Novo Subtítulo */}
        <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
          Tenha os principais pontos da Reforma Tributária organizados em uma sequência visual, clara e lógica para estudar sem se perder entre vídeos, notícias e textos espalhados.
        </p>

        {/* Novo CTA */}
        <div className="flex flex-col items-center w-full">
          <button
            onClick={scrollToPricing}
            className="btn-cta-primary w-full sm:w-auto text-white font-extrabold text-base sm:text-lg md:text-xl px-6 sm:px-10 py-4 rounded-2xl inline-flex items-center justify-center gap-3 cursor-pointer group shadow-xl hover:scale-[1.02] transition-all"
          >
            <span>QUERO ENTENDER A REFORMA COM CLAREZA</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
