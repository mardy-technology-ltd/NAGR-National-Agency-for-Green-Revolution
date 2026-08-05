'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ExternalLink, Calendar, MapPin, User, FileText } from 'lucide-react';

export default function DetailModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0d1a10] border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-2xl text-emerald-50"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950/80 hover:bg-emerald-800 text-emerald-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          {data.badge || data.category ? (
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-emerald-300 bg-emerald-900/50 border border-emerald-700/40 rounded-full">
              {data.badge || data.category}
            </span>
          ) : null}

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-emerald">
            {data.title || data.name || "Item Details"}
          </h3>

          {/* Optional Image */}
          {data.image && (
            <div className="mb-6 overflow-hidden rounded-xl border border-emerald-900/50">
              <img
                src={data.image}
                alt={data.title || "Detail view"}
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>
          )}

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs text-emerald-300/80 bg-emerald-950/40 p-3 rounded-lg border border-emerald-900/30">
            {data.location && (
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{data.location}</span>
              </div>
            )}
            {data.beneficiaries && (
              <div className="flex items-center space-x-1.5">
                <User className="w-4 h-4 text-emerald-400" />
                <span>{data.beneficiaries}</span>
              </div>
            )}
            {data.deadline && (
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Deadline: {data.deadline}</span>
              </div>
            )}
            {data.subProgram && (
              <div className="flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>{data.subProgram}</span>
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="prose prose-invert max-w-none text-emerald-100/90 text-sm leading-relaxed space-y-4">
            <p>{data.fullText || data.desc || data.speech || data.excerpt || "NAGR Bangladesh works to empower local communities through grassroots participation, capacity building, and sustainable development programs."}</p>

            {data.nestedItems && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40">
                <h4 className="text-sm font-semibold text-emerald-300 mb-2">Program Components:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {data.nestedItems.map((item) => (
                    <li key={item.id} className="flex items-center space-x-2 text-xs text-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-4 border-t border-emerald-900/40 flex justify-between items-center">
            <span className="text-xs text-emerald-400/70">NAGR Bangladesh Redesign Prototype</span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg shadow-emerald-400/20"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
