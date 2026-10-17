import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, User, Mail, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { modalBackdropVariants, modalContentVariants } from '../../lib/animations';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    areaOfInterest: 'school-support',
    availability: 'weekends',
    message: '',
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

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
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

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      areaOfInterest: 'school-support',
      availability: 'weekends',
      message: '',
    });
    setErrors({});
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
          aria-labelledby="volunteer-modal-title"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#173F35] text-white flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#EAA23B] block">
                Ground Action Network
              </span>
              <h2 id="volunteer-modal-title" className="font-serif text-xl sm:text-2xl font-normal text-white">
                Volunteer with Basanthi Foundation
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="vol-name" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="vol-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3 py-2 rounded-xl border text-xs text-[#242622] focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="vol-phone" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="vol-phone"
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
                  <label htmlFor="vol-email" className="block text-xs font-semibold text-[#173F35] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="vol-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className={`w-full px-3 py-2 rounded-xl border text-xs text-[#242622] focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="vol-interest" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Area of Contribution
                    </label>
                    <select
                      id="vol-interest"
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#E8E5DC] text-xs text-[#242622] focus:outline-none"
                    >
                      <option value="school-support">School Kit &amp; Renovation Drives</option>
                      <option value="food-relief">Community Hot Meal Drives</option>
                      <option value="water-relief">Ganesh Nimajjanam Water Stalls</option>
                      <option value="clay-ganesh">Eco-Clay Ganesha Handover</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vol-avail" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Availability
                    </label>
                    <select
                      id="vol-avail"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#E8E5DC] text-xs text-[#242622] focus:outline-none"
                    >
                      <option value="weekends">Weekends Only</option>
                      <option value="events">On-Call for Field Drives</option>
                      <option value="weekdays">Flexible Weekdays</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="vol-msg" className="block text-xs font-semibold text-[#173F35] mb-1">
                    Note / City of Residence (Optional)
                  </label>
                  <textarea
                    id="vol-msg"
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Based in Kukatpally, available for weekend school visits..."
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E5DC] text-xs text-[#242622] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-[#173F35] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0D2620] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Registering...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#EAA23B]" />
                        <span>Register as Volunteer</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-serif text-xl text-[#173F35] font-medium">
                  Volunteer Registration Complete
                </h3>
                <p className="text-xs text-[#686B64] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our volunteer lead will contact you via WhatsApp/Phone at <strong>{formData.phone}</strong> before our next on-ground field drive.
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2 rounded-full bg-[#173F35] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Done
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
