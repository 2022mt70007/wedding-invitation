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
        <p className="mb-3 font-body text-xs uppercase tracking-[0.28em] text-gold-light">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium tracking-wide text-gold-pale sm:text-4xl md:text-5xl">
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
    <Tag className={`royal-card ${className}`}>{children}</Tag>
  );
}

type OrnamentProps = {
  className?: string;
};

export function Ornament({ className = "" }: OrnamentProps) {
  return (
    <svg
      className={`text-gold ${className}`}
      width="120"
      height="20"
      viewBox="0 0 120 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10h32M84 10h32"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <path
        d="M48 10c4-6 8-6 12 0s8 6 12 0"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.7"
      />
      <circle cx="60" cy="10" r="2.2" fill="currentColor" opacity="0.9" />
      <circle
        cx="60"
        cy="10"
        r="5.5"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.4"
      />
    </svg>
  );
}
