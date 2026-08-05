'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Briefcase, MapPin, GraduationCap, HeartHandshake, Award, Target, Eye, BookOpen } from 'lucide-react';
import { organizationHistory, impactStats } from '@/data/mockData';
import AnimatedCounter from '@/components/AnimatedCounter';

const iconMap = {
  Users: Users,
  Briefcase: Briefcase,
  MapPin: MapPin,
  GraduationCap: GraduationCap,
  HeartHandshake: HeartHandshake
};

export default function HistorySection() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section id="who-we-are" className="py-20 bg-[#070e08] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Rooted in Grassroots Action & <span className="text-gradient-emerald">Eco Sustainability</span>
          </h2>
          <p className="text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            {organizationHistory.tagline}
          </p>
        </div>

        {/* Top Grid: History & Vision/Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* History Text & Image */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-emerald-900/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                <span>Our Organization History</span>
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed mb-6">
                {organizationHistory.description}
              </p>
              
              {/* Working Districts */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
                  Primary Coverage Districts:
                </span>
                <div className="flex flex-wrap gap-2">
                  {organizationHistory.workingDistricts.map((dist) => (
                    <span
                      key={dist}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-800/40 text-emerald-300"
                    >
                      📍 {dist}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/who-we-are/intro"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-300 text-xs font-semibold border border-emerald-700/50 transition-all"
              >
                <span>Read Full Background Page</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Mission / Vision Interactive Tabs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-emerald-900/40">
              <div className="flex space-x-2 border-b border-emerald-900/50 pb-4 mb-4">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center space-x-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'mission'
                      ? 'bg-emerald-500 text-emerald-950 shadow-md'
                      : 'text-emerald-300 hover:bg-emerald-950'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center space-x-2 px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'vision'
                      ? 'bg-emerald-500 text-emerald-950 shadow-md'
                      : 'text-emerald-300 hover:bg-emerald-950'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </button>
              </div>

              <div className="min-h-[140px] flex items-center">
                {activeTab === 'mission' ? (
                  <p className="text-emerald-100 text-sm leading-relaxed animate-in fade-in duration-300">
                    "{organizationHistory.mission}"
                  </p>
                ) : (
                  <p className="text-emerald-100 text-sm leading-relaxed animate-in fade-in duration-300">
                    "{organizationHistory.vision}"
                  </p>
                )}
              </div>
            </div>

            {/* Legal Status Card */}
            <div id="legal-status" className="glass-card p-6 rounded-2xl border border-emerald-900/40">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-sm font-bold text-emerald-300 flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Government & Legal Status</span>
                </h4>
                <Link href="/who-we-are/legal-status" className="text-[11px] text-emerald-400 font-semibold hover:underline">
                  View Full →
                </Link>
              </div>
              <div className="space-y-2">
                {organizationHistory.legalRegistrations.map((reg, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs p-2 rounded bg-emerald-950/60 border border-emerald-900/40">
                    <span className="text-emerald-200/90">{reg.authority}</span>
                    <span className="font-mono text-emerald-400 font-semibold">{reg.regNo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Impact Statistics Grid with Dynamic Animated Counter */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {impactStats.map((stat, idx) => {
            const IconComp = iconMap[stat.icon] || Users;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover p-5 rounded-xl text-center space-y-2 border border-emerald-900/50"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800/40">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-2xl font-black text-white">
                  <AnimatedCounter value={stat.value} duration={1800} />
                </div>
                <div className="text-xs text-emerald-300/80 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
