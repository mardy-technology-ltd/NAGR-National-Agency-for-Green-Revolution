'use client';

import { tickerLogos } from '@/data/mockData';

export default function PartnerTicker() {
  // Duplicate logos array for seamless infinite marquee loop
  const duplicatedLogos = [...tickerLogos, ...tickerLogos, ...tickerLogos];

  return (
    <section className="py-10 bg-[#030704] border-t border-b border-emerald-900/40 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mb-6 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400/80">
          Our Valued Global & National Network Partners
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex w-full overflow-hidden select-none">
        <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
          {duplicatedLogos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 px-5 py-3 rounded-2xl glass-card border border-emerald-900/40 shrink-0 group hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-950 p-1 border border-emerald-800/40 overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-xs font-bold text-emerald-200 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
