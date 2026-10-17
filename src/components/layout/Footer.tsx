import React from 'react';
import { ArrowUp, Heart, AlertCircle, ShieldAlert } from 'lucide-react';
import { InstagramIcon } from '../ui/SocialIcons';
import { FOUNDATION_META } from '../../data/foundationContent';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#0D2620] text-[#F8F6F0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Prominent Demonstration Purposes Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-[#EAA23B]/40 text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#EAA23B] shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-xs sm:text-sm">
              <strong className="text-white block sm:inline mr-2 uppercase tracking-wider font-bold">
                Demonstration Purposes Only:
              </strong>
              <span>
                This website is created for demonstration and internal foundation review purposes. Formal statutory certifications, tax exemptions, and banking credentials are subject to final publication by Basanthi Foundation.
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#EAA23B] text-[#173F35] shrink-0">
            Preview Prototype
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center">
                <img
                  src="/assets/brand/official-logo.png"
                  alt="Basanthi Foundation"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block">BASANTHI FOUNDATION</span>
                <span className="text-[10px] uppercase tracking-widest text-[#EAA23B] block">Grassroots Social Welfare • Telangana</span>
              </div>
            </div>

            <p className="text-xs text-[#DCE7DB]/80 leading-relaxed max-w-sm">
              Founded by Ajay Raidu Abbineni. Direct grassroots community welfare across Telangana — government primary school kits, transit police outposts, and hot meal distributions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={FOUNDATION_META.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#EAA23B] hover:text-[#173F35] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram @basanthi_foundation"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#DCE7DB]/80">Follow @basanthi_foundation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EAA23B]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#DCE7DB]/80">
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#initiatives" onClick={(e) => handleSmoothScroll(e, '#initiatives')} className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#campaigns" onClick={(e) => handleSmoothScroll(e, '#campaigns')} className="hover:text-white transition-colors">Campaigns</a></li>
              <li><a href="#gallery" onClick={(e) => handleSmoothScroll(e, '#gallery')} className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EAA23B]">
              Field Initiatives
            </h4>
            <ul className="space-y-2 text-xs text-[#DCE7DB]/80">
              <li>Government Primary School Kit Drives</li>
              <li>Cyberabad Police Outpost Handover</li>
              <li>Arrive Alive Helmet Distribution Drive</li>
              <li>Community Hot Meal Drives at Transit Nodes</li>
              <li>Free Buttermilk &amp; Sharbat Stalls</li>
              <li>Ganesh Nimajjanam Water Stalls</li>
            </ul>
          </div>

          {/* Action */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#EAA23B]">
              Support
            </h4>
            <button
              onClick={onOpenDonate}
              className="w-full py-2.5 px-4 rounded-full bg-[#EAA23B] text-[#173F35] font-bold text-xs uppercase tracking-wider hover:bg-[#F4BA63] transition-colors flex items-center justify-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-[#173F35]" />
              Support Us
            </button>
            <button
              onClick={onOpenVolunteer}
              className="w-full py-2.5 px-4 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Volunteer
            </button>
            <button
              onClick={scrollToTop}
              className="w-full py-2 px-3 rounded-full bg-white/5 hover:bg-white/10 text-xs text-[#DCE7DB]/70 flex items-center justify-center gap-1.5 transition-colors mt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE7DB]/60">
          <div>
            © {new Date().getFullYear()} Basanthi Foundation • For Demonstration Purposes Only.
          </div>
          <div className="flex items-center gap-4">
            <span>Hyderabad, Telangana</span>
            <span>•</span>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-white transition-colors">Ethics &amp; Accountability</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
