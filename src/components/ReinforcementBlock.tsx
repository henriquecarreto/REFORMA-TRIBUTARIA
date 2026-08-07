import React from 'react';
import { Sparkles } from 'lucide-react';

export const ReinforcementBlock: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="/material/amostra-01.jpg" alt="Amostra do material" className="w-full h-full object-cover" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Eficiência nos Estudos</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              "Um único material bem organizado pode economizar horas procurando explicações em conteúdos diferentes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
