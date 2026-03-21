"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function ParsightPage() {
  return (
    <ProjectLayout
      title="ParSight - golf-ball tracking drone"
      breadcrumbLabel="ParSight"
      meta="Robotics & Perception · Capstone · 2024"
      intro={
        <p>
          ParSight is an autonomous drone system designed to help senior golfers
          track golf balls in real time and locate where they land. The drone
          follows the ball in flight, then hovers over its final resting
          position to provide a clear visual marker without interfering with
          gameplay.
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
              with Jetson Nano and Orange Cube+
            </li>
            <li>
              <span className="font-medium">Perception:</span> RGB camera, HSV
              filtering, and OpenCV contour detection
            </li>
            <li>
              <span className="font-medium">Control:</span> IBVS with a
              Proportional-Derivative controller
            </li>
            <li>
              <span className="font-medium">Detection accuracy:</span> about 95%
              with roughly 3% false positives
            </li>
            <li>
              <span className="font-medium">Latency:</span> about 350 ms
              end-to-end at 30 Hz
            </li>
            <li>
              <span className="font-medium">Final hover error:</span> about 6 cm
              from the ball&apos;s resting position
            </li>
          </ul>
        </div>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem and motivation
          </h2>
          <p>
            ParSight was built as part of our final-year engineering capstone to
            address a real accessibility challenge in recreational sports.
            Senior golfers can struggle to visually track a ball in flight and
            locate where it lands, especially in visually cluttered outdoor
            environments.
          </p>
          <p>
            Our goal was to create a lightweight autonomous system that could
            follow the ball and then mark its landing point from above. The
            system needed to work in real time, run on compact onboard hardware,
            and remain simple enough to be practical for an assistive use case.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            System architecture
          </h2>
          <p>
            ParSight follows a Sense, Plan, and Act pipeline running onboard the
            drone:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Sense:</span> A downward-facing RGB
              camera streams video at 30 FPS to an onboard NVIDIA Jetson Nano
              running ROS2.
            </li>
            <li>
              <span className="font-medium">Perception:</span> Each frame is
              processed using HSV color filtering and OpenCV-based contour
              detection. Candidate contours are filtered using shape and size
              constraints to isolate the red golf ball in cluttered scenes.
            </li>
            <li>
              <span className="font-medium">Plan and Act:</span> The offset
              between the ball position and image center is used in an
              Image-Based Visual Servoing pipeline. A PD controller converts
              image-space error into position commands for the drone&apos;s
              flight controller.
            </li>
          </ul>
          <p>
            I was particularly involved in the perception side of the system,
            including the earlier exploration of a YOLO-based segmentation
            approach before the team pivoted to HSV filtering for better
            performance and reliability on the Jetson Nano.
          </p>
        </div>

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

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Performance and results
          </h2>
          <p>
            We deployed ParSight on a Minion Mini H-Quad equipped with a Jetson
            Nano and Orange Cube+ flight controller. The system maintained
            real-time operation while running the full perception and control
            loop onboard.
          </p>
          <p>
            In MVP testing, the drone consistently hovered within about{" "}
            <span className="font-medium">6 cm</span> of the ball&apos;s final
            resting position. Across trials, the system achieved approximately{" "}
            <span className="font-medium">95% detection accuracy</span> with
            around <span className="font-medium">3% false positives</span>, and
            end-to-end latency remained close to{" "}
            <span className="font-medium">350 ms</span>.
          </p>
          <p>
            The project met 8 of 10 major performance targets, which showed that
            a lightweight classical vision pipeline could still deliver reliable
            assistive autonomy without depending on heavier deep learning models
            or more expensive compute.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            This project gave me hands-on experience building a complete robotic
            system that combined onboard perception, control, real-time
            constraints, and user-centered design. It reinforced how much system
            performance depends not just on model quality, but on practical
            choices around latency, hardware limits, and robustness in the real
            world.
          </p>
          <p>
            It also taught me the value of iteration and tradeoff analysis. Our
            shift from a heavier YOLO-based approach to HSV filtering was a good
            example of choosing the method that best fit the platform and use
            case, rather than the most complex method available.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>ROS2 on NVIDIA Jetson Nano</li>
              <li>Python and OpenCV for HSV filtering and contour detection</li>
              <li>Image-Based Visual Servoing</li>
              <li>Proportional-Derivative controller</li>
              <li>Orange Cube+ flight controller</li>
              <li>Downward-facing RGB camera at 30 FPS</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Links and media
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
