import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';
import {
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Activity,
  Cpu,
  Award,
  BookOpen,
  Filter,
} from 'lucide-react';

interface ProjectTimelineProps {
  className?: string;
}

export const ProjectTimeline: React.FC<ProjectTimelineProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedTimelineId, setExpandedTimelineId] = useState<string | null>('semg-grip-force');

  const filterCategories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'robotics-ai', label: 'Robotics & AI' },
    { id: 'hardware-sensing', label: 'Hardware & Sensing' },
    { id: 'space-biomechanics', label: 'Space & Biomechanics' },
    { id: 'civil-materials', label: 'Civil & Materials' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'robotics-ai':
        return <Activity className="w-4 h-4 text-cyan-400" />;
      case 'hardware-sensing':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'space-biomechanics':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'civil-materials':
        return <BookOpen className="w-4 h-4 text-sky-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-slate-800/80 bg-[#080a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>Engineering Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Selected Works & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects & Technical Timeline
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore my progression from civil engineering and material science into cognitive robotics, physics-structured ML force estimation, and space mobility systems.
            </p>
          </div>

          {/* View Switcher: Timeline vs Grid */}
          <div className="flex items-center gap-2 self-start md:self-auto p-1 bg-[#0e131d] border border-slate-800/80 rounded-xl">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                viewMode === 'timeline'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Timeline
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Project Cards
            </button>
          </div>
        </div>

        {/* Filter Bar (Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- VIEW MODE 1: INTERACTIVE TIMELINE --- */}
        {viewMode === 'timeline' && (
          <div id="timeline" className="relative pl-6 sm:pl-8 border-l border-slate-800 ml-3 sm:ml-4 space-y-12">
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedTimelineId === project.id;
              return (
                <div key={project.id} className="relative group">
                  {/* Timeline Node Point */}
                  <div
                    onClick={() => setExpandedTimelineId(isExpanded ? null : project.id)}
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-[#080a0f] border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center cursor-pointer transition-colors shadow-md"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Project Entry Container */}
                  <div className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-all shadow-lg">
                    {/* Unboxed Metadata Line */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 font-mono mb-2">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(project.category)}
                        <span className="text-slate-300 font-semibold">{project.institutionOrOrg}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-cyan-400 font-medium">{project.period}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 capitalize">{project.category.replace('-', ' ')}</span>
                    </div>

                    {/* Headline */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-400 mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-[#080b11] rounded-xl border border-slate-800/80 mb-5">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <span className="text-[10px] font-mono text-slate-400 block">{m.label}</span>
                          <span className="text-sm sm:text-base font-bold font-mono text-white tabular-nums block">
                            {m.value}
                          </span>
                          {m.detail && (
                            <span className="text-[10px] text-slate-500 truncate block">{m.detail}</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Expandable Deep Breakdown */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-800/80 pt-4 mt-4 space-y-4 text-xs sm:text-sm text-slate-300"
                      >
                        <div>
                          <span className="font-mono text-xs text-slate-400 block mb-2">KEY METHODOLOGY & HIGHLIGHTS</span>
                          <ul className="space-y-1.5">
                            {project.keyContributions.map((c, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <span className="text-cyan-400 font-mono mt-0.5">›</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {project.publicationRef && (
                          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-xs italic font-serif text-slate-300">
                            Publication: {project.publicationRef}
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/60 mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                        >
                          <span>Full Specifications</span>
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                        </button>

                        <button
                          onClick={() => setExpandedTimelineId(isExpanded ? null : project.id)}
                          className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                        >
                          <span>{isExpanded ? 'Collapse' : 'Quick Details'}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {project.publicationRef && (
                        <span className="text-[11px] font-mono text-cyan-400/80">
                          Peer-Reviewed Publication
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* --- VIEW MODE 2: BENTO GRID --- */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-[#0e131d] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between cursor-pointer group shadow-lg"
              >
                <div>
                  {/* Unboxed Metadata Line */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400 font-mono mb-2">
                    <span className="text-cyan-400">{project.period}</span>
                    <span className="capitalize text-slate-500">{project.category.replace('-', ' ')}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">{project.subtitle}</p>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 pt-3 border-t border-slate-800/80">
                  {/* Mini metrics */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="bg-[#080b11] p-2 rounded-lg border border-slate-800/70">
                        <span className="text-[10px] text-slate-500 block truncate">{m.label}</span>
                        <span className="font-bold text-white tabular-nums block">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1 text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
