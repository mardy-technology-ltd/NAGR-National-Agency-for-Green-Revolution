'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { partnerTestimonials } from '@/data/mockData';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % partnerTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % partnerTestimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + partnerTestimonials.length) % partnerTestimonials.length);

  const t = partnerTestimonials[index];

  return (
    <section className="py-20 bg-[#070e08] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Institutional Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What Our <span className="text-gradient-emerald">Partners Say</span>
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Reflections from international donor agencies and partner organizations collaborating with NAGR Bangladesh.
          </p>
        </div>

        {/* Auto-Playing Slider Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-500/30 text-center space-y-6 bg-gradient-to-b from-emerald-950/60 to-[#09170d] relative shadow-2xl"
            >
              <Quote className="w-12 h-12 mx-auto text-emerald-400/40" />

              <p className="text-base md:text-xl text-emerald-100/95 leading-relaxed font-serif italic max-w-2xl mx-auto">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-emerald-900/40">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-14 h-14 rounded-full border-2 border-emerald-400 object-cover shadow-lg shrink-0"
                />
                <div className="text-left">
                  <h3 className="text-base font-bold text-white">{t.author}</h3>
                  <span className="text-xs text-emerald-400 font-semibold">{t.title}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-emerald-950 border border-emerald-800/50 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {partnerTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === index ? 'w-8 bg-emerald-400' : 'w-2.5 bg-emerald-900'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-emerald-950 border border-emerald-800/50 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
