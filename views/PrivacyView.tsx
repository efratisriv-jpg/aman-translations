
import React from 'react';
import { View } from '../types';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyViewProps {
  setView: (view: View) => void;
}

const PrivacyView: React.FC<PrivacyViewProps> = ({ setView }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative py-24 px-6 md:px-12 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <button 
            onClick={() => setView(View.HOME)} 
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#00A3E0] mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-[#00A3E0]" />
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Privacy Policy</h1>
          </div>
          <p className="text-lg text-slate-300 font-medium max-w-2xl">
            Transparency and confidentiality are fundamental to my professional translation and interpreting practice.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-[#002147] font-black uppercase tracking-tight text-2xl mb-8">1. General Information</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our data protection declaration listed below this text.
          </p>

          <h2 className="text-[#002147] font-black uppercase tracking-tight text-2xl mb-8">2. Data Collection on This Website</h2>
          <h3 className="text-[#002147] font-bold text-lg mb-4">How do we collect your data?</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Your data is collected on the one hand by the fact that you communicate it to us. This can be, for example, data that you enter in a contact form. Other data is collected automatically or after your consent when visiting the website by our IT systems (e.g., Internet browser, operating system or time of page call).
          </p>

          <h3 className="text-[#002147] font-bold text-lg mb-4">What do we use your data for?</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Part of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior. Primarily, data from contact forms is used to generate quotes and respond to your service inquiries.
          </p>

          <h2 className="text-[#002147] font-black uppercase tracking-tight text-2xl mb-8">3. Professional Confidentiality</h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            As a professional interpreter and translator, I am bound by strict professional confidentiality. Any documents provided for translation or information disclosed during interpreting assignments are handled with the highest degree of secrecy and are not shared with third parties unless required by law or specifically authorized by the client.
          </p>

          <h2 className="text-[#002147] font-black uppercase tracking-tight text-2xl mb-8">4. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            You have the right at any time to receive information free of charge about the origin, recipient, and purpose of your stored personal data. You also have a right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future.
          </p>

          <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl mt-12">
            <h3 className="text-[#002147] font-black uppercase tracking-tight text-sm mb-4">Contact for Data Protection</h3>
            <p className="text-sm font-medium text-slate-600">
              Aman Baryahannes<br />
              Lucienvörder Str. 9<br />
              31134 Hildesheim, Germany<br />
              Email: contact@amantranslations.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyView;
