import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileDown, ExternalLink, Printer } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#0d121c] border border-slate-800 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl z-10 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090c12]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Curriculum Vitae — Anika Tabassum
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">
                  MSc Robotics & AI Graduate (Distinction) · Queen Mary University of London
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.cvPdfPath}
                download="Anika_Tabassum_CV.pdf"
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <a
                href={personalInfo.cvPdfPath}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open New Tab</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Container */}
          <div className="flex-1 bg-[#161a23] relative">
            <iframe
              src={`${personalInfo.cvPdfPath}#toolbar=1&navpanes=0`}
              title="Anika Tabassum CV PDF"
              className="w-full h-full border-none"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
