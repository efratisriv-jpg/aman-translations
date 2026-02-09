import React, { useState } from 'react';
import { View } from '../types';
import { CheckCircle, Phone, Globe, ArrowRight, Award, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

const PROFILE_IMAGE = "https://lh3.googleusercontent.com/d/1XOpSX2Q8hoSI_jIqRunng17nvIlzRIpJ";

const LogoItem: React.FC<{ src: string; label: string }> = ({ src, label }) => {
  const [error, setError] = useState(false);
  
  // Format the label to show abbreviation more prominently if it exists
  const parts = label.split(' - ');
  const mainText = parts[0];
  const subText = parts[1];

  return (
    <div className="flex flex-col items-center justify-center group px-4 py-2">
      {!error ? (
        <img 
          src={src} 
          alt={label} 
          onError={() => setError(true)}
          className="h-7 md:h-10 w-auto object-contain transition-all duration-500 filter grayscale hover:grayscale-0"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      ) : (
        <div className="flex flex-col items-center text-center max-w-[180px]">
          <span className="text-[11px] md:text-[12px] font-black text-[#002147] tracking-[0.2em] uppercase border-b-2 border-[#00A3E0] pb-0.5 mb-1 leading-none">
            {mainText}
          </span>
          {subText && (
            <span className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
              {subText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Define the missing HomeViewProps interface
interface HomeViewProps {
  onNavigate: (view: View, section?: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const interpretationGroups = [
    {
      category: "I am available for",
      items: [
        "Consecutive Interpretation (On-site/Remote)",
        "Video Remote Interpretation (VRI) & OPI",
        "Available for In-person jobs for EU/EAA and Switzerland"
      ]
    },
    {
      category: "Legal & Judicial",
      items: [
        "Court & Tribunal Proceedings",
        "Police & Law Enforcement Interviews",
        "Attorney-Client Consultations",
        "Expert Witness Testimony Support",
        "Sight Translation of On-site Legal Documentation"
      ]
    },
    {
      category: "Medical & Clinical",
      items: [
        "Medical Consultations & Clinical Diagnostics",
        "Mental Health & Psychiatric Assessments",
        "Physical Therapy & Occupational Therapy Sessions",
        "Radiology, Oncology & Surgical Briefings",
        "Acute Care & Emergency Medical Support",
        "Pharmacology & Clinical Research Consultations",
        "Patient History & Informed Consent Briefings",
        "Clinical Trials & Protocol Briefings",
        "Rehabilitation & Geriatric Care Support",
        "Prenatal, Obstetric & Pediatric Consultations"
      ]
    },
    {
      category: "Governmental & Social",
      items: [
        "Asylum & International Protection Interviews",
        "Social Services & Child Support Meetings",
        "Probation, Parole & Rehabilitation Sessions",
        "Educational (IEP) & Parent-Teacher Meetings",
        "Insurance Investigation & Claim Assessments"
      ]
    }
  ];

  const translationGroups = [
    {
      category: "Legal & Official",
      items: [
        "Legal, Judicial & Forensic Documents",
        "Contracts & Commercial Agreements",
        "Affidavits & Witness Statements",
        "Court Orders & Judicial Summons",
        "Intellectual Property & Patent Filings"
      ]
    },
    {
      category: "Civil & Personal",
      items: [
        "Certificates, IDs & Civil Status Records",
        "Academic Transcripts, Diplomas & CVs",
        "Birth, Marriage & Death Certificates",
        "Police Clearance & Good Conduct Certificates",
        "Adoption & Custody Documentation"
      ]
    },
    {
      category: "Specialized Institutional",
      items: [
        "Immigration & Asylum Determination Files",
        "Medical Reports & Psychological Evals",
        "Hospital Discharge & Clinical Summaries",
        "Refugee Status Determination (RSD) Files",
        "Public Health Policy & Awareness Materials",
        "Social Security & Pension Claim Records"
      ]
    },
    {
      category: "Business & Technical",
      items: [
        "Technical Manuals & Safety Data Sheets",
        "Business Reports & Corporate Materials",
        "Governmental Policy & Public Notices",
        "Audit Reports & Financial Statements",
        "User Interface (UI) & Software Localization",
        "Employee Handbooks & HR Policies"
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
              Professional Tigrinya, Amharic & English Interpreter and Translator
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed font-normal max-w-xl">
              Legal, medical, court, immigration and community interpreting and translation services — trusted by courts, institutions and over 40+ language service providers worldwide.
            </p>
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-10 flex items-center gap-3 nav-link">
              <Globe className="w-4 h-4" />
              Tigrinya (native) · Amharic (native) · English (C2)
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <button onClick={() => onNavigate(View.CONTACT)} className="btn-primary bg-[#00A3E0] hover:bg-[#0082b3]">
                Request a Quote
              </button>
              <a href="https://wa.me/4915560029057" className="btn-whatsapp bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Phone className="w-4 h-4 text-emerald-400" /> WhatsApp Call
              </a>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 nav-link opacity-90 max-w-md leading-relaxed">
              — 11 years of professional experience in court, medical, government and international settings.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-[#e9ecef] p-10 md:p-12 rounded-[32px] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-[#002147] mb-4 uppercase tracking-tight">Message Delivered</h3>
                  <p className="text-slate-600 text-sm font-medium">Thank you. Your request has been sent to Aman directly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#00A3E0]">Send another enquiry</button>
                </div>
              ) : (
                <>
                  <h3 className="text-[26px] font-black text-[#002147] mb-10 uppercase tracking-tight leading-[1.15]">
                    Have a question? Get your quote in 45 mins
                  </h3>
                  <form 
                    action="https://formsubmit.co/contact@amantranslations.com" 
                    method="POST" 
                    target="hidden_iframe_home"
                    onSubmit={handleHeroSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      required 
                      className="w-full bg-white border-none p-5 rounded-lg text-sm text-[#002147] placeholder:text-slate-400 outline-none shadow-sm shadow-black/5" 
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required 
                      className="w-full bg-white border-none p-5 rounded-lg text-sm text-[#002147] placeholder:text-slate-400 outline-none shadow-sm shadow-black/5" 
                    />
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone (Optional)" 
                      className="w-full bg-white border-none p-5 rounded-lg text-sm text-[#002147] placeholder:text-slate-400 outline-none shadow-sm shadow-black/5" 
                    />
                    <textarea 
                      name="message" 
                      placeholder="Message" 
                      rows={4} 
                      required 
                      className="w-full bg-white border-none p-5 rounded-lg text-sm text-[#002147] placeholder:text-slate-400 outline-none shadow-sm shadow-black/5 resize-none" 
                    />
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full bg-[#002147] text-white font-bold text-xs uppercase tracking-[0.15em] py-5 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center shadow-lg"
                      >
                        {isSubmitting ? 'Processing...' : 'Send Request'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Summary Section / About Me */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden border-[12px] border-slate-50 shadow-2xl">
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
            <div className="absolute -bottom-6 -right-6 p-8 bg-[#002147] text-white rounded-xl shadow-2xl hidden md:block border border-white/10">
              <div className="text-3xl font-black tracking-tighter">11+ YEARS</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#00A3E0] nav-link">Of Professional Service</div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-4 nav-link">About me</h2>
              <h3 className="text-4xl font-black text-[#002147] mb-8 leading-tight tracking-tight">Aman Baryahannes</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
                I am a professional interpreter and translator specializing in <span className="font-bold text-[#002147]">English</span>, <span className="font-bold text-[#002147]">Tigrinya</span>, and <span className="font-bold text-[#002147]">Amharic</span>. I am a native speaker of both <span className="font-bold text-[#002147]">Tigrinya</span> and <span className="font-bold text-[#002147]">Amharic</span>, providing specialized linguistic services in my core areas: legal, medical, and institutional sectors. My career is defined by a deep commitment to linguistic precision in high-stakes environments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 nav-link mb-3">ACADEMIC FOUNDATION</h4>
                  <ul className="space-y-2 text-sm font-medium text-slate-600">
                    <li className="font-bold text-[#002147]">PhD Candidate — University of Hildesheim, Germany</li>
                    <li>MSc in Natural Language Processing — Germany</li>
                    <li>BA in Linguistics — Eritrea</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 nav-link mb-3">WORK EXPERIENCE</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Over 11 years of professional experience facilitating communication across court, medical, and international investment arbitration proceedings. Specialising in consecutive interpreting for high-stakes judicial hearings and the meticulous translation of complex technical documentation, clinical reports, and legal filings for government and private institutions worldwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 nav-link mb-3">LOCATION & AVAILABILITY</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Based in <span className="font-bold text-[#002147]">31134 Hildesheim, Germany</span>. Available for on-site assignments across the EU/EEA and remote services worldwide (VRI/OPI).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button onClick={() => onNavigate(View.ABOUT)} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#00A3E0] hover:text-[#002147] nav-link group">
                FULL PROFESSIONAL PROFILE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-6 nav-link">CORE CAPABILITIES</h2>
          <h3 className="text-3xl md:text-[42px] font-black text-[#002147] leading-[1.15] tracking-tight max-w-4xl mx-auto">
            Professional interpretation and translation for institutional and private requirements.
          </h3>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Interpretation Card */}
          <div className="bg-[#f8fafc] p-10 md:p-14 rounded-[32px] border border-slate-100/50">
            <h4 className="text-xl font-black text-[#002147] mb-10 uppercase tracking-tight border-b border-slate-200 pb-4">INTERPRETATION</h4>
            <div className="space-y-10">
              {interpretationGroups.map((group, groupIdx) => (
                <div key={groupIdx}>
                  <h5 className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.25em] mb-4">{group.category}</h5>
                  <ul className="space-y-4">
                    {group.items.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[13.5px] font-medium text-slate-600 leading-tight">
                        <CheckCircle className="w-[18px] h-[18px] text-[#10b981] shrink-0 mt-0.5" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Translation Card */}
          <div className="bg-[#f8fafc] p-10 md:p-14 rounded-[32px] border border-slate-100/50">
            <h4 className="text-xl font-black text-[#002147] mb-10 uppercase tracking-tight border-b border-slate-200 pb-4">TRANSLATION</h4>
            <div className="space-y-10">
              {translationGroups.map((group, groupIdx) => (
                <div key={groupIdx}>
                  <h5 className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.25em] mb-4">{group.category}</h5>
                  <ul className="space-y-4">
                    {group.items.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[13.5px] font-medium text-slate-600 leading-tight">
                        <CheckCircle className="w-[18px] h-[18px] text-[#00A3E0] shrink-0 mt-0.5" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate(View.SERVICES)} 
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#00A3E0] hover:text-[#002147] nav-link"
          >
            VIEW LIST OF INTERPRETATION & TRANSLATION <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Trusted By & Associated With Section */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 text-center mb-16 nav-link">
            TRUSTED BY & ASSOCIATED WITH:
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-12 opacity-70 transition-all duration-700">
            <LogoItem src="https://lh3.googleusercontent.com/d/1A-vN3J_6wR9T7H9F_wN0O-69V0_9_6l0" label="AECI - Association of Eritrean Court Interpreters" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1ECC-Logo-Placeholder" label="ECC - Eritrean Chamber of Commerce" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1XW9z7Yh0A6L1N-e8U-vJ4_9V8R9XW-k0" label="Proz CPN" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1IAPTI-Logo-Placeholder" label="IAPTI - International Association of Professional Translators and Interpreters" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1S-vN3J_6wR9T7H9F_wN0O-69V0_9_6k9" label="City of Hildesheim" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1Neuchatel-Logo-Placeholder" label="Canton of Neuchâtel" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1EthEmb-Logo-Placeholder" label="Ethiopian Embassy, Asmara" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1ATA-Logo-Placeholder" label="ATA - American Translators Association" />
            <LogoItem src="https://lh3.googleusercontent.com/d/1Edinburgh-Logo-Placeholder" label="The University of Edinburgh" />
          </div>
        </div>
      </section>

      {/* Rare Expertise Section with Atmospheric Background */}
      <section className="relative py-40 px-6 md:px-12 bg-[#002147] text-white text-center overflow-hidden">
        {/* Professional Background Image with Heavy Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Professional Environment"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/95 via-[#002147]/85 to-[#002147]/95"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-[34px] font-black tracking-tight mb-12 leading-tight">
            Rare & Under-resourced Languages Expertise
          </h2>
          <div className="space-y-10 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed">
              As a translator for a rare language, I understand the extensive ramifications of poor-quality interpretation and translation services, which can lead to miscarriages of justice, oppression of service users, financial waste, cultural misunderstandings, and even risks to life itself.
            </p>
            <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed">
              With me, quality is paramount. While I may not be the cheapest option, I guarantee a service that's worth every penny—a value-packed experience that you won't find elsewhere.
            </p>
          </div>
          
          <div className="mt-20 pt-12 border-t border-white/10 max-w-xs mx-auto text-center">
            <div className="text-sm font-black uppercase tracking-[0.25em] text-[#00A3E0] mb-3 nav-link">Aman Baryahannes</div>
            <div className="font-serif italic text-3xl text-white/30 tracking-widest select-none" style={{ fontFamily: 'Georgia, serif' }}>
              A. Baryahannes
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Me Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-4 nav-link">THE AMAN ADVANTAGE</h3>
          <h2 className="text-3xl md:text-[42px] font-black text-[#002147] uppercase tracking-tight">WHY CLIENTS CHOOSE ME</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            "OVER A DECADE OF REAL-WORLD PROFESSIONAL EXPERIENCE",
            "SPECIALIST EXPERTISE IN HIGH-RISK LANGUAGE CONTEXTS",
            "PROVEN RELIABILITY WITH COURTS, INSTITUTIONS AND AGENCIES",
            "STRONG ETHICAL AWARENESS AND RESPONSIBILITY",
            "CLEAR, CALM AND PROFESSIONAL COMMUNICATION"
          ].map((item, idx) => (
            <div key={idx} className="bg-[#f8fafc] p-10 md:p-12 rounded-lg flex flex-col items-center justify-start min-h-[280px] group hover:bg-white hover:shadow-2xl hover:shadow-[#002147]/10 transition-all duration-500 border border-slate-100">
              <div className="w-2.5 h-2.5 bg-[#00A3E0] rounded-full mb-10 shadow-lg shadow-[#00A3E0]/40"></div>
              <p className="text-[13px] md:text-[14px] font-black text-[#002147] uppercase tracking-[0.1em] leading-[1.6] text-center">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Refined based on reference image */}
      <section className="py-32 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-[32px] font-black mb-8 text-[#002147] uppercase tracking-tight">
            NEED A PROFESSIONAL INTERPRETER OR TRANSLATOR?
          </h2>
          <p className="text-base md:text-lg text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            If you are looking for reliable, high-quality interpretation in Tigrinya, Amharic or English, please get in touch to discuss availability, pricing and turnaround.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => onNavigate(View.CONTACT)} 
              className="px-10 py-4 bg-[#002147] text-white font-black uppercase text-[10px] tracking-[0.2em] rounded transition-all hover:bg-slate-800 shadow-lg shadow-[#002147]/20"
            >
              Request a Quote
            </button>
            <a 
              href="https://wa.me/4915560029057" 
              className="px-10 py-4 bg-white text-[#002147] border border-slate-200 font-black uppercase text-[10px] tracking-[0.2em] rounded transition-all hover:bg-slate-50"
            >
              WhatsApp Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;