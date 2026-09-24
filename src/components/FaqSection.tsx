import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/dentalData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
                <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
                <span>Patient Questions</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-700">Clinical Advice</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
                Everything You Need to Know About Us
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed text-balance">
                Have questions before your visit? Here are detailed answers regarding teeth scaling, dental implants, insurance, and doctor availability.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 text-xs">
              <p className="font-bold text-slate-900 text-sm">Still have questions?</p>
              <p className="text-slate-500">
                Our clinical coordinator is available to answer any questions about treatments, fees, or insurance.
              </p>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center gap-2.5 text-slate-800 hover:text-teal-700 font-semibold transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>{CLINIC_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="flex items-center gap-2.5 text-slate-800 hover:text-teal-700 font-semibold transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0A2558] flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span>{CLINIC_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#0A2558] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
