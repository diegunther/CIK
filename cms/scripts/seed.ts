#!/usr/bin/env node
/**
 * Seed script — imports static project and team data into Sanity.
 *
 * Usage:
 *   SANITY_PROJECT_ID=xxx SANITY_DATASET=production SANITY_TOKEN=xxx \
 *   npx tsx cms/scripts/seed.ts
 *
 * Install tsx globally: npm i -g tsx
 */

import { createClient } from "@sanity/client";
import { PROJECTS } from "../../data/projects";
import { TEAM_MEMBERS } from "../../data/team";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN!,
  useCdn: false,
});

async function seed() {
  console.log("🌱 Seeding Sanity dataset…\n");

  // ── Projects ──────────────────────────────────────────────────────────────
  console.log(`Importing ${PROJECTS.length} projects…`);
  const projectDocs = PROJECTS.map((p) => ({
    _type: "project",
    _id: p._id,
    title: p.title,
    slug: p.slug,
    shortDescription: p.shortDescription,
    fullDescription: p.fullDescription,
    theme: p.theme,
    status: p.status,
    year: p.year,
    researchers: p.researchers,
    partners: p.partners,
    methods: p.methods,
    externalLink: p.externalLink,
    fundingBody: p.fundingBody,
    geographicScope: p.geographicScope,
  }));

  for (const doc of projectDocs) {
    await client.createOrReplace(doc);
    process.stdout.write(".");
  }
  console.log("\n✅ Projects imported");

  // ── Team Members ───────────────────────────────────────────────────────────
  console.log(`\nImporting ${TEAM_MEMBERS.length} team members…`);
  const memberDocs = TEAM_MEMBERS.map((m) => ({
    _type: "teamMember",
    _id: m._id,
    name: m.name,
    slug: m.slug,
    initials: m.initials,
    role: m.role,
    group: m.group,
    bio: m.bio,
    order: m.order,
  }));

  for (const doc of memberDocs) {
    await client.createOrReplace(doc);
    process.stdout.write(".");
  }
  console.log("\n✅ Team members imported");

  console.log("\n🎉 Seed complete!");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
