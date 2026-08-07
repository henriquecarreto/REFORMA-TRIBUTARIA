import React from 'react';
import { differentials } from '../data/landingData';
import { FileSpreadsheet, PieChart, Layers, FolderCheck } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-7 h-7 text-blue-600" />;
      case 'PieChart': return <PieChart className="w-7 h-7 text-emerald-600" />;
      case 'Layers': return <Layers className="w-7 h-7 text-indigo-600" />;
      case 'FolderCheck': return <FolderCheck className="w-7 h-7 text-amber-600" />;
      default: return <Layers className="w-7 h-7 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80 inline-block mb-4">
            UMA FORMA MAIS SIMPLES DE ENTENDER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            VOCÊ NÃO PRECISA DECORAR A REFORMA. <br className="hidden sm:inline" />
            <span className="text-emerald-600 font-extrabold">PRECISA ENXERGAR COMO ELA FUNCIONA.</span>
          </h2>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {differentials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col items-start justify-between h-full"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-5 inline-block">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
