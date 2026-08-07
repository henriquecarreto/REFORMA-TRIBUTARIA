import React from 'react';
import { targetAudience } from '../data/landingData';
import { Target, BookOpen, Layers, Eye, Compass, MessageSquare, Search } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const getAudienceIcon = (index: number) => {
    switch (index) {
      case 0: return <BookOpen className="w-5 h-5 text-[#0A8FF0]" />;
      case 1: return <Layers className="w-5 h-5 text-[#0A8FF0]" />;
      case 2: return <Eye className="w-5 h-5 text-[#00A878]" />;
      case 3: return <Compass className="w-5 h-5 text-[#F5B700]" />;
      case 4: return <MessageSquare className="w-5 h-5 text-[#00A878]" />;
      case 5: return <Search className="w-5 h-5 text-[#0A8FF0]" />;
      default: return <Target className="w-5 h-5 text-[#0A8FF0]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFF5F5] border-b border-rose-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#0B1F3A] font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-[#F5B700] inline-block mb-4 shadow-xs">
            DIREÇÃO & ORGANIZAÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
            COMO O MATERIAL ORGANIZA SEUS ESTUDOS
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {targetAudience.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 hover:border-[#0A8FF0]/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between h-full"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#F7F9FC] border border-slate-100 mb-5 inline-block">
                  {getAudienceIcon(index)}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed font-normal">
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
