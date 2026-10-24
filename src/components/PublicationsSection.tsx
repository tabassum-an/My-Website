import React, { useState } from 'react';
import { publicationsData } from '../data/portfolioData';
import { BookOpen, Copy, Check, ChevronDown } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopyCitation = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-20 md:py-28 border-b border-slate-800/80 bg-[#080b11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>Academic Rigor</span>
            <span aria-hidden="true">·</span>
            <span>Peer-Reviewed Literature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Published Research Papers
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Co-authored journal contributions in sustainable materials engineering, polymer modification in infrastructure, and rapid-deployment post-disaster shelters.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {publicationsData.map((pub) => {
            const citationText = `${pub.authors.join(', ')} (${pub.year}). "${pub.title}". ${pub.journal}, ${pub.volume}(${pub.issue}), ${pub.pages}.`;
            const isExpanded = expandedId === pub.id;
            const isCopied = copiedId === pub.id;

            return (
              <div
                key={pub.id}
                className="bg-[#0e131d] border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Unboxed Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-cyan-400 font-semibold">{pub.journal}</span>
                    <span>{pub.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-mono mb-4">
                    Authors: {pub.authors.join(' · ')}
                  </p>

                  <div className="p-3 bg-[#080b11] rounded-xl border border-slate-800/80 mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                      KEY ENGINEERING FINDING
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {pub.keyFinding}
                    </p>
                  </div>

                  {/* Expandable Abstract */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800/80 mb-4">
                      <span className="text-xs font-mono text-slate-400 block mb-1">
                        PAPER ABSTRACT
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed italic font-serif">
                        "{pub.abstract}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCitation(pub.id, citationText)}
                      className="px-3 py-1.5 font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Citation Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                      className="px-3 py-1.5 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">
                    Vol. {pub.volume}, Iss. {pub.issue}, pp. {pub.pages}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
