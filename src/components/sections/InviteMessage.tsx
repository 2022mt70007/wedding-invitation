import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";

export function InviteMessage() {
  const { invite, couple } = wedding;

  return (
    <section id="invite" className="relative px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-wash opacity-60" aria-hidden />
      <FadeIn className="relative mx-auto max-w-2xl">
        <GlassCard className="px-8 py-12 sm:px-14 sm:py-16">
          <p className="text-center font-body text-xs uppercase tracking-[0.28em] text-gold-deep">
            The Invitation
          </p>
          <h2 className="mt-4 text-center font-display text-3xl text-ink sm:text-4xl">
            {invite.greeting}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold-line" aria-hidden />
          <p className="mt-8 text-center font-body text-base leading-[1.85] text-ink-soft sm:text-lg">
            {invite.message}
          </p>
          <p className="mt-10 text-center font-body text-sm italic text-ink-muted">
            {invite.closing}
          </p>
          <p className="mt-2 text-center font-display text-2xl text-gold-deep">
            {invite.signedBy || `${couple.partner1} & ${couple.partner2}`}
          </p>
        </GlassCard>
      </FadeIn>
    </section>
  );
}
