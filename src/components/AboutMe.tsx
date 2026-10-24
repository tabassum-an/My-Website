import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo, personalStoryChapters } from '../data/portfolioData';
import {
  User,
  GraduationCap,
  Heart,
  BookOpen,
  Compass,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileDown,
} from 'lucide-react';

interface AboutMeProps {
  onOpenResumeModal: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenResumeModal }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>('bridging-disciplines');

  const activeChapter =
    personalStoryChapters.find((c) => c.id === activeChapterId) || personalStoryChapters[0];

  const personalInterests = [
    {
      icon: <Users className="w-5 h-5 text-amber-400" />,
      title: 'STEM Educator & Mentor',
      detail:
        'Guided hundreds of students preparing for engineering entrance exams in mathematics and physics at Udvash Coaching Center.',
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      title: 'Humanitarian Volunteer',
      detail:
        'Long-term volunteer with Quantum Foundation and organizer of emergency Covid-19 food relief drives for low-income families.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      title: 'Avid Reader & Thinker',
      detail:
        'Completed the comprehensive literature reading enrichment program arranged by the World-Literature Centre (Bishwo Shahitto Kendro).',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: 'Astronomy & Natural Science',
      detail:
        'Active member of the Astronomy & Science Society of RUET club and participant in the 6th Bangladesh Chemistry Olympiad.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-800/80 bg-[#090c13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>Personal Narrative</span>
              <span aria-hidden="true">·</span>
              <span>About Anika</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Who I Am & What Drives Me
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Engineering is not just what I do — it is how I think, teach, solve problems, and contribute to society.
            </p>
          </div>

          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2 self-start md:self-auto shadow-sm"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Curriculum Vitae</span>
          </button>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Full Biography Prose */}
          <div className="lg:col-span-7 bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <User className="w-4 h-4" />
              <span>Background & Philosophy</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              From Concrete Structures to Robotic Systems
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {personalInfo.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-500">Based in: </span>
                <span className="text-slate-200 font-medium">London, UK</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div>
                <span className="text-slate-500">Degree Distinction: </span>
                <span className="text-cyan-300 font-medium">QMUL MSc Robotics & AI</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div>
                <span className="text-slate-500">Civil Eng: </span>
                <span className="text-slate-200 font-medium">RUET BSc</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Story Chapters */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-4">
              <span className="text-xs font-mono text-cyan-400 block">
                EXPLORE MY JOURNEY BY CHAPTER
              </span>

              {/* Chapter selector buttons */}
              <div className="space-y-2">
                {personalStoryChapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapterId(chapter.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all border ${
                      activeChapterId === chapter.id
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-white'
                        : 'bg-[#080b11] border-slate-800/70 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold font-sans text-white">
                      {chapter.title}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                      {chapter.tagline}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Chapter Narrative Display */}
              <div className="pt-3 border-t border-slate-800/80">
                <p className="text-xs text-slate-300 leading-relaxed italic font-serif">
                  "{activeChapter.narrative}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Life Outside the Lab (Ryan Davis Style: Hobbies, Passions & Service) */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono text-cyan-400 block mb-1">
              LIFE BEYOND THE WORKBENCH
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Passions, Mentorship & Community
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              The experiences that shape my worldview, empathy, and collaborative spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {personalInterests.map((interest, idx) => (
              <div
                key={idx}
                className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#080b11] border border-slate-800 w-fit mb-3">
                    {interest.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {interest.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
