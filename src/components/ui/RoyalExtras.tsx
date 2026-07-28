type WaxSealProps = {
  initials?: string;
  className?: string;
  animate?: boolean;
};

/** Refined garnet wax seal */
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
      <div className="absolute inset-[4px] rounded-full border border-gold-pale/45" />
      <div className="absolute inset-[9px] rounded-full border border-gold/25" />
      <span className="relative font-script text-[1.65rem] leading-none text-gold-pale sm:text-[1.9rem]">
        {initials}
      </span>
    </div>
  );
}

type RoyalCornersProps = {
  className?: string;
};

export function RoyalCorners({ className = "" }: RoyalCornersProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <Corner className="left-4 top-4" />
      <Corner className="right-4 top-4 rotate-90" />
      <Corner className="bottom-4 left-4 -rotate-90" />
      <Corner className="bottom-4 right-4 rotate-180" />
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute h-6 w-6 text-gold/80 sm:h-7 sm:w-7 ${className}`}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M3 16V3h13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="3" cy="3" r="1.6" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
