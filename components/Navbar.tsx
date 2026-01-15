import React, { useState } from 'react';
import { View } from '../types';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View, section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', view: View.HOME },
    { label: 'About', view: View.ABOUT },
    { label: 'Clients & Institutions', view: View.CLIENTS },
    { label: 'Contact', view: View.CONTACT },
  ];

  return (
    <nav className="bg-white h-20 relative z-50 border-b border-slate-100">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center px-6 md:px-12 justify-between">
        {/* Logo Section */}
        <button onClick={() => handleNav(View.HOME)} className="flex flex-col items-start text-left shrink-0">
          <span className="text-xl md:text-2xl font-black tracking-tighter text-[#002147] logo-text leading-none">AMAN TRANSLATIONS</span>
          <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">Professional Translation & Interpretation</span>
        </button>

        {/* Desktop Navigation */}
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

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/4915560029057"
            className="hidden xl:flex items-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest nav-link"
          >
            <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center">
              <Phone className="w-3 h-3 text-emerald-500" />
            </div>
            WhatsApp Call
          </a>
          <button 
            onClick={() => handleNav(View.CONTACT)}
            className="hidden sm:flex btn-primary"
          >
            Request a Quote
          </button>
          
          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#002147] hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.view)}
                className={`w-full text-left py-4 px-4 text-[12px] font-bold uppercase tracking-widest rounded-lg transition-all ${
                  currentView === link.view ? 'bg-slate-50 text-[#00A3E0]' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Services Section */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Our Services</span>
              <div className="grid grid-cols-1 gap-1">
                {servicesLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNav(View.SERVICES, link.hash)}
                    className="w-full text-left py-3 px-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 rounded-lg"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Action buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button 
                onClick={() => handleNav(View.CONTACT)}
                className="w-full btn-primary justify-center py-4"
              >
                Request a Quote
              </button>
              <a 
                href="https://wa.me/4915560029057"
                className="w-full flex items-center justify-center gap-3 py-4 text-[11px] font-bold text-slate-600 uppercase tracking-widest border border-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-emerald-500" /> WhatsApp Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;