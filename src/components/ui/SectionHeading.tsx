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
        <p className="mb-3 font-body text-xs uppercase tracking-[0.28em] text-burgundy">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium tracking-wide text-burgundy-deep sm:text-4xl md:text-5xl">
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
  return <Tag className={`royal-card ${className}`}>{children}</Tag>;
}

type OrnamentProps = {
  className?: string;
};

export function Ornament({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={`text-gold ${className}`}
      width="140"
      height="22"
      viewBox="0 0 140 22"
      fill="none"
      aria-hidden
    >
      <path d="M8 11h40M92 11h40" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path
        d="M56 11c5-7 10-7 14 0s9 7 14 0"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.75"
      />
      <circle cx="70" cy="11" r="2.4" fill="currentColor" />
      <circle cx="70" cy="11" r="6" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}
