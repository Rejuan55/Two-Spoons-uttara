import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDiagnostic } from './components/AboutDiagnostic';
import { ServicesSection } from './components/ServicesSection';
import { VideoProceduresSection } from './components/VideoProceduresSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { DoctorsAvailabilitySection } from './components/DoctorsAvailabilitySection';
import { AppointmentBookingSection } from './components/AppointmentBookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PROCEDURE_VIDEOS } from './data/dentalData';
import { ProcedureVideo } from './types/dental';

export function App() {
  // Video list state with ability to customize/add
  const [videoList, setVideoList] = useState<ProcedureVideo[]>(PROCEDURE_VIDEOS);
  const [activeVideoModal, setActiveVideoModal] = useState<ProcedureVideo | null>(null);

  // Booking state pre-selection
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string | undefined>(undefined);
  const [preselectedProcedure, setPreselectedProcedure] = useState<string | undefined>(undefined);

  // Scroll to booking helper
  const scrollToBooking = (doctorId?: string, procedureName?: string) => {
    if (doctorId) setPreselectedDoctorId(doctorId);
    if (procedureName) setPreselectedProcedure(procedureName);

    const bookingEl = document.getElementById('appointment-booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Open story video
  const handleOpenStoryVideo = () => {
    setActiveVideoModal({
      id: 'clinic-story',
      title: 'Inside Smilico: Our 3D Diagnostic & Gentle Dental Care Journey',
      category: 'cleaning',
      categoryLabel: 'Clinic Story',
      duration: '3:20 min',
      views: '185K views',
      description: 'Take a virtual tour through our state-of-the-art diagnostic dental suite and discover our gentle, anxiety-free philosophy.',
      videoUrl: 'https://www.youtube-nocookie.com/embed/Y-x0efG1seA',
      thumbnailUrl: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
      steps: [
        'Reception & relaxed intake in our low-sensory lounge',
        '3D volumetric CBCT diagnostics and tooth mapping',
        'Personalized treatment consultation with visual smile model',
        'Gentle, pain-free dental care with advanced ultrasonic tools'
      ],
      benefits: [
        'Zero dental anxiety with personalized comfort protocols',
        '80% lower radiation exposure with 3D diagnostic scanners',
        'Same-day emergency availability and transparent fees'
      ],
      dentistTips: 'Regular dental checkups twice a year prevent 95% of unexpected dental emergencies and root infections.'
    });
  };

  // Open procedure video by ID
  const handleOpenVideoById = (videoId: string) => {
    const found = videoList.find(v => v.id === videoId);
    if (found) {
      setActiveVideoModal(found);
    } else {
      handleOpenStoryVideo();
    }
  };

  // Update a video's URL (custom video placeholder replacement)
  const handleUpdateVideoUrl = (videoId: string, newUrl: string) => {
    setVideoList(prev => 
      prev.map(v => v.id === videoId ? { ...v, videoUrl: newUrl, isCustomVideo: true } : v)
    );
    if (activeVideoModal && activeVideoModal.id === videoId) {
      setActiveVideoModal(prev => prev ? { ...prev, videoUrl: newUrl, isCustomVideo: true } : null);
    }
  };

  // Add a new video to the library
  const handleAddNewVideo = (newVideo: ProcedureVideo) => {
    setVideoList(prev => [newVideo, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* 3-Zone Clean Header */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => scrollToBooking()}
          onOpenStoryVideo={handleOpenStoryVideo}
        />

        {/* About & Diagnostic Philosophy */}
        <AboutDiagnostic 
          onOpenBooking={() => scrollToBooking()}
        />

        {/* Dental Services Grid */}
        <ServicesSection 
          onSelectServiceForBooking={(serviceTitle) => scrollToBooking(undefined, serviceTitle)}
          onOpenVideoForService={handleOpenVideoById}
        />

        {/* Video Procedures Library (Requested by user: cleaning, scaling, dental care) */}
        <VideoProceduresSection 
          videos={videoList}
          onSelectVideo={(video) => setActiveVideoModal(video)}
          onBookProcedure={(procedureTitle) => scrollToBooking(undefined, procedureTitle)}
          onAddNewVideo={handleAddNewVideo}
        />

        {/* Before and After Interactive Comparison Slider */}
        <BeforeAfterSlider 
          onOpenBooking={(procedureTitle) => scrollToBooking(undefined, procedureTitle)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs 
          onOpenBooking={() => scrollToBooking()}
        />

        {/* Doctor Availability Overview */}
        <DoctorsAvailabilitySection 
          onSelectDoctorForBooking={(doctorId) => scrollToBooking(doctorId)}
        />

        {/* Interactive Appointment Booking with Doctor Availability on Dates */}
        <AppointmentBookingSection 
          preselectedDoctorId={preselectedDoctorId}
          preselectedProcedure={preselectedProcedure}
        />

        {/* Patient Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Clinical FAQs */}
        <FaqSection />

        {/* Contact, Directions & Callback */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => scrollToBooking()} />

      {/* Video Walkthrough Modal */}
      <VideoModal
        video={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
        onBookProcedure={(procedureTitle) => scrollToBooking(undefined, procedureTitle)}
        onUpdateVideoUrl={handleUpdateVideoUrl}
      />

    </div>
  );
}

export default App;
