import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, MapPin, Eye } from 'lucide-react';
import { CAMPAIGNS } from '../../data/foundationContent';
import { Campaign } from '../../types';
import { PhotoViewerModal, PhotoViewerItem } from '../ui/PhotoViewerModal';
import { slideInFromLeft, slideInFromRight } from '../../lib/animations';

interface CampaignsSectionProps {
  onOpenVolunteer: () => void;
  onOpenDonate: () => void;
}

export const CampaignsSection: React.FC<CampaignsSectionProps> = ({
  onOpenVolunteer,
  onOpenDonate,
}) => {
  const [viewerPhoto, setViewerPhoto] = useState<PhotoViewerItem | null>(null);

  const handleAction = (campaign: Campaign) => {
    if (campaign.actionCta.type === 'volunteer') {
      onOpenVolunteer();
    } else {
      onOpenDonate();
    }
  };

  const handleOpenPhoto = (campaign: Campaign) => {
    setViewerPhoto({
      src: campaign.image,
      title: campaign.title,
      category: campaign.badge,
      location: campaign.location,
      description: campaign.description,
    });
  };

  return (
    <section id="campaigns" className="py-16 md:py-24 bg-[#F8F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C56F50] block mb-2">
            Active Public Mobilizations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173F35] font-normal leading-tight">
            Featured Campaigns
          </h2>
          <p className="mt-3 text-base text-[#686B64] leading-relaxed">
            Real community campaigns led by Ajay Raidu — road safety helmet drives with Cyberabad Traffic Police, summer buttermilk distributions, and festival hydration camps.
          </p>
        </div>

        {/* 4 Cards Grid - 3:4 Aspect Ratio matching Moments from the Ground */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMPAIGNS.map((campaign, idx) => {
            const isEven = idx % 2 === 0;
            const animationVariant = isEven ? slideInFromLeft : slideInFromRight;

            return (
              <motion.div
                key={campaign.id}
                variants={animationVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="bg-white rounded-2xl border border-[#E8E5DC] overflow-hidden flex flex-col justify-between hover:border-[#173F35]/40 transition-colors group shadow-xs"
              >
                <div>
                  {/* Portrait Photo Container with aspect-[3/4] matching Moments from the Ground */}
                  <div
                    onClick={() => handleOpenPhoto(campaign)}
                    className="relative aspect-[3/4] overflow-hidden bg-[#173F35] cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo: ${campaign.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenPhoto(campaign);
                      }
                    }}
                  >
                    <img
                      src={campaign.image}
                      alt={campaign.title}
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

                    <div className="absolute top-3 left-3 bg-white text-[#173F35] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {campaign.badge}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      {campaign.status}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#EAA23B]" />
                      <span className="truncate max-w-[200px]">{campaign.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-[#686B64]">
                      <Calendar className="w-3.5 h-3.5 text-[#C56F50]" />
                      <span className="truncate">{campaign.dateOrFrequency}</span>
                    </div>

                    <h3 className="font-serif text-lg font-medium text-[#173F35] leading-snug line-clamp-2">
                      {campaign.title}
                    </h3>

                    <p className="text-xs text-[#686B64] leading-relaxed line-clamp-3">
                      {campaign.description}
                    </p>

                    <div className="pt-2 border-t border-[#E8E5DC] space-y-1">
                      {campaign.actionsTaken.slice(0, 2).map((action, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[#242622]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="px-5 py-3.5 border-t border-[#E8E5DC] bg-[#F8F6F0] flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleOpenPhoto(campaign)}
                    className="font-semibold text-[#686B64] hover:text-[#173F35] flex items-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </button>

                  <button
                    onClick={() => handleAction(campaign)}
                    className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-[#173F35] hover:text-[#C56F50] transition-colors"
                  >
                    <span>{campaign.actionCta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C56F50]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
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
