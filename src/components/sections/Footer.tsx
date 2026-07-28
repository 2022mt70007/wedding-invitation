import { wedding } from "@/lib/wedding";
import { Ornament } from "@/components/ui/SectionHeading";
import { Nilavilakku, WaxSeal } from "@/components/ui/KeralaMotifs";

export function Footer() {
  const year = new Date().getFullYear();
  const { couple } = wedding;

  return (
    <footer className="relative overflow-hidden border-t border-gold/35 bg-gradient-to-b from-ivory to-burgundy-mist px-6 py-16 text-center">
      <div className="mx-auto flex flex-col items-center">
        <Nilavilakku className="mb-4 text-gold" />
        <WaxSeal initials="K&V" className="mb-5 scale-90" />
        <p className="font-display text-3xl text-burgundy-deep sm:text-4xl">
          {couple.partner1}{" "}
          <span className="font-script text-[0.65em] text-gold-deep">weds</span>{" "}
          {couple.partner2}
        </p>
        <Ornament className="mx-auto mt-4" />
        <p className="mt-5 font-body text-sm italic text-ink-muted">
          {couple.tagline}
        </p>
        <p className="mt-8 font-body text-xs tracking-wide text-ink-faint">
          © {year} · With divine blessings · {couple.monogram}
        </p>
      </div>
    </footer>
  );
}
