// app/projects/cad-automation/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function CadAutomationPage() {
  return (
    <ProjectLayout
      title="CAD automation — Mold-Masters"
      breadcrumbLabel="Mold-Masters"
      meta="Design & Manufacturing · Industry · 2023–Now"
      intro={
        <p>
          I work as an Automation Developer at Mold-Masters, building tools that
          automate CAD-heavy workflows for hot runner and injection molding
          systems. I originally joined as a PEY intern, stayed on part-time
          through my final year, and now work full-time continuing to expand the
          automation stack.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Role:</span> Automation Developer
            (PEY intern → part-time → full-time)
          </li>
          <li>
            <span className="font-medium">Focus:</span> CAD automation, design
            tools, and data-driven reporting
          </li>
          <li>
            <span className="font-medium">Tech:</span> VB.NET, Creo /
            SmartAssembly, SQL, internal automation frameworks
          </li>
          <li>
            <span className="font-medium">Impact:</span> reduced repetitive CAD
            work, fewer modelling errors, faster design turnaround
          </li>
        </ul>
      }
    >
      {/* overview + hero image */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Context &amp; role
          </h2>
          <p>
            Mold-Masters designs complex hot runner systems with a high degree
            of configuration. Historically, engineers had to create many of
            these models and drawings manually, repeating similar steps for
            every order. My role has been to turn those tribal workflows into
            robust automation: parameter-driven tools that generate models,
            drawings, and reports with minimal manual input.
          </p>
          <p>
            Starting as a PEY intern, I learned VB.NET and the company&apos;s
            internal automation framework quickly so I could contribute real
            tools instead of just prototypes. Over time I took ownership of
            larger scripts and eventually helped support the migration from
            legacy CPS tooling toward SIGMAXIM SmartAssembly.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I built
          </h2>
          <p>
            Day to day, my work sits at the intersection of CAD, code, and
            manufacturing. Examples of the kinds of tools I&apos;ve developed:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Parametric model generators:</span>{" "}
              scripts that create families of components and assemblies directly
              from a small set of design inputs, instead of engineers modelling
              each variant from scratch.
            </li>
            <li>
              <span className="font-medium">Drawing &amp; BOM automation:</span>{" "}
              tools that populate title blocks, dimensions, and bill-of-material
              information, reducing copy–paste errors and speeding up release.
            </li>
            <li>
              <span className="font-medium">Migration tools:</span> utilities
              that help move existing CPS-based automation into more modern
              SmartAssembly-based workflows, keeping behaviour consistent while
              improving maintainability.
            </li>
            <li>
              <span className="font-medium">Data &amp; reporting scripts:</span>{" "}
              small apps that query SQL databases and generate reports for
              engineering / management, giving better visibility into tooling
              usage and design variants.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/mm-logo.png"
              alt="Automated CAD and tooling workflows at Mold-Masters"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* collaboration, impact + tech card */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Collaboration &amp; impact
          </h2>
          <p>
            Building good automation tools meant spending a lot of time with the
            actual users: design engineers, drafters, and manufacturing teams.
            I ran feedback loops with them, watched how they used early versions
            of the tools, and iterated on UX details like input forms, error
            messages, and default behaviours.
          </p>
          <p>
            That user-centric approach helped ensure the tools matched real
            workflows instead of forcing people to redesign their process around
            the code. The result was faster adoption and tangible time savings:
            many repetitive modelling tasks now take minutes instead of hours,
            and standard features are generated consistently across projects.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I&apos;ve learned
          </h2>
          <p>
            This role taught me how much leverage there is in automation inside
            an established company. A few well-designed tools can quietly save
            hundreds of engineering hours and reduce error in parts that
            eventually hit production. It also strengthened my ability to read
            large CAD models, reason about parametric design, and ship
            production code that other engineers depend on.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech &amp; tools
            </h2>
            <ul className="space-y-1.5">
              <li>VB.NET for automation tooling</li>
              <li>Creo &amp; SmartAssembly for parametric CAD</li>
              <li>SQL for reporting and data queries</li>
              <li>Git / version control for shared scripts</li>
              <li>
                Close collaboration with design &amp; manufacturing engineering
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
