'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ShieldAlert, Droplets, HeartHandshake, Stethoscope, ArrowRight, X } from 'lucide-react';
import { servicesData } from '@/data/mockData';

const iconMap = {
  GraduationCap: GraduationCap,
  ShieldAlert: ShieldAlert,
  Droplets: Droplets,
  HeartHandshake: HeartHandshake,
  Stethoscope: Stethoscope
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-[#050b06] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Our Key Interventions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Comprehensive <span className="text-gradient-emerald">Community Services</span>
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Delivering targeted grassroots development programs across education, health, sanitation, disaster response, and healthcare camps.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || GraduationCap;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedService(service)}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09150b] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 backdrop-blur-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800/40">
                      {service.tagline}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-emerald-200/80 leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 text-xs font-bold border border-emerald-800/40 transition-colors">
                    <span>Explore Interventions</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setSelectedService(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-xl bg-[#0d1a10] border border-emerald-500/30 rounded-3xl p-6 md:p-8 text-emerald-50 shadow-2xl space-y-4"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950 text-emerald-300 hover:bg-emerald-800"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full inline-block">
                {selectedService.tagline}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-52 object-cover rounded-2xl border border-emerald-900/40" />
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">{selectedService.desc}</p>
              
              <div className="pt-4 flex justify-between items-center">
                <Link
                  href="/what-we-do"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-xs shadow-lg"
                >
                  View All Programs Page
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-950 text-emerald-300 font-bold text-xs border border-emerald-800/40"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
