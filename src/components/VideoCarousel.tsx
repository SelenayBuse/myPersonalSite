"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Vid = { src: string; poster?: string; label: string };
const VIDEOS: Vid[] = [
  { src: "/videos/grad.mp4", poster: "/videos/grad.jpg", label: "Graduation" },
  { src: "/videos/surf.mp4", poster: "/videos/surf.jpg", label: "Surf" },
];

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const current = VIDEOS[index];

  return (
    <div className="w-full md:w-[42vw] lg:w-[38vw] max-w-2xl">
      {/* mobile: 16/9; md+: sabit yükseklikler (masaüstü tasarımın) */}
      <div className="
        relative overflow-hidden rounded-3xl shadow-2xl
        aspect-[16/9] h-auto
        md:aspect-auto md:h-[420px]
        lg:h-[480px]
      ">
        <AnimatePresence mode="wait">
          <motion.video
            key={current.src}
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay muted loop playsInline preload="metadata"
            poster={current.poster}
            initial={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <source src={current.src} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        {VIDEOS.map((v, i) => (
          <button key={v.src} onClick={() => setIndex(i)} aria-label={`Show ${v.label} video`}>
            <span className={i === index
              ? "block w-3.5 h-3.5 rounded-full bg-[var(--color-orange-600)] shadow-[0_0_12px_rgba(255,125,0,0.7)] transition-all"
              : "block w-3 h-3 rounded-full bg-white/70 hover:bg-white transition-all"} />
          </button>
        ))}
      </div>
    </div>
  );
}
