import React, { useState } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  Clock, 
  Eye, 
  Calendar, 
  Edit3, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { ProcedureVideo } from '../types/dental';

interface VideoModalProps {
  video: ProcedureVideo | null;
  onClose: () => void;
  onBookProcedure: (procedureTitle: string) => void;
  onUpdateVideoUrl?: (videoId: string, newUrl: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  onClose,
  onBookProcedure,
  onUpdateVideoUrl
}) => {
  if (!video) return null;

  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState(video.videoUrl);
  const [savedNotice, setSavedNotice] = useState(false);

  // Convert standard YouTube watch link or direct link to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const v = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube-nocookie.com/embed/${v}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const v = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube-nocookie.com/embed/${v}?autoplay=1`;
    }
    if (url.includes('embed/')) {
      return url.includes('autoplay') ? url : `${url}?autoplay=1`;
    }
    return url;
  };

  const handleSaveCustomUrl = () => {
    if (onUpdateVideoUrl) {
      onUpdateVideoUrl(video.id, customUrlInput.trim());
      setSavedNotice(true);
      setTimeout(() => {
        setSavedNotice(false);
        setIsEditingUrl(false);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-teal-800">{video.categoryLabel}</span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {video.duration}
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-700">
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              {video.views}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          
          {/* Video Player Container */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner border border-slate-200">
            <iframe
              src={getEmbedUrl(video.videoUrl)}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Quick Edit Video Link Bar (Allows user to paste their own video URL later) */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-600">
                <Edit3 className="w-3.5 h-3.5 text-teal-600" />
                <span className="font-medium">Video Placeholder Control:</span>
                <span className="text-slate-400 truncate max-w-xs">{video.videoUrl}</span>
              </div>
              <button
                onClick={() => setIsEditingUrl(!isEditingUrl)}
                className="text-teal-700 font-semibold hover:underline cursor-pointer"
              >
                {isEditingUrl ? 'Cancel' : 'Change Video Link'}
              </button>
            </div>

            {isEditingUrl && (
              <div className="mt-3 pt-3 border-t border-slate-200 space-y-2">
                <p className="text-[11px] text-slate-500">
                  Paste any YouTube URL, Vimeo, or MP4 video link here to display your custom clinic footage:
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleSaveCustomUrl}
                    className="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {savedNotice ? <Check className="w-3.5 h-3.5" /> : null}
                    <span>{savedNotice ? 'Saved!' : 'Update'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-xl font-bold text-[#0A2558] font-display">
              {video.title}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {video.description}
            </p>
          </div>

          {/* Procedure Step-by-Step Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Clinical Procedure Steps
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {video.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0A2558] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Key Patient Benefits
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {video.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Dentist Tip */}
              <div className="p-3 bg-teal-50/70 border border-teal-100 rounded-xl mt-4 text-xs text-teal-900">
                <span className="font-bold block mb-1">Doctor Advice:</span>
                <p className="text-teal-800 text-[11px] leading-relaxed">
                  {video.dentistTips}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Have questions about this procedure? Consult with our dentists today.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookProcedure(video.title);
              }}
              className="px-5 py-2 bg-[#0A2558] hover:bg-[#081e46] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Book This Treatment</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
