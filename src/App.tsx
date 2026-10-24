/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { ResumeSection } from './components/ResumeSection';
import { ProjectTimeline } from './components/ProjectTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { PublicationsSection } from './components/PublicationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section: Holistic Personal Intro & Portrait */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* About Me: Background, Journey, Philosophy & Personal Interests (davisryan.tech style) */}
        <AboutMe onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Education & Experience Track Record */}
        <ResumeSection onOpenPdfModal={() => setIsResumeModalOpen(true)} />

        {/* Portfolio of Engineering Projects (Balanced, not overwhelming) */}
        <ProjectTimeline />

        {/* Technical Skills Matrix with Live Filter */}
        <SkillsMatrix />

        {/* Peer-Reviewed Publications */}
        <PublicationsSection />

        {/* Modern Dark-Themed Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPdfModal={() => setIsResumeModalOpen(true)} />

      {/* Full Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
