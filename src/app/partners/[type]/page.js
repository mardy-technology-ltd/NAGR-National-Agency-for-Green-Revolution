import Link from 'next/link';
import { ArrowLeft, Handshake } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export async function generateMetadata({ params }) {
  const { type } = await params;
  return {
    title: `${type.toUpperCase()} Partners | NAGR Bangladesh`,
    description: `NAGR Bangladesh official ${type} partners and institutional alliances.`,
  };
}

export default async function PartnersSubpage({ params }) {
  const { type } = await params;

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 capitalize">
            {type} Partners & Network
          </h1>
          <p className="text-emerald-200/80 text-sm sm:text-base max-w-2xl">
            Strategic alliances strengthening community development, policy support, and project funding in Northern Bangladesh.
          </p>
        </div>
      </section>

      <PartnersSection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
