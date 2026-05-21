"use client";

import { useRef, useEffect } from "react";

export function ClassroomIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const paths = svg.querySelectorAll<SVGElement>(".c-draw");
        paths.forEach((el, i) => {
          if (prefersReducedMotion) {
            el.style.strokeDashoffset = "0";
          } else {
            el.style.animation = "drawLine 1.8s ease forwards";
            el.style.animationDelay = `${0.1 + i * 0.03}s`;
          }
        });
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="A participatory learning space with a facilitator and seated participants"
      role="img"
      className="w-full max-w-[500px]"
    >
      <style>{`
        .c-draw { stroke-dasharray: 800; stroke-dashoffset: 800; }
      `}</style>

      {/* Room */}
      <path d="M60,340 L60,120 L440,120 L440,340" stroke="#E0DDD8" fill="none" strokeWidth="1.2" className="c-draw" />
      <path d="M40,340 L460,340" stroke="#E0DDD8" fill="none" strokeWidth="1.2" className="c-draw" />
      <path d="M60,120 L250,80 L440,120" stroke="#E0DDD8" fill="#FAFAF8" strokeWidth="1" className="c-draw" />

      {/* Whiteboard */}
      <rect x="120" y="140" width="260" height="120" rx="4" stroke="#1A1A1A" fill="white" strokeWidth="1.3" className="c-draw" />
      <circle cx="200" cy="195" r="12" stroke="#F26522" fill="#FFF0E8" strokeWidth="1.3" className="c-draw" />
      <circle cx="250" cy="170" r="10" stroke="#F26522" fill="#FFF0E8" strokeWidth="1.3" className="c-draw" />
      <circle cx="300" cy="195" r="12" stroke="#F26522" fill="#FFF0E8" strokeWidth="1.3" className="c-draw" />
      <circle cx="250" cy="218" r="10" stroke="#F26522" fill="#FFF0E8" strokeWidth="1.3" className="c-draw" />
      <line x1="200" y1="195" x2="250" y2="170" stroke="#F26522" strokeWidth="1" className="c-draw" />
      <line x1="250" y1="170" x2="300" y2="195" stroke="#F26522" strokeWidth="1" className="c-draw" />
      <line x1="300" y1="195" x2="250" y2="218" stroke="#F26522" strokeWidth="1" className="c-draw" />
      <line x1="250" y1="218" x2="200" y2="195" stroke="#F26522" strokeWidth="1" className="c-draw" />
      <line x1="200" y1="195" x2="300" y2="195" stroke="#F26522" strokeWidth="1" strokeDasharray="3 3" className="c-draw" />
      <line x1="250" y1="170" x2="250" y2="218" stroke="#F26522" strokeWidth="1" strokeDasharray="3 3" className="c-draw" />

      {/* Facilitator */}
      <circle cx="100" cy="245" r="14" stroke="#1A1A1A" fill="none" strokeWidth="1.3" className="c-draw" />
      <path d="M93,259 Q88,282 86,300 L114,300 Q112,282 107,259" stroke="#1A1A1A" fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="c-draw" />
      <path d="M93,268 Q110,260 118,252" stroke="#1A1A1A" fill="none" strokeWidth="1.3" strokeLinecap="round" className="c-draw" />
      <path d="M118,252 L122,248" stroke="#1A1A1A" fill="none" strokeWidth="1" strokeLinecap="round" className="c-draw" />

      {/* Seated participants */}
      <circle cx="200" cy="305" r="11" stroke="#1A1A1A" fill="none" strokeWidth="1.2" className="c-draw" />
      <path d="M193,316 Q190,330 190,340 L210,340 Q210,330 207,316" stroke="#1A1A1A" fill="none" strokeWidth="1.2" strokeLinecap="round" className="c-draw" />

      <circle cx="250" cy="310" r="11" stroke="#1A1A1A" fill="none" strokeWidth="1.2" className="c-draw" />
      <path d="M243,321 Q240,335 240,340 L260,340 Q260,335 257,321" stroke="#1A1A1A" fill="none" strokeWidth="1.2" strokeLinecap="round" className="c-draw" />

      <circle cx="300" cy="305" r="11" stroke="#1A1A1A" fill="none" strokeWidth="1.2" className="c-draw" />
      <path d="M293,316 Q290,330 290,340 L310,340 Q310,330 307,316" stroke="#1A1A1A" fill="none" strokeWidth="1.2" strokeLinecap="round" className="c-draw" />

      <circle cx="370" cy="298" r="11" stroke="#1A1A1A" fill="none" strokeWidth="1.2" className="c-draw" />
      <path d="M363,309 Q360,325 360,340 L380,340 Q380,325 377,309" stroke="#1A1A1A" fill="none" strokeWidth="1.2" strokeLinecap="round" className="c-draw" />

      {/* Speech bubbles */}
      <path d="M200,294 Q198,285 208,282 Q218,280 220,288 Q222,296 212,298 L206,298 L200,294 Z" stroke="#C5C0B8" fill="white" strokeWidth="1" className="c-draw" />
      <path d="M300,294 Q298,285 308,282 Q318,280 320,288 Q322,296 312,298 L306,298 L300,294 Z" stroke="#C5C0B8" fill="white" strokeWidth="1" className="c-draw" />

      {/* Corner plant */}
      <path d="M430,340 Q430,320 432,305" stroke="#C5C0B8" fill="none" strokeWidth="1.1" strokeLinecap="round" className="c-draw" />
      <path d="M432,318 Q442,308 448,298 Q438,296 430,305 Q428,310 432,318 Z" stroke="#C5C0B8" fill="#F5F2EE" strokeWidth="1" className="c-draw" />
      <path d="M432,310 Q422,300 415,292 Q424,290 432,298 Q434,303 432,310 Z" stroke="#C5C0B8" fill="#F5F2EE" strokeWidth="1" className="c-draw" />
      <ellipse cx="432" cy="342" rx="10" ry="4" fill="#E0DDD8" />
    </svg>
  );
}
