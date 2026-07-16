'use client';

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'nps_bug_crawled_v2';
const MAX_LIFETIME_MS = 18000;

/**
 * A spider that wanders across the page once per session — scuttles in
 * bursts, pauses, changes heading like a real insect, and exits stage
 * right. Click to squash. "Your Neighborhood Bug Guys" Easter egg.
 *
 * Performance-safe: transform-only updates driven by rAF on a ref (no
 * React re-renders per frame), no layout shift, skipped entirely under
 * prefers-reduced-motion.
 */
export default function CrawlingBug() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const squashedRef = useRef(false);
  const [state, setState] = useState<'hidden' | 'active' | 'squashed'>('hidden');

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setTimeout(() => setState('active'), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (state !== 'active') return;
    const el = wrapRef.current;
    if (!el) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Spawn just off the left edge at a random height
    let x = -44;
    let y = vh * (0.3 + Math.random() * 0.45);
    let heading = (Math.random() - 0.5) * 0.6; // roughly rightward
    let moving = true;
    let phaseEndsAt = 0;
    let last = performance.now();
    const bornAt = last;

    const legs = el.querySelector('svg');

    const tick = (now: number) => {
      if (squashedRef.current) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const age = now - bornAt;
      const exiting = age > MAX_LIFETIME_MS || x > vw * 0.72;

      // Burst/pause behavior
      if (now > phaseEndsAt) {
        if (exiting) {
          moving = true;
          phaseEndsAt = now + 9999;
        } else {
          moving = !moving;
          phaseEndsAt = now + (moving ? 400 + Math.random() * 900 : 250 + Math.random() * 650);
          if (moving) heading += (Math.random() - 0.5) * 1.1; // pick a new direction
        }
      }

      if (moving) {
        // Steer toward the right edge when it's time to leave
        if (exiting) heading += (0 - heading) * 0.08;
        // Gentle continuous wander
        heading += (Math.random() - 0.5) * 0.12;
        // Keep it on screen vertically
        if (y < vh * 0.15) heading += 0.1;
        if (y > vh * 0.85) heading -= 0.1;
        // Never wander back off the left edge mid-run
        if (x < 10 && Math.cos(heading) < 0) heading = (Math.random() - 0.5) * 0.4;

        const speed = exiting ? 190 : 120;
        x += Math.cos(heading) * speed * dt;
        y += Math.sin(heading) * speed * dt;
      }

      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${heading + Math.PI / 2}rad)`;
      if (legs) legs.style.animationPlayState = moving ? 'running' : 'paused';

      if (x > vw + 48) {
        sessionStorage.setItem(STORAGE_KEY, '1');
        setState('hidden');
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [state]);

  if (state === 'hidden') return null;

  const squash = () => {
    if (squashedRef.current) return;
    squashedRef.current = true;
    cancelAnimationFrame(rafRef.current);
    setState('squashed');
  };

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      title="Squash me!"
      className={`bug-crawler select-none ${state === 'squashed' ? 'bug-squashed' : ''}`}
      onClick={squash}
      onAnimationEnd={(e) => {
        if (e.animationName === 'bug-squash') {
          sessionStorage.setItem(STORAGE_KEY, '1');
          setState('hidden');
        }
      }}
    >
      {/* Spider, drawn head-up; wrapper rotation faces direction of travel */}
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="bug-body">
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
          {/* head + abdomen */}
          <ellipse cx="12" cy="9" rx="2" ry="1.7" />
          <ellipse cx="12" cy="14.2" rx="3" ry="4" />
        </g>
        {/* eye glints */}
        <circle cx="11.2" cy="8.4" r="0.35" fill="#f9fafb" />
        <circle cx="12.8" cy="8.4" r="0.35" fill="#f9fafb" />
      </svg>
    </div>
  );
}
