import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, FileDown } from 'lucide-react';

interface FooterProps {
  onOpenPdfModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdfModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-slate-500">
              MSc Robotics & Artificial Intelligence Graduate (Distinction) · Queen Mary University of London
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#publications" className="hover:text-white transition-colors">
              Publications
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <button
              onClick={onOpenPdfModal}
              className="hover:text-cyan-400 transition-colors"
            >
              Curriculum Vitae
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.cvPdfPath}
              download="Anika_Tabassum_CV.pdf"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Download CV PDF"
              aria-label="Download CV PDF"
            >
              <FileDown className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Anika Tabassum. All engineering works & publications referenced.</p>
          <p className="font-mono">United Kingdom · London</p>
        </div>
      </div>
    </footer>
  );
};
