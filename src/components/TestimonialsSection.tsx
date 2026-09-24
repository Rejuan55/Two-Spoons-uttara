import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle, 
  MessageSquarePlus, 
  Sparkles, 
  ThumbsUp, 
  Filter,
  Check
} from 'lucide-react';
import { TESTIMONIALS } from '../data/dentalData';
import { Testimonial } from '../types/dental';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [treatmentFilter, setTreatmentFilter] = useState<string>('all');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // New review form state
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [authorRating, setAuthorRating] = useState(5);
  const [authorTreatment, setAuthorTreatment] = useState('Teeth Scaling & Deep Cleaning');
  const [authorComment, setAuthorComment] = useState('');

  // Load user submitted reviews from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('smilico_user_reviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        setReviews([...parsed, ...TESTIMONIALS]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const treatmentOptions = [
    { key: 'all', label: 'All Reviews' },
    { key: 'Teeth Scaling', label: 'Scaling & Cleaning' },
    { key: 'Clear Aligners', label: 'Clear Aligners' },
    { key: 'Dental Implants', label: 'Dental Implants' },
    { key: 'Teeth Whitening', label: 'Teeth Whitening' },
    { key: 'Root Canal', label: 'Root Canal' },
  ];

  const filteredReviews = treatmentFilter === 'all'
    ? reviews
    : reviews.filter(r => r.treatment.toLowerCase().includes(treatmentFilter.toLowerCase()));

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !authorComment.trim()) return;

    const newRev: Testimonial = {
      id: `rev-user-${Date.now()}`,
      patientName: authorName.trim(),
      role: authorRole.trim() || 'Verified Patient',
      rating: authorRating,
      treatment: authorTreatment,
      date: 'Just now',
      comment: authorComment.trim(),
      verified: true,
      avatar: '/src/assets/images/hero_dentist_patient_1790263719277.jpg',
      beforeAfterNote: 'Verified Clinical Treatment'
    };

    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      const storedUserOnly = JSON.parse(localStorage.getItem('smilico_user_reviews') || '[]');
      localStorage.setItem('smilico_user_reviews', JSON.stringify([newRev, ...storedUserOnly]));
    } catch (e) {
      console.error(e);
    }

    setIsWriteReviewOpen(false);
    setAuthorName('');
    setAuthorRole('');
    setAuthorComment('');
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
            <ThumbsUp className="w-3.5 h-3.5 text-teal-600" />
            <span>Verified Patient Feedback</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-700">Genuine Dental Care Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
            What Our Patients Say About Us
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed text-balance">
            Over 58,900 patients trust Smilico for comfortable, pain-free dental diagnostics and restorative smile design. Here is what real patients have to say.
          </p>
        </div>

        {/* Aggregate Scoreboard & Review Trigger */}
        <div className="max-w-4xl mx-auto mb-10 p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            <div className="text-center">
              <span className="text-4xl font-black text-[#0A2558] font-display">4.96</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-slate-600 font-medium">850+ Google Reviews</span>
            </div>

            <div className="h-12 w-px bg-slate-200 hidden sm:block" />

            <div className="text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">99.4%</span>
                <span>reported zero pain during scaling &amp; treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">100%</span>
                <span>verified real patient feedback</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2558] hover:bg-[#081e46] text-white text-xs font-semibold rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageSquarePlus className="w-4 h-4 text-teal-300" />
            <span>Write a Patient Review</span>
          </button>
        </div>

        {/* Treatment Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {treatmentOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setTreatmentFilter(opt.key)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                treatmentFilter === opt.key
                  ? 'bg-[#0A2558] text-white shadow-xs font-semibold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Treatment */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800">
                    {rev.treatment}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>

                {/* Clinical note tag if any */}
                {rev.beforeAfterNote && (
                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>{rev.beforeAfterNote}</span>
                  </div>
                )}
              </div>

              {/* Patient Bio & Verification */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  {rev.avatar && (
                    <img
                      src={rev.avatar}
                      alt={rev.patientName}
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-1">
                      <strong className="text-slate-900 font-semibold">{rev.patientName}</strong>
                      {rev.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 fill-teal-50" />
                      )}
                    </div>
                    {rev.role && <p className="text-[10px] text-slate-400">{rev.role}</p>}
                  </div>
                </div>

                <span className="text-[11px] text-slate-600 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#0A2558]">
                Share Your Patient Experience
              </h3>
              <button 
                onClick={() => setIsWriteReviewOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jessica Miller"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Your Occupation or City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Austin Resident"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Star Rating (1 - 5)
                  </label>
                  <div className="flex items-center gap-1 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setAuthorRating(star)}
                        className="cursor-pointer"
                      >
                        <Star 
                          className={`w-5 h-5 ${
                            authorRating >= star 
                              ? 'text-amber-400 fill-amber-400' 
                              : 'text-slate-300'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Treatment Received *
                </label>
                <select
                  value={authorTreatment}
                  onChange={(e) => setAuthorTreatment(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white"
                >
                  <option value="Teeth Scaling & Deep Cleaning">Teeth Scaling &amp; Deep Cleaning</option>
                  <option value="Clear Aligners & Orthodontics">Clear Aligners &amp; Orthodontics</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Root Canal Therapy">Root Canal Therapy</option>
                  <option value="General Diagnostics & Checkup">General Diagnostics &amp; Checkup</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Your Review &amp; Experience *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How was your procedure? How did our dental team make you feel comfortable?"
                  value={authorComment}
                  onChange={(e) => setAuthorComment(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0A2558] hover:bg-[#081e46] text-white rounded-lg text-xs font-semibold shadow transition-colors cursor-pointer"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
