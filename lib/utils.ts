import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ThemeSlug } from "@/types";
import { THEME_COLORS } from "@/lib/constants";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Get theme color config by slug */
export function getThemeColor(slug: ThemeSlug) {
  return THEME_COLORS[slug] ?? THEME_COLORS.migration;
}

/** Generate initials from a full name */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

/** Format a list of strings for display */
export function formatList(items: string[]): string {
  return items.join(", ");
}

/** Slugify a string */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Truncate text to a max length */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

/** Project status display config */
export const STATUS_CONFIG = {
  ongoing: {
    label: "Ongoing",
    className: "bg-green-100 text-green-700",
  },
  completed: {
    label: "Completed",
    className: "bg-slate-100 text-slate-600",
  },
  new: {
    label: "New",
    className: "bg-yellow-100 text-yellow-700",
  },
} as const;
