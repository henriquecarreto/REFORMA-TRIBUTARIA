import React from 'react';
import { trustItems } from '../data/landingData';
import { Zap, ShieldCheck, Smartphone, Download } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-600" />;
      case 'Download': return <Download className="w-5 h-5 text-indigo-600" />;
      default: return <Zap className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {trustItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-2">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0">
                {getIcon(item.icon)}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {item.title}
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
