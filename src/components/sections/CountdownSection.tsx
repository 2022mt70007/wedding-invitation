import { Countdown } from "@/components/Countdown";
import { FadeIn } from "@/components/ui/FadeIn";
import { Ornament } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";

export function CountdownSection() {
  return (
    <section
      id="countdown"
      className="relative bg-section-glow px-6 py-20 sm:py-28"
    >
      <FadeIn className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="font-body text-xs uppercase tracking-[0.28em] text-burgundy">
          Counting down to muhurtham
        </p>
        <h2 className="mt-3 font-display text-3xl text-burgundy-deep sm:text-4xl">
          Until we tie the knot
        </h2>
        <Ornament className="mt-5" />
        <div className="mt-10">
          <Countdown />
        </div>
        <p className="mt-8 font-body text-sm text-ink-muted">
          {wedding.date.display} · {wedding.date.time}
        </p>
      </FadeIn>
    </section>
  );
}
