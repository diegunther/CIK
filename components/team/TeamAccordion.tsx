"use client";

import { useState, useCallback } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { TEAM_GROUP_LABELS } from "@/lib/constants";
import type { TeamMember, TeamGroup } from "@/types";

interface TeamAccordionProps {
  groups: Record<TeamGroup, TeamMember[]>;
}

export function TeamAccordion({ groups }: TeamAccordionProps) {
  const [openGroups, setOpenGroups] = useState<Set<TeamGroup>>(
    new Set(["core"])
  );

  const toggleGroup = useCallback((key: TeamGroup) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);

  const groupOrder: TeamGroup[] = [
    "core",
    "community-fellows",
    "phd",
    "education-operations",
  ];

  return (
    <div className="mt-12 flex flex-col">
      {groupOrder.map((groupKey) => {
        const members = groups[groupKey] ?? [];
        if (members.length === 0) return null;
        const isOpen = openGroups.has(groupKey);
        const label = TEAM_GROUP_LABELS[groupKey];

        return (
          <div
            key={groupKey}
            className="border-t border-line last:border-b"
          >
            {/* Group header */}
            <button
              aria-expanded={isOpen}
              aria-controls={`team-group-${groupKey}`}
              onClick={() => toggleGroup(groupKey)}
              className="w-full flex items-center justify-between py-4 cursor-pointer
                         text-left bg-transparent border-none"
            >
              <span
                className="flex items-center gap-2 text-[0.78rem] tracking-[0.1em]
                           uppercase text-orange font-medium
                           before:block before:w-4 before:h-px before:bg-orange"
              >
                {label}
              </span>

              <div className="flex items-center gap-3">
                <span className="font-serif text-sm text-mid italic">
                  {members.length}{" "}
                  {members.length === 1 ? "member" : "members"}
                </span>
                <div
                  className={cn(
                    "w-7 h-7 rounded-full border border-line bg-white",
                    "flex items-center justify-center text-mid",
                    "transition-[background,border-color,transform,color] duration-200",
                    isOpen &&
                      "bg-orange border-orange text-white rotate-45"
                  )}
                  aria-hidden="true"
                >
                  <Plus size={13} />
                </div>
              </div>
            </button>

            {/* Group body */}
            <div
              id={`team-group-${groupKey}`}
              hidden={!isOpen}
              className="pb-4"
            >
              <TeamMemberList members={members} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TeamMemberList({ members }: { members: TeamMember[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const togglePerson = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <ul className="flex flex-col list-none m-0 p-0" role="list">
      {members.map((member, idx) => {
        const isExpanded = expandedId === member._id;
        return (
          <li
            key={member._id}
            className={cn(
              "flex flex-wrap items-center gap-3 py-3 cursor-pointer",
              idx !== 0 && "border-t border-[#F0EDE8]"
            )}
            onClick={() => togglePerson(member._id)}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePerson(member._id);
              }
            }}
          >
            {/* Row */}
            <div className="flex items-center gap-3 w-full">
              {/* Initials avatar */}
              <div
                className="w-9 h-9 rounded-full bg-orange-light border border-[#f5c9a8]
                           flex items-center justify-center flex-shrink-0
                           font-serif text-sm text-orange"
                aria-hidden="true"
              >
                {member.initials}
              </div>

              {/* Name + role */}
              <div className="flex-1 min-w-0">
                <strong className="text-sm font-medium block">{member.name}</strong>
                <span className="text-xs text-mid font-light">{member.role}</span>
              </div>

              {/* Expand chevron */}
              <span
                className={cn(
                  "text-[0.7rem] text-[#bbb] flex-shrink-0",
                  "transition-[color,transform] duration-200",
                  isExpanded && "text-orange rotate-180"
                )}
                aria-hidden="true"
              >
                ▾
              </span>
            </div>

            {/* Expandable bio */}
            {isExpanded && (
              <p
                className="text-xs text-mid font-light leading-relaxed
                           max-w-[480px] pl-12 pb-1 w-full"
              >
                {member.bio}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
