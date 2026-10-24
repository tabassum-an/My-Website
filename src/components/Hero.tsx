import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import {
  Sparkles,
  GraduationCap,
  FileDown,
  Mail,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Compass,
  Github,
  Linkedin,
  Check,
  Copy,
  MapPin,
  Heart,
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-slate-800/80 bg-[#080b11]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none tech-grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main 2-Column Split: Intro Left, Portrait Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Top Alma Mater Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1926] border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Queen Mary University of London & RUET Alum</span>
              </div>
            </div>

            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              HI, MY NAME IS
            </div>

            {/* Name Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {personalInfo.name}
            </h1>

            {/* Subtitle */}
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">
              Robotics & AI Engineer · Civil Engineering Graduate
            </div>

            {/* Distinction Line */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-slate-200">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>MSc in Robotics & AI (Graduated with Distinction)</span>
            </div>

            {/* Bio Paragraph: About Anika as a whole person */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              I am an engineer, educator, and researcher passionate about bridging physical mechanics with intelligent systems. Having graduated with Distinction from Queen Mary University of London following my Civil Engineering degree at RUET, I bring a unique multidisciplinary perspective — combining physical intuition with machine learning, hands-on sensor instrumentation, classroom teaching, and community service.
            </p>

            {/* Holistic Identity Badges Row */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1624] border border-slate-800 text-xs font-medium text-slate-200 shadow-sm">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>MSc with Distinction</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1624] border border-slate-800 text-xs font-medium text-slate-200 shadow-sm">
                <Compass className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Civil Engineer</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1624] border border-slate-800 text-xs font-medium text-amber-300 shadow-sm">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span>STEM Educator & Mentor</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1624] border border-slate-800 text-xs font-medium text-emerald-300 shadow-sm">
                <Heart className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Humanitarian Volunteer</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#about"
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>Read My Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-5 py-3.5 text-sm font-semibold text-white bg-slate-900 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Featured Projects</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Connect Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-slate-400 font-mono">
              <span className="text-slate-500">Connect:</span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <button
                onClick={handleCopyEmail}
                className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-slate-300"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: User Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Card Frame with rim glow */}
            <div className="w-full max-w-md bg-[#0a0f18] border border-cyan-500/30 rounded-3xl p-3 shadow-2xl shadow-cyan-950/40 relative">
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <img
                  src={personalInfo.photoPath}
                  alt="Anika Tabassum - MSc Robotics & AI Graduate"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top filter brightness-[1.02] contrast-[1.03]"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom for card readability */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b11] via-[#080b11]/70 to-transparent pointer-events-none" />

                {/* Floating Information Overlay Strip inside the photo */}
                <div className="absolute inset-x-3 bottom-3 p-4 bg-[#0a0f18]/90 backdrop-blur-md border border-slate-700/80 rounded-2xl flex items-center justify-between shadow-2xl">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300">
                      BSc Civil Eng · MSc Robotics & AI (Distinction)
                    </p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      London, United Kingdom
                    </p>
                  </div>
                  {/* Glowing availability green dot */}
                  <div className="flex items-center gap-1.5" title="Available for engineering opportunities">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Status and quick links strip below the photo card */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="font-medium">Available for Engineering Roles</span>
                </div>
                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Holistic Professional Pillars Strip (Replacing the single-project metric strip) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.coreHighlights.map((item, idx) => (
            <div key={idx} className="bg-[#0e131d]/60 p-4 rounded-xl border border-slate-800/80 space-y-1">
              <span className="text-[11px] font-mono text-cyan-400 block">{item.label}</span>
              <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                {item.value}
              </div>
              <p className="text-xs text-slate-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
