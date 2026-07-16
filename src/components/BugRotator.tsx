'use client';

import { useEffect, useState } from 'react';

/**
 * Hero showpiece: an ever-rotating cast of line-art bugs. Each one
 * scuttles in from the left, poses center stage under "We eliminate
 * ___", then scuttles off right as the next enters.
 *
 * Purely decorative (aria-hidden; every pest is also a crawlable link
 * in the hero pills, so no content depends on this). No layout shift:
 * the block reserves fixed height, and on desktop it's absolutely
 * positioned in the hero's open right half. Reduced-motion visitors
 * get a static bug and label.
 */

interface Cast {
  name: string;
  Svg: (p: { className?: string }) => React.ReactElement;
}

function SpiderSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g className="bug-legs-a" stroke="#f9fafb" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M10.6 9.5 C7.5 8 6 6.5 5 4" />
        <path d="M10.4 11.5 C7 11 5 11 3.2 12.2" />
        <path d="M13.6 10.5 C17 9.5 18.5 8 19.6 5.8" />
        <path d="M13.6 13.5 C17 14 19 15 20.4 17" />
      </g>
      <g className="bug-legs-b" stroke="#f9fafb" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M13.4 9.5 C16.5 8 18 6.5 19 4" />
        <path d="M13.6 11.5 C17 11 19 11 20.8 12.2" />
        <path d="M10.4 10.5 C7 9.5 5.5 8 4.4 5.8" />
        <path d="M10.4 13.5 C7 14 5 15 3.6 17" />
      </g>
      <g fill="#f9fafb">
        <ellipse cx="12" cy="9" rx="2" ry="1.7" />
        <ellipse cx="12" cy="14.2" rx="3" ry="4" />
      </g>
      <circle cx="11.2" cy="8.4" r="0.35" fill="#111827" />
      <circle cx="12.8" cy="8.4" r="0.35" fill="#111827" />
    </svg>
  );
}

function AntSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g className="bug-legs-a" stroke="#f9fafb" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M9.5 8.5 L4.5 6.5" />
        <path d="M14.5 12 L20 12" />
        <path d="M9.5 15.5 L4.5 18" />
      </g>
      <g className="bug-legs-b" stroke="#f9fafb" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M14.5 8.5 L19.5 6.5" />
        <path d="M9.5 12 L4 12" />
        <path d="M14.5 15.5 L19.5 18" />
      </g>
      <g stroke="#f9fafb" strokeWidth="1" strokeLinecap="round">
        <path d="M10.8 4.5 L9 2" />
        <path d="M13.2 4.5 L15 2" />
      </g>
      <g fill="#f9fafb">
        <ellipse cx="12" cy="5.2" rx="2.1" ry="1.8" />
        <ellipse cx="12" cy="9.6" rx="1.8" ry="2.3" />
        <ellipse cx="12" cy="15.8" rx="2.5" ry="3.5" />
      </g>
    </svg>
  );
}

function RoachSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g className="bug-legs-a" stroke="#f9fafb" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M9.8 9 L5.5 6" />
        <path d="M14.5 12.5 L19.5 14" />
        <path d="M10 15.5 L6 19" />
      </g>
      <g className="bug-legs-b" stroke="#f9fafb" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M14.2 9 L18.5 6" />
        <path d="M9.5 12.5 L4.5 14" />
        <path d="M14 15.5 L18 19" />
      </g>
      <g stroke="#f9fafb" strokeWidth="0.9" strokeLinecap="round" fill="none">
        <path d="M10.8 4.2 C9 2.5 7.5 1.8 5.5 1.5" />
        <path d="M13.2 4.2 C15 2.5 16.5 1.8 18.5 1.5" />
      </g>
      <g fill="#f9fafb">
        <ellipse cx="12" cy="5.6" rx="2" ry="1.6" />
        <ellipse cx="12" cy="13" rx="3.2" ry="6.2" />
      </g>
      <path d="M12 8.5 L12 18.5" stroke="#111827" strokeWidth="0.6" />
    </svg>
  );
}

function BedBugSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g className="bug-legs-a" stroke="#f9fafb" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M9.5 9.5 L5.5 8" />
        <path d="M14.5 13 L18.5 14" />
        <path d="M10 16 L6.5 18.5" />
      </g>
      <g className="bug-legs-b" stroke="#f9fafb" strokeWidth="1.05" strokeLinecap="round" fill="none">
        <path d="M14.5 9.5 L18.5 8" />
        <path d="M9.5 13 L5.5 14" />
        <path d="M14 16 L17.5 18.5" />
      </g>
      <g stroke="#f9fafb" strokeWidth="0.9" strokeLinecap="round">
        <path d="M11 5 L10 3.2" />
        <path d="M13 5 L14 3.2" />
      </g>
      <g fill="#f9fafb">
        <ellipse cx="12" cy="6.2" rx="1.7" ry="1.4" />
        <ellipse cx="12" cy="13.5" rx="4.6" ry="5.8" />
      </g>
      {/* abdomen segment lines */}
      <g stroke="#111827" strokeWidth="0.5">
        <path d="M8 11.5 L16 11.5" />
        <path d="M7.8 14 L16.2 14" />
        <path d="M8.4 16.5 L15.6 16.5" />
      </g>
    </svg>
  );
}

function MosquitoSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* dangly legs */}
      <g className="bug-legs-a" stroke="#f9fafb" strokeWidth="0.9" strokeLinecap="round" fill="none">
        <path d="M10.5 10 C7 10.5 5.5 12 4 15" />
        <path d="M13.5 10 C17 10.5 18.5 12 20 15" />
        <path d="M11 12 C8.5 13.5 7.5 15.5 7 18" />
      </g>
      <g className="bug-legs-b" stroke="#f9fafb" strokeWidth="0.9" strokeLinecap="round" fill="none">
        <path d="M13 12 C15.5 13.5 16.5 15.5 17 18" />
        <path d="M11.5 13 C10 15.5 9.5 17.5 9.5 20" />
        <path d="M12.5 13 C14 15.5 14.5 17.5 14.5 20" />
      </g>
      {/* wings */}
      <g fill="#f9fafb" opacity="0.4">
        <ellipse cx="8.5" cy="7.5" rx="4.2" ry="1.8" transform="rotate(-25 8.5 7.5)" />
        <ellipse cx="15.5" cy="7.5" rx="4.2" ry="1.8" transform="rotate(25 15.5 7.5)" />
      </g>
      {/* proboscis */}
      <path d="M12 4.5 L12 1.5" stroke="#f9fafb" strokeWidth="0.8" strokeLinecap="round" />
      <g fill="#f9fafb">
        <circle cx="12" cy="5.5" r="1.2" />
        <ellipse cx="12" cy="8.5" rx="1.4" ry="1.8" />
        <ellipse cx="12" cy="13" rx="1.2" ry="4" />
      </g>
    </svg>
  );
}

function MouseSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* tail */}
      <path d="M12 20 C12 22.5 9 23 7 22" stroke="#f9fafb" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* whiskers */}
      <g stroke="#f9fafb" strokeWidth="0.6" strokeLinecap="round" opacity="0.8">
        <path d="M10.5 5.5 L7 4.5" />
        <path d="M10.5 6.5 L7 6.8" />
        <path d="M13.5 5.5 L17 4.5" />
        <path d="M13.5 6.5 L17 6.8" />
      </g>
      {/* ears */}
      <g fill="#f9fafb">
        <circle cx="9.5" cy="3.8" r="1.8" />
        <circle cx="14.5" cy="3.8" r="1.8" />
      </g>
      <g fill="#111827">
        <circle cx="9.5" cy="3.9" r="0.9" />
        <circle cx="14.5" cy="3.9" r="0.9" />
      </g>
      {/* head + body */}
      <g fill="#f9fafb">
        <ellipse cx="12" cy="6.5" rx="2.6" ry="2.4" />
        <ellipse cx="12" cy="14" rx="4" ry="6.2" />
      </g>
      {/* eyes + nose */}
      <circle cx="11" cy="5.8" r="0.4" fill="#111827" />
      <circle cx="13" cy="5.8" r="0.4" fill="#111827" />
      <circle cx="12" cy="4.6" r="0.45" fill="#111827" />
    </svg>
  );
}

const CAST: Cast[] = [
  { name: 'Ants', Svg: AntSvg },
  { name: 'Spiders', Svg: SpiderSvg },
  { name: 'Cockroaches', Svg: RoachSvg },
  { name: 'Bed Bugs', Svg: BedBugSvg },
  { name: 'Mosquitoes', Svg: MosquitoSvg },
  { name: 'Rodents', Svg: MouseSvg },
];

export default function BugRotator() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const { name, Svg } = CAST[index];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none flex flex-col items-center justify-center mb-6 lg:mb-0 lg:absolute lg:right-2 xl:right-14 lg:top-1/2 lg:-translate-y-1/2 lg:w-[400px]"
    >
      {/* Stage — fixed height so nothing shifts */}
      <div className="relative h-24 w-56 lg:h-44 lg:w-80 overflow-hidden">
        {reduced ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <SpiderSvg className="w-16 lg:w-32 h-auto rotate-90 opacity-95" />
          </div>
        ) : (
          <div
            key={index}
            className="bug-stage-cycle absolute inset-0 flex items-center justify-center"
            onAnimationEnd={(e) => {
              if (e.animationName === 'bug-walk-across') {
                setIndex((i) => (i + 1) % CAST.length);
              }
            }}
          >
            <Svg className="w-16 lg:w-32 h-auto rotate-90 opacity-95 drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Label — fixed heights, no shift */}
      <div className="text-center">
        <p className="text-gray-300 uppercase tracking-widest text-xs lg:text-sm font-semibold h-4 lg:h-5">
          We eliminate
        </p>
        {reduced ? (
          <p className="text-2xl lg:text-4xl font-bold text-primary-400 h-8 lg:h-12">Pests</p>
        ) : (
          <p key={index} className="bug-name-cycle text-2xl lg:text-4xl font-bold text-primary-400 h-8 lg:h-12 drop-shadow-md">
            {name}
          </p>
        )}
      </div>
    </div>
  );
}
