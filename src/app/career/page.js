import { Suspense } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import CareerNoticeSection from '@/components/CareerNoticeSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Career, Tenders & Notices | NAGR Bangladesh',
  description: 'View NAGR job circulars, vacancies, internship calls, procurement tenders, and official notices.',
};

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-12 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Work With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Career, Tenders & <span className="text-gradient-emerald">Notices</span>
          </h1>
          <p className="text-emerald-200/80 text-sm max-w-2xl mx-auto">
            Build your career in green development or participate in NAGR procurement tenders and internships.
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div className="py-20 text-center text-emerald-300 text-sm">
          Loading announcements...
        </div>
      }>
        <CareerNoticeSection />
      </Suspense>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
