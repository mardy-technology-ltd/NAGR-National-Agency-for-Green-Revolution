'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/mockData';

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Development', 'Education', 'Health', 'Economic'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#070e08] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
              Our Core Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Transformative <span className="text-gradient-emerald">Community Projects</span>
            </h2>
            <p className="text-emerald-200/80 text-sm max-w-xl">
              NAGR implements targeted development interventions across education, primary healthcare, women empowerment, and disaster response.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-emerald-950/60 p-1.5 rounded-xl border border-emerald-900/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  filter === cat
                    ? 'bg-emerald-500 text-emerald-950 shadow-md'
                    : 'text-emerald-300 hover:text-white hover:bg-emerald-900/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-emerald-900/40 group"
              >
                <Link href={`/projects/${proj.id}`}>
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-[11px] font-bold text-emerald-950 bg-emerald-400 rounded-full shadow-md">
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-emerald-200/80 text-xs leading-relaxed line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>
                </Link>

                {/* Card Footer Metadata & Button */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex items-center justify-between text-xs text-emerald-400/80 border-t border-emerald-900/40 pt-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{proj.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{proj.beneficiaries}</span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${proj.id}`}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-800/80 text-emerald-300 text-xs font-bold border border-emerald-700/40 transition-colors"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
