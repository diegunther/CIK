import { SectionHeader } from "@/components/ui/index";

const PILLARS = [
  {
    title: "Co-create research",
    description:
      "We design and conduct research together with communities, not about them. Participants shape questions, methods, and findings from the very beginning.",
    icon: (
      <svg
        className="w-14 h-14 mb-6 stroke-orange fill-none"
        viewBox="0 0 56 56"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14,32 Q14,22 24,20 L32,20 Q36,20 38,24 L42,24 Q46,24 46,28 Q46,32 42,32 L38,32" />
        <path d="M14,32 L10,32 Q8,32 8,34 L8,42 Q8,44 10,44 L36,44 Q42,44 46,40 L50,36" />
        <path d="M28,20 L28,14 Q28,10 32,10 L36,10 Q40,10 40,14 L40,20" />
        <circle cx="22" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Develop inclusive methodologies",
    description:
      "We rethink research methods to make them accessible, participatory, and culturally responsive — from storytelling circles to visual research tools.",
    icon: (
      <svg
        className="w-14 h-14 mb-6 stroke-orange fill-none"
        viewBox="0 0 56 56"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="28" cy="28" r="18" />
        <path d="M28,10 L28,14 M28,42 L28,46 M10,28 L14,28 M42,28 L46,28" />
        <path d="M22,22 L20,36 L34,30 L36,16 Z" />
        <circle cx="28" cy="28" r="2.5" fill="#F26522" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Connect academic & experiential knowledge",
    description:
      "We create spaces where scholarly research and the knowledge people carry from their own lives enrich and challenge each other equally.",
    icon: (
      <svg
        className="w-14 h-14 mb-6 stroke-orange fill-none"
        viewBox="0 0 56 56"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8,36 L8,28 Q8,18 18,18 L38,18 Q48,18 48,28 L48,36" />
        <path d="M8,36 L48,36" />
        <path d="M18,18 L18,36 M28,14 L28,36 M38,18 L38,36" />
        <path d="M4,36 L52,36" />
        <circle cx="8" cy="36" r="2.5" />
        <circle cx="48" cy="36" r="2.5" />
      </svg>
    ),
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what" className="bg-light py-20 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="fade-up">
          <SectionHeader
            label="Our Approach"
            title="What we do"
            intro="We believe knowledge is richer when it comes from many places. Our lab bridges academia and lived experience through three core commitments."
          />
        </div>

        {/* Card grid */}
        <div
          className="fade-up grid grid-cols-1 md:grid-cols-3
                     border border-line rounded-2xl overflow-hidden
                     divide-y md:divide-y-0 md:divide-x divide-line mt-14"
          data-fade-delay="0.15s"
        >
          {PILLARS.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group bg-white p-10 relative overflow-hidden
                         transition-colors duration-300 hover:bg-orange-light"
            >
              {/* Underline accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange
                           transition-[width] duration-300 ease-out
                           group-hover:w-full"
                aria-hidden="true"
              />
              {icon}
              <h3 className="font-serif text-xl mb-3 tracking-tight">{title}</h3>
              <p className="text-sm text-mid leading-relaxed font-light">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
