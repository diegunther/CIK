import { SectionLabel, SectionTitle, SectionIntro } from "@/components/ui/index";
import { ClassroomIllustration } from "@/components/illustrations/ClassroomIllustration";

const LEARNING_ITEMS = [
  {
    num: "01",
    title: "Collaborative workshops",
    description:
      "Hands-on sessions where academic researchers and community members co-develop tools, frameworks, and findings together.",
  },
  {
    num: "02",
    title: "Participatory course design",
    description:
      "University courses co-created with the communities they study — students learn directly from lived experience, not just textbooks.",
  },
  {
    num: "03",
    title: "Open knowledge sharing",
    description:
      "All methodologies, toolkits, and research outputs are made available openly so others can build on our work.",
  },
];

export function LearningSection() {
  return (
    <section id="learning" className="py-20 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Illustration */}
          <div className="fade-up flex justify-center">
            <ClassroomIllustration />
          </div>

          {/* Text */}
          <div className="fade-up" data-fade-delay="0.2s">
            <SectionLabel>Learning &amp; Teaching</SectionLabel>
            <SectionTitle>Participatory learning in practice</SectionTitle>
            <SectionIntro>
              We design learning experiences where everyone is both teacher and
              student — because knowledge flows in all directions.
            </SectionIntro>

            <div className="mt-8 flex flex-col gap-6">
              {LEARNING_ITEMS.map(({ num, title, description }) => (
                <div key={num} className="flex gap-4 items-start">
                  <span className="font-serif text-[1.6rem] text-orange leading-none min-w-[2rem] mt-0.5">
                    {num}
                  </span>
                  <div>
                    <h4 className="text-base font-medium mb-1">{title}</h4>
                    <p className="text-sm text-mid font-light leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
