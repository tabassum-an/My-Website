import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Publications', href: '#publications' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#080a0f]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
          <span>{personalInfo.name}</span>
        </a>

        {/* Zone 2: Single-line clean text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenResumeModal}
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 text-slate-300 flex items-center gap-1.5"
          >
            <span>Resume (CV)</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-700/80 rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14]/95 border-b border-slate-800/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/40 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="text-left px-3 py-2 text-sm font-medium text-cyan-300 hover:bg-slate-800/40 rounded-md transition-colors flex items-center justify-between"
            >
              <span>View Full CV (PDF)</span>
              <FileDown className="w-4 h-4" />
            </button>
          </div>
          <div className="pt-2 border-t border-slate-800/80">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg block transition-colors shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
