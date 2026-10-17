import React, { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { TrustImpactSection } from './components/sections/TrustImpactSection';
import { AboutSection } from './components/sections/AboutSection';
import { AreasOfWorkSection } from './components/sections/AreasOfWorkSection';
import { CampaignsSection } from './components/campaigns/CampaignsSection';
import { CommunityGallerySection } from './components/gallery/CommunityGallerySection';
import { VolunteerSection } from './components/sections/VolunteerSection';
import { DonationSection } from './components/sections/DonationSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { DonationModal } from './components/forms/DonationModal';
import { VolunteerModal } from './components/forms/VolunteerModal';

export const App: React.FC = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#242622] flex flex-col font-sans selection:bg-[#EAA23B]/30 selection:text-[#173F35]">
      {/* Navigation */}
      <Navbar
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Main Experience Flow */}
      <main className="flex-grow">
        <HeroSection
          onOpenDonate={() => setIsDonateOpen(true)}
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
        />
        
        <TrustImpactSection />
        
        <AboutSection />
        
        <AreasOfWorkSection
          onOpenDonate={() => setIsDonateOpen(true)}
        />
        
        <CampaignsSection
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
          onOpenDonate={() => setIsDonateOpen(true)}
        />
        
        <CommunityGallerySection />
        
        <VolunteerSection
          onOpenVolunteer={() => setIsVolunteerOpen(true)}
          onOpenDonate={() => setIsDonateOpen(true)}
        />
        
        <DonationSection
          onOpenDonate={() => setIsDonateOpen(true)}
        />
        
        <FaqSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Interactive Global Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />
    </div>
  );
};

export default App;
