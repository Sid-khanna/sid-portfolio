"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function HelpingHandPage() {
  return (
    <ProjectLayout
      title="Helping Hand - assistive design for wheelchair users"
      breadcrumbLabel="Helping Hand"
      meta="Design & Manufacturing · Coursework · 2022"
      intro={
        <p>
          This project was completed as part of Praxis II, where my team worked
          on improving the lived experience of powered wheelchair users. After
          exploring the initial design brief, we reframed the problem to focus
          on mitigation, designing a solution that helps users retrieve dropped
          objects rather than trying to prevent drops entirely.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Context:</span> Praxis II assistive
            design project
          </li>
          <li>
            <span className="font-medium">Focus:</span> improving accessibility
            and user independence
          </li>
          <li>
            <span className="font-medium">My role:</span> concept refinement,
            CAD design, animations, and engineering drawings
          </li>
          <li>
            <span className="font-medium">Outcome:</span> a wheelchair-mounted
            retrieval concept for small personal items
          </li>
        </ul>
      }
    >
      <section className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
        <h2 className="text-lg font-semibold tracking-tight">
          Understanding the problem
        </h2>
        <p>
          The project began with a broad challenge around powered wheelchair
          accessibility. Through stakeholder conversations and team discussions,
          we realized that trying to prevent dropped objects entirely was too
          broad and less practical than focusing on what happens after something
          falls.
        </p>
        <p>
          That led us to reframe the opportunity around retrieval. We focused on
          creating a concept that would be safe, usable, and realistically
          integrated into a wheelchair user&apos;s day-to-day experience. This
          part of the project strengthened my ability to work through ambiguous
          design problems and align technical decisions with real user needs.
        </p>

        <h2 className="mt-6 text-lg font-semibold tracking-tight">
          Designing the solution
        </h2>
        <p>
          Our final concept, the <span className="font-medium">Helping Hand</span>,
          was selected after an extended concept generation and evaluation
          process. I was primarily responsible for the technical design work,
          including CAD modeling, mechanism refinement, animations, and detailed
          engineering drawings.
        </p>

        <p>
          The device mounts to the wheelchair and uses a linkage-based arm to
          reach and retrieve small objects such as keys, cards, wallets, or
          other personal items. The design emphasized ease of use, practical
          motion, and manufacturability while keeping the interaction simple for
          the user.
        </p>

        <h2 className="mt-6 text-lg font-semibold tracking-tight">
          What I learned
        </h2>
        <p>
          This project gave me hands-on experience with user-centered design in
          a way that went beyond just building a mechanism. It reinforced the
          importance of stakeholder input, clear communication, and careful
          problem framing when designing for real users.
        </p>
        <p>
          It also helped strengthen my CAD skills and my ability to translate
          early concepts into detailed technical representations that could be
          communicated clearly to teammates, instructors, and stakeholders.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
          <Image
            src="/images/work/helping-hand-1.png"
            alt="Helping Hand CAD overview"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-200 bg-white">
          <Image
            src="/images/work/helping-hand-2.png"
            alt="Helping Hand annotated design and dimensions"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </ProjectLayout>
  );
}
