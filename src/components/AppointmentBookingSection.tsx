import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  FileText,
  CalendarCheck
} from 'lucide-react';
import { DOCTORS, SERVICES } from '../data/dentalData';
import { Doctor, AppointmentBooking } from '../types/dental';

interface AppointmentBookingSectionProps {
  preselectedDoctorId?: string;
  preselectedProcedure?: string;
}

export const AppointmentBookingSection: React.FC<AppointmentBookingSectionProps> = ({
  preselectedDoctorId,
  preselectedProcedure
}) => {
  // Active Doctor
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    preselectedDoctorId || DOCTORS[0].id
  );

  useEffect(() => {
    if (preselectedDoctorId) {
      setSelectedDoctorId(preselectedDoctorId);
    }
  }, [preselectedDoctorId]);

  const selectedDoctor = DOCTORS.find(d => d.id === selectedDoctorId) || DOCTORS[0];

  // Calendar State: Year and Month
  const today = new Date(2026, 8, 24); // Based on system date Sept 24, 2026
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed (8 = September)

  // Selected Date string (YYYY-MM-DD)
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-25');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');

  // Form Fields
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [procedure, setProcedure] = useState(preselectedProcedure || 'Ultrasonic Scaling & Hygiene Polishing');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (preselectedProcedure) {
      setProcedure(preselectedProcedure);
    }
  }, [preselectedProcedure]);

  // Booked confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);
  const [myBookings, setMyBookings] = useState<AppointmentBooking[]>([]);
  const [showMyBookings, setShowMyBookings] = useState(false);

  // Load existing bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('smilico_dental_bookings');
      if (stored) {
        setMyBookings(JSON.parse(stored));
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Compute calendar dates for the month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayWeekday = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sunday

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Check doctor availability on specific date
  const checkDoctorDateStatus = (year: number, month: number, day: number) => {
    const dateObj = new Date(year, month, day);
    const dayOfWeek = dateObj.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

    const pad = (n: number) => n.toString().padStart(2, '0');
    const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;

    // Check if in the past
    const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (isPast) {
      return { status: 'past', label: 'Past' };
    }

    // Check if clinic is open & doctor works this weekday
    if (dayOfWeek === 0) {
      return { status: 'closed', label: 'Closed (Sunday)' };
    }

    if (!selectedDoctor.availableDays.includes(dayOfWeek)) {
      return { status: 'off', label: 'Doctor Off' };
    }

    // Check if date is in doctor's busy/limited dates
    if (selectedDoctor.busyDates?.includes(dateStr)) {
      return { status: 'limited', label: '2 slots left' };
    }

    return { status: 'available', label: 'Available' };
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const booking: AppointmentBooking = {
      id: `SM-${currentYear}-${Math.floor(1000 + Math.random() * 9000)}`,
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      doctorRole: selectedDoctor.role,
      patientName: patientName.trim(),
      patientPhone: patientPhone.trim(),
      patientEmail: patientEmail.trim() || 'Not provided',
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      procedure,
      notes: notes.trim(),
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    const updated = [booking, ...myBookings];
    setMyBookings(updated);
    try {
      localStorage.setItem('smilico_dental_bookings', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setConfirmedBooking(booking);
  };

  return (
    <section id="appointment-booking" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
            <CalendarCheck className="w-4 h-4 text-teal-600" />
            <span>Real-Time Clinical Schedule</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-700">Immediate Confirmation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
            Book an Appointment with Live Doctor Availability
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed text-balance">
            Select your preferred dental specialist, inspect their confirmed clinic dates, choose your convenient time slot, and receive an instant booking voucher.
          </p>

          {/* Switch to view existing bookings if any */}
          {myBookings.length > 0 && (
            <div className="pt-2">
              <button
                onClick={() => setShowMyBookings(!showMyBookings)}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 underline cursor-pointer"
              >
                {showMyBookings ? '← Return to New Appointment Booking' : `View My Confirmed Bookings (${myBookings.length})`}
              </button>
            </div>
          )}
        </div>

        {/* If user toggled to view their existing bookings list */}
        {showMyBookings ? (
          <div className="max-w-3xl mx-auto space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-base font-bold text-[#0A2558]">My Dental Appointments</h3>
            <div className="space-y-3">
              {myBookings.map((b) => (
                <div key={b.id} className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-[#0A2558]">{b.id}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">{b.procedure}</h4>
                    <p className="text-xs text-slate-500">
                      With {b.doctorName} ({b.doctorRole})
                    </p>
                  </div>

                  <div className="text-right text-xs">
                    <p className="font-bold text-slate-900">{b.date}</p>
                    <p className="text-teal-700 font-semibold">{b.timeSlot}</p>
                    <p className="text-slate-400 text-[11px]">{b.patientName}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowMyBookings(false)}
              className="mt-4 px-4 py-2 bg-[#0A2558] text-white rounded-lg text-xs font-semibold"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (

          /* Main 3-Step Interactive Booking Engine */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Step 1 (Doctor Selection) + Step 2 (Calendar Date Availability) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Doctor */}
              <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Step 1 · Choose Your Dental Specialist
                  </span>
                  <span className="text-xs text-slate-500">
                    Consultation: <strong className="text-slate-800">{selectedDoctor.consultationFee}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {DOCTORS.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => {
                        setSelectedDoctorId(doc.id);
                        // Reset slot to doctor's first slot
                        setSelectedTimeSlot(doc.timeSlots.morning[0] || '10:00 AM');
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        selectedDoctorId === doc.id
                          ? 'bg-white border-[#0A2558] ring-2 ring-[#0A2558]/15 shadow-sm'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-8 h-8 rounded-full object-cover shrink-0"
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-slate-900 truncate">{doc.name}</p>
                          <p className="text-[10px] text-teal-700 truncate">{doc.role.split('&')[0]}</p>
                        </div>
                      </div>
                      
                      <div className="mt-2 text-[10px] text-slate-500 pt-1.5 border-t border-slate-100 flex items-center justify-between">
                        <span>★ {doc.rating}</span>
                        <span className="font-semibold text-slate-700">{doc.consultationFee}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Interactive Date Picker with Real-Time Doctor Availability */}
              <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Step 2 · Select Date for {selectedDoctor.name}
                    </span>
                  </div>

                  {/* Month Navigation */}
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#0A2558] mr-2">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      className="p-1 rounded-md text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextMonth}
                      className="p-1 rounded-md text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Calendar Legend */}
                <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 border-b border-slate-200 pb-2.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Doctor Available</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Limited Slots Left</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    <span>Doctor Off / Clinic Closed</span>
                  </span>
                </div>

                {/* Calendar Weekday Names */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                {/* Calendar Days Matrix */}
                <div className="grid grid-cols-7 gap-1.5">
                  {/* Empty offsets for first day of month */}
                  {Array.from({ length: firstDayWeekday }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-14 rounded-lg bg-transparent" />
                  ))}

                  {/* Day blocks */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNum = i + 1;
                    const dateInfo = checkDoctorDateStatus(currentYear, currentMonth, dayNum);
                    const pad = (n: number) => n.toString().padStart(2, '0');
                    const dayString = `${currentYear}-${pad(currentMonth + 1)}-${pad(dayNum)}`;
                    const isSelected = selectedDate === dayString;
                    const isSelectable = dateInfo.status === 'available' || dateInfo.status === 'limited';

                    return (
                      <button
                        key={dayNum}
                        type="button"
                        disabled={!isSelectable}
                        onClick={() => setSelectedDate(dayString)}
                        className={`h-14 p-1 rounded-xl flex flex-col items-center justify-between text-xs transition-all relative cursor-pointer ${
                          isSelected
                            ? 'bg-[#0A2558] text-white shadow-md ring-2 ring-teal-500'
                            : isSelectable
                            ? dateInfo.status === 'limited'
                              ? 'bg-amber-50 hover:bg-amber-100/70 border border-amber-200 text-slate-900'
                              : 'bg-white hover:bg-emerald-50/60 border border-slate-200 text-slate-800'
                            : 'bg-slate-100/60 border border-slate-100 text-slate-300 cursor-not-allowed opacity-60'
                        }`}
                      >
                        <span className="font-bold text-xs">{dayNum}</span>

                        {/* Status label under date */}
                        <div className="text-[9px] font-medium leading-none text-center">
                          {isSelected ? (
                            <span className="text-teal-300 font-semibold">Selected</span>
                          ) : dateInfo.status === 'available' ? (
                            <span className="text-emerald-700">Open</span>
                          ) : dateInfo.status === 'limited' ? (
                            <span className="text-amber-700 font-bold">2 left</span>
                          ) : (
                            <span className="text-slate-400">Off</span>
                          )}
                        </div>

                        {/* Status dot */}
                        {isSelectable && !isSelected && (
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              dateInfo.status === 'limited' ? 'bg-amber-500' : 'bg-emerald-500'
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Time Slot Selector for Selected Doctor & Date */}
              <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Step 3 · Available Time Slots for {selectedDate}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-teal-700">
                    Selected: {selectedTimeSlot}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Morning Slots */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block mb-1.5">Morning Sessions:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.timeSlots.morning.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            selectedTimeSlot === slot
                              ? 'bg-[#0A2558] text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-500'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Afternoon Slots */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block mb-1.5">Afternoon Sessions:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.timeSlots.afternoon.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            selectedTimeSlot === slot
                              ? 'bg-[#0A2558] text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-500'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Evening Slots */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block mb-1.5">Evening Sessions:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.timeSlots.evening.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            selectedTimeSlot === slot
                              ? 'bg-[#0A2558] text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-700 hover:border-teal-500'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Step 4 Patient Details Form & Appointment Summary */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg shadow-slate-100 space-y-5">
              
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step 4 · Patient Details &amp; Confirmation
                </span>
                <h3 className="text-lg font-bold text-[#0A2558] font-display mt-0.5">
                  Confirm Your Appointment
                </h3>
              </div>

              {/* Selected Summary Card */}
              <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-bold text-[#0A2558]">{selectedDoctor.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Date &amp; Time:</span>
                  <span className="font-bold text-teal-800">{selectedDate} at {selectedTimeSlot}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Consultation Fee:</span>
                  <span className="font-bold text-slate-900">{selectedDoctor.consultationFee}</span>
                </div>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleSubmitBooking} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah Mitchell"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (512) ..."
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        placeholder="sarah@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Treatment or Diagnostic Procedure *
                  </label>
                  <select
                    value={procedure}
                    onChange={(e) => setProcedure(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white"
                  >
                    <option value="Ultrasonic Scaling & Hygiene Polishing">
                      Ultrasonic Scaling &amp; Hygiene Polishing (Painless Cleaning)
                    </option>
                    <option value="Clear Aligners & Orthodontic Braces">
                      Clear Aligners &amp; Orthodontic Braces (3D Consultation)
                    </option>
                    <option value="3D Guided Dental Implants">
                      3D Guided Dental Implants (Single or Multiple)
                    </option>
                    <option value="Clinical LED Laser Teeth Whitening">
                      Clinical LED Laser Teeth Whitening (45-Minute)
                    </option>
                    <option value="Microscopic Painless Root Canal Therapy">
                      Microscopic Painless Root Canal Therapy
                    </option>
                    <option value="Comprehensive 3D CBCT Diagnostic Scan">
                      Comprehensive 3D CBCT Diagnostic Scan &amp; X-ray
                    </option>
                    <option value="Emergency Toothache / Trauma Checkup">
                      Emergency Toothache / Broken Tooth Checkup
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Special Notes or Dental Sensitivity
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Mild dental anxiety, sensitive lower molars, insurance question..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                {/* Terms / Privacy notice */}
                <div className="flex items-start gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    No upfront credit card required. Free cancellation up to 2 hours prior. PPO dental insurance verified on arrival.
                  </span>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#0A2558] to-[#0e3a8a] hover:from-[#081e46] hover:to-[#0a2e6f] text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-teal-300" />
                  <span>Confirm Live Appointment</span>
                </button>
              </form>

            </div>

          </div>
        )}

      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-center space-y-4">
            
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                Appointment Confirmed
              </span>
              <h3 className="text-xl font-bold text-[#0A2558] font-display mt-0.5">
                We Look Forward to Seeing You!
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Your appointment has been registered directly on {confirmedBooking.doctorName}'s schedule.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-slate-900 text-sm">{confirmedBooking.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-bold text-[#0A2558]">{confirmedBooking.doctorName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Date:</span>
                <span className="font-semibold text-slate-800">{confirmedBooking.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Time Slot:</span>
                <span className="font-bold text-teal-800">{confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Procedure:</span>
                <span className="font-medium text-slate-800 text-right truncate max-w-[200px]">
                  {confirmedBooking.procedure}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[11px]">
                <span className="text-slate-500">Patient:</span>
                <span className="font-medium text-slate-700">{confirmedBooking.patientName}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-600">
              A reminder SMS has been logged for {confirmedBooking.patientPhone}. Please arrive 10 minutes early to complete initial diagnostic intake.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setConfirmedBooking(null)}
                className="flex-1 py-2.5 bg-[#0A2558] hover:bg-[#081e46] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Done
              </button>
              <button
                onClick={() => {
                  alert(`Appointment ${confirmedBooking.id} details copied for calendar entry.`);
                }}
                className="px-4 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Add to Calendar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
