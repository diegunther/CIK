"use client";

import { cn, getThemeColor } from "@/lib/utils";
import { THEME_FILTER_OPTIONS } from "@/lib/constants";
import type { ThemeSlug } from "@/types";

interface ProjectFilterProps {
  active: ThemeSlug | "all";
  onChange: (filter: ThemeSlug | "all") => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2 mb-8"
      role="group"
      aria-label="Filter projects by theme"
    >
      {THEME_FILTER_OPTIONS.map(({ key, label }) => {
        const isActive = active === key;
        const isAll = key === "all";
        const tc = isAll ? null : getThemeColor(key as ThemeSlug);

        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            aria-pressed={isActive}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full",
              "border-[1.5px] text-xs font-medium cursor-pointer",
              "transition-all duration-200 font-sans",
              !isActive &&
                "border-line bg-white text-mid hover:border-current",
              isActive && isAll && "bg-dark border-dark text-white",
              isActive && !isAll && "text-white"
            )}
            style={
              isActive && tc
                ? { background: tc.base, borderColor: tc.base }
                : isActive && isAll
                ? {}
                : tc
                ? {
                    // Hover colour applied via data attribute + JS — here we
                    // rely on Tailwind's group approach with inline style fallback
                  }
                : {}
            }
          >
            {/* Dot indicator */}
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-[opacity,transform] duration-200",
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}
              style={{ background: isActive && tc ? "white" : "currentColor" }}
              aria-hidden="true"
            />
            {label}
          </button>
        );
      })}
    </div>
  );
}
