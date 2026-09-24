export type ServiceCategory = 
  | 'all'
  | 'hygiene'
  | 'cosmetic'
  | 'orthodontics'
  | 'restorative'
  | 'diagnostics'
  | 'pediatric';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  qualification: string;
  experienceYears: number;
  photo: string;
  specialities: string[];
  bio: string;
  rating: number;
  reviewCount: number;
  consultationFee: string;
  availableDays: number[]; // 0: Sunday, 1: Monday, ..., 6: Saturday
  timeSlots: {
    morning: string[];
    afternoon: string[];
    evening: string[];
  };
  busyDates?: string[]; // ISO date strings YYYY-MM-DD with limited/booked slots
}

export interface ProcedureVideo {
  id: string;
  title: string;
  category: 'scaling' | 'cleaning' | 'whitening' | 'aligners' | 'implants' | 'root-canal';
  categoryLabel: string;
  duration: string;
  views: string;
  description: string;
  videoUrl: string; // YouTube embed URL or direct video
  thumbnailUrl: string;
  steps: string[];
  benefits: string[];
  dentistTips: string;
  isCustomVideo?: boolean;
}

export interface DentalService {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  priceEstimate: string;
  estimatedTime: string;
  videoId?: string;
  features: string[];
  iconName: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  role?: string;
  rating: number;
  treatment: string;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
  beforeAfterNote?: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  doctorName: string;
  timeframe: string;
  keyPoints: string[];
}

export interface AppointmentBooking {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorRole: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  date: string; // YYYY-MM-DD
  timeSlot: string;
  procedure: string;
  notes?: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}
