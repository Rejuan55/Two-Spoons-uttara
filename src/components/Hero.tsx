import React from 'react';
import { 
  Play, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  HeartHandshake 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenStoryVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenStoryVideo }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker - Clean unboxed typography per design constitution */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Healthy Smiles Start Here</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-700">Digital 3D Diagnostic Dental Care</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2558] font-display tracking-tight leading-[1.15] text-balance">
              Dedicated to Delivering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2558] via-teal-700 to-teal-900">
                Gentle &amp; Reliable
              </span>{' '}
              Dental Treatments
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              We combine ultra low-radiation 3D diagnostic technology with compassionate, gentle dentistry. Experience pain-free teeth scaling, aesthetic aligners, single-visit implants, and lifetime oral wellness.
            </p>

            {/* Key Diagnostic Proof Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Painless ultrasonic teeth scaling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>3D CBCT digital bone &amp; nerve scan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Real-time doctor schedule booking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Transparent pricing, no surprises</span>
              </div>
            </div>

            {/* CTAs & Video Story */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#0A2558] text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-900/25 hover:bg-[#081e46] active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book Doctor Appointment</span>
              </button>

              <button
                onClick={onOpenStoryVideo}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 bg-white/90 hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all group shadow-sm cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-md shadow-teal-500/30 group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span className="text-slate-800 group-hover:text-[#0A2558]">Watch Clinic Story</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 text-sm">4.96/5</span>
                <span className="text-slate-700">(850+ Verified Reviews)</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-teal-700" />
                <span>99.4% Pain-Free Satisfaction</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Diagnostic Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image with rounded container & soft shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/15 border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[4/5]">
                <img
                  src="/src/assets/images/hero_dentist_patient_1790263719277.jpg"
                  alt="Friendly dentist in modern clinic consulting with happy patient"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if asset missing
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Visual Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2558]/50 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle tag inside media */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                  <p className="font-semibold text-white">Diagnostic Precision &amp; Painless Care</p>
                  <p className="text-slate-200 text-[11px] truncate">
                    High-resolution digital imaging &amp; gentle water-spray scaling
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: 58,900+ Treatments */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 font-display">58,900+</p>
                  <p className="text-[11px] text-slate-500 font-medium">Successful Treatments</p>
                </div>
              </div>

              {/* Floating Badge 2: Doctor Available Today */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A2558] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#0A2558]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="text-xs font-bold text-slate-900">4 Specialists Available</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Same-Day Diagnostic Slots</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
