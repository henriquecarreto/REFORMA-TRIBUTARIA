import React from 'react';
import { accessSteps } from '../data/landingData';
import { CreditCard, MailCheck, FolderKanban, MonitorCheck } from 'lucide-react';

export const AccessSteps: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-blue-600" />;
      case 'MailCheck': return <MailCheck className="w-6 h-6 text-emerald-600" />;
      case 'FolderKanban': return <FolderKanban className="w-6 h-6 text-indigo-600" />;
      case 'MonitorCheck': return <MonitorCheck className="w-6 h-6 text-amber-600" />;
      default: return <CreditCard className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Passo a Passo Simples
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 leading-tight">
            Veja como você recebe o material
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-2xl font-black text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
