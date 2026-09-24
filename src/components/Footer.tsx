import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  Check 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="bg-[#071A3D] text-slate-300 pt-16 pb-8 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0A2558] to-[#0D418C] border border-blue-800/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Ready for a Pain-Free Dental Consultation?
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              Check live doctor availability, pick your convenient time slot, and smile with confidence.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-teal-900/30 transition-all cursor-pointer whitespace-nowrap"
          >
            Book An Appointment
          </button>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-blue-900/40 text-xs">
          
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold shadow-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  Smilico
                </span>
                <p className="text-[10px] tracking-wider uppercase text-teal-300 font-semibold -mt-1">
                  Dental &amp; Diagnostic Care
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed pr-4">
              Caring for your smile with advanced 3D digital dental diagnostics, ultrasonic painless scaling, clear aligners, and patient-first clinical excellence.
            </p>

            <div className="pt-2 space-y-1.5 text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Dental Services</a></li>
              <li><a href="#video-procedures" className="hover:text-white transition-colors">Video Guides</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Doctor Roster</a></li>
              <li><a href="#appointment-booking" className="hover:text-white transition-colors">Live Schedule</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Real Results</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Common FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Clinical Services (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Treatments
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Ultrasonic Teeth Scaling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Teeth Cleaning &amp; Air Polishing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Clear Aligners &amp; Braces</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Guided Dental Implants</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Laser Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Painless Root Canal Therapy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">3D CBCT Bone Tomography</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Hours (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Oral Health Tips
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Subscribe to receive dentist-approved oral hygiene tips, scaling reminders, and seasonal smile care promotions.
            </p>

            {subscribed ? (
              <div className="p-3 bg-teal-900/50 border border-teal-600 rounded-xl text-teal-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-blue-950/60 border border-blue-800/60 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 px-2.5 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-slate-400 text-[11px] space-y-1">
              <p><strong className="text-slate-200">Mon - Fri:</strong> 8:00 AM – 7:30 PM</p>
              <p><strong className="text-slate-200">Saturday:</strong> 9:00 AM – 5:00 PM</p>
              <p><strong className="text-teal-400">Emergency:</strong> 24/7 Trauma Service</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Smilico Dental &amp; Diagnostic Care. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Patient Bill of Rights</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
