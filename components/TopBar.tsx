import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white/80 py-3 md:py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[8.5px] sm:text-[9px] md:text-[10px] uppercase font-bold tracking-[0.15em] md:tracking-widest border-b border-white/5">
      {/* Primary Trust Message & Capacity */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-3 md:mb-0 text-center md:text-left">
        <span className="opacity-90 leading-tight">Trusted by Courts, Institutions & 40+ LSPs Worldwide</span>
        <span className="hidden lg:inline text-white/20">|</span>
        <span className="flex items-center gap-1.5 text-[#00A3E0] font-black">
          <Globe className="w-3 h-3 shrink-0" />
          VRI & OPI Remote Worldwide
        </span>
      </div>

      {/* Secondary Location & Contact Details */}
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 md:gap-6 border-t border-white/5 pt-3 md:pt-0 md:border-none w-full md:w-auto">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#00A3E0] shrink-0" />
          <span className="whitespace-nowrap">Hildesheim, Germany</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/4915560029057" 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Contact via WhatsApp"
          >
            <Phone className="w-3 h-3 text-[#00A3E0] shrink-0" />
            <span className="hidden sm:inline">WhatsApp: +49 155 60029057</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
          
          <a 
            href="mailto:contact@amantranslations.com" 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Contact via Email"
          >
            <Mail className="w-3 h-3 text-[#00A3E0] shrink-0" />
            <span className="hidden sm:inline">contact@amantranslations.com</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;