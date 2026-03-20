"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function CadAutomationPage() {
  return (
    <ProjectLayout
      title="CAD Automation at Mold-Masters"
      breadcrumbLabel="Mold-Masters"
      meta="Software & Automation · Industry · 2023–Now"
      intro={
        <p>
          I work as an Automation Developer at Mold-Masters, where I build tools
          that automate CAD-heavy engineering workflows for hot runner and
          injection molding systems. I joined as a PEY intern, continued part-time
          through my final year, and now work full-time expanding internal
          automation tools used in real design and manufacturing workflows.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Role:</span> Automation Developer
            (PEY intern to part-time to full-time)
          </li>
          <li>
            <span className="font-medium">Focus:</span> CAD automation, workflow
            tooling, and internal engineering tools
          </li>
          <li>
            <span className="font-medium">Tech:</span> VB.NET, JavaScript, Creo,
            SQL, and internal automation frameworks
          </li>
          <li>
            <span className="font-medium">Impact:</span> reduced repetitive design
            work, improved consistency, and helped modernize legacy automation
            workflows
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Context &amp; role
          </h2>
          <p>
            Mold-Masters designs highly configurable hot runner systems, which
            means engineers often deal with many recurring modeling, drawing, and
            documentation tasks across similar product variants. A lot of that
            work was historically manual, making it time-consuming, repetitive,
            and more prone to inconsistency.
          </p>
          <p>
            My role has been to turn those repeated engineering processes into
            reliable automation. I build parameter-driven tools that generate
            models, drawings, and related outputs from structured inputs, reducing
            manual effort while making the workflow faster and more consistent.
          </p>
          <p>
            Over time, I also became involved in modernizing parts of the
            automation stack, helping move older CPS VB.NET logic toward newer
            JavaScript-based tooling. That work involved understanding legacy
            behavior, preserving expected outputs, and making the codebase easier
            to maintain and extend.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I built
          </h2>
          <p>
            My work sits at the intersection of CAD, software, and implementation.
            Some of the tools and systems I have worked on include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Parametric model generators:</span>{" "}
              tools that create component and assembly variants directly from a
              small set of design inputs, reducing the need to rebuild similar
              geometry from scratch.
            </li>
            <li>
              <span className="font-medium">Drawing and BOM automation:</span>{" "}
              scripts that populate title blocks, dimensions, and bill-of-material
              information more consistently, while reducing repetitive manual work
              and release errors.
            </li>
            <li>
              <span className="font-medium">Migration and modernization:</span>{" "}
              tools that help move legacy CPS VB.NET automation toward newer
              JavaScript-based workflows, improving maintainability while keeping
              existing behavior consistent.
            </li>
            <li>
              <span className="font-medium">Data and reporting tools:</span>{" "}
              internal scripts and small applications that query SQL data and
              generate reports for engineering and management, helping teams better
              understand usage, part variation, and workflow activity.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Collaboration &amp; impact
          </h2>
          <p>
            A big part of making these tools successful was working closely with
            the people who actually use them. I spent time with design engineers,
            drafters, and manufacturing stakeholders to understand where the real
            bottlenecks were, how current workflows operated, and what would make
            automation useful rather than disruptive.
          </p>
          <p>
            That meant iterating not just on backend logic, but also on the
            usability of the tools themselves, including input structure, default
            behaviors, validation, and error handling. This helped improve
            adoption, because the tools fit into existing engineering workflows
            instead of forcing users to work around the software.
          </p>
          <p>
            The result was meaningful time savings on recurring tasks, improved
            consistency across generated outputs, and less manual rework in
            day-to-day design processes. It also gave me hands-on experience
            building technical solutions that had to be practical, maintainable,
            and trusted by real users.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            This role showed me how much leverage good automation can create
            inside an engineering organization. A well-designed internal tool can
            save large amounts of time, reduce error, and quietly improve the
            reliability of systems that feed directly into production.
          </p>
          <p>
            It also strengthened my ability to work across software and
            engineering contexts at once. I became better at understanding complex
            design logic, translating workflow requirements into maintainable code,
            and building tools that are not just technically correct, but actually
            usable and valuable for the teams depending on them.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech &amp; tools
            </h2>
            <ul className="space-y-1.5">
              <li>VB.NET and JavaScript for automation tooling</li>
              <li>Creo for parametric CAD workflows</li>
              <li>SQL for reporting and engineering data queries</li>
              <li>Internal CPS automation framework</li>
              <li>Version-controlled shared scripts</li>
              <li>Collaboration with design and manufacturing teams</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
