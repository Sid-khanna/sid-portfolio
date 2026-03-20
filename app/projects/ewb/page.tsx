"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function EWBPage() {
  return (
    <ProjectLayout
      title="Engineers Without Borders — Curriculum Change Project"
      breadcrumbLabel="EWB Curriculum Project"
      meta="Leadership & Impact · Sustainability · 2022–2023"
      intro={
        <p>
          As part of Engineers Without Borders, I led a curriculum change project
          focused on incorporating sustainability into the Engineering Strategies
          and Practice course at the University of Toronto. The goal was to
          identify practical ways to integrate sustainability topics into an
          existing core course without disrupting its structure.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Role:</span> Project lead, later consultant
          </li>
          <li>
            <span className="font-medium">Focus:</span> sustainability integration in
            engineering curriculum
          </li>
          <li>
            <span className="font-medium">Work:</span> research, surveys, report writing,
            faculty discussions
          </li>
          <li>
            <span className="font-medium">Impact:</span> produced implementation-ready
            recommendations for course changes
          </li>
        </ul>
      }
    >
      {/* SECTION 1 */}
      <section className="space-y-4 text-neutral-800 leading-relaxed text-sm md:text-base">
        <h2 className="text-lg font-semibold tracking-tight">
          Project context
        </h2>

        <p>
          The Engineering Strategies and Practice course is one of the first
          design courses engineering students take at UofT. Our goal was to
          explore how sustainability concepts could be introduced in a way that
          felt natural within the course rather than as an added requirement.
        </p>

        <p>
          After stepping in as project lead, I narrowed the scope to focus on
          changes that could realistically be implemented within the existing
          curriculum. This meant balancing student feedback, faculty constraints,
          and the overall goals of the course.
        </p>

        <h2 className="text-lg font-semibold tracking-tight mt-6">
          Research and collaboration
        </h2>

        <p>
          I recruited and onboarded a new team, then led research into how other
          universities integrate sustainability into engineering education. We
          also partnered with the Sustainability Engineering Association to run
          a survey across the engineering student body to understand what topics
          students felt were missing from the course.
        </p>

        <p>
          The survey results helped us identify areas where sustainability could
          be introduced without increasing workload, such as design criteria,
          material selection, and lifecycle considerations.
        </p>

        <h2 className="text-lg font-semibold tracking-tight mt-6">
          Outcome
        </h2>

        <p>
          We compiled the research, survey results, and proposed changes into a
          detailed report outlining several ways sustainability could be
          incorporated into the course. I met with faculty members to discuss
          the recommendations and how they could fit within the existing course
          structure.
        </p>

        <p>
          After stepping down from the lead role, I continued to support the
          project as a consultant while the team moved toward implementation,
          helping refine recommendations and provide context for earlier work.
        </p>

        <h2 className="text-lg font-semibold tracking-tight mt-6">
          What I learned
        </h2>

        <p>
          This project gave me experience working on problems that involve people,
          institutions, and constraints rather than purely technical systems.
          I learned how to gather feedback, communicate with stakeholders, and
          turn broad ideas into concrete proposals that others could actually use.
        </p>

        <p>
          It also strengthened my interest in work that sits between engineering,
          policy, and implementation, where progress depends as much on
          communication and alignment as it does on technical skill.
        </p>
      </section>
    </ProjectLayout>
  );
}
