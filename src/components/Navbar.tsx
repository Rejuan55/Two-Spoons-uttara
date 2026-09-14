import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Utensils, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon, 
  X, 
  Clock, 
  MapPin,
  CalendarCheck
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sec1');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#sec1', id: 'sec1' },
    { name: 'About', href: '#sec2', id: 'sec2' },
    { name: 'Menu', href: '#sec3', id: 'sec3' },
    { name: 'Gallery', href: '#sec4', id: 'sec4' },
    { name: 'Reservation', href: '#sec5', id: 'sec5' },
    { name: 'Contact', href: '#sec6', id: 'sec6' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div id="top-bar" className="bg-[#0b0a09] border-b border-[#25221e] text-xs text-[#a39888] py-2 px-4 md:px-8 transition-colors hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${RESTAURANT_INFO.phoneTel}`} 
              id="top-phone-link"
              className="flex items-center gap-2 hover:text-[#c59d5f] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-[#80776b]">
              <Clock className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>Open Daily: 11:00 AM – 02:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-[#80776b] hidden lg:flex">
              <MapPin className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>Sector 13, Uttara, Dhaka</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#6e665d] text-[11px] uppercase tracking-wider">Connect:</span>
            <a 
              href={RESTAURANT_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              id="top-facebook-link"
              aria-label="Facebook"
              className="hover:text-[#c59d5f] transition-colors p-1"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a 
              href={RESTAURANT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              id="top-instagram-link"
              aria-label="Instagram"
              className="hover:text-[#c59d5f] transition-colors p-1"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href={RESTAURANT_INFO.foodpanda} 
              target="_blank" 
              rel="noopener noreferrer" 
              id="top-foodpanda-link"
              aria-label="Order on Foodpanda"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d61355]/20 text-[#ff4b82] border border-[#d61355]/40 hover:bg-[#d61355] hover:text-white transition-all text-[11px] font-medium ml-2"
            >
              <Utensils className="w-3 h-3" />
              <span>Order Foodpanda</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#121110]/95 backdrop-blur-md shadow-2xl border-b border-[#2a2620] py-3' 
            : 'bg-[#121110]/80 backdrop-blur-sm border-b border-[#25221e]/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo with Two Spoons Motif */}
          <a href="#sec1" id="nav-brand-logo" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#c59d5f]/60 flex items-center justify-center bg-[#1a1714] text-[#c59d5f] shadow-[0_0_15px_rgba(197,157,95,0.15)] group-hover:border-[#c59d5f] group-hover:shadow-[0_0_20px_rgba(197,157,95,0.3)] transition-all">
              {/* Elegant crossed spoons icon */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Utensils className="w-4 h-4 text-[#c59d5f]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.2em] text-lg font-bold text-[#f2ede4] group-hover:text-[#c59d5f] transition-colors leading-tight">
                TWO SPOONS
              </span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#a89d8d] font-medium">
                Uttara • Dhaka
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      id={`nav-link-${link.id}`}
                      className={`text-xs uppercase tracking-[0.16em] font-medium transition-all relative py-1 ${
                        isActive 
                          ? 'text-[#c59d5f]' 
                          : 'text-[#d4cbbe] hover:text-[#c59d5f]'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c59d5f] rounded-full" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Book Table / Order CTA */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="#sec5"
                id="nav-book-btn"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm bg-[#c59d5f] text-[#121110] hover:bg-[#d6af71] transition-all shadow-[0_4px_12px_rgba(197,157,95,0.2)] hover:shadow-[0_6px_16px_rgba(197,157,95,0.35)]"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Table</span>
              </a>
              <a
                href={RESTAURANT_INFO.foodpanda}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-order-btn"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm border border-[#c59d5f]/50 text-[#c59d5f] hover:bg-[#c59d5f]/10 transition-all"
              >
                <span>Order</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={`tel:${RESTAURANT_INFO.phoneTel}`}
              id="mobile-quick-call"
              className="p-2 rounded-full border border-[#c59d5f]/40 text-[#c59d5f]"
              aria-label="Call Two Spoons"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-[#332e27] text-[#e0d6c8] hover:text-[#c59d5f] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="md:hidden bg-[#161412] border-b border-[#2b2721] px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="space-y-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm uppercase tracking-widest font-medium text-[#d9cfc1] hover:text-[#c59d5f] py-1 border-b border-[#221f1a]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#sec5"
                id="mobile-nav-book-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-sm bg-[#c59d5f] text-[#121110] font-semibold text-xs tracking-wider uppercase"
              >
                Make a Reservation
              </a>
              <a
                href={RESTAURANT_INFO.foodpanda}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-foodpanda-btn"
                className="w-full text-center py-2.5 rounded-sm border border-[#c59d5f] text-[#c59d5f] font-semibold text-xs tracking-wider uppercase"
              >
                Order on Foodpanda
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-[#25221d] flex justify-around text-xs text-[#a39786]">
              <a href={`tel:${RESTAURANT_INFO.phoneTel}`} className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
                <span>01304-672621</span>
              </a>
              <a href={RESTAURANT_INFO.facebook} target="_blank" rel="noreferrer" className="hover:text-[#c59d5f]">
                Facebook
              </a>
              <a href={RESTAURANT_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-[#c59d5f]">
                Instagram
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
