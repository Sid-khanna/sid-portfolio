// app/projects/rover/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function RoverPage() {
  return (
    <ProjectLayout
      title="RSX Rover — autonomy & perception"
      breadcrumbLabel="RSX Rover"
      meta="Robotics & Perception · Design Team · 2021–2022"
      intro={
        <p>
          I was a core software and autonomy member of the Robotics for Space
          Exploration (RSX) design team, working on a Mars-style rover that
          competes in events like the Canadian International Rover Challenge
          (CIRC) and the University Rover Challenge (URC). I focused on sensor
          bring-up, perception, and autonomy infrastructure so downstream
          navigation and mission logic had reliable data to work with.
        </p>
      }
    >
      {/* overview + image */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Role &amp; context
          </h2>
          <p>
            During my time on RSX, I joined the software team focusing on sensor
            implementation and control systems using ROS and Python. The rover is
            designed to operate autonomously in outdoor, unstructured environments
            while tackling tasks such as navigation, science sampling, and
            equipment servicing.
          </p>
          <p>
            For CIRC 2022, I was responsible for bringing up and integrating the
            LiDAR and IMU stack on the rover. This involved understanding sensor
            specifications, collaborating with the electrical and mechanical
            teams, and creating robust ROS nodes that could run reliably in the
            field without compromising real-time performance.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Autonomy &amp; perception work
          </h2>
          <p>
            My work centred on creating a stable perception pipeline that downstream
            autonomy modules could trust. Some key pieces:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">LiDAR integration:</span> configured
              the sensor, wrote ROS launch files, and validated point clouds across
              different ranges and environments.
            </li>
            <li>
              <span className="font-medium">IMU + odometry fusion:</span> helped
              integrate IMU data with wheel odometry to provide smoother pose
              estimates for navigation and mapping.
            </li>
            <li>
              <span className="font-medium">Visualisation &amp; debugging:</span>{" "}
              used RViz and small Python tools to visualise transforms, detect
              mis-calibration, and debug issues before field tests.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/rover-rsx.jpg"
              alt="RSX rover during testing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* infra + learnings + tech card */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Infrastructure &amp; team impact
          </h2>
          <p>
            Beyond perception, I helped set up a shared Ubuntu development
            environment and ROS workspace structure so new team members could get
            running quickly. Standardised launch files and documentation reduced
            setup friction and made it easier to run repeatable tests before
            limited field-testing windows.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I took away
          </h2>
          <p>
            RSX was where I learned how messy real-world robotics can be: noisy
            sensors, flaky connections, batteries dying mid-test, and code that
            behaves differently once it&apos;s running on the actual rover. It
            forced me to write more defensive code, build better visualisation
            tools, and think about autonomy as a system rather than isolated
            algorithms.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>ROS (Robot Operating System)</li>
              <li>Python for ROS nodes &amp; tooling</li>
              <li>LiDAR &amp; IMU bring-up and calibration</li>
              <li>Ubuntu / Linux workflow</li>
              <li>RViz for visualisation &amp; debugging</li>
              <li>Git + shared ROS workspaces</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
