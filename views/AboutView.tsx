
import React from 'react';
import { View } from '../types';
import { Award, ShieldCheck, Heart, User, MapPin, Briefcase, GraduationCap, ExternalLink, FileText } from 'lucide-react';

interface AboutViewProps {
  setView: (view: View) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ setView }) => {
  // Using the same direct link for consistency: 1XOpSX2Q8hoSI_jIqRunng17nvIlzRIpJ
  const PROFILE_IMAGE = "https://lh3.googleusercontent.com/d/1XOpSX2Q8hoSI_jIqRunng17nvIlzRIpJ";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Global Connectivity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-[#00A3E0]" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] nav-link">Detailed Profile</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">Aman Baryahannes</h1>
          <p className="text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
            A professional interpreter and translator based in <span className="font-bold text-white">Hildesheim, Germany</span>. Specialising in Tigrinya and Amharic, with English at C2 level.
          </p>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Academic & Professional Journey</h2>
            <div className="prose prose-slate max-w-none space-y-8 text-lg text-slate-600 leading-relaxed font-normal">
              <div className="p-8 bg-slate-50 border-l-4 border-[#00A3E0] rounded-r-xl">
                <h3 className="text-xl font-bold text-[#002147] mb-4 tracking-tight flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-[#00A3E0]" />
                  PhD Candidate — University of Hildesheim
                </h3>
                <p className="text-base text-slate-600">
                  My current doctoral research at the <span className="font-bold">University of Hildesheim</span> focuses on advanced linguistic frameworks, building upon a BA in Linguistics (Eritrea) and a Master’s degree in Data Analytics (Germany).
                </p>
              </div>

              <p>
                With over <span className="font-bold text-[#002147]">11 years of professional experience</span>, I bridge the gap between high-level linguistic theory and the practical demands of sensitive, high-stakes interpretation.
              </p>
              <p>
                I have operated at the highest institutional levels, including assignments for embassy services, local government authorities, and international investment arbitration proceedings in The Hague.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <a href="https://www.proz.com/profile/3696797" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#002147] text-white px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#00A3E0]">
                  <ExternalLink className="w-4 h-4" /> View ProZ Profile
                </a>
                <a href="https://www.proz.com/profile_resources/3696797_r68a6e7c1eb024.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#002147] text-[#002147] px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-slate-50">
                  <FileText className="w-4 h-4" /> Download PDF CV
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white p-10 rounded-xl shadow-2xl space-y-10">
               <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={PROFILE_IMAGE} 
                    className="w-full h-auto block"
                    alt="Aman Baryahannes"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
               </div>
               <div>
                  <h3 className="text-lg font-bold uppercase tracking-[0.15em] mb-6 text-[#00A3E0] nav-link">Operational Base</h3>
                  <div className="space-y-4 text-sm font-medium text-white/70">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#00A3E0] shrink-0" />
                      <span>
                        Lucienvörder Str. 9<br />
                        31134 Hildesheim, Germany
                      </span>
                    </div>
                  </div>
               </div>

               <div className="pt-8 border-t border-white/10">
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00A3E0] mb-2">Professional Experience</div>
                 <div className="text-2xl font-black text-white tracking-tighter">11+ YEARS</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Network */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-6 h-6 text-[#00A3E0]" />
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#002147] nav-link">Institutional Experience Grid</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Courts and tribunals', 'Law enforcement and probation', 'Public and private hospitals', 'Mental health settings', 'Migration and asylum procedures', 'Educational institutions'].map(item => (
              <div key={item} className="p-5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-loose nav-link shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#002147] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Consult with a Professional</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
            Discuss your project requirements or request a quote for Tigrinya, Amharic, or English language services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setView(View.CONTACT)} className="btn-primary bg-white text-[#002147]">Request a Quote</button>
            <a href="https://wa.me/4915560029057" className="btn-whatsapp bg-transparent text-white border-white/20 hover:bg-white/5">WhatsApp Call</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
