'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, BookOpen, FileText, Newspaper, Sparkles, ArrowRight } from 'lucide-react';
import { publicationsData } from '@/data/mockData';

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState('annual');

  return (
    <section id="publications" className="py-20 bg-[#050b06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Reports & Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Publications & <span className="text-gradient-emerald">Success Stories</span>
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Explore NAGR's official audit reports, Santal Times bulletins, research papers, and impact stories.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 bg-emerald-950/70 p-1.5 rounded-2xl border border-emerald-900/50">
            <button
              onClick={() => setActiveTab('annual')}
              className={`flex items-center space-x-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'annual'
                  ? 'bg-emerald-500 text-emerald-950 shadow-md'
                  : 'text-emerald-300 hover:bg-emerald-900/50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Annual Reports</span>
            </button>
            <button
              onClick={() => setActiveTab('santal')}
              className={`flex items-center space-x-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'santal'
                  ? 'bg-emerald-500 text-emerald-950 shadow-md'
                  : 'text-emerald-300 hover:bg-emerald-900/50'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              <span>Santal Times</span>
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`flex items-center space-x-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'research'
                  ? 'bg-emerald-500 text-emerald-950 shadow-md'
                  : 'text-emerald-300 hover:bg-emerald-900/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Research Papers</span>
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center space-x-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'stories'
                  ? 'bg-emerald-500 text-emerald-950 shadow-md'
                  : 'text-emerald-300 hover:bg-emerald-900/50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Success Stories</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[300px]">
          
          {/* Annual Reports */}
          {activeTab === 'annual' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {publicationsData.annualReports.map((rep, idx) => (
                <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{rep.title}</h3>
                  <div className="flex justify-between text-xs text-emerald-400/80">
                    <span>Fiscal Year: {rep.year}</span>
                    <span>PDF • {rep.size}</span>
                  </div>
                  <Link
                    href="/reports/annual-report"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Report (PDF)</span>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Santal Times Newsletter */}
          {activeTab === 'santal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              {publicationsData.santalTimes.map((st, idx) => (
                <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 flex items-center space-x-6">
                  <img src={st.cover} alt={st.issue} className="w-24 h-32 object-cover rounded-xl border border-emerald-800/40 shrink-0" />
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800/40">
                      {st.date}
                    </span>
                    <h3 className="text-base font-bold text-white">{st.issue}</h3>
                    <Link
                      href="/reports/santal-times"
                      className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Read Online Edition</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Research Papers */}
          {activeTab === 'research' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {publicationsData.research.map((r, idx) => (
                <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">{r.title}</h3>
                    <p className="text-xs text-emerald-300/80">Published by: {r.author} ({r.year})</p>
                  </div>
                  <Link
                    href="/reports/study-research"
                    className="px-5 py-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/70 text-emerald-300 text-xs font-bold border border-emerald-700/50 transition-colors shrink-0 text-center"
                  >
                    View Executive Summary
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Success Stories */}
          {activeTab === 'stories' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
              {publicationsData.successStories.map((story, idx) => (
                <div key={idx} className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 flex flex-col justify-between">
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white">{story.title}</h3>
                    <p className="text-emerald-200/80 text-xs leading-relaxed">{story.excerpt}</p>
                    <Link
                      href="/reports/success-story"
                      className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
