// app/projects/radiant-energy-veil/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function RadiantEnergyVeilPage() {
  return (
    <ProjectLayout
      title="Radiant Energy Veil — dynamic window concept"
      breadcrumbLabel="Radiant Energy Veil"
      meta="Design & Manufacturing · AP2D Lab · 2021"
      intro={
        <p>
          During a 4-month research term at the Advanced Photovoltaics–
          Photonics and Devices (AP2D) lab, I worked on an early-stage concept
          for a dynamic window that used a <span className="font-medium">
          Radiant Energy Veil
          </span>{" "}
          to actively reduce heat loss in buildings. The goal was to explore
          how selectively controlled radiative layers could improve thermal
          comfort and energy efficiency beyond conventional glazing systems.
        </p>
      }
    >
      {/* overview + images */}
      <section className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Context &amp; objectives
          </h2>
          <p>
            Traditional high-performance windows rely on static coatings and
            gas fills to manage heat transfer. Our project asked a different
            question: what if a window could dynamically modulate radiative
            heat exchange with the environment, adapting to different seasons
            and climates while remaining manufacturable at scale?
          </p>
          <p>
            My role was to take this high-level idea and help translate it into
            a feasible concept. I focused on understanding the current
            state-of-the-art in dynamic glazing, mapping out the IP landscape,
            and building early CAD models that captured how a Radiant Energy
            Veil could be integrated into a multi-pane window system.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Research &amp; concept development
          </h2>
          <p>
            I began with a structured literature and patent review on heat
            transfer in windows: low-E coatings, spectrally selective films,
            vacuum glazing, and active façade technologies. For each approach,
            I tracked thermal performance, manufacturability, and potential
            conflicts with our proposed concept.
          </p>
          <p>
            This review helped us carve out a design space that was both
            technically promising and distinct from existing patents. I
            compiled my findings into internal briefs for the team, highlighting
            where a Radiant Energy Veil could add value without duplicating
            existing solutions.
          </p>
        </div>

        <div className="space-y-4 md:grid-cols-2">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral">
            <Image
              src="/images/work/radiant-veil-animate.gif"
              alt="Radiant Energy Veil window concept render"
              fill
              className="object-contain"
            />
          </div>
          {/* if you add a second render later, drop it here */}
          { <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral">
            <Image
              src="/images/work/radiant-veil.png"
              alt="Detail render of Radiant Energy Veil concept"
              fill
              className="object-contain"
            />
          </div> }
        </div>
      </section>

      {/* CAD work + learnings + tech card */}
      <section className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            CAD exploration &amp; iteration
          </h2>
          <p>
            Once we had a clear technical direction, I moved into CAD-driven
            concept development. I modelled multiple window assemblies with
            different layer orderings, support structures, and integration
            strategies for the Radiant Energy Veil, paying attention to how
            the concept would interact with spacers, seals, and framing.
          </p>
          <p>
            Each iteration was evaluated on three axes: thermal performance
            potential, manufacturability, and compatibility with existing
            fabrication lines. I used exploded views and section cuts to make
            design trade-offs easier to discuss with the research team and
            industrial partners.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Takeaways
          </h2>
          <p>
            Even though the full design details are confidential, the project
            had a big impact on how I think about energy-efficient products.
            It forced me to connect theory—radiative heat transfer, material
            properties, and IP constraints—with practical design decisions in
            CAD.
          </p>
          <p>
            The Radiant Energy Veil work also became a bridge into my later
            AP2D projects on dynamic solar windows, where I moved from concept
            design into simulation and performance analysis. Together, these
            experiences solidified my interest in applying engineering design
            to real sustainability problems.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              What I did
            </h2>
            <ul className="space-y-1.5">
              <li>Mapped patents and literature on dynamic &amp; high-performance glazing</li>
              <li>
                Defined design constraints for integrating a Radiant Energy
                Veil into multi-pane window stacks
              </li>
              <li>
                Built and iterated multiple CAD concepts, from early sketches
                to refined assembly models
              </li>
              <li>
                Prepared visual assets (exploded views, section cuts) for
                internal design reviews
              </li>
              <li>
                Helped align research ideas with manufacturing and IP realities
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
