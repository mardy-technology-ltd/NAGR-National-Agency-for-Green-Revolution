import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HistorySection from '@/components/HistorySection';
import Speeches from '@/components/Speeches';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Who We Are | NAGR Bangladesh',
  description: 'Learn about NAGR Bangladesh organization history, mission, vision, legal registrations, and executive committee.',
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-12 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            About Our Organization
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Who We <span className="text-gradient-emerald">Are</span>
          </h1>
          <p className="text-emerald-200/80 text-sm max-w-2xl mx-auto">
            National Agency for Green Revolution (NAGR) is a registered non-governmental development organization dedicated to green revolution, indigenous human rights, and social justice.
          </p>
        </div>
      </section>

      <HistorySection />
      <Speeches />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
