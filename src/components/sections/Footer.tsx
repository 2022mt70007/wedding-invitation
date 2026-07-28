import { wedding } from "@/lib/wedding";
import { Ornament } from "@/components/ui/SectionHeading";

export function Footer() {
  const year = new Date().getFullYear();
  const { couple } = wedding;

  return (
    <footer className="border-t border-gold/20 px-6 py-14 text-center">
      <p className="font-display text-3xl text-ink">
        {couple.partner1}{" "}
        <span className="text-gold">&</span> {couple.partner2}
      </p>
      <Ornament className="mx-auto mt-4" />
      <p className="mt-5 font-body text-sm text-ink-muted">{couple.tagline}</p>
      <p className="mt-8 font-body text-xs tracking-wide text-ink-faint">
        © {year} · Made with love for {couple.monogram}
      </p>
    </footer>
  );
}
