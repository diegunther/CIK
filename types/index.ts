// ─────────────────────────────────────────────────────────────────────────────
// Research Themes
// ─────────────────────────────────────────────────────────────────────────────

export type ThemeSlug =
  | "migration"
  | "youth"
  | "economy"
  | "storytelling"
  | "violence";

export interface ThemeColor {
  base: string;
  light: string;
  mid: string;
  label: string;
  filterKey: ThemeSlug;
}

// ─────────────────────────────────────────────────────────────────────────────
// Project
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = "ongoing" | "completed" | "new";

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  fullDescription: string;
  theme: ThemeSlug;
  status: ProjectStatus;
  year: string;
  researchers: string[];
  partners: string[];
  methods: string[];
  externalLink?: string;
  fundingBody?: string;
  geographicScope?: string;
  order?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────────────────────────────────────

export type TeamGroup =
  | "core"
  | "community-fellows"
  | "phd"
  | "education-operations";

export interface TeamMember {
  _id: string;
  name: string;
  slug: { current: string };
  initials: string;
  role: string;
  group: TeamGroup;
  bio: string;
  order?: number;
}

export interface TeamGroupData {
  key: TeamGroup;
  label: string;
  members: TeamMember[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Research Theme (CMS entity)
// ─────────────────────────────────────────────────────────────────────────────

export interface ResearchTheme {
  _id: string;
  title: string;
  slug: { current: ThemeSlug };
  tagNumber: string; // "Theme 01" etc.
  shortDescription: string;
  icon: string; // SVG path data or icon key
}

// ─────────────────────────────────────────────────────────────────────────────
// Site Settings
// ─────────────────────────────────────────────────────────────────────────────

export interface SiteSettings {
  siteName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  statsPartnerships: string;
  statsThemes: string;
  statsCoResearchers: string;
  contactEmail: string;
  twitterUrl?: string;
  linkedInUrl?: string;
  researchGateUrl?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact form
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactFormValues {
  name: string;
  email: string;
  organisation?: string;
  subject: string;
  message: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// API responses
// ─────────────────────────────────────────────────────────────────────────────

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}
