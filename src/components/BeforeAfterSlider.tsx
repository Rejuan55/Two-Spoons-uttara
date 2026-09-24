import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  ArrowLeftRight, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Calendar 
} from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/dentalData';

interface BeforeAfterSliderProps {
  onOpenBooking: (procedure?: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = BEFORE_AFTER_CASES[selectedCaseIndex];

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Before &amp; After Clinical Cases</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-700">Real Documented Transformations</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
            Real Results, Confident Smiles
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed text-balance">
            Drag the interactive slider handle left and right to inspect the clinical outcome before and after our dental procedures.
          </p>

          {/* Case Study Switcher Buttons */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {BEFORE_AFTER_CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCaseIndex === idx
                    ? 'bg-[#0A2558] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Slider Container (col-span-7) */}
          <div className="lg:col-span-7">
            <div 
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerMove={handlePointerMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 select-none cursor-ew-resize bg-slate-900"
            >
              {/* After Image (Background) */}
              <img
                src={activeCase.afterImage}
                alt="After procedure"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Before Image (Clipped overlay) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt="Before procedure"
                  className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
                  style={{ 
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' 
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badges for Before & After */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-xs font-semibold shadow">
                {activeCase.beforeLabel || 'Before'}
              </div>

              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-teal-800/80 backdrop-blur-md text-white text-xs font-semibold shadow">
                {activeCase.afterLabel || 'After'}
              </div>

              {/* Drag Handle Divider */}
              <div 
                className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#0A2558] shadow-xl flex items-center justify-center border-2 border-teal-500">
                  <ArrowLeftRight className="w-4 h-4 text-teal-700" />
                </div>
              </div>

              {/* Helper Drag Hint bottom */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-black/60 rounded-full text-white/90 text-[10px] tracking-wide pointer-events-none">
                ↔ Drag slider to compare
              </div>
            </div>
          </div>

          {/* Clinical Details (col-span-5) */}
          <div className="lg:col-span-5 space-y-5 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80">
            <div>
              <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Case Study · {activeCase.category}
              </span>
              <h3 className="text-xl font-bold text-[#0A2558] font-display mt-1">
                {activeCase.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {activeCase.description}
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span><strong>Treating Doctor:</strong> {activeCase.doctorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span><strong>Treatment Duration:</strong> {activeCase.timeframe}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              <h4 className="text-xs font-bold text-slate-900">Treatment Milestones:</h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {activeCase.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking(activeCase.category)}
              className="w-full mt-2 py-3 bg-[#0A2558] hover:bg-[#081e46] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Similar Consultation</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
