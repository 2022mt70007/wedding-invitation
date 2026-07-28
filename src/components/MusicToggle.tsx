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
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Pause } from "lucide-react";
import { wedding } from "@/lib/wedding";
import { Ornament } from "@/components/ui/SectionHeading";
import { Nilavilakku } from "@/components/ui/KeralaMotifs";

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

    audio.addEventListener("canplaythrough", onReady);
    audio.addEventListener("error", onError);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.load();

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", onReady);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
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

export function WelcomeGate() {
  const { opened, openInvitation } = useMusic();
  const { couple } = wedding;

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-b from-burgundy-deep via-burgundy-rich to-burgundy px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,163,90,0.22)_0%,transparent_55%)]" />
          <div className="pointer-events-none absolute inset-6 rounded-sm border-2 border-gold/30 sm:inset-10" />
          <div className="pointer-events-none absolute inset-8 rounded-sm border border-gold/20 sm:inset-12" />

          <motion.div
            className="relative z-10 flex max-w-md flex-col items-center text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Nilavilakku className="text-gold-pale" />
            <p className="mt-6 font-body text-[10px] uppercase tracking-[0.4em] text-gold-pale sm:text-xs">
              Kerala Wedding Invitation
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-wide text-ivory sm:text-5xl">
              {couple.partner1}
              <span className="mx-3 font-script text-[0.55em] text-gold-light">
                weds
              </span>
              {couple.partner2}
            </h1>
            <Ornament className="mt-6 text-gold-light" />
            <p className="mt-5 font-body text-sm italic text-ivory/70">
              Light the lamp · Begin the celebration
            </p>

            <button
              type="button"
              onClick={() => void openInvitation()}
              className="mt-10 border border-gold-light/55 bg-gold/10 px-10 py-3.5 font-body text-xs uppercase tracking-[0.28em] text-gold-pale backdrop-blur-sm transition hover:bg-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-pale"
            >
              Open Invitation
            </button>
          </motion.div>
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
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-burgundy text-gold-pale shadow-royal backdrop-blur-md transition hover:bg-burgundy-soft hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      {playing ? (
        <Pause className="h-5 w-5" strokeWidth={1.5} />
      ) : (
        <Music2 className="h-5 w-5" strokeWidth={1.5} />
      )}
    </button>
  );
}
