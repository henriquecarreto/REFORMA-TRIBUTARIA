import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
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

  const scrollToPricing = () => {
    const el = document.getElementById('precos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = siteConfig.COMPLETE_CHECKOUT_URL;
    }
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 shadow-2xl sm:hidden animate-fade-in flex items-center gap-2">
      <button
        onClick={scrollToPricing}
        className="btn-cta-primary flex-1 text-white font-extrabold text-sm py-3 px-4 rounded-xl flex items-center justify-between shadow-lg cursor-pointer"
      >
        <span>QUERO ACESSAR</span>
        <div className="flex items-center gap-1.5">
          <span className="text-amber-300 font-black">R$ {siteConfig.completePrice}</span>
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
