import { groq } from "next-sanity";

// ─────────────────────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────────────────────

export const projectsQuery = groq`
  *[_type == "project"] | order(coalesce(order, 99) asc, _createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    theme,
    status,
    year,
    researchers,
    partners,
    methods,
    externalLink,
    fundingBody,
    geographicScope,
    order
  }
`;

export const projectsByThemeQuery = groq`
  *[_type == "project" && theme == $theme] | order(coalesce(order, 99) asc) {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    theme,
    status,
    year,
    researchers,
    partners,
    methods,
    externalLink,
    fundingBody,
    geographicScope
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    theme,
    status,
    year,
    researchers,
    partners,
    methods,
    externalLink,
    fundingBody,
    geographicScope
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────────────────────────────────────

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(coalesce(order, 99) asc, name asc) {
    _id,
    name,
    slug,
    initials,
    role,
    group,
    bio,
    order
  }
`;

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    initials,
    role,
    group,
    bio
  }
`;

export const teamMemberSlugsQuery = groq`
  *[_type == "teamMember" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Research Themes
// ─────────────────────────────────────────────────────────────────────────────

export const researchThemesQuery = groq`
  *[_type == "researchTheme"] | order(tagNumber asc) {
    _id,
    title,
    slug,
    tagNumber,
    shortDescription,
    icon
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Site Settings
// ─────────────────────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    heroHeadline,
    heroSubtext,
    statsPartnerships,
    statsThemes,
    statsCoResearchers,
    contactEmail,
    twitterUrl,
    linkedInUrl,
    researchGateUrl
  }
`;
