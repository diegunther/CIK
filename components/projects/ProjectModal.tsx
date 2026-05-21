"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { cn, getThemeColor, STATUS_CONFIG, formatList } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const isOpen = !!project;

  // Keyboard trap & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  if (!project) return null;

  const tc = getThemeColor(project.theme);
  const statusCfg = STATUS_CONFIG[project.status];

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6",
        "bg-[rgba(20,20,20,0.55)] backdrop-blur-sm",
        "transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={cn(
          "bg-white rounded-2xl max-w-[580px] w-full max-h-[88vh] overflow-y-auto",
          "relative shadow-modal",
          "transition-[transform,opacity] duration-300",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-[0.97] opacity-0"
        )}
      >
        {/* Theme colour bar */}
        <div
          className="h-[5px] rounded-t-2xl"
          style={{ background: tc.base }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className={cn(
            "absolute top-4 right-4 w-8 h-8 rounded-full",
            "bg-light flex items-center justify-center text-mid",
            "hover:bg-dark hover:text-white transition-colors duration-200"
          )}
        >
          <X size={15} />
        </button>

        <div className="p-8">
          {/* Theme badge */}
          <span
            className="inline-flex items-center text-[0.69rem] font-semibold
                       tracking-wide uppercase px-2.5 py-1 rounded-full border mb-4"
            style={{
              color: tc.base,
              background: tc.light,
              borderColor: tc.mid,
            }}
          >
            {tc.label}
          </span>

          <h2
            id="modal-title"
            className="font-serif text-[1.7rem] leading-snug tracking-tight mb-3"
          >
            {project.title}
          </h2>

          {/* Status + year */}
          <div className="flex gap-3 flex-wrap mb-5 items-center">
            <span
              className={cn(
                "text-[0.7rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full",
                statusCfg.className
              )}
            >
              {statusCfg.label}
            </span>
            <span className="text-sm text-muted">{project.year}</span>
          </div>

          <p className="text-[0.95rem] text-mid font-light leading-[1.75] mb-6">
            {project.fullDescription}
          </p>

          {/* Detail rows */}
          <div className="border-t border-line pt-5 flex flex-col gap-4">
            <DetailRow
              label="Researchers"
              value={formatList(project.researchers)}
            />
            <DetailRow
              label="Partners"
              value={formatList(project.partners)}
            />
            <DetailRow
              label="Methods"
              value={formatList(project.methods)}
            />
            {project.fundingBody && (
              <DetailRow label="Funding" value={project.fundingBody} />
            )}
          </div>

          {/* Actions */}
          <div className="mt-7 flex gap-3 flex-wrap">
            {project.externalLink ? (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-medium text-white no-underline
                           transition-[transform,box-shadow] duration-200
                           hover:-translate-y-px hover:shadow-md"
                style={{ background: tc.base, borderColor: tc.base }}
              >
                Visit project site ↗
              </a>
            ) : (
              <a
                href="#contact"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-white no-underline
                           transition-[transform,box-shadow] duration-200
                           hover:-translate-y-px hover:shadow-md"
                style={{ background: tc.base }}
              >
                Get in touch →
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-dark bg-white
                         border border-line cursor-pointer
                         transition-[transform,box-shadow] duration-200
                         hover:-translate-y-px hover:shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-mid min-w-[110px] pt-0.5 flex-shrink-0">
        {label}
      </span>
      <span className="text-sm text-dark font-light leading-relaxed">{value}</span>
    </div>
  );
}
