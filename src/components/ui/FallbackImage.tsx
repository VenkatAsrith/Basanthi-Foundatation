import React, { useState } from 'react';
import { BookOpen, Shield, HeartHandshake, Stethoscope, Droplets, Sparkles } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  category?: 'education' | 'safety' | 'healthcare' | 'community' | 'hero' | string;
  title?: string;
  location?: string;
  className?: string;
  aspectRatioClass?: string;
  priority?: boolean;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  category = 'education',
  title,
  location,
  className = '',
  aspectRatioClass = 'aspect-[16/10]',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Return editorial SVG fallback if image is missing or failed
  const renderEditorialPlaceholder = () => {
    switch (category) {
      case 'education':
        return (
          <div className={`relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#173F35] via-[#1F4F43] to-[#0D2620] text-[#F8F6F0] overflow-hidden select-none ${className}`}>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EAA23B_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="flex items-center justify-between relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAA23B]/20 text-[#EAA23B] border border-[#EAA23B]/30 tracking-wider uppercase">
                <BookOpen className="w-3.5 h-3.5" />
                Primary Education
              </span>
              {location && (
                <span className="text-xs text-[#DCE7DB]/80 font-medium">{location}</span>
              )}
            </div>

            <div className="relative z-10 my-auto text-center py-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-[#F8F6F0]/10 flex items-center justify-center border border-[#F8F6F0]/15 backdrop-blur-sm">
                <BookOpen className="w-7 h-7 text-[#EAA23B]" />
              </div>
              <h4 className="font-serif text-lg md:text-xl text-white font-medium max-w-xs mx-auto line-clamp-2">
                {title || alt}
              </h4>
              <p className="text-xs text-[#DCE7DB]/70 mt-1 max-w-xs mx-auto">
                Government Primary School Modernization Project
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#DCE7DB]/60 border-t border-white/10 pt-3 relative z-10">
              <span>Basanthi Foundation Project</span>
              <span className="text-[#EAA23B] font-medium">Pending Photo Upload</span>
            </div>
          </div>
        );

      case 'safety':
        return (
          <div className={`relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#0F2D25] via-[#173F35] to-[#242622] text-[#F8F6F0] overflow-hidden select-none ${className}`}>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F8F6F0_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="flex items-center justify-between relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCE7DB]/20 text-[#DCE7DB] border border-[#DCE7DB]/30 tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5" />
                Civic Safety
              </span>
              {location && (
                <span className="text-xs text-[#DCE7DB]/80 font-medium">{location}</span>
              )}
            </div>

            <div className="relative z-10 my-auto text-center py-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-[#F8F6F0]/10 flex items-center justify-center border border-[#F8F6F0]/15 backdrop-blur-sm">
                <Shield className="w-7 h-7 text-[#EAA23B]" />
              </div>
              <h4 className="font-serif text-lg md:text-xl text-white font-medium max-w-xs mx-auto line-clamp-2">
                {title || alt}
              </h4>
              <p className="text-xs text-[#DCE7DB]/70 mt-1 max-w-xs mx-auto">
                Cyberabad Police Collaboration &amp; Community Security
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#DCE7DB]/60 border-t border-white/10 pt-3 relative z-10">
              <span>Kukatpally &amp; KPHB Zone</span>
              <span className="text-[#EAA23B] font-medium">Verified Civic Initiative</span>
            </div>
          </div>
        );

      case 'healthcare':
        return (
          <div className={`relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#242622] via-[#1F332C] to-[#173F35] text-[#F8F6F0] overflow-hidden select-none ${className}`}>
            <div className="flex items-center justify-between relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C56F50]/20 text-[#EAA23B] border border-[#C56F50]/30 tracking-wider uppercase">
                <Stethoscope className="w-3.5 h-3.5" />
                Medical Lifeline
              </span>
              {location && (
                <span className="text-xs text-[#DCE7DB]/80 font-medium">{location}</span>
              )}
            </div>

            <div className="relative z-10 my-auto text-center py-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-[#F8F6F0]/10 flex items-center justify-center border border-[#F8F6F0]/15 backdrop-blur-sm">
                <Stethoscope className="w-7 h-7 text-[#C56F50]" />
              </div>
              <h4 className="font-serif text-lg md:text-xl text-white font-medium max-w-xs mx-auto line-clamp-2">
                {title || alt}
              </h4>
              <p className="text-xs text-[#DCE7DB]/70 mt-1 max-w-xs mx-auto">
                Critical Hospitalization &amp; Surgery Sponsorship
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#DCE7DB]/60 border-t border-white/10 pt-3 relative z-10">
              <span>Emergency Aid Support</span>
              <span className="text-[#EAA23B] font-medium">Verified Care Support</span>
            </div>
          </div>
        );

      case 'hero':
        return (
          <div className={`relative w-full h-full min-h-[380px] md:min-h-[480px] rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-[#173F35] via-[#1C473C] to-[#0D2620] text-[#F8F6F0] overflow-hidden border border-[#EAA23B]/30 shadow-2xl ${className}`}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#EAA23B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C56F50]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EAA23B] text-[#173F35] tracking-wide uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Ground Work
              </span>
              <span className="text-xs font-medium text-[#DCE7DB]/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Telangana, India
              </span>
            </div>

            <div className="relative z-10 my-auto py-8 text-left max-w-md">
              <div className="inline-block p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-4">
                <BookOpen className="w-8 h-8 text-[#EAA23B]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-tight">
                Dignified Classrooms for Every Rural Child
              </h3>
              <p className="text-sm text-[#DCE7DB]/80 mt-2 font-light leading-relaxed">
                Revitalizing Peddagudem Government Primary School and regional Anganwadis with sturdy dual desks, water-sealed roofs, and bright learning materials.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#DCE7DB]/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Documented Foundation Initiative</span>
              </div>
              <span className="text-[#EAA23B] font-medium">Ready for Official Photography</span>
            </div>
          </div>
        );

      default:
        return (
          <div className={`relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#173F35] via-[#242622] to-[#173F35] text-[#F8F6F0] overflow-hidden ${className}`}>
            <div className="flex items-center justify-between relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#F8F6F0] border border-white/20 tracking-wider uppercase">
                <HeartHandshake className="w-3.5 h-3.5 text-[#EAA23B]" />
                Community Welfare
              </span>
            </div>
            <div className="relative z-10 my-auto text-center py-4">
              <h4 className="font-serif text-lg text-white font-medium max-w-xs mx-auto">
                {title || alt}
              </h4>
            </div>
            <div className="text-[11px] text-[#DCE7DB]/60 border-t border-white/10 pt-3 relative z-10 text-center">
              Basanthi Foundation Community Initiative
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      ) : null}

      {/* Render editorial placeholder when image is missing or failed to load */}
      {hasError && renderEditorialPlaceholder()}
    </div>
  );
};
