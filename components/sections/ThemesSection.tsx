import { SectionHeader } from "@/components/ui/index";

const THEMES = [
  {
    tag: "Theme 01",
    title: "Forced Migration",
    description:
      "Centering the voices and agency of people who have been displaced, and challenging narratives that strip them of complexity.",
    icon: (
      <svg
        className="w-12 h-12 mb-5 stroke-dark fill-none transition-[stroke] duration-200 group-hover:stroke-orange"
        viewBox="0 0 48 48"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="16" cy="10" r="5" />
        <path d="M12,15 Q8,24 10,32 L14,32 L16,26 L18,32 L22,32 Q24,24 20,15" />
        <path d="M22,20 L30,20 M30,20 L36,14 M30,20 L36,26" />
        <circle cx="40" cy="10" r="4" />
        <path d="M37,14 Q34,22 36,30 L39,30 L40,24 L41,30 L44,30 Q46,22 43,14" />
      </svg>
    ),
  },
  {
    tag: "Theme 02",
    title: "Youth Beyond Binaries",
    description:
      "Exploring how young people navigate identity, gender, and belonging beyond imposed categories — with and for youth communities.",
    icon: (
      <svg
        className="w-12 h-12 mb-5 stroke-dark fill-none transition-[stroke] duration-200 group-hover:stroke-orange"
        viewBox="0 0 48 48"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8,34 Q8,16 24,16 Q40,16 40,34" />
        <path d="M13,34 Q13,20 24,20 Q35,20 35,34" />
        <path d="M18,34 Q18,24 24,24 Q30,24 30,34" />
        <path d="M6,34 L42,34" />
        <circle cx="24" cy="34" r="2.5" fill="#F26522" stroke="none" />
      </svg>
    ),
  },
  {
    tag: "Theme 03",
    title: "Economic Insecurities",
    description:
      "Examining how financial precarity shapes lives, and how communities develop strategies of resilience and collective care.",
    icon: (
      <svg
        className="w-12 h-12 mb-5 stroke-dark fill-none transition-[stroke] duration-200 group-hover:stroke-orange"
        viewBox="0 0 48 48"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M24,10 L24,38" />
        <path d="M18,38 L30,38" />
        <path d="M24,14 L10,22 M24,14 L38,22" />
        <path d="M6,22 Q8,28 14,28 Q20,28 22,22 Z" />
        <path d="M26,22 Q28,30 34,30 Q40,30 42,22 Z" />
      </svg>
    ),
  },
  {
    tag: "Theme 04",
    title: "Storytelling & Identity",
    description:
      "Using narrative, art, and creative methods to surface how people understand themselves and their place in the world.",
    icon: (
      <svg
        className="w-12 h-12 mb-5 stroke-dark fill-none transition-[stroke] duration-200 group-hover:stroke-orange"
        viewBox="0 0 48 48"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8,12 Q8,8 12,8 L22,8 Q26,8 26,12 L26,28 Q26,32 22,32 L16,32 L10,38 L12,32 Q8,32 8,28 Z" />
        <path d="M26,16 L36,16 Q40,16 40,20 L40,32 Q40,36 36,36 L32,36 L34,42 L28,36 Q26,36 26,32 L26,28" />
      </svg>
    ),
  },
];

export function ThemesSection() {
  return (
    <section id="themes" className="bg-light py-20 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="fade-up">
          <SectionHeader
            label="Research Themes"
            title="What we explore together"
            intro="Our research is organised around themes that matter to communities facing exclusion, uncertainty, and the need to be heard."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {THEMES.map(({ tag, title, description, icon }, i) => (
            <div
              key={title}
              className="fade-up group bg-white rounded-2xl p-8 border border-line
                         transition-[transform,box-shadow,border-color] duration-300
                         hover:-translate-y-1 hover:shadow-card-hover hover:border-orange"
              data-fade-delay={`${0.05 * (i + 1)}s`}
            >
              <span className="text-[0.7rem] tracking-widest uppercase text-orange font-medium mb-5 block">
                {tag}
              </span>
              {icon}
              <h3 className="font-serif text-lg mb-2 tracking-tight">{title}</h3>
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
