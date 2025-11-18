// app/projects/lded/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function LdedPage() {
  return (
    <ProjectLayout
      title="LDED thesis — melt pool monitoring with ML"
      breadcrumbLabel="LDED thesis"
      meta="AI & ML · Undergraduate thesis · 2023–2025"
      intro={
        <p>
          For my undergraduate thesis I joined the Laboratory for Extreme
          Mechanics &amp; Additive Manufacturing, where I worked on
          optimizing Laser Directed Energy Deposition (LDED) using
          high-speed infrared imaging and machine learning. My work focused
          on building a high-throughput experimental pipeline and regression
          models to relate melt pool stability and surface features to print
          quality.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Process:</span> Laser Directed
            Energy Deposition (LDED) with high-speed IR monitoring
          </li>
          <li>
            <span className="font-medium">Design space:</span> 360+ unique
            combinations of laser power, scan speed, and feed rate
          </li>
          <li>
            <span className="font-medium">Features:</span> melt pool
            stability, morphology, sputter density + geometric track metrics
          </li>
          <li>
            <span className="font-medium">Models:</span> linear regression,
            tree ensembles, and neural networks for quality prediction
          </li>
        </ul>
      }
    >
      {/* overview + images (poster-style) */}
      <section className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Motivation &amp; approach
          </h2>
          <p>
            LDED enables the fabrication and repair of complex, high-value
            metal components, but the melt pool is highly dynamic and prone
            to defects if the process is not well controlled. Traditional
            post-process metrics like track height and surface roughness
            don&apos;t fully capture these transient instabilities.
          </p>
          <p>
            To address this, I helped design a{" "}
            <span className="font-medium">high-throughput experiment</span>{" "}
            matrix that systematically varied laser power, scan speed and
            powder feed rate. For each track, a high-speed IR camera logged
            melt pool evolution at kilo-hertz rates while 3D scans captured
            final geometry, giving us both in-situ and post-process views of
            print behaviour.
          </p>
          <p>
            From this dataset, we extracted dynamic features such as melt
            pool stability, morphology, and sputter activity, and combined
            them with static geometric features. These became inputs to
            regression models that predict print quality and highlight
            process regions that are more robust.
          </p>
        </div>

        <div className="space-y-4">
          {/* main setup image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/LDED-setup.png"
              alt="LDED experimental setup with IR camera and melt pool monitoring"
              fill
              className="object-cover"
            />
          </div>

          {/* poster-style small images: melt pool frame + graph + thesis cover */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image
                src="/images/projects/lded-poster.png"
                alt="Poster-style summary with melt pool frame and stability graph"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image
                src="/images/projects/lded-thesis-cover.png"
                alt="Cover page of undergraduate LDED thesis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* modelling + findings */}
      <section className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
        <h2 className="text-lg font-semibold tracking-tight">
          Modelling &amp; key findings
        </h2>
        <p>
          I implemented a regression pipeline comparing linear models,
          decision trees, extra-trees ensembles, and feed-forward neural
          networks to predict melt track height, melt pool area, a stability
          metric, and a combined stability + surface roughness score.
        </p>
        <p>
          A consistent result was that{" "}
          <span className="font-medium">melt pool stability</span>—captured
          through steady-state duration and variability—was a far stronger
          predictor of print quality than morphology or sputter density
          alone. Models that fused stability with geometric features
          achieved the best performance, highlighting the value of combining
          in-situ and post-process information for monitoring and control.
        </p>
      </section>

      {/* publication + thesis */}
      <section className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
        <h2 className="text-lg font-semibold tracking-tight">
          Publication &amp; thesis
        </h2>

        <p>
          I joined the lab as an undergraduate thesis student and contributed
          to a larger PhD-led research project on melt pool morphology and
          process stability in LDED. Being involved in the experiments and
          analysis behind that work was a great learning experience and a
          meaningful part of my thesis journey.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* journal article */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Journal article
            </h3>
            <p className="mb-2">
              Our group&apos;s broader study on melt pool morphology and
              stability in LDED was published in{" "}
              <span className="italic">Journal of Manufacturing Processes</span>{" "}
              in 2025, led by the PhD student heading the project.
            </p>
            <p className="text-xs text-neutral-600 mb-3">
              “Mechanism and quantification of melt pool morphology evolution
              in laser directed energy deposition,”{" "}
              <span className="italic">J. Manuf. Processes</span>, 2025.{" "}
              DOI: 10.1016/j.jmapro.2025.10.097
            </p>
            <a
              href="https://doi.org/10.1016/j.jmapro.2025.10.097"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
            >
              View paper ↗
            </a>
          </div>

          {/* thesis */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Undergraduate thesis
            </h3>
            <p className="mb-2">
              My thesis,{" "}
              <span className="font-medium">
                “Optimization of Laser Directed Energy Deposition (LDED)
                Additive Manufacturing Process with High-Speed IR cameras”
              </span>
              , builds a high-throughput IR monitoring framework and regression
              models to predict print quality from combined dynamic and static
              features.
            </p>
            <a
              href="/files/Siddharth_Khanna_Thesis.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Read thesis (PDF)
            </a>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
