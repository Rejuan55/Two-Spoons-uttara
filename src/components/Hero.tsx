import React from 'react';
import { ChevronDown, Star, Clock, MapPin, Calendar, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section 
      id="sec1" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0c0b]"
    >
      {/* Background with Dark Atmospheric Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105 opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85')`
        }}
      />
      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/80 via-[#121110]/60 to-[#121110]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#121110]/70 to-[#121110]" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center flex flex-col items-center">
        {/* Subtle Decorative Arch / Half-Circle */}
        <div className="mb-4 flex flex-col items-center">
          <div className="w-16 h-8 border-t-2 border-x-2 border-[#c59d5f]/70 rounded-t-full flex items-center justify-center pt-2">
            <Sparkles className="w-4 h-4 text-[#c59d5f] animate-pulse" />
          </div>
          {/* Gold Separator with Diamond */}
          <div className="flex items-center gap-3 my-3">
            <span className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#c59d5f]" />
            <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]/40" />
            <span className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#c59d5f]" />
          </div>
        </div>

        {/* Location & Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1e1a16]/80 border border-[#c59d5f]/30 text-[#e4dbcd] text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-[#c59d5f]" />
          <span>Gareeb-e-Nawaz Avenue • Sector 13, Uttara</span>
        </div>

        {/* Hero Titles */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#fbf8f3] mb-4 drop-shadow-md">
          Welcome to <span className="text-[#c59d5f] italic font-normal">Two Spoons</span>
        </h1>

        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#d4c8b6] italic tracking-wide font-light mb-8 max-w-2xl">
          “Happiness Begins Here”
        </p>

        {/* Descriptive Tagline */}
        <p className="text-sm md:text-base text-[#a89d8f] max-w-2xl leading-relaxed mb-10">
          A continental kitchen and chocolate cafe serving succulent steaks, baked pasta, 
          crispy waffles, and molten chocolate desserts in Uttara, Dhaka.
        </p>

        {/* Highlights Pills: Google Rating + Hours */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#191714]/80 border border-[#2e2a24] text-[#ece4d8]">
            <div className="flex text-[#ffb800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-white">{RESTAURANT_INFO.googleRating}</span>
            <span className="text-[#8e8477]">({RESTAURANT_INFO.reviewCount} Google reviews)</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#191714]/80 border border-[#2e2a24] text-[#ece4d8]">
            <Clock className="w-4 h-4 text-[#c59d5f]" />
            <span>Open 11:00 AM &ndash; 02:00 AM Daily</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#sec5"
            id="hero-book-table-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#c59d5f] text-[#121110] font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] hover:bg-[#d4af72] hover:shadow-[0_0_25px_rgba(197,157,95,0.4)] transition-all flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Make a Reservation</span>
          </a>

          <a
            href="#sec3"
            id="hero-explore-menu-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm border border-[#c59d5f]/60 text-[#f0e7dc] hover:text-[#121110] hover:bg-[#c59d5f] font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all flex items-center justify-center"
          >
            <span>Explore Menu</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a 
          href="#sec2" 
          id="hero-scroll-link"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-1 text-[#c59d5f] hover:text-white transition-colors group p-2"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#887f73] group-hover:text-[#c59d5f] transition-colors">
            Discover
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
