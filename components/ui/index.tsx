import { cn } from "@/lib/utils";

// ── SectionLabel ──────────────────────────────────────────────────────────────
interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-orange",
        "text-xs font-medium tracking-[0.12em] uppercase mb-3",
        "before:block before:w-5 before:h-px before:bg-orange",
        className
      )}
    >
      {children}
    </div>
  );
}

// ── SectionTitle ──────────────────────────────────────────────────────────────
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-serif text-[clamp(1.9rem,3.5vw,2.9rem)]",
        "leading-[1.22] tracking-tight mb-4",
        className
      )}
    >
      {children}
    </Tag>
  );
}

// ── SectionIntro ──────────────────────────────────────────────────────────────
interface SectionIntroProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionIntro({ children, className }: SectionIntroProps) {
  return (
    <p
      className={cn(
        "text-mid text-lg font-light max-w-[560px] leading-[1.75]",
        className
      )}
    >
      {children}
    </p>
  );
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  intro,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <SectionLabel>{label}</SectionLabel>
      <SectionTitle>{title}</SectionTitle>
      {intro && <SectionIntro>{intro}</SectionIntro>}
    </div>
  );
}

// ── Divider ───────────────────────────────────────────────────────────────────
export function Divider() {
  return (
    <div className="flex items-center justify-center py-6 gap-4 px-6">
      <div className="flex-1 max-w-[200px] h-px bg-line" />
      <div className="w-1.5 h-1.5 rounded-full bg-orange opacity-50" />
      <div className="flex-1 max-w-[200px] h-px bg-line" />
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full cursor-pointer transition-[transform,box-shadow] duration-200 no-underline";

  const variants = {
    primary:
      "bg-orange text-white hover:-translate-y-0.5 hover:shadow-orange",
    ghost:
      "bg-transparent text-dark hover:text-orange after:content-['→'] gap-2 hover:gap-3",
    outline:
      "bg-white text-dark border border-line hover:-translate-y-px hover:shadow-sm",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-8 py-3.5",
    lg: "text-lg px-10 py-4",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

// ── StatusBadge ───────────────────────────────────────────────────────────────
import { STATUS_CONFIG } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "text-[0.7rem] font-semibold tracking-wide uppercase",
        "px-2.5 py-1 rounded-full",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}

// ── ThemeBadge ────────────────────────────────────────────────────────────────
import { getThemeColor } from "@/lib/utils";
import type { ThemeSlug } from "@/types";

interface ThemeBadgeProps {
  theme: ThemeSlug;
  className?: string;
}

export function ThemeBadge({ theme, className }: ThemeBadgeProps) {
  const tc = getThemeColor(theme);
  return (
    <span
      className={cn(
        "inline-flex items-center text-[0.69rem] font-semibold tracking-wide uppercase",
        "px-2.5 py-1 rounded-full border",
        className
      )}
      style={{
        color: tc.base,
        background: tc.light,
        borderColor: tc.mid,
      }}
    >
      {tc.label}
    </span>
  );
}

// ── FadeIn ────────────────────────────────────────────────────────────────────
// Server-side wrapper — client animation handled via CSS + IntersectionObserver
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export function FadeIn({ children, className, delay }: FadeInProps) {
  return (
    <div
      className={cn("fade-up", className)}
      data-fade-delay={delay}
      // JS in FadeInObserver will add fade-up-visible
    >
      {children}
    </div>
  );
}
