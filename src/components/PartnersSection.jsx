'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Building2, Handshake } from 'lucide-react';
import { partnersData } from '@/data/mockData';

export default function PartnersSection() {
  const [activeType, setActiveType] = useState('All');
  const [selectedPartner, setSelectedPartner] = useState(null);

  const categories = ['All', 'Core', 'Development', 'Govt', 'Staff'];

  const filteredPartners = activeType === 'All'
    ? partnersData
    : partnersData.filter((p) => p.type === activeType);

  const handleCardClick = (partner) => {
    setSelectedPartner(partner);
  };

  return (
    <section id="partners" className="py-20 bg-[#050b06] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Global & National Alliances
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Valued <span className="text-gradient-emerald">Development Partners</span>
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Collaborating with government agencies, global humanitarian bodies, and local networks. Click any partner card to view collaboration details.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-emerald-950/60 p-1.5 rounded-xl border border-emerald-900/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveType(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeType === cat
                    ? 'bg-emerald-500 text-emerald-950 shadow-md'
                    : 'text-emerald-300 hover:bg-emerald-900/50'
                }`}
              >
                {cat === 'Govt' ? 'Govt. Bodies' : cat === 'Staff' ? 'Staff Network' : `${cat} Partners`}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Cards Grid with Smooth Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleCardClick(partner)}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-emerald-900/40 flex items-center space-x-4 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-950 border border-emerald-800/50 overflow-hidden shrink-0 flex items-center justify-center p-2 group-hover:border-emerald-400/50 transition-colors">
                <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800/40">
                  {partner.type} Partner
                </span>
                <h3 className="text-sm font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Partner Detail Modal Popup */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            
            {/* Backdrop Click to Close */}
            <div className="absolute inset-0" onClick={() => setSelectedPartner(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-xl bg-[#0d1a10] border border-emerald-500/30 rounded-3xl p-6 md:p-8 shadow-2xl text-emerald-50"
            >
              {/* Close Button (X) */}
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950/80 hover:bg-emerald-800 text-emerald-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Partner Logo & Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-emerald-950 border border-emerald-700/50 p-2 overflow-hidden shrink-0 flex items-center justify-center">
                  <img src={selectedPartner.logo} alt={selectedPartner.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="space-y-1">
                  <span className="px-3 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full">
                    {selectedPartner.type} Partner
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {selectedPartner.name}
                  </h3>
                </div>
              </div>

              {/* Collaboration Description */}
              <div className="glass-card p-5 rounded-2xl border border-emerald-900/40 space-y-3 mb-6">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
                  <Handshake className="w-4 h-4 text-emerald-400" />
                  <span>Institutional Strategic Alliance</span>
                </h4>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  {selectedPartner.description}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-emerald-900/40">
                <a
                  href={selectedPartner.website}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <span>Visit Official Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedPartner(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold text-xs border border-emerald-800/40"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
