import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Visit Smilico Clinic</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-700">Central Austin, Texas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
            Convenient Location &amp; Prompt Care
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed text-balance">
            Located conveniently on Maple Avenue with dedicated patient parking and wheelchair accessibility. Reach out to our front desk team anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold text-[#0A2558]">Clinic Contact Details</h3>
              
              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-start gap-3 text-slate-700 hover:text-teal-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Clinic Front Desk</span>
                    <span>{CLINIC_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.emergencyPhone}`}
                  className="flex items-start gap-3 text-slate-700 hover:text-teal-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">24/7 Dental Emergency</span>
                    <span className="text-red-600 font-bold">{CLINIC_INFO.emergencyPhone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-start gap-3 text-slate-700 hover:text-teal-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0A2558] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Email Inquiries</span>
                    <span>{CLINIC_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-900">Clinic Address</span>
                    <span>{CLINIC_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Working Hours</span>
              </div>
              <div className="pt-2 border-t border-slate-200 space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-bold text-slate-900">8:00 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold text-slate-900">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between text-teal-800 font-semibold">
                  <span>Sunday:</span>
                  <span>Emergency On-Call Only</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Send Quick Question / Request Call Form */}
          <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
            <div>
              <h3 className="text-base font-bold text-[#0A2558]">Have a Question or Need a Callback?</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details below and our dental clinical coordinator will reply within 30 minutes during clinic hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 animate-fadeIn">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-emerald-900">Message Received!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out, {name}. Our clinic manager will call or message your phone at {phone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (512) ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">How can we assist you?</label>
                  <textarea
                    rows={3}
                    placeholder="Ask about teeth cleaning, aligner pricing, scaling sensitivity, or appointment availability..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0A2558] hover:bg-[#081e46] text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Clinic</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
