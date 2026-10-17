import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShieldCheck, Check, ShoppingBag, BookOpen, Stethoscope, Droplets } from 'lucide-react';
import confetti from 'canvas-confetti';
import { modalBackdropVariants, modalContentVariants } from '../../lib/animations';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedCause, setSelectedCause] = useState('school-desk');
  const [customAmount, setCustomAmount] = useState('2500');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const causes = [
    {
      id: 'student-kit',
      title: 'Student Educational Kit Pack',
      amount: '1500',
      description: 'Provides durable backpacks, bilingual dictionaries, and writing kits for rural pupils.',
      icon: ShoppingBag,
    },
    {
      id: 'school-desk',
      title: 'Classroom Dual Desk Set',
      amount: '2500',
      description: 'Lifts 2 village children from damp floors into sturdy ergonomic wooden-steel desks.',
      icon: BookOpen,
    },
    {
      id: 'medical-support',
      title: 'Critical Patient Medicine Fund',
      amount: '3000',
      description: 'Directly covers essential prescription drugs and tests for an underprivileged family.',
      icon: Stethoscope,
    },
    {
      id: 'water-food-relief',
      title: 'Public Hydration & Food Relief',
      amount: '1000',
      description: 'Sponsors clean sealed drinking water and freshly cooked meals for frontline workers.',
      icon: Droplets,
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#173F35', '#EAA23B', '#C56F50'],
        });
      } catch (err) {}
    }, 700);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          aria-hidden="true"
        />

        <motion.div
          variants={modalContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E8E5DC] overflow-hidden z-10 max-h-[92vh] flex flex-col text-left"
          role="dialog"
          aria-modal="true"
          aria-labelledby="donation-modal-title"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#173F35] text-white flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EAA23B] block">
                Direct Material Sponsorship
              </span>
              <h2 id="donation-modal-title" className="font-serif text-xl sm:text-2xl font-normal text-white">
                Support a Basanthi Project
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="p-3.5 rounded-xl bg-[#F8F6F0] border border-[#E8E5DC] text-xs text-[#686B64] flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#173F35] block mb-0.5">Direct Accountability:</strong>
                    We do not process credit cards through insecure forms. Registering your pledge connects you directly with our leadership team for verified foundation banking (NEFT/RTGS) and project photo allocation.
                  </div>
                </div>

                {/* Causes Grid */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#173F35] mb-2">
                    Choose Targeted Unit:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {causes.map((c) => {
                      const Icon = c.icon;
                      const isSelected = selectedCause === c.id;
                      return (
                        <div
                          key={c.id}
                          onClick={() => {
                            setSelectedCause(c.id);
                            setCustomAmount(c.amount);
                          }}
                          className={`p-3 rounded-xl border cursor-pointer transition-colors ${
                            isSelected
                              ? 'border-[#173F35] bg-[#173F35]/5 ring-1 ring-[#173F35]'
                              : 'border-[#E8E5DC] hover:border-[#173F35]/30 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif font-bold text-sm text-[#173F35] flex items-center gap-1.5">
                              <Icon className="w-4 h-4 text-[#C56F50]" />
                              ₹{c.amount}
                            </span>
                            {isSelected && (
                              <span className="w-4 h-4 rounded-full bg-[#173F35] text-white flex items-center justify-center text-[10px]">
                                <Check className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs font-bold text-[#242622]">{c.title}</h4>
                          <p className="text-[11px] text-[#686B64] mt-0.5 line-clamp-2">{c.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label htmlFor="pledge-amt" className="block text-xs font-semibold text-[#173F35] mb-1">
                    Amount (INR ₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs font-bold text-[#686B64]">₹</span>
                    <input
                      id="pledge-amt"
                      type="number"
                      min="500"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 rounded-xl border border-[#E8E5DC] text-sm font-bold text-[#173F35] focus:outline-none focus:border-[#173F35]"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="dn-name" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="dn-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Reddy"
                      className={`w-full px-3 py-2 rounded-xl border text-xs text-[#242622] focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="dn-phone" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="dn-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3 py-2 rounded-xl border text-xs text-[#242622] focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="dn-email" className="block text-xs font-semibold text-[#173F35] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="dn-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@example.com"
                    className={`w-full px-3 py-2 rounded-xl border text-xs text-[#242622] focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-[#173F35] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0D2620] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Recording Pledge...</span>
                    ) : (
                      <>
                        <Heart className="w-3.5 h-3.5 text-[#EAA23B] fill-[#EAA23B]" />
                        <span>Confirm Pledge &amp; Receive Details</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#686B64] text-center mt-2">
                    Official receipt voucher issued directly by Basanthi Foundation.
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-serif text-xl text-[#173F35] font-medium">
                  Sponsorship Pledge Registered
                </h3>
                <p className="text-xs text-[#686B64] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>, for pledging <strong>₹{customAmount}</strong> towards the <strong>{causes.find((c) => c.id === selectedCause)?.title}</strong>.
                </p>
                <div className="p-3 rounded-xl bg-[#F8F6F0] border border-[#E8E5DC] text-xs text-[#242622] max-w-xs mx-auto text-left">
                  <strong className="text-[#173F35] block mb-0.5">Next Step:</strong>
                  <span className="text-[#686B64]">Our coordinator will contact you at <strong>{formData.email}</strong> with verified banking instructions and project allocation documentation.</span>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 rounded-full bg-[#173F35] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Return to Site
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
