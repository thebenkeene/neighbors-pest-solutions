'use client';

import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'nps_bugs_v3';

type Species = 'spider' | 'ant' | 'roach' | 'beetle';

interface BugCfg {
  id: number;
  species: Species;
  delay: number; // ms after activation before this bug enters
  size: number;
  speed: number;
  burstMin: number;
  burstVar: number;
  pauseMin: number;
  pauseVar: number;
  turn: number; // heading change magnitude between bursts
  lifetime: number;
}

// The cast, staggered so the page sees a parade rather than a swarm-bomb
const SCHEDULE: BugCfg[] = [
  { id: 0, species: 'spider', delay: 2000, size: 34, speed: 120, burstMin: 400, burstVar: 900, pauseMin: 250, pauseVar: 650, turn: 1.1, lifetime: 15000 },
  { id: 1, species: 'ant', delay: 6500, size: 24, speed: 155, burstMin: 500, burstVar: 700, pauseMin: 120, pauseVar: 300, turn: 1.4, lifetime: 13000 },
  { id: 2, species: 'roach', delay: 11500, size: 30, speed: 230, burstMin: 550, burstVar: 900, pauseMin: 450, pauseVar: 900, turn: 0.8, lifetime: 12000 },
  { id: 3, species: 'ant', delay: 16000, size: 21, speed: 165, burstMin: 450, burstVar: 650, pauseMin: 120, pauseVar: 300, turn: 1.5, lifetime: 13000 },
  { id: 4, species: 'beetle', delay: 21000, size: 27, speed: 70, burstMin: 900, burstVar: 1200, pauseMin: 200, pauseVar: 400, turn: 0.5, lifetime: 17000 },
];

interface BugState {
  x: number;
  y: number;
  heading: number;
  moving: boolean;
  phaseEndsAt: number;
  bornAt: number;
  started: boolean;
  squashed: boolean;
  done: boolean;
}

function SpiderSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="bug-body">
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
  );
}

function AntSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="bug-body">
      <g className="bug-legs-a" stroke="#1f2937" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M9.5 8.5 L4.5 6.5" />
        <path d="M14.5 12 L20 12" />
        <path d="M9.5 15.5 L4.5 18" />
      </g>
      <g className="bug-legs-b" stroke="#1f2937" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M14.5 8.5 L19.5 6.5" />
        <path d="M9.5 12 L4 12" />
        <path d="M14.5 15.5 L19.5 18" />
      </g>
      <g stroke="#1f2937" strokeWidth="1" strokeLinecap="round">
        <path d="M10.8 4.5 L9 2" />
        <path d="M13.2 4.5 L15 2" />
      </g>
      <g fill="#1f2937">
        <ellipse cx="12" cy="5.2" rx="2.1" ry="1.8" />
        <ellipse cx="12" cy="9.6" rx="1.8" ry="2.3" />
        <ellipse cx="12" cy="15.8" rx="2.5" ry="3.5" />
      </g>
    </svg>
  );
}

function RoachSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="bug-body">
      <g className="bug-legs-a" stroke="#3f2d20" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M9.8 9 L5.5 6" />
        <path d="M14.5 12.5 L19.5 14" />
        <path d="M10 15.5 L6 19" />
      </g>
      <g className="bug-legs-b" stroke="#3f2d20" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M14.2 9 L18.5 6" />
        <path d="M9.5 12.5 L4.5 14" />
        <path d="M14 15.5 L18 19" />
      </g>
      {/* long antennae */}
      <g stroke="#3f2d20" strokeWidth="0.9" strokeLinecap="round" fill="none">
        <path d="M10.8 4.2 C9 2.5 7.5 1.8 5.5 1.5" />
        <path d="M13.2 4.2 C15 2.5 16.5 1.8 18.5 1.5" />
      </g>
      <g fill="#4a3524">
        <ellipse cx="12" cy="5.6" rx="2" ry="1.6" />
        <ellipse cx="12" cy="13" rx="3.2" ry="6.2" />
      </g>
      {/* wing line */}
      <path d="M12 8.5 L12 18.5" stroke="#2d1f14" strokeWidth="0.6" />
    </svg>
  );
}

function BeetleSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="bug-body">
      <g className="bug-legs-a" stroke="#111827" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M9.5 9.5 L6 8" />
        <path d="M14.5 12.5 L18.5 13" />
        <path d="M10 15.5 L7 18" />
      </g>
      <g className="bug-legs-b" stroke="#111827" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M14.5 9.5 L18 8" />
        <path d="M9.5 12.5 L5.5 13" />
        <path d="M14 15.5 L17 18" />
      </g>
      <g fill="#111827">
        <ellipse cx="12" cy="6.5" rx="1.8" ry="1.5" />
        <ellipse cx="12" cy="13.5" rx="4.2" ry="5.5" />
      </g>
      {/* elytra split */}
      <path d="M12 8.5 L12 18.5" stroke="#374151" strokeWidth="0.7" />
      <circle cx="10.4" cy="11.5" r="0.5" fill="#374151" />
      <circle cx="13.6" cy="11.5" r="0.5" fill="#374151" />
      <circle cx="10.8" cy="15" r="0.5" fill="#374151" />
      <circle cx="13.2" cy="15" r="0.5" fill="#374151" />
    </svg>
  );
}

const SVGS: Record<Species, (p: { size: number }) => React.ReactElement> = {
  spider: SpiderSvg,
  ant: AntSvg,
  roach: RoachSvg,
  beetle: BeetleSvg,
};

/**
 * A staggered parade of different bugs that wander across the page once
 * per session, each species with its own gait and personality. Click
 * any of them to squash it.
 *
 * Performance-safe: one shared rAF loop writing transforms to refs (no
 * per-frame React renders), fixed-position (no layout shift), skipped
 * under prefers-reduced-motion.
 */
export default function CrawlingBug() {
  const [active, setActive] = useState(false);
  const elsRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const statesRef = useRef<Map<number, BugState>>(new Map());
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    sessionStorage.setItem(STORAGE_KEY, '1');
    const timer = window.setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!active) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const activatedAt = performance.now();
    let last = activatedAt;

    for (const cfg of SCHEDULE) {
      statesRef.current.set(cfg.id, {
        x: -cfg.size - 16,
        y: vh * (0.15 + Math.random() * 0.65),
        heading: (Math.random() - 0.5) * 0.6,
        moving: true,
        phaseEndsAt: 0,
        bornAt: 0,
        started: false,
        squashed: false,
        done: false,
      });
    }

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      let anyPending = false;

      for (const cfg of SCHEDULE) {
        const b = statesRef.current.get(cfg.id)!;
        const el = elsRef.current.get(cfg.id);
        if (b.done || b.squashed || !el) {
          if (!b.done && !b.squashed) anyPending = true;
          continue;
        }

        if (!b.started) {
          if (now - activatedAt >= cfg.delay) {
            b.started = true;
            b.bornAt = now;
            el.style.display = 'block';
          }
          anyPending = true;
          continue;
        }

        const age = now - b.bornAt;
        const exiting = age > cfg.lifetime || b.x > vw * 0.72;

        if (now > b.phaseEndsAt) {
          if (exiting) {
            b.moving = true;
            b.phaseEndsAt = now + 99999;
          } else {
            b.moving = !b.moving;
            b.phaseEndsAt =
              now +
              (b.moving
                ? cfg.burstMin + Math.random() * cfg.burstVar
                : cfg.pauseMin + Math.random() * cfg.pauseVar);
            if (b.moving) b.heading += (Math.random() - 0.5) * cfg.turn;
          }
        }

        if (b.moving) {
          if (exiting) b.heading += (0 - b.heading) * 0.08;
          b.heading += (Math.random() - 0.5) * 0.12;
          if (b.y < vh * 0.12) b.heading += 0.1;
          if (b.y > vh * 0.88) b.heading -= 0.1;
          if (b.x < 10 && Math.cos(b.heading) < 0) b.heading = (Math.random() - 0.5) * 0.4;

          const speed = exiting ? cfg.speed * 1.5 : cfg.speed;
          b.x += Math.cos(b.heading) * speed * dt;
          b.y += Math.sin(b.heading) * speed * dt;
        }

        el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.heading + Math.PI / 2}rad)`;
        const svg = el.querySelector('svg');
        if (svg) svg.style.animationPlayState = b.moving ? 'running' : 'paused';

        if (b.x > vw + cfg.size + 20) {
          b.done = true;
          el.style.display = 'none';
        } else {
          anyPending = true;
        }
      }

      if (anyPending) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setActive(false);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  if (!active) return null;

  return (
    <>
      {SCHEDULE.map((cfg) => {
        const Svg = SVGS[cfg.species];
        return (
          <div
            key={cfg.id}
            ref={(el) => {
              if (el) elsRef.current.set(cfg.id, el);
            }}
            aria-hidden="true"
            title="Squash me!"
            className="bug-crawler select-none"
            style={{ display: 'none' }}
            onClick={(e) => {
              const b = statesRef.current.get(cfg.id);
              if (!b || b.squashed) return;
              b.squashed = true;
              e.currentTarget.classList.add('bug-squashed');
            }}
            onAnimationEnd={(e) => {
              if (e.animationName === 'bug-squash') {
                const b = statesRef.current.get(cfg.id);
                if (b) b.done = true;
                e.currentTarget.style.display = 'none';
              }
            }}
          >
            <Svg size={cfg.size} />
          </div>
        );
      })}
    </>
  );
}
