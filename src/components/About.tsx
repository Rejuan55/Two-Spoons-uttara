import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Utensils, Star, Compass } from 'lucide-react';

const STORY_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Two Spoons Uttara dining room',
    caption: 'Two Spoons Uttara Dining Room'
  },
  {
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Two Spoons Uttara interior',
    caption: 'Cozy Ambient Interior'
  },
  {
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
    alt: 'Two Spoons Uttara seating',
    caption: 'Intimate Seating & Cafe Corner'
  }
];

const BRANCH_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    alt: 'Continental mains at Two Spoons',
    caption: 'Continental Mains & House Steaks'
  },
  {
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Desserts at Two Spoons',
    caption: 'Warm Molten Desserts & Chocolate'
  },
  {
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    alt: 'Two Spoons Uttara table setting',
    caption: 'Outdoor & Gathering Table Settings'
  }
];

export const About: React.FC = () => {
  const [storyIndex, setStoryIndex] = useState(0);
  const [branchIndex, setBranchIndex] = useState(0);

  const prevStory = () => {
    setStoryIndex((prev) => (prev === 0 ? STORY_SLIDES.length - 1 : prev - 1));
  };
  const nextStory = () => {
    setStoryIndex((prev) => (prev === STORY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevBranch = () => {
    setBranchIndex((prev) => (prev === 0 ? BRANCH_SLIDES.length - 1 : prev - 1));
  };
  const nextBranch = () => {
    setBranchIndex((prev) => (prev === BRANCH_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="sec2" className="bg-[#141210] py-20 border-b border-[#24211d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Discover Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
                <Utensils className="w-3.5 h-3.5" />
                <span>Discover</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5efe6] tracking-tight">
                Our story
              </h2>
              {/* Gold Separator */}
              <div className="flex items-center gap-2 mt-4">
                <span className="w-16 h-[2px] bg-[#c59d5f]" />
                <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
              </div>
            </div>

            <p className="text-[#bfb4a4] leading-relaxed text-base sm:text-lg">
              Two Spoons began in Chittagong as a restaurant and chocolate cafe built around one simple idea &mdash; that a good meal and a good dessert belong in the same place. The response was immediate, and in October the kitchen opened a second home in Dhaka, on Gareeb-e-Nawaz Avenue in Sector 13, Uttara.
            </p>

            <p className="text-[#a69c8e] leading-relaxed text-sm sm:text-base">
              The menu is continental at heart: chicken, beef and fish mains, pizza, pasta, steaks and sharing platters &mdash; followed by the crepes, waffles and chocolate desserts the name was built on. Google diners have rated the Uttara branch 4.3 out of 5 across 231 reviews.
            </p>

            {/* Rating Highlight Pill */}
            <div className="flex items-center gap-4 py-2 text-sm text-[#ddd4c7]">
              <div className="flex items-center text-[#ffb800] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.3 / 5.0</span>
              <span className="text-[#8e8577]">Rated by 231+ Google Diners</span>
            </div>

            <div className="pt-2">
              <a
                href="#sec3"
                id="about-discover-menu-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#c59d5f] text-[#121110] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#d4af72] transition-all shadow-[0_4px_16px_rgba(197,157,95,0.25)]"
              >
                <span>Discover our menu</span>
              </a>
            </div>
          </div>

          {/* Slider Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#2b2721] bg-[#1a1714] shadow-2xl group">
              <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden">
                <img
                  src={STORY_SLIDES[storyIndex].image}
                  alt={STORY_SLIDES[storyIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-80" />
                
                {/* Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-[#dcd2c4] bg-[#121110]/85 backdrop-blur-md px-4 py-2.5 rounded-md border border-[#332e27]">
                  <span className="font-medium tracking-wide">{STORY_SLIDES[storyIndex].caption}</span>
                  <span className="text-[#c59d5f] font-mono text-[11px]">{storyIndex + 1} / {STORY_SLIDES.length}</span>
                </div>
              </div>

              {/* Slider Controls */}
              <button
                type="button"
                onClick={prevStory}
                id="story-slider-prev"
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121110]/80 hover:bg-[#c59d5f] text-white hover:text-[#121110] flex items-center justify-center border border-[#3d372e] transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextStory}
                id="story-slider-next"
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121110]/80 hover:bg-[#c59d5f] text-white hover:text-[#121110] flex items-center justify-center border border-[#3d372e] transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Our Branches (Uttara & Chittagong) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Slider Column (Left) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-[#2b2721] bg-[#1a1714] shadow-2xl group">
              <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden">
                <img
                  src={BRANCH_SLIDES[branchIndex].image}
                  alt={BRANCH_SLIDES[branchIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-80" />
                
                {/* Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-[#dcd2c4] bg-[#121110]/85 backdrop-blur-md px-4 py-2.5 rounded-md border border-[#332e27]">
                  <span className="font-medium tracking-wide">{BRANCH_SLIDES[branchIndex].caption}</span>
                  <span className="text-[#c59d5f] font-mono text-[11px]">{branchIndex + 1} / {BRANCH_SLIDES.length}</span>
                </div>
              </div>

              {/* Slider Controls */}
              <button
                type="button"
                onClick={prevBranch}
                id="branch-slider-prev"
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121110]/80 hover:bg-[#c59d5f] text-white hover:text-[#121110] flex items-center justify-center border border-[#3d372e] transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextBranch}
                id="branch-slider-next"
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121110]/80 hover:bg-[#c59d5f] text-white hover:text-[#121110] flex items-center justify-center border border-[#3d372e] transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Text Column (Right) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Our branches</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5efe6] tracking-tight">
                Uttara &amp; Chittagong
              </h2>
              {/* Gold Separator */}
              <div className="flex items-center gap-2 mt-4">
                <span className="w-16 h-[2px] bg-[#c59d5f]" />
                <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
              </div>
            </div>

            <p className="text-[#bfb4a4] leading-relaxed text-base sm:text-lg">
              The Dhaka branch sits on Plot 38, Gareeb-e-Nawaz Avenue in Sector 13 &mdash; directly opposite Kingfisher, a few minutes from the heart of Uttara. There is outdoor seating for anyone who would rather eat under the open sky, and the kitchen stays on until 2 AM for late dinners and later desserts.
            </p>

            <p className="text-[#a69c8e] leading-relaxed text-sm sm:text-base">
              Our original Chittagong location continues to serve the same menu. Both kitchens run the same recipes, the same hours and the same idea of what a night out should taste like.
            </p>

            {/* Quick Location Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-md bg-[#191714] border border-[#2b2620]">
                <h4 className="text-xs uppercase tracking-wider text-[#c59d5f] font-semibold mb-1">Uttara, Dhaka</h4>
                <p className="text-xs text-[#9d9385]">Plot 38, Gareeb-e-Nawaz Ave, Sector 13 (Opp. Kingfisher)</p>
              </div>
              <div className="p-3.5 rounded-md bg-[#191714] border border-[#2b2620]">
                <h4 className="text-xs uppercase tracking-wider text-[#c59d5f] font-semibold mb-1">Chittagong</h4>
                <p className="text-xs text-[#9d9385]">Our original culinary home &amp; chocolate cafe</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#sec4"
                id="about-view-gallery-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#c59d5f]/60 text-[#f0e8dc] hover:text-[#121110] hover:bg-[#c59d5f] font-semibold text-xs uppercase tracking-[0.18em] transition-all"
              >
                <span>View gallery</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
