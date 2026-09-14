import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  // Default tomorrow's date or today's date formatted
  const todayStr = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('20:00');
  const [branch, setBranch] = useState('Two Spoons - Uttara, Dhaka');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<null | {
    id: string;
    date: string;
    time: string;
    guests: string;
    name: string;
    branch: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = 'TS-' + Math.floor(100000 + Math.random() * 900000);
      setBookingConfirmed({
        id: generatedId,
        date,
        time,
        guests,
        name,
        branch,
      });
    }, 600);
  };

  const handleReset = () => {
    setBookingConfirmed(null);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
  };

  return (
    <section id="sec5" className="py-24 px-4 bg-[#11100f] border-b border-[#24211d] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-semibold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Booking</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f7f2ea] tracking-tight mb-2">
            Make a reservation
          </h2>
          <h3 className="font-serif text-base sm:text-xl text-[#c59d5f] italic mb-6">
            Booking a table online is easy
          </h3>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
            <span className="w-2 h-2 rotate-45 border border-[#c59d5f] bg-[#c59d5f]" />
            <span className="w-16 h-[2px] bg-[#c59d5f]/60" />
          </div>

          <p className="text-[#a99e8f] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We take bookings from 11 AM to 2 AM, every day. Nine in the evening is our busiest hour, so a table booked ahead is worth it on a weekend. For a same-day booking or a larger group, calling{' '}
            <a 
              href={`tel:${RESTAURANT_INFO.phoneTel}`} 
              className="text-[#c59d5f] underline underline-offset-4 font-semibold hover:text-[#e4c28f]"
            >
              {RESTAURANT_INFO.phone}
            </a>{' '}
            is the fastest way to reach us.
          </p>
        </div>

        {/* Confirmation Card OR Form */}
        {bookingConfirmed ? (
          <div 
            id="reservation-confirmation-card"
            className="p-8 sm:p-10 rounded-xl bg-[#1a1714] border border-[#c59d5f]/60 shadow-2xl text-center animate-in zoom-in-95 duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-[#c59d5f]/20 border border-[#c59d5f] flex items-center justify-center mx-auto mb-5 text-[#c59d5f]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c59d5f]/20 text-[#c59d5f] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Table Confirmed</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f7f2ea] mb-2">
              Thank You, {bookingConfirmed.name}!
            </h3>
            <p className="text-sm text-[#b2a593] mb-6">
              Your reservation request has been registered. We look forward to hosting you.
            </p>

            {/* Booking Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-lg bg-[#121110] border border-[#2b2721] text-left mb-8 text-xs">
              <div>
                <span className="text-[#7c7263] uppercase tracking-wider block mb-1">Booking Ref</span>
                <span className="font-mono text-[#c59d5f] font-bold text-sm">{bookingConfirmed.id}</span>
              </div>
              <div>
                <span className="text-[#7c7263] uppercase tracking-wider block mb-1">Date &amp; Time</span>
                <span className="text-white font-medium">{bookingConfirmed.date} at {bookingConfirmed.time}</span>
              </div>
              <div>
                <span className="text-[#7c7263] uppercase tracking-wider block mb-1">Party Size</span>
                <span className="text-white font-medium">{bookingConfirmed.guests} Person(s)</span>
              </div>
              <div>
                <span className="text-[#7c7263] uppercase tracking-wider block mb-1">Location</span>
                <span className="text-white font-medium">{bookingConfirmed.branch}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.phoneTel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#c59d5f] text-[#121110] font-semibold text-xs uppercase tracking-wider hover:bg-[#d6af72] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Restaurant</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                id="book-another-table-btn"
                className="w-full sm:w-auto px-6 py-3 rounded-sm border border-[#3d372e] text-[#b3a899] hover:text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Book Another Table
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            id="reservation-form"
            className="p-6 sm:p-10 rounded-xl bg-[#181512] border border-[#2d2822] shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Date */}
              <div>
                <label htmlFor="res-date" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c59d5f]" />
                  <span>Date *</span>
                </label>
                <input
                  type="date"
                  id="res-date"
                  value={date}
                  min={todayStr}
                  required
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors"
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="res-time" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#c59d5f]" />
                  <span>Time *</span>
                </label>
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors"
                >
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM (Lunch)</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="19:00">07:00 PM</option>
                  <option value="20:00">08:00 PM (Dinner)</option>
                  <option value="21:00">09:00 PM (Peak)</option>
                  <option value="22:00">10:00 PM</option>
                  <option value="23:00">11:00 PM (Late Night)</option>
                  <option value="00:00">12:00 AM (Midnight)</option>
                  <option value="01:00">01:00 AM (Late Service)</option>
                </select>
              </div>

              {/* Restaurant branch */}
              <div>
                <label htmlFor="res-branch" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c59d5f]" />
                  <span>Branch *</span>
                </label>
                <select
                  id="res-branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors"
                >
                  <option value="Two Spoons - Uttara, Dhaka">Two Spoons &ndash; Uttara, Dhaka</option>
                  <option value="Two Spoons - Chittagong">Two Spoons &ndash; Chittagong</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="res-guests" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#c59d5f]" />
                  <span>Number of Guests *</span>
                </label>
                <select
                  id="res-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="8">8 People</option>
                  <option value="10+">10+ People (Group)</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="res-name" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="res-name"
                  value={name}
                  required
                  placeholder="e.g. Tanvir Ahmed"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] placeholder-[#5a5247] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="res-email" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="res-email"
                  value={email}
                  required
                  placeholder="name@domain.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] placeholder-[#5a5247] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="sm:col-span-2">
                <label htmlFor="res-phone" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="res-phone"
                  value={phone}
                  required
                  placeholder="01XXXXXXXXX"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] placeholder-[#5a5247] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors"
                />
              </div>

              {/* Comments */}
              <div className="sm:col-span-2">
                <label htmlFor="res-comments" className="block text-xs uppercase tracking-wider text-[#b8ac9c] font-medium mb-2">
                  Special Requests / Notes
                </label>
                <textarea
                  id="res-comments"
                  rows={3}
                  value={comments}
                  placeholder="Outdoor seating, birthday celebration, anniversary, dietary notes..."
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-[#121110] border border-[#383229] text-[#e8ded0] placeholder-[#5a5247] focus:border-[#c59d5f] focus:outline-none text-sm transition-colors resize-none"
                />
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                id="res-submit-btn"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-sm bg-[#c59d5f] text-[#121110] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#d6af72] hover:shadow-[0_4px_20px_rgba(197,157,95,0.35)] transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming Reservation...' : 'Make a reservation'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
