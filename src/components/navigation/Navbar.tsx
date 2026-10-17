import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FOUNDATION_META } from '../../data/foundationContent';

interface NavbarProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Our Work', href: '#initiatives' },
    { label: 'Campaigns', href: '#campaigns' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F8F6F0]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E8E5DC]'
            : 'bg-[#F8F6F0] py-3.5 border-b border-[#E8E5DC]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Official Logo */}
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center gap-3 focus:outline-none rounded-md"
              aria-label="Basanthi Foundation Home"
            >
              <img
                src="/assets/brand/official-logo.png"
                alt="Basanthi Foundation"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#242622] hover:text-[#173F35] hover:bg-black/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenVolunteer}
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-[#242622]/20 text-[#242622] hover:border-[#173F35] hover:text-[#173F35] transition-colors"
              >
                Volunteer
              </button>
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#173F35] text-[#F8F6F0] hover:bg-[#0D2620] transition-colors shadow-xs"
              >
                <Heart className="w-3.5 h-3.5 text-[#EAA23B] fill-[#EAA23B]" />
                <span>Support Us</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenDonate}
                className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#173F35] text-[#F8F6F0] flex items-center gap-1.5"
              >
                <Heart className="w-3 h-3 text-[#EAA23B] fill-[#EAA23B]" />
                <span>Support</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#173F35] hover:bg-black/5 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#F8F6F0] shadow-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E5DC]">
                  <img
                    src="/assets/brand/official-logo.png"
                    alt="Basanthi Foundation"
                    className="h-10 w-auto"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-black/5 text-[#242622]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#242622] hover:bg-[#DCE7DB]/50 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#686B64]" />
                    </a>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-[#E8E5DC] space-y-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDonate();
                    }}
                    className="w-full py-3 rounded-xl bg-[#173F35] text-[#F8F6F0] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 text-[#EAA23B] fill-[#EAA23B]" />
                    Support Our Mission
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenVolunteer();
                    }}
                    className="w-full py-2.5 rounded-xl border border-[#173F35]/30 text-[#173F35] font-semibold text-xs uppercase tracking-wider"
                  >
                    Volunteer With Us
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E5DC] text-xs text-[#686B64]">
                <a
                  href={FOUNDATION_META.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#173F35] hover:underline"
                >
                  Follow @basanthi_foundation on Instagram
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
