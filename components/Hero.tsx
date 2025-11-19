import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[55vh] min-h-[360px] w-full overflow-hidden">
      <Image
        src="/images/hero/sid_mountain.jpeg"  // image of header
        alt="Mountain night sky"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "10% 60%" }} //adjust position
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55" />
        <div className="absolute inset-0 flex items-start justify-start pt-24 md:pt-12">
            <div className="max-w-3xl pl-16 md:pl-36">
          <p className="text-3xl md:text-5xl font-semibold text-white drop-shadow">Hi! I’m Sid</p>
          <h1 className="mt-3 text-2xl md:text-4xl font-medium text-white/90 max-w-3xl leading-snug">
            Discovering new paths, <span className="text-white/70">creating unforgettable stories</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">See projects</Link>
            <a href="mailto:siddharth.khanna1@gmail.com" className="rounded-xl border border-white/60 text-white px-4 py-2 text-sm hover:bg-white/10">Email me</a>
            <a
              href="/files/Siddharth_Khanna_Resume.pdf"
              className="rounded-xl border border-white/60 text-white px-4 py-2 text-sm hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
