"use client";

import { useState, useCallback } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectModal } from "./ProjectModal";
import { useProjectFilter } from "@/hooks/useProjectFilter";
import type { Project } from "@/types";
import type { ThemeSlug } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { activeFilter, setActiveFilter, filtered } =
    useProjectFilter(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFilterChange = useCallback(
    (filter: ThemeSlug | "all") => {
      setActiveFilter(filter);
    },
    [setActiveFilter]
  );

  const handleCardClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <ProjectFilter active={activeFilter} onChange={handleFilterChange} />

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-mid font-light">
          No projects found for this theme.
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Research projects"
        >
          {filtered.map((project) => (
            <div key={project._id} role="listitem">
              <ProjectCard project={project} onClick={handleCardClick} />
            </div>
          ))}
        </div>
      )}

      <ProjectModal project={selectedProject} onClose={handleModalClose} />
    </>
  );
}
