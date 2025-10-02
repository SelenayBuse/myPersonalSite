"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm">
      <nav className="relative mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* Left: Logo inside orange pill */}
        <Link
          href="/"
          className="px-4 py-2 rounded-full bg-[var(--color-orange-500)] text-white font-bold text-sm shadow hover:bg-[var(--color-orange-600)] transition"
        >
          Selenay.dev
        </Link>

        {/* Center: All nav links inside one pill */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full bg-white/30 border border-white/20 shadow-sm text-sm">
          <Link
            href="#about"
            className="px-3 py-1.5 rounded-full text-white/90 hover:text-[var(--color-purple-900)] transition"
          >
            About Me
          </Link>
          <Link
            href="#technologies"
            className="px-3 py-1.5 rounded-full text-white/90 hover:text-[var(--color-purple-900)] transition"
          >
            Technologies
          </Link>
          <Link
            href="#projects"
            className="px-3 py-1.5 rounded-full text-white/90 hover:text-[var(--color-purple-900)] transition"
          >
            My Projects
          </Link>
          <Link
            href="#contact"
            className="px-3 py-1.5 rounded-full text-white/90 hover:text-[var(--color-purple-900)] transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
