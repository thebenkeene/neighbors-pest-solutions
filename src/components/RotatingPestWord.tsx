'use client';

import { useState, useSyncExternalStore } from 'react';

const PESTS = [
  'Ants.',
  'Spiders.',
  'Cockroaches.',
  'Rodents.',
  'Bed Bugs.',
  'Mosquitoes.',
  'Fleas.',
  'Ticks.',
];

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Orkin-style rotating headline word: "The best in ___" where the pest
 * name ticker-slides up and out as the next slides in from below.
 *
 * SEO-neutral by design: the real H1 above this is untouched, this line
 * is aria-hidden decoration, and every pest named here is a crawlable
 * link in the hero pills. Fixed line height means zero layout shift.
 * Reduced-motion visitors get a static word.
 */
export default function RotatingPestWord() {
  const [index, setIndex] = useState(0);
  // useSyncExternalStore avoids setting state inside an effect and stays
  // in sync if the OS-level preference changes mid-session.
  const reduced = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    () => false // server snapshot: assume animation allowed
  );

  return (
    <span aria-hidden="true" className="block overflow-hidden leading-tight">
      {reduced ? (
        <span className="block text-primary-400">Pests.</span>
      ) : (
        <span
          key={index}
          className="pest-word-cycle block text-primary-400 will-change-transform"
          onAnimationEnd={(e) => {
            if (e.animationName === 'pest-word-cycle') {
              setIndex((i) => (i + 1) % PESTS.length);
            }
          }}
        >
          {PESTS[index]}
        </span>
      )}
    </span>
  );
}
