import { cn, getThemeColor } from "@/lib/utils";
import { ThemeBadge, StatusBadge } from "@/components/ui/index";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const tc = getThemeColor(project.theme);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={() => onClick(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(project);
        }
      }}
      className={cn(
        "group flex flex-col bg-white border border-line rounded-2xl",
        "overflow-hidden cursor-pointer",
        "transition-[transform,box-shadow] duration-300",
        "hover:-translate-y-1 hover:shadow-card-hover",
        "focus-visible:outline-2 focus-visible:outline-offset-2"
      )}
      style={{ "--theme-color": tc.base } as React.CSSProperties}
    >
      {/* Theme colour bar */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ background: tc.base }}
        aria-hidden="true"
      />

      {/* Card body */}
      <div className="flex flex-col gap-2 p-6 flex-1">
        <ThemeBadge theme={project.theme} />

        <h3 className="font-serif text-[1.08rem] leading-snug tracking-tight mt-1">
          {project.title}
        </h3>

        <p className="text-sm text-mid font-light leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Meta row */}
        <div
          className="flex items-center justify-between mt-3 pt-3 border-t border-line"
        >
          <StatusBadge status={project.status} />
          <span className="text-xs text-muted">{project.year}</span>
          <span
            className="text-sm text-mid opacity-0 translate-x-[-4px] translate-y-[4px]
                       transition-[opacity,transform] duration-200
                       group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}
