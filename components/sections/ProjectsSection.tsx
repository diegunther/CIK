import { SectionHeader } from "@/components/ui/index";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import type { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-light py-20 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <div className="fade-up">
          <SectionHeader
            label="Our Projects"
            title="Research in action"
            intro="Concrete partnerships and inquiries where co-creation happens. Filter by theme to find what resonates with you."
          />
        </div>

        {/* Client island: filter + grid + modal */}
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
