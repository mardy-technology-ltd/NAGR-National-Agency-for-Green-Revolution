'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { careerNotices } from '@/data/mockData';
import CareerApplicationModal from '@/components/CareerApplicationModal';

const typeToCategoryMap = {
  'vacancy': 'Vacancy',
  'job-circular': 'Job Circular',
  'internship': 'Internship',
  'tender': 'Tender',
  'notice': 'Notice',
  'result': 'Result',
  'all': 'All'
};

const titleMap = {
  'Vacancy': 'Current Vacancies',
  'Job Circular': 'Official Job Circulars',
  'Internship': 'Internship Program',
  'Tender': 'Procurement & Tenders',
  'Notice': 'Official Notices',
  'Result': 'Recruitment & Exam Results',
  'All': 'Official Notices & Announcements'
};

export default function CareerNoticeSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryType = searchParams ? searchParams.get('type') : null;

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (queryType && typeToCategoryMap[queryType.toLowerCase()]) {
      setActiveCategory(typeToCategoryMap[queryType.toLowerCase()]);
    } else if (!queryType) {
      setActiveCategory('All');
    }
  }, [queryType]);

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Job Circular', value: 'job-circular' },
    { label: 'Vacancy', value: 'vacancy' },
    { label: 'Internship', value: 'internship' },
    { label: 'Tender', value: 'tender' },
    { label: 'Notice', value: 'notice' },
    { label: 'Result', value: 'result' }
  ];

  const handleCategoryChange = (catLabel, catVal) => {
    setActiveCategory(catLabel);
    if (catVal === 'all') {
      router.push('/career', { scroll: false });
    } else {
      router.push(`/career?type=${catVal}`, { scroll: false });
    }
  };

  const handleOpenApplyModal = (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  const filteredNotices = activeCategory === 'All'
    ? careerNotices
    : careerNotices.filter((n) => n.type.toLowerCase() === activeCategory.toLowerCase() || (activeCategory === 'Result' && n.type === 'Notice'));

  const dynamicTitle = titleMap[activeCategory] || 'Official Notices & Announcements';

  return (
    <section id="career-notices" className="py-20 bg-[#070e08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Dynamic Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
              Opportunity & Announcements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {dynamicTitle.split(' ')[0]} <span className="text-gradient-emerald">{dynamicTitle.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-emerald-200/80 text-sm max-w-lg">
              {activeCategory === 'All'
                ? "Join NAGR's team, submit procurement tenders, or check official recruitment results."
                : `Showing filtered announcements for: ${activeCategory}`}
            </p>
          </div>

          {/* Filter Bar Buttons */}
          <div className="flex flex-wrap gap-2 bg-emerald-950/60 p-1.5 rounded-xl border border-emerald-900/50">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.label, cat.value)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeCategory === cat.label
                    ? 'bg-emerald-500 text-emerald-950 shadow-md'
                    : 'text-emerald-300 hover:bg-emerald-900/50 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notices List Grid */}
        <div className="space-y-4 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <motion.div
                  key={notice.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 text-[11px] font-bold text-emerald-950 bg-emerald-400 rounded-full">
                        {notice.type}
                      </span>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono text-emerald-300 bg-emerald-950 border border-emerald-800/40 rounded">
                        {notice.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white hover:text-emerald-300 transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-emerald-200/80 leading-relaxed">
                      {notice.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-400/80 pt-1">
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{notice.location}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-amber-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Deadline: {notice.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <button
                      onClick={() => handleOpenApplyModal(notice)}
                      className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <span>View Details & Apply</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16 p-8 glass-card rounded-2xl border border-emerald-900/40 space-y-3">
                <p className="text-base font-bold text-white">No active listings found for "{activeCategory}".</p>
                <p className="text-xs text-emerald-300/70">Check back soon or send your general CV to dirnagr@gmail.com.</p>
                <button
                  onClick={() => handleCategoryChange('All', 'all')}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-emerald-950 font-bold text-xs"
                >
                  Show All Notices
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Application / Bid Modal */}
      <CareerApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notice={selectedNotice}
      />
    </section>
  );
}
