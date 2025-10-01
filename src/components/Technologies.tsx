"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="scroll-mt-28 py-20 md:py-28 bg-transparent"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white/80">
          Technologies
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[var(--color-orange-500)]">
          Technologies
        </h2>

        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
          <Typewriter
            words={[
              `I ranked in the top 2% in the YKS exam and was admitted to Sabancı University with a 50% scholarship.
                During my second year, I was a Learning Assistant for NS101 and NS102 courses, allowing me to assist first year engineering students.
                I was in Sabancı Women in Engineering Society (Sabancı WIE), actively planning events such as workshops, pitchdesks, and interviews.
                I was chosen for Dean's List - High Honor award for 2 semesters in a row.
                I graduated from Sabancı University with a Bachelor's in Computer Science and Engineering in 2025.
                I completed my internship in Ericsson Türkiye as a Security Researcher in Jan 2025.`
            ]}
            typeSpeed={40}   // yazma hızı
            deleteSpeed={0}  // silme yok
            delaySpeed={1500} // cümleler arası bekleme
            cursor
            cursorStyle="|"
          />
        </p>
      </div>
    </section>
  );
}
