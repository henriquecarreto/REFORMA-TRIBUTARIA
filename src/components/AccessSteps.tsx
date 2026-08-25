import React from 'react';
import { accessSteps } from '../data/landingData';
import { CreditCard, MailCheck, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';

export const AccessSteps: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-[#0A8FF0]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#00A878]" />;
      case 'MailCheck': return <MailCheck className="w-6 h-6 text-amber-600" />;
      case 'Download': return <Download className="w-6 h-6 text-emerald-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#0A8FF0]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-amber-200/60" id="como-recebe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>PROCESSO TRANSPARENTE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-3">
            Como você recebe os materiais
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Etapas simples, seguras e automáticas para você acessar sua biblioteca visual sem complicações.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessSteps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white border border-amber-200/60 shadow-2xs">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-2xl font-black text-amber-500/40">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-amber-200/50 text-[11px] font-bold text-[#00A878]">
                ✓ Acesso Imediato
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AccessSteps;
