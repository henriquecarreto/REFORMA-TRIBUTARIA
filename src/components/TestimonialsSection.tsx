import React from 'react';
import { testimonialsData } from '../data/landingData';
import { Star, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF5F5] border-b border-rose-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#0B1F3A] font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-[#F5B700] inline-block mb-4 shadow-xs">
            AVALIAÇÕES & EXPERIÊNCIAS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
            Veja a experiência de quem já utiliza o material
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-normal leading-relaxed">
            Depoimentos reais de profissionais e estudantes que transformaram o aprendizado da Reforma Tributária.
          </p>
        </div>

        {/* Grid de Depoimentos Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-rose-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between h-full group"
            >
              <div>
                {/* Estrelas + Badge de Verificado + Ícone de Aspas */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-50">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5B700] text-[#F5B700]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#00A878] text-[11px] font-bold">
                    <CheckCircle2 className="w-3 h-3 text-[#00A878]" />
                    <span>Aluno Verificado</span>
                  </div>
                </div>

                {/* Depoimento Humano */}
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed italic mb-6 font-medium">
                  "{item.text}"
                </p>
              </div>

              {/* Autor com Foto e Cargo */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-extrabold text-[#0B1F3A] leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold mt-0.5 block">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
