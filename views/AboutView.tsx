import React from 'react';
import { View } from '../types';
import { 
  Award, ShieldCheck, Heart, User, MapPin, Briefcase, GraduationCap, 
  ExternalLink, FileText, Clock, Shield, CheckSquare, Target, 
  ShieldAlert, MessageSquare, Laptop, Wifi, Cpu, Plane, Zap, Globe, Radio, Activity,
  Stethoscope, Gavel, BookOpen, CreditCard, ScrollText, Landmark
} from 'lucide-react';

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
                  My doctoral research at the <span className="font-bold">University of Hildesheim</span> investigates computational linguistics and cross-lingual information retrieval for low-resource Semitic languages. This work builds upon my BA in Linguistics from Eritrea and a <span className="font-bold">Master’s degree in Natural Language Processing</span> obtained in Germany.
                </p>
              </div>

              <p>
                With over <span className="font-bold text-[#002147]">11 years of professional experience</span>, I have occupied critical roles that demand linguistic mastery. This includes significant tenure with the <span className="font-bold">Ministry of Local Government</span>, where I facilitated administrative and legal communication, and serving as a lead translator/interpreter for the <span className="font-bold">Ethiopian Embassy in Asmara</span>, handling sensitive diplomatic documentation and high-level bilateral dialogues.
              </p>
              <p>
                I have consistently operated at high institutional levels, including specialized assignments for local government authorities, judicial bodies, and international investment arbitration proceedings in The Hague.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <a href="https://www.proz.com/profile/3696797" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#002147] text-white px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#00A3E0]">
                  <ExternalLink className="w-4 h-4" /> View ProZ Profile
                </a>
                <a href="https://www.atanet.org/member-directory/aman-desbele-baryahannes/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#002147] text-white px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#00A3E0]">
                  <ExternalLink className="w-4 h-4" /> View ATA Profile
                </a>
                <a href="https://www.iapti.org/member/aman-desbele-baryahannes/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#002147] text-white px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#00A3E0]">
                  <ExternalLink className="w-4 h-4" /> View IAPTI Profile
                </a>
                <a href="https://www.proz.com/profile_resources/3696797_r6989232e65ea7.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#002147] text-[#002147] px-6 py-3 rounded text-[10px] font-black uppercase tracking-widest hover:bg-slate-50">
                  <FileText className="w-4 h-4" /> Download PDF CV
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white p-10 rounded-xl shadow-2xl space-y-8">
               <div className="mb-6 rounded-lg overflow-hidden border border-white/10 h-64 md:h-80">
                  <img 
                    src={PROFILE_IMAGE} 
                    className="w-full h-full object-cover object-top"
                    alt="Aman Baryahannes"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
               </div>
               
               <div>
                  <h3 className="text-lg font-bold uppercase tracking-[0.15em] mb-4 text-[#00A3E0] nav-link">Office</h3>
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

               <div className="pt-6 border-t border-white/10">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#00A3E0] nav-link">Security & Confidentiality</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                      <Shield className="w-4 h-4 text-[#00A3E0]" />
                      <span>GDPR Compliant Processing</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Professional Liability Insurance</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                      <Clock className="w-4 h-4 text-[#00A3E0]" />
                      <span>Rapid Response Guarantee</span>
                    </div>
                 </div>
               </div>

               <div className="pt-6 border-t border-white/10">
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00A3E0] mb-2">Professional Experience</div>
                 <div className="text-2xl font-black text-white tracking-tighter">11+ YEARS</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance & Methodology */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="w-14 h-14 bg-[#002147] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-[#002147]/20">
              <CheckSquare className="w-7 h-7 text-[#00A3E0]" />
            </div>
            <h2 className="text-3xl font-black text-[#002147] mb-8 leading-tight tracking-tight uppercase">
              Quality Assurance & Methodology
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-normal">
              To me, translation is far more than just language substitution; it is my systematic workflow for ensuring functional equivalence and absolute institutional readiness.
            </p>
            <ul className="space-y-8">
              {[
                { title: 'ZERO-OMISSION POLICY', desc: 'I ensure every semantic nuance and technical detail of the source text is meticulously preserved with no deletions.' },
                { title: 'NEUTRALITY PROTOCOL', desc: 'I act as a transparent linguistic conduit, maintaining absolute impartiality even in the most high-stakes settings.' },
                { title: 'DOUBLE-REVIEW CYCLE', desc: 'I subject every final draft to a rigorous two-stage verification process to eliminate errors and ensure professional quality.' }
              ].map(policy => (
                <li key={policy.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-[11px] font-black text-[#002147] tracking-[0.2em] uppercase">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shadow-sm shadow-[#00A3E0]/40"></div>
                    {policy.title}
                  </div>
                  <p className="ml-6.5 text-sm text-slate-500 font-medium leading-relaxed italic border-l-2 border-slate-100 pl-4">{policy.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group">
              <Target className="w-8 h-8 text-[#00A3E0] mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-black text-[#002147] mb-4 uppercase tracking-widest">Terminology Management</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                I maintain proprietary glossaries for complex Legal and Medical contexts in Tigrinya and Amharic. This ensures that technical terms are translated with absolute conceptual consistency.
              </p>
            </div>
            
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group">
              <ShieldAlert className="w-8 h-8 text-[#00A3E0] mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-black text-[#002147] mb-4 uppercase tracking-widest">Ethical Compliance</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                Strict adherence to professional codes of conduct, such as BDÜ, FIT, AIIC & GDPR. I operate with complete transparency regarding professional secrecy.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group">
              <MessageSquare className="w-8 h-8 text-[#00A3E0] mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-black text-[#002147] mb-4 uppercase tracking-widest">Collaborative Review</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                For high-stakes institutional projects, I implement a multi-stage review process ensuring cultural and linguistic appropriateness.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group">
              <Heart className="w-8 h-8 text-emerald-500 mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-black text-[#002147] mb-4 uppercase tracking-widest">100% Human Translation</h4>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                Every document I translate is the product of 100% human expertise. I do not utilize machine translation for legal or medical work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE & TECHNICAL RELIABILITY */}
      <section className="relative py-32 px-6 md:px-12 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10"
            alt="Infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#002147]/95 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="w-14 h-14 bg-[#00A3E0] rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-[#00A3E0]/20">
              <Laptop className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
              Infrastructure & Technical Reliability
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
              My interpretation workstation is purpose-built for high-stakes VRI and OPI, utilizing enterprise-grade hardware and redundant connectivity to guarantee uninterrupted institutional service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* VRI/OPI Setup Column */}
            <div className="p-10 md:p-12 bg-[#0a1628]/80 backdrop-blur-md rounded-[40px] border border-white/10 shadow-2xl group flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black text-[#00A3E0] mb-10 uppercase tracking-[0.3em] flex items-center gap-3">
                  <Radio className="w-4 h-4" /> VRI / OPI SETUP
                </h3>
                <ul className="space-y-10">
                  <li className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                      <Wifi className="w-6 h-6 text-[#00A3E0]" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-slate-200 block leading-none">Redundant Fiber + LTE Backup</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 block">Failover Protection</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                      <Cpu className="w-6 h-6 text-[#00A3E0]" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-slate-200 block leading-none">Dedicated Workstation</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 block">Institutional grade hardware</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-[#00A3E0]" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-slate-200 block leading-none">Secure VPN Encryption</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 block">Confidentiality assurance</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 text-slate-500">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-black uppercase tracking-widest">Acoustically Optimized for Superior Audio Clarity</span>
              </div>
            </div>

            {/* Mobility & Travel Column */}
            <div className="p-10 md:p-12 bg-white/5 backdrop-blur-sm rounded-[40px] border border-white/5 shadow-2xl group flex flex-col">
              <h3 className="text-sm font-black text-emerald-400 mb-10 uppercase tracking-[0.3em] flex items-center gap-3">
                <Plane className="w-4 h-4" /> Mobility & Travel
              </h3>
              <p className="text-slate-400 text-sm mb-12 leading-relaxed font-medium">
                I am a <span className="text-white font-bold">Permanent Resident in Germany</span> and maintain a high degree of mobility for on-site requirements where a physical presence is critical for institutional success.
              </p>
              <ul className="space-y-10 flex-grow">
                <li className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-lg font-bold text-slate-200 tracking-tight">Available for In-Person Projects for Agencies & Direct Clients within EU/EEA & Switzerland</span>
                </li>
                <li className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-lg font-bold text-slate-200 tracking-tight">Reachable in 1–2 Days for Urgent Deployment</span>
                </li>
              </ul>
              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400/80">Available for On-Site Legal & Medical Proceedings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT TO CPD (CONTINUING PROFESSIONAL DEVELOPMENT) */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mx-auto mb-8">
              <Award className="w-7 h-7 text-[#00A3E0]" />
            </div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-6 nav-link">PROFESSIONAL COMMITMENT</h2>
            <h3 className="text-3xl font-black text-[#002147] mb-8 leading-tight tracking-tight uppercase">
              Continuing Professional Development (CPD)
            </h3>
            <p className="text-base text-slate-500 leading-relaxed font-medium">
              Linguistic mastery in high-stakes legal and medical contexts requires a lifelong commitment to technical training. I maintain a rigorous CPD schedule to ensure absolute terminology accuracy and ethical alignment with international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Legal & Judicial Proficiency */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Gavel className="w-8 h-8 text-[#002147] mb-8" />
              <h4 className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.2em] mb-6 border-b border-slate-200 pb-2">Legal & Institutional</h4>
              <ul className="space-y-4">
                {[
                  'Legal terminology mastery: tackled effectively (120 min)',
                  'Terminology for legal settings (Level 1, 1B, 2, 3)',
                  '(FPP) Legal Terminology Mastery (5 modules, 7 hrs)',
                  'Official translations: contracts, certs & court docs (4 hrs)',
                  'Taking legal translation skills to the next level (120 min)',
                  'Legal Documents and Official Translation (ProZ Cert)',
                  'Government Policies & Terminology Training',
                  'Citizenship & Immigration Translation Seminar',
                  'Advanced Forensic Terminology for Interpreters (Advanced)',
                  'International Law and Human Rights Documentation (Advanced)'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckSquare className="w-3.5 h-3.5 text-[#002147] shrink-0 mt-0.5" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medical & Healthcare Mastery */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Stethoscope className="w-8 h-8 text-[#00A3E0] mb-8" />
              <h4 className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.2em] mb-6 border-b border-slate-200 pb-2">Medical & Healthcare</h4>
              <ul className="space-y-4">
                {[
                  'US Medical Interpreter Terminology Training (MCIS, 60 hrs)',
                  '(FPP) Medical translation (15 hour course)',
                  'Terminology for medical and HC (Level 1, 2, 3, 4)',
                  '(FPP) Clinical Trials and Medical Documentation (6 modules)',
                  'Advanced Medical Terminology Training (10 hours)',
                  'The Medical Terminology Booster: Greek & Latin Prefixes',
                  'The medical translator\'s first-aid kit (7 hours)',
                  'ABCs of Medical Translation: Acronyms & Abbreviations',
                  'Most frequent challenges in medical translation (90 min)',
                  'Mental Health Interpreting for Low-Resource Languages (Advanced)',
                  'Medical Interpreting: Oncology & Palliative Care Protocols (Advanced)'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckSquare className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance, Ethics & US Protocol */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-8" />
              <h4 className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.2em] mb-6 border-b border-slate-200 pb-2">Compliance & Ethics</h4>
              <ul className="space-y-4">
                {[
                  'HIPAA-Compliance Course for Remote Interpreters (2022)',
                  'Fraud, Waste and Abuse for Remote Interpreters (3 hours)',
                  'Real Work Situations: Compliance Issues (2 hours)',
                  'The Structure of the US Healthcare System (2 hours)',
                  'How to become a remote interpreter (ProZ)',
                  'Ethics of AI and Machine Translation in Legal Environments (Advanced)',
                  'Interpretation for Victim Support & Trauma-Informed Care (Advanced)'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Finance, Business & Methodology */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CreditCard className="w-8 h-8 text-[#002147] mb-8" />
              <h4 className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.2em] mb-6 border-b border-slate-200 pb-2">Finance & Specialized</h4>
              <ul className="space-y-4">
                {[
                  'Terminology for finance & business (Level 1, 1B, 2, 3)',
                  'Advanced localization techniques for animated content (120 min)',
                  'Translation in Practice (Coursera, 23 hrs)',
                  'Ten Strategies for Improving Rhetoric in Translations (4 hrs)',
                  'Advanced Business Localization & Project Management (Advanced)'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckSquare className="w-3.5 h-3.5 text-[#002147] shrink-0 mt-0.5" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cross-border & High-Stakes Specialized */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Landmark className="w-8 h-8 text-[#00A3E0] mb-8" />
              <h4 className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.2em] mb-6 border-b border-slate-200 pb-2">Specialized Contexts</h4>
              <ul className="space-y-4">
                {[
                  'Cross-border Family Law and Child Protection Proceedings (Advanced)',
                  'Specialized Interpretation for Investment Arbitration (The Hague)',
                  'Neuroscience & Neuro-Radiology Terminology (Advanced)',
                  'Pediatric Healthcare Protocol and Communication (Advanced)',
                  'Advanced Terminology for Infectious Diseases and Epidemiology (Advanced)'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckSquare className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 text-center">
            <div className="inline-flex items-center gap-4 py-4 px-10 bg-[#002147] rounded-full shadow-lg shadow-[#002147]/10 group hover:scale-105 transition-transform">
              <ScrollText className="w-5 h-5 text-[#00A3E0]" />
              <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Full Professional certificates available on request</span>
            </div>
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