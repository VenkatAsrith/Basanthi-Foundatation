import React from 'react';
import { Users, Check } from 'lucide-react';

interface VolunteerSectionProps {
  onOpenVolunteer: () => void;
  onOpenDonate: () => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({
  onOpenVolunteer,
  onOpenDonate,
}) => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E8E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-[#173F35] text-white p-8 sm:p-12 text-left">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#EAA23B]">
              <Users className="w-3.5 h-3.5" />
              <span>Ground Volunteer Network</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              Change is built with hands on the ground.
            </h2>

            <p className="text-sm sm:text-base text-[#DCE7DB]/90 leading-relaxed font-light">
              Join our field volunteers across Telangana — assisting in school kit distributions, coordinating festival drinking water relief camps, and serving meals to frontline sanitation workers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-[#DCE7DB]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#EAA23B] shrink-0" />
                <span>Primary school learning kit handovers</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#EAA23B] shrink-0" />
                <span>Festival drinking water distribution stalls</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#EAA23B] shrink-0" />
                <span>Hot meal drives outside transit outposts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#EAA23B] shrink-0" />
                <span>Eco-friendly clay Ganesha drives</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenVolunteer}
                className="px-6 py-3 rounded-full bg-[#EAA23B] text-[#173F35] font-bold text-xs uppercase tracking-wider hover:bg-[#F4BA63] transition-colors"
              >
                Register as Volunteer
              </button>
              <button
                onClick={onOpenDonate}
                className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Sponsor Materials
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
