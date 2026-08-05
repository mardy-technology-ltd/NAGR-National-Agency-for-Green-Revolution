'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Play, Eye, X, ExternalLink } from 'lucide-react';
import { galleryData } from '@/data/mockData';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('photos');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [videoModal, setVideoModal] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-[#070e08] relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
              Field Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Photo & Video <span className="text-gradient-emerald">Gallery</span>
            </h2>
            <p className="text-emerald-200/80 text-sm max-w-lg">
              Visual records of Multilingual Language Day, Dengue net distribution, tree plantation drives, and sanitary factory workshops.
            </p>
          </div>

          {/* Gallery Mode Filter */}
          <div className="flex space-x-2 bg-emerald-950/60 p-1.5 rounded-xl border border-emerald-900/50">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center space-x-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'photos'
                  ? 'bg-emerald-500 text-emerald-950 shadow-md'
                  : 'text-emerald-300 hover:bg-emerald-900/50'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Photo Album ({galleryData.photos.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'videos'
                  ? 'bg-emerald-500 text-emerald-950 shadow-md'
                  : 'text-emerald-300 hover:bg-emerald-900/50'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Video Publications ({galleryData.videos.length})</span>
            </button>
          </div>
        </div>

        {/* Photos Grid */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {galleryData.photos.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setLightboxImage(item)}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 group relative cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {galleryData.videos.map((vid, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setVideoModal(vid)}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-emerald-900/40 group relative cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/90 text-emerald-950 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-xl shadow-emerald-500/40">
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
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Photo Lightbox Zoom Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setLightboxImage(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="relative z-10 w-full max-w-4xl bg-[#0d1a10] border border-emerald-500/40 rounded-3xl p-4 md:p-6 text-emerald-50 shadow-2xl space-y-4 overflow-hidden"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950 text-emerald-300 hover:bg-emerald-800 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden rounded-2xl max-h-[70vh]">
                <img src={lightboxImage.image} alt={lightboxImage.title} className="w-full h-full object-contain mx-auto" />
              </div>

              <div className="flex justify-between items-center px-2">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase">{lightboxImage.category}</span>
                  <h3 className="text-xl font-bold text-white">{lightboxImage.title}</h3>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800/40"
                >
                  Close Zoom
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video YouTube Modal Player */}
      <AnimatePresence>
        {videoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setVideoModal(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="relative z-10 w-full max-w-3xl bg-[#0d1a10] border border-emerald-500/40 rounded-3xl p-4 md:p-6 text-emerald-50 shadow-2xl space-y-4"
            >
              <button
                onClick={() => setVideoModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950 text-emerald-300 hover:bg-emerald-800 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white pr-10">{videoModal.title}</h3>
              
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-emerald-800/50">
                <iframe
                  src={videoModal.videoUrl || "https://www.youtube.com/embed/yl2SUP_yinY"}
                  title={videoModal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-emerald-400">Duration: {videoModal.duration}</span>
                <button
                  onClick={() => setVideoModal(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800/40"
                >
                  Close Player
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
