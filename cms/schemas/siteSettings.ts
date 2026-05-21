import { defineField, defineType } from "sanity";

// ── Research Theme ────────────────────────────────────────────────────────────
export const researchThemeSchema = defineType({
  name: "researchTheme",
  title: "Research Theme",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Theme Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Theme Key",
      description:
        "Must match: migration | youth | economy | storytelling | violence",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagNumber",
      title: "Tag Label",
      description: 'e.g. "Theme 01"',
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "icon",
      title: "Icon Key",
      description: "Identifier used by the front-end to select the SVG icon",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "tagNumber" },
  },
});

// ── Site Settings ─────────────────────────────────────────────────────────────
export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — only one document of this type should exist
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "Co-Creation for Inclusive Knowledges Lab",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "statsPartnerships",
      title: "Stat: Community Partnerships",
      type: "string",
      initialValue: "12+",
    }),
    defineField({
      name: "statsThemes",
      title: "Stat: Active Research Themes",
      type: "string",
      initialValue: "5",
    }),
    defineField({
      name: "statsCoResearchers",
      title: "Stat: Co-Researchers Worldwide",
      type: "string",
      initialValue: "40+",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      initialValue: "lab@vu.nl",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url",
    }),
    defineField({
      name: "linkedInUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "researchGateUrl",
      title: "ResearchGate URL",
      type: "url",
    }),
  ],
});
