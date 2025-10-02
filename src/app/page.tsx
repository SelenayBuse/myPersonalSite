"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import VideoCarousel from "@/components/VideoCarousel";
import Contact from "@/components/Contact";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main>
      <section className="relative min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="relative grid md:grid-cols-2 items-center gap-10">

            {/* HERO */}
            <motion.div
              className="justify-self-start"
              initial={{ x: "calc(50vw - 50% - 3rem)", opacity: 1 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 2 }}
              onAnimationComplete={() => setShowVideo(true)}
            >
              {/* ⬇️ ~1cm sola nudge (md ve üstü) */}
              <div className="md:-translate-x-[38px] lg:-translate-x-[44px] will-change-transform">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <Image
                    src="/profile.jpg"
                    alt="My profile photo"
                    width={220}
                    height={220}
                    className="rounded-full shadow-[0_0_40px_rgba(255,125,0,0.5)]"
                    priority
                  />

                  <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-[var(--color-orange-500)]">
                    Hi, I&apos;m Selenay 👋
                  </h1>

                  <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
                    A Passionate New-Grad Computer Engineer with a versatile skill set
                    across cybersecurity, software development, and cloud technologies. ✨
                  </p>

                  <div className="mt-8 flex gap-4">
                    <Link
                      href="#projects"
                      className="px-6 py-3 rounded-lg bg-[var(--color-orange-600)] text-white font-semibold hover:bg-[var(--color-orange-700)] transition"
                    >
                      See My Projects
                    </Link>
                    <Link
                      href="#contact"
                      className="px-6 py-3 rounded-lg border border-[var(--color-orange-600)] text-[var(--color-orange-600)] font-semibold hover:bg-[var(--color-orange-600)] hover:text-white transition"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* VIDEO */}
            <AnimatePresence>
              {showVideo && (
                <motion.div
                  className="justify-self-end"
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* ⬇️ ~1cm sağa nudge (md ve üstü) */}
                  <div className="md:translate-x-[38px] lg:translate-x-[44px] will-change-transform">
                    <VideoCarousel />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}