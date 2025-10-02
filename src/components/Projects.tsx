"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  org?: string;
  period?: string;
  highlights: string[];
  stack?: string[];
};

const PROJECTS: Project[] = [
  {
    title:
      "Comparative Analysis of Morphology-Enhanced CNNs for Robust Hyperspectral Image Classification",
    org: "Sabanci University",
    highlights: [
      "Compared standard CNNs vs. morphology-enhanced CNNs on the University of Pavia hyperspectral dataset",
      "Performed cross-domain evaluation to measure robustness and generalization",
      "Emphasized domain generalization for distribution shift",
    ],
    stack: ["Machine Learning", "Neural Networks", "Convolutional Neural Network (CNN)", "Mathematical Morphology", "Image Classification", "Domain Generalization"],
  },
  {
    title: "Privacy-Preserving Intrusion Detection System",
    org: "Ericsson R&D",
    highlights: [
      "Implemented a Federated Learning setup for intrusion detection in IoT Systems",
      "Used the Edge-IoT dataset",
      "Integrated Homomorphic Encryption into the FL pipeline for data privacy",
    ],
    stack: ["Machine Learning", "Federated Learning", "Homomorphic Encryption", "Data Privacy", "Secure Communication"],
  },
  {
    title:
      "FASIL: Challenge-based Framework for Robustness-friendly & Privacy-preserving Federated Learning",
    org: "Ericsson R&D",
    highlights: [
      "Employed privacy-preserving communication between clients and servers in FL",
      "Utilized TenSEAL-based homomorphic encryption",
      "Evaluated the setup against DLG (Deep Leakage from Gradients) and label-flipping attacks",
      "Patent pending with the Ericsson R&D team",
    ],
    stack: ["Federated Learning", "TenSEAL", "HE", "Security", "Data Privacy", "Secure Communication"],
  },
  {
    title:
      "Penetration Testing for a Web-Based News Platform",
    highlights: [
      "Designed a simple web-based news platform with PHP and HTML",
      "Employed RSS feed integration",
      "Applied Penetration Testing for vulnerabilities such as injections, path traversal, data upload of dangerous type etc.",
      "Utilized Static code analysis with SonarCube to find & fix vulnerabilities",
      "Patched vulnerabilities for maximum protection",
      
    ],
    stack: ["HTML", "PHP", "Penetration Testing", "Static Code Analysis", "SonarCube", "Patching Vulnerabilities"],
  },
  {
    title: "MUSICEE – Fullstack Music Streaming Platform",
    highlights: [
      "Finished multi-platform streaming app (web + mobile)",
      "Backend with Python; MongoDB as primary DB; CI via CircleCI",
      "Frontend with Next.js, Tailwind CSS, React",
      "Mobile app with Flutter & Android Studio",
      "Agile tracked via Jira & GitHub",
    ],
    stack: ["Agile", "Python", "MongoDB", "CircleCI", "Next.js", "Tailwind", "React", "Flutter"],
  },
  {
    title:
      "TutorDesk – Weekly Planning & Financial Management for Private Tutors",
    org: "Ongoing",
      highlights: [
      "Finalized fullstack mobile app for Android & iOS with Flutter",
      "Employed Firebase Auth + Cloud Firestore for auth & data",
    ],
    stack: ["Flutter", "Firebase Auth", "Cloud Firestore", "Mobile"],
  },
  {
    title: "Web Application Testing & Quality Assurance",
    highlights: [
      "Designed test scenarios per website structure",
      "Utilized Python + Selenium automation for presence & functionality checks",
      "End-to-end workflows to guarantee critical paths",
      "Caught broken links, missing elements, malfunctioning features",
    ],
    stack: ["Python", "Selenium", "E2E", "QA"],
  },
  {
    "title": "Rock - Paper - Scissors Game",
    "highlights": [
      "Developed a fully functional Rock-Paper-Scissors game using C#",
      "GUI is implemented with C#",
      "Implemented user input handling and player queue logic",
      "Included validation for inputs and game rules enforcement",
      "Used loop structures to allow multiple rounds with score tracking"
    ],
    "stack": ["C#", ".NET", "Game Logic"]
  },

  {
    title: "Visual Representation and Numerical Analysis of the Femicide rates in Turkey",
    highlights: [
      "Developed a Python program utilizing datasets retrieved from KAGGLE, and TÜİK website via web scraping.",
      "Cleaned and manipulated the datasets to achieve the desired format and content.",
      "Utilized external libraries including pandas, numpy, matplotlib, seaborn, and beautifulsoup for data processing and visualization.",
      "Represented the results visually using the aforementioned libraries to enhance comprehension and insight.",
    ],
    stack: ["Python", "Data Processing", "Data Visualization"],
  },
  {
    title: "Elevator Program",
    highlights: [
      "Implemented an elevator program with Verilog.",
      
    ],
    stack: ["Verilog", "Digital System Design"],
  },

];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white/80">
          Projects
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--color-orange-500)]">
          Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-white">
                {p.title}
                {p.org ? (
                  <span className="ml-2 text-white/70 font-semibold">• {p.org}</span>
                ) : null}
              </h3>
              {p.period ? (
                <p className="mt-1 text-xs text-white/60">{p.period}</p>
              ) : null}

              <ul className="mt-4 space-y-2 text-white/85 text-sm leading-relaxed">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-orange-600)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {p.stack?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
