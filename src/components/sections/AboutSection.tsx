import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Eye } from 'lucide-react';
import { FOUNDATION_META } from '../../data/foundationContent';
import { slideInFromLeft, slideInFromRight } from '../../lib/animations';
import { PhotoViewerModal, PhotoViewerItem } from '../ui/PhotoViewerModal';

export const AboutSection: React.FC = () => {
  const [viewerPhoto, setViewerPhoto] = useState<PhotoViewerItem | null>(null);

  const handleOpenPhoto = (src: string, title: string, location: string, description: string) => {
    setViewerPhoto({ src, title, location, description });
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8F6F0] relative overflow-hidden">
      {/* Subtle Logo Watermark */}
      <div
        className="absolute -left-24 bottom-10 w-[480px] h-[480px] opacity-[0.035] pointer-events-none select-none mix-blend-multiply hidden md:block"
        aria-hidden="true"
      >
        <img
          src="/assets/brand/official-logo.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Narrative (Slides in from Left) */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#C56F50] block">
              Origin &amp; Mission
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173F35] font-normal tracking-tight leading-tight">
              Rooted in Telangana. Built on frontline community service.
            </h2>

            <div className="space-y-4 text-base text-[#686B64] leading-relaxed">
              <p>
                Basanthi Foundation was founded by <strong>Ajay Raidu Abbineni</strong> with a clear directive: community work must be practical, immediate, and visible in people’s everyday lives.
              </p>
              <p>
                Rather than working through layers of administrative bureaucracy, our team operates directly on the ground. When children in rural government schools lack basic desks or study bags, we deliver them. When high-density transit junctions need public safety and hot food support, we work with local police divisions to set up outposts and organize regular meal drives.
              </p>
            </div>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-xl bg-white border-l-4 border-[#C56F50] border border-[#E8E5DC]">
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#173F35] leading-relaxed">
                “When we serve food to a frontline sanitation worker or place a proper school kit in the hands of a rural child, we affirm their human dignity. That is what Basanthi Foundation stands for.”
              </blockquote>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-[#173F35] font-bold block">{FOUNDATION_META.founder}</strong>
                  <span className="text-[#686B64]">{FOUNDATION_META.founderTitle}</span>
                </div>
                <a
                  href={FOUNDATION_META.founderInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C56F50] hover:underline flex items-center gap-1"
                >
                  Follow @ajay_raidu
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E8E5DC]">
                <h4 className="text-sm font-bold text-[#173F35] mb-1">Direct Field Execution</h4>
                <p className="text-xs text-[#686B64] leading-relaxed">
                  We procure school kits, prepare meals, and conduct distributions directly with our own volunteer team.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E5DC]">
                <h4 className="text-sm font-bold text-[#173F35] mb-1">Civic Police Partnerships</h4>
                <p className="text-xs text-[#686B64] leading-relaxed">
                  Active infrastructure collaboration with Cyberabad Police to protect public transit corridors and women commuters.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Real Photos Frame (Slides in from Right) */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Photo 1: Cheque handover with Cyberabad Police */}
            <div className="bg-white p-3 rounded-2xl border border-[#E8E5DC] shadow-sm">
              <div
                onClick={() =>
                  handleOpenPhoto(
                    '/assets/initiatives/cyberabad-police-cheque-handover.png',
                    'Cyberabad Police Outpost Sponsorship Handover',
                    'Cyberabad Police Headquarters',
                    'Ajay Raidu presenting sponsorship support to Cyberabad Police Officer with emblem on wall.'
                  )
                }
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#173F35] cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label="View photo"
              >
                <img
                  src="/assets/initiatives/cyberabad-police-cheque-handover.png"
                  alt="Ajay Raidu presenting sponsorship cheque to Cyberabad Police Officer in front of police emblem"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold flex items-center gap-1.5 border border-white/30">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#EAA23B]" />
                  <span>Cyberabad Police Headquarters</span>
                </div>
              </div>
              <div className="pt-2.5 px-1 text-xs text-[#686B64]">
                <strong className="text-[#173F35] font-semibold block">
                  Cyberabad Police Outpost Handover
                </strong>
                <span className="text-[11px]">
                  Ajay Raidu formally handing over sponsorship support for the KPHB Metro Station Police Outpost.
                </span>
              </div>
            </div>

            {/* Photo 2: Community food drive */}
            <div className="bg-white p-3 rounded-2xl border border-[#E8E5DC] shadow-sm">
              <div
                onClick={() =>
                  handleOpenPhoto(
                    '/assets/initiatives/police-outpost-food-relief.png',
                    'Transit Outpost Community Food Relief',
                    'Kukatpally Police Outpost, KPHB',
                    'Ajay Raidu serving hot meals to municipal staff and commuters outside police outpost.'
                  )
                }
                className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#173F35] cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label="View photo"
              >
                <img
                  src="/assets/initiatives/police-outpost-food-relief.png"
                  alt="Ajay Raidu serving hot meals outside Kukatpally Police Outpost at KPHB Metro Station"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold flex items-center gap-1.5 border border-white/30">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#EAA23B]" />
                  <span>Kukatpally Police Outpost, KPHB</span>
                </div>
              </div>
              <div className="pt-2 px-1 text-xs text-[#686B64]">
                <span className="text-[11px]">
                  Serving fresh meals to sanitation workers and transit passengers outside the sponsored outpost.
                </span>
              </div>
            </div>
          </motion.div>

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
