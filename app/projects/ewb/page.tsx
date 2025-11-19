"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function EWBPage() {
  return (
    <ProjectLayout
      title="Engineering Without Borders — Curriculum Change Project"
      breadcrumbLabel="EWB Curriculum Project"
      meta="Impact & Leadership · Sustainability · 2022–2023"
      intro={
        <p>
          During my time with Engineers Without Borders (EWB), I led the{" "}
          <strong>Curriculum Change Project</strong>, which focused on 
          incorporating sustainability into the Engineering Strategies & Practice 
          (ESP) course at the University of Toronto. After stepping in as project 
          lead, I refined the scope to target high-impact improvements that could 
          be integrated directly into the course structure.
        </p>
      }
    >

      {/* SECTION 1 — Story */}
      <section className="space-y-4 text-neutral-800 leading-relaxed text-sm md:text-base">
        <p>
          I recruited and onboarded a new team, conducted research on similar 
          sustainability initiatives across other universities, and partnered 
          with the <strong>Sustainability Engineering Association</strong> to 
          launch a university-wide survey. This helped us gather insights from 
          engineering students on how sustainability topics could be better 
          incorporated into ESP.
        </p>

        <p>
          Our efforts culminated in a comprehensive report that presented 
          actionable strategies for embedding sustainability principles into the 
          course. I also met with faculty members to discuss practical 
          implementation approaches and ensure alignment with departmental 
          objectives.
        </p>

        <p>
          Although I later stepped down from my leadership role, I continued to 
          contribute as a consultant, supporting the project as it transitioned 
          toward implementation.
        </p>

        <h2 className="text-lg font-semibold tracking-tight mt-6">
          What I learned
        </h2>
        <p>
          This project strengthened my communication and leadership skills, 
          improved my experience with stakeholder management, and deepened my 
          understanding of how technical education can adapt to prepare students 
          for global sustainability challenges. It also taught me how to guide a 
          diverse team toward a shared goal while navigating academic 
          constraints.
        </p>
      </section>

    </ProjectLayout>
  );
}
