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
      {/* overview + image (same template as rover) */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
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
            design work, creating CAD models, animations, and detailed
            engineering drawings to communicate mechanisms, clearances, and
            usability considerations.
          </p>

          <p>
            The device mounts to the wheelchair and uses a linkage-driven arm to
            reach and retrieve small objects such as keys, wallets, cards, or
            personal items. By focusing on ease of use and manufacturability, we
            created a concept that improves user independence without adding
            operational complexity.
          </p>
        </div>

        {/* image column */}
        <div className="space-y-4">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/helping-hand-1.png"
              alt="Helping Hand CAD design overview"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          <p className="text-xs text-neutral-500">
            Final CAD concept showing the linkage geometry and reach envelope.
          </p>
        </div>
      </div>

      {/* optional second section (same style as rover's second grid) */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start mt-10">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            What I took away
          </h2>
          <p>
            This project reinforced how much the best design decisions come from
            stakeholder alignment. It also pushed me to communicate mechanisms
            clearly through drawings and visuals, and to think about usability
            and manufacturability from day one.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tools used
            </h2>
            <ul className="space-y-1.5">
              <li>CAD modelling + mechanism design</li>
              <li>Engineering drawings</li>
              <li>Concept iteration with stakeholders</li>
              <li>Design-for-usability &amp; manufacturability</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
