import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import PublicationsSection from '@/components/PublicationsSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Reports & Publications | NAGR Bangladesh',
  description: 'Download NAGR Annual Reports, Santal Times newsletter, study research papers, and success stories.',
};

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-12 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Official Documentation & Media
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Reports & <span className="text-gradient-emerald">Publications</span>
          </h1>
          <p className="text-emerald-200/80 text-sm max-w-2xl mx-auto">
            Access transparent financial audit reports, research papers, photo albums, and video documentaries.
          </p>
        </div>
      </section>

      <PublicationsSection />
      <GallerySection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
