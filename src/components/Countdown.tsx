"use client";

import { useEffect, useState } from "react";
import { formatCountdown, getWeddingDate } from "@/lib/utils";

const labels = ["Days", "Hours", "Minutes", "Seconds"] as const;

export function Countdown() {
  const [parts, setParts] = useState(() =>
    formatCountdown(getWeddingDate().getTime() - Date.now()),
  );

  useEffect(() => {
    const tick = () => {
      setParts(formatCountdown(getWeddingDate().getTime() - Date.now()));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (parts.expired) {
    return (
      <p className="font-display text-2xl text-burgundy sm:text-3xl">
        The muhurtham is here
      </p>
    );
  }

  const values = [parts.days, parts.hours, parts.minutes, parts.seconds];

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
      role="timer"
      aria-live="polite"
      aria-label="Countdown to the wedding"
    >
      {values.map((value, i) => (
        <div key={labels[i]} className="flex items-center gap-3 sm:gap-5">
          <div className="flex min-w-[4.5rem] flex-col items-center sm:min-w-[5.5rem]">
            <span className="font-display text-3xl font-medium tabular-nums text-burgundy-deep sm:text-4xl md:text-5xl">
              {String(value).padStart(2, "0")}
            </span>
            <span className="mt-1 font-body text-[10px] uppercase tracking-[0.22em] text-ink-muted sm:text-xs">
              {labels[i]}
            </span>
          </div>
          {i < values.length - 1 && (
            <span
              className="mb-5 font-display text-xl text-gold-light sm:text-2xl"
              aria-hidden
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
