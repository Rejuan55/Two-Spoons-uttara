import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  HeartHandshake, 
  Award, 
  CheckCircle,
  Calendar,
  Sparkles
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Why Choose Smilico</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-700">Clinical Integrity &amp; Comfort</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight leading-tight text-balance">
              Expert Dental Diagnostic Care You Can Trust for a Healthier Smile
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We eliminate dental anxiety by replacing outdated noisy tools with tranquil, gentle ultrasonic procedures, digital 3D scans, and upfront transparent fees.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A2558] flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-[#0A2558]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Advanced 3D Technology</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Ultra low-dose CBCT tomography and intraoral optical scanners ensure exact diagnosis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Pain-Free Dentistry</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Topical comfort gels and gentle water-cavitation scaling eliminate dental discomfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Board-Certified Specialists</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Dedicated orthodontists, implantologists, and periodontists under one coordinated roof.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Long-Term Warranty</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Comprehensive multi-year warranty on dental crowns, veneers, and implant restorations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#0A2558] hover:bg-[#081e46] text-white text-xs font-semibold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book Your Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Feature Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/4.5] bg-slate-100">
              <img
                src="/src/assets/images/dental_braces_aligners_1790263743431.jpg"
                alt="Smilico modern clear aligner diagnostics"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2558]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-100">
                <div className="flex items-center gap-2 text-teal-700 text-xs font-bold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Personalized Care Plan</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every patient receives a detailed digital treatment breakdown with complete 3D visualization and zero hidden costs.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
