
import React, { useState } from 'react';
import { View } from '../types';
import { ChevronDown, Phone } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View, section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const servicesLinks = [
    { label: 'Interpretation', hash: 'interpreting' },
    { label: 'Translation', hash: 'translation' },
    { label: 'Legal & Judicial', hash: 'legal' },
    { label: 'Medical & Healthcare', hash: 'medical' },
    { label: 'Immigration & Asylum', hash: 'immigration' },
    { label: 'Educational & Social', hash: 'educational' },
  ];

  const handleNav = (view: View, section?: string) => {
    onNavigate(view, section);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white h-20 flex items-center px-6 md:px-12 justify-between border-b border-slate-100">
      <button onClick={() => handleNav(View.HOME)} className="flex flex-col items-start text-left">
        <span className="text-2xl font-black tracking-tighter text-[#002147] logo-text leading-none">AMAN TRANSLATIONS</span>
        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">Professional Translation & Interpretation</span>
      </button>

      <div className="hidden lg:flex items-center gap-10">
        <button 
          onClick={() => handleNav(View.HOME)} 
          className={`text-[11px] font-bold uppercase tracking-[0.15em] nav-link ${currentView === View.HOME ? 'text-[#00A3E0]' : 'text-slate-600'}`}
        >
          Home
        </button>
        <button 
          onClick={() => handleNav(View.ABOUT)} 
          className={`text-[11px] font-bold uppercase tracking-[0.15em] nav-link ${currentView === View.ABOUT ? 'text-[#00A3E0]' : 'text-slate-600'}`}
        >
          About
        </button>
        
        {/* Services Dropdown */}
        <div className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          <button 
            onClick={() => handleNav(View.SERVICES)} 
            className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] nav-link ${currentView === View.SERVICES ? 'text-[#00A3E0]' : 'text-slate-600'}`}
          >
            Services <ChevronDown className="w-3 h-3" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl py-2 flex flex-col z-50">
              {servicesLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(View.SERVICES, link.hash)}
                  className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-[#002147] text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button 
          onClick={() => handleNav(View.CLIENTS)} 
          className={`text-[11px] font-bold uppercase tracking-[0.15em] nav-link ${currentView === View.CLIENTS ? 'text-[#00A3E0]' : 'text-slate-600'}`}
        >
          Clients & Institutions
        </button>
        <button 
          onClick={() => handleNav(View.CONTACT)} 
          className={`text-[11px] font-bold uppercase tracking-[0.15em] nav-link ${currentView === View.CONTACT ? 'text-[#00A3E0]' : 'text-slate-600'}`}
        >
          Contact
        </button>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/491785260768"
          className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest nav-link"
        >
          <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center">
            <Phone className="w-3 h-3 text-emerald-500" />
          </div>
          WhatsApp Call
        </a>
        <button 
          onClick={() => handleNav(View.CONTACT)}
          className="btn-primary"
        >
          Request a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
