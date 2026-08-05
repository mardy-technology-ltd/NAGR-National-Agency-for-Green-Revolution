'use client';

import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { contactInfo } from '@/data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030704] text-emerald-200/80 pt-16 pb-8 border-t border-emerald-900/40 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/40">
          
          {/* Col 1: Branding & Intro */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5 text-emerald-950 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                NAGR <span className="text-emerald-400 font-medium text-xs">BANGLADESH</span>
              </span>
            </Link>

            <p className="text-xs text-emerald-200/70 leading-relaxed">
              National Agency for Green Revolution (NAGR) is a registered non-governmental voluntary organization committed to indigenous rights, multilingual primary education, maternal healthcare, and environmental restoration in Rajshahi Division.
            </p>

            <div className="pt-2 text-xs space-y-1 text-emerald-400/80 font-mono">
              <p>• NGO Affairs Bureau Reg: 2841</p>
              <p>• Social Services Reg: Raj-1422</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap"><span className="text-emerald-500">•</span><span>Home</span></Link></li>
              <li><Link href="/who-we-are" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap"><span className="text-emerald-500">•</span><span>Who We Are</span></Link></li>
              <li><Link href="/what-we-do" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap"><span className="text-emerald-500">•</span><span>What We Do</span></Link></li>
              <li><Link href="/partners/core" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap"><span className="text-emerald-500">•</span><span>Our Partners</span></Link></li>
              <li><Link href="/reports" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap"><span className="text-emerald-500">•</span><span>Reports & Publications</span></Link></li>
              <li><Link href="/career" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap"><span className="text-emerald-500">•</span><span>Career & Notice</span></Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5 whitespace-nowrap"><span className="text-emerald-500">•</span><span>Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Col 3: Key Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">Focus Areas</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/projects/education-mle" className="hover:text-emerald-400 hover:underline transition-colors whitespace-nowrap">MLE Education</Link></li>
              <li><Link href="/projects/girls-hostel" className="hover:text-emerald-400 hover:underline transition-colors whitespace-nowrap">Nazipur Girls Hostel</Link></li>
              <li><Link href="/projects/health-hospital" className="hover:text-emerald-400 hover:underline transition-colors whitespace-nowrap">NAGR Community Hospital</Link></li>
              <li><Link href="/projects/economic-savings" className="hover:text-emerald-400 hover:underline transition-colors whitespace-nowrap">Women Micro-Savings</Link></li>
              <li><Link href="/projects/covid-dengue-relief" className="hover:text-emerald-400 hover:underline transition-colors whitespace-nowrap">COVID & Disaster Relief</Link></li>
              <li><Link href="/career?type=tender" className="hover:text-emerald-400 hover:underline transition-colors whitespace-nowrap">Tenders & Circulars</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider whitespace-nowrap">Headquarters</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>House #142, Block-B, Upashahar, Rajshahi-6000, Bangladesh</span>
              </div>
              <a href={`tel:${contactInfo.phonePrimary}`} className="flex items-center space-x-2 hover:text-emerald-400 transition-colors whitespace-nowrap">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{contactInfo.phonePrimary}</span>
              </a>
              <a href={`mailto:${contactInfo.emailPrimary}`} className="flex items-center space-x-2 hover:text-emerald-400 transition-colors whitespace-nowrap">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{contactInfo.emailPrimary}</span>
              </a>
            </div>

            <div className="pt-3">
              <Link
                href="/donate"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-bold text-xs shadow-lg transition-all whitespace-nowrap"
              >
                <Heart className="w-4 h-4 fill-emerald-950 shrink-0" />
                <span>Support Our Cause (Donate)</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/60 gap-4">
          <p>
            © {new Date().getFullYear()} National Agency for Green Revolution (NAGR) Bangladesh. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/who-we-are/legal-status" className="hover:text-emerald-300 transition-colors whitespace-nowrap">Privacy Policy</Link>
            <span>•</span>
            <Link href="/who-we-are/legal-status" className="hover:text-emerald-300 transition-colors whitespace-nowrap">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-950 border border-emerald-800/40 text-emerald-300 hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
