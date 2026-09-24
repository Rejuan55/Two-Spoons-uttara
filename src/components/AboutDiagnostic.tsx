import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Heart, 
  Award, 
  CheckCircle,
  Calendar
} from 'lucide-react';
import { DOCTORS } from '../data/dentalData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutDiagnostic: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Diagnostic Suite & Quote Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 aspect-[4/4.5] bg-slate-100">
              <img
                src="/src/assets/images/dental_diagnostic_suite_1790263754722.jpg"
                alt="Smilico modern 3D dental diagnostic suite"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2558]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 text-slate-800">
                <p className="text-xs sm:text-sm font-medium italic text-slate-700">
                  “We deliver safe, comfortable, and reliable dental care for every patient of all ages.”
                </p>
                <div className="mt-2 flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                  <span className="font-semibold text-[#0A2558]">Dr. Michael Carter</span>
                  <span className="text-slate-500">Chief Implantologist</span>
                </div>
              </div>
            </div>

            {/* Accent badge top right */}
            <div className="absolute -top-4 -right-4 bg-teal-600 text-white py-2 px-3.5 rounded-xl shadow-md text-xs font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-teal-200" />
              <span>Certified 3D Center</span>
            </div>
          </div>

          {/* Right Column: Narrative, 4 Key Diagnostics & Doctor Roster */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
              <span>About Smilico Dental Clinic</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-700">Comprehensive Diagnostics</span>
            </div>

            {/* Section Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight leading-tight text-balance">
              Caring for Your Smile with Advanced Expertise &amp; Gentle Compassion
            </h2>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At Smilico, we believe a healthy smile is the bedrock of total body health. Rather than standard reactive treatments, our clinic operates on modern preventive diagnostics. Using 3D cone-beam volumetric imaging and high-frequency ultrasonic scaling, we treat dental conditions before they develop into painful emergencies.
            </p>

            {/* 4 Feature Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0A2558] flex items-center justify-center mb-2.5">
                  <Cpu className="w-4 h-4 text-[#0A2558]" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">3D Digital Radiography</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sub-millimeter tooth &amp; bone accuracy with 80% lower radiation exposure.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2.5">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Ultrasonic Piezo Scaling</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Painless tartar detachment using water-spray cavitation instead of harsh scraping.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Transparent Pricing</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Clear itemized estimates upfront. Direct PPO insurance claim filing.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2.5">
                  <Heart className="w-4 h-4 text-indigo-700" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Gentle &amp; Anxiety-Free</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Noise-dampening clinic environment, topical numbing, and warm compassionate touch.
                </p>
              </div>
            </div>

            {/* Doctors preview row & Booking CTA */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {DOCTORS.slice(0, 3).map((doc) => (
                    <img
                      key={doc.id}
                      src={doc.photo}
                      alt={doc.name}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Expert Medical Team</p>
                  <p className="text-[11px] text-slate-500">Board-certified dental specialists</p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#0A2558] hover:bg-[#081e46] text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-300" />
                <span>Schedule Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
