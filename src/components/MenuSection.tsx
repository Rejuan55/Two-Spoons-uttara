import React, { useState } from 'react';
import { Utensils, Sparkles, ExternalLink, Camera } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';
import { ImageLightboxModal } from './ImageLightboxModal';

interface MenuSectionProps {
  selectedCategoryTab?: 'all' | 'mains' | 'soups-salads' | 'chocolate-cafe';
  setSelectedCategoryTab?: (tab: 'all' | 'mains' | 'soups-salads' | 'chocolate-cafe') => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategoryTab = 'all',
  setSelectedCategoryTab,
}) => {
  const [internalTab, setInternalTab] = useState<'all' | 'mains' | 'soups-salads' | 'chocolate-cafe'>('all');
  const activeTab = setSelectedCategoryTab ? selectedCategoryTab : internalTab;
  const setActiveTab = setSelectedCategoryTab || setInternalTab;

  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null);

  const mainsItems = MENU_ITEMS.filter((i) => i.category === 'mains');
  const soupsItems = MENU_ITEMS.filter((i) => i.category === 'soups-salads');
  const chocolateItems = MENU_ITEMS.filter((i) => i.category === 'chocolate-cafe');

  const renderItemGroup = (items: MenuItem[], groupTitle: string, groupSubtitle: string) => {
    return (
      <div className="mb-16">
        {/* Section title */}
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f5efe6] mb-1">
            {groupTitle}
          </h3>
          <h4 className="font-serif text-sm sm:text-base text-[#c59d5f] italic">
            {groupSubtitle}
          </h4>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-12 h-[1px] bg-[#c59d5f]/60" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
            <span className="w-12 h-[1px] bg-[#c59d5f]/60" />
          </div>
        </div>

        {/* Two-column menu layout with dotted leaders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {items.map((item) => (
            <div 
              key={item.id}
              className="group p-3 rounded-md hover:bg-[#1c1916]/50 transition-all cursor-pointer border border-transparent hover:border-[#2e2a23]"
              onClick={() => setPreviewItem(item)}
            >
              {/* Header row: Name + Badge + Dotted leader + Photo Icon */}
              <div className="flex items-baseline justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#f7f2ea] group-hover:text-[#c59d5f] transition-colors">
                    {item.name}
                  </span>
                  {item.isGuestFavorite && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c59d5f]/20 text-[#e6b876] border border-[#c59d5f]/40 text-[10px] uppercase tracking-wider font-semibold">
                      <Sparkles className="w-2.5 h-2.5" />
                      Guest favourite
                    </span>
                  )}
                </div>

                {/* Dotted connector */}
                <span className="menu-item-dot hidden sm:block" />

                <div className="flex items-center gap-1 text-[#8f8373] group-hover:text-[#c59d5f] text-xs transition-colors shrink-0">
                  <Camera className="w-3.5 h-3.5" />
                  <span className="text-[11px] uppercase tracking-wider hidden sm:inline">Photo</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#9f9382] mt-1.5 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="sec3" className="py-24 px-4 bg-[#121110] border-b border-[#24211d]">
      <div className="max-w-7xl mx-auto">
        {/* Parallax Hero Banner for Menu */}
        <div className="relative rounded-xl overflow-hidden mb-16 p-8 sm:p-14 text-center border border-[#2b2721] bg-[#1a1714]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/80 to-[#121110]/90" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
              <Utensils className="w-3.5 h-3.5" />
              <span>Continental &amp; Dessert</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf7f0] mb-2 tracking-tight">
              Our menu
            </h2>
            <h3 className="font-serif text-base sm:text-xl text-[#c59d5f] italic mb-6">
              Menu highlights from the Uttara kitchen
            </h3>
            <div className="flex items-center justify-center gap-2">
              <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
              <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
              <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
          <button
            type="button"
            id="menu-filter-all"
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all border ${
              activeTab === 'all'
                ? 'bg-[#c59d5f] text-[#121110] border-[#c59d5f]'
                : 'bg-[#181614] text-[#a99e8f] border-[#2e2a23] hover:border-[#c59d5f]/50'
            }`}
          >
            All Items
          </button>
          <button
            type="button"
            id="menu-filter-mains"
            onClick={() => setActiveTab('mains')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all border ${
              activeTab === 'mains'
                ? 'bg-[#c59d5f] text-[#121110] border-[#c59d5f]'
                : 'bg-[#181614] text-[#a99e8f] border-[#2e2a23] hover:border-[#c59d5f]/50'
            }`}
          >
            Mains (Steaks, Fish, Burgers &amp; Pasta)
          </button>
          <button
            type="button"
            id="menu-filter-soups"
            onClick={() => setActiveTab('soups-salads')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all border ${
              activeTab === 'soups-salads'
                ? 'bg-[#c59d5f] text-[#121110] border-[#c59d5f]'
                : 'bg-[#181614] text-[#a99e8f] border-[#2e2a23] hover:border-[#c59d5f]/50'
            }`}
          >
            Soups &amp; Salads
          </button>
          <button
            type="button"
            id="menu-filter-chocolate"
            onClick={() => setActiveTab('chocolate-cafe')}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all border ${
              activeTab === 'chocolate-cafe'
                ? 'bg-[#c59d5f] text-[#121110] border-[#c59d5f]'
                : 'bg-[#181614] text-[#a99e8f] border-[#2e2a23] hover:border-[#c59d5f]/50'
            }`}
          >
            The Chocolate Cafe
          </button>
        </div>

        {/* Menu Listings */}
        <div className="max-w-5xl mx-auto">
          {(activeTab === 'all' || activeTab === 'mains') &&
            renderItemGroup(mainsItems, 'Mains', 'Chicken, beef and fish')}

          {(activeTab === 'all' || activeTab === 'soups-salads') &&
            renderItemGroup(soupsItems, 'Soups & Salads', 'To start, or to keep it light')}

          {(activeTab === 'all' || activeTab === 'chocolate-cafe') &&
            renderItemGroup(chocolateItems, 'The Chocolate Cafe', 'Desserts, crepes and shakes')}
        </div>

        {/* Foodpanda Note & CTA */}
        <div className="mt-8 text-center bg-[#171513] border border-[#2b2721] p-8 rounded-lg max-w-3xl mx-auto shadow-lg">
          <p className="text-[#a99e90] text-sm sm:text-base leading-relaxed mb-6">
            Menu highlights as listed on Google. For the full list and current prices, see the live menu on foodpanda or call the restaurant.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={RESTAURANT_INFO.foodpanda}
              target="_blank"
              rel="noopener noreferrer"
              id="menu-foodpanda-full-link"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-sm bg-[#d61355] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#b00e45] transition-all shadow-[0_4px_16px_rgba(214,19,85,0.3)]"
            >
              <span>View the full menu on Foodpanda</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phoneTel}`}
              id="menu-phone-inquiry-link"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#c59d5f]/60 text-[#f0e8dc] hover:text-[#121110] hover:bg-[#c59d5f] font-semibold text-xs uppercase tracking-[0.18em] transition-all"
            >
              <span>Call 01304-672621</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox for clicked dish */}
      <ImageLightboxModal
        isOpen={Boolean(previewItem)}
        onClose={() => setPreviewItem(null)}
        image={previewItem?.image || ''}
        title={previewItem?.name || ''}
        subtitle={previewItem?.description}
      />
    </section>
  );
};
