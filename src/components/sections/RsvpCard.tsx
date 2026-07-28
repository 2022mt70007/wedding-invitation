"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard, SectionHeading } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";
import { buildWhatsAppRsvpUrl } from "@/lib/utils";

type Attendance = "yes" | "no" | "maybe";

export function RsvpCard() {
  const { rsvp } = wedding;
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const attendanceLabel =
      attendance === "yes"
        ? "Yes, I'll be there"
        : attendance === "no"
          ? "Sorry, I can't make it"
          : "Not sure yet";

    const message = [
      rsvp.whatsappMessage,
      "",
      `Name: ${name}`,
      `Guests: ${guests}`,
      `Attendance: ${attendanceLabel}`,
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = buildWhatsAppRsvpUrl(rsvp.phone, message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="rsvp" className="relative overflow-hidden px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-section-glow" aria-hidden />
      <FadeIn className="relative z-10">
        <SectionHeading
          eyebrow="Kindly reply"
          title={rsvp.title}
          subtitle={rsvp.subtitle}
        />
      </FadeIn>

      <FadeIn delay={0.12} className="relative z-10 mx-auto mt-12 max-w-lg">
        <GlassCard className="px-7 py-10 sm:px-10">
          {sent ? (
            <div className="py-8 text-center">
              <p className="font-display text-2xl text-ink">Thank you</p>
              <p className="mt-3 font-body text-sm text-ink-soft">
                WhatsApp should open with your RSVP. We cannot wait to celebrate
                with you.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 font-body text-xs uppercase tracking-[0.2em] text-gold-deep underline-offset-4 hover:underline"
              >
                Send another reply
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Your name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field"
                  placeholder="Full name"
                  autoComplete="name"
                />
              </Field>

              <Field label="Number of guests">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="field"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </Field>

              <fieldset>
                <legend className="mb-2 font-body text-xs uppercase tracking-[0.18em] text-ink-muted">
                  Will you attend?
                </legend>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      ["yes", "Joyfully yes"],
                      ["no", "Regretfully no"],
                      ["maybe", "Perhaps"],
                    ] as const
                  ).map(([value, label]) => (
                    <label
                      key={value}
                      className={`cursor-pointer rounded-lg border px-2 py-3 text-center font-body text-[11px] transition sm:text-xs ${
                        attendance === value
                          ? "border-gold bg-gold/15 text-gold-deep"
                          : "border-ink/10 bg-white/40 text-ink-soft hover:border-gold/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={value}
                        checked={attendance === value}
                        onChange={() => setAttendance(value)}
                        className="sr-only"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field label="Message (optional)">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="field resize-none"
                  placeholder="Dietary needs, song requests…"
                />
              </Field>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3.5 font-body text-xs uppercase tracking-[0.22em] text-ivory transition hover:bg-burgundy-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
              >
                <Send className="h-4 w-4" strokeWidth={1.5} />
                Send via WhatsApp
              </button>

              <div className="flex flex-wrap items-center justify-center gap-5 pt-2 font-body text-xs text-ink-muted">
                <a
                  href={`tel:${rsvp.phone}`}
                  className="inline-flex items-center gap-1.5 transition hover:text-gold-deep"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Call
                </a>
                <a
                  href={`mailto:${rsvp.email}`}
                  className="inline-flex items-center gap-1.5 transition hover:text-gold-deep"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Email
                </a>
              </div>
            </form>
          )}
        </GlassCard>
      </FadeIn>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-body text-xs uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
