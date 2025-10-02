"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMail, HiCheck } from "react-icons/hi";
import { HiOutlineDocumentText, HiOutlineArrowDownTray } from "react-icons/hi2";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  // 🔁 Kendi bilgilerin:
  const EMAIL = "selenaybuse09@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/selenaybatibay";
  const GITHUB = "https://github.com/SelenayBuse";
  // 👉 CV dosyanı public altına koy: public/cv/Selenay-Buse-Batibay-CV.pdf
  const CV_PATH = "/CV.pdf";

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  };

  // Kart verileri
  const cards = [
    {
      label: "Email",
      href: `mailto:${EMAIL}`,
      subtitle: EMAIL,
      icon: <HiOutlineMail size={22} />,
      action: (
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/85 hover:bg-white/15 transition"
          aria-label="Copy email"
        >
          {copied ? <HiCheck size={16} /> : null}
          {copied ? "Copied" : "Copy"}
        </button>
      ),
    },
    {
      label: "LinkedIn",
      href: LINKEDIN,
      subtitle: "Connect on LinkedIn",
      icon: <SiLinkedin size={20} className="text-[#0A66C2]" />,
    },
    {
      label: "GitHub",
      href: GITHUB,
      subtitle: "See my code",
      icon: <SiGithub size={20} />,
    },
    // ⬇️ CV kartı (özel: card içinde Preview + Download)
    {
      label: "CV",
      href: CV_PATH,
      subtitle: "Preview & download (PDF)",
      icon: <HiOutlineDocumentText size={22} />,
      isCv: true,
    },
  ] as const;

  return (
    <section id="contact" className="scroll-mt-28 py-20 md:py-28 bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-6">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white/80">
          Contact Me
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--color-orange-500)]">
          Contact
        </h2>

        {/* Kartlar */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              {/* CV kartı: Link yerine içeride iki ayrı aksiyon */}
              {("isCv" in c && c.isCv) ? (
                <div className="group flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white/15 transition">
                    {c.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-white">{c.label}</h3>
                      <div className="flex items-center gap-2">
                        <Link
                          href={CV_PATH}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/85 hover:bg-white/15 transition"
                          title="Preview my CV"
                        >
                          <HiOutlineDocumentText size={16} />
                          Preview
                        </Link>
                        <a
                          href={CV_PATH}
                          download
                          className="inline-flex items-center justify-center rounded-full bg-white/10 p-1.5 text-white/85 hover:bg-white/15 transition"
                          title="Download CV"
                          aria-label="Download CV"
                        >
                          <HiOutlineArrowDownTray size={16} />
                        </a>
                      </div>
                    </div>
                    <p className="mt-1 truncate text-sm text-white/75">{c.subtitle}</p>
                  </div>
                </div>
              ) : (
                // Diğer kartlar: tamamı tıklanabilir Link
                <Link
                  href={c.href}
                  target={c.label === "Email" ? undefined : "_blank"}
                  rel={c.label === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex items-start gap-4"
                  aria-label={c.label}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white/15 transition">
                    {c.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-white">{c.label}</h3>
                      {c.label === "Email" ? c.action : null}
                    </div>
                    <p className="mt-1 truncate text-sm text-white/75">{c.subtitle}</p>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Alt sosyal satırı + CV aksiyonları (büyük butonlar) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-orange-600)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-orange-700)] transition"
          >
            <HiOutlineMail size={18} /> Email Me
          </Link>

          <Link
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition"
          >
            <SiLinkedin size={18} /> LinkedIn
          </Link>

          <Link
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition"
          >
            <SiGithub size={18} /> GitHub
          </Link>

          {/* Preview CV */}
          <Link
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition"
            title="Preview my CV"
          >
            <HiOutlineDocumentText size={18} /> Preview CV
          </Link>

          {/* Download CV */}
          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition"
            title="Download CV"
          >
            <HiOutlineArrowDownTray size={18} /> Download
          </a>
        </div>
      </div>
    </section>
  );
}
