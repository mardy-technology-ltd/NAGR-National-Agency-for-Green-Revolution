'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { heroSlides } from '@/data/mockData';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[currentIndex];

  return (
    <section className="relative w-full h-[620px] md:h-[700px] overflow-hidden bg-[#050b06]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040905]/95 via-[#040905]/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e08] via-transparent to-black/40" />

          {/* Slide Text Content */}
          <div className="relative max-w-[1440px] mx-auto h-full px-4 md:px-8 flex items-center">
            <div className="max-w-3xl text-left space-y-6">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{slide.badge}</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-emerald-100/90 text-sm sm:text-lg leading-relaxed font-normal"
              >
                {slide.subtitle}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href={slide.ctaPrimaryLink || "/what-we-do"}
                  className="flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all hover:scale-[1.02]"
                >
                  <span>{slide.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={slide.ctaSecondaryLink || "/donate"}
                  className="px-7 py-3.5 rounded-xl glass-card text-emerald-300 hover:text-white hover:border-emerald-400/60 font-semibold text-sm transition-all"
                >
                  {slide.ctaSecondary}
                </Link>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-300 hover:text-white hover:bg-emerald-800/80 transition-all backdrop-blur-md cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-300 hover:text-white hover:bg-emerald-800/80 transition-all backdrop-blur-md cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-8 z-20 flex space-x-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-emerald-900/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
