import React, { useEffect } from 'react';
import { View } from '../types';
import { 
  Gavel, Stethoscope, Globe, CheckCircle, 
  Languages, FileText, ArrowRight, ShieldCheck,
  Activity, Scale, HeartHandshake, BookOpen, Video,
  UserCheck, Scale as ScaleIcon, Building2, ClipboardList,
  AlertCircle
} from 'lucide-react';

interface ServicesViewProps {
  targetSection: string | null;
  clearTarget: () => void;
  setView: (view: View) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ targetSection, clearTarget, setView }) => {
  useEffect(() => {
    if (targetSection) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        clearTarget();
      }, 350); 
      return () => clearTimeout(timer);
    }
  }, [targetSection, clearTarget]);

  const SectorCTA = ({ type, sector }: { type: 'Interpretation' | 'Translation', sector: string }) => (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <div className="flex flex-col gap-4">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Ready to discuss? Call anytime: <a href="tel:+4915560029057" className="text-[#00A3E0] hover:underline">+49 155 60029057</a>
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

  const ServiceList = ({ items, iconColor, textColor = "text-slate-600" }: { items: string[], iconColor: string, textColor?: string }) => (
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item} className={`flex items-start gap-3 text-[13px] font-semibold ${textColor} leading-relaxed`}>
          <CheckCircle className={`w-4 h-4 ${iconColor} shrink-0 mt-0.5`} /> {item}
        </li>
      ))}
    </ul>
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
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-6 nav-link">Industrial Linguistic Practice</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
            Specialized Interpretation & Translation
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed font-normal mb-10 max-w-3xl">
            Delivering high-fidelity linguistic precision in Tigrinya, Amharic, and English. My practice is structured around the specific procedural requirements of four critical sectors, providing expert linguistic support for international organizations, LSPs, and global institutions.
          </p>
        </div>
      </section>

      {/* SECTOR I: LEGAL & JUDICIAL */}
      <section id="legal" className="py-24 px-6 md:px-12 bg-white scroll-mt-20 border-b border-slate-100">
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
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#00A3E0] uppercase tracking-[0.25em] mb-10 pb-4 border-b border-slate-200">Interpretation</h4>
                <ServiceList 
                  iconColor="text-emerald-500"
                  items={[
                    'Court & Tribunal Proceedings: Support for Civil, Criminal, and High Court contexts.',
                    'Law Enforcement Support: Police interviews and custody consultations.',
                    'Attorney-Client Briefings: High-level legal strategy and consultation sessions.',
                    'International Investment Arbitration: Specialized support for proceedings (e.g., The Hague).',
                    'Forensic Facilitation: Expert witness testimony support and evidence review.',
                    'Multi-Party Hearings: Support for Magistrates and Crown Court contexts.',
                    'Tribunals: Social Security and Child Maintenance tribunal facilitation.',
                    'Correctional Services: Prison visits and probation service reviews.',
                    'LAA Contexts: Professional support for Legal Aid Agency compliant appointments.',
                    'Legal Consultations: Facilitating communication for notarial acts and statements.'
                  ]} 
                />
              </div>
              <SectorCTA type="Interpretation" sector="Legal & Judicial" />
            </div>

            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#002147] uppercase tracking-[0.25em] mb-10 pb-4 border-b border-slate-200">Translation</h4>
                <ServiceList 
                  iconColor="text-[#002147]"
                  items={[
                    'Contracts: Commercial agreements and employment contracts.',
                    'Witness Documentation: Professional translation of affidavits and witness statements.',
                    'Judicial Notices: Summons, court orders, and penal notices.',
                    'Intellectual Property: Patents, trademarks, and IP filings.',
                    'Corporate Governance: Articles of Association and corporate policy docs.',
                    'Regulatory Compliance: GDPR policies and Anti-Money Laundering dossiers.',
                    'Case Law Support: Technical legal manuals and case law summaries.',
                    'Litigation Bundles: Comprehensive evidentiary and trial documentation.'
                  ]} 
                />
              </div>
              <SectorCTA type="Translation" sector="Legal & Judicial" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR II: MEDICAL & HEALTHCARE */}
      <section id="medical" className="py-24 px-6 md:px-12 bg-slate-50 scroll-mt-20 border-b border-slate-100">
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
            <div className="p-10 bg-white rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.25em] mb-10 pb-4 border-b border-slate-200">Interpretation</h4>
                <ServiceList 
                  iconColor="text-emerald-500"
                  items={[
                    'Psychiatric Care: Mental health multi-disciplinary assessments.',
                    'Clinical Diagnostics: Specialist consultant briefings and diagnostics.',
                    'Acute Care: Oncology, emergency support, and surgical evaluations.',
                    'Radiology: Pre-surgical medical evaluations and imaging briefings.',
                    'Clinical Research: Participant briefings for pharmacology and research trials.',
                    'Rehabilitative Care: Physiotherapy and occupational therapy programs.',
                    'Maternal Health: Prenatal, obstetric, and pediatric consultations.',
                    'Geriatric Care: Long-term treatment planning and family meetings.',
                    'Palliative Care: End-of-life family consultations and support.',
                    'Informed Consent: Detailed explanation of treatment options and risks.'
                  ]} 
                />
              </div>
              <SectorCTA type="Interpretation" sector="Medical & Healthcare" />
            </div>

            <div className="p-10 bg-white rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#002147] uppercase tracking-[0.25em] mb-10 pb-4 border-b border-slate-200">Translation</h4>
                <ServiceList 
                  iconColor="text-[#002147]"
                  items={[
                    'Clinical Records: Detailed medical reports and hospital discharge summaries.',
                    'Research Protocols: Clinical trial protocols and investigator brochures.',
                    'Patient Resources: Information leaflets (PIL) and informed consent forms.',
                    'Psychiatric Files: Evaluation notes and psychiatric history records.',
                    'Diagnostics: Laboratory evaluation notes and technical diagnostic results.',
                    'Pharmacology: Product characteristics (SmPC) and pharmaceutical labeling.',
                    'Medical Devices: Technical instruction manuals (IFUs) for devices.',
                    'Public Health: Policy guidelines and community outreach materials.',
                    'Insurance: Medical insurance claims and treatment certifications.',
                    'Ethics: Institutional Ethics Committee submissions and reviews.'
                  ]} 
                />
              </div>
              <SectorCTA type="Translation" sector="Medical & Healthcare" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR III: IMMIGRATION & ASYLUM */}
      <section id="immigration" className="py-24 px-6 md:px-12 bg-white scroll-mt-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl shadow-slate-900/20">
              <Globe className="w-6 h-6 text-[#00A3E0]" />
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-1 nav-link">Sector III</h2>
              <h3 className="text-3xl font-black text-[#002147] uppercase tracking-tighter">Immigration & Asylum</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#00A3E0] uppercase tracking-[0.25em] mb-10 pb-4 border-b border-slate-200">Interpretation</h4>
                <ServiceList 
                  iconColor="text-emerald-500"
                  items={[
                    'Substantive Interviews: Asylum and international protection interviews.',
                    'Adjudication: Refugee Status Determination (RSD) sessions.',
                    'Migration Consultations: Hearings and consultations (e.g., BAMF / SEM contexts).',
                    'Appeals Support: Tribunal proceedings for asylum appeals and reviews.',
                    'Social Integration: Reception and integration briefing sessions.',
                    'Vulnerability Assessments: Social worker and specialist consultations.',
                    'Detention Support: Immigration detention facility support services.',
                    'Family Reunification: Interviews and documentation reviews.',
                    'Human Rights: Advice sessions regarding international refugee law.',
                    'Migration Management: Border control and management briefings.'
                  ]} 
                />
              </div>
              <SectorCTA type="Interpretation" sector="Immigration & Asylum" />
            </div>

            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#002147] uppercase tracking-[0.25em] mb-10 pb-4 border-b border-slate-200">Translation</h4>
                <ServiceList 
                  iconColor="text-[#002147]"
                  items={[
                    'Case Dossiers: Asylum determination and protection history files.',
                    'Official Notices: Case correspondence, decisions, and procedural notices.',
                    'Police Records: International good conduct and clearance certificates.',
                    'Migration Policy: Public sector guidelines and bulletins.',
                    'Civil Records: Professional translation of birth, marriage, and death certificates.',
                    'Appeal Bundles: Evidentiary documentation for asylum proceedings.',
                    'Institutional Support: Guidelines for refugee support services.',
                    'Cultural Manuals: Sensitivity and integration handbooks.'
                  ]} 
                />
              </div>
              <SectorCTA type="Translation" sector="Immigration & Asylum" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR IV: EDUCATION & SOCIAL */}
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
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#00A3E0] uppercase tracking-[0.25em] mb-10 pb-4 border-b border-white/10">Interpretation</h4>
                <ServiceList 
                  iconColor="text-emerald-400"
                  textColor="text-slate-200"
                  items={[
                    'Multi-Agency Meetings: IEP and school board policy sessions.',
                    'Education Consultations: Parent-teacher conferences and reviews.',
                    'Social Work: Home visits and child protection hearings.',
                    'Clinical Therapy: Speech and occupational therapy diagnostics.',
                    'Rehabilitation: Probation, parole, and criminal rehabilitation interviews.',
                    'Benefits Support: Social security and assessment appointments.',
                    'Vocational Advice: Employment training and career consultations.',
                    'Public Health: Community outreach and briefing sessions.',
                    'Family Services: Foster care and adoption placement interviews.'
                  ]} 
                />
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <button 
                  onClick={() => setView(View.CONTACT)}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-white text-[#002147] text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#00A3E0] hover:text-white transition-all"
                >
                  Request Education & Social Interpretation Quote <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-black text-[#00A3E0] uppercase tracking-[0.25em] mb-10 pb-4 border-b border-white/10">Translation</h4>
                <ServiceList 
                  iconColor="text-[#00A3E0]"
                  textColor="text-slate-200"
                  items={[
                    'Credentials: Academic transcripts, diplomas, and degree certificates.',
                    'Employment: CVs and detailed professional employment records.',
                    'Civil Records: Civil status registration (Birth, Marriage, Death).',
                    'Social Claims: Pension, disability, and social security documentation.',
                    'Community Info: Public health notices and awareness materials.',
                    'Policy Handbooks: Curriculum guidelines and educational handbooks.',
                    'Social Histories: Child protection and social welfare case histories.',
                    'Research: Academic research papers and educational materials.',
                    'SOPs: Standard operating procedures for social agencies.'
                  ]} 
                />
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
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
      </section>

      {/* Global Modality Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Operational Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-xl transition-all group">
              <div className="p-4 bg-white rounded-2xl w-fit mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><Scale className="w-8 h-8 text-[#002147]" /></div>
              <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest mb-4">On-Site EU/EEA</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Physical presence for critical court hearings and clinical trials within Europe and Switzerland.</p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-xl transition-all group">
              <div className="p-4 bg-white rounded-2xl w-fit mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><Video className="w-8 h-8 text-[#00A3E0]" /></div>
              <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest mb-4">Remote Worldwide (VRI)</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Enterprise-grade Video Remote Interpretation using secure, institutional platforms.</p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-xl transition-all group">
              <div className="p-4 bg-white rounded-2xl w-fit mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><Activity className="w-8 h-8 text-emerald-500" /></div>
              <h4 className="text-sm font-black text-[#002147] uppercase tracking-widest mb-4">Terminology Management</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">SDL Trados & Memsource integration for consistent institutional terminology management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Illustrations Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-12 text-center nav-link">INSTITUTIONAL ASSURANCE & FOUNDATIONS</h2>
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

      {/* Legal Status Disclaimer - Positioned just above the Footer */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto flex items-start gap-6">
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 border border-amber-100">
            <AlertCircle className="w-6 h-6 text-amber-600" />
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Professional Notice & Legal Status</h4>
            <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
              Aman Translations provides professional linguistic services based on extensive international experience and academic qualifications. Aman Baryahannes is not a "beeidigter Dolmetscher" or "ermächtigter Übersetzer" under German state law. Services provided are professional technical translations and interpretations, not sworn (beeidigter Übersetzer/ermächtigter Übersetzer) for German government agencies.
            </p>
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