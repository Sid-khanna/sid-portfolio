// app/projects/helping-hand/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function HelpingHandPage() {
  return (
    <ProjectLayout
      title="Helping Hand — assistive design for wheelchair users"
      breadcrumbLabel="Helping Hand"
      meta="Design & Manufacturing · Praxis II · 2022"
      intro={
        <p>
          This project was part of the Praxis II course, where my team and I set
          out to improve the lived experience of powered wheelchair users by
          helping them retrieve fallen objects. After reviewing the broad design
          brief, we reframed the challenge to focus on mitigation — designing a
          solution that assists users after an object is dropped, rather than
          trying to prevent drops entirely.
        </p>
      }
    >
      {/* Overview */}
      <section className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
        <h2 className="text-lg font-semibold tracking-tight">
          Understanding the problem
        </h2>
        <p>
          We worked closely with stakeholders to refine the project’s
          requirements, focusing on solutions that were practical, safe, and
          adaptable. This phase strengthened my communication and collaboration
          skills as we iterated through multiple opportunities and aligned
          around the most impactful direction.
        </p>

        <h2 className="mt-6 text-lg font-semibold tracking-tight">
          Designing the solution
        </h2>
        <p>
          Our final design —{" "}
          <span className="font-medium">the Helping Hand</span> — was selected
          after an extensive concept generation process. I led the technical
          design work, creating CAD models, animations, and detailed engineering
          drawings to communicate mechanisms, clearances, and usability
          considerations.
        </p>

        <p>
          The device mounts to the wheelchair and uses a linkage-driven arm to
          reach and retrieve small objects such as keys, wallets, cards, or
          personal items. By focusing on ease of use and manufacturability, we
          created a concept that meaningfully improves user independence without
          adding operational complexity.
        </p>

        <p>
          This project not only deepened my CAD and manufacturing skills but
          also reinforced the value of clear communication and
          stakeholder-driven design in engineering.
        </p>
      </section>

      {/* Images — same working pattern as LDED */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Image 1 */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
          <Image
            src="/images/work/helping-hand-1.png"
            alt="Helping Hand CAD overview"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
          <Image
            src="/images/work/helping-hand-2.png"
            alt="Helping Hand annotated design and dimensions"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </ProjectLayout>
  );
}
