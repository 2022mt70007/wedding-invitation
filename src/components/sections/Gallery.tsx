"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wedding } from "@/lib/wedding";

export function Gallery() {
  const photos = wedding.gallery;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, photos.length]);

  const scrollByPage = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".gallery-slide");
    const amount = slide
      ? slide.offsetWidth + 16
      : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  const dragState = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = trackRef.current;
    if (!el) return;
    dragState.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(e.pointerId);
    el.classList.add("is-dragging");
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.moved = true;
    el.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const el = trackRef.current;
    dragState.current.active = false;
    el?.classList.remove("is-dragging");
    try {
      el?.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  const onLightboxDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80 || info.velocity.x < -500) next();
    else if (info.offset.x > 80 || info.velocity.x > 500) prev();
  };

  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-28">
      <FadeIn className="relative z-10 px-6">
        <SectionHeading
          eyebrow="Our story in frames"
          title="Gallery"
          subtitle="A glimpse into the moments that brought us here."
        />
      </FadeIn>

      <FadeIn delay={0.1} className="relative z-10 mx-auto mt-14 max-w-6xl">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          disabled={!canPrev}
          aria-label="Previous photos"
          className="gallery-nav left-1 sm:left-0 sm:-translate-x-1/2"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          disabled={!canNext}
          aria-label="Next photos"
          className="gallery-nav right-1 sm:right-0 sm:translate-x-1/2"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div
          ref={trackRef}
          className="gallery-track px-4 sm:px-10"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          role="list"
          aria-label="Photo gallery"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="gallery-slide"
              role="listitem"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.04, 0.28),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                type="button"
                onClick={() => {
                  if (dragState.current.moved) return;
                  setActive(index);
                }}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label={`View ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 25vw"
                  className="object-cover transition duration-700 ease-out will-change-transform group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 font-body text-xs tracking-wide text-ivory opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-20 rounded-full border border-ivory/20 bg-ink/40 p-2.5 text-ivory/90 backdrop-blur-sm transition hover:bg-ink/60 hover:text-ivory"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-ivory/20 bg-ink/40 p-2.5 text-ivory/90 backdrop-blur-sm transition hover:bg-ink/60 hover:text-ivory sm:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-7 w-7" strokeWidth={1.25} />
            </button>

            <motion.div
              key={active}
              className="relative h-[72vh] w-full max-w-4xl touch-pan-y"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={onLightboxDragEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                sizes="90vw"
                className="pointer-events-none object-contain drop-shadow-2xl"
                priority
              />
              <p className="absolute -bottom-11 left-0 right-0 text-center font-body text-sm text-ivory/75">
                {photos[active].caption}
                <span className="ml-2 text-ivory/40">
                  {active + 1} / {photos.length}
                </span>
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-ivory/20 bg-ink/40 p-2.5 text-ivory/90 backdrop-blur-sm transition hover:bg-ink/60 hover:text-ivory sm:right-6"
              aria-label="Next photo"
            >
              <ChevronRight className="h-7 w-7" strokeWidth={1.25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
