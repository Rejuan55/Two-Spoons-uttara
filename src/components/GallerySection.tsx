import React, { useState } from 'react';
import { Camera, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { ImageLightboxModal } from './ImageLightboxModal';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'food' | 'restaurant'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const currentItem = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="sec4" className="py-24 px-4 bg-[#141210] border-b border-[#24211d]">
      <div className="max-w-7xl mx-auto">
        {/* Parallax Header Banner */}
        <div className="relative rounded-xl overflow-hidden mb-16 p-8 sm:p-14 text-center border border-[#2b2721] bg-[#1a1714]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/80 to-[#141210]/90" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Atmosphere &amp; Plates</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf7f0] mb-2 tracking-tight">
              Our gallery
            </h2>
            <h3 className="font-serif text-base sm:text-xl text-[#c59d5f] italic mb-6">
              Inside Two Spoons Uttara
            </h3>
            <div className="flex items-center justify-center gap-2">
              <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
              <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
              <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            type="button"
            id="gallery-filter-all"
            onClick={() => {
              setActiveFilter('all');
              setSelectedPhotoIndex(null);
            }}
            className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all border ${
              activeFilter === 'all'
                ? 'bg-[#c59d5f] text-[#121110] border-[#c59d5f]'
                : 'bg-[#181614] text-[#a99e8f] border-[#2e2a23] hover:border-[#c59d5f]/50'
            }`}
          >
            All ({GALLERY_ITEMS.length})
          </button>
          <button
            type="button"
            id="gallery-filter-food"
            onClick={() => {
              setActiveFilter('food');
              setSelectedPhotoIndex(null);
            }}
            className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all border ${
              activeFilter === 'food'
                ? 'bg-[#c59d5f] text-[#121110] border-[#c59d5f]'
                : 'bg-[#181614] text-[#a99e8f] border-[#2e2a23] hover:border-[#c59d5f]/50'
            }`}
          >
            Food
          </button>
          <button
            type="button"
            id="gallery-filter-restaurant"
            onClick={() => {
              setActiveFilter('restaurant');
              setSelectedPhotoIndex(null);
            }}
            className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all border ${
              activeFilter === 'restaurant'
                ? 'bg-[#c59d5f] text-[#121110] border-[#c59d5f]'
                : 'bg-[#181614] text-[#a99e8f] border-[#2e2a23] hover:border-[#c59d5f]/50'
            }`}
          >
            Restaurant
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative rounded-lg overflow-hidden border border-[#2d2822] bg-[#1a1714] h-[280px] shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with search icon & title on hover */}
              <div className="absolute inset-0 bg-[#121110]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#c59d5f] text-[#121110] flex items-center justify-center mb-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  <Search className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#f5efe5] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#c59d5f] uppercase tracking-wider font-semibold">
                  Two Spoons Uttara
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <ImageLightboxModal
          isOpen={Boolean(currentItem)}
          onClose={() => setSelectedPhotoIndex(null)}
          image={currentItem.image}
          title={currentItem.title}
          subtitle={currentItem.caption}
          hasPrev={filteredItems.length > 1}
          hasNext={filteredItems.length > 1}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
