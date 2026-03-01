'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { BUSINESS, SERVICE_AREAS } from '@/lib/constants';

const navServices = [
  { name: 'Ant Control', href: '/services/ant-control' },
  { name: 'Bed Bug Control', href: '/services/bed-bug-control' },
  { name: 'Spider Control', href: '/services/spider-control' },
  { name: 'Rodent Control', href: '/services/rodent-control' },
  { name: 'Cockroach Control', href: '/services/cockroach-control' },
  { name: 'Mosquito Control', href: '/services/mosquito-control' },
  { name: 'Flea Control', href: '/services/flea-control' },
  { name: 'Tick Control', href: '/services/tick-control' },
  { name: 'Carpenter Ant Control', href: '/services/carpenter-ant-control' },
  { name: 'Stinging Pest Control', href: '/services/stinging-pest-control' },
  { name: 'Fly Control', href: '/services/fly-control' },
  { name: 'Earwig Control', href: '/services/earwig-control' },
  { name: 'Cricket Control', href: '/services/cricket-control' },
  { name: 'Silverfish Control', href: '/services/silverfish-control' },
  { name: 'Centipede & Millipede Control', href: '/services/centipede-millipede-control' },
  { name: 'Beetle Control', href: '/services/beetle-control' },
  { name: 'Moth Control', href: '/services/moth-control' },
  { name: 'Stink Bug Control', href: '/services/stink-bug-control' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const areasDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > 80) setAnnouncementVisible(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (areasDropdownRef.current && !areasDropdownRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isTransparent = mounted && !scrolled;

  return (
    <>
      {/* Announcement Bar */}
      <div
        className={`bg-primary-600 text-white text-center text-sm py-2 px-4 font-medium announcement-bar ${
          mounted && !announcementVisible ? 'hidden' : ''
        }`}
      >
        <span>Same-Day Service Available · </span>
        <a href={BUSINESS.phoneHref} className="underline font-bold hover:text-primary-100 transition-colors">
          Call {BUSINESS.phone}
        </a>
        <span> · {BUSINESS.hoursShort}</span>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isTransparent ? 'bg-transparent' : 'bg-white shadow-md'
        }`}
        ref={mobileMenuRef}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <img
                src={isTransparent ? '/images/logo-white.png' : '/images/logo-full.png'}
                alt={BUSINESS.name}
                className={`transition-all duration-300 w-auto ${isTransparent ? 'h-24' : 'h-20'}`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className={`font-medium transition-all duration-300 ${
                  isTransparent ? 'text-white hover:text-primary-200 drop-shadow-sm' : 'text-dark-700 hover:text-primary-600'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  className={`font-medium transition-all duration-300 flex items-center gap-1 py-2 ${
                    isTransparent ? 'text-white hover:text-primary-200 drop-shadow-sm' : 'text-dark-700 hover:text-primary-600'
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <svg className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Invisible bridge */}
                <div className="absolute top-full left-0 w-full h-2 bg-transparent" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} />
                {servicesOpen && (
                  <div
                    className="absolute left-0 top-full w-[480px] bg-white rounded-xl shadow-2xl py-3 z-50 border border-gray-100"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-0 px-2">
                      {navServices.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-3 py-2 text-dark-700 hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm rounded-lg"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-2 pt-2 px-2">
                      <Link
                        href="/services"
                        className="block px-3 py-2 text-primary-600 font-semibold hover:bg-primary-50 transition-colors text-sm rounded-lg"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Areas Dropdown */}
              <div className="relative" ref={areasDropdownRef}>
                <button
                  className={`font-medium transition-all duration-300 flex items-center gap-1 py-2 ${
                    isTransparent ? 'text-white hover:text-primary-200 drop-shadow-sm' : 'text-dark-700 hover:text-primary-600'
                  }`}
                  onMouseEnter={() => setAreasOpen(true)}
                  onMouseLeave={() => setAreasOpen(false)}
                  onClick={() => setAreasOpen(!areasOpen)}
                >
                  Areas
                  <svg className={`h-4 w-4 transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Invisible bridge */}
                <div className="absolute top-full left-0 w-full h-2 bg-transparent" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)} />
                {areasOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[520px] bg-white rounded-xl shadow-2xl py-4 z-50 border border-gray-100"
                    onMouseEnter={() => setAreasOpen(true)}
                    onMouseLeave={() => setAreasOpen(false)}
                  >
                    <div className="px-4">
                      <p className="text-xs font-bold text-dark-400 uppercase tracking-widest mb-2 px-1">San Diego Neighborhoods</p>
                      <div className="grid grid-cols-2 gap-x-2">
                        {[...SERVICE_AREAS.neighborhoods, ...SERVICE_AREAS.cities].map((a) => (
                          <Link
                            key={a.slug}
                            href={`/service-areas/${a.slug}`}
                            className="block px-2 py-1.5 text-sm text-dark-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors"
                            onClick={() => setAreasOpen(false)}
                          >
                            {a.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-gray-100 mt-3 pt-2 px-4">
                      <Link
                        href="/service-areas"
                        className="block px-2 py-2 text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-colors text-sm"
                        onClick={() => setAreasOpen(false)}
                      >
                        View All Service Areas →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className={`font-medium transition-all duration-300 ${
                  isTransparent ? 'text-white hover:text-primary-200 drop-shadow-sm' : 'text-dark-700 hover:text-primary-600'
                }`}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={`font-medium transition-all duration-300 ${
                  isTransparent ? 'text-white hover:text-primary-200 drop-shadow-sm' : 'text-dark-700 hover:text-primary-600'
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-all duration-300 ${
                  isTransparent ? 'text-white hover:text-primary-200 drop-shadow-sm' : 'text-dark-700 hover:text-primary-600'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isTransparent
                    ? 'bg-white/20 text-white hover:bg-white/30 border border-white/40 backdrop-blur-sm'
                    : 'bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-200'
                }`}
              >
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-primary-600 text-white hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isTransparent ? 'text-white' : 'text-dark-700'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 py-4 shadow-xl rounded-b-xl">
              <div className="flex flex-col space-y-1 px-2">
                <Link href="/" className="px-4 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <div className="px-4 py-2">
                  <p className="text-xs font-semibold text-dark-400 uppercase tracking-widest mb-2">Services</p>
                  <div className="grid grid-cols-2 gap-1">
                    {navServices.map((s) => (
                      <Link key={s.href} href={s.href} className="py-2 px-3 text-sm text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{s.name}</Link>
                    ))}
                  </div>
                  <Link href="/services" className="block mt-2 py-2 px-3 text-sm text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>View All Services →</Link>
                </div>
                {/* Mobile Areas Expandable */}
                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg font-medium transition-colors"
                    onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                  >
                    <span>Service Areas</span>
                    <svg className={`h-4 w-4 transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: mobileAreasOpen ? '600px' : '0px' }}
                  >
                    <div className="px-4 pb-2">
                      <p className="text-xs font-bold text-dark-400 uppercase tracking-widest mb-1 mt-1">San Diego Neighborhoods</p>
                      <div className="grid grid-cols-2 gap-1 mb-2">
                        {[...SERVICE_AREAS.neighborhoods, ...SERVICE_AREAS.cities].map((a) => (
                          <Link key={a.slug} href={`/service-areas/${a.slug}`} className="py-1.5 px-2 text-xs text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{a.name}</Link>
                        ))}
                      </div>
                      <Link href="/service-areas" className="block py-2 px-2 text-sm text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>View All Areas →</Link>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="px-4 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/blog" className="px-4 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <Link href="/contact" className="px-4 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <div className="flex gap-2 px-2 pt-2">
                  <a href={BUSINESS.phoneHref} className="flex-1 py-3 text-center font-semibold text-primary-700 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>{BUSINESS.phone}</a>
                  <Link href="/contact" className="flex-1 py-3 text-center font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>Free Quote</Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Sticky Mobile CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-white border-t border-gray-200 shadow-2xl">
        <a
          href={BUSINESS.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-dark-800 text-white font-bold text-sm hover:bg-dark-700 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Free Quote
        </Link>
      </div>
    </>
  );
}
