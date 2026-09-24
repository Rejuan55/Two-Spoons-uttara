import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  Eye, 
  Sparkles, 
  Plus, 
  Check, 
  Edit3, 
  HelpCircle,
  Video,
  Calendar
} from 'lucide-react';
import { ProcedureVideo } from '../types/dental';

interface VideoProceduresSectionProps {
  videos: ProcedureVideo[];
  onSelectVideo: (video: ProcedureVideo) => void;
  onBookProcedure: (procedureTitle: string) => void;
  onAddNewVideo?: (newVideo: ProcedureVideo) => void;
}

export const VideoProceduresSection: React.FC<VideoProceduresSectionProps> = ({
  videos,
  onSelectVideo,
  onBookProcedure,
  onAddNewVideo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New video form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ProcedureVideo['category']>('scaling');
  const [newUrl, setNewUrl] = useState('');
  const [newDuration, setNewDuration] = useState('3:30 min');
  const [newDesc, setNewDesc] = useState('');

  const filterTabs = [
    { key: 'all', label: 'All Procedure Videos' },
    { key: 'scaling', label: 'Teeth Scaling' },
    { key: 'cleaning', label: 'Teeth Cleaning' },
    { key: 'whitening', label: 'Teeth Whitening' },
    { key: 'aligners', label: 'Clear Aligners' },
    { key: 'implants', label: 'Dental Implants' },
    { key: 'root-canal', label: 'Root Canal' },
  ];

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  const handleCreateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    const created: ProcedureVideo = {
      id: `vid-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      categoryLabel: filterTabs.find(t => t.key === newCategory)?.label || 'Dental Care',
      duration: newDuration || '3:00 min',
      views: 'New',
      description: newDesc.trim() || 'Clinical walkthrough demonstrating safe, pain-free dental technique and care steps.',
      videoUrl: newUrl.trim(),
      thumbnailUrl: '/src/assets/images/dental_teeth_cleaning_1790263731757.jpg',
      steps: [
        'Initial oral diagnostic inspection',
        'Application of gentle topical comfort matrix',
        'Performance of specialized procedure',
        'Post-treatment hygiene polish & instruction'
      ],
      benefits: [
        'Enhanced oral hygiene & gum health',
        'Gentle and comfortable experience',
        'Visible results backed by dental diagnostics'
      ],
      dentistTips: 'Consult with your dentist to ensure personalized care tailored to your specific tooth anatomy.',
      isCustomVideo: true
    };

    if (onAddNewVideo) {
      onAddNewVideo(created);
    }
    setIsAddModalOpen(false);
    setNewTitle('');
    setNewUrl('');
    setNewDesc('');
  };

  return (
    <section id="video-procedures" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-800">
              <Video className="w-3.5 h-3.5 text-teal-700" />
              <span>Video Demonstration Library</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-700">Patient Care &amp; Clinical Walkthroughs</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2558] font-display tracking-tight text-balance">
              Watch How We Perform Gentle Dental Procedures
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed text-balance">
              Curious about what happens during ultrasonic teeth scaling, deep cleaning, or clear aligner fitting? Watch our real clinical video demonstrations and see the gentle technology behind every healthy smile.
            </p>
          </div>

          {/* Add / Embed Custom Video Button */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 text-teal-700" />
              <span>Add / Embed Custom Video</span>
            </button>
          </div>
        </div>

        {/* Filter Segmented Control Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-100 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === tab.key
                  ? 'bg-[#0A2558] text-white shadow-xs font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div 
                className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => onSelectVideo(video)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/95 text-[#0A2558] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1 text-[#0A2558]" />
                  </div>
                </div>

                {/* Duration & Views Overlay Badges */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 text-white text-[11px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-teal-400" />
                  <span>{video.duration}</span>
                </div>

                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0A2558]/85 text-teal-200 text-[11px] font-semibold">
                  {video.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-700 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>{video.views}</span>
                    </span>
                    {video.isCustomVideo && (
                      <span className="text-[10px] text-teal-800 font-semibold bg-teal-50 px-1.5 py-0.5 rounded">
                        Custom Video
                      </span>
                    )}
                  </div>

                  <h3 
                    onClick={() => onSelectVideo(video)}
                    className="text-base font-bold text-slate-900 group-hover:text-[#0A2558] transition-colors leading-snug cursor-pointer"
                  >
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Procedure quick steps preview */}
                <div className="pt-3 border-t border-slate-100 text-xs">
                  <p className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Procedure Highlights:
                  </p>
                  <p className="text-[11px] text-slate-600 line-clamp-2">
                    {video.steps.slice(0, 2).join(' · ')}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onSelectVideo(video)}
                    className="text-teal-700 hover:text-teal-800 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Video</span>
                  </button>

                  <button
                    onClick={() => onBookProcedure(video.title)}
                    className="text-[#0A2558] hover:text-teal-700 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Procedure</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Placeholder Tip Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-blue-50/70 border border-blue-100/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0A2558] flex items-center justify-center shrink-0">
              <Video className="w-5 h-5 text-[#0A2558]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0A2558]">
                Looking to add your own clinical teeth scaling or cleaning videos?
              </h4>
              <p className="text-xs text-slate-600">
                You can easily replace the video links above with your own YouTube, Vimeo, or MP4 URLs at any time using the "Add / Embed Custom Video" button.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-[#0A2558] text-white rounded-lg text-xs font-semibold hover:bg-[#081e46] transition-colors whitespace-nowrap cursor-pointer"
          >
            Add Your Video
          </button>
        </div>

      </div>

      {/* Add Custom Video Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#0A2558]">
                Add or Embed Procedure Video
              </h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateVideo} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Procedure Video Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Painless Teeth Scaling with Water Lavage"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Procedure Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  >
                    <option value="scaling">Teeth Scaling</option>
                    <option value="cleaning">Teeth Cleaning</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="aligners">Braces &amp; Aligners</option>
                    <option value="implants">Dental Implants</option>
                    <option value="root-canal">Root Canal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4:20 min"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Video URL (YouTube / Vimeo / MP4) *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <p className="text-[10px] text-slate-600 mt-1">
                  Supports standard YouTube watch links, youtu.be short links, or direct MP4 video URLs.
                </p>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Procedure Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the clinical steps and what the patient experiences..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0A2558] hover:bg-[#081e46] text-white rounded-lg text-xs font-semibold shadow transition-colors cursor-pointer"
                >
                  Add Video Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
