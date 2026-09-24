import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  Clock, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenBooking: (doctorId?: string, procedure?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Video Guides', href: '#video-procedures' },
    { label: 'Doctor Availability', href: '#doctors' },
    { label: 'Real Results', href: '#before-after' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0A2558] text-slate-200 text-xs py-2 px-4 border-b border-blue-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_INFO.workingHours.weekdays}</span>
            </span>
            <span className="text-slate-500">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Certified 3D Digital Diagnostic Dental Center</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span>24/7 Dental Emergency Hotline:</span>
            <a 
              href={`tel:${CLINIC_INFO.emergencyPhone}`} 
              className="text-teal-300 font-semibold hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              {CLINIC_INFO.emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3.5' 
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A2558] to-[#0D9488] flex items-center justify-center text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-teal-200" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-extrabold tracking-tight text-[#0A2558] font-display">
                  Smilico
                </span>
                <span className="w-2 h-2 rounded-full bg-teal-500 inline-block mb-1"></span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-slate-700 font-semibold -mt-1">
                Dental &amp; Diagnostic Care
              </p>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0A2558] transition-colors relative py-1 hover:border-b-2 hover:border-teal-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-teal-700 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline">{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0A2558] to-[#0e3a8a] text-white text-xs font-semibold rounded-lg shadow-md shadow-blue-950/20 hover:from-[#081e46] hover:to-[#0a2e6f] active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-2 bg-[#0A2558] text-white text-xs font-semibold rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 mt-3 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-slate-700 hover:text-[#0A2558] py-2 border-b border-slate-100"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  Call Clinic: {CLINIC_INFO.phone}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#0A2558] text-white text-sm font-semibold rounded-lg shadow"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
