import React from 'react';
import { Zap } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0B1F3A] text-white text-[13px] sm:text-sm font-semibold tracking-wide py-2.5 px-4 text-center border-b border-slate-800 flex items-center justify-center gap-1.5">
      <Zap className="w-3.5 h-3.5 text-[#F5B700] fill-[#F5B700] shrink-0" />
      <span className="text-white font-bold tracking-wide">
        ENTENDA A REFORMA TRIBUTÁRIA <span className="text-[#FDE68A]">SEM COMPLICAÇÃO</span>
      </span>
    </div>
  );
};
