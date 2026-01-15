
import React from 'react';
import { View } from '../types';
import { Quote, Star, CheckCircle } from 'lucide-react';

interface ClientsViewProps {
  setView: (view: View) => void;
}

const ClientsView: React.FC<ClientsViewProps> = ({ setView }) => {
  const categories = [
    {
      title: 'Legal & Arbitration Clients',
      subtitle: '(Small and mid-size legal practices, arbitration teams, consular service providers)',
      clients: [
        'Harrison & Cole Solicitors (UK) — Immigration & Asylum Law',
        'Redbridge Chambers Legal Consultants (UK) — Criminal & Civil Law',
        'Oakfield Immigration Law Office (UK) — Immigration & Protection',
        'Westminster Legal Advisory Services (UK) — Public Law',
        'Northbridge Solicitors LLP (UK) — Family & Child Law',
        'Crownstone Legal Associates (UK) — Litigation Support',
        'LexNova Arbitration Consultants (Netherlands) — Investment Arbitration',
        'Hague Arbitration Support Services (Netherlands) — International Arbitration',
        'International Investment Arbitration Case Teams (The Hague, Netherlands)',
        'Consular Visa Support Offices (International) — Legal & Administrative'
      ]
    },
    {
      title: 'Medical & Healthcare Clients',
      subtitle: '(Clinics, assessment centres, mental health providers)',
      clients: [
        'Riverside Medical Practice (UK) — Primary Care',
        'Greenhill Community Health Clinic (UK) — Community Medicine',
        'Northway Mental Health Services (UK) — Mental Health',
        'Clearview Psychological Assessment Centre (UK) — Psychological Assessments',
        'Oakwood Medical Assessment Services (UK) — Medical Reporting',
        'BridgeCare Community Health Services (UK) — Public Health',
        'WellPath Clinical Services (Ireland) — Medical Assessments',
        'MindWell Psychological Services (Ireland) — Mental Health',
        'CrossCare Medical Assessments (Ireland) — Medical & Psychiatric Reporting',
        'Independent Medical Reporting Providers (International) — Clinical Documentation'
      ]
    },
    {
      title: 'Immigration, Asylum & Social Support Organisations',
      subtitle: '(NGOs, interview support services, casework providers)',
      clients: [
        'Asylum Interview Support Services Ltd (UK) — Asylum Procedures',
        'Refugee Casework Support Network (UK) — Protection & Appeals',
        'Migration Advice Network (Ireland) — Immigration Advisory',
        'International Protection Interview Services (Ireland) — Asylum Interviews',
        'Reception & Processing Support Services (International) — Migration Procedures',
        'Community Integration Support Services (International) — Social Services'
      ]
    },
    {
      title: 'Language Service Providers',
      subtitle: '(Translation & Interpreting Agencies)',
      clients: [
        'Lionbridge — Legal & Arbitration',
        'TransPerfect — Legal & Medical',
        'RWS Group — Legal & Medical',
        'LanguageLine Solutions — Medical (OPI/VRI)',
        'Acolad Group — Legal & Medical',
        'Welocalize — Legal',
        'STAR Group — Legal & Medical',
        'Capita Translation & Interpreting — Public Services',
        'Word360 — Legal',
        'Semantix — Legal & Medical',
        'Global Lingo — Legal',
        'Alpha CRC — Legal & Medical',
        'Straker Translations — Medical',
        'TextMaster — Institutional Translation'
      ]
    }
  ];

  const testimonials = [
    {
      text: "Aman is highly professional, accurate, and reliable. His understanding of legal terminology and sensitive procedures is exceptional.",
      author: "Senior Caseworker",
      org: "Immigration Law Office (UK)"
    },
    {
      text: "Clear communication, excellent preparation, and strong ethical awareness. We rely on Aman for complex medical and legal assignments.",
      author: "Project Manager",
      org: "Language Service Provider (EU)"
    },
    {
      text: "Aman handled high-pressure proceedings with confidence and precision. His work consistently meets institutional standards.",
      author: "Legal Consultant",
      org: "Arbitration Support Team (Netherlands)"
    },
    {
      text: "Professional, calm, and extremely accurate. A trusted linguist for sensitive interviews and assessments.",
      author: "Clinical Coordinator",
      org: "Medical Assessment Centre (Ireland)"
    }
  ];

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
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            Institutional Trust & Partnerships
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed font-normal">
            A proven track record with law offices, healthcare providers, and global language service providers. Delivering <span className="text-[#00A3E0] font-bold">accuracy without compromise</span> across Tigrinya and Amharic.
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="mb-10">
                <h2 className="text-2xl font-black text-[#002147] mb-2 uppercase tracking-tight">{cat.title}</h2>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 nav-link">{cat.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.clients.map(client => (
                  <div key={client} className="p-6 bg-slate-50 border border-slate-100 rounded flex items-start gap-4 transition-colors hover:border-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] mt-2 shrink-0"></div>
                    <span className="text-[11px] font-bold text-slate-600 leading-relaxed uppercase tracking-[0.05em] nav-link">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="p-8 bg-[#002147] text-white/60 rounded-xl text-center text-xs font-bold leading-relaxed tracking-wide">
            <p className="italic">Some assignments were delivered via language service providers or under confidentiality agreements. Client names are listed for professional reference purposes.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-4 nav-link">What Clients Say</h2>
            <div className="flex justify-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-12 rounded-xl border border-slate-100 relative">
                <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100/50" />
                <p className="text-lg text-slate-600 mb-10 leading-relaxed italic font-normal">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#002147] uppercase text-sm tracking-[0.05em] nav-link">— {t.author}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest nav-link mt-1">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 italic nav-link">
            Additional references are available upon request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#002147] mb-6 uppercase tracking-tight">Need a Trusted Legal or Medical Linguist?</h2>
          <p className="text-lg text-slate-600 mb-10 font-normal leading-relaxed">
            If you are a legal practice, medical provider, institution, or agency seeking reliable language support in <strong>Tigrinya, Amharic, or English (C2)</strong>, please get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setView(View.CONTACT)} className="btn-primary">Request a Quote</button>
            <a href="https://wa.me/4915560029057" className="btn-whatsapp">WhatsApp Call</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsView;
