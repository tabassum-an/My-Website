import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  educationData,
  experienceData,
  certificationsData,
  extracurricularsData,
  personalInfo,
} from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Award,
  HeartHandshake,
  FileDown,
  ExternalLink,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

interface ResumeSectionProps {
  onOpenPdfModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenPdfModal }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certifications' | 'extracurriculars'>('education');

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-slate-800/80 bg-[#080b11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>Academic & Professional Track Record</span>
              <span aria-hidden="true">·</span>
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Education & Experience
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Transitioning from rigorous civil structural engineering to postgraduate robotics and machine learning research in the United Kingdom.
            </p>
          </div>

          {/* Action to download or open PDF */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={onOpenPdfModal}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Preview Original PDF</span>
            </button>
            <a
              href={personalInfo.cvPdfPath}
              download="Anika_Tabassum_CV.pdf"
              className="px-4 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0e131d] border border-slate-800/80 rounded-xl mb-8 max-w-2xl">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'education'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'experience'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Certifications</span>
          </button>

          <button
            onClick={() => setActiveTab('extracurriculars')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'extracurriculars'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-cyan-400" />
            <span>Leadership & Outreach</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* 1. Education */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="text-cyan-400">{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-1 mb-4">
                      {edu.institution}
                    </p>

                    <div className="space-y-4 pt-3 border-t border-slate-800/80">
                      <div>
                        <span className="text-xs font-mono text-slate-400 block mb-2">
                          KEY MODULES & CURRICULUM
                        </span>
                        <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
                          {edu.modules.map((m, mIdx) => (
                            <span
                              key={mIdx}
                              className="px-2.5 py-1 bg-[#080b11] border border-slate-800 rounded-md font-mono text-[11px]"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-mono text-slate-400 block mb-2">
                          KEY PROJECTS & THESIS
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {edu.keyProjects.map((p, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400 font-mono mt-0.5">›</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {edu.badge && (
                    <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{edu.badge}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 2. Work Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-cyan-400 font-semibold">{exp.organization}</span>
                    <span>{exp.period}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                    {exp.role}
                  </h3>

                  <div className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Competencies:</span>
                    {exp.skillsApplied.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-0.5 bg-slate-800/60 border border-slate-700/60 rounded text-xs text-slate-300 font-mono"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Certifications */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-5 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                      {cert.issuer}
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.focus}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. Extracurriculars & Outreach */}
          {activeTab === 'extracurriculars' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extracurricularsData.map((extra, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 shadow-lg"
                >
                  <span className="text-xs font-mono text-cyan-400 block mb-1">
                    {extra.role}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {extra.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {extra.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
