import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Research & Robotics Opportunity',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (field: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#080a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>Direct Channels</span>
            <span aria-hidden="true">·</span>
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            I am currently open to robotics research discussions, industry engineering roles, biomechanical instrumentation projects, and academic collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('email', personalInfo.email)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors ml-2 shrink-0"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs">
                <span className="text-slate-500">Fastest response channel</span>
                <a
                  href={`mailto:${personalInfo.email}?subject=Engineering%20Inquiry%20via%20Portfolio`}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                >
                  <span>Compose Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone / Mobile</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('phone', personalInfo.phone)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors ml-2 shrink-0"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs">
                <span className="text-slate-500">UK mobile line</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
                >
                  <span>Direct Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Current Location</span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    United Kingdom (London)
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                Queen Mary University of London · Mile End Campus
              </p>
            </div>
          </div>

          {/* Right Column: Modern Dark Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Message Sent Successfully
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. A transmission record has been generated for Anika Tabassum.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            inquiryType: 'Research & Robotics Opportunity',
                            subject: '',
                            message: '',
                          });
                        }}
                        className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300">
                          Your Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Jane Doe"
                          className="w-full bg-[#080b11] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300">
                          Your Email <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@university.ac.uk"
                          className="w-full bg-[#080b11] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-[#080b11] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                      >
                        <option value="Research & Robotics Opportunity">Robotics & AI Research Opportunity</option>
                        <option value="Industry Engineering Role">Full-Time / Graduate Engineering Role</option>
                        <option value="Biomechanics / Sensor Collaboration">Biomechanics & Sensory Collaboration</option>
                        <option value="Academic Inquiry">Academic / Paper Inquiries</option>
                        <option value="General Consultation">General Discussion</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Subject Line <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Discussion regarding sEMG Force Estimation & Robotics"
                        className="w-full bg-[#080b11] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Message Details <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share details about your team, project timeline, or research topic..."
                        className="w-full bg-[#080b11] border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-5 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-950/30 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                            <span>Dispatching Message...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Transmit Message</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                      Direct delivery to tabassum.bidisha@gmail.com
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
