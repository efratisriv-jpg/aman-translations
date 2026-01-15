
import React from 'react';
import { View } from '../types';
import { Mail, Phone, MapPin, ExternalLink, FileText } from 'lucide-react';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-white/70 py-24 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Column 1: Brand & Scope */}
        <div>
          <h4 className="text-white font-black tracking-tighter text-2xl mb-6 logo-text">Aman Translations</h4>
          <p className="text-[11px] font-medium leading-relaxed uppercase tracking-widest mb-8 nav-link">
            Professional translation and interpreting services in <strong>Tigrinya, Amharic, and English (C2)</strong>, supporting institutions, language service providers, and private clients in legal, medical, immigration, and public service settings.
          </p>
          <div className="space-y-2">
            <div className="text-[8px] font-black uppercase text-[#00A3E0] tracking-[0.4em] mb-2 nav-link">Location & Availability:</div>
            <p className="text-[10px] font-bold uppercase tracking-widest nav-link leading-relaxed">31134 Hildesheim · On-site across EU/EEA & Switzerland · VRI & OPI Remote worldwide</p>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-10 nav-link">Navigation</h4>
          <ul className="space-y-4">
            {[
              { label: 'Home', view: View.HOME },
              { label: 'About', view: View.ABOUT },
              { label: 'Services', view: View.SERVICES },
              { label: 'Clients & Institutions', view: View.CLIENTS },
              { label: 'Contact', view: View.CONTACT },
            ].map(item => (
              <li key={item.label}>
                <button 
                  onClick={() => setView(item.view)}
                  className="text-[10px] uppercase font-bold tracking-[0.2em] hover:text-white nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Professional Profiles */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-10 nav-link">Professional Profiles</h4>
          <ul className="space-y-4">
            <li>
              <a href="https://www.proz.com/profile/3696797" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2 hover:text-white nav-link">
                ProZ.com <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://www.iapti.org/member/aman-desbele-baryahannes/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2 hover:text-white nav-link">
                IAPTI Profile <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://www.proz.com/profile_resources/3696797_r68a6e7c1eb024.pdf" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2 hover:text-white nav-link">
                Download CV (PDF) <FileText className="w-3 h-3" />
              </a>
            </li>
          </ul>
          <p className="mt-8 text-[9px] font-medium text-white/30 italic tracking-wider">
            Client reviews and professional credentials available on external platforms.
          </p>
        </div>

        {/* Column 4: Contact & Location */}
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-10 nav-link">Contact & Location</h4>
          <div className="space-y-5 text-[10px] font-bold uppercase tracking-widest nav-link">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#00A3E0] shrink-0 mt-1" />
              <span>
                Lucienvörder Str. 9, 31134 Hildesheim, Niedersachsen, Germany
              </span>
            </div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-500" /> WhatsApp: +49 155 60029057</div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#00A3E0]" /> contact@amantranslations.com</div>
          </div>
          <div className="pt-8 border-t border-white/5">
            <div className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em] mb-3 nav-link">Availability:</div>
            <p className="text-[10px] font-bold uppercase tracking-widest nav-link">Monday–Saturday · 08:00–18:00 (CET)</p>
          </div>
        </div>
      </div>

      {/* Trust Line */}
      <div className="max-w-7xl mx-auto py-10 border-t border-white/5 text-center text-[9px] font-black uppercase tracking-[0.6em] text-white/10 nav-link">
        Trusted by courts, institutions, and over 40 language service providers worldwide.
      </div>

      {/* Legal & Copyright Line */}
      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 nav-link">
        <p>© 2026 Aman Translations. All rights reserved.</p>
        <div className="flex gap-12">
          <button className="hover:text-white">Privacy Policy</button>
          <button className="hover:text-white">Imprint / Legal Notice</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
