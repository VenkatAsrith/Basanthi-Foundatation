import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MapPin, Building, HeartHandshake } from 'lucide-react';
import { Initiative } from '../../types';
import { modalBackdropVariants, modalContentVariants } from '../../lib/animations';

interface InitiativeDetailModalProps {
  initiative: Initiative | null;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const InitiativeDetailModal: React.FC<InitiativeDetailModalProps> = ({
  initiative,
  onClose,
  onOpenDonate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (initiative) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [initiative, onClose]);

  if (!initiative) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          aria-hidden="true"
        />

        <motion.div
          variants={modalContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E8E5DC] overflow-hidden z-10 max-h-[90vh] flex flex-col text-left"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-initiative-title"
        >
          {/* Real Photo Header */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#173F35]">
            <img
              src={initiative.image}
              alt={initiative.title}
              className="w-full h-full object-cover object-top"
            />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors z-20 focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EAA23B] text-[#173F35] mb-1.5">
                {initiative.categoryLabel}
              </span>
              <h2 id="modal-initiative-title" className="font-serif text-2xl text-white font-medium drop-shadow-md">
                {initiative.title}
              </h2>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#686B64] pb-4 border-b border-[#E8E5DC]">
              <span className="flex items-center gap-1 font-medium text-[#173F35]">
                <MapPin className="w-3.5 h-3.5 text-[#C56F50]" />
                {initiative.location}
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                {initiative.verifiedStatus}
              </span>
              {initiative.partnerAgency && (
                <span className="flex items-center gap-1 font-medium text-[#173F35]">
                  <Building className="w-3.5 h-3.5 text-blue-600" />
                  {initiative.partnerAgency}
                </span>
              )}
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#686B64] mb-2">
                Project Overview &amp; Execution
              </h4>
              <p className="text-sm text-[#242622] leading-relaxed">
                {initiative.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#173F35] mb-3">
                Key Accomplishments
              </h4>
              <div className="space-y-2">
                {initiative.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#686B64]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#E8E5DC] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#686B64]">
                Want to sponsor or volunteer for this initiative?
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-[#E8E5DC] text-xs font-semibold text-[#242622] hover:bg-[#F8F6F0]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDonate();
                  }}
                  className="px-5 py-2 rounded-full bg-[#173F35] text-white text-xs font-bold uppercase tracking-wide hover:bg-[#0D2620] flex items-center gap-1.5"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-[#EAA23B]" />
                  Support This Project
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
