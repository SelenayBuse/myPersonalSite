export default function IntroVideo() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-orange-500)]">
          Intro Video
        </h2>

        <video
          className="w-full rounded-2xl shadow-lg"
          controls
          // autoplay istiyorsan:
          // autoPlay
          // muted
          // loop
          playsInline
          preload="metadata"
          poster="/videos/intro-poster.jpg" // public/videos/intro-poster.jpg (opsiyonel)
        >
          <source src="/videos/surf_video.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        <p className="mt-3 text-white/70 text-sm">
          *İpucu:* Autoplay mobilde çalışsın istiyorsan <code>muted</code> ve{" "}
          <code>playsInline</code> gerekli.
        </p>
      </div>
    </section>
  );
}