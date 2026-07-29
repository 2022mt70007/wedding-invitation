import Image from "next/image";
import { wedding } from "@/lib/wedding";
import { Ornament } from "@/components/ui/SectionHeading";

export function Footer() {
  const { couple } = wedding;

  return (
    <footer className="border-t border-gold/35 bg-gradient-to-b from-ivory to-temple-mist/60 px-6 py-14 text-center">
      <p className="font-display text-3xl text-ink">
        {couple.partner1}{" "}
        <span className="text-gold">&</span> {couple.partner2}
      </p>
      <Ornament className="mx-auto mt-4" />
      <p className="mt-5 font-body text-sm text-ink-muted">{couple.tagline}</p>

      <div className="relative mx-auto mt-10 h-28 w-40 sm:h-32 sm:w-44">
        <Image
          src="/images/cover/kv-logo-dark.png"
          alt={`${couple.partner1} & ${couple.partner2} monogram`}
          fill
          sizes="176px"
          className="object-contain opacity-90"
        />
      </div>
    </footer>
  );
}
