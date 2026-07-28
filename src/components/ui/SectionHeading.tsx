import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-body text-xs uppercase tracking-[0.28em] text-gold-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium tracking-wide text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-16 bg-gold-line ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
      {subtitle && (
        <p className="mt-5 font-body text-base leading-relaxed text-ink-soft sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({
  children,
  className = "",
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-white/50 bg-glass shadow-glass backdrop-blur-md ${className}`}
    >
      {children}
    </Tag>
  );
}

type OrnamentProps = {
  className?: string;
};

export function Ornament({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={`text-gold ${className}`}
      width="80"
      height="16"
      viewBox="0 0 80 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 8h28M52 8h28"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
      />
      <circle cx="40" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="40" cy="8" r="5" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
    </svg>
  );
}
