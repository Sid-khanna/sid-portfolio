"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function MatboardBridgePage() {
  return (
    <ProjectLayout
      title="Matboard Bridge - structural design project"
      breadcrumbLabel="Matboard Bridge"
      meta="Design & Manufacturing · Coursework · 2021"
      intro={
        <p>
          In this first-year design project, our team was challenged to span a
          wide valley using only sheets of matboard and glue. We developed and
          analyzed two bridge concepts, one supported only at the ends and one
          with an intermediate support, then justified our final design through
          calculations, simulation, and engineering drawings.
        </p>
      }
      snapshot={
        <ul className="text-xs md:text-sm text-neutral-700 space-y-1.5">
          <li>
            <span className="font-medium">Deliverables:</span> two bridge
            concepts, structural calculations, CAD models, and drawings
          </li>
          <li>
            <span className="font-medium">Focus:</span> load capacity, failure
            modes, and material efficiency
          </li>
          <li>
            <span className="font-medium">My role:</span> structural analysis,
            CAD modelling, and simulation
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem and design brief
          </h2>
          <p>
            The challenge was simple in theory but constrained in practice:
            design a bridge from matboard that could carry as much load as
            possible while meeting strict limits on geometry, material use, and
            construction method. One concept used a box-girder structure
            supported only at the ends, while the second introduced an
            intermediate support to change the internal force distribution.
          </p>
          <p>
            Our team had to evaluate both concepts analytically before building
            anything. That meant identifying likely failure modes such as
            buckling, shear, and joint failure, then using those insights to
            compare how each design would behave under load.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Analysis and iteration
          </h2>
          <p>
            I focused on the structural calculations and CAD side of the
            project. Using beam theory and hand calculations, I estimated
            internal forces across different geometries and support conditions,
            then translated the stronger concepts into detailed Autodesk Fusion
            models.
          </p>
          <p>
            From there, I used simulation to compare stress distributions,
            refine dimensions, and identify areas where the structure might fail
            early. These iterations helped us improve stiffness and load-bearing
            capacity while keeping the bridge lightweight and buildable within
            the project constraints.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral">
            <Image
              src="/images/work/matboard-bridge.png"
              alt="Matboard bridge concept drawing and dimensions"
              fill
              className="object-contain"
            />
          </div>

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

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Outcome and what I learned
          </h2>
          <p>
            The final design balanced stiffness, manufacturability, and
            efficient material use. Our bridge met the course requirements and
            performed close to expectations in physical testing, which reinforced
            the value of connecting analysis, modelling, and fabrication.
          </p>
          <p>
            This project was one of my earliest experiences seeing how hand
            calculations, CAD, and testing all support one another in the design
            process. It also helped me treat CAD as more than just drafting. It
            became a way to test assumptions, communicate design intent, and
            build something others could reliably evaluate and manufacture.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tools and methods
            </h2>
            <ul className="space-y-1.5">
              <li>Hand calculations using beam theory and shear/moment analysis</li>
              <li>Autodesk Fusion for CAD modelling and layout</li>
              <li>Basic simulation to compare stress distributions</li>
              <li>Engineering drawings for fabrication</li>
              <li>Team design reviews and failure-mode analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
