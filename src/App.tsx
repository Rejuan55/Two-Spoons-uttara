import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OpeningHours } from './components/OpeningHours';
import { GoodToKnow } from './components/GoodToKnow';
import { WhatWeServe } from './components/WhatWeServe';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<
    'all' | 'mains' | 'soups-salads' | 'chocolate-cafe'
  >('all');

  const handleSelectCategory = (category: 'all' | 'mains' | 'soups-salads' | 'chocolate-cafe') => {
    setSelectedCategoryTab(category);
    const menuEl = document.getElementById('sec3');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#ded8d0] flex flex-col">
      {/* Top Header & Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Discover Our Story & Our Branches */}
        <About />

        {/* Opening Hours Highlight */}
        <OpeningHours />

        {/* Good To Know / Visitor Guide */}
        <GoodToKnow />

        {/* What We Serve / 4 Pillars */}
        <WhatWeServe onSelectCategory={handleSelectCategory} />

        {/* Section 3: Our Menu */}
        <MenuSection 
          selectedCategoryTab={selectedCategoryTab} 
          setSelectedCategoryTab={setSelectedCategoryTab} 
        />

        {/* Section 4: Our Gallery */}
        <GallerySection />

        {/* Section 5: Reservation */}
        <ReservationSection />

        {/* Diner Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Section 6: Contact & Google Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
