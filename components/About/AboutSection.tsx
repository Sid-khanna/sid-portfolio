"use client";

import AboutShowcase from "./AboutShowcase";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 gap-10 md:grid-cols-5 items-start">

        {/* LEFT: plain text */}
        <div className="md:col-span-2">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            who am i?
          </h2>
        
          <div className="space-y-2 text-[15px] sm:text-base text-neutral-800 leading-[1.5] max-w-xl">
            <p>
              I am a robotics-focused engineer with experience across automation,
              software, and applied AI. I studied Engineering Science at the
              University of Toronto, specializing in Robotics.
            </p>
          
            <p>
              My work includes autonomous systems, CAD automation, and AI-powered
              applications. I enjoy building solutions end to end, from designing
              systems and solving technical problems to implementation and testing.
            </p>
          
            <p>
              I like working on real-world problems that combine technology and
              practical impact. Outside of engineering, I enjoy hiking, scuba diving,
              and writing fiction, and I am currently working on self-publishing my first novel.
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
