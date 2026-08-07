import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

const lifestylePhotos = [
  {
    id: 'estudo-01',
    src: '/lifestyle/estudo-01.jpg',
    alt: 'Pessoa estudando com os mapas visuais da Reforma Tributária na mesa'
  },
  {
    id: 'estudo-02',
    src: '/lifestyle/estudo-02.jpg',
    alt: 'Organização de estudo com cadernos e calculadoras junto ao material visual'
  },
  {
    id: 'estudo-03',
    src: '/lifestyle/estudo-03.jpg',
    alt: 'Visualização individual das fichas explicativas da Reforma Tributária'
  },
  {
    id: 'estudo-04',
    src: '/lifestyle/estudo-04.jpg',
    alt: 'Visão completa dos materiais impressos de apoio para rápida consulta'
  }
];

export const ShowcaseGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const infiniteLifestyle = [
    ...lifestylePhotos,
    ...lifestylePhotos,
    ...lifestylePhotos,
    ...lifestylePhotos
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#FAF6F0] border-b border-amber-200/60 overflow-hidden">
      {/* FULL VIEWPORT WIDTH CAROUSEL TRACK */}
      <div className="w-full overflow-hidden relative">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 px-2">
          {infiniteLifestyle.map((photo, idx) => (
            <div
              key={`${photo.id}-${idx}`}
              onClick={() => setSelectedImage(photo.src)}
              className="shrink-0 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] cursor-pointer group/item transition-transform duration-300 hover:scale-[1.015]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white border border-amber-200/80 shadow-lg group-hover/item:shadow-2xl transition-all">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-cover rounded-xl"
                  loading="lazy"
                />

                {/* Hover Enlargement Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-bold text-sm sm:text-base p-4 text-center">
                  <div className="p-3 rounded-full bg-amber-500 text-slate-950 shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span>Ampliar Imagem</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl p-2.5 shadow-2xl">
            <img src={selectedImage} alt="Foto de Estudo Ampliada" className="w-full h-auto max-h-[88vh] object-contain rounded-xl" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-900 text-white w-9 h-9 rounded-full font-bold flex items-center justify-center shadow-md cursor-pointer hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
