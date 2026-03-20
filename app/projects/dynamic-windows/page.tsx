"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function DynamicWindowsPage() {
  return (
    <ProjectLayout
      title="Dynamic Solar Windows at AP2D and 3ENano"
      breadcrumbLabel="Dynamic Solar Windows"
      meta="Design & Manufacturing · Research · 2022–2023"
      intro={
        <p>
          I spent a summer in Professor Nazir Kherani&apos;s Advanced
          Photovoltaics, Photonics and Devices Lab, working with 3ENano on
          dynamic window concepts designed to improve thermal insulation in
          buildings. The project focused on using simulation to study how window
          structure, spacer design, and coating placement affect heat loss and
          overall performance.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Collaborators:</span> AP2D Lab at UofT
            and 3ENano
          </li>
          <li>
            <span className="font-medium">Focus:</span> thermal performance of
            coated multi-pane window systems
          </li>
          <li>
            <span className="font-medium">Tools:</span> THERM and WINDOW for
            simulation and comparison
          </li>
          <li>
            <span className="font-medium">Key outcome:</span> showed how spacer
            design, pane configuration, and coating placement can significantly
            improve insulation performance
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Research context
          </h2>
          <p>
            Windows are one of the biggest sources of energy loss in buildings,
            especially when thermal bridging and poor insulation reduce their
            effectiveness. The goal of this project was to study how dynamic
            window configurations and advanced coatings could improve thermal
            performance without sacrificing practical use in real buildings.
          </p>
          <p>
            My role combined literature review, simulation, and comparative
            analysis. I studied existing glazing technologies, spacer materials,
            coating strategies, and pane configurations, then translated those
            ideas into simulation models that could be tested under different
            conditions.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Simulation workflow
          </h2>
          <p>
            I used <span className="font-medium">THERM</span> and{" "}
            <span className="font-medium">WINDOW</span> to build and compare
            different insulated glazing unit configurations, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Double- and triple-pane window systems with varying gap widths</li>
            <li>
              Different spacer materials and geometries to reduce thermal
              bridging at the edges
            </li>
            <li>
              Coating placements across different glazing surfaces to evaluate
              their effect on heat transfer
            </li>
            <li>
              Seasonal conditions to compare behaviour across colder and warmer
              environments
            </li>
          </ul>
          <p>
            For each configuration, I compared metrics such as{" "}
            <span className="font-medium">R-value</span>,{" "}
            <span className="font-medium">U-value</span>, and interior surface
            temperature behaviour to understand how design choices affected both
            comfort and insulation performance.
          </p>
        </div>

        <div className="space-y-4">
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 bg-white max-h-[520px] sm:max-h-[420px]">
            <Image
              src="/images/work/dynamic-windows.png"
              alt="THERM and WINDOW simulation results for dynamic solar windows"
              width={1400}
              height={900}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Findings and impact
          </h2>
          <p>
            The simulations showed that relatively small design changes could
            have a meaningful effect on window performance. Spacer design, gap
            width, and coating placement all influenced thermal resistance, with
            better combinations helping reduce heat loss and stabilize interior
            surface temperatures.
          </p>
          <p>
            In particular, higher-performance multi-pane configurations offered
            clear gains over more standard setups, especially when thermal
            bridging was addressed and coatings were placed strategically. The
            work helped connect simulation results to practical product
            considerations for 3ENano and gave the team clearer insight into
            which design directions were worth exploring further.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            This project gave me early experience working between academic
            research and industry application. I learned how to build fair
            comparisons between design options, extract useful conclusions from
            simulation data, and communicate technical findings to both
            researchers and industry stakeholders.
          </p>
          <p>
            It also strengthened my interest in work that sits between
            engineering analysis, product thinking, and practical implementation.
            I liked the challenge of taking a broad technical problem, breaking
            it into testable variables, and using data to support design
            decisions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech and methods
            </h2>
            <ul className="space-y-1.5">
              <li>THERM and WINDOW for thermal modelling</li>
              <li>Literature review on glazing and coating technologies</li>
              <li>Comparison of R-value, U-value, and surface temperature trends</li>
              <li>Report writing and presentations for 3ENano</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
