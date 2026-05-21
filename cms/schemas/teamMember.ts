import { defineField, defineType } from "sanity";

export const teamMemberSchema = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      description: "2-letter initials for the avatar (auto-generated if blank)",
      type: "string",
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "group",
      title: "Group",
      type: "string",
      options: {
        list: [
          { title: "Core Researchers", value: "core" },
          { title: "Community Research Fellows", value: "community-fellows" },
          { title: "PhD Researchers", value: "phd" },
          { title: "Education & Operations", value: "education-operations" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Short Biography",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers appear first within a group",
      type: "number",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
  orderings: [
    {
      title: "Group, then order",
      name: "groupOrder",
      by: [
        { field: "group", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
});
