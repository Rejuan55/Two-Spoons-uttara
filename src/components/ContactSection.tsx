import React, { useState } from 'react';
import { MapPin, Phone, Globe, Clock, Send, CheckCircle2, Facebook, Instagram, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="sec6" className="py-24 px-4 bg-[#121110] border-b border-[#24211d]">
      <div className="max-w-7xl mx-auto">
        {/* Parallax Header Banner */}
        <div className="relative rounded-xl overflow-hidden mb-16 p-8 sm:p-14 text-center border border-[#2b2721] bg-[#1a1714]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/80 to-[#121110]/90" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location &amp; Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#fbf7f0] mb-2 tracking-tight">
              Our contacts
            </h2>
            <h3 className="font-serif text-base sm:text-xl text-[#c59d5f] italic mb-6">
              How to find us in Uttara
            </h3>
            <div className="flex items-center justify-center gap-2">
              <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
              <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
              <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
            </div>
          </div>
        </div>

        {/* 2 Column Layout: Details & Form + Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          {/* Branch Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Uttara Branch Card */}
            <div className="p-6 rounded-xl bg-[#171513] border border-[#2d2822] shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#25211c]">
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#f5efe5]">Two Spoons &ndash; Uttara</h4>
                  <span className="text-xs text-[#c59d5f] font-medium tracking-wide">Dhaka Branch</span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#c59d5f]/15 text-[#c59d5f] border border-[#c59d5f]/30 text-[11px] font-semibold">
                  Open 11 AM &ndash; 2 AM
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-[#bab0a1]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c59d5f] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{RESTAURANT_INFO.address}</p>
                    <p className="text-xs text-[#7d7365] mt-0.5">Directly opposite Kingfisher • Plus Code: {RESTAURANT_INFO.plusCode}</p>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#c59d5f] shrink-0" />
                  <a href={`tel:${RESTAURANT_INFO.phoneTel}`} className="hover:text-[#c59d5f] transition-colors font-medium">
                    {RESTAURANT_INFO.phone}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#c59d5f] shrink-0" />
                  <span>Sunday &ndash; Saturday: 11:00 AM &ndash; 02:00 AM</span>
                </li>

                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#c59d5f] shrink-0" />
                  <a href={RESTAURANT_INFO.websiteUrl} target="_blank" rel="noreferrer" className="hover:text-[#c59d5f] underline transition-colors">
                    {RESTAURANT_INFO.website}
                  </a>
                </li>
              </ul>

              {/* Social and foodpanda links */}
              <div className="mt-6 pt-4 border-t border-[#23201b] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a 
                    href={RESTAURANT_INFO.facebook} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-full bg-[#201c18] border border-[#383229] flex items-center justify-center text-[#c59d5f] hover:bg-[#c59d5f] hover:text-[#121110] transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a 
                    href={RESTAURANT_INFO.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-full bg-[#201c18] border border-[#383229] flex items-center justify-center text-[#c59d5f] hover:bg-[#c59d5f] hover:text-[#121110] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <a 
                  href={RESTAURANT_INFO.foodpanda} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-semibold uppercase tracking-wider text-[#ff4b82] hover:underline flex items-center gap-1.5"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Order on Foodpanda</span>
                </a>
              </div>
            </div>

            {/* Chittagong Branch Card */}
            <div className="p-6 rounded-xl bg-[#171513] border border-[#2d2822] shadow-xl">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#25211c]">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#f5efe5]">Two Spoons &ndash; Chittagong</h4>
                  <span className="text-xs text-[#8c8273]">Our Original Flagship Branch</span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#231f1a] text-[#8e8374] border border-[#332c24] text-[11px]">
                  11 AM &ndash; 2 AM
                </div>
              </div>
              <p className="text-xs text-[#a29788] mb-4">
                The original restaurant and chocolate cafe where Two Spoons first started.
              </p>
              <a 
                href={RESTAURANT_INFO.chittagongFacebook} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-[#c59d5f] hover:underline flex items-center gap-1 font-medium"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Visit Chittagong Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#171513] border border-[#2d2822] shadow-xl">
              <h4 className="font-serif text-2xl font-bold text-[#f5efe5] mb-1">Write to Us</h4>
              <p className="text-xs text-[#9d9283] mb-6">
                Have a question about group dining, catering, private parties, or menu details? Leave us a message.
              </p>

              {isSent ? (
                <div className="p-8 rounded-lg bg-[#121110] border border-[#c59d5f]/50 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-[#c59d5f] mx-auto mb-3" />
                  <h5 className="font-serif text-xl font-bold text-white mb-1">Message Sent!</h5>
                  <p className="text-xs text-[#a99e90] mb-4">
                    Thank you for contacting Two Spoons. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-5 py-2 text-xs uppercase tracking-wider rounded-sm bg-[#c59d5f] text-[#121110] font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-write-us-form" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#a89d8e] mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={name}
                        required
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-md bg-[#121110] border border-[#332e27] text-[#e8ded0] text-sm focus:border-[#c59d5f] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-[#a89d8e] mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={email}
                        required
                        placeholder="your@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-md bg-[#121110] border border-[#332e27] text-[#e8ded0] text-sm focus:border-[#c59d5f] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider text-[#a89d8e] mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={phone}
                      placeholder="01XXXXXXXXX"
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-md bg-[#121110] border border-[#332e27] text-[#e8ded0] text-sm focus:border-[#c59d5f] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#a89d8e] mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      required
                      placeholder="How can we help you?"
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-md bg-[#121110] border border-[#332e27] text-[#e8ded0] text-sm focus:border-[#c59d5f] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-sm bg-[#c59d5f] text-[#121110] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#d4af72] transition-all shadow-[0_4px_16px_rgba(197,157,95,0.25)]"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Google Maps View */}
        <div className="rounded-xl overflow-hidden border border-[#2e2a23] shadow-2xl">
          <div className="bg-[#181614] p-4 border-b border-[#2d2822] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c59d5f]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4cbbe]">
                Two Spoons &ndash; Plot 38, Gareeb-e-Nawaz Ave, Sector 13, Uttara, Dhaka
              </span>
            </div>
            <a
              href={RESTAURANT_INFO.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#c59d5f] hover:underline font-medium"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
          <div className="w-full h-[380px] bg-[#1a1714]">
            <iframe
              title="Two Spoons Uttara Google Map Location"
              src="https://www.google.com/maps?q=Two%20Spoons%2C%20Plot%2038%2C%20Gareeb-e-Nawaz%20Ave%2C%20Sector%2013%2C%20Uttara%2C%20Dhaka%201230&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
