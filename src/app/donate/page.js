'use client';

import { useState } from 'react';
import { Heart, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function DonatePage() {
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#070e08] text-emerald-50">
      <TopBar />
      <Navbar />

      <section className="py-16 bg-[#040905] border-b border-emerald-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-full uppercase">
            Support Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Donate to <span className="text-gradient-emerald">NAGR Bangladesh</span>
          </h1>
          <p className="text-emerald-200/80 text-sm max-w-xl mx-auto leading-relaxed">
            Your generous contribution directly powers indigenous child education, maternal healthcare clinics, and emergency winter relief in Northern Bangladesh.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-emerald-500/30 shadow-2xl relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <Heart className="w-10 h-10 fill-emerald-400" />
                </div>
                <h2 className="text-3xl font-black text-white">Thank You for Your Generosity!</h2>
                <p className="text-emerald-200/90 text-sm max-w-md mx-auto leading-relaxed">
                  Your pledge of ৳{customAmount || amount} has been recorded. Our donor coordinator will contact you via email with official receipt details.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-500 text-emerald-950 font-bold text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Homepage</span>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Donation Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider">Donation Frequency</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                        donationType === 'one-time'
                          ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-lg'
                          : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40'
                      }`}
                    >
                      One-Time Contribution
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                        donationType === 'monthly'
                          ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-lg'
                          : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40'
                      }`}
                    >
                      Monthly Sustainer
                    </button>
                  </div>
                </div>

                {/* Amount Options */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider">Select Amount (BDT)</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {['500', '1000', '2500', '5000'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => { setAmount(val); setCustomAmount(''); }}
                        className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                          amount === val && !customAmount
                            ? 'bg-emerald-500 text-emerald-950 border-emerald-400 shadow-md'
                            : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40'
                        }`}
                      >
                        ৳{val}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Or enter custom amount in ৳ BDT"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                  />
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1">Donor Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-emerald-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800/50 text-emerald-100 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition-all"
                >
                  Proceed to Secure Donation (bKash / Nagad / Bank)
                </button>

                <div className="flex items-center justify-center space-x-2 text-xs text-emerald-400/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Tax-Deductible NGO Bureau Reg No: 2841</span>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
