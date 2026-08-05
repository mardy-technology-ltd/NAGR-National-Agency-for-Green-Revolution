'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { speechesData } from '@/data/mockData';

export default function Speeches() {
  return (
    <section id="chairmans-speech" className="py-20 bg-[#050b06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Leadership Statements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Messages from <span className="text-gradient-emerald">Executive Speeches</span>
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Read inspiring visions from NAGR's Chairman and Executive Director.
          </p>
        </div>

        {/* Speeches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Executive Director's Speech */}
          <motion.div
            id="directors-speech"
            whileHover={{ y: -6 }}
            className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-emerald-900/50 relative overflow-hidden"
          >
            <Quote className="absolute top-6 right-6 w-16 h-16 text-emerald-900/20" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500/50 shrink-0">
                  <img
                    src={speechesData.director.image}
                    alt={speechesData.director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {speechesData.director.name}
                  </h3>
                  <span className="text-xs text-emerald-400 font-medium block">
                    {speechesData.director.designation}
                  </span>
                </div>
              </div>

              <p className="text-emerald-100/90 text-sm leading-relaxed italic">
                "{speechesData.director.excerpt}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-900/40">
              <Link
                href="/who-we-are/directors-speech"
                className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Read Full Director's Speech Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Chairman's Speech */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-emerald-900/50 relative overflow-hidden"
          >
            <Quote className="absolute top-6 right-6 w-16 h-16 text-emerald-900/20" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/50 shrink-0">
                  <img
                    src={speechesData.chairman.image}
                    alt={speechesData.chairman.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {speechesData.chairman.name}
                  </h3>
                  <span className="text-xs text-amber-400 font-medium block">
                    {speechesData.chairman.designation}
                  </span>
                </div>
              </div>

              <p className="text-emerald-100/90 text-sm leading-relaxed italic">
                "{speechesData.chairman.excerpt}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-900/40">
              <Link
                href="/who-we-are/chairmans-speech"
                className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Read Full Chairman's Speech Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
