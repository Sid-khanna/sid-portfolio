"use client"; import AboutShowcase from "./AboutShowcase"; export default function AboutSection() { return ( <section className="py-12 sm:py-16"> <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 gap-10 md:grid-cols-5 items-start"> {/* LEFT: plain text */} <div className="md:col-span-2"> <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4"> who am i? </h2> <div className="s"use client";

import AboutShowcase from "./AboutShowcase";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 gap-10 md:grid-cols-5 items-start">

        {/* LEFT: text */}
        <div className="md:col-span-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            about me
          </h2>

          <div className="space-y-3 text-[15px] sm:text-base text-neutral-800 leading-relaxed max-w-xl">

            <p>
              I am a robotics-focused engineer and builder with experience across
              automation, software, and applied AI. I studied Engineering Science
              at the University of Toronto, specializing in Robotics.
            </p>

            <p>
              My work spans autonomous systems, CAD automation, machine learning
              for manufacturing, and AI-powered applications. I enjoy building
              solutions end to end, from understanding real problems and designing
              systems to implementation, testing, and iteration.
            </p>

            <p>
              I like working at the intersection of technology and real-world impact.
              I enjoy developing technical tools, improving workflows, and helping
              teams turn ideas into working systems.
            </p>

            <p>
              Outside of engineering, I enjoy adventure, creativity, and storytelling.
              I like hiking, scuba diving, and writing fiction, and I am currently
              working on self-publishing my first novel.
            </p>

          </div>
        </div>


        {/* RIGHT: showcase */}
        <div className="md:col-span-3 mt-6 md:mt-0">
          <AboutShowcase />
        </div>

      </div>
    </section>
  );
}
