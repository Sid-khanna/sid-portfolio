// app/projects/matboard-bridge/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function MatboardBridgePage() {
  return (
    <ProjectLayout
      title="Matboard Bridge — structural design project"
      breadcrumbLabel="Matboard Bridge"
      meta="Design & Manufacturing · Coursework · 2021"
      intro={
        <p>
          In this first-year design project, our team was challenged to span a
          wide “valley” using only sheets of matboard and glue. We had to design
          and analyze two bridge concepts—one acting as a box girder supported
          only at the ends, and a second design with an intermediate support
          pier—then justify our final choice with calculations, simulations, and
          drawings.
        </p>
      }
      snapshot={
        <ul className="text-xs md:text-sm text-neutral-700 space-y-1.5">
          <li>
            <span className="font-medium">Deliverables:</span> 2 bridge
            concepts, full calculations, CAD models, and engineering drawings
          </li>
          <li>
            <span className="font-medium">Focus:</span> failure modes, load
            capacity, and material efficiency using only matboard
          </li>
          <li>
            <span className="font-medium">My role:</span> structural analysis,
            CAD modelling, and simulation workflow
          </li>
        </ul>
      }
    >
      {/* overview + images */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem &amp; design brief
          </h2>
          <p>
            The core challenge was simple to state but tricky to solve: build a
            matboard bridge that could carry as much load as possible while
            respecting strict geometry, material, and weight constraints. One
            concept used a box-girder profile supported only at the ends;
            another introduced an intermediate support to change the internal
            force distribution.
          </p>
          <p>
            Our team was responsible for both the analytical work and the final
            design package. That meant identifying likely failure modes
            (buckling, shear, tension failure at joints), estimating load paths,
            and validating the design before a single piece of matboard was cut.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Analysis &amp; iteration
          </h2>
          <p>
            I focused on the engineering calculations and CAD side. Using basic
            beam theory and hand calculations, I compared internal forces for
            different geometries and support conditions, then translated the
            most promising concepts into detailed models in Autodesk Fusion.
          </p>
          <p>
            From there, I ran simulations to estimate load capacity, refine web
            and flange dimensions, and spot stress concentrations that might
            trigger early failure. Each iteration informed small but meaningful
            geometry tweaks—stiffening key regions while keeping the structure
            light and buildable.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* drawing / plan view */}
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral">
            <Image
              src="/images/work/matboard-bridge.png"
              alt="Matboard bridge concept drawing and dimensions"
              fill
              className="object-contain"
            />
          </div>

          {/* optional second image – swap path if you have a better one */}
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral">
            <Image
              src="/images/projects/matboard-bridge-simulation.png"
              alt="Simulation view of matboard bridge under load"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* takeaways + tech stack */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Outcome &amp; what I learned
          </h2>
          <p>
            The final design balanced stiffness, manufacturability, and material
            usage. Our bridge met the project requirements and performed
            reliably in physical testing, failing close to the load we predicted
            in analysis. More importantly, the project drilled in the connection
            between clean hand calculations, CAD models, and test results.
          </p>
          <p>
            It was one of the first times I treated CAD as more than just
            “drawing”: it became a way to encode assumptions, test ideas
            quickly, and communicate a design that others could reliably build
            and evaluate.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tools &amp; methods
            </h2>
            <ul className="space-y-1.5">
              <li>Hand calculations using beam theory &amp; shear/moment</li>
              <li>Autodesk Fusion for CAD modelling and layout</li>
              <li>Basic simulation to compare stress distributions</li>
              <li>
                Engineering drawings and dimensioned views for fabrication
              </li>
              <li>Team design reviews and failure-mode brainstorming</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
