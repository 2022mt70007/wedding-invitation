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
        <p className="mb-3 font-body text-xs uppercase tracking-[0.28em] text-temple">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium tracking-wide text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        aria-hidden
      >
        <span className="h-px w-8 bg-gold-line" />
        <span className="h-1.5 w-1.5 rotate-45 border border-gold bg-gold/40" />
        <span className="h-px w-8 bg-gold-line" />
      </div>
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
  return <Tag className={`temple-card ${className}`}>{children}</Tag>;
}

type OrnamentProps = {
  className?: string;
};

/** Geometric temple / kolam-inspired divider */
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
      <path d="M6 10h34M80 10h34" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path
        d="M52 10 L60 4 L68 10 L60 16 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <circle cx="60" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}
