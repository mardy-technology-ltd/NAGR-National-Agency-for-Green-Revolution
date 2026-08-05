'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Menu, X, Heart, Leaf } from 'lucide-react';
import { navigationMenu } from '@/data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNested, setActiveNested] = useState(null);

  const resolveRoute = (id) => {
    switch (id) {
      // Main Navbar Links
      case 'home': return '/';
      case 'who-we-are': return '/who-we-are';
      case 'what-we-do': return '/what-we-do';
      case 'partners': return '/partners/core';
      case 'reports': return '/reports';
      case 'career': return '/career';
      case 'contact': return '/contact';

      // Who We Are Sub-items
      case 'intro': return '/who-we-are/intro';
      case 'mission-vision': return '/who-we-are/mission-vision';
      case 'where-we-work': return '/who-we-are/where-we-work';
      case 'legal-status': return '/who-we-are/legal-status';
      case 'chairmans-speech': return '/who-we-are/chairmans-speech';
      case 'directors-speech': return '/who-we-are/directors-speech';
      case 'executive-committee': return '/who-we-are/executive-committee';
      case 'management-team': return '/who-we-are/management-team';

      // What We Do Sub-items & Education/Health
      case 'project-wise': return '/what-we-do';
      case 'tks': return '/what-we-do/tabitha-kindergarten-school';
      case 'pre-primary': return '/what-we-do/pre-primary';
      case 'sishu-bikas': return '/what-we-do/sishu-bikas';
      case 'nazipur-hostel': return '/what-we-do/nazipur-hostel';
      case 'sharp': return '/what-we-do/sharp';
      case 'hospital': return '/projects/health-hospital';
      case 'clinic': return '/what-we-do/clinic';
      case 'covid19': return '/projects/covid-dengue-relief';
      case 'nutrition': return '/what-we-do/nutrition';
      case 'kdp': return '/what-we-do/kdp';
      case 'social-dev': return '/what-we-do/social-dev';
      case 'saving-awareness': return '/projects/economic-savings';

      // Partners Sub-items
      case 'core-partners': return '/partners/core';
      case 'dev-partners': return '/partners/development';
      case 'govt-partners': return '/partners/govt';
      case 'staff-network': return '/partners/staff';

      // Reports & Publication Sub-items
      case 'annual-report': return '/reports/annual-report';
      case 'strategic-focus': return '/reports/strategic-focus';
      case 'santal-times': return '/reports/santal-times';
      case 'photo-gallery': return '/reports/photo-gallery';
      case 'video-pub': return '/reports/video-publication';
      case 'study-research': return '/reports/study-research';
      case 'success-stories': return '/reports/success-story';
      case 'donate-page': return '/donate';

      // Career Sub-items
      case 'vacancy': return '/career?type=vacancy';
      case 'job-circular': return '/career?type=job-circular';
      case 'internship': return '/career?type=internship';
      case 'tender': return '/career?type=tender';
      case 'notice': return '/career?type=notice';
      case 'result': return '/career?type=result';

      default: return `/${id}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo (Absolute Left) */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 text-emerald-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                NAGR <span className="text-emerald-400 font-medium text-sm">BANGLADESH</span>
              </span>
              <span className="text-[10px] text-emerald-300/70 tracking-wider uppercase font-semibold whitespace-nowrap">
                National Agency for Green Revolution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with whitespace-nowrap & gap-x-6 */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-medium">
            {navigationMenu.map((item) => (
              <div
                key={item.id}
                className="relative group shrink-0"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveNested(null);
                }}
              >
                {item.submenu ? (
                  <Link
                    href={resolveRoute(item.id)}
                    className="flex items-center space-x-1.5 px-3 py-2 text-sm font-semibold text-emerald-100/90 hover:text-emerald-400 transition-colors rounded-lg group-hover:bg-emerald-950/40 whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">{item.title}</span>
                    <ChevronDown className="w-4 h-4 text-emerald-400 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
                  </Link>
                ) : (
                  <Link
                    href={resolveRoute(item.id)}
                    className="px-3 py-2 text-sm font-semibold text-emerald-100/90 hover:text-emerald-400 transition-colors rounded-lg whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">{item.title}</span>
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {item.submenu && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="glass-card rounded-xl p-2 shadow-2xl border border-emerald-500/20 bg-[#09150b]/95 backdrop-blur-xl">
                      {item.submenu.map((sub) => (
                        <div
                          key={sub.id}
                          className="relative group/nested"
                          onMouseEnter={() => sub.hasNested && setActiveNested(sub.id)}
                        >
                          <Link
                            href={resolveRoute(sub.id)}
                            onClick={() => { setActiveDropdown(null); setActiveNested(null); }}
                            className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-medium text-emerald-200 hover:text-emerald-300 hover:bg-emerald-900/40 rounded-lg text-left transition-colors whitespace-nowrap"
                          >
                            <span className="whitespace-nowrap">{sub.title}</span>
                            {sub.hasNested && (
                              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            )}
                          </Link>

                          {/* Nested Submenu */}
                          {sub.hasNested && activeNested === sub.id && (
                            <div className="absolute left-full top-0 w-56 pl-2 animate-in fade-in slide-in-from-left-2 duration-150">
                              <div className="glass-card rounded-xl p-2 shadow-2xl border border-emerald-500/20 bg-[#0c1e10]/95">
                                {sub.nestedItems.map((nested) => (
                                  <Link
                                    key={nested.id}
                                    href={resolveRoute(nested.id)}
                                    onClick={() => { setActiveDropdown(null); setActiveNested(null); }}
                                    className="w-full px-3 py-2 text-[11px] text-emerald-300 hover:text-white hover:bg-emerald-800/50 rounded-md text-left transition-colors flex items-center space-x-2 whitespace-nowrap"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                                    <span className="whitespace-nowrap">{nested.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Action CTA (Absolute Right) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/donate"
              className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <Heart className="w-4 h-4 fill-emerald-950 shrink-0" />
              <span className="whitespace-nowrap">Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-emerald-950/60 text-emerald-300 hover:text-white hover:bg-emerald-900/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-emerald-900/40 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            {navigationMenu.map((item) => (
              <div key={item.id} className="border-b border-emerald-900/20 pb-2">
                <Link
                  href={resolveRoute(item.id)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-emerald-200 py-2 px-2 text-sm flex justify-between items-center block whitespace-nowrap"
                >
                  <span>{item.title}</span>
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1 mt-1 border-l-2 border-emerald-800/40">
                    {item.submenu.map((sub) => (
                      <div key={sub.id}>
                        <Link
                          href={resolveRoute(sub.id)}
                          onClick={() => setMobileMenuOpen(false)}
                          className="w-full text-left py-1.5 px-2 text-xs text-emerald-300 hover:text-white flex justify-between items-center block whitespace-nowrap"
                        >
                          <span>{sub.title}</span>
                          {sub.hasNested && <ChevronDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                        </Link>
                        {sub.nestedItems && (
                          <div className="pl-3 space-y-1 my-1">
                            {sub.nestedItems.map((n) => (
                              <Link
                                key={n.id}
                                href={resolveRoute(n.id)}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full text-left py-1 px-2 text-[11px] text-emerald-400/80 hover:text-emerald-200 whitespace-nowrap"
                              >
                                • {n.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-sm shadow-lg whitespace-nowrap"
              >
                <Heart className="w-4 h-4 fill-emerald-950 shrink-0" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
