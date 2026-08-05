import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2, Tag, BookOpen, CheckCircle2, Newspaper } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { newsArticles } from '@/data/mockData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsArticles.find(a => a.slug === slug) || newsArticles[0];
  return {
    title: `${article.title} | NAGR Bangladesh News`,
    description: article.excerpt,
  };
}

export default async function NewsArticleDetail({ params }) {
  const { slug } = await params;
  const article = newsArticles.find(a => a.slug === slug) || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    date: "August 2026",
    category: "Field Update",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
    excerpt: "Official news dispatch from NAGR Bangladesh operations wing.",
    slug: slug
  };

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      {/* Article Header Banner */}
      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <Link
            href="/#news"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Latest News</span>
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3.5 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6 max-w-4xl">
            {article.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-emerald-300/80 border-t border-emerald-900/40 pt-4">
            <div className="flex items-center space-x-1.5">
              <User className="w-4 h-4 text-emerald-400" />
              <span>Published by: NAGR Communications Wing</span>
            </div>
            <span>•</span>
            <span>Location: Northern Rajshahi Division</span>
          </div>
        </div>
      </section>

      {/* Article Body Area */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="overflow-hidden rounded-3xl border border-emerald-900/50 shadow-2xl">
                <img src={article.image} alt={article.title} className="w-full h-[450px] object-cover" />
              </div>

              <div className="glass-card p-8 rounded-3xl border border-emerald-900/40 space-y-6 text-emerald-100/90 leading-relaxed text-sm sm:text-base">
                <h2 className="text-xl font-bold text-white leading-snug">
                  {article.excerpt}
                </h2>

                <p>
                  National Agency for Green Revolution (NAGR) Bangladesh continues to implement transformative community initiatives across 6 northern districts (Chapainawabganj, Rajshahi, Naogaon, Gaibandha, Dinajpur, and Thakurgaon).
                </p>

                <p>
                  Operating under our founding motto *"Service to Creation means Service to the Creator"* (established October 15, 1981), our team works directly with local indigenous Santal, Oraon, Paharia, and Kol elders to ensure projects are culturally sensitive and sustainable.
                </p>

                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 space-y-3">
                  <h3 className="text-base font-bold text-emerald-300 flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Key Intervention Highlights:</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-200">
                    <li>• Direct involvement of local beneficiary committees and indigenous youth organizers.</li>
                    <li>• Coordinated with NGO Affairs Bureau Bangladesh (Reg No: 2841) and local district administrations.</li>
                    <li>• Published in The Santal Times newsletter (<Link href="http://www.santalstimes.com" target="_blank" className="underline text-emerald-400">www.santalstimes.com</Link>).</li>
                  </ul>
                </div>

                <p>
                  NAGR extends heartfelt appreciation to our institutional partners including MCC Bangladesh, BSF Norway, Wycliffe Foundation Australia, Rotary International, Lauvland Norway, New Start in East Norway, and Hjemmets Stiftelse Norway for their continuous backing.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-emerald-900/40 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <Newspaper className="w-4 h-4 text-emerald-400" />
                  <span>Other Field Dispatches</span>
                </h3>
                <div className="space-y-4">
                  {newsArticles.map((other) => (
                    <Link
                      key={other.id}
                      href={`/news/${other.slug}`}
                      className="block p-3 rounded-xl bg-emerald-950/50 border border-emerald-900/40 hover:border-emerald-500/40 transition-all group"
                    >
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">{other.category}</span>
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mt-1">
                        {other.title}
                      </h4>
                      <span className="text-[10px] text-amber-400 block mt-1">{other.date}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 text-center space-y-3 bg-gradient-to-b from-emerald-950/80 to-[#09160c]">
                <h3 className="text-lg font-bold text-white">Support Indigenous Causes</h3>
                <p className="text-xs text-emerald-200/80">
                  Your contributions directly fund mother-tongue primary education and maternal health clinics in remote villages.
                </p>
                <Link
                  href="/donate"
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-xs shadow-xl"
                >
                  Donate to NAGR
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
