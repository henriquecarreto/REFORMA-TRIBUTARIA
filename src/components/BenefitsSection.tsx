import React from 'react';
import { benefitsList } from '../data/landingData';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const scrollToPricing = (e?: React.MouseEvent<Element>) => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      trackInitiateCheckoutAndNavigate(e || null, siteConfig.COMPLETE_CHECKOUT_URL, 27.90, 'Plano Completo');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          PARE DE JUNTAR PEÇAS SOLTAS. <br className="hidden sm:inline" />
          <span className="text-amber-400">ENXERGUE A REFORMA COMO UM TODO.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-center">
          Transforme informações espalhadas em uma visão organizada do que muda, como funciona e onde cada assunto se conecta.
        </p>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-12">
          {benefitsList.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-slate-800/70 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-slate-700/80 flex items-start gap-3.5 shadow-md hover:border-slate-600/80 transition-all h-full"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-100 leading-snug mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center w-full">
          <button
            onClick={scrollToPricing}
            className="btn-cta-primary w-full sm:w-auto text-white font-extrabold text-base sm:text-lg md:text-xl px-6 sm:px-10 py-4 rounded-2xl flex items-center justify-center gap-3 cursor-pointer group shadow-xl hover:scale-[1.02] transition-all"
          >
            <span>QUERO ENTENDER A REFORMA COM MAIS CLAREZA</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
