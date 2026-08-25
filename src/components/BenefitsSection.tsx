import React from 'react';
import { benefitsList } from '../data/landingData';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
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
    <section className="py-16 md:py-24 bg-[#0B1F3A] text-white relative overflow-hidden border-b border-blue-900/60">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          ENTENDA O QUE IMPORTA E VEJA COMO <br className="hidden sm:inline" />
          <span className="text-[#F5B700]">A REFORMA TRIBUTÁRIA FUNCIONA</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto mb-10 text-center">
          Encontre os principais pontos da Reforma Tributária organizados de forma visual, clara e fácil de consultar.
        </p>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-10">
          {benefitsList.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/15 flex items-start gap-3.5 shadow-md hover:bg-white/15 transition-all h-full"
            >
              <CheckCircle2 className="w-5 h-5 text-[#138A60] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center w-full">
          <a
            href="#precos"
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-[#138A60] hover:bg-[#0F704E] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer group shadow-lg hover:scale-[1.01] transition-all text-center border border-emerald-500/20"
          >
            <span>CONHECER A COLEÇÃO COMPLETA</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
