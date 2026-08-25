import React from 'react';
import { Layers } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0B1F3A] text-white text-[12px] sm:text-xs md:text-sm font-bold uppercase tracking-wider py-2 px-4 text-center border-b border-amber-500/20 flex items-center justify-center gap-2">
      <Layers className="w-3.5 h-3.5 text-[#00A878] shrink-0" />
      <span className="text-slate-100">
        COLEÇÃO COMPLETA PARA ENTENDER A REFORMA TRIBUTÁRIA <span className="hidden sm:inline text-amber-300">• 16 MATERIAIS DIGITAIS</span>
      </span>
    </div>
  );
};
