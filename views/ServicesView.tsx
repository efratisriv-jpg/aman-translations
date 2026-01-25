import React, { useEffect } from 'react';
import { View } from '../types';
import { 
  Gavel, Stethoscope, Globe, CheckCircle, ShieldAlert, 
  Languages, FileText, GraduationCap, ArrowRight, ShieldCheck,
  Briefcase, Activity, Scale, HeartHandshake, BookOpen, Video,
  MessageSquare, UserCheck, Scale as ScaleIcon, Building2, ClipboardList
} from 'lucide-react';

interface ServicesViewProps {
  targetSection: string | null;
  clearTarget: () => void;
  setView: (view: View) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ targetSection, clearTarget, setView }) => {
  useEffect(() => {
    if (targetSection) {
      // Increased timeout to ensure the DOM is stable after App-level transitions
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Clearing the target in parent state prevents repeat scrolls on updates
        clearTarget();
      }, 350); 
      return () => clearTimeout(timer);
    }
  }, [targetSection, clearTarget]);

  const SectorCTA = ({ type, sector }: { type: 'Interpretation' | 'Translation', sector: string }) => (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <div className="flex flex-col gap-4">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Need urgent assistance? Call anytime: <a href="tel:+4915560029057" className="text-[#00A3E0] hover:underline">+49 155 60029057</a>
        </div>
        <button 
          onClick={() => setView(View.CONTACT)}
          className="w-full flex items-center justify-center gap-2 py-4 bg-[#002147] text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#00A3E0] transition-colors"
        >
          Request {sector} {type} Quote <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );

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
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-6 nav-link">Industrial Linguistic Solutions</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
            Specialized Interpretation & Translation
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed font-normal mb-10 max-w-3xl">
            Delivering high-fidelity linguistic precision in <span className="font-bold text-[#00A3E0]">Tigrinya, Amharic, and English</span>. My practice is structured around the specific procedural requirements of four critical sectors.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
              <div className="text-[10px] font-black text-[#00A3E0] uppercase tracking-widest mb-1">Service Core I</div>
              <div className="text-white font-bold text-lg uppercase tracking-tight">Interpretation</div>
            </div>
            <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
              <div className="text-[10px] font-black text-[#00A3E0] uppercase tracking-widest mb-1">Service Core II</div>
              <div className="text-white font-bold text-lg uppercase tracking-tight">Translation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Compliance Section */}
      <section className="py-16 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-16 h-16 bg-[#002147] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#002147]/20">
            <ShieldCheck className="w-8 h-8 text-[#00A3E0]" />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#002147] uppercase tracking-tight mb-2">Institutional Accuracy & Professional Secrecy</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-4xl">
              Every assignment, whether oral or written, is executed with absolute adherence to professional codes of conduct. I guarantee neutrality, confidentiality, and linguistic functional equivalence across all industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: LEGAL & JUDICIAL */}
      <section id="legal" className="py-24 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl shadow-slate-900/20">
              <Gavel className="w-6 h-6 text-[#00A3E0]" />
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-1 nav-link">Sector I</h2>
              <h3 className="text-3xl font-black text-[#002147] uppercase tracking-tighter">Legal & Judicial</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-white rounded-xl shadow-sm"><Languages className="w-5 h-5 text-[#00A3E0]" /></div>
                  <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest">Interpretation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'Court & Tribunal Proceedings (Civil/Criminal/High Court)',
                    'Police Interviews & Law Enforcement Custody Consultations',
                    'Attorney-Client Briefings & Legal Strategy Sessions',
                    'International Investment Arbitration Support (The Hague)',
                    'Expert Witness Testimony & Forensic Facilitation',
                    'Magistrates & Crown Court Multi-Party Hearings',
                    'Social Security & Child Maintenance Tribunals',
                    'Prison Visits & Probation Service Reviews',
                    'Legal Aid Agency (LAA) Compliant Appointments',
                    'Notarial Acts & Signing of Sworn Statements'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-600 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <SectorCTA type="Interpretation" sector="Legal & Judicial" />
            </div>

            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-white rounded-xl shadow-sm"><FileText className="w-5 h-5 text-[#002147]" /></div>
                  <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest">Translation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'Commercial Contracts & Employment Agreements',
                    'Affidavits, Sworn Witness Statements & Depositions',
                    'Judicial Summons, Court Orders & Penal Notices',
                    'Intellectual Property, Patents & Trademark Filings',
                    'Powers of Attorney & Certified Notarial Acts',
                    'GDPR Policies & Institutional Data Privacy Notices',
                    'Articles of Association & Corporate Governance Docs',
                    'Regulatory Compliance & Anti-Money Laundering Dossiers',
                    'Technical Legal Manuals & Case Law Summaries',
                    'Litigation Bundles & Evidentiary Documentation'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-600 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <SectorCTA type="Translation" sector="Legal & Judicial" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MEDICAL & HEALTHCARE */}
      <section id="medical" className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-[#002147] rounded-xl flex items-center justify-center shadow-xl shadow-[#002147]/20">
              <Stethoscope className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-1 nav-link">Sector II</h2>
              <h3 className="text-3xl font-black text-[#002147] uppercase tracking-tighter">Medical & Healthcare</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 bg-white rounded-[40px] border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-slate-50 rounded-xl"><Languages className="w-5 h-5 text-emerald-500" /></div>
                  <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest">Interpretation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'Psychiatric & Mental Health Multi-Disciplinary Assessments',
                    'Specialist Clinical Diagnostics & Consultant Briefings',
                    'Oncology, Acute Care & Emergency Support Sessions',
                    'Radiology & Pre-Surgical Medical Evaluations',
                    'Pharmacology & Clinical Research Participant Briefings',
                    'Physiotherapy & Rehabilitation Treatment Programs',
                    'Prenatal, Obstetric & Pediatric Consultation Services',
                    'Geriatric Care & Long-Term Treatment Planning',
                    'Palliative Care & End-of-Life Family Consultations',
                    'Informed Consent & Treatment Options Explanation'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-600 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <SectorCTA type="Interpretation" sector="Medical & Healthcare" />
            </div>

            <div className="p-10 bg-white rounded-[40px] border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-slate-50 rounded-xl"><FileText className="w-5 h-5 text-[#002147]" /></div>
                  <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest">Translation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'Detailed Medical Reports & Hospital Discharge Summaries',
                    'Clinical Trial Protocols & Investigator Brochures',
                    'Patient Information Leaflets (PIL) & Consent Forms',
                    'Psychological Evaluation & Psychiatric History Files',
                    'Laboratory Evaluation Notes & Technical Diagnostic Results',
                    'Pharmaceutical Product Characteristics & Labeling',
                    'Medical Device Instruction Manuals (IFUs)',
                    'Public Health Policy Guidelines & Outreach Materials',
                    'Medical Insurance Claims & Treatment Certifications',
                    'Institutional Ethics Committee Submissions'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-600 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <SectorCTA type="Translation" sector="Medical & Healthcare" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMMIGRATION & ASYLUM */}
      <section id="immigration" className="py-24 px-6 md:px-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl shadow-slate-900/20">
              <Globe className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-1 nav-link">Sector III</h2>
              <h3 className="text-3xl font-black text-[#002147] uppercase tracking-tighter">Immigration & Asylum</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-white rounded-xl shadow-sm"><Languages className="w-5 h-5 text-emerald-500" /></div>
                  <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest">Interpretation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'Asylum & International Protection Substantive Interviews',
                    'Refugee Status Determination (RSD) Adjudication Sessions',
                    'Migration Bureau (BAMF / SEM) Hearings & Consultations',
                    'Tribunal Proceedings for Asylum Appeals & Case Reviews',
                    'Reception & Social Integration Briefing Sessions',
                    'Vulnerability Assessments & Social Worker Consults',
                    'Immigration Detention Facility Support Services',
                    'Family Reunification Interviews & Documentation Reviews',
                    'Human Rights & Refugee Law Advice Sessions',
                    'Border Control & Migration Management Briefings'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-600 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <SectorCTA type="Interpretation" sector="Immigration & Asylum" />
            </div>

            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-white rounded-xl shadow-sm"><FileText className="w-5 h-5 text-[#002147]" /></div>
                  <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest">Translation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'Asylum Determination Dossiers & Protection History Files',
                    'Official Case Correspondence, Notices & Decisions',
                    'Police Records & International Good Conduct Certificates',
                    'Immigration Case Determination & Procedural Notices',
                    'Public Sector Migration Policy Guidelines & Bulletins',
                    'Birth, Marriage & Death Certificates for Official Use',
                    'Evidentiary Documentation Bundles for Asylum Appeals',
                    'Institutional Guidelines for Refugee Support Services',
                    'Cultural Sensitivity & Integration Manuals',
                    'Visa Application Supporting Documentation'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-600 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#002147] shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <SectorCTA type="Translation" sector="Immigration & Asylum" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EDUCATION & SOCIAL */}
      <section id="educational" className="py-24 px-6 md:px-12 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
              <BookOpen className="w-6 h-6 text-[#00A3E0]" />
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-1 nav-link">Sector IV</h2>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Education & Social</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-white/5 rounded-xl"><Languages className="w-5 h-5 text-[#00A3E0]" /></div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest">Interpretation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'IEP (Individualized Education Program) Multi-Agency Meetings',
                    'Parent-Teacher Conferences & School Board Policy Sessions',
                    'Social Work Home Visits & Child Protection Hearings',
                    'Speech & Occupational Therapy Diagnostic Sessions',
                    'Probation, Parole & Criminal Rehabilitation Interviews',
                    'Social Security & Benefits Assessment Appointments',
                    'Employment Training & Vocational Advice Consultations',
                    'Community Outreach & Public Health Briefings',
                    'Educational Psychology & Learning Support Reviews',
                    'Foster Care & Adoption Placement Family Interviews'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-col gap-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Need urgent assistance? Call anytime: <a href="tel:+4915560029057" className="text-[#00A3E0] hover:underline">+49 155 60029057</a>
                  </div>
                  <button 
                    onClick={() => setView(View.CONTACT)}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-white text-[#002147] text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#00A3E0] hover:text-white transition-all"
                  >
                    Request Education & Social Interpretation Quote <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-white/5 rounded-xl"><FileText className="w-5 h-5 text-[#00A3E0]" /></div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest">Translation</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    'Academic Transcripts, Diplomas & Degree Certificates',
                    'Curriculum Vitae (CV) & Detailed Employment Records',
                    'Birth, Marriage & Death Certificates (Official Civil Registration)',
                    'Social Security, Pension & Disability Claim Documentation',
                    'Public Health Information & Community Awareness Notices',
                    'Educational Curriculum Guidelines & Policy Handbooks',
                    'Child Protection & Social Welfare Case Histories',
                    'Academic Research Papers & Educational Materials',
                    'Standard Operating Procedures for Social Agencies',
                    'Institutional Compliance & Ethics Guidelines'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-[14px] font-semibold text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-col gap-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Need urgent assistance? Call anytime: <a href="tel:+4915560029057" className="text-[#00A3E0] hover:underline">+49 155 60029057</a>
                  </div>
                  <button 
                    onClick={() => setView(View.CONTACT)}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-white text-[#002147] text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#00A3E0] hover:text-white transition-all"
                  >
                    Request Education & Social Translation Quote <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Illustrations Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="p-10 border border-slate-100 rounded-[40px] bg-slate-50/50">
               <Building2 className="w-12 h-12 text-[#00A3E0] mx-auto mb-6" />
               <h4 className="text-xs font-black uppercase tracking-widest text-[#002147] mb-4">Institutional Partners</h4>
               <p className="text-[11px] font-medium text-slate-500 leading-relaxed">Government bodies, court systems, and clinical trial sponsors.</p>
            </div>
            <div className="p-10 border border-slate-100 rounded-[40px] bg-slate-50/50">
               <UserCheck className="w-12 h-12 text-[#00A3E0] mx-auto mb-6" />
               <h4 className="text-xs font-black uppercase tracking-widest text-[#002147] mb-4">LSP Support</h4>
               <p className="text-[11px] font-medium text-slate-500 leading-relaxed">Reliable white-label linguist for over 40 translation agencies.</p>
            </div>
            <div className="p-10 border border-slate-100 rounded-[40px] bg-slate-50/50">
               <ScaleIcon className="w-12 h-12 text-[#00A3E0] mx-auto mb-6" />
               <h4 className="text-xs font-black uppercase tracking-widest text-[#002147] mb-4">Ethical Conduct</h4>
               <p className="text-[11px] font-medium text-slate-500 leading-relaxed">Strict adherence to professional secrecy and neutral reporting.</p>
            </div>
            <div className="p-10 border border-slate-100 rounded-[40px] bg-slate-50/50">
               <ClipboardList className="w-12 h-12 text-[#00A3E0] mx-auto mb-6" />
               <h4 className="text-xs font-black uppercase tracking-widest text-[#002147] mb-4">Term Management</h4>
               <p className="text-[11px] font-medium text-slate-500 leading-relaxed">Proprietary glossaries for Tigrinya & Amharic technical terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Modality Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Operational Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[40px] hover:shadow-xl transition-all group">
              <div className="p-4 bg-white rounded-2xl w-fit mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><Scale className="w-8 h-8 text-[#002147]" /></div>
              <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest mb-4">On-Site EU/EEA</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Physical presence for critical court hearings and clinical trials within Europe and Switzerland.</p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[40px] hover:shadow-xl transition-all group">
              <div className="p-4 bg-white rounded-2xl w-fit mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><Video className="w-8 h-8 text-[#00A3E0]" /></div>
              <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest mb-4">Remote Worldwide (VRI)</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Enterprise-grade Video Remote Interpretation using secure, institutional platforms.</p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[40px] hover:shadow-xl transition-all group">
              <div className="p-4 bg-white rounded-2xl w-fit mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><Activity className="w-8 h-8 text-emerald-500" /></div>
              <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest mb-4">Translation (CAT Tools)</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">SDL Trados & Memsource integration for consistent institutional terminology management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#002147] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <HeartHandshake className="w-12 h-12 text-[#00A3E0] mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Partner with a Professional Linguist</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
            Discuss your institutional requirements or request a technical quote for Tigrinya, Amharic, or English language services.
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

export default ServicesView;