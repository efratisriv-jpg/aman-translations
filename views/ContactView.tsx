
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { View } from '../types';

interface ContactViewProps {
  setView: (view: View) => void;
}

const ContactView: React.FC<ContactViewProps> = ({ setView }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // FormSubmit logic is handled via hidden iframe target, this provides UI feedback
    setTimeout(() => {
      setFormSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen text-[#1E293B]">
      <iframe name="hidden_iframe_contact" id="hidden_iframe_contact" style={{ display: 'none' }}></iframe>

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
            <Mail className="w-5 h-5 text-[#00A3E0]" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#00A3E0]">Contact</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter">Get in Touch.</h1>
          <p className="text-xl text-slate-200 leading-relaxed font-medium max-w-2xl">
            Discuss availability, institutional pricing, or project scope. Professional inquiries are prioritized for immediate response.
          </p>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#00A3E0] flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Response time within 30 minutes during business hours.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
             <div className="space-y-10">
               <div>
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Contact Information</h3>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                       <Mail className="w-5 h-5 text-[#002147]" />
                     </div>
                     <div>
                       <div className="text-[11px] font-black text-[#002147] uppercase tracking-tight">Email</div>
                       <a href="mailto:contact@amantranslations.com" className="text-sm font-bold text-slate-600 hover:text-[#00A3E0]">contact@amantranslations.com</a>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                       <Phone className="w-5 h-5 text-emerald-500" />
                     </div>
                     <div>
                       <div className="text-[11px] font-black text-[#002147] uppercase tracking-tight">Phone / WhatsApp</div>
                       <a href="https://wa.me/4915560029057" className="text-sm font-bold text-slate-600 hover:text-[#00A3E0]">+49 155 60029057</a>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                       <MapPin className="w-5 h-5 text-[#002147]" />
                     </div>
                     <div>
                       <div className="text-[11px] font-black text-[#002147] uppercase tracking-tight">Office Location</div>
                       <p className="text-sm font-bold text-slate-600">
                         Lucienvörder Str. 9, 31134 Hildesheim,<br />
                         Niedersachsen, Germany
                       </p>
                     </div>
                   </div>
                 </div>
               </div>

               <div>
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Working Hours</h3>
                 <div className="p-6 bg-slate-50 border border-slate-100 rounded">
                   <div className="text-sm font-extrabold text-[#002147] mb-1 uppercase tracking-tight">Monday – Saturday</div>
                   <div className="text-xl font-black text-[#00A3E0] mb-4 tracking-tighter">08:00 – 18:00 (CET)</div>
                   <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest italic">
                     Outside these hours, urgent requests may be handled subject to availability.
                   </p>
                 </div>
               </div>
             </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-12 rounded-xl shadow-[0_32px_64px_-16px_rgba(0,33,71,0.1)] border border-slate-100">
              {formSubmitted ? (
                <div className="py-24 text-center space-y-8">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#002147] uppercase tracking-tight">Message Delivered</h2>
                  <p className="text-slate-500 leading-relaxed max-w-xs mx-auto text-sm font-medium">
                    Thank you for your inquiry. Your message has been successfully sent to efratisriv@gmail.com.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-12 text-[10px] font-black uppercase tracking-widest text-[#00A3E0] hover:text-[#002147]">New Inquiry</button>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/efratisriv@gmail.com" 
                  method="POST" 
                  target="hidden_iframe_contact"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                       <input name="name" required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded focus:border-[#00A3E0] outline-none font-bold text-sm text-[#002147]" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                       <input name="email" required type="email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded focus:border-[#00A3E0] outline-none font-bold text-sm text-[#002147]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                       <input name="phone" required type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded focus:border-[#00A3E0] outline-none font-bold text-sm text-[#002147]" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Organisation / Institution (optional)</label>
                       <input name="org" type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded focus:border-[#00A3E0] outline-none font-bold text-sm text-[#002147]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                     <textarea name="message" required rows={5} className="w-full bg-slate-50 border border-slate-200 p-4 rounded focus:border-[#00A3E0] outline-none font-bold text-sm text-[#002147] resize-none" placeholder="Please include the language pair, subject matter, date, and format (on-site or remote), if known."></textarea>
                  </div>
                  <div className="pt-6">
                     <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-[#002147] text-white font-black uppercase text-xs tracking-[0.2em] rounded shadow-xl hover:bg-[#00A3E0] transition-all flex items-center justify-center gap-4 disabled:opacity-70"
                     >
                       {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                       {isSubmitting ? 'DISPATCHING...' : 'Send Enquiry'}
                     </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Real Map Implementation */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00A3E0] mb-8 text-center">Location & Office</h2>
          <div className="aspect-video w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-inner">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=31134%20Hildesheim%2C%20Germany&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="Aman Translations Location"
              className="w-full h-full border-none"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="font-extrabold text-[#002147] uppercase text-sm tracking-tight mb-2">Lucienvörder Str. 9, 31134 Hildesheim, Niedersachsen, Germany</p>
            <p className="text-[10px] font-bold uppercase tracking-widest max-w-lg mx-auto px-4 text-slate-500">Available for remote services worldwide (VRI/OPI) and on-site assignments across Germany, the EU/EEA & Switzerland.</p>
          </div>
        </div>
      </section>

      {/* Response & Confidentiality Note */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-100 text-[10px] font-black uppercase tracking-widest mb-10">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Professional Response & Confidentiality
          </div>
          <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase tracking-widest">
            All enquiries are handled with <strong>strict confidentiality</strong>. Information shared via this page is used solely for the purpose of responding to your request.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#002147] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white/80 mb-10 leading-relaxed font-medium">
            For professional legal or medical language support in <strong>Tigrinya, Amharic, or English (C2)</strong>, please get in touch to discuss your requirements.
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

export default ContactView;
