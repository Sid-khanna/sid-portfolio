"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Shot = { title: string; tag?: string; src: string; href?: string };

const SHOTS: Shot[] = [
  {
    title: "World Solar Challenge",
    tag: "Hardware",
    src: "/images/work/wsc-finish.jpg",
    href: "/projects?tab=work",
  },
  {
    title: "ParSight (drone)",
    tag: "Robotics",
    src: "/images/work/drone-parsight.png",
    href: "/projects/parsight",
  },
  {
    title: "RSX Rover",
    tag: "Robotics",
    src: "/images/work/rover-rsx.jpg",
  },
  { title: "Scuba", tag: "Life", src: "/images/life/scuba.jpg" },
  { title: "Kayaking", tag: "Life", src: "/images/life/kayak.jpg" },
  { title: "Vinyl Nights", tag: "Creative", src: "/images/life/vinyl.jpg" },
];

export default function AboutShowcase() {
  const [i, setI] = useState(0);
  const paused = useRef(false);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % SHOTS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const current = SHOTS[i];

  return (
    <div
      className="relative 
                 h-[14rem] sm:h-[18rem] md:h-full md:min-h-[26rem]
                 rounded-2xl border border-neutral-200 bg-white/70 shadow-sm 
                 overflow-hidden flex flex-col justify-end"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {current.href ? (
              <a href={current.href} className="absolute inset-0">
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  className="object-cover"
                />
              </a>
            ) : (
              <Image
                src={current.src}
                alt={current.title}
                fill
                className="object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* gradient for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* caption + thumbnails */}
      <div className="relative z-10 flex flex-col justify-end h-full p-3 sm:p-4">
        <div className="flex items-center gap-2">
          {current.tag && (
            <span className="text-[10px] sm:text-[11px] px-2 py-1 rounded-full bg-white/90 border border-neutral-200">
              {current.tag}
            </span>
          )}
          <h3 className="text-white drop-shadow text-sm sm:text-base font-semibold">
            {current.title}
          </h3>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {SHOTS.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setI(idx)}
              className={`relative h-9 w-14 sm:h-10 sm:w-16 shrink-0 rounded-md overflow-hidden border ${
                idx === i ? "border-white" : "border-white/50"
              } focus:outline-none`}
              aria-label={`Show ${s.title}`}
              title={s.title}
            >
              <Image src={s.src} alt="" fill className="object-cover" />
              {idx === i && (
                <span className="absolute inset-0 ring-2 ring-white/80 rounded-md pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
