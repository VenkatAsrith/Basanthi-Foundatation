import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, MapPin, Eye } from 'lucide-react';
import { INITIATIVES } from '../../data/foundationContent';
import { Initiative } from '../../types';
import { InitiativeDetailModal } from '../ui/InitiativeDetailModal';
import { PhotoViewerModal, PhotoViewerItem } from '../ui/PhotoViewerModal';
import { slideInFromLeft, slideInFromRight, staggerContainer } from '../../lib/animations';

interface AreasOfWorkSectionProps {
  onOpenDonate: () => void;
}

export const AreasOfWorkSection: React.FC<AreasOfWorkSectionProps> = ({ onOpenDonate }) => {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);
  const [viewerPhoto, setViewerPhoto] = useState<PhotoViewerItem | null>(null);

  const handleOpenPhoto = (item: Initiative) => {
    setViewerPhoto({
      src: item.image,
      title: item.title,
      category: item.categoryLabel,
      location: item.location,
      description: item.overview,
    });
  };

  return (
    <section id="initiatives" className="py-16 md:py-24 bg-white border-b border-[#E8E5DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C56F50] block mb-2">
            Field Programs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173F35] font-normal leading-tight">
            Verified Areas of Work
          </h2>
          <p className="mt-3 text-base text-[#686B64] leading-relaxed">
            Every initiative is executed directly on the ground by Basanthi Foundation, documented with verified photography and active civic partnerships.
          </p>
        </div>

        {/* 4 Cards Grid - Matching 'Moments from the Ground' ratio (aspect-[3/4]) with horizontal scroll entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIATIVES.map((item, idx) => {
            // Horizontal scroll-trigger: alternate left/right slide-in
            const isEven = idx % 2 === 0;
            const animationVariant = isEven ? slideInFromLeft : slideInFromRight;

            return (
              <motion.div
                key={item.id}
                variants={animationVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="bg-[#F8F6F0] rounded-2xl border border-[#E8E5DC] overflow-hidden flex flex-col justify-between hover:border-[#173F35]/40 transition-colors group shadow-xs"
              >
                <div>
                  {/* Portrait Photo Container with 3:4 Aspect Ratio matching Moments from the Ground */}
                  <div
                    onClick={() => handleOpenPhoto(item)}
                    className="relative aspect-[3/4] overflow-hidden bg-[#173F35] cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo: ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenPhoto(item);
                      }
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold flex items-center gap-1.5 border border-white/30">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {item.categoryLabel}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#EAA23B]" />
                      <span className="truncate max-w-[200px]">{item.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5 bg-white">
                    <h3 className="font-serif text-lg font-medium text-[#173F35] leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#686B64] leading-relaxed line-clamp-3">
                      {item.overview}
                    </p>

                    <div className="pt-2 border-t border-[#E8E5DC] space-y-1">
                      {item.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[#242622]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="px-5 py-3.5 border-t border-[#E8E5DC] bg-[#F8F6F0] flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleOpenPhoto(item)}
                    className="font-semibold text-[#686B64] hover:text-[#173F35] flex items-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </button>

                  <button
                    onClick={() => setSelectedInitiative(item)}
                    className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-[#173F35] hover:text-[#C56F50] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal */}
        <InitiativeDetailModal
          initiative={selectedInitiative}
          onClose={() => setSelectedInitiative(null)}
          onOpenDonate={onOpenDonate}
        />

        {/* High-Resolution Photo Viewer Modal */}
        <PhotoViewerModal
          photo={viewerPhoto}
          onClose={() => setViewerPhoto(null)}
        />

      </div>
    </section>
  );
};
