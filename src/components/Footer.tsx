import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-12 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE SUPERIOR DO RODAPÉ (LADO ESQUERDO E DIREITO) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10">
          
          {/* LADO ESQUERDO — LOGO E DESCRIÇÃO DO ACERVO */}
          <div className="max-w-xl flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full border-2 border-[#D97706]/80 bg-[#0A0A0A] flex items-center justify-center text-[#F5B700] shrink-0 shadow-md shadow-amber-950/20">
                <BookOpen className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {siteConfig.brandName}
              </span>
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
