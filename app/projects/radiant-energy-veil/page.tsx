"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function RadiantEnergyVeilPage() {
  return (
    <ProjectLayout
      title="Radiant Energy Veil - dynamic window concept"
      breadcrumbLabel="Radiant Energy Veil"
      meta="Design & Manufacturing · Research · 2021"
      intro={
        <p>
          During a 4-month research term at the Advanced Photovoltaics,
          Photonics and Devices Lab, I worked on an early-stage dynamic window
          concept built around a <span className="font-medium">Radiant Energy Veil</span>.
          The goal was to explore how a controllable radiative layer could help
          reduce heat loss in buildings and improve thermal performance beyond
          conventional glazing systems.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Context:</span> early-stage research
            and concept development at AP2D
          </li>
          <li>
            <span className="font-medium">Focus:</span> dynamic glazing,
            radiative heat transfer, and manufacturable window concepts
          </li>
          <li>
            <span className="font-medium">My role:</span> literature review,
            patent mapping, and CAD concept development
          </li>
          <li>
            <span className="font-medium">Outcome:</span> helped define a viable
            design direction for later AP2D window work
          </li>
        </ul>
      }
    >
      <section className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Context and objectives
          </h2>
          <p>
            Traditional high-performance windows typically rely on static
            coatings, gas fills, and layered glazing to manage heat transfer.
            This project explored a different idea: whether a window could
            dynamically influence radiative heat exchange in a way that better
            adapts to changing environmental conditions.
          </p>
          <p>
            My role was to help translate that high-level idea into a more
            concrete engineering concept. I focused on understanding the current
            state of dynamic glazing technologies, identifying technical and IP
            constraints, and creating early CAD concepts for how a Radiant
            Energy Veil could be incorporated into a multi-pane window assembly.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Research and concept development
          </h2>
          <p>
            I began with a structured literature and patent review covering
            topics such as low-E coatings, spectrally selective films, vacuum
            glazing, and active façade systems. For each approach, I looked at
            performance tradeoffs, manufacturability, and how closely it
            overlapped with the concept we were exploring.
          </p>
          <p>
            This helped define a design space that was both technically
            promising and meaningfully different from existing patented
            solutions. I summarized the findings into internal briefs that
            helped guide the team toward concepts that were more realistic from
            both an engineering and commercialization perspective.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral">
            <Image
              src="/images/work/radiant-veil-animate.gif"
              alt="Radiant Energy Veil window concept render"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral">
            <Image
              src="/images/work/radiant-veil.png"
              alt="Detail render of Radiant Energy Veil concept"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            CAD exploration and iteration
          </h2>
          <p>
            Once the technical direction was clearer, I moved into CAD-driven
            concept development. I modeled multiple window assembly variations
            with different layer arrangements, support structures, and
            integration strategies for the Radiant Energy Veil, while paying
            attention to how the concept would interact with spacers, seals, and
            framing.
          </p>
          <p>
            Each concept was evaluated against a mix of technical and practical
            considerations, including thermal performance potential,
            manufacturability, and compatibility with existing fabrication
            approaches. I used section views and exploded assemblies to make the
            tradeoffs easier to communicate during internal design discussions.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            Although the full technical details remain confidential, this
            project had a big impact on how I think about engineering design. It
            pushed me to connect heat transfer theory, material behavior, and IP
            constraints with practical concept development in CAD.
          </p>
          <p>
            It also became a foundation for my later work on dynamic solar
            windows at AP2D, where I moved from early concept work into more
            simulation-heavy performance analysis. Together, those experiences
            strengthened my interest in engineering problems that sit at the
            intersection of sustainability, design, and implementation.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              What I did
            </h2>
            <ul className="space-y-1.5">
              <li>Reviewed patents and literature on dynamic and high-performance glazing</li>
              <li>
                Helped define design constraints for integrating a Radiant
                Energy Veil into multi-pane window assemblies
              </li>
              <li>
                Built and iterated CAD concepts from early layouts to refined
                assembly models
              </li>
              <li>
                Created exploded views and section cuts for internal reviews
              </li>
              <li>
                Helped connect research ideas to manufacturing and IP realities
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
