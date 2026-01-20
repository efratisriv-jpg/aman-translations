
import React from 'react';
import { View } from '../types';
import { Info, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

interface ImprintViewProps {
  setView: (view: View) => void;
}

const ImprintView: React.FC<ImprintViewProps> = ({ setView }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative py-24 px-6 md:px-12 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <button 
            onClick={() => setView(View.HOME)} 
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#00A3E0] mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="flex items-center gap-4 mb-6">
            <Info className="w-8 h-8 text-[#00A3E0]" />
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Imprint</h1>
          </div>
          <p className="text-lg text-slate-300 font-medium max-w-2xl">
            Legal notice and service provider information in accordance with German law.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-[#002147] font-black uppercase tracking-tight text-xl mb-6">Service Provider</h2>
              <p className="text-slate-600 leading-relaxed font-bold text-lg">
                Aman Baryahannes
              </p>
              <p className="text-slate-500 text-sm mt-2">Professional Interpreter & Translator</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[#002147] font-black uppercase tracking-tight text-xl mb-6">Contact Details</h2>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#00A3E0] shrink-0 mt-1" />
                <p className="text-slate-600 text-sm font-medium">
                  Lucienvörder Str. 9<br />
                  31134 Hildesheim, Germany
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <p className="text-slate-600 text-sm font-medium">+49 155 60029057</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#00A3E0] shrink-0" />
                <p className="text-slate-600 text-sm font-medium">contact@amantranslations.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-[#002147] font-black uppercase tracking-tight text-xl mb-6">Professional Designation</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Linguist, Specialist in Tigrinya and Amharic languages.
              </p>
              <p className="text-slate-500 text-xs italic">
                Professional activities are subject to the ethical codes of the respective associations (e.g., IAPTI).
              </p>
            </div>

            <div>
              <h2 className="text-[#002147] font-black uppercase tracking-tight text-xl mb-6">Liability for Content</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As a service provider, I am responsible for my own content on these pages according to general laws. However, I am not obliged to monitor transmitted or stored foreign information or to search for circumstances that indicate illegal activity.
              </p>
            </div>

            <div>
              <h2 className="text-[#002147] font-black uppercase tracking-tight text-xl mb-6">Dispute Resolution</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#00A3E0] underline">https://ec.europa.eu/consumers/odr</a>. I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImprintView;
