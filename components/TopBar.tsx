
import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white/80 py-2 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest border-b border-white/5">
      <div className="mb-2 md:mb-0 flex items-center gap-4">
        <span>Trusted by Courts, Institutions & 40+ Language Service Providers Worldwide</span>
        <span className="hidden lg:inline text-white/30">|</span>
        <span className="flex items-center gap-2 text-[#00A3E0]">
          <Globe className="w-3 h-3" />
          Available for VRI & OPI Worldwide
        </span>
      </div>
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-[#00A3E0]" />
          Hildesheim, Germany · EU/EEA & Switzerland (On-site)
        </span>
        <a href="https://wa.me/4915560029057" className="flex items-center gap-2 hover:text-white">
          <Phone className="w-3 h-3 text-[#00A3E0]" />
          WhatsApp: +49 155 60029057
        </a>
        <a href="mailto:contact@amantranslations.com" className="flex items-center gap-2 hover:text-white">
          <Mail className="w-3 h-3 text-[#00A3E0]" />
          contact@amantranslations.com
        </a>
      </div>
    </div>
  );
};

export default TopBar;
