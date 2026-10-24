import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, CheckCircle2, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative bg-[#0d121c] border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Unboxed Metadata Header */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono mb-2">
            <span className="text-cyan-400">{project.institutionOrOrg}</span>
            <span aria-hidden="true">·</span>
            <span>{project.period}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{project.category.replace('-', ' & ')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal mt-1 mb-6">
            {project.subtitle}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#080b11] rounded-xl border border-slate-800/80 mb-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 block">{m.label}</span>
                <span className="text-lg font-bold font-mono text-white tabular-nums block">{m.value}</span>
                {m.detail && <span className="text-[10px] text-slate-500 block">{m.detail}</span>}
              </div>
            ))}
          </div>

          {/* Full Narrative & Architecture */}
          <div className="space-y-6 text-sm text-slate-300">
            <div>
              <h3 className="text-xs font-mono tracking-wider text-slate-400 mb-2">PROJECT OVERVIEW</h3>
              <p className="leading-relaxed text-slate-300">{project.fullDescription}</p>
            </div>

            <div>
              <h3 className="text-xs font-mono tracking-wider text-slate-400 mb-2">KEY ENGINEERING CONTRIBUTIONS</h3>
              <ul className="space-y-2.5">
                {project.keyContributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Publication citation if applicable */}
            {project.publicationRef && (
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Peer-Reviewed Publication</span>
                </div>
                <p className="text-xs text-slate-300 italic font-serif leading-relaxed">
                  "{project.publicationRef}"
                </p>
              </div>
            )}

            {/* Technologies used */}
            <div>
              <h3 className="text-xs font-mono tracking-wider text-slate-400 mb-2">TECHNOLOGIES & METHODS</h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors shadow-sm"
            >
              Close Specifications
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
