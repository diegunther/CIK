"use client";

import { useRef, useEffect } from "react";

export function PlantIllustration() {
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
        const paths = svg.querySelectorAll<SVGElement>(".p-draw");
        paths.forEach((el, i) => {
          if (prefersReducedMotion) {
            (el as SVGElement).style.strokeDashoffset = "0";
          } else {
            el.style.animation = "drawLine 2s ease forwards";
            el.style.animationDelay = `${0.1 + i * 0.04}s`;
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
      viewBox="0 0 440 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="A growing plant with roots — representing knowledge growing from community"
      role="img"
      className="w-full max-w-[440px]"
    >
      <style>{`
        .p-draw { stroke-dasharray: 800; stroke-dashoffset: 800; }
      `}</style>

      <ellipse cx="220" cy="340" rx="100" ry="12" fill="#F5F2EE" />

      <path d="M220,340 Q218,310 215,285 Q210,255 218,225 Q222,200 220,170 Q218,145 224,120" stroke="#1A1A1A" fill="none" strokeWidth="1.6" strokeLinecap="round" className="p-draw" />
      <path d="M215,270 Q190,260 170,245 Q155,235 145,220" stroke="#1A1A1A" fill="none" strokeWidth="1.3" strokeLinecap="round" className="p-draw" />
      <path d="M145,220 Q135,200 150,190 Q165,185 168,205 Q158,215 145,220 Z" stroke="#1A1A1A" fill="#F5F2EE" strokeWidth="1.2" className="p-draw" />
      <path d="M218,240 Q240,228 260,215 Q278,204 292,193" stroke="#1A1A1A" fill="none" strokeWidth="1.3" strokeLinecap="round" className="p-draw" />
      <path d="M292,193 Q308,178 320,185 Q328,196 315,208 Q300,210 292,193 Z" stroke="#1A1A1A" fill="#F5F2EE" strokeWidth="1.2" className="p-draw" />
      <path d="M219,195 Q198,185 180,172 Q165,162 155,148" stroke="#1A1A1A" fill="none" strokeWidth="1.3" strokeLinecap="round" className="p-draw" />
      <path d="M155,148 Q140,132 158,125 Q174,122 176,140 Q168,146 155,148 Z" stroke="#1A1A1A" fill="#FFF0E8" strokeWidth="1.2" className="p-draw" />
      <path d="M222,165 Q244,155 263,143 Q278,133 290,120" stroke="#1A1A1A" fill="none" strokeWidth="1.3" strokeLinecap="round" className="p-draw" />
      <path d="M290,120 Q305,106 318,114 Q322,126 308,135 Q294,134 290,120 Z" stroke="#1A1A1A" fill="#FFF0E8" strokeWidth="1.2" className="p-draw" />

      {/* Flower */}
      <circle cx="224" cy="110" r="22" stroke="#F26522" fill="#FFF0E8" strokeWidth="1.4" className="p-draw" />
      <circle cx="224" cy="88" r="9" stroke="#F26522" fill="none" strokeWidth="1.2" className="p-draw" />
      <circle cx="224" cy="132" r="9" stroke="#F26522" fill="none" strokeWidth="1.2" className="p-draw" />
      <circle cx="202" cy="110" r="9" stroke="#F26522" fill="none" strokeWidth="1.2" className="p-draw" />
      <circle cx="246" cy="110" r="9" stroke="#F26522" fill="none" strokeWidth="1.2" className="p-draw" />
      <circle cx="224" cy="110" r="6" fill="#F26522" style={{ stroke: "none" }} />

      {/* Roots */}
      <path d="M220,340 Q210,355 195,365 Q180,375 165,372" stroke="#C5C0B8" fill="none" strokeWidth="1.1" strokeLinecap="round" className="p-draw" />
      <path d="M220,340 Q225,358 240,368 Q255,378 270,375" stroke="#C5C0B8" fill="none" strokeWidth="1.1" strokeLinecap="round" className="p-draw" />
      <path d="M215,348 Q205,365 190,378" stroke="#C5C0B8" fill="none" strokeWidth="1" strokeDasharray="2 4" strokeLinecap="round" className="p-draw" />
      <path d="M225,348 Q238,362 252,375" stroke="#C5C0B8" fill="none" strokeWidth="1" strokeDasharray="2 4" strokeLinecap="round" className="p-draw" />

      {/* Floating dots */}
      <circle cx="120" cy="100" r="3.5" fill="#F26522" opacity=".4" />
      <circle cx="340" cy="140" r="2.5" fill="#F26522" opacity=".4" />
      <circle cx="100" cy="200" r="2" fill="#F26522" opacity=".3" />
      <circle cx="356" cy="90" r="4" fill="#F26522" opacity=".3" />
    </svg>
  );
}
