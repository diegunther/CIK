import type { ThemeColor, ThemeSlug } from "@/types";

export const THEME_COLORS: Record<ThemeSlug, ThemeColor> = {
  migration: {
    base: "#2563EB",
    light: "#EFF6FF",
    mid: "#BFDBFE",
    label: "Forced Migration",
    filterKey: "migration",
  },
  youth: {
    base: "#7C3AED",
    light: "#F5F3FF",
    mid: "#DDD6FE",
    label: "Youth Beyond Binaries",
    filterKey: "youth",
  },
  economy: {
    base: "#059669",
    light: "#ECFDF5",
    mid: "#A7F3D0",
    label: "Economic Insecurities",
    filterKey: "economy",
  },
  storytelling: {
    base: "#D97706",
    light: "#FFFBEB",
    mid: "#FDE68A",
    label: "Storytelling & Identity",
    filterKey: "storytelling",
  },
  violence: {
    base: "#DC2626",
    light: "#FEF2F2",
    mid: "#FECACA",
    label: "Resisting Violence",
    filterKey: "violence",
  },
};

export const THEME_FILTER_OPTIONS: Array<{
  key: ThemeSlug | "all";
  label: string;
}> = [
  { key: "all", label: "All projects" },
  { key: "migration", label: "Forced Migration" },
  { key: "youth", label: "Youth Beyond Binaries" },
  { key: "economy", label: "Economic Insecurities" },
  { key: "storytelling", label: "Storytelling & Identity" },
  { key: "violence", label: "Resisting Violence" },
];

export const TEAM_GROUP_LABELS: Record<string, string> = {
  core: "Core Researchers",
  "community-fellows": "Community Research Fellows",
  phd: "PhD Researchers",
  "education-operations": "Education & Operations",
};
