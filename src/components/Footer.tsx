import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-12 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE SUPERIOR DO RODAPÉ (LADO ESQUERDO E DIREITO) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10">
          
          {/* LADO ESQUERDO — LOGO E DESCRIÇÃO DO ACERVO */}
          <div className="max-w-xl flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img
                src="/brand/logo.png"
                alt={siteConfig.brandName}
                className="h-11 sm:h-13 w-auto object-contain bg-white px-3 py-1.5 rounded-xl shadow-md"
              />
            </div>
            <p className="text-sm text-slate-400 font-normal leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* LADO DIREITO — SUPORTE AO CLIENTE */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-2">
              SUPORTE AO CLIENTE
            </h4>
            <p className="text-sm text-slate-300 font-medium">
              E-mail de suporte:{' '}
              <a 
                href={`mailto:${siteConfig.supportEmail}`} 
                className="text-[#F5B700] hover:text-amber-300 font-bold transition-colors"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </div>

        </div>

        {/* LINHA DIVISÓRIA */}
        <div className="w-full border-t border-zinc-900 mb-8" />

        {/* PARTE INFERIOR (CENTRALIZADA) — COPYRIGHT E AVISO LEGAL */}
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="text-xs text-slate-400 font-medium">
            {siteConfig.copyright}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-500 max-w-4xl leading-relaxed">
            {siteConfig.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
};
