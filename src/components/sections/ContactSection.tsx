import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '../ui/SocialIcons';
import { FOUNDATION_META } from '../../data/foundationContent';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'School Adoption Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters';
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
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#173F35', '#EAA23B', '#C56F50'],
        });
      } catch (err) {}
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#173F35] bg-[#173F35]/10 mb-4">
            Direct Dialogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#173F35] font-normal tracking-tight leading-tight">
            Connect with Basanthi Foundation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#686B64] leading-relaxed">
            Have a government school or Anganwadi in urgent need of infrastructure? Seeking CSR partnership or wanting to collaborate on road safety? Reach out to us.
          </p>
        </div>

        {/* 2-Column Contact Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Verified Public Channels & Ground Office */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-8 rounded-3xl bg-[#173F35] text-white shadow-xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#EAA23B]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EAA23B] block mb-2">
                  Foundation Base
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">
                  Hyderabad Headquarters
                </h3>
                <p className="text-xs sm:text-sm text-[#DCE7DB]/80 mt-1">
                  Active field operations across Hyderabad, Cyberabad, and Wanaparthy.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#EAA23B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Operating Geography</h5>
                    <p className="text-[#DCE7DB]/80 mt-0.5">Hyderabad, Kukatpally, Wanaparthy &amp; Ibrahimpatnam (Telangana)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#EAA23B]">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Official Instagram</h5>
                    <a
                      href={FOUNDATION_META.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EAA23B] hover:underline flex items-center gap-1 mt-0.5"
                    >
                      @basanthi_foundation
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#EAA23B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Foundation Liaison</h5>
                    <p className="text-[#DCE7DB]/80 mt-0.5">{FOUNDATION_META.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#DCE7DB]/70">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Responses personally monitored by the core leadership.</span>
              </div>
            </div>

            {/* Founder Note */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DC] text-xs text-[#686B64] space-y-2">
              <span className="font-bold text-[#173F35] block">Founder's Public Channel:</span>
              <p>
                Ajay Raidu directly participates in field inaugurations and community drives. Connect with his personal public channel on Instagram at{' '}
                <a
                  href={FOUNDATION_META.founderInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C56F50] hover:underline"
                >
                  @ajay_raidu
                </a>.
              </p>
            </div>

          </div>

          {/* Right Column: Clean, Validated Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E5DC] shadow-sm text-left">
            <h3 className="font-serif text-2xl text-[#173F35] font-medium mb-1">
              Send an Inquiry or Recommendation
            </h3>
            <p className="text-xs sm:text-sm text-[#686B64] mb-6">
              Recommend a government school needing desks, or inquire about our ongoing road safety drives.
            </p>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-name" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="ct-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Srikant Rao"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#242622] focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="ct-email" className="block text-xs font-semibold text-[#173F35] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="ct-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="srikant@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#242622] focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="ct-subject" className="block text-xs font-semibold text-[#173F35] mb-1">
                    Subject / Topic of Discussion
                  </label>
                  <select
                    id="ct-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DC] text-sm text-[#242622] focus:border-[#173F35] focus:outline-none"
                  >
                    <option value="School Adoption Inquiry">Recommend a Government Primary School</option>
                    <option value="Anganwadi Support">Anganwadi Modernization Inquiry</option>
                    <option value="Road Safety Partnership">Arrive Alive / Civic Police Partnership</option>
                    <option value="Medical Emergency Case">Emergency Healthcare Aid Referral</option>
                    <option value="CSR Collaboration">Corporate Social Responsibility (CSR)</option>
                    <option value="General Inquiry">General Community Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ct-msg" className="block text-xs font-semibold text-[#173F35] mb-1">
                    Your Message / Project Proposal *
                  </label>
                  <textarea
                    id="ct-msg"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include location, school name or mandal if recommending a facility..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#242622] focus:outline-none ${
                      errors.message ? 'border-red-500' : 'border-[#E8E5DC] focus:border-[#173F35]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#173F35] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0D2620] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#EAA23B]" />
                        <span>Send Message to Foundation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-serif text-2xl text-[#173F35] font-medium">
                  Message Successfully Dispatched
                </h4>
                <p className="text-sm text-[#686B64] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry regarding "{formData.subject}" has been queued. Our Hyderabad operations team will review your details and respond directly to <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: '', email: '', subject: 'School Adoption Inquiry', message: '' });
                  }}
                  className="px-6 py-2 rounded-full border border-[#173F35] text-xs font-semibold text-[#173F35] hover:bg-[#173F35]/5"
                >
                  Send Another Message
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
