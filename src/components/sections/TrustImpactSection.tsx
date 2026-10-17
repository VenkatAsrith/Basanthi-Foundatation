import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VERIFIED_STATS, FOUNDATION_META } from '../../data/foundationContent';
import { verticalSectionReveal, fadeInUp, staggerContainer } from '../../lib/animations';

export const TrustImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-16 md:py-24 bg-white border-y border-[#E8E5DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header - Vertical scroll trigger */}
        <motion.div
          variants={verticalSectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#C56F50] block mb-2">
            Field Accountability
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173F35] font-normal leading-tight">
            Impact measured in real, tangible outcomes across communities.
          </h2>
          <p className="mt-3 text-base text-[#686B64] leading-relaxed">
            Basanthi Foundation connects every initiative directly to verified community work — from classroom kit handovers to permanent police booths and community hydration stalls.
          </p>
        </motion.div>

        {/* 4 Clean Columns Grid with Vertical Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VERIFIED_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className="p-6 rounded-xl bg-[#F8F6F0] border border-[#E8E5DC] flex flex-col justify-between hover:border-[#173F35]/30 transition-colors shadow-xs"
            >
              <div>
                <span className="text-xs font-bold font-mono text-[#8C5338] block mb-3">
                  0{idx + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C56F50] block mb-1">
                  {stat.label}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#173F35] mb-2 leading-snug">
                  {stat.value}
                </h3>
                <p className="text-xs text-[#686B64] leading-relaxed">
                  {stat.subtext}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E8E5DC] flex items-center justify-between text-[11px] text-[#686B64]">
                <span className="font-medium text-[#173F35] truncate max-w-[190px]">{stat.citation}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Direct Link Strip */}
        <div className="mt-10 p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-[#686B64]">
            <strong className="text-[#173F35] font-semibold mr-1">Public Verification:</strong>
            All initiatives are recorded with live video reels and photos on our official Instagram page.
          </div>
          <a
            href={FOUNDATION_META.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#173F35] hover:text-[#C56F50] transition-colors"
          >
            <span>View Instagram Archives</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
