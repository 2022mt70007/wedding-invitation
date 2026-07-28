type NilavilakkuProps = {
  className?: string;
};

/** Traditional Kerala oil lamp motif */
export function Nilavilakku({ className = "" }: NilavilakkuProps) {
  return (
    <svg
      className={`text-gold ${className}`}
      width="56"
      height="64"
      viewBox="0 0 56 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M28 6c0 0-4 6-4 10 0 2.5 1.8 4 4 4s4-1.5 4-4c0-4-4-10-4-10z"
        fill="currentColor"
        opacity="0.9"
      />
      <ellipse cx="28" cy="22" rx="14" ry="4" fill="currentColor" opacity="0.55" />
      <path
        d="M16 22h24v3c0 2-2 4-5 4H21c-3 0-5-2-5-4v-3z"
        fill="currentColor"
        opacity="0.75"
      />
      <rect x="25" y="29" width="6" height="18" rx="1" fill="currentColor" opacity="0.7" />
      <path
        d="M14 50h28l-3 6H17l-3-6z"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse cx="28" cy="58" rx="16" ry="3" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

type KasavuBorderProps = {
  className?: string;
};

export function KasavuCorners({ className = "" }: KasavuBorderProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <Corner className="left-3 top-3" />
      <Corner className="right-3 top-3 rotate-90" />
      <Corner className="bottom-3 left-3 -rotate-90" />
      <Corner className="bottom-3 right-3 rotate-180" />
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute h-7 w-7 text-gold sm:h-8 sm:w-8 ${className}`}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path d="M4 18V4h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 10h8M10 4v8" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="4" cy="4" r="1.8" fill="currentColor" />
    </svg>
  );
}

type WaxSealProps = {
  initials?: string;
  className?: string;
  animate?: boolean;
};

export function WaxSeal({
  initials = "K&V",
  className = "",
  animate = false,
}: WaxSealProps) {
  return (
    <div
      className={`relative flex h-[4.75rem] w-[4.75rem] items-center justify-center sm:h-[5.5rem] sm:w-[5.5rem] ${animate ? "animate-seal-press" : ""} ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cherry via-burgundy to-burgundy-deep shadow-seal" />
      <div className="absolute inset-[4px] rounded-full border border-gold-pale/50" />
      <div className="absolute inset-[9px] rounded-full border border-gold/30" />
      <span className="relative font-script text-[1.65rem] leading-none text-gold-pale sm:text-[1.9rem]">
        {initials}
      </span>
    </div>
  );
}
