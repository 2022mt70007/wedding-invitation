import { wedding } from "@/lib/wedding";
import { Ornament } from "@/components/ui/SectionHeading";
import { WaxSeal } from "@/components/ui/RoyalExtras";

export function Footer() {
  const year = new Date().getFullYear();
  const { couple } = wedding;

  return (
    <footer className="relative overflow-hidden border-t border-gold/25 bg-gradient-to-b from-ivory to-burgundy-mist/40 px-6 py-16 text-center">
      <div className="relative z-10 mx-auto flex flex-col items-center">
        <WaxSeal initials="K&V" className="mb-6 scale-90" />
        <p className="font-display text-3xl text-burgundy-deep sm:text-4xl">
          {couple.partner1}{" "}
          <span className="font-script text-[0.7em] text-gold-deep">&</span>{" "}
          {couple.partner2}
        </p>
        <Ornament className="mx-auto mt-4" />
        <p className="mt-5 font-body text-sm italic text-ink-muted">
          {couple.tagline}
        </p>
        <p className="mt-8 font-body text-xs tracking-wide text-ink-faint">
          © {year} · Sealed with love for {couple.monogram}
        </p>
      </div>
    </footer>
  );
}
