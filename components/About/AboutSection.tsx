"use client";

import AboutShowcase from "./AboutShowcase";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-10 md:grid-cols-5 items-start">
        {/* LEFT: plain text */}
        <div className="md:col-span-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            who am i?
          </h2>

          <div className="space-y-3 text-[15px] sm:text-base text-neutral-800 leading-relaxed max-w-xl">
            <p>
              I’m an Engineering Science student at the University of Toronto
              specializing in Robotics, with a minor in Advanced Manufacturing
              and a Business Certificate. I build where hardware, intelligence,
              and design meet—automating CAD systems, improving 3D printing with
              ML, and developing AI-powered apps.
            </p>
            <p>
              I’ve worked across automation, robotics, and solar energy, leading
              hands-on projects and teams with a focus on impact that scales.
              Outside the lab: scuba, hiking, writing. I’m currently
              self-publishing my first novel.
            </p>
            <p>
              Every challenge—technical or creative—is a chance to learn, build,
              and push what’s possible.
            </p>
          </div>
        </div>

        {/* RIGHT: the showcase */}
        <div className="md:col-span-3 mt-6 md:mt-0">
          <AboutShowcase />
        </div>
      </div>
    </section>
  );
}
