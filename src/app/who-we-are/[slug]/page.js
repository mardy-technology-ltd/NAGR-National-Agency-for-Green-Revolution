import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Award, Users, BookOpen, MapPin } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { whoWeAreSubpages } from '@/data/subpageData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = whoWeAreSubpages[slug] || whoWeAreSubpages['intro'];
  return {
    title: `${data.title} | NAGR Bangladesh`,
    description: data.subtitle,
  };
}

export default async function WhoWeAreSubpage({ params }) {
  const { slug } = await params;
  const pageData = whoWeAreSubpages[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    badge: "Who We Are",
    subtitle: "National Agency for Green Revolution (NAGR) Bangladesh.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
    content: [
      "National Agency for Green Revolution (NAGR) is committed to empowering indigenous Santal and rural communities through mother-tongue education, healthcare, and eco-livelihoods.",
      "Working across 6 districts in Northern Bangladesh with registered approval from NGO Affairs Bureau Bangladesh (Reg No: 2841)."
    ]
  };

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      {/* Header Banner */}
      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <Link
            href="/who-we-are"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Who We Are Overview</span>
          </Link>

          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase mb-4">
            {pageData.badge || "Who We Are"}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            {pageData.title}
          </h1>
          <p className="text-emerald-200/80 text-sm sm:text-base max-w-2xl">
            {pageData.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {pageData.image && (
                <div className="overflow-hidden rounded-2xl border border-emerald-900/50 shadow-2xl">
                  <img src={pageData.image} alt={pageData.title} className="w-full h-[400px] object-cover" />
                </div>
              )}

              <div className="glass-card p-8 rounded-2xl border border-emerald-900/40 space-y-6">
                <h2 className="text-2xl font-bold text-white">Overview & Detailed Description</h2>
                
                {/* Safe Array or String Mapping */}
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

                {pageData.highlights && (
                  <div className="pt-6 border-t border-emerald-900/40 space-y-3">
                    <h3 className="text-lg font-bold text-emerald-300">Key Pillars:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pageData.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-emerald-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional Members Grid for Executive Committee & Management */}
                {pageData.members && (
                  <div className="pt-6 border-t border-emerald-900/40 space-y-4">
                    <h3 className="text-lg font-bold text-emerald-300">Leadership List:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pageData.members.map((m, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 space-y-1">
                          <h4 className="text-sm font-bold text-white">{m.name}</h4>
                          <span className="text-xs text-emerald-400 block">{m.position}</span>
                          <span className="text-[11px] text-emerald-300/70 block">{m.expertise || m.office}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional District Coverage Table */}
                {pageData.districtsList && (
                  <div className="pt-6 border-t border-emerald-900/40 space-y-4">
                    <h3 className="text-lg font-bold text-emerald-300">District Operational Breakup:</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-emerald-800 text-emerald-300 bg-emerald-950">
                            <th className="p-3">District</th>
                            <th className="p-3">Upazilas Covered</th>
                            <th className="p-3">Households Reached</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-900/40 text-emerald-200">
                          {pageData.districtsList.map((d, idx) => (
                            <tr key={idx} className="hover:bg-emerald-950/40">
                              <td className="p-3 font-bold text-white">{d.name}</td>
                              <td className="p-3">{d.upazilas}</td>
                              <td className="p-3 font-mono text-emerald-400">{d.households}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Quick Links Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-emerald-900/40 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Who We Are Directory</h3>
                <ul className="space-y-2 text-xs">
                  {[
                    { id: 'intro', title: 'Introduction' },
                    { id: 'mission-vision', title: 'Mission & Vision' },
                    { id: 'where-we-work', title: 'Where We Work' },
                    { id: 'legal-status', title: 'Legal Status' },
                    { id: 'chairmans-speech', title: "Chairman's Speech" },
                    { id: 'directors-speech', title: "Executive Director's Speech" },
                    { id: 'executive-committee', title: 'Executive Committee' },
                    { id: 'management-team', title: 'Management Team' }
                  ].map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/who-we-are/${item.id}`}
                        className={`block p-2.5 rounded-lg border transition-colors ${
                          slug === item.id
                            ? 'bg-emerald-500 text-emerald-950 font-bold border-emerald-400'
                            : 'bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/50 border-emerald-900/40'
                        }`}
                      >
                        • {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
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
