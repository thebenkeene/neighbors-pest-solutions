'use client';

import { useEffect, useState } from 'react';

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
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

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
