import React, { useState } from 'react';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Sun, 
  Activity, 
  Cpu, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Play, 
  Calendar 
} from 'lucide-react';
import { SERVICES } from '../data/dentalData';
import { DentalService, ServiceCategory } from '../types/dental';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onOpenVideoForService: (videoId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onOpenVideoForService
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories: { key: ServiceCategory; label: string }[] = [
    { key: 'all', label: 'All Services' },
    { key: 'hygiene', label: 'Cleaning & Scaling' },
    { key: 'orthodontics', label: 'Braces & Aligners' },
    { key: 'restorative', label: 'Implants & Restorations' },
    { key: 'cosmetic', label: 'Cosmetic & Whitening' },
    { key: 'diagnostics', label: '3D Diagnostics' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'Smile': return <Smile className="w-5 h-5 text-teal-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'Sun': return <Sun className="w-5 h-5 text-teal-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-600" />;
      default: return <Cpu className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
            <span>Specialized Dental Treatments</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-700">Painless Modern Technology</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
            Comprehensive Dental Care for Every Smile
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            From routine ultrasonic scaling to computer-guided full-mouth dental implants, our clinic is equipped with cutting-edge dental technology for comfort and precision.
          </p>

          {/* Interactive Category Segmented Control per Design Skill (Button elements) */}
          <div className="pt-4 flex flex-wrap justify-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-white text-[#0A2558] shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service: DentalService) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Image Banner if available */}
              {service.image && (
                <div className="relative h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Tag Replacement (Clean Text Overlay) */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#0A2558] shadow-xs">
                    {service.categoryLabel}
                  </div>

                  {/* Video trigger if video exists */}
                  {service.videoId && (
                    <button
                      onClick={() => onOpenVideoForService(service.videoId!)}
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-xs font-medium shadow-md transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Video Demo</span>
                    </button>
                  )}
                </div>
              )}

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-semibold text-[#0A2558] font-mono">
                      {service.priceEstimate}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0A2558] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.estimatedTime}</span>
                  </span>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="flex items-center gap-1.5 font-semibold text-[#0A2558] hover:text-teal-600 transition-colors py-1 cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
