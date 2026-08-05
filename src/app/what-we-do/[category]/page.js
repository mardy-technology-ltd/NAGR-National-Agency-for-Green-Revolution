import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Phone, Mail, Heart } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { whatWeDoSubpages } from '@/data/subpageData';

export async function generateMetadata({ params }) {
  const { category } = await params;
  const data = whatWeDoSubpages[category] || whatWeDoSubpages['tabitha-kindergarten-school'];
  return {
    title: `${data.title} | NAGR Bangladesh`,
    description: data.subtitle,
  };
}

export default async function WhatWeDoSubpage({ params }) {
  const { category } = await params;
  const pageData = whatWeDoSubpages[category] || {
    title: category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: "Program Initiative",
    subtitle: "Community development initiative operated by NAGR Bangladesh.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
    content: [
      "National Agency for Green Revolution (NAGR) works directly with community committees, school boards, and rural cooperatives to ensure long-term sustainability."
    ]
  };

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <Link
            href="/what-we-do"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>

          <span className="inline-block px-3.5 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full mb-4">
            {pageData.category || "Program Initiative"}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-emerald-200/80 text-sm sm:text-base max-w-2xl">
            {pageData.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8 space-y-8">
              {pageData.image && (
                <div className="overflow-hidden rounded-2xl border border-emerald-900/50 shadow-2xl">
                  <img src={pageData.image} alt={pageData.title} className="w-full h-[400px] object-cover" />
                </div>
              )}

              <div className="glass-card p-8 rounded-2xl border border-emerald-900/40 space-y-6">
                <h2 className="text-2xl font-bold text-white">Program Details & Impact</h2>
                
                {Array.isArray(pageData.content) ? (
                  pageData.content.map((p, idx) => (
                    <p key={idx} className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                      {p}
                    </p>
                  ))
                ) : typeof pageData.content === 'string' ? (
                  pageData.content.split('\n\n').map((p, idx) => (
                    <p key={idx} className="text-emerald-100/90 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {p.trim()}
                    </p>
                  ))
                ) : null}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 text-center space-y-4 bg-gradient-to-b from-emerald-950/80 to-[#09160c]">
                <h3 className="text-xl font-bold text-white">Support This Program</h3>
                <p className="text-xs text-emerald-200/80">
                  Help us expand this program to more indigenous hamlets in Northern Bangladesh.
                </p>
                <Link
                  href="/donate"
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-sm shadow-xl"
                >
                  Donate to This Program
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
