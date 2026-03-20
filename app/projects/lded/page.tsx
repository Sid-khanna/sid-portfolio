"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function LdedPage() {
  return (
    <ProjectLayout
      title="LDED Thesis - melt pool monitoring with machine learning"
      breadcrumbLabel="LDED thesis"
      meta="AI & ML · Undergraduate thesis · 2023–2025"
      intro={
        <p>
          For my undergraduate thesis, I worked in the Laboratory for Extreme
          Mechanics and Additive Manufacturing on optimizing Laser Directed
          Energy Deposition using high-speed infrared imaging and machine
          learning. My work focused on building a high-throughput experimental
          pipeline and regression models to connect melt pool behavior and
          surface features to print quality.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Process:</span> Laser Directed Energy
            Deposition with high-speed IR monitoring
          </li>
          <li>
            <span className="font-medium">Design space:</span> 360+ unique
            combinations of laser power, scan speed, and feed rate
          </li>
          <li>
            <span className="font-medium">Features:</span> melt pool stability,
            morphology, sputter density, and geometric track metrics
          </li>
          <li>
            <span className="font-medium">Models:</span> linear regression, tree
            ensembles, and neural networks for quality prediction
          </li>
        </ul>
      }
    >
      <section className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Motivation and approach
          </h2>
          <p>
            LDED is a promising additive manufacturing process for repairing and
            fabricating high-value metal components, but print quality is highly
            sensitive to melt pool behavior. Small process changes can lead to
            unstable deposition, poor track formation, or downstream defects,
            which makes in-situ monitoring especially important.
          </p>
          <p>
            To study this, I helped build a{" "}
            <span className="font-medium">high-throughput experimental matrix</span>{" "}
            that systematically varied laser power, scan speed, and powder feed
            rate. For each condition, a high-speed IR camera recorded melt pool
            evolution while 3D scans captured the final track geometry, giving us
            both dynamic and post-process views of the build.
          </p>
          <p>
            From this dataset, I extracted features related to melt pool
            stability, morphology, sputter activity, and surface geometry. These
            were then used as inputs to regression models designed to predict
            print quality and identify more stable operating regions within the
            process space.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative w-full max-w-xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <Image
              src="/images/work/LDED-setup.png"
              alt="LDED experimental setup with IR camera and melt pool monitoring"
              fill
              className="object-contain max-h-[60vh]"
              priority
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              <Image
                src="/images/work/thesis-1.png"
                alt="LDED melt pool frame and stability analysis"
                fill
                className="object-contain max-h-[40vh]"
              />
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              <Image
                src="/images/work/thesis-2.png"
                alt="LDED regression results and quality prediction"
                fill
                className="object-contain max-h-[40vh]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
        <h2 className="text-lg font-semibold tracking-tight">
          Modelling and key findings
        </h2>
        <p>
          I implemented a regression pipeline comparing linear models, decision
          trees, extra-trees ensembles, and feed-forward neural networks to
          predict melt track height, melt pool area, a stability metric, and a
          combined stability plus surface roughness score.
        </p>
        <p>
          One of the clearest findings was that{" "}
          <span className="font-medium">melt pool stability</span>, especially
          when captured through steady-state duration and variability, was a much
          stronger predictor of print quality than morphology or sputter density
          alone. Models that combined stability with geometric features produced
          the best results, reinforcing the value of using both in-situ and
          post-process information together.
        </p>
        <p>
          This work helped show that dynamic monitoring signals can provide more
          meaningful insight into process quality than static measurements on
          their own, which is important for future real-time monitoring and
          control strategies in additive manufacturing.
        </p>
      </section>

      <section className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
        <h2 className="text-lg font-semibold tracking-tight">
          Publication and thesis
        </h2>

        <p>
          I joined the lab as an undergraduate thesis student and contributed to
          a broader PhD-led research effort on melt pool morphology and process
          stability in LDED. Working on the experiments, feature extraction, and
          modeling for that project was a major part of my thesis experience and
          gave me valuable exposure to research in a real lab setting.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Journal article
            </h3>
            <p className="mb-2">
              The group&apos;s broader work on melt pool morphology and stability
              in LDED was published in the{" "}
              <span className="italic">Journal of Manufacturing Processes</span>{" "}
              in 2025.
            </p>
            <p className="text-xs text-neutral-600 mb-3">
              “Mechanism and quantification of melt pool morphology evolution in
              laser directed energy deposition,”{" "}
              <span className="italic">Journal of Manufacturing Processes</span>,
              2025. DOI: 10.1016/j.jmapro.2025.10.097
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

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Undergraduate thesis
            </h3>
            <p className="mb-2">
              My thesis,{" "}
              <span className="font-medium">
                “Optimization of Laser Directed Energy Deposition Additive
                Manufacturing Process with High-Speed IR Cameras”
              </span>
              , focused on building a high-throughput monitoring framework and
              training regression models to predict print quality from combined
              dynamic and static features.
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
