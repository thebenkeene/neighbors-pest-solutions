'use client';

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'nps_spider_drop_v1';

type Phase = 'hidden' | 'dropping' | 'hanging' | 'leaving' | 'falling';

/**
 * Homepage showpiece: a spider rappels down from a corner web on a silk
 * thread, bounces to a stop, hangs and sways — then climbs back up.
 * Click it while it hangs and the thread snaps: it plummets off screen.
 *
 * Once per session, transform/height-only animation on a fixed overlay,
 * skipped under prefers-reduced-motion.
 */
export default function DroppingSpider() {
  const [phase, setPhase] = useState<Phase>('hidden');
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    sessionStorage.setItem(STORAGE_KEY, '1');

    const t1 = window.setTimeout(() => setPhase('dropping'), 1200);
    const t2 = window.setTimeout(() => setPhase('hanging'), 1200 + 1800);
    const t3 = window.setTimeout(() => setPhase('leaving'), 1200 + 1800 + 6000);
    const t4 = window.setTimeout(() => setPhase('hidden'), 1200 + 1800 + 6000 + 1600);
    timersRef.current = [t1, t2, t3, t4];
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  if (phase === 'hidden') return null;

  const snap = () => {
    if (phase !== 'dropping' && phase !== 'hanging') return;
    timersRef.current.forEach(clearTimeout);
    setPhase('falling');
    window.setTimeout(() => setPhase('hidden'), 1300);
  };

  return (
    <div aria-hidden="true" className={`web-drop web-drop--${phase}`}>
      {/* Corner web anchor */}
      <svg className="web-anchor" width="52" height="30" viewBox="0 0 52 30" fill="none">
        <g stroke="#111827" strokeWidth="0.7" opacity="0.35" strokeLinecap="round">
          <path d="M26 0 L4 28" />
          <path d="M26 0 L16 30" />
          <path d="M26 0 L26 30" />
          <path d="M26 0 L36 30" />
          <path d="M26 0 L48 28" />
          <path d="M10 12 Q26 20 42 12" />
          <path d="M16 6 Q26 11 36 6" />
          <path d="M6 22 Q26 32 46 22" />
        </g>
      </svg>

      {/* Silk thread — grows on drop, shrinks on climb */}
      <div className="web-thread" />

      {/* The spider */}
      <div className="web-spider" onClick={snap} title="Squash me!">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="bug-body">
          <g className="bug-legs-a" stroke="#111827" strokeWidth="1.05" strokeLinecap="round" fill="none">
            <path d="M10.6 9.5 C7.5 8 6 6.5 5 4" />
            <path d="M10.4 11.5 C7 11 5 11 3.2 12.2" />
            <path d="M13.6 10.5 C17 9.5 18.5 8 19.6 5.8" />
            <path d="M13.6 13.5 C17 14 19 15 20.4 17" />
          </g>
          <g className="bug-legs-b" stroke="#111827" strokeWidth="1.05" strokeLinecap="round" fill="none">
            <path d="M13.4 9.5 C16.5 8 18 6.5 19 4" />
            <path d="M13.6 11.5 C17 11 19 11 20.8 12.2" />
            <path d="M10.4 10.5 C7 9.5 5.5 8 4.4 5.8" />
            <path d="M10.4 13.5 C7 14 5 15 3.6 17" />
          </g>
          <g fill="#111827">
            <ellipse cx="12" cy="9" rx="2" ry="1.7" />
            <ellipse cx="12" cy="14.2" rx="3" ry="4" />
          </g>
          <circle cx="11.2" cy="8.4" r="0.35" fill="#f9fafb" />
          <circle cx="12.8" cy="8.4" r="0.35" fill="#f9fafb" />
        </svg>
      </div>
    </div>
  );
}
