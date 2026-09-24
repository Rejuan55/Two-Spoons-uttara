import { Doctor, ProcedureVideo, DentalService, Testimonial, BeforeAfterCase } from '../types/dental';

export const CLINIC_INFO = {
  name: 'Smilico',
  fullName: 'Smilico Dental & Diagnostic Center',
  tagline: 'Gentle Care & Advanced 3D Diagnostics',
  phone: '+1 (512) 555-7890',
  emergencyPhone: '+1 (800) 555-DENT',
  email: 'appointments@smilicocare.com',
  address: '125 Maple Avenue, Suite 204, Austin, TX 78701',
  workingHours: {
    weekdays: 'Mon - Fri: 8:00 AM - 7:30 PM',
    saturday: 'Saturday: 9:00 AM - 5:00 PM',
    sunday: 'Sunday: Emergency Trauma On-Call'
  },
  stats: [
    { label: 'Happy Smiles Restored', value: '58,900+' },
    { label: 'Clinical Diagnostic Accuracy', value: '99.4%' },
    { label: 'Years of Dental Excellence', value: '18+' },
    { label: 'Specialist Doctors', value: '12+' }
  ]
};

export const PROCEDURE_VIDEOS: ProcedureVideo[] = [
  {
    id: 'vid-scaling',
    title: 'Ultrasonic Scaling & Calculus Removal Demonstration',
    category: 'scaling',
    categoryLabel: 'Teeth Scaling',
    duration: '4:15 min',
    views: '142K views',
    description: 'A clinical demonstration showing how high-frequency ultrasonic soundwaves gently disintegrate tartar, hardened calculus, and plaque without harming tooth enamel.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Y-x0efG1seA',
    thumbnailUrl: '/src/assets/images/dental_teeth_cleaning_1790263731757.jpg',
    steps: [
      'Comprehensive intraoral diagnostic camera assessment',
      'Gentle topical numbing gel applied along gingival margins',
      'Piezo-ultrasonic micro-tip vibration breaks calculus bonds',
      'Water-spray lavage washes away debris and disinfects pockets',
      'Subgingival gentle curettage for inflamed gum pockets'
    ],
    benefits: [
      'Prevents irreversible gum recession and bone loss',
      'Stops chronic bleeding gums and bad breath',
      'Gentle water-cooled vibration ensures minimal discomfort'
    ],
    dentistTips: 'Recommended every 6 months. Patients with active gingivitis should schedule follow-up scaling every 3–4 months.'
  },
  {
    id: 'vid-cleaning',
    title: 'Professional Deep Dental Cleaning & Air-Polishing',
    category: 'cleaning',
    categoryLabel: 'Teeth Cleaning',
    duration: '3:45 min',
    views: '98K views',
    description: 'Watch the step-by-step hygienic polishing and remineralization process that removes coffee, tea, and tobacco stains while fortifying tooth enamel.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
    steps: [
      'Full plaque disclosure dye test to locate hidden biofilms',
      'Fine erythritol powder air-polishing system for stain removal',
      'Interdental flossing and contact smoothing',
      'Fluoride varnish shield applied to strengthen exposed root surfaces'
    ],
    benefits: [
      'Instantly smooth, bright and glossy tooth surface',
      'Zero pain, non-abrasive micro-polishing',
      'Protective remineralization against acid-forming bacteria'
    ],
    dentistTips: 'Avoid heavily pigmented beverages like dark coffee and red wine for 4 hours following air-polishing.'
  },
  {
    id: 'vid-whitening',
    title: 'In-Clinic LED Laser Teeth Whitening in 45 Minutes',
    category: 'whitening',
    categoryLabel: 'Teeth Whitening',
    duration: '5:20 min',
    views: '215K views',
    description: 'See the rapid transformation of tooth shade from yellowed to pearly bright using hydrogen peroxide gel activated by cool-blue LED technology.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Y-x0efG1seA',
    thumbnailUrl: '/src/assets/images/dental_braces_aligners_1790263743431.jpg',
    steps: [
      'Pre-treatment shade matching with digital colorimeter',
      'Protective liquid dam isolation of gums and soft tissues',
      'Application of 35% medical-grade whitening matrix',
      'Three 15-minute cycles under optical wavelength LED lamp',
      'Post-treatment desensitizing remineralizing rinse'
    ],
    benefits: [
      'Up to 8 shades whiter in a single comfortable visit',
      'Formulated with potassium nitrate to prevent post-treatment sensitivity',
      'Long-lasting clinical brilliance backed by home touch-up kit'
    ],
    dentistTips: 'Follow the "white diet" (clear fluids, poultry, rice) for 48 hours following clinical laser whitening.'
  },
  {
    id: 'vid-aligners',
    title: '3D Clear Aligners: Digital Scanning to Straight Smiles',
    category: 'aligners',
    categoryLabel: 'Braces & Aligners',
    duration: '6:10 min',
    views: '164K views',
    description: 'Explore the modern orthodontic journey: from 3D intraoral digital mapping to discrete custom-crafted transparent aligner trays.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/src/assets/images/dental_braces_aligners_1790263743431.jpg',
    steps: [
      'High-resolution 3D optical scanning (no gooey impression putty)',
      'Digital simulation showing your tooth movements week by week',
      'Placement of subtle tooth-colored composite precision attachments',
      'Fitting of Aligner Tray 1 with hygiene and chewies coaching'
    ],
    benefits: [
      'Nearly invisible: smile with total confidence at school or work',
      'Removable for meals, flossing, and special occasions',
      'Fewer clinic visits compared to traditional wire braces'
    ],
    dentistTips: 'Wear aligners 22 hours per day. Only remove when consuming anything other than plain cool water.'
  },
  {
    id: 'vid-implants',
    title: 'Single-Visit Computer-Guided Dental Implant Surgery',
    category: 'implants',
    categoryLabel: 'Dental Implants',
    duration: '7:30 min',
    views: '88K views',
    description: 'Observe surgical precision guided by 3D CBCT bone tomography, placing a medical-grade titanium fixture with zero scalpels or deep sutures.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Y-x0efG1seA',
    thumbnailUrl: '/src/assets/images/dental_diagnostic_suite_1790263754722.jpg',
    steps: [
      '3D CBCT jawbone density scan and nerve mapping',
      '3D-printed custom surgical surgical guide placement',
      'Flapless micro-osteotomy in less than 15 minutes',
      'Titanium fixture torqued with digital precision monitoring',
      'Immediate temporary crown placement for same-day aesthetics'
    ],
    benefits: [
      'Permanent lifetime solution for missing teeth',
      'Preserves facial jaw structure and prevents adjacent teeth drifting',
      'Feels, chews, and cleans exactly like a natural tooth'
    ],
    dentistTips: 'Maintain pristine interdental hygiene and avoid smoking to guarantee 99%+ osseointegration success.'
  },
  {
    id: 'vid-rootcanal',
    title: 'Microscopic Painless Root Canal Therapy',
    category: 'root-canal',
    categoryLabel: 'Root Canal',
    duration: '5:45 min',
    views: '120K views',
    description: 'Demystifying root canal therapy: see how high-magnification dental microscopes and rotary nickel-titanium files save badly infected teeth painlessly.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
    steps: [
      'Computerized localized painless anesthesia delivery',
      'Rubber dam isolation to maintain absolute sterile field',
      'Microscopic canal location and rotary cleaning with gentle irrigation',
      'Biocompatible gutta-percha seal and permanent core restoration'
    ],
    benefits: [
      'Instant relief from severe throbbing toothache',
      'Saves natural tooth from extraction',
      'Painless modern experience equivalent to getting a standard filling'
    ],
    dentistTips: 'Protect the treated tooth with a custom ceramic crown to prevent fracture under heavy chewing loads.'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-michael',
    name: 'Dr. Michael Carter',
    title: 'DDS, MS, FICOI',
    role: 'Chief Implantologist & Diagnostics Lead',
    qualification: 'Columbia University College of Dental Medicine',
    experienceYears: 16,
    photo: '/src/assets/images/doctor_michael_portrait_1790263766899.jpg',
    specialities: ['Dental Implants', '3D Bone Diagnostics', 'Oral Surgery', 'Complex Reconstruction'],
    bio: 'Pioneer in computer-guided flapless implantology with over 4,500 successful surgical placements. Passionate about gentle restorative dentistry.',
    rating: 4.96,
    reviewCount: 384,
    consultationFee: '$65',
    availableDays: [1, 2, 4, 5, 6], // Mon, Tue, Thu, Fri, Sat
    timeSlots: {
      morning: ['09:00 AM', '10:00 AM', '11:15 AM'],
      afternoon: ['02:00 PM', '03:15 PM', '04:30 PM'],
      evening: ['05:30 PM', '06:15 PM']
    },
    busyDates: ['2026-09-28', '2026-10-05']
  },
  {
    id: 'doc-emily',
    name: 'Dr. Emily Johnson',
    title: 'DMD, AACD Accredited',
    role: 'Aesthetic Dentist & Smile Design Specialist',
    qualification: 'Harvard School of Dental Medicine',
    experienceYears: 12,
    photo: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
    specialities: ['Porcelain Veneers', 'Laser Teeth Whitening', 'Cosmetic Bonding', 'Enamel Recontouring'],
    bio: 'Renowned for natural-looking smile transformations and anxiety-free cosmetic care. Dedicated to creating harmonious, radiant patient smiles.',
    rating: 4.98,
    reviewCount: 412,
    consultationFee: '$60',
    availableDays: [1, 3, 4, 6], // Mon, Wed, Thu, Sat
    timeSlots: {
      morning: ['09:30 AM', '10:30 AM', '11:45 AM'],
      afternoon: ['01:30 PM', '02:45 PM', '04:00 PM'],
      evening: ['05:15 PM', '06:00 PM']
    },
    busyDates: ['2026-09-29', '2026-10-03']
  },
  {
    id: 'doc-daniel',
    name: 'Dr. Daniel Smith',
    title: 'BDS, MDS Orthodontics',
    role: 'Orthodontist & Clear Aligner Specialist',
    qualification: 'King’s College London Dental Institute',
    experienceYears: 14,
    photo: '/src/assets/images/dental_braces_aligners_1790263743431.jpg',
    specialities: ['Invisalign Diamond Provider', 'Self-Ligating Braces', 'Bite Correction', 'Teen Orthodontics'],
    bio: 'Specializing in accelerated tooth movement and digital smile simulations, turning crooked or crowded teeth into symmetrical alignments.',
    rating: 4.93,
    reviewCount: 295,
    consultationFee: '$55',
    availableDays: [2, 3, 5, 6], // Tue, Wed, Fri, Sat
    timeSlots: {
      morning: ['09:00 AM', '10:15 AM', '11:30 AM'],
      afternoon: ['02:00 PM', '03:30 PM', '04:45 PM'],
      evening: ['05:30 PM', '06:30 PM']
    },
    busyDates: ['2026-10-01']
  },
  {
    id: 'doc-sarah',
    name: 'Dr. Sarah Lin',
    title: 'DDS, MPH',
    role: 'Preventive Diagnostics & Periodontal Care',
    qualification: 'UCLA School of Dentistry',
    experienceYears: 10,
    photo: '/src/assets/images/dental_teeth_cleaning_1790263731757.jpg',
    specialities: ['Ultrasonic Scaling', 'Deep Pocket Therapy', 'Preventive Diagnostics', 'Halitosis Cure'],
    bio: 'Gentle, preventive-first clinician dedicated to painless calculus removal, gum health revitalization, and patient oral wellness coaching.',
    rating: 4.97,
    reviewCount: 320,
    consultationFee: '$50',
    availableDays: [1, 2, 3, 4, 5], // Mon to Fri
    timeSlots: {
      morning: ['08:30 AM', '09:30 AM', '10:45 AM'],
      afternoon: ['01:00 PM', '02:15 PM', '03:30 PM'],
      evening: ['04:45 PM', '05:45 PM']
    },
    busyDates: ['2026-09-30']
  }
];

export const SERVICES: DentalService[] = [
  {
    id: 'serv-scaling',
    title: 'Ultrasonic Scaling & Hygiene Polishing',
    category: 'hygiene',
    categoryLabel: 'Preventive Care',
    shortDesc: 'Gentle ultrasonic plaque and calculus removal with water-spray cooling and enamel remineralization.',
    fullDesc: 'Using piezoelectric micro-frequency vibration, our dental hygienists gently dislodge stubborn calculus from above and below the gumline without scraping or damaging your tooth enamel.',
    priceEstimate: '$90 – $140',
    estimatedTime: '45 mins',
    videoId: 'vid-scaling',
    iconName: 'Sparkles',
    features: [
      'Piezo-ultrasonic tartar detachment',
      'Micro-air polishing for tea/coffee stains',
      'Periodontal depth probing & diagnosis',
      'Fluoride enamel remineralization shield'
    ],
    image: '/src/assets/images/dental_teeth_cleaning_1790263731757.jpg'
  },
  {
    id: 'serv-aligners',
    title: 'Clear Aligners & Orthodontic Braces',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    shortDesc: 'Discreet, removable clear aligners tailored through 3D intraoral digital scans for a perfectly aligned smile.',
    fullDesc: 'Straighten crooked, spaced, or crowded teeth without uncomfortable metallic wires. Custom 3D medical-grade polyurethane aligners gently shift teeth into optimal aesthetic alignment.',
    priceEstimate: '$1,800 – $3,400',
    estimatedTime: '6 – 14 months',
    videoId: 'vid-aligners',
    iconName: 'Smile',
    features: [
      'Goo-free 3D digital oral mapping',
      'Predictable 3D visual outcome software',
      'Invisible, removable trays for eating & brushing',
      'Complimentary whitening gel included'
    ],
    image: '/src/assets/images/dental_braces_aligners_1790263743431.jpg'
  },
  {
    id: 'serv-implants',
    title: '3D Guided Dental Implants',
    category: 'restorative',
    categoryLabel: 'Restorative Surgery',
    shortDesc: 'Permanent titanium tooth root replacement with surgical template precision and natural porcelain crowns.',
    fullDesc: 'Replace single or multiple missing teeth with biocompatible titanium implants integrated into the jawbone. Enjoy full chewing strength and permanent structural support for life.',
    priceEstimate: '$1,200 – $2,500',
    estimatedTime: 'Single visit surgery',
    videoId: 'vid-implants',
    iconName: 'ShieldCheck',
    features: [
      '3D CBCT digital bone density mapping',
      'Minimally invasive computer-guided placement',
      'Zirconia natural-shade ceramic crown',
      'Lifetime structural warranty'
    ],
    image: '/src/assets/images/dental_diagnostic_suite_1790263754722.jpg'
  },
  {
    id: 'serv-whitening',
    title: 'Clinical LED Laser Teeth Whitening',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic Dentistry',
    shortDesc: 'Professional 45-minute power whitening lifting up to 8 shades of deep discoloration safely and painlessly.',
    fullDesc: 'Medical-grade hydrogen peroxide activated by targeted blue light frequencies safely breaks down chromophore stains inside the enamel pores while protecting gum tissues with a liquid barrier.',
    priceEstimate: '$220 – $380',
    estimatedTime: '45 mins',
    videoId: 'vid-whitening',
    iconName: 'Sun',
    features: [
      'Digital shade spectrometer baseline',
      'Gingival barrier protection prevents gum stinging',
      'Anti-sensitivity desensitizing application',
      'Take-home maintenance whitening pen'
    ],
    image: '/src/assets/images/dental_braces_aligners_1790263743431.jpg'
  },
  {
    id: 'serv-rootcanal',
    title: 'Microscopic Painless Root Canal Therapy',
    category: 'restorative',
    categoryLabel: 'Endodontics',
    shortDesc: 'Save deeply decayed or abscessed teeth with rotary endodontic instruments and high-power digital magnification.',
    fullDesc: 'Forget the outdated myths of painful root canals. Our digital localized anesthetic and rotary nickel-titanium tools clean infected root canals in one relaxing visit with zero discomfort.',
    priceEstimate: '$350 – $650',
    estimatedTime: '60 mins',
    videoId: 'vid-rootcanal',
    iconName: 'Activity',
    features: [
      'High-magnification surgical microscope',
      'Digital apex locator for millimeter accuracy',
      'Antibacterial thermal gutta-percha seal',
      'Immediate throbbing pain relief'
    ],
    image: '/src/assets/images/hero_dentist_patient_1790263719277.jpg'
  },
  {
    id: 'serv-diagnostics',
    title: 'Comprehensive 3D CBCT Diagnostic Scan',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics',
    shortDesc: 'Low-radiation 3D cone beam volumetric scans capturing jaw structure, airway, and early bone issues.',
    fullDesc: 'Advanced diagnostic imaging gives our dentists a full 360-degree anatomical visualization of your teeth, bone density, roots, and sinuses with 80% less radiation than traditional medical CT scans.',
    priceEstimate: '$110 – $180',
    estimatedTime: '15 mins',
    iconName: 'Cpu',
    features: [
      'Ultra low-dose pediatric and adult protocols',
      'Immediate 3D cross-sectional rendering',
      'Early detection of hidden cysts and root cracks',
      'Digital file provided directly to patient'
    ],
    image: '/src/assets/images/dental_diagnostic_suite_1790263754722.jpg'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-whitening',
    title: 'Clinical In-Office Laser Whitening',
    category: 'Teeth Whitening',
    description: 'Patient had deep tetracycline and espresso discoloration accumulated over 12 years. Treated with our 45-minute cool LED blue laser protocol.',
    beforeImage: '/src/assets/images/dental_teeth_cleaning_1790263731757.jpg',
    afterImage: '/src/assets/images/dental_braces_aligners_1790263743431.jpg',
    beforeLabel: 'Before (Shade A3.5)',
    afterLabel: 'After (Shade B1 - 8 Shades Lighter)',
    doctorName: 'Dr. Emily Johnson',
    timeframe: 'Single 45-min Session',
    keyPoints: ['No post-procedure sensitivity', 'Gum tissue 100% shielded', 'Lasting bright enamel reflection']
  },
  {
    id: 'case-aligners',
    title: 'Complex Anterior Crowding Correction',
    category: 'Clear Aligners',
    description: 'Patient presented with severe upper and lower overlapping anterior incisors. Aligned seamlessly using 24 sets of custom 3D clear aligner trays.',
    beforeImage: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
    afterImage: '/src/assets/images/dental_braces_aligners_1790263743431.jpg',
    beforeLabel: 'Before: Class II Crowding',
    afterLabel: 'After: Balanced Harmonious Arch',
    doctorName: 'Dr. Daniel Smith',
    timeframe: '7 Months Treatment',
    keyPoints: ['Zero tooth extractions required', 'Discrete transparent wear', 'Improved bite & chewing balance']
  },
  {
    id: 'case-implant',
    title: 'Anterior Central Incisor Implant Restoration',
    category: 'Dental Implants',
    description: 'Traumatic sports fracture of central incisor. Extracted and immediately placed with a computer-guided titanium implant and layered zirconia crown.',
    beforeImage: '/src/assets/images/dental_diagnostic_suite_1790263754722.jpg',
    afterImage: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
    beforeLabel: 'Before: Fractured Root',
    afterLabel: 'After: Custom Zirconia Crown',
    doctorName: 'Dr. Michael Carter',
    timeframe: 'Same-day Temp / 3 Mo Final',
    keyPoints: ['Flapless painless surgery', 'Sub-millimeter color matching', 'Natural scalloped gum emergence']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    patientName: 'Daniel Smith',
    role: 'Austin Business Owner',
    rating: 5,
    treatment: 'Teeth Scaling & Deep Cleaning',
    date: 'September 18, 2026',
    comment: 'I used to dread teeth scaling because of sensitive gums. Dr. Sarah Lin used their ultrasonic water-cooled system and it was completely painless! The clinic is pristine, modern, and high-tech.',
    verified: true,
    avatar: '/src/assets/images/doctor_michael_portrait_1790263766899.jpg',
    beforeAfterNote: 'Plaque index reduced from 42% to 4%'
  },
  {
    id: 'rev-2',
    patientName: 'Olivia Brown',
    role: 'Software Engineer',
    rating: 5,
    treatment: 'Clear Aligners',
    date: 'September 12, 2026',
    comment: 'Dr. Daniel showed me a 3D digital simulation of my teeth moving before we even started. Now 6 months later, my smile is straight and people constantly compliment my confidence. Booking appointments on their site is effortless.',
    verified: true,
    avatar: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
    beforeAfterNote: 'Completed 22 aligner stages on schedule'
  },
  {
    id: 'rev-3',
    patientName: 'James Carter',
    role: 'Architect',
    rating: 5,
    treatment: 'Dental Implants',
    date: 'August 28, 2026',
    comment: 'Dr. Michael Carter is a master of his craft. He planned my dental implant with a 3D CBCT scan, and the procedure took only 25 minutes. No swelling the next morning. It looks and bites identically to my natural teeth.',
    verified: true,
    avatar: '/src/assets/images/dental_diagnostic_suite_1790263754722.jpg',
    beforeAfterNote: 'Single-tooth molar restoration'
  },
  {
    id: 'rev-4',
    patientName: 'Jessica Vance',
    role: 'High School Teacher',
    rating: 5,
    treatment: 'Teeth Whitening',
    date: 'August 15, 2026',
    comment: 'The laser whitening took my teeth from yellowed coffee stains to camera-ready white in under an hour. Zero tooth zings or sensitivity afterwards. Worth every penny!',
    verified: true,
    avatar: '/src/assets/images/dental_braces_aligners_1790263743431.jpg',
    beforeAfterNote: 'Shade improved from A3 to B1'
  },
  {
    id: 'rev-5',
    patientName: 'Marcus Reynolds',
    role: 'Photographer',
    rating: 5,
    treatment: 'Root Canal Therapy',
    date: 'July 30, 2026',
    comment: 'I was in unbearable pain on a Friday night. Smilico accommodated me immediately through their emergency triage. The root canal was so relaxing I almost fell asleep in the chair. True professionals.',
    verified: true,
    avatar: '/src/assets/images/dental_teeth_cleaning_1790263731757.jpg',
    beforeAfterNote: 'Infection resolved with zero discomfort'
  }
];

export const FAQS = [
  {
    question: 'How often should I get professional teeth scaling and cleaning done?',
    answer: 'For most healthy adults, clinical ultrasonic scaling and polishing is recommended every 6 months to remove hardened calculus (tartar) that regular toothbrushes cannot dislodge. If you have a history of gingivitis or smoke, our dentists may recommend visits every 3 to 4 months.'
  },
  {
    question: 'Is teeth scaling painful or harmful to tooth enamel?',
    answer: 'No. Modern ultrasonic scaling does not scrape or strip enamel. It uses microscopic high-frequency acoustic vibrations combined with a fine cooling water spray to gently disintegrate plaque and calculus deposits. Most patients feel only a slight tickle or vibration.'
  },
  {
    question: 'How does your real-time doctor availability booking work?',
    answer: 'When you select a doctor on our appointment scheduler, our system immediately checks their live clinic calendar. Days marked in green indicate open appointment slots. You can pick your preferred morning, afternoon, or evening slot, and receive instant digital confirmation with zero waiting on hold.'
  },
  {
    question: 'What is the advantage of 3D CBCT diagnostic imaging over regular X-rays?',
    answer: 'Conventional dental X-rays produce flat 2D representations with overlapping structures. Our 3D CBCT scanner captures millimeter-accurate volumetric cross-sections of your teeth, jawbone density, root canals, and nerve paths, enabling precise implant planning and early issue detection with 80% less radiation.'
  },
  {
    question: 'Do you accept dental insurance or offer flexible payment plans?',
    answer: 'Yes! We accept all major PPO dental insurances (including Delta Dental, MetLife, Cigna, Aetna, Guardian, and Humana) and file claims on your behalf. For out-of-pocket procedures like cosmetic aligners or implants, we offer 0% interest monthly financing options.'
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'If you suffer sudden traumatic tooth loss, severe swelling, or acute throbbing pain, call our emergency hotline at +1 (800) 555-DENT immediately. We keep priority reserve slots open each morning and afternoon for urgent cases.'
  }
];
