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
          className="absolute inset-0 bg-royal-veil"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(91,15,15,0.35)_100%)]"
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
          className="mt-6 font-script text-[clamp(3.25rem,13vw,7.5rem)] font-normal leading-[1.05] tracking-normal"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-foil block">{couple.partner1}</span>
          <span className="my-1 block font-script text-[0.45em] font-normal tracking-normal text-gold-pale">
            &
          </span>
          <span className="text-foil block">{couple.partner2}</span>
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-col items-center gap-3"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <Ornament className="text-gold-light" />
          <p className="font-body text-sm tracking-wide text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-base">
            {couple.tagline}
          </p>
          <p className="text-foil-flat mt-5 font-display text-2xl font-bold tracking-wide sm:mt-6 sm:text-3xl md:text-4xl">
            {date.display}
          </p>
          <p className="font-body text-sm text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            {date.time}
          </p>
        </motion.div>

        <motion.a
          href={hero.ctaHref}
          className="mt-10 inline-flex items-center gap-2 border border-[#A82828] bg-[#7B1E1E] px-8 py-3 font-body text-xs uppercase tracking-[0.25em] text-ivory shadow-[0_4px_16px_rgba(91,15,15,0.45)] backdrop-blur-sm transition hover:border-[#D44545] hover:bg-[#B82828] active:border-[#E05555] active:bg-[#D43535] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-pale"
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
