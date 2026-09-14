import React from 'react';
import { Calendar, Info, Clock, Users, SunMedium, Moon } from 'lucide-react';
import { GOOD_TO_KNOW } from '../data/restaurantData';

const ICONS = [Clock, Users, SunMedium, Moon];

export const GoodToKnow: React.FC = () => {
  return (
    <section className="relative py-24 px-4 bg-[#11100f] border-b border-[#24211d] overflow-hidden">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#11100f] via-[#11100f]/85 to-[#11100f]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header decoration */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
          <Info className="w-3.5 h-3.5" />
          <span>Visitor Guide</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f3eb] tracking-tight mb-2">
          Good To Know
        </h2>
        <h3 className="font-serif text-lg sm:text-xl text-[#c59d5f] italic mb-6">
          Planning your visit to Sector 13
        </h3>

        {/* Separator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
          <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
        </div>

        {/* List of Good to Know Items with dotted leaders */}
        <div className="space-y-4 text-left max-w-3xl mx-auto mb-12">
          {GOOD_TO_KNOW.map((item, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            return (
              <div 
                key={item.id}
                className="p-5 sm:p-6 rounded-lg bg-[#181614]/90 border border-[#2c2822] hover:border-[#c59d5f]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#201d19] border border-[#38332a] flex items-center justify-center text-[#c59d5f] group-hover:border-[#c59d5f] transition-colors shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#f5efe5] group-hover:text-[#c59d5f] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-xs uppercase tracking-wider text-[#9f9485] font-medium">
                        ({item.timeframe})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dotted line leader for desktop */}
                <div className="hidden sm:block flex-1 border-b border-dotted border-[#3d372e] mx-4 self-center" />

                <div className="text-sm text-[#b8ad9d] font-normal sm:text-right shrink-0">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Book table CTA */}
        <div>
          <a
            href="#sec5"
            id="good-to-know-book-btn"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#c59d5f] text-[#121110] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#d4af72] transition-all shadow-[0_4px_16px_rgba(197,157,95,0.25)]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a table</span>
          </a>
        </div>
      </div>
    </section>
  );
};
