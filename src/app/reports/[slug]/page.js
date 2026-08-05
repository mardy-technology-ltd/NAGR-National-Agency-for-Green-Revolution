import Link from 'next/link';
import { ArrowLeft, Download, FileText, Newspaper, BookOpen, Image as ImageIcon, Play, Sparkles, Calendar, CheckCircle2, User } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { reportsSubpages } from '@/data/subpageData';
import { publicationsData, galleryData } from '@/data/mockData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = reportsSubpages[slug] || reportsSubpages['annual-report'];
  return {
    title: `${data.title} | NAGR Bangladesh`,
    description: data.subtitle,
  };
}

export default async function ReportsSubpage({ params }) {
  const { slug } = await params;
  const pageData = reportsSubpages[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    subtitle: "Official publication by NAGR Bangladesh.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200"
  };

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      {/* Header Banner */}
      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <Link
            href="/reports"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Reports & Media Overview</span>
          </Link>

          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase mb-4">
            Official Publication
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-emerald-200/80 text-sm sm:text-base max-w-2xl">
            {pageData.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Render based on slug */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          
          {/* PHOTO GALLERY SLUG */}
          {slug === 'photo-gallery' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-emerald-900/40 pb-4">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <ImageIcon className="w-6 h-6 text-emerald-400" />
                  <span>Field Activity Photo Album</span>
                </h2>
                <span className="text-xs text-emerald-400 font-mono">
                  {galleryData.photos.length} High-Res Photos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.photos.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 group relative"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-[11px] font-bold text-emerald-950 bg-emerald-400 rounded-full shadow-md">
                          {item.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 space-y-1">
                        <h3 className="text-sm font-bold text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-emerald-300/80">
                          📍 Northern Rajshahi Division Field Location
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIDEO PUBLICATION SLUG */}
          {slug === 'video-publication' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-emerald-900/40 pb-4">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <Play className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                  <span>Documentaries & Video Publications</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryData.videos.map((vid, idx) => (
                  <div key={idx} className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 group relative">
                    <div className="relative h-64 overflow-hidden">
                      <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500 text-emerald-950 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-xl shadow-emerald-500/40">
                          <Play className="w-8 h-8 fill-emerald-950" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <h3 className="text-base font-bold text-white drop-shadow-md">{vid.title}</h3>
                        <span className="text-xs font-mono text-emerald-300 bg-black/70 px-2.5 py-1 rounded-md border border-emerald-800/40">
                          {vid.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SANTAL TIMES SLUG */}
          {slug === 'santal-times' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2 border-b border-emerald-900/40 pb-4">
                <Newspaper className="w-6 h-6 text-emerald-400" />
                <span>The Santal Times (www.santalstimes.com)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {publicationsData.santalTimes.map((st, idx) => (
                  <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 flex items-center space-x-6">
                    <img src={st.cover} alt={st.issue} className="w-28 h-36 object-cover rounded-xl border border-emerald-800/40 shrink-0" />
                    <div className="space-y-3">
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800/40">
                        {st.date}
                      </span>
                      <h3 className="text-lg font-bold text-white">{st.issue}</h3>
                      <p className="text-xs text-emerald-200/80">Quarterly publication on indigenous culture, Santali language, and Barind climate stories.</p>
                      <button className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-500 text-emerald-950 text-xs font-bold">
                        <Download className="w-4 h-4" />
                        <span>Download PDF Issue</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STUDY RESEARCH SLUG */}
          {slug === 'study-research' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2 border-b border-emerald-900/40 pb-4">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                <span>Field Research & Impact Studies</span>
              </h2>

              <div className="space-y-4">
                {publicationsData.research.map((r, idx) => (
                  <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                      <h3 className="text-lg font-bold text-white">{r.title}</h3>
                      <div className="flex items-center space-x-3 text-xs text-emerald-300/80">
                        <span className="font-semibold text-emerald-400">Author: {r.author}</span>
                        <span>•</span>
                        <span>Year: {r.year}</span>
                      </div>
                      <p className="text-xs text-emerald-100/80 leading-relaxed">
                        Comprehensive empirical field investigation evaluating primary education retention, mother-tongue learning, and rural economic indicators.
                      </p>
                    </div>
                    <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold flex items-center space-x-2 shrink-0">
                      <Download className="w-4 h-4" />
                      <span>Download Research Paper (PDF)</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUCCESS STORY SLUG */}
          {slug === 'success-story' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2 border-b border-emerald-900/40 pb-4">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                <span>Community Impact & Success Stories</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {publicationsData.successStories.map((story, idx) => (
                  <div key={idx} className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 flex flex-col justify-between">
                    <img src={story.image} alt={story.title} className="w-full h-56 object-cover" />
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white">{story.title}</h3>
                      <p className="text-emerald-200/90 text-xs leading-relaxed">{story.excerpt}</p>
                      <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-xs text-emerald-300 italic">
                        "Through sustained mentorship, scholarship assistance, and community support, beneficiaries achieve economic independence and become community leaders."
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ANNUAL REPORT SLUG */}
          {slug === 'annual-report' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2 border-b border-emerald-900/40 pb-4">
                <FileText className="w-6 h-6 text-emerald-400" />
                <span>Annual Financial & Progress Audit Statements</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {publicationsData.annualReports.map((rep, idx) => (
                  <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white">{rep.title}</h3>
                    <div className="flex justify-between text-xs text-emerald-400/80">
                      <span>Fiscal Year: {rep.year}</span>
                      <span>PDF • {rep.size}</span>
                    </div>
                    <button className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download Audit Report (PDF)</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STRATEGIC FOCUS SLUG */}
          {slug === 'strategic-focus' && (
            <div className="glass-card p-8 rounded-2xl border border-emerald-900/40 space-y-6">
              <h2 className="text-2xl font-bold text-white">NAGR Strategic Focus Roadmap (2025-2030)</h2>
              <div className="space-y-4">
                {[
                  "Pillar 1: Expanding Santali Mother-Tongue Primary Schools to 50 Centers",
                  "Pillar 2: Establishing Solar-Powered Healthcare Clinics in Barind Hamlets",
                  "Pillar 3: Promoting Organic Seed Preservation & Drought-Tolerant Crops",
                  "Pillar 4: Strengthening Indigenous Female Leadership in Local Government"
                ].map((p, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-start space-x-3 text-emerald-200 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-semibold">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
