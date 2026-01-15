
import React, { useState } from 'react';
import { View } from '../types';
import { CheckCircle, Phone, Globe, ArrowRight, Award, MapPin, Briefcase, CheckCircle2, Loader2 } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View, section?: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: string) => {
    setEmail(value);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !re.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // Logic for UI feedback, form submission is handled via iframe target
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <iframe name="hidden_iframe_home" id="hidden_iframe_home" style={{ display: 'none' }}></iframe>
      
      {/* Announcement Bar */}
      <div className="bg-[#002147] text-white text-[10px] font-bold uppercase tracking-[0.3em] py-4 text-center border-b border-white/10 nav-link">
        Trusted by Courts, Institutions & 40+ Language Service Providers Worldwide
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Global Connectivity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight">
              Professional Tigrinya, Amharic & English Solutions
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed font-normal max-w-xl">
              Legal, medical, and institutional interpretation and translation — trusted by world-class organizations and judicial systems.
            </p>
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-10 flex items-center gap-3 nav-link">
              <Globe className="w-4 h-4" />
              Tigrinya · Amharic · English (C2)
            </div>
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => onNavigate(View.CONTACT)} className="btn-primary bg-[#00A3E0] hover:bg-[#0082b3]">
                Request a Quote
              </button>
              <a href="https://wa.me/4915560029057" className="btn-whatsapp bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Phone className="w-4 h-4 text-emerald-400" /> WhatsApp Call
              </a>
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3 nav-link">
              <div className="w-12 h-[1px] bg-white/20"></div>
              Over 10 years of professional institutional experience.
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-[#002147] mb-4 uppercase tracking-tight">Message Delivered</h3>
                  <p className="text-slate-600 text-sm font-medium">Thank you. Your request has been sent to Aman directly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#00A3E0]">Send another enquiry</button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-black text-[#002147] mb-8 uppercase tracking-tight">Have a question? Get your quote in 45 mins</h3>
                  <form 
                    action="https://formsubmit.co/efratisriv@gmail.com" 
                    method="POST" 
                    target="hidden_iframe_home"
                    onSubmit={handleHeroSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      required 
                      className="w-full bg-white/80 border border-slate-200 p-4 rounded text-sm text-[#002147] placeholder:text-slate-400 focus:border-[#00A3E0] outline-none shadow-sm" 
                    />
                    <div className="space-y-1">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => validateEmail(e.target.value)}
                        required 
                        className={`w-full bg-white/80 border ${emailError ? 'border-red-500' : 'border-slate-200'} p-4 rounded text-sm text-[#002147] placeholder:text-slate-400 focus:border-[#00A3E0] outline-none shadow-sm`} 
                      />
                      {emailError && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{emailError}</p>}
                    </div>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone (Optional)" 
                      className="w-full bg-white/80 border border-slate-200 p-4 rounded text-sm text-[#002147] placeholder:text-slate-400 focus:border-[#00A3E0] outline-none shadow-sm" 
                    />
                    <textarea 
                      name="message" 
                      placeholder="Message" 
                      rows={3} 
                      required 
                      className="w-full bg-white/80 border border-slate-200 p-4 rounded text-sm text-[#002147] placeholder:text-slate-400 focus:border-[#00A3E0] outline-none resize-none shadow-sm" 
                    />
                    <button 
                      type="submit" 
                      disabled={!!emailError || isSubmitting}
                      className="w-full btn-primary bg-[#002147] hover:bg-slate-800 justify-center py-4 text-center disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                      {isSubmitting ? 'Sending...' : 'Send Request'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Column 1: Photo */}
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden border-8 border-slate-50 shadow-2xl shadow-slate-200/60">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale opacity-95"
                alt="Aman Baryahannes"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 bg-[#002147] text-white rounded-xl shadow-2xl hidden md:block border border-white/10">
              <div className="text-3xl font-black tracking-tighter">11+ YEARS</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#00A3E0] nav-link">Of Professional Service</div>
            </div>
          </div>

          {/* Column 2: Detailed Professional Profile */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-4 nav-link">Profile Summary</h2>
              <h3 className="text-4xl font-black text-[#002147] mb-8 leading-tight tracking-tight">Aman Baryahannes</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
                I am a professional interpreter and translator specialising in Tigrinya and Amharic. My career is defined by a deep commitment to linguistic precision in high-stakes environments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Education Block */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 nav-link mb-3">Academic Foundation</h4>
                  <ul className="space-y-2 text-sm font-medium text-slate-600">
                    <li className="font-bold text-[#002147]">PhD Candidate — University of Hildesheim, Germany</li>
                    <li>MSc in Data Analytics / NLP — Germany</li>
                    <li>BA in Linguistics — Eritrea</li>
                  </ul>
                </div>
              </div>

              {/* Experience Block */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 nav-link mb-3">Work Experience</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Over 11 years of professional experience across court, medical, and international investment arbitration proceedings. Specialist in consecutive interpreting and technical document translation for judicial and clinical institutions.
                  </p>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 nav-link mb-3">Location & Availability</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Based in <span className="font-bold text-[#002147]">31134 Hildesheim, Germany</span>. 
                    Available for on-site assignments across the EU/EEA and remote services worldwide (VRI/OPI).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button onClick={() => onNavigate(View.ABOUT)} className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#00A3E0] hover:text-[#002147] nav-link group">
                Full Professional Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Language Capabilities (Core Competencies) */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-4 nav-link">Core Capabilities</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-[#002147] max-w-3xl mx-auto tracking-tight">
              Professional interpretation and translation for institutional and private requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-[#002147] mb-8 uppercase tracking-tight">Interpretation</h3>
              <ul className="grid grid-cols-1 gap-y-4">
                {[
                  'Video Remote Interpretation (VRI) & OPI',
                  'Consecutive Interpretation (On-site/Remote)',
                  'Court & Tribunal Proceedings',
                  'Police & Law Enforcement Interviews',
                  'Attorney-Client Consultations',
                  'Expert Witness Testimony Support',
                  'Medical Consultations & Clinical Diagnostics',
                  'Mental Health & Psychiatric Assessments',
                  'Asylum & International Protection Interviews',
                  'Social Services & Child Support Meetings',
                  'Probation, Parole & Rehabilitation Sessions',
                  'Educational (IEP) & Parent-Teacher Meetings',
                  'Insurance Investigation & Claim Assessments',
                  'Sight Translation of On-site Legal Documentation'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-10 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-[#002147] mb-8 uppercase tracking-tight">Translation</h3>
              <ul className="grid grid-cols-1 gap-y-4">
                {[
                  'Legal, Judicial & Forensic Documents',
                  'Contracts & Commercial Agreements',
                  'Affidavits & Sworn Witness Statements',
                  'Immigration & Asylum Determination Files',
                  'Medical Reports & Psychological Evals',
                  'Hospital Discharge & Clinical Summaries',
                  'Certificates, IDs & Civil Status Records',
                  'Academic Transcripts, Diplomas & CVs',
                  'Governmental Policy & Public Notices',
                  'Technical Manuals & Safety Data Sheets',
                  'Business Reports & Corporate Materials'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#00A3E0] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => onNavigate(View.SERVICES, 'interpreting')}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#00A3E0] hover:text-[#002147] nav-link group transition-colors"
            >
              View Interpretation & Translation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Trusted Partners Strip */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <h3 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12 nav-link">Trusted By & Associated With:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://p1.proz.com/images/cpn_seal_member.png" alt="ProZ CPN" className="h-10 object-contain mx-auto" />
              <img src="https://www.iapti.org/wp-content/uploads/2021/05/logo-iapti-header.png" alt="IAPTI" className="h-8 object-contain mx-auto" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lionbridge_logo_2019.svg/512px-Lionbridge_logo_2019.svg.png" alt="Lionbridge" className="h-5 object-contain mx-auto" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/DEU_Hildesheim_COA.svg/512px-DEU_Hildesheim_COA.svg.png" alt="City of Hildesheim" className="h-8 object-contain mx-auto" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emblem_of_Eritrea_%28color%29.svg/512px-Emblem_of_Eritrea_%28color%29.svg.png" alt="AECI" className="h-8 object-contain mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Rare & Under-Resourced Expertise */}
      <section className="py-24 px-6 md:px-12 bg-[#002147] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-tight">Rare & Under-Resourced Languages Expertise</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 font-light">
            As a specialist in <strong>Tigrinya and Amharic</strong>, I understand the serious consequences of poor-quality interpretation and translation. 
          </p>
          <p className="text-lg text-white/60 leading-relaxed font-light">
            Inaccurate translation can lead to miscarriages of justice, oppression of service users, and financial waste. This awareness shapes every assignment I accept. Accuracy, neutrality and responsibility are not optional — they are fundamental.
          </p>
        </div>
      </section>

      {/* Why Clients Choose Me (Redesigned Grid) */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-4 nav-link">The Aman Advantage</h2>
            <h3 className="text-3xl font-black text-[#002147] uppercase tracking-tight">Why Clients Choose Me</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              'Over 10 years of real-world professional experience',
              'Specialist expertise in high-risk language contexts',
              'Proven reliability with courts, institutions and agencies',
              'Strong ethical awareness and responsibility',
              'Clear, calm and professional communication'
            ].map(item => (
              <div key={item} className="p-8 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] mb-6"></div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-widest leading-loose">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 text-center border-y border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#002147] mb-6 uppercase tracking-tight">Need a Professional Interpreter or Translator?</h2>
          <p className="text-lg text-slate-600 mb-10 font-normal">
            If you are looking for reliable, high-quality interpretation in Tigrinya, Amharic or English, please get in touch to discuss availability, pricing and turnaround.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate(View.CONTACT)} className="btn-primary">Request a Quote</button>
            <a href="https://wa.me/4915560029057" className="btn-whatsapp">WhatsApp Call</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
