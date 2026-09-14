import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  subtitle?: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const ImageLightboxModal: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  image,
  title,
  subtitle,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen) return null;

  return (
    <div 
      id="lightbox-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative max-w-4xl w-full bg-[#181614] border border-[#332e27] rounded-lg overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          id="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#121110]/80 text-[#d4c9bc] hover:text-[#c59d5f] hover:bg-[#121110] border border-[#383229] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="relative w-full max-h-[70vh] bg-[#0c0b0a] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Info footer */}
        <div className="p-5 bg-[#181614] border-t border-[#2a2620] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#f5efe5]">{title}</h3>
            {subtitle && <p className="text-xs text-[#a39786] mt-0.5">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#c59d5f] font-mono">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Two Spoons Uttara Preview</span>
          </div>
        </div>
      </div>
    </div>
  );
};
