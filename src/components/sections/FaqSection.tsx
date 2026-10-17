import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/foundationContent';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E8E5DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#173F35] bg-[#173F35]/10">
            <HelpCircle className="w-3.5 h-3.5" />
            Governance &amp; Operations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173F35] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#686B64]">
            Clear, candid answers regarding our grassroots execution, school selection, and volunteer participation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E8E5DC] overflow-hidden bg-[#F8F6F0]/60 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EAA23B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#173F35]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E8E5DC] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#173F35] text-white' : 'text-[#173F35]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#686B64] leading-relaxed border-t border-[#E8E5DC]/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
