"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

const PETALS = 14;

/** Soft falling rose petals — romantic surprise, respects reduced motion */
export function RosePetals() {
  const reduce = useReducedMotion();
  const petals = useMemo(
    () =>
      Array.from({ length: PETALS }, (_, i) => ({
        id: i,
        left: `${(i * 7.3) % 100}%`,
        delay: `${(i * 0.85) % 9}s`,
        duration: `${10 + (i % 5)}s`,
        size: 10 + (i % 4) * 3,
        opacity: 0.25 + (i % 5) * 0.08,
      })),
    [],
  );

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 animate-petal-fall"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size * 1.2,
            opacity: p.opacity,
          }}
        >
          <svg viewBox="0 0 20 24" className="h-full w-full text-cherry/80">
            <path
              d="M10 2C10 2 3 8 3 14c0 4 3 8 7 8s7-4 7-8C17 8 10 2 10 2z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
