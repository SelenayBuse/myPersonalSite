"use client";
import { useState } from "react";
import {
  // Languages
  SiPython, SiC, SiCplusplus, SiSharp, SiPhp, SiJavascript, SiTypescript, SiDart, SiGnubash,
  // FE / FW
  SiReact, SiNextdotjs, SiVuedotjs, SiFlutter, SiSelenium, SiSpring, SiHtml5, SiCss3, SiTailwindcss, SiVite, SiFramer,
  // Mobile
  SiAndroidstudio, SiAndroid,
  // Sec
  SiOwasp, SiKalilinux, SiWireshark, SiCisco,
  // Cloud
  SiGooglecloud, SiAmazon, SiDocker, SiKubernetes, SiVercel,
  // ML
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiPandas, SiNumpy,
  // DB
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";
import { HiOutlineLockClosed } from "react-icons/hi";
import { GiRadarSweep } from "react-icons/gi";

type Cat = {
  id: string;
  title: string;
  emoji: string;
  items: string[];
};

const CATEGORIES: Cat[] = [
  { id: "pl",   title: "Programming Languages", emoji: "💻", items: ["Python", "C/C++/C#", "Java", "PHP", "JS/TS", "Dart", "SQL", "Bash"] },
  { id: "fw",   title: "Frameworks",            emoji: "🧩", items: ["React", "Next.js", "Vue.js", "Flutter", "Selenium", "Spring Framework", "TenSEAL"] },
  { id: "be",   title: "Backend",               emoji: "🛠️", items: ["REST", "Spring Framework", "Firebase"] },
  { id: "fe",   title: "Frontend",              emoji: "🎨", items: ["React", "Next.js", "Vue.js", "HTML", "CSS/Tailwind", "Vite", "Framer Motion"] },
  { id: "md",   title: "Mobile Development",    emoji: "📱", items: ["Java", "Dart", "Flutter", "Android SDK", "Android Studio"] },
  { id: "sec",  title: "Cybersecurity",         emoji: "🔐", items: ["OWASP", "Kali Linux", "Nmap", "Wireshark", "Cisco Packet Tracer"] },
  { id: "cloud",title: "Cloud",                 emoji: "☁️", items: ["GCP", "AWS", "Docker", "Kubernetes", "Vercel"] },
  { id: "mach", title: "Machine Learning",      emoji: "🤖", items: ["Tensorflow", "Tensorflow Federated", "PyTorch", "Keras", "scikit-learn", "XGBoost/LightGBM", "Pandas", "Numpy"] },
  { id: "db",   title: "Database",              emoji: "🗃️", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"] },
];

/** Tek bir label için uygun ikon(lar) */
function IconFor({ label, size = 16 }: { label: string; size?: number }) {
  const cls = "shrink-0";
  switch (label) {
    // --- Languages
    case "Python": return <SiPython size={size} className={cls} color="#3776AB" />;
    
    case "PHP":    return <SiPhp size={size} className={cls} color="#777BB4" />;
    case "Dart":   return <SiDart size={size} className={cls} color="#0175C2" />;
    case "SQL":    return <TbDatabase size={size} className={cls} />;
    case "Bash":   return <SiGnubash size={size} className={cls} color="#4EAA25" />;
    case "JS/TS":  return (
      <span className="flex items-center gap-1">
        <SiJavascript size={size} className={cls} color="#F7DF1E" />
        <SiTypescript size={size} className={cls} color="#3178C6" />
      </span>
    );
    case "C/C++/C#": return (
      <span className="flex items-center gap-1">
        <SiC size={size} className={cls} color="#A8B9CC" />
        <SiCplusplus size={size} className={cls} color="#00599C" />
        <SiSharp size={size} className={cls} color="#239120" />
      </span>
    );

    // --- Frameworks / FE
    case "React":            return <SiReact size={size} className={cls} color="#61DAFB" />;
    case "Next.js":          return <SiNextdotjs size={size} className={cls} />;
    case "Vue.js":           return <SiVuedotjs size={size} className={cls} color="#42B883" />;
    case "Flutter":          return <SiFlutter size={size} className={cls} color="#02569B" />;
    case "Selenium":         return <SiSelenium size={size} className={cls} color="#43B02A" />;
    case "Spring Framework": return <SiSpring size={size} className={cls} color="#6DB33F" />;
    case "TenSEAL":          return <HiOutlineLockClosed size={size} className={cls} />;
    case "HTML":             return <SiHtml5 size={size} className={cls} color="#E34F26" />;
    case "CSS/Tailwind":     return (
      <span className="flex items-center gap-1">
        <SiCss3 size={size} className={cls} color="#1572B6" />
        <SiTailwindcss size={size} className={cls} color="#38BDF8" />
      </span>
    );
    case "Vite":             return <SiVite size={size} className={cls} color="#646CFF" />;
    case "Framer Motion":    return <SiFramer size={size} className={cls} />;

    // --- Backend
    case "REST":     return <TbApi size={size} className={cls} />;
    case "Firebase": return <SiFirebase size={size} className={cls} color="#FFCA28" />;

    // --- Mobile
    case "Android SDK":    return <SiAndroid size={size} className={cls} color="#3DDC84" />;
    case "Android Studio": return <SiAndroidstudio size={size} className={cls} color="#3DDC84" />;

    // --- Security
    case "OWASP":              return <SiOwasp size={size} className={cls} />;
    case "Kali Linux":         return <SiKalilinux size={size} className={cls} color="#557C94" />;
    case "Nmap":               return <GiRadarSweep size={size} className={cls} />;
    case "Wireshark":          return <SiWireshark size={size} className={cls} color="#1679A7" />;
    case "Cisco Packet Tracer":return <SiCisco size={size} className={cls} color="#1BA0D7" />;

    // --- Cloud
    case "GCP":        return <SiGooglecloud size={size} className={cls} color="#4285F4" />;
    case "AWS":        return <SiAmazon size={size} className={cls} color="#FF9900" />;
    case "Docker":     return <SiDocker size={size} className={cls} color="#2496ED" />;
    case "Kubernetes": return <SiKubernetes size={size} className={cls} color="#326CE5" />;
    case "Vercel":     return <SiVercel size={size} className={cls} />;

    // --- ML
    case "Tensorflow":           return <SiTensorflow size={size} className={cls} color="#FF6F00" />;
    case "Tensorflow Federated": return <SiTensorflow size={size} className={cls} color="#FF6F00" />;
    case "PyTorch":              return <SiPytorch size={size} className={cls} color="#EE4C2C" />;
    case "Keras":                return <SiKeras size={size} className={cls} color="#D00000" />;
    case "scikit-learn":         return <SiScikitlearn size={size} className={cls} color="#F89939" />;
    case "Pandas":               return <SiPandas size={size} className={cls} color="#150458" />;
    case "Numpy":                return <SiNumpy size={size} className={cls} color="#013243" />;
    case "XGBoost/LightGBM":     return <HiOutlineLockClosed size={size} className={cls} />;

    // --- DB
    case "MySQL":              return <SiMysql size={size} className={cls} color="#4479A1" />;
    case "PostgreSQL":         return <SiPostgresql size={size} className={cls} color="#336791" />;
    case "MongoDB":            return <SiMongodb size={size} className={cls} color="#47A248" />;
    case "Firebase Firestore": return <SiFirebase size={size} className={cls} color="#FFCA28" />;

    default: return null;
  }
}

export default function Technologies() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="technologies" className="scroll-mt-28 py-20 md:py-28 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white/80">
          Technologies
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--color-orange-500)]">
          Technologies
        </h2>

        {/* Header row with fixed-line alignment */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-6">
          {CATEGORIES.map((cat) => {
            const isOpen = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActive(isOpen ? null : cat.id)}
                className="group select-none focus:outline-none grid grid-rows-[auto_2px_44px] justify-items-center gap-y-2"
              >
                {/* icon */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-base transition
                  ${isOpen ? "bg-[var(--color-orange-600)] text-white shadow-[0_0_16px_rgba(255,125,0,.45)]"
                           : "bg-white/10 text-white/90 group-hover:bg-white/15"}`}
                >
                  <span className="leading-none">{cat.emoji}</span>
                </div>

                {/* line */}
                <div
                  className={`h-[2px] w-full rounded-full transition
                  ${isOpen ? "bg-[var(--color-orange-600)] shadow-[0_0_14px_rgba(255,125,0,.55)]"
                           : "bg-white/25 group-hover:bg-white/40"}`}
                />

                {/* title */}
                <div
                  className={`flex items-center justify-center text-center text-[13px] font-semibold leading-snug px-1
                  ${isOpen ? "text-white" : "text-white/85 group-hover:text-white"}`}
                >
                  {cat.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanding panel */}
        <div className="relative">
          <div
            className={`transition-[max-height,opacity] duration-400 ease-out overflow-hidden
            ${active ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            {active && (
              <div
                id={`panel-${active}`}
                className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="text-white/90 text-sm font-semibold">
                  {CATEGORIES.find((c) => c.id === active)?.title}
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {(CATEGORIES.find((c) => c.id === active)?.items ?? []).map((label) => (
                    <li
                      key={label}
                      className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/85"
                    >
                      <IconFor label={label} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
