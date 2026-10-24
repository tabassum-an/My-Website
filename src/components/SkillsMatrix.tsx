import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Terminal, Brain, Wrench, Search, Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'hardware':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'programming':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'machine-learning':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'engineering-design':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.level.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-800/80 bg-[#080a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>Technical Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Hardware & Computing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Skills Matrix
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Synthesizing physical hardware benchtop verification with advanced algorithmic modeling and structural design.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, Arduino)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0e131d] border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-xl space-y-5"
            >
              <div className="flex items-start gap-4 pb-4 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-[#080b11] border border-slate-800 shrink-0">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 bg-[#080b11] rounded-xl border border-slate-800/70 hover:border-slate-700/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {skill.context}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                      <span className="text-[11px] font-mono text-cyan-400 font-medium">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
