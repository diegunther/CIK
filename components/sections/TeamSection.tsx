import { SectionHeader } from "@/components/ui/index";
import { TeamAccordion } from "@/components/team/TeamAccordion";
import type { TeamMember, TeamGroup } from "@/types";

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  // Group members server-side — no JS cost on client
  const groups = members.reduce<Record<TeamGroup, TeamMember[]>>(
    (acc, member) => {
      if (!acc[member.group]) acc[member.group] = [];
      acc[member.group].push(member);
      return acc;
    },
    {} as Record<TeamGroup, TeamMember[]>
  );

  return (
    <section id="team" className="bg-light py-20 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="fade-up">
          <SectionHeader
            label="The Team"
            title="The people behind the work"
            intro="A growing collective of researchers, community scholars, and practitioners. Click a group to meet the people in it, and any name to read more."
          />
        </div>

        {/* Client island: accordion */}
        <div className="fade-up" data-fade-delay="0.1s">
          <TeamAccordion groups={groups} />
        </div>
      </div>
    </section>
  );
}
