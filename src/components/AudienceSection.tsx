import React from 'react';
import { targetAudience } from '../data/landingData';
import { Briefcase, Building2, FileText, Store, Users } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const getAudienceIcon = (index: number) => {
    switch (index) {
      case 0: return <Briefcase className="w-6 h-6 text-[#0A8FF0]" />;
      case 1: return <Building2 className="w-6 h-6 text-[#00A878]" />;
      case 2: return <FileText className="w-6 h-6 text-[#D97706]" />;
      case 3: return <Store className="w-6 h-6 text-[#8B5CF6]" />;
      default: return <Users className="w-6 h-6 text-[#0A8FF0]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-amber-200/60" id="para-quem-e">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
            <Users className="w-4 h-4 text-amber-700" />
            <span>PÚBLICOS ATENDIDOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-3">
            Para Quem Esta Coleção Foi Desenvolvida?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Materiais práticos e didáticos criados para atender diferentes realidades no mercado e no setor público.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {targetAudience.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-200/80 hover:border-[#0A8FF0] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 shrink-0">
                    {getAudienceIcon(index)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] leading-snug">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="text-[#00A878] font-bold">✓ Foco Prático e Direto</span>
                <span>Acervo Digital</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AudienceSection;
