import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { WhyItMattersSection } from "@/components/sections/WhyItMattersSection";
import { ThemesSection } from "@/components/sections/ThemesSection";
import { LearningSection } from "@/components/sections/LearningSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Divider } from "@/components/ui/Divider";

// Try to load from CMS; fall back to static data
import { PROJECTS } from "@/data/projects";
import { TEAM_MEMBERS } from "@/data/team";

export const metadata: Metadata = {
  title: "Co-Creation for Inclusive Knowledges Lab — VU Amsterdam",
  description:
    "Bringing together communities, researchers, and lived experiences to build knowledge that truly includes everyone.",
};

// Revalidate every hour (ISR)
export const revalidate = 3600;

export default async function HomePage() {
  // In production: replace with sanityFetch calls
  // const projects = await sanityFetch<Project[]>(projectsQuery);
  // const teamMembers = await sanityFetch<TeamMember[]>(teamMembersQuery);
  const projects = PROJECTS;
  const teamMembers = TEAM_MEMBERS;

  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange focus:text-white focus:rounded-full focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <HeroSection />
      <Divider />
      <WhatWeDoSection />
      <WhyItMattersSection />
      <ThemesSection />
      <LearningSection />
      <ProjectsSection projects={projects} />
      <TeamSection members={teamMembers} />
    </>
  );
}
