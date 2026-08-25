import React, { useState } from 'react';
import { carouselImages } from '../data/landingData';
import { Eye, X } from 'lucide-react';

export const MaterialCarousel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Quadruple items array for a 100% seamless infinite marquee loop with zero gaps
  const infiniteItems = [
    ...carouselImages,
    ...carouselImages,
    ...carouselImages,
    ...carouselImages
  ];

  return (
    <section className="py-10 sm:py-16 bg-[#FAF6F0] border-b border-amber-200/60 overflow-hidden">
      {/* SECTION HEADER & CONNECTED MAPS IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          <span>PRÉVIAS REAIS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-3">
          Veja exemplos reais do material que você recebe
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto mb-6">
          Exemplos visuais reais de páginas internas sobre IBS, CBS, Simples Nacional, Split Payment, Licitações e Municípios.
        </p>

        {/* IMAGE SHOWCASING CONNECTED MAPS */}
        <div className="w-full max-w-3xl mx-auto relative group">
          <div className="relative bg-[#FAF6F0] p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-amber-200/50 shadow-xl shadow-amber-950/5 transition-transform duration-300 hover:scale-[1.01]">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF6F0]">
              <img
                src="/hero/mapas-conectados.jpg"
                alt="Como cada peça da Reforma Tributária se conecta visualmente"
                className="w-full h-auto object-cover rounded-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FULL VIEWPORT WIDTH CAROUSEL TRACK (100% Width Showcase) */}
      <div className="w-full overflow-hidden relative">
        
        {/* Continuous Seamless Infinite Marquee */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 px-2">
          {infiniteItems.map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              onClick={() => setSelectedImage(img.src)}
              className="shrink-0 w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] cursor-pointer group/item transition-transform duration-300 hover:scale-[1.015]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#FAF6F0] border border-amber-200/60 shadow-md group-hover/item:shadow-xl transition-all">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto max-h-[640px] sm:max-h-[720px] object-contain rounded-xl"
                  loading="lazy"
                />

                {/* Hover Enlargement Indicator Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-bold text-sm sm:text-base p-4 text-center">
                  <div className="p-3 rounded-full bg-amber-500 text-slate-950 shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span>Ampliar Visualização</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for enlarged image */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl p-2.5 shadow-2xl">
            <img src={selectedImage} alt="Amostra Ampliada" className="w-full h-auto max-h-[88vh] object-contain rounded-xl" />
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
