import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackInitiateCheckoutAndNavigate } from '../utils/pixel';
import { ArrowRight, X } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const scrollY = window.scrollY;
      const heroThreshold = 500;
      const pricingElement = document.getElementById('precos');

      let nearPricing = false;
      if (pricingElement) {
        const rect = pricingElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          nearPricing = true;
        }
      }

      if (scrollY > heroThreshold && !nearPricing) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToPricing = (e?: React.MouseEvent<Element>) => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      trackInitiateCheckoutAndNavigate(e || null, siteConfig.COMPLETE_CHECKOUT_URL, 27.90, 'Plano Completo');
    }
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 shadow-2xl sm:hidden animate-fade-in flex items-center gap-2">
      <button
        onClick={scrollToPricing}
        className="flex-1 bg-[#00A878] hover:bg-[#009368] text-white font-extrabold text-xs min-[375px]:text-sm py-3.5 px-4 rounded-xl flex items-center justify-between shadow-lg cursor-pointer transition-transform border border-emerald-400/30"
      >
        <span>ACESSAR COLEÇÃO COMPLETA</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-amber-200 font-black">R$ {siteConfig.completePrice}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>

      <button
        onClick={() => setIsDismissed(true)}
        aria-label="Fechar"
        className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
