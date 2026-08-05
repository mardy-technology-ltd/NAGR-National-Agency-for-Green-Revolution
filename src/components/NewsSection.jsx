'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { newsArticles } from '@/data/mockData';

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-[#050b06] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
              Field Dispatch & Media
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Latest News & <span className="text-gradient-emerald">Field Stories</span>
            </h2>
            <p className="text-emerald-200/80 text-sm max-w-lg">
              Stay informed on our recent community inaugurations, peacebuilding initiatives, and mother-tongue educational launches.
            </p>
          </div>

          <Link
            href="/reports/santal-times"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View All News & Publications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 flex flex-col justify-between group"
            >
              <Link href={`/news/${article.slug}`}>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[11px] font-bold text-emerald-950 bg-emerald-400 rounded-full shadow-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-emerald-200/80 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </Link>

              <div className="p-6 pt-0">
                <Link
                  href={`/news/${article.slug}`}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 text-xs font-bold border border-emerald-800/40 transition-colors cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
