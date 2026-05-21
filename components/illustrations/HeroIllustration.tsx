export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Five diverse people sitting in a circle, co-creating knowledge"
      role="img"
      className="w-full max-w-[560px] h-auto"
    >
      <defs>
        <style>{`
          .il { stroke:#1A1A1A; fill:none; stroke-width:1.4; stroke-linecap:round; stroke-linejoin:round; }
          .il-o { stroke:#F26522; fill:none; stroke-width:1.4; stroke-linecap:round; stroke-linejoin:round; }
          .il-dot { fill:#F26522; }
          @media (prefers-reduced-motion: no-preference) {
            .hero-draw {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: drawLine 2.5s ease forwards;
            }
          }
          @keyframes drawLine { to { stroke-dashoffset: 0; } }
        `}</style>
      </defs>

      {/* Background circles */}
      <circle cx="280" cy="240" r="165" stroke="#F0EDE8" strokeWidth="1" fill="none" className="hero-draw" style={{ animationDelay: ".2s" }} />
      <circle cx="280" cy="240" r="120" stroke="#F5F2EE" strokeWidth="1" fill="none" className="hero-draw" style={{ animationDelay: ".3s" }} />

      {/* Center idea spark */}
      <circle cx="280" cy="240" r="28" fill="#FFF0E8" stroke="#F26522" strokeWidth="1.3" className="hero-draw" style={{ animationDelay: ".6s" }} />
      <text x="280" y="245" fontFamily="serif" fontSize="20" textAnchor="middle" fill="#F26522" style={{ stroke: "none" }}>✦</text>

      {/* Person 1 — top */}
      <circle cx="280" cy="90" r="16" className="il hero-draw" style={{ animationDelay: ".5s" }} />
      <path d="M272,106 Q268,128 264,142 L296,142 Q292,128 288,106" className="il hero-draw" style={{ animationDelay: ".55s" }} />
      <path d="M264,142 Q258,158 248,165 M296,142 Q302,158 312,165 M248,165 Q260,158 280,160 Q300,158 312,165" className="il hero-draw" style={{ animationDelay: ".6s" }} />
      <path d="M268,122 Q262,160 274,210" className="il-o hero-draw" style={{ animationDelay: ".9s" }} />
      <path d="M266,80 Q275,73 285,75 Q295,73 294,80" className="il hero-draw" style={{ animationDelay: ".52s" }} />

      {/* Person 2 — bottom-right */}
      <circle cx="430" cy="335" r="16" className="il hero-draw" style={{ animationDelay: ".65s" }} />
      <path d="M422,351 Q418,373 414,387 L446,387 Q442,373 438,351" className="il hero-draw" style={{ animationDelay: ".7s" }} />
      <path d="M414,387 Q408,403 398,410 M446,387 Q452,403 462,410 M398,410 Q415,403 435,405 Q455,403 462,410" className="il hero-draw" style={{ animationDelay: ".72s" }} />
      <path d="M420,365 Q380,320 304,258" className="il-o hero-draw" style={{ animationDelay: "1s" }} />
      <path d="M416,324 Q430,317 444,324" className="il hero-draw" style={{ animationDelay: ".67s" }} />

      {/* Person 3 — bottom-left */}
      <circle cx="130" cy="335" r="16" className="il hero-draw" style={{ animationDelay: ".75s" }} />
      <path d="M122,351 Q118,373 114,387 L146,387 Q142,373 138,351" className="il hero-draw" style={{ animationDelay: ".78s" }} />
      <path d="M114,387 Q108,403 98,410 M146,387 Q152,403 162,410 M98,410 Q115,403 135,405 Q155,403 162,410" className="il hero-draw" style={{ animationDelay: ".8s" }} />
      <path d="M140,365 Q175,320 255,258" className="il-o hero-draw" style={{ animationDelay: "1.05s" }} />
      <path d="M117,325 Q121,317 127,319 Q131,313 137,316 Q141,310 145,314 Q148,320 144,325" className="il hero-draw" style={{ animationDelay: ".77s" }} />

      {/* Person 4 — right */}
      <circle cx="490" cy="220" r="16" className="il hero-draw" style={{ animationDelay: ".85s" }} />
      <path d="M482,236 Q478,258 474,272 L506,272 Q502,258 498,236" className="il hero-draw" style={{ animationDelay: ".88s" }} />
      <path d="M474,272 Q468,288 458,295 M506,272 Q512,288 522,295 M458,295 Q475,288 495,290 Q515,288 522,295" className="il hero-draw" style={{ animationDelay: ".9s" }} />
      <path d="M478,252 Q420,248 310,242" className="il-o hero-draw" style={{ animationDelay: "1.1s" }} />
      <path d="M476,210 Q486,200 496,202 Q504,200 506,210 Q508,218 498,225 Q492,228 488,225 Q480,228 476,220 Z" className="il hero-draw" style={{ animationDelay: ".86s" }} />

      {/* Person 5 — left */}
      <circle cx="70" cy="220" r="16" className="il hero-draw" style={{ animationDelay: ".95s" }} />
      <path d="M62,236 Q58,258 54,272 L86,272 Q82,258 78,236" className="il hero-draw" style={{ animationDelay: ".98s" }} />
      <path d="M54,272 Q48,288 38,295 M86,272 Q92,288 102,295 M38,295 Q55,288 75,290 Q95,288 102,295" className="il hero-draw" style={{ animationDelay: "1s" }} />
      <path d="M82,252 Q140,248 250,242" className="il-o hero-draw" style={{ animationDelay: "1.15s" }} />
      <circle cx="70" cy="204" r="8" className="il hero-draw" style={{ animationDelay: ".96s" }} />
      <path d="M63,208 Q70,200 77,208" className="il hero-draw" style={{ animationDelay: ".97s" }} />

      {/* Idea bubbles */}
      <circle cx="200" cy="155" r="8" stroke="#F26522" fill="#FFF0E8" strokeWidth="1.2" className="hero-draw" style={{ animationDelay: "1.4s" }} />
      <circle cx="360" cy="145" r="6" stroke="#F26522" fill="#FFF0E8" strokeWidth="1.2" className="hero-draw" style={{ animationDelay: "1.5s" }} />
      <circle cx="420" cy="168" r="5" stroke="#F26522" fill="none" strokeWidth="1.2" className="hero-draw" style={{ animationDelay: "1.55s" }} />
      <circle cx="168" cy="168" r="5" stroke="#F26522" fill="none" strokeWidth="1.2" className="hero-draw" style={{ animationDelay: "1.6s" }} />

      {/* Connection lines */}
      <line x1="280" y1="118" x2="414" y2="296" stroke="#E0DDD8" strokeWidth="1" strokeDasharray="4 6" className="hero-draw" style={{ animationDelay: "1.3s" }} />
      <line x1="280" y1="118" x2="146" y2="296" stroke="#E0DDD8" strokeWidth="1" strokeDasharray="4 6" className="hero-draw" style={{ animationDelay: "1.3s" }} />
      <line x1="414" y1="296" x2="146" y2="296" stroke="#E0DDD8" strokeWidth="1" strokeDasharray="4 6" className="hero-draw" style={{ animationDelay: "1.35s" }} />
      <line x1="474" y1="240" x2="86" y2="240" stroke="#E0DDD8" strokeWidth="1" strokeDasharray="4 6" className="hero-draw" style={{ animationDelay: "1.35s" }} />

      {/* Connection dots */}
      <circle cx="280" cy="212" r="3.5" className="il-dot" style={{ opacity: .6 }} />
      <circle cx="280" cy="268" r="3.5" className="il-dot" style={{ opacity: .6 }} />
      <circle cx="253" cy="240" r="3" fill="#1A1A1A" style={{ opacity: .2 }} />
      <circle cx="307" cy="240" r="3" fill="#1A1A1A" style={{ opacity: .2 }} />
    </svg>
  );
}
