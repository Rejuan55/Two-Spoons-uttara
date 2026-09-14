import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS, RESTAURANT_INFO } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 px-4 bg-[#141210] border-b border-[#24211d] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header decoration */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
          <MessageSquareHeart className="w-3.5 h-3.5" />
          <span>Guest Experiences</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f7f2ea] tracking-tight mb-2">
          What Diners Say
        </h2>

        {/* Overall rating pill */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="flex text-[#ffb800]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-semibold text-white text-sm">{RESTAURANT_INFO.googleRating} out of 5.0</span>
          <span className="text-[#8e8477] text-xs">({RESTAURANT_INFO.reviewCount} verified reviews)</span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
          <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
          <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
        </div>

        {/* Testimonial Display Card */}
        <div className="relative p-8 sm:p-14 rounded-xl bg-[#1a1714] border border-[#2e2a23] shadow-2xl mb-8">
          <Quote className="w-10 h-10 text-[#c59d5f]/30 mx-auto mb-6" />

          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#f3ece2] italic leading-relaxed mb-6">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-1 text-[#ffb800] mb-3">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <h4 className="font-serif text-lg font-bold text-[#c59d5f] tracking-wide">
            {current.author}
          </h4>
          <span className="text-xs text-[#7e7364] tracking-wider uppercase">
            {current.source}
          </span>

          {/* Nav buttons */}
          <button
            type="button"
            onClick={prevReview}
            id="testimonial-prev-btn"
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121110] hover:bg-[#c59d5f] text-white hover:text-[#121110] flex items-center justify-center border border-[#383229] transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextReview}
            id="testimonial-next-btn"
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121110] hover:bg-[#c59d5f] text-white hover:text-[#121110] flex items-center justify-center border border-[#383229] transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-1.5 transition-all rounded-full ${
                idx === currentIndex ? 'w-8 bg-[#c59d5f]' : 'w-2 bg-[#332e27] hover:bg-[#5c5447]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
