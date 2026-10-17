import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, MapPin, Eye } from 'lucide-react';
import { FOUNDATION_META } from '../../data/foundationContent';
import { PhotoViewerModal, PhotoViewerItem } from '../ui/PhotoViewerModal';

interface HeroSectionProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [viewerPhoto, setViewerPhoto] = useState<PhotoViewerItem | null>(null);

  const handleScrollToInitiatives = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#initiatives')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenPhoto = () => {
    setViewerPhoto({
      src: '/assets/hero/hero-main.png',
      title: 'Founder Ajay Raidu on the Ground in Wanaparthy',
      category: 'Primary Education',
      location: 'Wanaparthy District, Telangana',
      description:
        'Founder Ajay Raidu presenting branded Basanthi Foundation educational kit bags and study resources to rural government primary school students.',
    });
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#F8F6F0] overflow-hidden">
      {/* Authentic Transparent Logo Watermark in background */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.045] pointer-events-none select-none mix-blend-multiply hidden md:block"
        aria-hidden="true"
      >
        <img
          src="/assets/brand/official-logo.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Headline with Staggered Word Reveal Animation */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.16,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#173F35] font-normal tracking-tight leading-[1.1]"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 36, filter: 'blur(4px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="inline-block mr-3"
                >
                  Small
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 36, filter: 'blur(4px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="inline-block"
                >
                  Acts.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 36, filter: 'blur(4px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="inline-block italic text-[#C56F50] mr-3"
                >
                  Lasting
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 36, filter: 'blur(4px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="inline-block"
                >
                  Change.
                </motion.span>
              </span>
            </motion.h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#686B64] font-normal leading-relaxed max-w-xl">
              Founded by Ajay Raidu, Basanthi Foundation works directly on the ground across Telangana — equipping rural government school pupils with educational kits, partnering with Cyberabad Police to safeguard transit hubs, and distributing fresh meals and drinking water to frontline communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#initiatives"
                onClick={handleScrollToInitiatives}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#173F35] text-[#F8F6F0] font-bold text-xs uppercase tracking-wider hover:bg-[#0D2620] transition-colors"
              >
                <span>Explore On-Ground Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#EAA23B]" />
              </a>

              <button
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#242622]/20 bg-white text-[#242622] font-bold text-xs uppercase tracking-wider hover:border-[#173F35] hover:text-[#173F35] transition-colors"
              >
                <Heart className="w-3.5 h-3.5 text-[#C56F50]" />
                <span>Support Our Projects</span>
              </button>
            </div>

            {/* Grounding Fact Line */}
            <div className="pt-6 border-t border-[#E8E5DC] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C56F50]">
                  Rural Education
                </span>
                <span className="text-sm font-semibold text-[#173F35] block mt-0.5">
                  Classroom Kits &amp; Desks
                </span>
                <span className="text-xs text-[#686B64]">Wanaparthy Schools</span>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C56F50]">
                  Civic Safety
                </span>
                <span className="text-sm font-semibold text-[#173F35] block mt-0.5">
                  KPHB Metro Police Outpost
                </span>
                <span className="text-xs text-[#686B64]">Cyberabad Police Partner</span>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C56F50]">
                  Direct Relief
                </span>
                <span className="text-sm font-semibold text-[#173F35] block mt-0.5">
                  Food Drives &amp; Hydration
                </span>
                <span className="text-xs text-[#686B64]">Kukatpally &amp; Festivals</span>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine Foundation Photo Frame (Clickable with Lightbox) */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white p-3 rounded-2xl border border-[#E8E5DC] shadow-sm">
              <div
                onClick={handleOpenPhoto}
                className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden bg-[#173F35] cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label="View photo in high resolution"
              >
                <img
                  src="/assets/hero/hero-main.png"
                  alt="Ajay Raidu distributing Basanthi Foundation educational kit bags to a school student"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold flex items-center gap-1.5 border border-white/30">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#EAA23B]" />
                  <span>Wanaparthy District, Telangana</span>
                </div>
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#686B64]">
                <div>
                  <strong className="text-[#173F35] font-semibold block">Founder Ajay Raidu on the Ground</strong>
                  <span className="text-[11px]">Handing over educational kit bags at rural government school</span>
                </div>
                <button
                  onClick={handleOpenPhoto}
                  className="text-[11px] font-bold text-[#C56F50] uppercase tracking-wider shrink-0 ml-2 hover:underline flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* High-Resolution Photo Viewer Modal */}
        <PhotoViewerModal
          photo={viewerPhoto}
          onClose={() => setViewerPhoto(null)}
        />

      </div>
    </section>
  );
};
