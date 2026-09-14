import React, { useState } from 'react';
import { ArrowUp, Utensils, Facebook, Instagram, Phone, Mail, CheckCircle2, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0a09] text-[#a49988] border-t border-[#221e1a] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#201c18]">
          {/* Column 1: About Two Spoons */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#c59d5f]/60 flex items-center justify-center bg-[#181512] text-[#c59d5f]">
                <Utensils className="w-3.5 h-3.5" />
              </div>
              <span className="font-display tracking-[0.2em] text-lg font-bold text-[#f2ece2]">
                TWO SPOONS
              </span>
            </div>

            <p className="text-sm text-[#958a7b] leading-relaxed">
              Two Spoons began in Chittagong and opened in Uttara, Dhaka in October. A continental kitchen and chocolate cafe on Gareeb-e-Nawaz Avenue, open 11 AM to 2 AM every day.
            </p>

            <div className="pt-2 text-xs text-[#7d7365]">
              <span className="text-[#c59d5f] font-semibold">Uttara Dhaka:</span> Plot 38, Gareeb-e-Nawaz Ave, Sector 13
            </div>
          </div>

          {/* Column 2: Find Us & Social */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#f5efe5] tracking-wide">
              Find Us
            </h4>

            <p className="text-sm text-[#958a7b]">
              Follow Two Spoons online, order direct to your door, or call ahead for a table in Sector 13.
            </p>

            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneTel}`}
                  className="flex items-center gap-2 hover:text-[#c59d5f] transition-colors py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
                  <span>Call: {RESTAURANT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#c59d5f] transition-colors py-1"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#c59d5f]" />
                  <span>Facebook (Uttara)</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#c59d5f] transition-colors py-1"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#c59d5f]" />
                  <span>Instagram (@twospoons.dhk)</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.foodpanda}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#ff4b82] hover:underline font-medium py-1"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Order on Foodpanda</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#f5efe5] tracking-wide">
              Seasonal Specials
            </h4>

            <p className="text-sm text-[#958a7b]">
              Want to hear about seasonal dishes and chocolate cafe specials? Leave your email below.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-md bg-[#181613] border border-[#c59d5f]/50 flex items-center gap-2 text-xs text-[#c59d5f]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! You are on our VIP list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#6e6457] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-sm bg-[#171412] border border-[#302b23] text-white placeholder-[#685e50] focus:border-[#c59d5f] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  id="footer-subscribe-btn"
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm bg-[#c59d5f] text-[#121110] hover:bg-[#d4af72] transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#70675a]">
          <div>
            &copy; Two Spoons {new Date().getFullYear()} . All rights reserved. &bull; Uttara, Dhaka
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#c59d5f] fill-current" />
            <span>for continental cuisine &amp; chocolate lovers</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            id="footer-back-to-top"
            aria-label="Back to top of page"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a89d8d] hover:text-[#c59d5f] transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
