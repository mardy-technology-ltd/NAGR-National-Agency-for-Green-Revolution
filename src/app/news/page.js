import Link from 'next/link';
import { ArrowLeft, Calendar, ArrowRight, Newspaper } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { newsArticles } from '@/data/mockData';

export const metadata = {
  title: 'Latest News & Field Announcements | NAGR Bangladesh',
  description: 'Stay updated on NAGR Bangladesh community inaugurations, Multilingual Education (MLE) launches, and field dispatches across Northern Bangladesh.',
};

export default function NewsIndexPage() {
  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      {/* Header Banner */}
      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Homepage</span>
          </Link>

          <div className="space-y-3">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
              <Newspaper className="w-4 h-4 text-emerald-400" />
              <span>Media & Field Bulletins</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Latest News & <span className="text-gradient-emerald">Field Announcements</span>
            </h1>
            <p className="text-emerald-200/80 text-sm sm:text-base max-w-3xl leading-relaxed">
              Discover recent development dispatches, Kol community library inaugurations, and mother-tongue educational launches across Rajshahi Division.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 flex flex-col justify-between group"
              >
                <Link href={`/news/${article.slug}`}>
                  <div className="relative h-56 overflow-hidden">
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
                    className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 text-xs font-bold border border-emerald-800/40 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
