import React, { useState } from 'react';
import { carouselImages } from '../data/landingData';
import { Eye, X } from 'lucide-react';

export const MaterialCarousel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Duplicado para o marquee contínuo e infinito sem falhas
  const infiniteItems = [
    ...carouselImages,
    ...carouselImages
  ];

  return (
    <section className="py-10 sm:py-16 bg-[#FAF6F0] border-b border-amber-200/60 overflow-hidden">
      {/* CABEÇALHO */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
          <span>PRÉVIAS REAIS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight mb-3">
          Veja exemplos reais do material que você recebe
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto mb-6">
          Exemplos visuais reais de páginas internas sobre IBS, CBS, Simples Nacional, Split Payment, Licitações e Municípios.
        </p>

        {/* IMAGEM DOS MAPAS CONECTADOS */}
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

      {/* CARROSSEL EM MOVIMENTO AUTOMÁTICO (MOBILE E DESKTOP) */}
      <div className="w-full overflow-hidden relative py-2">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 px-2">
          {infiniteItems.map((img, idx) => (
            <div
              key={`${img.id}-${idx}`}
              onClick={() => setSelectedImage(img.src)}
              className="shrink-0 w-[270px] min-[380px]:w-[300px] sm:w-[380px] md:w-[440px] lg:w-[500px] cursor-pointer group/item transition-transform duration-300 hover:scale-[1.015]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#FAF6F0] border border-amber-200/60 shadow-md group-hover/item:shadow-xl transition-all">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto max-h-[380px] sm:max-h-[520px] md:max-h-[640px] lg:max-h-[700px] object-contain rounded-xl"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm p-4 text-center">
                  <div className="p-2.5 sm:p-3 rounded-full bg-amber-500 text-slate-950 shadow-lg">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span>Toque / Clique para Ampliar</span>
                </div>
              </div>
              <div className="mt-2 text-center px-1">
                <span className="text-xs font-bold text-[#0B1F3A] block truncate">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DICA VISUAL SUBTIL PARA O USUÁRIO */}
      <div className="text-center mt-3 sm:mt-4">
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-500 bg-amber-100/50 px-3 py-1 rounded-full border border-amber-200/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Em movimento automático • Toque em qualquer imagem para ampliar
        </span>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl p-2 sm:p-2.5 shadow-2xl">
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

export default MaterialCarousel;
