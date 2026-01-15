
import React, { useEffect } from 'react';
import { View } from '../types';
import { Gavel, Stethoscope, Globe, CheckCircle, ShieldAlert, Languages, Video, Phone, FileText, MapPin, GraduationCap, Users } from 'lucide-react';

interface ServicesViewProps {
  targetSection: string | null;
  clearTarget: () => void;
  setView: (view: View) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ targetSection, clearTarget, setView }) => {
  useEffect(() => {
    if (targetSection) {
      // Small delay to ensure the component is fully mounted and layout is stable
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Clear the target so clicking the same link again will still trigger a state change
        clearTarget();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [targetSection, clearTarget]);

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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            Institutional Interpretation & Translation
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed font-normal mb-10">
            Professional interpretation and translation in <span className="font-bold text-[#00A3E0]">Tigrinya, Amharic, and English (C2)</span>. Delivering high-stakes precision for judicial, clinical, and educational settings.
          </p>
          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-lg flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-[#00A3E0] shrink-0" />
            <p className="text-sm font-bold leading-relaxed uppercase tracking-wide">
              Compliance with strict institutional standards of accuracy, neutrality, and professional responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Interpretation */}
      <section className="py-24 px-6 md:px-12 bg-white" id="interpreting" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Languages className="w-10 h-10 text-[#002147]" />
            <h2 className="text-3xl font-black text-[#002147] uppercase tracking-tight">Professional Interpretation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-slate-600 font-normal mb-10">
                I provide professional interpretation for formal proceedings where precision and procedural compliance are paramount.
              </p>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#00A3E0] mb-8 nav-link">Available Modes</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Consecutive Interpretation', icon: Languages, desc: 'Ideal for trials, interviews, and medical diagnostics.' },
                   { label: 'Video Remote Interpretation (VRI)', icon: Video, desc: 'Global availability for virtual hearings and consultations.' },
                   { label: 'Over-the-Phone Interpretation (OPI)', icon: Phone, desc: 'Immediate linguistic support for urgent administrative needs.' },
                 ].map(mode => (
                   <div key={mode.label} className="p-6 bg-slate-50 border border-slate-100 rounded group hover:border-[#00A3E0] transition-colors">
                     <div className="flex items-center gap-4 mb-2">
                        <mode.icon className="w-5 h-5 text-slate-400 group-hover:text-[#00A3E0]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#002147] nav-link">{mode.label}</span>
                     </div>
                     <p className="text-xs text-slate-500 font-medium leading-relaxed">{mode.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#00A3E0] mb-8 nav-link">Institutional Standards</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Strict adherence to the <strong>Code of Professional Conduct</strong>, ensuring neutrality, confidentiality, and accurate message delivery without omission or addition.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Subject matter expertise in Tigrinya and Amharic legal and medical terminology, facilitating clear communication in complex multi-cultural settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Judicial */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100" id="legal" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 text-[#002147]">
            <Gavel className="w-10 h-10" />
            <h2 className="text-3xl font-black uppercase tracking-tight">Legal & Judicial Interpretation & Translation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
               <p className="text-lg text-slate-600 font-normal leading-relaxed">
                 Professional linguistic support for judicial proceedings, criminal defense, and civil litigation. Experience includes assignments for international investment arbitration in The Hague.
               </p>
               <div className="p-6 bg-white border border-slate-200 rounded">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00A3E0] mb-4">Core Competencies</h4>
                  <ul className="space-y-4">
                    {[
                      'Judicial hearings and tribunal proceedings',
                      'Police and law enforcement interviews',
                      'Attorney–client consultations and legal briefings',
                      'Expert witness testimony and sworn statements',
                      'Probation and parole rehabilitation sessions'
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                        <CheckCircle className="w-4 h-4 text-[#002147] shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#00A3E0] mb-8 nav-link">Judicial Documentation</h3>
              <ul className="space-y-4">
                {[
                  'Judicial decisions, pleadings, and court orders',
                  'Contracts, affidavits, and commercial agreements',
                  'Witness statements and evidentiary documents',
                  'International arbitration files and submissions',
                  'Official correspondence and legal certificates'
                ].map(doc => (
                  <li key={doc} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] mt-1.5 shrink-0"></div> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical & Psychiatric */}
      <section className="py-24 px-6 md:px-12 bg-white" id="medical" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 text-[#002147]">
            <Stethoscope className="w-10 h-10" />
            <h2 className="text-3xl font-black uppercase tracking-tight">Medical & Psychiatric Interpretation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="p-10 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-black text-[#002147] mb-6 uppercase tracking-tight">Clinical Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                Specialized interpretation for psychiatric assessments and clinical diagnostics. Ensuring patients can accurately convey complex symptoms and histories in Tigrinya or Amharic.
              </p>
              <ul className="space-y-4">
                {[
                  'Psychiatric and psychological assessments',
                  'Mental health diagnostic interviews',
                  'Clinical assessments and specialist consultations',
                  'Therapeutic sessions and patient history taking',
                  'Hospital discharge and clinical notes translation'
                ].map(i => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#00A3E0] mb-8 nav-link">Medical Documentation</h3>
              <p className="text-slate-600 font-normal mb-8 leading-relaxed">
                Translation of technical medical records where accuracy is critical to patient outcomes and treatment plans.
              </p>
              <ul className="space-y-4">
                {[
                  'Medical and psychiatric reports',
                  'Diagnostic summaries and lab evaluations',
                  'Psychological and clinical assessment results',
                  'Patient consent forms and treatment notices',
                  'Discharge summaries and specialist referrals'
                ].map(doc => (
                  <li key={doc} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration & Asylum */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100" id="immigration" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 text-[#002147]">
            <Globe className="w-10 h-10" />
            <h2 className="text-3xl font-black uppercase tracking-tight">Immigration & Asylum Interpretation & Translation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-slate-600 font-normal mb-8 leading-relaxed">
                Expert interpretation and translation for protection and asylum procedures, ensuring fair processing through clear communication between authorities and applicants.
              </p>
              <ul className="space-y-4">
                {[
                  'Asylum and international protection interviews',
                  'Tribunal hearings and migration procedures',
                  'Immigration and asylum determination files',
                  'Administrative and reception facility sessions',
                  'Official correspondence and protection case files'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle className="w-5 h-5 text-[#00A3E0] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 border border-slate-200 rounded">
               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00A3E0] mb-4">Ethical Commitment</h4>
               <p className="text-xs text-slate-500 font-medium leading-loose">
                 In asylum contexts, linguistic accuracy is a matter of fundamental rights. My work is defined by a commitment to ensuring every detail of a testimony is conveyed with neutrality and precision.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational & Social */}
      <section className="py-24 px-6 md:px-12 bg-white" id="educational" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 text-[#002147]">
            <GraduationCap className="w-10 h-10" />
            <h2 className="text-3xl font-black uppercase tracking-tight">Educational & Social Interpretation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
               <p className="text-lg text-slate-600 font-normal leading-relaxed">
                 Supporting integration and access to essential services for families and students through specialized interpretation for educational and social work settings.
               </p>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: 'IEP Meetings', desc: 'Individualized Education Program planning for students.' },
                    { title: 'Clinical Therapy', desc: 'Speech and Occupational therapy sessions for children.' },
                    { title: 'Social Services', desc: 'Child support, family law, and social work hearings.' },
                  ].map(item => (
                    <div key={item.title} className="p-5 bg-slate-50 border border-slate-100 rounded">
                      <h4 className="text-xs font-black text-[#002147] uppercase tracking-tight mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#00A3E0] mb-8 nav-link">Core Capabilities</h3>
              <ul className="space-y-4">
                {[
                  'IEP (Individualized Education Program) meetings',
                  'Speech and Occupational therapy sessions',
                  'Parent-teacher conferences and school board meetings',
                  'Social services and child support hearings',
                  'Public authority and community support sessions',
                  'Reception facility and social integration support'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <Users className="w-5 h-5 text-emerald-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Translation */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100" id="translation" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 text-[#002147]">
            <FileText className="w-10 h-10" />
            <h2 className="text-3xl font-black uppercase tracking-tight">Professional Translation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="font-normal text-slate-600">
               <p className="text-lg leading-relaxed mb-8">
                 Precise written translation for official, technical, and civil documentation, ensuring functional equivalence and institutional readiness.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {['Tigrinya', 'Amharic', 'English (C2)'].map(lang => (
                    <div key={lang} className="p-4 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-widest text-[#002147] text-center nav-link">
                      {lang}
                    </div>
                  ))}
                </div>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#00A3E0] mb-8 nav-link">Official & Technical Records</h3>
              <ul className="space-y-4">
                {[
                  'Certificates, IDs, and civil status records',
                  'Academic transcripts, diplomas, and CVs',
                  'Technical manuals and safety data sheets',
                  'Business reports and corporate materials',
                  'Governmental policy and public notices',
                  'Administrative decisions and official correspondence'
                ].map(doc => (
                  <li key={doc} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] mt-1.5 shrink-0"></div> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Working Languages & Availability */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Global Reach</h2>
            <p className="text-slate-600 font-normal leading-relaxed mb-10">
              Operational capacity extends across all standard remote platforms and on-site locations within the European Economic Area.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-3 bg-slate-50 border border-slate-100 rounded text-[10px] font-black uppercase tracking-widest text-[#002147]">VRI Supported</div>
               <div className="px-6 py-3 bg-slate-50 border border-slate-100 rounded text-[10px] font-black uppercase tracking-widest text-[#002147]">OPI Supported</div>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 nav-link">Delivery & Availability</h2>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-sm font-medium text-slate-600">
                <Globe className="w-5 h-5 text-[#00A3E0]" /> Remote interpretation and translation worldwide
              </li>
              <li className="flex items-center gap-4 text-sm font-medium text-slate-600">
                <MapPin className="w-5 h-5 text-[#00A3E0]" /> On-site assignments across Germany, the EU/EEA & Switzerland
              </li>
            </ul>
            <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic nav-link">
              Assignments are accepted subject to availability and suitability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#002147] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Request a Quote for Translation or Interpretation</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
            If you would like to discuss availability, scope, or pricing, please get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setView(View.CONTACT)} className="btn-primary bg-white text-[#002147]">Request a Quote</button>
            <a href="https://wa.me/491785260768" className="btn-whatsapp bg-transparent text-white border-white/20 hover:bg-white/5">WhatsApp Call</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;
