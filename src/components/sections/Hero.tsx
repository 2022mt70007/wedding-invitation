"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { wedding } from "@/lib/wedding";
import { Ornament } from "@/components/ui/SectionHeading";

export function Hero() {
  const reduce = useReducedMotion();
  const { couple, date, hero } = wedding;

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ivory-soft"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(44,36,32,0.35)_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
        <motion.p
          className="font-body text-xs uppercase tracking-[0.35em] text-gold-pale sm:text-sm"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Together with their families
        </motion.p>

        <motion.h1
          className="mt-6 font-display text-[clamp(3rem,12vw,7rem)] font-medium leading-[0.95] tracking-wide text-ivory"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">{couple.partner1}</span>
          <span className="my-2 block font-display text-[0.35em] font-normal tracking-[0.4em] text-gold-light">
            &
          </span>
          <span className="block">{couple.partner2}</span>
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <Ornament className="text-gold-light" />
          <p className="font-body text-sm tracking-wide text-ivory/90 sm:text-base">
            {couple.tagline}
          </p>
          <p className="mt-2 font-display text-xl text-gold-pale sm:text-2xl">
            {date.display}
          </p>
          <p className="font-body text-sm text-ivory/70">{date.time}</p>
        </motion.div>

        <motion.a
          href={hero.ctaHref}
          className="mt-10 inline-flex items-center gap-2 border border-gold-light/60 bg-white/10 px-8 py-3 font-body text-xs uppercase tracking-[0.25em] text-ivory backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-pale"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          {hero.ctaLabel}
        </motion.a>
      </div>

      <motion.a
        href="#countdown"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-ivory/60 transition hover:text-ivory"
        aria-label="Scroll to countdown"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-7 w-7" strokeWidth={1.25} />
      </motion.a>
    </section>
  );
}
