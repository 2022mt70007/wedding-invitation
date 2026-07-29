"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Pause } from "lucide-react";
import { wedding } from "@/lib/wedding";
import { Ornament } from "@/components/ui/SectionHeading";

type MusicContextValue = {
  playing: boolean;
  available: boolean;
  opened: boolean;
  openInvitation: () => Promise<void>;
  toggle: () => Promise<void>;
};

const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within MusicProvider");
  return ctx;
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    // MP4 audio works via <audio>; fall back gracefully if codecs differ
    const audio = document.createElement("audio");
    audio.src = wedding.music.src;
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.4;
    audioRef.current = audio;

    const onReady = () => setAvailable(true);
    const onError = () => setAvailable(false);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    const stopCompletely = () => {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    };

    /** Stop when the tab/window is closing or navigating away */
    const onPageHide = () => stopCompletely();
    const onBeforeUnload = () => stopCompletely();

    audio.addEventListener("canplaythrough", onReady);
    audio.addEventListener("error", onError);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("beforeunload", onBeforeUnload);
    audio.load();

    return () => {
      stopCompletely();
      audio.removeAttribute("src");
      audio.load();
      audio.removeEventListener("canplaythrough", onReady);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("beforeunload", onBeforeUnload);
      audioRef.current = null;
    };
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, []);

  const openInvitation = useCallback(async () => {
    setOpened(true);
    document.body.style.overflow = "";
    await play();
  }, [play]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }
    await play();
  }, [play]);

  useEffect(() => {
    if (!opened) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [opened]);

  const value = useMemo(
    () => ({ playing, available, opened, openInvitation, toggle }),
    [playing, available, opened, openInvitation, toggle],
  );

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
}

/** Soft floral line-art for invitation-card corners */
function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 118C18 88 36 62 62 48C78 38 96 28 122 22"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="M62 48C56 68 64 88 78 98"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M48 72C36 78 28 92 26 108"
        stroke="currentColor"
        strokeWidth="0.95"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M62 38c-6-2-10 2-11 8c-1 6 3 10 9 9c6-1 10-6 9-11c-1-4-4-7-7-6z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.9"
      />
      <circle cx="62" cy="44" r="1.4" fill="currentColor" opacity="0.75" />
      <path
        d="M88 34c4-8 12-10 16-6c3 4 0 12-8 14c-4 1-8-2-8-8z"
        stroke="currentColor"
        strokeWidth="0.95"
        opacity="0.85"
      />
      <path
        d="M42 58c-6-4-14-2-16 4c-2 6 4 12 12 11c5-1 8-6 4-15z"
        stroke="currentColor"
        strokeWidth="0.95"
        opacity="0.8"
      />
    </svg>
  );
}

export function WelcomeGate() {
  const { opened, openInvitation } = useMusic();
  const { couple } = wedding;

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Maroon linen like the invitation card */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#5B0F0F",
              backgroundImage: `
                radial-gradient(ellipse 80% 45% at 50% 10%, rgba(123,30,30,0.55), transparent 60%),
                repeating-linear-gradient(0deg, rgba(255,249,242,0.028) 0 1px, transparent 1px 3px),
                repeating-linear-gradient(90deg, rgba(255,249,242,0.02) 0 1px, transparent 1px 4px)
              `,
            }}
            aria-hidden
          />

          <FloralCorner className="pointer-events-none absolute right-2 top-2 h-24 w-24 -scale-x-100 text-[#E8D5B0]/50 sm:right-5 sm:top-5 sm:h-32 sm:w-32" />
          <FloralCorner className="pointer-events-none absolute bottom-2 left-2 h-24 w-24 rotate-180 -scale-x-100 text-[#E8D5B0]/50 sm:bottom-5 sm:left-5 sm:h-32 sm:w-32" />

          <div className="relative z-10 flex h-full flex-col items-center px-6 pb-8 pt-4 sm:pt-6">
            {/* Legs sticker — center top */}
            <motion.div
              className="pointer-events-none relative h-[28vh] w-full max-w-sm sm:h-[32vh] sm:max-w-md"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
            >
              <Image
                src="/images/cover/couple-feet.png"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 85vw, 420px"
                className="object-contain object-top drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
              />
            </motion.div>

            {/* Text + stamp shifted down below the sticker */}
            <motion.div
              className="mt-1 flex flex-1 flex-col items-center justify-start text-center sm:mt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.35em] text-gold-pale sm:text-xs">
                Wedding Invitation
              </p>
              <h1 className="mt-4 font-script text-5xl font-normal tracking-normal text-ivory sm:mt-5 sm:text-6xl">
                {couple.partner1}
                <span className="mx-3 text-gold-light">&</span>
                {couple.partner2}
              </h1>
              <Ornament className="mt-5 text-gold-light" />

              <motion.button
                type="button"
                onClick={() => void openInvitation()}
                aria-label="Open Invitation"
                className="group relative mt-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-pale sm:mt-8"
                whileHover={{ scale: 1.04, rotate: -1.5 }}
                whileTap={{ scale: 0.94, rotate: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <span
                  className="pointer-events-none absolute inset-[-10%] rounded-full bg-gold/10 opacity-0 blur-md transition group-hover:opacity-100"
                  aria-hidden
                />
                <span className="relative mx-auto block h-32 w-48 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] sm:h-36 sm:w-52">
                  <Image
                    src="/images/cover/kv-logo.png"
                    alt={`${couple.partner1} & ${couple.partner2} seal`}
                    fill
                    priority
                    sizes="208px"
                    className="object-contain"
                  />
                </span>
                <span className="mt-3 block font-body text-[10px] uppercase tracking-[0.28em] text-gold-pale/80 transition group-hover:text-gold-pale">
                  Open Invitation
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MusicToggle() {
  const { playing, available, opened, toggle } = useMusic();

  if (!opened || (!available && !playing)) return null;

  return (
    <button
      type="button"
      onClick={() => void toggle()}
      aria-label={playing ? "Pause music" : wedding.music.label}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-temple text-gold-pale shadow-temple backdrop-blur-md transition hover:bg-temple-deep hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      {playing ? (
        <Pause className="h-5 w-5" strokeWidth={1.5} />
      ) : (
        <Music2 className="h-5 w-5" strokeWidth={1.5} />
      )}
    </button>
  );
}
