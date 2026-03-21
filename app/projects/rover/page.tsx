"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function RoverPage() {
  return (
    <ProjectLayout
      title="RSX Rover - autonomy and perception"
      breadcrumbLabel="RSX Rover"
      meta="Robotics & Perception · Design Team · 2021–2022"
      intro={
        <p>
          I was a core software and autonomy member of the Robotics for Space
          Exploration design team, working on a Mars-style rover for competitions
          such as the Canadian International Rover Challenge and the University
          Rover Challenge. My work focused on sensor bring-up, perception, and
          autonomy infrastructure so the rover had reliable data for downstream
          navigation and decision-making.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Team:</span> Robotics for Space
            Exploration design team
          </li>
          <li>
            <span className="font-medium">Focus:</span> sensor integration,
            autonomy infrastructure, and perception support
          </li>
          <li>
            <span className="font-medium">My role:</span> LiDAR and IMU bring-up,
            ROS tooling, debugging, and development workflow support
          </li>
          <li>
            <span className="font-medium">Goal:</span> provide reliable sensing
            and system infrastructure for rover autonomy tasks
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Role and context
          </h2>
          <p>
            On RSX, I joined the software and autonomy side of the team, where
            the rover had to operate in outdoor, unstructured environments while
            completing tasks related to navigation, science operations, and
            mission execution. That meant the software stack needed to be reliable
            enough to support testing in conditions that were far less controlled
            than a classroom or lab setting.
          </p>
          <p>
            For CIRC 2022, I worked on bringing up and integrating the LiDAR and
            IMU stack on the rover. This involved understanding the sensor
            interfaces, coordinating with mechanical and electrical teammates,
            and building ROS-based components that could run consistently during
            field tests.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Autonomy and perception work
          </h2>
          <p>
            My work focused on making the sensing pipeline stable enough for
            downstream autonomy modules to rely on. Some of the main pieces were:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">LiDAR integration:</span> configuring
              the sensor, writing launch files, and validating point cloud output
              across different environments and testing conditions.
            </li>
            <li>
              <span className="font-medium">IMU and odometry support:</span>{" "}
              helping integrate inertial data with rover motion estimates to
              improve pose information for mapping and navigation.
            </li>
            <li>
              <span className="font-medium">Visualization and debugging:</span>{" "}
              using RViz and small Python tools to inspect transforms, identify
              calibration issues, and troubleshoot system behavior before and
              during testing.
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

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Infrastructure and team impact
          </h2>
          <p>
            Beyond the sensor stack itself, I also helped set up a shared Ubuntu
            development environment and ROS workspace structure so newer team
            members could get running more quickly. Standardized launch files,
            shared tooling, and clearer setup steps made it easier for the team
            to run repeatable tests and spend less time fighting the environment.
          </p>
          <p>
            That kind of infrastructure work was important because field-testing
            time was limited, and a lot of the team&apos;s progress depended on
            being able to debug quickly and trust the software stack before the
            rover went outside.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            RSX was one of my first real experiences with how messy robotics can
            be in practice. Sensors are noisy, hardware connections fail, systems
            drift out of calibration, and software that works on a laptop can
            behave very differently once it is running on the robot.
          </p>
          <p>
            That experience pushed me to write more defensive code, build better
            debugging workflows, and think about robotics as a full system rather
            than a collection of isolated modules. It also strengthened my
            interest in perception and autonomy work where reliability matters
            just as much as the algorithm itself.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>ROS for robotics integration</li>
              <li>Python for ROS nodes and tooling</li>
              <li>LiDAR and IMU bring-up and calibration</li>
              <li>Ubuntu and Linux development workflow</li>
              <li>RViz for visualization and debugging</li>
              <li>Git and shared ROS workspaces</li>
            </ul>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
