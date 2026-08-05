'use client';

import { motion } from 'framer-motion';
import { MapPin, UserCheck, Mail } from 'lucide-react';
import { teamMembers } from '@/data/mockData';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-[#070e08] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Leadership & Branch Managers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Meet Our <span className="text-gradient-emerald">Executive Team</span>
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Dedicated NGO professionals and indigenous leaders managing regional operations across Northern Bangladesh.
          </p>
        </div>

        {/* 5 Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 p-5 flex flex-col justify-between text-center space-y-4 group"
            >
              <div className="space-y-4">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-500/40 p-1 group-hover:border-emerald-400 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-400 block leading-tight">
                    {member.role}
                  </span>
                  <div className="flex items-center justify-center space-x-1 text-[11px] text-emerald-300/70 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{member.office}</span>
                  </div>
                </div>

                <p className="text-[11px] text-emerald-200/80 leading-relaxed italic border-t border-emerald-900/40 pt-3">
                  "{member.bio}"
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:dirnagr@gmail.com"
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 text-xs font-semibold border border-emerald-800/40 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Contact Office</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
