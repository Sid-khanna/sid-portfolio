// app/projects/parsight/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function ParsightPage() {
  return (
    <ProjectLayout
      title="ParSight — golf-ball tracking drone"
      breadcrumbLabel="ParSight"
      meta="Robotics & Perception · Capstone · 2024"
      intro={
        <p>
          An autonomous drone system designed to help senior golfers by
          tracking golf balls in real time and hovering over their final
          position — providing a clear visual reference without interfering
          with gameplay.
        </p>
      }
      snapshot={
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-xs md:text-sm text-neutral-700 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
            Snapshot
          </h2>
          <ul className="space-y-1.5">
            <li>
              <span className="font-medium">Platform:</span> Minion Mini H-Quad
              + Jetson Nano + Orange Cube+
            </li>
            <li>
              <span className="font-medium">Perception:</span> RGB camera, HSV
              filtering, OpenCV contour detection
            </li>
            <li>
              <span className="font-medium">Control:</span> IBVS +
              Proportional–Derivative (PD) controller
            </li>
            <li>
              <span className="font-medium">Detection accuracy:</span> ~95% with
              ~3% false positives
            </li>
            <li>
              <span className="font-medium">Latency:</span> ~350 ms end-to-end
              at 30 Hz
            </li>
            <li>
              <span className="font-medium">Final hover error:</span> ≈ 6 cm
              from ball&apos;s resting position
            </li>
          </ul>
        </div>
      }
    >
      {/* --- overview + photos --- */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem &amp; motivation
          </h2>
          <p>
            As part of our final-year engineering capstone, we built ParSight to
            address a growing accessibility challenge in recreational sports:
            age-related vision decline. Senior golfers often struggle to track
            the ball in flight and locate where it lands, especially on busy or
            visually complex fairways.
          </p>
          <p>
            ParSight is an autonomous drone that follows the ball in the air and
            then hovers over its final resting position, giving players a clear,
            non-intrusive visual marker. The system is designed to be
            lightweight, robust, and deployable on consumer-grade hardware.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            System architecture
          </h2>
          <p>ParSight follows a classic Sense–Plan–Act pipeline:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Sense:</span> A downward-facing RGB
              camera streams 30 FPS video to an onboard NVIDIA Jetson Nano
              running ROS2.
            </li>
            <li>
              <span className="font-medium">Perception:</span> Frames are
              processed using HSV colour filtering and OpenCV-based contour
              detection. Candidate contours are scored by size and circularity to
              isolate the red golf ball, even in cluttered scenes.
            </li>
            <li>
              <span className="font-medium">Plan &amp; Act:</span> The pixel
              offset between the ball and the image centre feeds an Image-Based
              Visual Servoing (IBVS) controller. A PD controller converts this
              error into position setpoints, which are sent to the drone&apos;s
              flight controller to keep the ball centred and to hover over its
              final location.
            </li>
          </ul>
        </div>

        {/* images column */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/drone-parsight.png"
              alt="ParSight drone test setup"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image
                src="/images/projects/parsight-range-test.gif"
                alt="ParSight range and field testing"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <Image
                src="/images/projects/parsight-tracking-view.gif"
                alt="Onboard tracking view and HSV mask"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- results + tech/links --- */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Performance &amp; results
          </h2>
          <p>
            We deployed ParSight on a Minion Mini H-Quad platform with a Jetson
            Nano and Orange Cube+ flight controller. The system maintained
            real-time inference at 30 Hz while handling the full detection and
            control loop onboard.
          </p>
          <p>
            In MVP testing, the drone consistently hovered within approximately{" "}
            <span className="font-medium">6 cm</span> of the ball&apos;s final
            position, even under dynamic launch scenarios using an RC car and
            catapult. Across trials, we achieved around{" "}
            <span className="font-medium">95% detection accuracy</span> with
            roughly <span className="font-medium">3% false positives</span>, and
            an end-to-end latency of about{" "}
            <span className="font-medium">350 ms</span>.
          </p>
          <p>
            The project met 8 out of 10 key performance benchmarks, showing that
            lightweight, classical vision techniques can still deliver reliable
            autonomy for assistive applications without requiring expensive
            hardware or deep learning models.
          </p>
          <p>
            Future work includes upgrading to a Jetson Orin, higher frame-rate
            cameras, and integrating YOLOv8 + TensorRT for more robust outdoor
            tracking and generalisation across ball colours and lighting
            conditions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>ROS2 on NVIDIA Jetson Nano</li>
              <li>Python + OpenCV (HSV filtering, contour detection)</li>
              <li>Image-Based Visual Servoing (IBVS)</li>
              <li>Proportional–Derivative controller</li>
              <li>Orange Cube+ flight controller</li>
              <li>Downward-facing RGB camera @ 30 FPS</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Links &amp; media
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Sid-khanna/FLyRS-ParSight-Capstone"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                GitHub repo
              </a>
              <a
                href="/files/Final_Report_Parsight.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Final report (PDF)
              </a>
              <a
                href="https://youtu.be/EOtyIKrfoxo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Capstone demo video
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
