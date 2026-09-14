import React from 'react';
import { UtensilsCrossed, ArrowRight } from 'lucide-react';

interface WhatWeServeProps {
  onSelectCategory?: (category: 'all' | 'mains' | 'soups-salads' | 'chocolate-cafe') => void;
}

const CATEGORIES = [
  {
    id: 'mains',
    title: 'Steaks & Platters',
    subtitle: 'Chicken, beef and fish meals',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    categoryKey: 'mains' as const,
  },
  {
    id: 'pizza-pasta',
    title: 'Pizza & Pasta',
    subtitle: 'Oven baked, made to order',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    categoryKey: 'mains' as const,
  },
  {
    id: 'soups-salads',
    title: 'Soups & Salads',
    subtitle: 'Lighter plates and starters',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    categoryKey: 'soups-salads' as const,
  },
  {
    id: 'chocolate-cafe',
    title: 'The Chocolate Cafe',
    subtitle: 'Crepes, waffles and desserts',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
    categoryKey: 'chocolate-cafe' as const,
  },
];

export const WhatWeServe: React.FC<WhatWeServeProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-24 px-4 bg-[#141210] border-b border-[#24211d]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header decoration */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Our Specialties</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f3eb] tracking-tight mb-2">
          What We Serve
        </h2>
        <h3 className="font-serif text-lg sm:text-xl text-[#c59d5f] italic mb-4">
          A continental kitchen and a chocolate counter
        </h3>

        {/* Description */}
        <p className="text-[#a99e90] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
          Four things we cook every day, from the first order at eleven in the morning to the last one at two the next.
        </p>

        {/* Separator */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
          <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#sec3"
              id={`what-we-serve-${cat.id}`}
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(cat.categoryKey);
                }
              }}
              className="group relative rounded-lg overflow-hidden border border-[#2d2822] bg-[#1a1714] flex flex-col h-[380px] shadow-xl hover:border-[#c59d5f] transition-all duration-300"
            >
              {/* Image with zoom effect */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-transparent to-transparent opacity-90" />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#121110]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#c59d5f] text-[#121110] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <span>See Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Title & subtitle info */}
              <div className="p-5 flex-1 flex flex-col justify-center text-center">
                <h4 className="font-serif text-xl font-bold text-[#f5efe5] group-hover:text-[#c59d5f] transition-colors mb-1">
                  {cat.title}
                </h4>
                <p className="text-xs text-[#a09586]">
                  {cat.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
