// app/projects/solar/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function BlueSkySolarPage() {
  return (
    <ProjectLayout
      title="Blue Sky Solar Racing — structural & manufacturing lead"
      breadcrumbLabel="Blue Sky Solar"
      meta="Design & Manufacturing · World Solar Challenge · 2022–2023"
      intro={
        <p>
          I was the Chief Structural and Manufacturing Engineer for the
          University of Toronto&apos;s Blue Sky Solar Racing team, where we
          designed and built a road-legal solar car that raced 3,000+ km across
          the Australian Outback in the World Solar Challenge. My job was to
          make sure the car we dreamed up on paper could actually be built,
          survive the desert, and pass scrutineering.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Role:</span> Chief Structural &
            Manufacturing Engineer
          </li>
          <li>
            <span className="font-medium">Event:</span> Bridgestone World Solar
            Challenge (3000+ km)
          </li>
          <li>
            <span className="font-medium">Focus:</span> carbon fibre structures,
            plug &amp; mold design, manufacturing pipelines
          </li>
          <li>
            <span className="font-medium">Team:</span> 30+ multidisciplinary
            students across electrical, strategy, and mechanical
          </li>
        </ul>
      }
    >
      {/* overview + photos */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Role &amp; scope
          </h2>
          <p>
            As structural and manufacturing lead, I owned everything from the
            composite layup schedule to how our molds were machined and how
            parts flowed through the shop. The car&apos;s chassis, aero body,
            and major structural components all passed through our team at some
            point — if it carried load or needed to be built efficiently, it was
            on my plate.
          </p>
          <p>
            A big part of the job was turning high-level performance goals
            (lightweight, stiff, manufacturable) into specific laminate stacks,
            tooling strategies, and process plans that volunteers could actually
            follow on tight timelines.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Composites, tooling &amp; process improvement
          </h2>
          <p>
            I led the design and manufacturing of the gelcoat and fiberglass
            molds for the aero body, including the bottom shell and fairings.
            This meant working closely with CAD, simulations, and the machine
            shop to decide how we&apos;d split molds, where to place flanges,
            and how to keep tolerances tight while staying within budget.
          </p>
          <p>
            On the shop floor, I developed and refined our carbon fibre layup
            procedures (wet layups and infusion) for large panels and structural
            ribs. By standardising layup sequences and experimenting with
            different print profiles for plug tooling, I helped reduce print and
            finishing time by roughly <span className="font-medium">20%</span>{" "}
            while keeping quality consistent.
          </p>
          <p>
            I also worked on quality checks and small structural tests to
            validate that our laminate choices met stiffness and strength
            requirements before committing to full-scale parts.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Teamwork &amp; race impact
          </h2>
          <p>
            None of this was done in isolation — I collaborated tightly with the
            electrical, strategy, and solar array sub-teams so that structural
            decisions supported packaging, cooling, and array performance.
            Manufacturing constraints often fed back into design, and I became a
            bridge between &quot;what&apos;s optimal on paper&quot; and
            &quot;what we can actually build before race day.&quot;
          </p>
          <p>
            The experience was the closest thing I&apos;ve had to working at a
            small hardware startup: hard deadlines, physical risk if things
            break, and a team that has to trust each other under pressure. It
            massively levelled up my understanding of composites, DFM, and
            leadership on a real engineering programme.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/wsc-finish.jpg"
              alt="Blue Sky Solar Racing team at the World Solar Challenge finish line"
              fill
              className="object-cover"
            />
          </div>
        
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/wsc-layup.jpeg"
              alt="Composite layup and mold work for the solar car"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* tech + quick facts card */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            What I took away
          </h2>
          <p>
            Blue Sky Solar was where I learned how much manufacturing reality
            shapes design. It forced me to think in terms of layup direction,
            demold angles, cure schedules, and shop throughput — not just neat
            CAD. It also gave me experience running a team, training new
            members, and making trade-offs when resources are limited and the
            race clock doesn&apos;t stop.
          </p>
          <p>
            More than any other extracurricular, this project shaped how I think
            about building hardware that works in the real world — and how to
            lead a team that can actually ship it.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech &amp; processes
            </h2>
            <ul className="space-y-1.5">
              <li>Carbon fibre &amp; Kevlar layups (wet &amp; infusion)</li>
              <li>Gelcoat &amp; fiberglass plug / mold design</li>
              <li>Autodesk / CAD for surface modelling &amp; tooling splits</li>
              <li>Basic FEA / structural checks for key components</li>
              <li>3D printing for plug sections and tooling</li>
              <li>Lean-ish process improvements for composite production</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
