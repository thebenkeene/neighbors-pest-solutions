'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'nps_bug_crawled';

/**
 * A little ant that scuttles across the bottom of the page once per
 * session — "Your Neighborhood Bug Guys" Easter egg. Click to squash.
 *
 * Performance-safe: fixed-position, transform-only CSS animation (no
 * layout shift, GPU-composited), skipped entirely for visitors with
 * prefers-reduced-motion.
 */
export default function CrawlingBug() {
  const [state, setState] = useState<'hidden' | 'crawling' | 'squashed'>('hidden');

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setTimeout(() => setState('crawling'), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (state === 'hidden') return null;

  const finish = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setState('hidden');
  };

  return (
    <div
      aria-hidden="true"
      title="Squash me!"
      className={`bug-crawler select-none ${state === 'squashed' ? 'bug-squashed' : ''}`}
      onClick={() => state === 'crawling' && setState('squashed')}
      onAnimationEnd={(e) => {
        if (e.animationName === 'bug-crawl' || e.animationName === 'bug-squash') finish();
      }}
    >
      {/* Simple ant, drawn head-up, rotated to face direction of travel */}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <g stroke="#1f2937" strokeWidth="1.1" strokeLinecap="round">
          {/* legs */}
          <path d="M9 8.5 L4.5 6.5" />
          <path d="M9 12 L4 12" />
          <path d="M9 15.5 L4.5 18" />
          <path d="M15 8.5 L19.5 6.5" />
          <path d="M15 12 L20 12" />
          <path d="M15 15.5 L19.5 18" />
          {/* antennae */}
          <path d="M10.8 4.5 L9 2" />
          <path d="M13.2 4.5 L15 2" />
        </g>
        <g fill="#1f2937">
          {/* head, thorax, abdomen */}
          <ellipse cx="12" cy="5.2" rx="2.2" ry="1.9" />
          <ellipse cx="12" cy="9.8" rx="1.9" ry="2.4" />
          <ellipse cx="12" cy="16" rx="2.6" ry="3.6" />
        </g>
      </svg>
    </div>
  );
}
