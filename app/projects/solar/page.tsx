"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function BlueSkySolarPage() {
  return (
    <ProjectLayout
      title="Blue Sky Solar Racing - structural and manufacturing lead"
      breadcrumbLabel="Blue Sky Solar"
      meta="Design & Manufacturing · World Solar Challenge · 2022–2023"
      intro={
        <p>
          I was the Chief Structural and Manufacturing Engineer for the
          University of Toronto&apos;s Blue Sky Solar Racing team, where we
          designed and built a road-legal solar car that raced more than
          3,000 km across the Australian Outback in the World Solar Challenge.
          My role was to make sure the car was not only designed well, but could
          actually be manufactured, assembled, and trusted under race conditions.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Role:</span> Chief Structural and
            Manufacturing Engineer
          </li>
          <li>
            <span className="font-medium">Event:</span> Bridgestone World Solar
            Challenge
          </li>
          <li>
            <span className="font-medium">Focus:</span> composite structures,
            plug and mold design, and manufacturing planning
          </li>
          <li>
            <span className="font-medium">Team:</span> multidisciplinary student
            team across mechanical, electrical, strategy, and solar
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Role and scope
          </h2>
          <p>
            As structural and manufacturing lead, I was responsible for a large
            portion of the car&apos;s composite build process, from structural
            decisions and laminate planning to molds, tooling, and shop
            execution. If a part needed to carry load, fit correctly, or be
            built efficiently, it usually came through our team.
          </p>
          <p>
            A big part of the role was translating high-level design goals such
            as low weight, sufficient stiffness, and manufacturability into
            practical manufacturing decisions. That meant thinking not only
            about geometry, but also about tooling splits, layup schedules,
            fabrication sequence, and what the team could realistically execute
            on a tight timeline.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Composites, tooling, and process improvement
          </h2>
          <p>
            I led the design and manufacturing of gelcoat and fiberglass molds
            for major aero body components, including the bottom shell and
            fairings. This involved working closely with CAD, manufacturing, and
            shop processes to decide how molds should be split, where flanges
            should go, and how to maintain tolerances while staying within our
            time and budget constraints.
          </p>
          <p>
            On the manufacturing side, I helped develop and refine our carbon
            fiber layup procedures for both wet layups and infusion-based parts.
            I also worked on plug development and tooling workflows, including
            process improvements that reduced 3D printing and finishing time by
            about <span className="font-medium">20%</span> while keeping part
            quality consistent.
          </p>
          <p>
            We also carried out structural checks and smaller validation efforts
            before committing to full-scale components, which helped reduce risk
            and improve confidence in the final build.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Teamwork and race impact
          </h2>
          <p>
            This work depended on constant coordination with other subteams.
            Structural choices affected packaging, solar array integration,
            cooling, and race strategy, so I often worked across boundaries to
            make sure the design could actually be built and assembled without
            compromising performance.
          </p>
          <p>
            The project felt a lot like working on a small hardware startup.
            There were hard deadlines, physical consequences if parts failed,
            and very little room for disconnect between design and execution. It
            gave me real experience in composites, design for manufacturing, and
            leading engineering work under pressure.
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

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            Blue Sky Solar was one of the most important experiences I had in
            learning how manufacturing reality shapes engineering design. It
            pushed me to think in terms of layup direction, demold angles, cure
            planning, tooling limitations, and shop throughput rather than just
            ideal CAD geometry.
          </p>
          <p>
            It also gave me experience leading people through a long and
            demanding hardware build. I learned how to train newer members, make
            tradeoffs under constraints, and keep a team moving when schedules
            are tight and the final deadline does not move.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech and processes
            </h2>
            <ul className="space-y-1.5">
              <li>Carbon fiber and Kevlar layups</li>
              <li>Wet layup and infusion-based composite processes</li>
              <li>Gelcoat and fiberglass plug and mold design</li>
              <li>CAD for surfacing, tooling, and mold splitting</li>
              <li>Basic structural validation and design checks</li>
              <li>3D printing for plugs and tooling development</li>
              <li>Process improvement for composite manufacturing</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
