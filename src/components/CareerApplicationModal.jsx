'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Upload, MapPin, Calendar, Briefcase, FileText, Send, Building2 } from 'lucide-react';

export default function CareerApplicationModal({ isOpen, onClose, notice }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', bidAmount: '', file: null });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !notice) return null;

  const isTender = notice.type && notice.type.toLowerCase().includes('tender');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleModalClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', company: '', bidAmount: '', file: null });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        
        {/* Backdrop Click */}
        <div className="absolute inset-0" onClick={handleModalClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d1a10] border border-emerald-500/30 rounded-3xl p-6 md:p-8 shadow-2xl text-emerald-50"
        >
          {/* Close Button */}
          <button
            onClick={handleModalClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-emerald-950/80 hover:bg-emerald-800 text-emerald-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full">
              {notice.type}
            </span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-emerald-300 bg-emerald-950 border border-emerald-800/40 rounded">
              {notice.status}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {notice.title}
          </h2>

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs text-emerald-300/80 bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-900/40">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Location: {notice.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-amber-400">
              <Calendar className="w-4 h-4" />
              <span>Deadline: {notice.deadline}</span>
            </div>
          </div>

          {/* Detailed Responsibilities & Requirements Placeholder */}
          <div className="glass-card p-5 rounded-2xl border border-emerald-900/40 space-y-3 mb-6 text-xs text-emerald-100/90">
            <h3 className="text-sm font-bold text-emerald-300 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{isTender ? "Tender Scope & Terms:" : "Role Responsibilities & Requirements:"}</span>
            </h3>
            <p className="leading-relaxed">{notice.desc}</p>
            <ul className="space-y-1.5 pt-2 text-emerald-200/80">
              {isTender ? [
                "• Must provide valid Trade License, e-TIN, and VAT registration certificate.",
                "• Delivery schedule: Within 21 days from purchase order issuance.",
                "• Sealed bids to be submitted electronically or to Rajshahi Head Office."
              ].map((item, idx) => <li key={idx}>{item}</li>) : [
                "• Minimum Bachelor's degree in Social Science, Education, or relevant field.",
                "• 3+ years experience working with indigenous Santal communities in Barind tract.",
                "• Strong communication skills in Bengali and English; Santali dialect is an asset."
              ].map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>

          {/* Application Form vs Success State */}
          {submitted ? (
            <div className="py-8 text-center space-y-4 bg-emerald-950/60 rounded-2xl p-6 border border-emerald-500/40 animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {isTender ? "Tender Bid Submitted Successfully! (Mock Demo)" : "Application Submitted Successfully! (Mock Demo)"}
              </h3>
              <p className="text-xs text-emerald-200/80 max-w-md mx-auto leading-relaxed">
                Thank you! Your submission for <span className="font-semibold text-emerald-300">{notice.title}</span> has been logged in our demonstration system.
              </p>
              <button
                onClick={handleModalClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 text-emerald-950 font-bold text-xs shadow-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-emerald-900/40">
              <h3 className="text-base font-bold text-white">
                {isTender ? "Submit Procurement Bid Proposal" : "Submit Direct Online Application"}
              </h3>

              {isTender ? (
                <>
                  {/* Tender Form */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-300 mb-1">Company / Vendor Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Green Textile Ltd."
                        className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-emerald-300 mb-1">Contact Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vendor@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1">Bid Offer Amount (BDT) *</label>
                    <input
                      type="number"
                      required
                      value={formData.bidAmount}
                      onChange={(e) => setFormData({ ...formData, bidAmount: e.target.value })}
                      placeholder="e.g. 1500000"
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1">Attach Technical Proposal PDF (Mock) *</label>
                    <div className="flex items-center justify-center w-full p-4 border-2 border-dashed border-emerald-800/60 rounded-xl bg-emerald-950/40 text-xs text-emerald-300/80 hover:border-emerald-500/60 transition-colors">
                      <Upload className="w-4 h-4 text-emerald-400 mr-2" />
                      <span>Select Financial & Technical Quotation PDF</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Candidate Form */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Nusrat Jahan"
                        className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-emerald-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nusrat@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+8801700000000"
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1">Attach Resume / CV PDF (Mock) *</label>
                    <div className="flex items-center justify-center w-full p-4 border-2 border-dashed border-emerald-800/60 rounded-xl bg-emerald-950/40 text-xs text-emerald-300/80 hover:border-emerald-500/60 transition-colors">
                      <Upload className="w-4 h-4 text-emerald-400 mr-2" />
                      <span>Click to upload CV file (PDF or DOCX)</span>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-bold text-xs shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{isTender ? "Submit Tender Bid Proposal" : "Submit Job Application"}</span>
              </button>
            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
