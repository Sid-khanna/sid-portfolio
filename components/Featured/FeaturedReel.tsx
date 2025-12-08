"use client";

import { useRef } from "react";
import Image from "next/image";

type Slide = { title: string; src: string; href: string; tag?: string };

const SLIDES: Slide[] = [
  {
    title: "ParSight — golf-ball tracking drone",
    src: "/images/work/drone-parsight.png",
    href: "/projects/parsight",
    tag: "Robotics",
  },
  {
    title: "CAD Automation — Mold-Masters",
    src: "/images/work/mm-logo.png",   
    href: "/projects?tab=work",
    tag: "Automation",
  },
  {
    title: "RSX Rover — Autonomy Stack",
    src: "/images/work/rover-rsx.jpg",
    href: "/projects/rover",
    tag: "Robotics",
  },
  {
    title: "World Solar Challenge — Blue Sky Solar Racing",
    src: "/images/work/wsc-finish.jpg",
    href: "/projects?tab=work",
    tag: "Hardware",
  },
  {
    title: "LDED Thesis — Melt Pool Monitoring + ML",
    src: "/images/work/LDED-setup.png", 
    href: "/projects/lded",
    tag: "Research",
  },
  {
    title: "ingrAIdients — Vision Transformer Pipeline",
    src: "/images/work/ingraidients-architecture.jpg", // replace later
    href: "/projects/ingraidients",
    tag: "AI",
  },
  {
    title: "Portfolio Chatbot — GraphRAG + Neo4j",
    src: "/images/work/portfolio-chatbot-ui.png", // replace later
    href: "/projects/chatbot",
    tag: "AI Systems",
  },
];


export default function FeaturedReel() {
  const TRACK = [...SLIDES, ...SLIDES]; // duplicate for seamless loop
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 360; // approx card width + gap
    const amount = dir === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* header */}
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">featured work</h2>
          <a href="/projects" className="text-sm text-neutral-700 hover:text-black">
            View all →
          </a>
        </div>

        {/* reel */}
        <div className="relative group">
          {/* scroll container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            {/* animated track */}
            <div
              className="flex w-max gap-4 animate-[marquee_28s_linear_infinite] motion-reduce:animate-none"
            >
              {TRACK.map((s, i) => (
                <a
                  key={s.title + i}
                  href={s.href}
                  className="relative shrink-0 w-[280px] md:w-[340px] rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
                >
                  <div className="relative aspect-video">
                    <Image src={s.src} alt={s.title} fill className="object-cover" />
                    {s.tag && (
                      <span className="absolute left-3 top-3 text-[11px] px-2 py-1 rounded-full bg-white/90 border border-neutral-200">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold">{s.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* arrows – appear on hover */}
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 border border-neutral-200 shadow-sm hover:bg-white group-hover:opacity-100 opacity-0 transition"
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 border border-neutral-200 shadow-sm hover:bg-white group-hover:opacity-100 opacity-0 transition"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
