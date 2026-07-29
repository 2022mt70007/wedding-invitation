import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading, GlassCard } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";

export function Family() {
  return (
    <section id="family" className="relative px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-wash opacity-50" aria-hidden />
      <FadeIn>
        <SectionHeading
          eyebrow="With gratitude"
          title="Our Families"
          subtitle={wedding.family.intro}
        />
      </FadeIn>

      <Stagger className="relative mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
        {wedding.family.sides.map((side) => (
          <StaggerItem key={side.title}>
            <GlassCard className="h-full px-8 py-10">
              <h3 className="text-center font-display text-2xl text-temple">
                {side.title}
              </h3>
              <div className="mx-auto mt-4 h-px w-12 bg-gold-line" aria-hidden />
              <ul className="mt-8 space-y-6">
                {side.members.map((member) => (
                  <li key={member.name} className="text-center">
                    <p className="font-display text-xl text-ink">{member.name}</p>
                    <p className="mt-1 font-body text-xs uppercase tracking-[0.18em] text-ink-muted">
                      {member.relation}
                    </p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
