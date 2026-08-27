import React from 'react';
import { siteConfig } from '../config/siteConfig';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

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
                className="h-14 sm:h-16 w-auto object-contain bg-white px-3.5 py-2 rounded-xl shadow-md"
              />
            </div>
            <p className="text-sm sm:text-base text-slate-100 font-semibold leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* LADO DIREITO — SUPORTE AO CLIENTE E REDES SOCIAIS */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right gap-2">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-0.5">
              SUPORTE AO CLIENTE
            </h4>
            <p className="text-sm sm:text-base text-slate-100 font-bold">
              E-mail de suporte:{' '}
              <a 
                href={`mailto:${siteConfig.supportEmail}`} 
                className="text-[#F5B700] hover:text-amber-300 font-extrabold transition-colors underline decoration-amber-500/50 decoration-2"
              >
                {siteConfig.supportEmail}
              </a>
            </p>

            {/* REDES SOCIAIS / INSTAGRAM E FACEBOOK */}
            <div className="mt-2 flex flex-col items-start md:items-end gap-2">
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                REDES SOCIAIS
              </span>

              {/* INSTAGRAM */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-100 hover:text-[#F5B700] transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <span>{siteConfig.instagramHandle}</span>
              </a>

              {/* FACEBOOK */}
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-100 hover:text-[#F5B700] transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#1877F2] p-0.5 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <FacebookIcon className="w-4 h-4 text-white" />
                </div>
                <span>{siteConfig.facebookHandle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* LINHA DIVISÓRIA */}
        <div className="w-full border-t border-zinc-800 mb-8" />

        {/* PARTE INFERIOR (CENTRALIZADA) — COPYRIGHT E AVISO LEGAL */}
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <p className="text-xs sm:text-sm text-slate-100 font-bold">
            {siteConfig.copyright}
          </p>
          <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-4xl leading-relaxed">
            {siteConfig.disclaimer}
          </p>
        </div>

      </div>
    </footer>
  );
};
