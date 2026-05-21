import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectSchema } from "./schemas/project";
import { teamMemberSchema } from "./schemas/teamMember";
import { researchThemeSchema, siteSettingsSchema } from "./schemas/siteSettings";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "cik-lab-studio",
  title: "CIK Lab — Content Studio",
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            // Collections
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("teamMember").title("Team Members"),
            S.documentTypeListItem("researchTheme").title("Research Themes"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [
      projectSchema,
      teamMemberSchema,
      researchThemeSchema,
      siteSettingsSchema,
    ],
  },
});
