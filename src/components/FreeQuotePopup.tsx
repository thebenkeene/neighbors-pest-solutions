'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { BUSINESS } from '@/lib/constants';

const PEST_OPTIONS = [
  'Ants', 'Bed Bugs', 'Spiders', 'Rodents', 'Cockroaches',
  'Mosquitoes', 'Fleas & Ticks', 'Stinging Pests', 'Other',
];

const STORAGE_KEY = 'nps_quote_popup_dismissed';
const POPUP_DELAY_MS = 4000;
const EXCLUDED_PATHS = ['/contact', '/privacy-policy', '/terms-of-service'];

export default function FreeQuotePopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    pestType: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState('');
  const [loadedAt] = useState(() => Date.now());
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isExcluded = EXCLUDED_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (isExcluded) return;
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isExcluded]);

  const dismiss = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      sessionStorage.setItem(STORAGE_KEY, '1');
    }, 280);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible, dismiss]);

  useEffect(() => {
    if (!visible || closing) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [visible, closing]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.firstName.trim()) next.firstName = 'Required';
    if (!formData.phone.trim()) next.phone = 'Required';
    else if (!/[\d]{7,}/.test(formData.phone.replace(/\D/g, ''))) next.phone = 'Enter a valid number';
    if (!formData.pestType) next.pestType = 'Select a pest';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: '',
          email: '',
          phone: formData.phone,
          serviceType: 'Residential',
          pestType: formData.pestType,
          address: '',
          message: '50% off first service — popup quote request.',
          _hp: honeypot,
          _t: loadedAt,
        }),
      });
      if (res.ok) {
        setStatus('success');
        sessionStorage.setItem(STORAGE_KEY, '1');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!visible || isExcluded) return null;

  const animClass = closing ? 'popup-exit' : 'popup-enter';

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[9998] flex items-center justify-center p-4 ${animClass}`}
      onMouseDown={(e) => { if (e.target === overlayRef.current || (e.target as HTMLElement).closest('.popup-overlay')) dismiss(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Get a free pest control quote"
    >
      <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm popup-overlay" />

      <div
        ref={panelRef}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden popup-panel"
      >
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-800" />

        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-6 pt-6 pb-7 sm:px-8 sm:pt-7 sm:pb-8">
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-2">We&apos;ll Be in Touch!</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Thanks, {formData.firstName}! A team member will reach out shortly with your free quote and <strong className="text-primary-600">50% off</strong> your first service.
              </p>
              <p className="text-sm text-gray-500">
                Need help now? Call{' '}
                <a href={BUSINESS.phoneHref} className="text-primary-600 font-semibold hover:underline">
                  {BUSINESS.phone}
                </a>
              </p>
              <button
                onClick={dismiss}
                className="mt-5 px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-dark-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide border border-amber-200">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Limited Time Offer
                </div>
                <h2 className="text-2xl sm:text-[1.7rem] font-bold text-dark-800 leading-tight">
                  Get <span className="text-primary-600">50% Off</span> Your First Service
                </h2>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  New customers save big — claim your free quote and lock in half-price pest control today.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                  <label htmlFor="popup-website">Website</label>
                  <input
                    id="popup-website"
                    name="website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-2.5 text-sm">
                    Something went wrong. Please try again or call{' '}
                    <a href={BUSINESS.phoneHref} className="font-bold underline">{BUSINESS.phone}</a>.
                  </div>
                )}

                <div>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    aria-label="First name"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-dark-800 bg-white outline-none transition-colors focus:ring-2 focus:ring-primary-400 focus:border-transparent ${
                      errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    aria-label="Phone number"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-dark-800 bg-white outline-none transition-colors focus:ring-2 focus:ring-primary-400 focus:border-transparent ${
                      errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <select
                    name="pestType"
                    value={formData.pestType}
                    onChange={handleChange}
                    aria-label="Type of pest"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-dark-800 bg-white outline-none transition-colors focus:ring-2 focus:ring-primary-400 focus:border-transparent ${
                      errors.pestType ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    } ${!formData.pestType ? 'text-gray-400' : ''}`}
                  >
                    <option value="" disabled>What pest are you dealing with?</option>
                    {PEST_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.pestType && <p className="mt-1 text-xs text-red-600">{errors.pestType}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-[0.95rem] mt-1"
                >
                  {status === 'loading' ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Get My Free Quote →'
                  )}
                </button>
              </form>

              {/* Trust signals */}
              <div className="mt-5 flex items-center justify-center gap-4 text-xs text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Same-Day Service
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {BUSINESS.homesTreated} Homes
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
