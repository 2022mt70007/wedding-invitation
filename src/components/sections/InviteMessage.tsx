import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard, Ornament } from "@/components/ui/SectionHeading";
import { RoyalCorners } from "@/components/ui/RoyalExtras";
import { wedding } from "@/lib/wedding";

export function InviteMessage() {
  const { invite, couple } = wedding;

  return (
    <section id="invite" className="relative overflow-hidden px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-wash opacity-80" aria-hidden />
      <FadeIn className="relative z-10 mx-auto max-w-2xl">
        <GlassCard className="relative overflow-hidden px-8 py-12 sm:px-14 sm:py-16">
          <RoyalCorners />
          <p className="relative text-center font-body text-xs uppercase tracking-[0.28em] text-gold-light">
            The Invitation
          </p>
          <h2 className="relative mt-4 text-center font-display text-3xl text-gold-pale sm:text-4xl">
            {invite.greeting}
          </h2>
          <Ornament className="relative mx-auto mt-5" />
          <p className="relative mt-8 text-center font-body text-base leading-[1.9] text-ink-soft sm:text-lg">
            {invite.message}
          </p>
          <p className="relative mt-10 text-center font-body text-sm italic text-ink-muted">
            {invite.closing}
          </p>
          <p className="relative mt-2 text-center font-script text-3xl text-gold-light sm:text-4xl">
            {invite.signedBy || `${couple.partner1} & ${couple.partner2}`}
          </p>
        </GlassCard>
      </FadeIn>
    </section>
  );
}
