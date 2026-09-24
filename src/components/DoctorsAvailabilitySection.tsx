import React from 'react';
import { 
  Star, 
  Calendar, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { DOCTORS } from '../data/dentalData';
import { Doctor } from '../types/dental';

interface DoctorsAvailabilitySectionProps {
  onSelectDoctorForBooking: (doctorId: string) => void;
}

export const DoctorsAvailabilitySection: React.FC<DoctorsAvailabilitySectionProps> = ({
  onSelectDoctorForBooking
}) => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Board-Certified Clinicians</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-700">Real-Time Schedule Transparency</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
            Meet Our Doctors &amp; Check Availability
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Our multi-disciplinary specialists combine gentle care with dental diagnostic expertise. Select any doctor below to inspect their working dates and book a confirmed appointment.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc: Doctor) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait */}
                <div className="relative aspect-[4/4] bg-slate-100 overflow-hidden">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold shadow-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{doc.rating}</span>
                  </div>

                  {/* Consultation Fee */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-[#0A2558]/90 backdrop-blur-sm text-white text-xs font-mono font-semibold">
                    Fee: {doc.consultationFee}
                  </div>
                </div>

                {/* Doctor Profile Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#0A2558] font-display leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal-800 mt-0.5">
                      {doc.role}
                    </p>
                    <p className="text-[11px] text-slate-600 flex items-center gap-1 mt-1">
                      <GraduationCap className="w-3 h-3 text-slate-500 shrink-0" />
                      <span className="truncate">{doc.qualification}</span>
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Available Working Days Indicator */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                      Weekly Clinic Days:
                    </span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5, 6].map((dayNum) => {
                        const isAvailable = doc.availableDays.includes(dayNum);
                        return (
                          <span
                            key={dayNum}
                            className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold ${
                              isAvailable
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 text-slate-400'
                            }`}
                            title={isAvailable ? 'Doctor in Clinic' : 'Doctor Off Day'}
                          >
                            {dayNames[dayNum]}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Specialties Pills Replacement: Clean unboxed list */}
                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700 block mb-1">Focus Areas:</span>
                    <p className="line-clamp-1">
                      {doc.specialities.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectDoctorForBooking(doc.id)}
                  className="w-full py-2.5 bg-[#0A2558] hover:bg-[#081e46] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-300" />
                  <span>Check Dates &amp; Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
