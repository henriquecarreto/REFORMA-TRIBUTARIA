import React, { useState, useRef } from 'react';
import { Eye, X, Sparkles } from 'lucide-react';

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
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const infiniteLifestyle = [
    ...lifestylePhotos,
    ...lifestylePhotos
  ];

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const itemWidth = container.clientWidth * 0.86;
    const index = Math.round(container.scrollLeft / itemWidth);
    if (index >= 0 && index < lifestylePhotos.length) {
      setActiveMobileIndex(index);
    }
  };

  const scrollToMobileIndex = (index: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const itemWidth = container.clientWidth * 0.86;
    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
    setActiveMobileIndex(index);
  };

  return (
    <section className="py-10 sm:py-16 bg-[#FAF6F0] border-b border-amber-200/60 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>ROTINA DE ESTUDOS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-3">
          Veja como os materiais podem fazer parte da sua rotina de estudos
        </h2>
        <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
          Uma forma prática de estudar, consultar e entender os principais pontos da Reforma Tributária.
        </p>
      </div>

      {/* 1. CARROSSEL MOBILE REAL (TOUCH DRAG SNAP, 1 IMAGEM POR VEZ, SEM HOVER) */}
      <div className="block md:hidden w-full relative px-2">
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3.5 px-3 pb-3 no-scrollbar"
        >
          {lifestylePhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo.src)}
              className="shrink-0 w-[86vw] snap-center cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white border border-amber-200/80 shadow-md">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto max-h-[360px] object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="p-3 bg-white border-t border-amber-100 flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                  <span className="truncate pr-2">{photo.alt}</span>
                  <span className="text-[#00A859] shrink-0 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Ampliar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INDICADORES VISUAIS DISCRETOS MOBILE */}
        <div className="flex justify-center items-center gap-1.5 mt-3">
          {lifestylePhotos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToMobileIndex(idx)}
              className={`h-2 rounded-full transition-all duration-200 ${
                idx === activeMobileIndex ? 'w-5 bg-[#00A859]' : 'w-2 bg-amber-300/80'
              }`}
              aria-label={`Ir para foto ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. TRILHO DO CARROSSEL DESKTOP (MARQUEE INFINITO) */}
      <div className="hidden md:block w-full overflow-hidden relative">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 px-2">
          {infiniteLifestyle.map((photo, idx) => (
            <div
              key={`${photo.id}-${idx}`}
              onClick={() => setSelectedImage(photo.src)}
              className="shrink-0 w-[360px] md:w-[440px] lg:w-[480px] cursor-pointer group/item transition-transform duration-300 hover:scale-[1.015]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white border border-amber-200/80 shadow-md group-hover/item:shadow-xl transition-all">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-cover rounded-xl"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-bold text-sm sm:text-base p-4 text-center">
                  <div className="p-3 rounded-full bg-[#00A859] text-white shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span>Ampliar Imagem</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DE AMPLIAÇÃO */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl p-2 shadow-2xl">
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

export default ShowcaseGallery;
