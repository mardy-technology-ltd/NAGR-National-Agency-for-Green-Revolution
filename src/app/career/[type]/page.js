'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, ArrowRight } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CareerApplicationModal from '@/components/CareerApplicationModal';
import { careerSubpages } from '@/data/subpageData';
import { careerNotices } from '@/data/mockData';

export default function CareerSubpage({ params }) {
  const { type } = use(params);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageData = careerSubpages[type] || {
    title: type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    subtitle: "Official notice from NAGR Bangladesh HR & Procurement Wing.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200"
  };

  const handleOpenModal = (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/career"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Career Overview</span>
          </Link>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-emerald-200/80 text-sm sm:text-base max-w-2xl">
            {pageData.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {careerNotices.map((notice) => (
            <div key={notice.id} className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full">
                    {notice.type}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-mono text-emerald-300 bg-emerald-950 border border-emerald-800/40 rounded">
                    {notice.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{notice.title}</h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">{notice.desc}</p>
                <div className="flex items-center space-x-4 text-xs text-emerald-400/80 pt-1">
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
                  onClick={() => handleOpenModal(notice)}
                  className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold transition-all shadow-lg"
                >
                  <span>View Details & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />

      <CareerApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notice={selectedNotice}
      />
    </main>
  );
}
