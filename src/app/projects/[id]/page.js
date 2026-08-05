import Link from 'next/link';
import { ArrowLeft, MapPin, Users, Calendar, CheckCircle2, Phone, Mail, Heart, ShieldCheck, FileText } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { projectsData, contactInfo } from '@/data/mockData';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id) || projectsData[0];
  return {
    title: `${project.title} | NAGR Bangladesh`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id) || {
    id: id,
    title: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: "Special Initiative",
    desc: "National Agency for Green Revolution (NAGR) Bangladesh implements targeted community development, healthcare, and education programs across Northern Bangladesh.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
    location: "Northern Rajshahi Division",
    beneficiaries: "Community Wide",
    subProgram: "NAGR Core Program"
  };

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      {/* Header Breadcrumb Banner */}
      <section className="relative py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full">
              {project.category}
            </span>
            {project.subProgram && (
              <span className="px-3 py-1 text-xs font-mono text-emerald-300 bg-emerald-950 border border-emerald-800/40 rounded-full">
                {project.subProgram}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-xs text-emerald-300/80">
            {project.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Location: {project.location}</span>
              </div>
            )}
            {project.beneficiaries && (
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Beneficiaries: {project.beneficiaries}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Image & Details */}
            <div className="lg:col-span-8 space-y-8">
              <div className="overflow-hidden rounded-2xl border border-emerald-900/50 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="glass-card p-8 rounded-2xl border border-emerald-900/40 space-y-6">
                <h2 className="text-2xl font-bold text-white">Project Overview</h2>
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  {project.desc}
                </p>
                <p className="text-emerald-100/80 text-sm leading-relaxed">
                  National Agency for Green Revolution (NAGR) works closely with local community committees, indigenous elders, and government authorities to ensure maximum participation, transparency, and sustainability in this initiative.
                </p>

                <div className="pt-6 border-t border-emerald-900/40 space-y-4">
                  <h3 className="text-lg font-bold text-emerald-300">Key Objectives & Outcomes:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Direct healthcare & medical subsidy for underprivileged families",
                      "Capacity building workshops for youth & women",
                      "Mother-tongue primary education support",
                      "Sustainable eco-farming & climate adaptation",
                      "24/7 community clinic & emergency ambulance services",
                      "Quarterly monitoring & transparent audit reporting"
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-emerald-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Contact & Donate Widget */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Donate Box */}
              <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 text-center space-y-4 bg-gradient-to-b from-emerald-950/80 to-[#09160c]">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Heart className="w-6 h-6 fill-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Support This Initiative</h3>
                <p className="text-xs text-emerald-200/80">
                  Your generous donation directly funds medicine, school books, and winter clothes for Santal & rural children.
                </p>
                <Link
                  href="/donate"
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all"
                >
                  Make a Contribution
                </Link>
              </div>

              {/* Quick Contact Widget */}
              <div className="glass-card p-6 rounded-2xl border border-emerald-900/40 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Project Information Desk</h4>
                <div className="space-y-3 text-xs text-emerald-200/80">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{contactInfo.phonePrimary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>{contactInfo.emailPrimary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>NGO Affairs Bureau Reg: 2841</span>
                  </div>
                </div>
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
