'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';
import { contactInfo } from '@/data/mockData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#050b06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact <span className="text-gradient-emerald">NAGR Bangladesh</span>
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Have questions about our programs, partnership opportunities, or donor contributions? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-emerald-900/40 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Head Office Location</span>
              </h3>

              <div className="space-y-4 text-xs text-emerald-100/90">
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 space-y-2">
                  <span className="font-bold text-emerald-300 block">Rajshahi Secretariat Office:</span>
                  <p>{contactInfo.address}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 space-y-2">
                  <span className="font-bold text-emerald-300 block">Field Operational Office:</span>
                  <p>{contactInfo.branchOffice}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-900/40 space-y-3">
                <a
                  href={`tel:${contactInfo.phonePrimary}`}
                  className="flex items-center space-x-3 text-xs text-emerald-300 hover:text-emerald-400 transition-colors p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/30"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Phone: {contactInfo.phonePrimary} / {contactInfo.phoneSecondary}</span>
                </a>

                <a
                  href={`mailto:${contactInfo.emailPrimary}`}
                  className="flex items-center space-x-3 text-xs text-emerald-300 hover:text-emerald-400 transition-colors p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/30"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Email: {contactInfo.emailPrimary} / {contactInfo.emailSecondary}</span>
                </a>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-900/40 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800/40 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-0.5 text-xs">
                <span className="font-bold text-white block">Working Hours:</span>
                <span className="text-emerald-300/80 block">Sunday – Thursday: 9:00 AM – 5:00 PM</span>
                <span className="text-emerald-400/60 block">Friday – Saturday: Closed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-emerald-900/40 relative">
              <h3 className="text-2xl font-bold text-white mb-2">Send Us a Direct Message</h3>
              <p className="text-xs text-emerald-200/80 mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs flex items-center space-x-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will reply to your email shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tanvir Hossain"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. tanvir@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+8801700000000"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1.5">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Partnership Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-300 mb-1.5">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your detailed inquiry here..."
                    className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Now</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
