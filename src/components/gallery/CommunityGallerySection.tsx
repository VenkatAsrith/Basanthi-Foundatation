import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, MapPin, Quote } from 'lucide-react';
import { GALLERY_ITEMS, STORIES } from '../../data/foundationContent';
import { modalBackdropVariants, fadeInUp, staggerContainer } from '../../lib/animations';

export const CommunityGallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-b border-[#E8E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C56F50] block mb-2">
            Field Documentation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173F35] font-normal leading-tight">
            Moments from the Ground
          </h2>
          <p className="mt-3 text-base text-[#686B64] leading-relaxed">
            Real photographic records from Basanthi Foundation initiatives — kit handovers, community meals, hydration relief, and civic partnerships.
          </p>
        </div>

        {/* Gallery Grid - Vertical Scroll Trigger Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              onClick={() => setLightboxIndex(idx)}
              className="bg-[#F8F6F0] rounded-2xl border border-[#E8E5DC] overflow-hidden cursor-pointer group flex flex-col justify-between hover:border-[#173F35]/40 transition-colors shadow-xs"
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#173F35]">
                  <img
                    src={item.src}
                    alt={item.alt}
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
                    {item.category}
                  </div>

                  <div className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#EAA23B]" />
                    <span className="truncate max-w-[200px]">{item.location}</span>
                  </div>
                </div>

                <div className="p-4 bg-white text-left">
                  <h3 className="font-serif text-base font-medium text-[#173F35] line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#686B64] mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 border-t border-[#E8E5DC] bg-[#F8F6F0] flex items-center justify-between text-xs text-[#686B64]">
                <span className="flex items-center gap-1 font-semibold text-[#173F35]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Photo</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-[#C56F50]">Expand</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Strip */}
        <div className="mt-16 pt-12 border-t border-[#E8E5DC]">
          <h3 className="font-serif text-2xl text-[#173F35] font-normal mb-8">
            Voices from Communities We Serve
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORIES.map((story) => (
              <div
                key={story.id}
                className="p-6 rounded-xl bg-[#F8F6F0] border border-[#E8E5DC] flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#C56F50] mb-3 opacity-60" />
                  <p className="text-xs sm:text-sm text-[#242622] leading-relaxed italic">
                    “{story.quote}”
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#E8E5DC]">
                  <h4 className="text-xs font-bold text-[#173F35]">{story.speaker}</h4>
                  <p className="text-[11px] text-[#686B64]">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Accessible Responsive Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && GALLERY_ITEMS[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              variants={modalBackdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xs"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl w-full bg-[#173F35] rounded-2xl overflow-hidden shadow-2xl border border-white/20 text-white flex flex-col">
              {/* Controls */}
              <div className="p-3.5 sm:p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EAA23B] text-[#173F35] font-bold uppercase tracking-wider text-[10px]">
                    {GALLERY_ITEMS[lightboxIndex].category}
                  </span>
                  <span className="text-[#DCE7DB]/80 flex items-center gap-1 font-medium text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#EAA23B]" />
                    {GALLERY_ITEMS[lightboxIndex].location}
                  </span>
                </div>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Image Frame */}
              <div className="relative max-h-[68vh] w-full bg-black/50 flex items-center justify-center overflow-hidden">
                <img
                  src={GALLERY_ITEMS[lightboxIndex].src}
                  alt={GALLERY_ITEMS[lightboxIndex].alt}
                  className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) =>
                      prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
                    );
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) =>
                      prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null
                    );
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption */}
              <div className="p-4 bg-[#0D2620] text-left">
                <h4 className="font-serif text-lg text-white font-medium">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h4>
                <p className="text-xs text-[#DCE7DB]/80 mt-1 leading-relaxed">
                  {GALLERY_ITEMS[lightboxIndex].description}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#DCE7DB]/50">
                  <span>Photo {lightboxIndex + 1} of {GALLERY_ITEMS.length}</span>
                  <span>Use arrow keys or Escape to close</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
