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
      subtitle: '(Direct contracts, legal practices, arbitration teams, consular services)',
      clients: [
        'KATA Group (contract)',
        'DACBeachcroft (contract)',
        'Cairn Legal (legal support)',
        'Theunissen Law Firm (legal support)',
        'Downtown Legal Services (legal support)',
        'Beacon Law Group (legal support)',
        'Fisher & Co Solicitors (legal support)',
        'Wilsons Solicitors (legal support)',
        'International investment arbitration case teams (The Hague, Netherlands)',
        'Consular visa support offices (international) — legal & administrative'
      ]
    },
    {
      title: 'Medical & Healthcare Clients',
      subtitle: '(Clinics, health authorities, medical assessment centres)',
      clients: [
        'Medreview (medical)',
        'Fraser health',
        'St. John\'s Hospice (medical)',
        'Clinique Saint-Jean (medical)',
        'Clinique Privée Dr. Bohler (medical)',
        'Bridgepoint Active Healthcare (medical)',
        'Fenway Health (medical)',
        'Community Health Center of Cape Cod (medical)',
        'Mildmay Hospital (medical)',
        'Sherbourne Health (medical)',
        'Clearview psychological assessment centre (psychological assessments)',
        'Oakwood medical assessment services (medical reporting)',
        'BridgeCare community health services (public health)',
        'Independent medical reporting providers (clinical documentation)'
      ]
    },
    {
      title: 'Corporate & Commercial Clients',
      subtitle: '(Direct business contracts and commercial entities)',
      clients: [
        'GT World of Beauty GmbH'
      ]
    },
    {
      title: 'Language Service Providers',
      subtitle: '(Professional Translation & Interpreting Agencies)',
      clients: [
        'Lionbridge',
        'Alpha CRC',
        'Swisstranslate',
        'BURG Translation',
        'Idiomatic Translations',
        'Toppan Digital Language Ltd',
        'Kajf Translation',
        'Transand',
        'Untranslate',
        'Absolute Translations Ltd',
        'Knockhundred Translations Ltd',
        'Dialektikus Plus KIG',
        'Polyglot tulkojumi',
        'MPS Globalisation Services',
        'Bond Enterprise Language Services',
        'Innovative Humans Limited',
        'EN Translation',
        'Dray Translations Ltd',
        'RixTrans Translation Services',
        'Nations Translation Group',
        'Simpson Soft UK',
        'RFSL Stockholm',
        'Language Power International AS',
        'Stepes Translation Services',
        'INGCO International',
        'Boostlingo',
        'Total Language',
        'Be Moore Interpreting Services',
        'Semantix',
        'Originalarn – translations & DTP',
        'Global Voices Ltd',
        'A2Z Language Hub',
        'Smartlingo'
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
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
            Institutional Trust & Partnerships
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed font-normal">
            A proven track record with law offices, healthcare providers, and global language service providers. Delivering <span className="text-[#00A3E0] font-bold">accuracy without compromise</span> across Tigrinya, Amharic, and English.
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
                    <span className="text-[13px] font-bold text-slate-600 leading-relaxed tracking-tight">{client}</span>
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