"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/types";
import type { ThemeSlug } from "@/types";

export function useProjectFilter(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState<ThemeSlug | "all">("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.theme === activeFilter);
  }, [projects, activeFilter]);

  return { activeFilter, setActiveFilter, filtered };
}
