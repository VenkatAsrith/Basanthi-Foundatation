import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { modalBackdropVariants } from '../../lib/animations';

export interface PhotoViewerItem {
  src: string;
  title: string;
  category?: string;
  location?: string;
  description?: string;
}

interface PhotoViewerModalProps {
  photo: PhotoViewerItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNavigation?: boolean;
}

export const PhotoViewerModal: React.FC<PhotoViewerModalProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
  hasNavigation = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <motion.div
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xs"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl w-full bg-[#173F35] rounded-2xl overflow-hidden shadow-2xl border border-white/20 text-white flex flex-col text-left"
        >
          {/* Top Bar */}
          <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2 text-xs">
              {photo.category && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#EAA23B] text-[#173F35] font-bold uppercase tracking-wider text-[10px]">
                  {photo.category}
                </span>
              )}
              {photo.location && (
                <span className="text-[#DCE7DB]/90 flex items-center gap-1 font-medium text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#EAA23B]" />
                  {photo.location}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close photo viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Photo Display */}
          <div className="relative max-h-[70vh] w-full bg-black/50 flex items-center justify-center overflow-hidden">
            <img
              src={photo.src}
              alt={photo.title}
              className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            />

            {hasNavigation && onPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {hasNavigation && onNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Caption */}
          <div className="p-4 bg-[#0D2620]">
            <h4 className="font-serif text-lg text-white font-medium">
              {photo.title}
            </h4>
            {photo.description && (
              <p className="text-xs text-[#DCE7DB]/80 mt-1 leading-relaxed">
                {photo.description}
              </p>
            )}
            <div className="mt-2 flex items-center justify-between text-[11px] text-[#DCE7DB]/50">
              <span>Basanthi Foundation Photographic Archive</span>
              <span>Press Escape to close</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
