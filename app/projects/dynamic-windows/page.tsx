// app/projects/dynamic-windows/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function DynamicWindowsPage() {
  return (
    <ProjectLayout
      title="Dynamic Solar Windows — AP2D & 3ENano"
      breadcrumbLabel="Dynamic Solar Windows"
      meta="Design & Manufacturing · Research · 2022–2023"
      intro={
        <p>
          I spent a summer in Professor Nazir Kherani&apos;s Advanced
          Photovoltaics–Photonics and Devices (AP2D) Lab working with{" "}
          3ENano, a company developing high-performance solar coatings for
          window panes. The project focused on designing dynamic window
          configurations that reduce heat loss and improve the thermal
          insulation of buildings.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Collaborators:</span> AP2D Lab (UofT) &amp; 3ENano
          </li>
          <li>
            <span className="font-medium">Focus:</span> thermal insulation of
            multi-pane windows with advanced coatings
          </li>
          <li>
            <span className="font-medium">Tools:</span> THERM &amp; WINDOW for
            2D heat-transfer simulation
          </li>
          <li>
            <span className="font-medium">Key outcome:</span> showed how spacer
            design, gap size, and coating placement can significantly improve
            R-value and surface temperature behaviour across seasons
          </li>
        </ul>
      }
    >
      {/* overview + image */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Research context
          </h2>
          <p>
            Buildings lose a huge fraction of their energy through poorly
            insulated windows. Our goal was to explore how advanced solar
            coatings and improved spacer designs could turn conventional double
            and triple-pane windows into much better thermal barriers, without
            sacrificing visible light.
          </p>
          <p>
            My role combined literature review, simulation, and early concept
            exploration. I surveyed current window technologies, gas fills, and
            spacer designs, and then translated those concepts into simulation
            models that we could systematically compare under different climate
            conditions.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Simulation workflow
          </h2>
          <p>
            I built up a library of window configurations using{" "}
            <span className="font-medium">THERM</span> and{" "}
            <span className="font-medium">WINDOW</span>, focusing on:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Double- and triple-pane IGUs with varying gap widths</li>
            <li>
              Different spacer materials and geometries to reduce thermal
              bridging at the frame
            </li>
            <li>
              Coating stacks (e.g., PMMA, silver stack coatings) placed on
              different surfaces of the glazing
            </li>
            <li>
              Seasonal temperature profiles to understand winter vs. summer
              performance
            </li>
          </ul>
          <p>
            For each configuration, I extracted metrics like{" "}
            <span className="font-medium">R-value</span>,{" "}
            <span className="font-medium">U-value</span>, and{" "}
            <span className="font-medium">
              interior surface temperature / SHGC behaviour
            </span>
            , then compared how design changes affected comfort and energy use.
          </p>
        </div>

        <div className="space-y-4">
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 bg-white max-h-[520px] sm:max-h-[420px]">
            <Image
              src="/images/work/dynamic-windows.png"
              alt="THERM / WINDOW simulation results for dynamic solar windows"
              width={1400}
              height={900}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* results + learnings */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Findings &amp; impact
          </h2>
          <p>
            The simulations highlighted that thoughtful combinations of spacer
            design, gap width, and coating placement can substantially increase
            R-value compared to standard IGUs. For example, triple-pane designs
            with optimised gap sizes and low-emissivity coatings reduced
            conductive and radiative losses while keeping interior surface
            temperatures more stable across extreme outdoor conditions.
          </p>
          <p>
            I compiled these results into comparison plots and reports for the
            team at 3ENano, helping connect the modelling work to potential
            product directions and manufacturing constraints.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            This project was my first real bridge between academic simulations
            and industry needs. It sharpened my understanding of building
            physics, taught me how to design fair numerical comparisons, and
            gave me experience presenting technical conclusions to both
            researchers and industry engineers.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech &amp; methods
            </h2>
            <ul className="space-y-1.5">
              <li>THERM &amp; WINDOW for 2D heat-transfer modelling</li>
              <li>Literature &amp; patent review on glazing technologies</li>
              <li>Comparison of R-value, U-value, SHGC vs. design parameters</li>
              <li>Report writing and result presentations to 3ENano</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
