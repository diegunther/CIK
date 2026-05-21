import { SectionLabel, SectionTitle, SectionIntro } from "@/components/ui/index";
import { PlantIllustration } from "@/components/illustrations/PlantIllustration";

const STATS = [
  { num: "12+", label: "Community partnerships" },
  { num: "5", label: "Active research themes" },
  { num: "40+", label: "Co-researchers worldwide" },
];

export function WhyItMattersSection() {
  return (
    <section id="why" className="py-20 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Text */}
          <div className="fade-up order-2 md:order-1">
            <SectionLabel>Purpose</SectionLabel>
            <SectionTitle>
              Knowledge should belong to everyone
            </SectionTitle>
            <SectionIntro>
              Structural inequalities shape who gets to produce knowledge, whose
              stories are told, and whose expertise is recognised. We work to
              change that — one research partnership at a time.
            </SectionIntro>

            {/* Stats */}
            <div className="flex gap-8 mt-10 flex-wrap">
              {STATS.map(({ num, label }) => (
                <div
                  key={label}
                  className="border-l-2 border-orange pl-4"
                >
                  <span className="font-serif text-[2.2rem] text-orange block leading-none mb-1">
                    {num}
                  </span>
                  <span className="text-xs text-mid font-light">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div
            className="fade-up flex justify-center order-1 md:order-2"
            data-fade-delay="0.2s"
          >
            <PlantIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
