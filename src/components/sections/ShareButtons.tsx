"use client";

import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";
import {
  buildFacebookShareUrl,
  buildWhatsAppShareUrl,
} from "@/lib/utils";

const shareLinks = [
  {
    name: "WhatsApp",
    href: buildWhatsAppShareUrl(wedding.share.text, wedding.share.url),
    icon: MessageCircle,
  },
  {
    name: "Facebook",
    href: buildFacebookShareUrl(wedding.share.url),
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: wedding.share.instagramUrl,
    icon: Instagram,
  },
] as const;

export function ShareButtons() {
  return (
    <section id="share" className="relative overflow-hidden px-6 py-16 sm:py-20">
      <FadeIn className="relative z-10 mx-auto max-w-xl text-center">
        <SectionHeading
          eyebrow="Spread the joy"
          title="Share the Invite"
          subtitle="Send this invitation to friends and family."
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {shareLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${name}`}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-burgundy-rich text-gold-pale shadow-soft backdrop-blur-sm transition hover:border-gold hover:bg-burgundy hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
