import {
  Heart,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Building2,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading, GlassCard } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";

const iconMap = {
  heart: Heart,
  sparkles: Sparkles,
} as const;

export function EventTimeline() {
  return (
    <section id="events" className="relative overflow-hidden px-6 py-20 sm:py-28">
      <FadeIn className="relative z-10">
        <SectionHeading
          eyebrow="Celebrate with us"
          title="Wedding Events"
          subtitle="Two separate celebrations — different times, different venues."
        />
      </FadeIn>

      <Stagger className="relative z-10 mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {wedding.events.map((event) => {
          const Icon = iconMap[event.icon];

          return (
            <StaggerItem key={event.id}>
              <GlassCard className="flex h-full flex-col px-8 py-10 sm:px-9">
                <div className="icon-orb mx-auto">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-center font-display text-2xl text-burgundy-deep sm:text-3xl">
                  {event.title}
                </h3>
                <div className="mx-auto mt-4 h-px w-12 bg-gold-line" aria-hidden />

                <ul className="mt-7 flex-1 space-y-3.5">
                  <li className="flex items-start gap-3 font-body text-sm text-ink-soft">
                    <Calendar
                      className="mt-0.5 h-4 w-4 shrink-0 text-burgundy"
                      strokeWidth={1.5}
                    />
                    <span>{event.date}</span>
                  </li>
                  <li className="flex items-start gap-3 font-body text-sm text-ink-soft">
                    <Clock
                      className="mt-0.5 h-4 w-4 shrink-0 text-burgundy"
                      strokeWidth={1.5}
                    />
                    <span>{event.time}</span>
                  </li>
                  <li className="flex items-start gap-3 font-body text-sm text-ink-soft">
                    <Building2
                      className="mt-0.5 h-4 w-4 shrink-0 text-burgundy"
                      strokeWidth={1.5}
                    />
                    <span>{event.venue}</span>
                  </li>
                  <li className="flex items-start gap-3 font-body text-sm text-ink-soft">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-burgundy"
                      strokeWidth={1.5}
                    />
                    <span>{event.address}</span>
                  </li>
                </ul>

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
          );
        })}
      </Stagger>
    </section>
  );
}
