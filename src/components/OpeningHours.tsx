import React from 'react';
import { Clock, Phone, Moon } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const OpeningHours: React.FC = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#0e0d0c] border-b border-[#25221e]">
      {/* Ambient background with warm night lighting */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121110] via-[#121110]/80 to-[#121110]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Header decoration */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-3">
          <Moon className="w-3.5 h-3.5" />
          <span>Late Night Dining</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f2ea] tracking-tight mb-2">
          Opening Hours
        </h2>
        <h3 className="font-serif text-lg sm:text-xl text-[#c59d5f] italic mb-6">
          Open late, every day of the week
        </h3>

        {/* Separator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
          <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
        </div>

        {/* Hours Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Sunday to Thursday */}
          <div className="p-8 rounded-lg bg-[#181613]/90 border border-[#332e27] backdrop-blur-md shadow-xl flex flex-col items-center group hover:border-[#c59d5f]/50 transition-colors">
            <Clock className="w-6 h-6 text-[#c59d5f] mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-serif text-xl font-bold text-[#f5efe5] mb-2 tracking-wide">
              Sunday to Thursday
            </h4>
            <div className="text-3xl font-display font-bold text-[#c59d5f] tracking-wider my-1">
              11:00 <span className="text-base text-[#9d9283] font-normal font-sans">AM</span> &ndash; 02:00 <span className="text-base text-[#9d9283] font-normal font-sans">AM</span>
            </div>
            <p className="text-xs text-[#8c8273] uppercase tracking-wider mt-2">
              Full Kitchen &amp; Dessert Counter
            </p>
          </div>

          {/* Friday & Saturday */}
          <div className="p-8 rounded-lg bg-[#181613]/90 border border-[#332e27] backdrop-blur-md shadow-xl flex flex-col items-center group hover:border-[#c59d5f]/50 transition-colors">
            <Clock className="w-6 h-6 text-[#c59d5f] mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-serif text-xl font-bold text-[#f5efe5] mb-2 tracking-wide">
              Friday &amp; Saturday
            </h4>
            <div className="text-3xl font-display font-bold text-[#c59d5f] tracking-wider my-1">
              11:00 <span className="text-base text-[#9d9283] font-normal font-sans">AM</span> &ndash; 02:00 <span className="text-base text-[#9d9283] font-normal font-sans">AM</span>
            </div>
            <p className="text-xs text-[#8c8273] uppercase tracking-wider mt-2">
              Weekend Late Night Dinners
            </p>
          </div>
        </div>

        {/* Big Phone Number Callout */}
        <div className="inline-block">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8e8477] mb-2 font-medium">
            Direct Reservations &amp; Inquiries
          </p>
          <a
            href={`tel:${RESTAURANT_INFO.phoneTel}`}
            id="opening-hours-phone-call"
            className="group inline-flex items-center gap-4 text-2xl sm:text-4xl md:text-5xl font-display font-bold text-[#f7f2ea] hover:text-[#c59d5f] transition-all tracking-wider px-6 py-3 rounded-full bg-[#1e1b17]/80 border border-[#383229] hover:border-[#c59d5f]/80 shadow-2xl"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c59d5f] text-[#121110] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <span>{RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
