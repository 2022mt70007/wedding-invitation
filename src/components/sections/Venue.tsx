import {
  MapPin,
  Navigation,
  Calendar,
  Clock,
  Building2,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading, GlassCard } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";

export function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-section-glow" aria-hidden />
      <FadeIn className="relative z-10">
        <SectionHeading
          eyebrow="Where to find us"
          title="The Venues"
          subtitle="Each celebration awaits you at its own beautiful setting."
        />
      </FadeIn>

      <Stagger className="relative z-10 mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {wedding.events.map((event) => (
          <StaggerItem key={event.id}>
            <GlassCard className="flex h-full flex-col px-8 py-11 text-center sm:px-10">
              <div className="icon-orb mx-auto h-16 w-16">
                <MapPin className="h-6 w-6" strokeWidth={1.4} />
              </div>

              <p className="mt-5 font-body text-[10px] uppercase tracking-[0.28em] text-gold-light">
                {event.title}
              </p>
              <h3 className="mt-2 font-display text-2xl text-gold-pale sm:text-3xl">
                {event.venue}
              </h3>
              <div className="mx-auto mt-4 h-px w-12 bg-gold-line" aria-hidden />

              <p className="mx-auto mt-6 flex max-w-xs items-start justify-center gap-2 font-body text-sm leading-relaxed text-ink-soft">
                <Building2
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  strokeWidth={1.5}
                />
                <span className="text-left">{event.address}</span>
              </p>

              <div className="mt-6 space-y-2.5 font-body text-sm text-ink-muted">
                <p className="inline-flex items-center justify-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-gold-light" strokeWidth={1.5} />
                  {event.date}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-gold-light" strokeWidth={1.5} />
                  {event.time}
                </p>
              </div>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map mt-8"
              >
                <Navigation className="h-3.5 w-3.5" strokeWidth={1.5} />
                Open in Google Maps
              </a>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
