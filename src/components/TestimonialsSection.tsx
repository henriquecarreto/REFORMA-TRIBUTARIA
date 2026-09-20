import React from 'react';
import { testimonialsData } from '../data/landingData';
import { Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#0B1F3A] font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-amber-300 inline-block mb-4 shadow-xs">
            EXEMPLOS DE USO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
            Como diferentes profissionais podem usar os guias
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-normal leading-relaxed">
            Situações ilustrativas de estudo e consulta com os materiais da Reforma Tributária.
          </p>
        </div>

        {/* Grid de Exemplos de Uso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-200/60 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between h-full group"
            >
              <div>
                {/* Badge de Exemplo Ilustrativo */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>Exemplo ilustrativo</span>
                  </div>
                </div>

                {/* Relato Ilustrativo */}
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  "{item.text}"
                </p>
              </div>

              {/* Autor com Foto Circular e Cargo */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 mt-auto">
                <img
                  src={item.avatar}
                  alt={`Retrato ilustrativo de ${item.name}, ${item.role}`}
                  className="w-14 h-14 rounded-full object-cover object-center border-2 border-slate-200 shadow-sm shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0B1F3A] leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-xs text-slate-600 font-semibold mt-0.5 block">
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
