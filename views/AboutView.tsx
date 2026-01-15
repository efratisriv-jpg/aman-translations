
import React from 'react';
import { View } from '../types';
import { Award, ShieldCheck, Heart, User, MapPin, Briefcase, GraduationCap, ExternalLink, FileText } from 'lucide-react';

interface AboutViewProps {
  setView: (view: View) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ setView }) => {
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
            A professional interpreter and translator based in <span className="font-bold text-white">Lucienvorder Str. 9, 31134 Hildesheim, Germany</span>. Specialising in Tigrinya and Amharic, with English at C2 level.
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
                  My current doctoral research at the <span className="font-bold">University of Hildesheim</span> focuses on advanced linguistic frameworks, building upon a BA in Linguistics (Eritrea) and a Master’s degree in Data Analytics with a focus on Natural Language Processing (Germany).
                </p>
              </div>

              <p>
                With over <span className="font-bold text-[#002147]">11 years of professional experience</span>, I bridge the gap between high-level linguistic theory and the practical demands of sensitive, high-stakes interpretation. My career began with nine years of intensive in-house and freelance service in Eritrea before I transitioned to the European institutional landscape.
              </p>
              <p>
                I have operated at the highest institutional levels, including assignments for embassy services, local government authorities, and international investment arbitration proceedings. Notably, my work includes support for <span className="font-bold">Lionbridge-supported arbitration cases in The Hague</span>.
              </p>
              <p>
                Today, my practice is a trusted resource for courts, public institutions, healthcare providers, migration authorities, and more than 40 leading language service providers globally.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <a 
                  href="https://www.proz.com/profile/3696797" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#002147] text-white px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#00A3E0] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> View ProZ Profile
                </a>
                <a 
                  href="https://www.iapti.org/member/aman-desbele-baryahannes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00A3E0] text-white px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#002147] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> View IAPTI Profile
                </a>
                <a 
                  href="https://www.proz.com/profile_resources/3696797_r68a6e7c1eb024.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#002147] text-[#002147] px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors"
                >
                  <FileText className="w-4 h-4" /> Download PDF CV
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white p-10 rounded-xl shadow-2xl space-y-10">
               <div>
                  <h3 className="text-lg font-bold uppercase tracking-[0.15em] mb-6 text-[#00A3E0] nav-link">Operational Base</h3>
                  <div className="space-y-4 text-sm font-medium text-white/70">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#00A3E0] shrink-0" />
                      <span>
                        Lucienvorder Str. 9<br />
                        31134 Hildesheim, Lower Saxony, Germany
                      </span>
                    </div>
                  </div>
               </div>

               <div>
                  <h3 className="text-lg font-bold uppercase tracking-[0.15em] mb-6 text-[#00A3E0] nav-link">Service Scope</h3>
                  <div className="space-y-6 text-sm font-medium text-white/70">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0" />
                      Remote assignments worldwide (VRI & OPI)
                    </div>
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="w-5 h-5 text-[#00A3E0] shrink-0" />
                      On-site work across Germany, the EU/EEA, and Switzerland
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

      {/* Specialist & Commitment */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Specialist Expertise</h2>
            <p className="text-slate-600 font-normal leading-relaxed">
              Working with languages like Tigrinya and Amharic carries immense responsibility. Poor-quality interpretation can lead to miscarriages of justice, medical error, and social exclusion. My academic background ensures that I provide the nuanced, culturally competent service these high-risk contexts demand.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Ethical Accountability</h2>
            <p className="text-slate-600 font-normal leading-relaxed">
              Precision is not just a skill—it is an ethical commitment. I offer a professional, value-driven service built on neutrality and confidentiality. My work is guided by the fundamental principles of accuracy and respect for the service user's voice, ensuring that no message is lost or distorted.
            </p>
          </div>
        </div>
      </section>

      {/* Proudly Associated & Certified Grid */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-4 nav-link">Recognition & Network</h2>
            <h3 className="text-4xl font-black text-[#002147] tracking-tight">Proudly Associated & Certified</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { 
                name: 'ProZ.com (CPN)', 
                label: 'Certified PRO Network', 
                img: 'https://p1.proz.com/images/cpn_seal_member.png' 
              },
              { 
                name: 'IAPTI', 
                label: 'Global Member', 
                img: 'https://www.iapti.org/wp-content/uploads/2021/05/logo-iapti-header.png' 
              },
              { 
                name: 'Lionbridge', 
                label: 'Strategic Case Partner', 
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lionbridge_logo_2019.svg/512px-Lionbridge_logo_2019.svg.png'
              },
              { 
                name: 'City of Hildesheim', 
                label: 'Integration Office', 
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/DEU_Hildesheim_COA.svg/512px-DEU_Hildesheim_COA.svg.png' 
              },
              { 
                name: 'AECI', 
                label: 'Association of Eritrean Court Interpreters', 
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emblem_of_Eritrea_%28color%29.svg/512px-Emblem_of_Eritrea_%28color%29.svg.png' 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 group">
                <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-contain"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase tracking-widest text-[#002147] mb-1">{item.name}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 max-w-[150px] leading-tight mx-auto">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 pt-10 border-t border-slate-100 text-center">
            <p className="text-xs font-medium text-slate-400 max-w-2xl mx-auto italic">
              Verification of professional memberships, strategic partnerships, and certified credentials is available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-6 h-6 text-[#00A3E0]" />
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#002147] nav-link">Institutional Experience Grid</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Courts and tribunals', 'Law enforcement and probation', 'Public and private hospitals',
              'Mental health settings', 'Medical diagnostic centres', 'Migration and asylum procedures',
              'Interview and reception facilities', 'Educational institutions', 'Social services and child support',
              'Social security departments', 'Law firms and legal practices', 'Interpreter training roles'
            ].map(item => (
              <div key={item} className="p-5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-loose nav-link shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Local Integration & Volunteering</h2>
          <div className="inline-flex items-center gap-6 p-10 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-900 font-medium leading-relaxed shadow-sm">
            <Heart className="w-10 h-10 text-emerald-500 shrink-0" />
            <p className="text-left text-lg">
              I am committed to the <span className="font-bold">Hildesheim community</span>. Alongside my professional work, I actively volunteer with the <span className="font-bold">City of Hildesheim Integration Office</span>, supporting social inclusion and access to essential services for migrant and refugee communities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#002147] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Consult with a Professional</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
            Discuss your project requirements, institutional needs, or request a quote for Tigrinya, Amharic, or English language services.
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
