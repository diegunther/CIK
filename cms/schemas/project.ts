import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Meta & Classification" },
    { name: "people", title: "People & Partners" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      group: "meta",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      description: "Shown on the project card (1–2 sentences)",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      description: "Shown in the project modal",
      type: "text",
      rows: 6,
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "theme",
      title: "Research Theme",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "Forced Migration", value: "migration" },
          { title: "Youth Beyond Binaries", value: "youth" },
          { title: "Economic Insecurities", value: "economy" },
          { title: "Storytelling & Identity", value: "storytelling" },
          { title: "Resisting Violence", value: "violence" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "Ongoing", value: "ongoing" },
          { title: "New", value: "new" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
      initialValue: "ongoing",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year / Date Range",
      description: 'e.g. "2023–2025" or "Ongoing · EU AMIF funded"',
      type: "string",
      group: "meta",
    }),
    defineField({
      name: "fundingBody",
      title: "Funding Body",
      type: "string",
      group: "meta",
    }),
    defineField({
      name: "geographicScope",
      title: "Geographic Scope",
      description: "Short label shown on card, e.g. '5 countries'",
      type: "string",
      group: "meta",
    }),
    defineField({
      name: "researchers",
      title: "Researchers",
      type: "array",
      of: [{ type: "string" }],
      group: "people",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "partners",
      title: "Partners",
      type: "array",
      of: [{ type: "string" }],
      group: "people",
    }),
    defineField({
      name: "methods",
      title: "Research Methods",
      type: "array",
      of: [{ type: "string" }],
      group: "people",
    }),
    defineField({
      name: "externalLink",
      title: "External Project URL",
      type: "url",
      group: "content",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers appear first within a theme",
      type: "number",
      group: "meta",
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "theme",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      const themeLabels: Record<string, string> = {
        migration: "Migration",
        youth: "Youth",
        economy: "Economy",
        storytelling: "Storytelling",
        violence: "Violence",
      };
      return {
        title,
        subtitle: `${themeLabels[subtitle] ?? subtitle} · ${status}`,
      };
    },
  },
  orderings: [
    {
      title: "Theme, then order",
      name: "themeOrder",
      by: [{ field: "theme", direction: "asc" }, { field: "order", direction: "asc" }],
    },
    {
      title: "Newest first",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});
