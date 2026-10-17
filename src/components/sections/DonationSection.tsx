import React from 'react';
import { Heart, ArrowRight, BookOpen, ShieldCheck, Stethoscope, ShoppingBag } from 'lucide-react';

interface DonationSectionProps {
  onOpenDonate: () => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ onOpenDonate }) => {
  const tiers = [
    {
      title: 'Student Educational Kit Pack',
      amount: '₹1,500',
      description: 'Provides durable backpacks, bilingual dictionaries, notebooks, and writing materials for rural pupils.',
      icon: ShoppingBag,
      popular: false,
    },
    {
      title: 'Classroom Dual Desk Set',
      amount: '₹2,500',
      description: 'Lifts 2 primary school children from cold, damp floors to sturdy ergonomic wooden-steel desks.',
      icon: BookOpen,
      popular: true,
    },
    {
      title: 'Direct Patient Emergency Aid',
      amount: '₹3,000',
      description: 'Directly covers essential emergency medicines and pediatric treatments for an underprivileged family.',
      icon: Stethoscope,
      popular: false,
    },
  ];

  return (
    <section id="donate" className="py-16 md:py-24 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C56F50] block mb-2">
            Direct Material Sponsorship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#173F35] font-normal leading-tight">
            Fund Tangible Change
          </h2>
          <p className="mt-3 text-base text-[#686B64] leading-relaxed">
            Every contribution is allocated directly to verified deliverables: school desks, backpacks, clean water, or hospital bills. No intermediary deductions.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.title}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-colors ${
                  tier.popular
                    ? 'bg-[#173F35] text-[#F8F6F0] shadow-md border-2 border-[#EAA23B]'
                    : 'bg-white text-[#242622] border border-[#E8E5DC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      tier.popular ? 'bg-white/10 text-[#EAA23B]' : 'bg-[#173F35]/10 text-[#173F35]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {tier.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAA23B] text-[#173F35]">
                        Priority Need
                      </span>
                    )}
                  </div>

                  <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                    tier.popular ? 'text-[#EAA23B]' : 'text-[#C56F50]'
                  }`}>
                    Material Unit
                  </span>

                  <h3 className={`font-serif text-3xl font-medium mb-2 ${
                    tier.popular ? 'text-white' : 'text-[#173F35]'
                  }`}>
                    {tier.amount}
                  </h3>

                  <h4 className={`text-base font-bold mb-2 ${
                    tier.popular ? 'text-white' : 'text-[#242622]'
                  }`}>
                    {tier.title}
                  </h4>

                  <p className={`text-xs leading-relaxed ${
                    tier.popular ? 'text-[#DCE7DB]/90' : 'text-[#686B64]'
                  }`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-current/10">
                  <button
                    onClick={onOpenDonate}
                    className={`w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                      tier.popular
                        ? 'bg-[#EAA23B] text-[#173F35] hover:bg-[#F4BA63]'
                        : 'bg-[#173F35] text-white hover:bg-[#0D2620]'
                    }`}
                  >
                    <span>Pledge This Unit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-white border border-[#E8E5DC] text-xs text-[#686B64] flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            Basanthi Foundation issues formal receipt vouchers directly to sponsors. Sponsoring parties receive photo documentation of distributed kits and renovated classrooms.
          </span>
        </div>

      </div>
    </section>
  );
};
