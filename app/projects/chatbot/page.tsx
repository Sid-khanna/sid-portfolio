// app/projects/chatbot/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function PortfolioChatbotPage() {
  return (
    <ProjectLayout
      title="Portfolio chatbot — GraphRAG + Neo4j"
      breadcrumbLabel="Portfolio chatbot"
      meta="AI & ML · Personal · 2024"
      intro={
        <p>
          A conversational assistant that lives on my portfolio site and answers
          questions about my projects, skills, and background. Instead of a static
          “about” page, it uses a Neo4j knowledge graph and retrieval-augmented
          generation so people can explore my work through dialogue.
        </p>
      }
    >
      {/* overview + screenshot */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Why a portfolio chatbot?
          </h2>
          <p>
            Most portfolios are static: you scroll, skim, and maybe click a few
            links. I wanted something closer to how real conversations go when
            I talk about my work — people ask things like “How did you use
            ROS2 on the drone project?” or “What have you done with Neo4j?”.
          </p>
          <p>
            The chatbot turns my portfolio into an interactive Q&amp;A space. It
            pulls structured information from a knowledge graph of my{" "}
            <span className="font-medium">projects, roles, skills, tools, and interests</span>,
            then uses an LLM to respond in my voice while staying grounded in
            that graph.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Knowledge graph &amp; retrieval
          </h2>
          <p>
            At the core is a Neo4j graph where each node represents something
            about me: projects (ParSight, ingrAIdients, WSC solar car), roles
            (Automation Developer, researcher, team lead), technologies (ROS2,
            PyTorch, Neo4j), and themes (robotics, AI, manufacturing, writing).
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Nodes store rich descriptions, tags, and metadata like dates,
              responsibility level, and tech stack.
            </li>
            <li>
              Relationships capture how things connect — for example,
              <span className="font-medium"> Sid –[BUILT]→ ParSight –[USES]→ ROS2</span>{" "}
              or <span className="font-medium">Sid –[INTERESTED_IN]→ Computer Vision</span>.
            </li>
            <li>
              The app uses a GraphRAG-style flow: interpret the question, fetch
              relevant nodes and neighbours, then feed that structured context
              into the LLM.
            </li>
          </ul>
          <p>
            This means queries like “Tell me about your work with drones and
            Jetson” or “What projects combine ML and manufacturing?” pull from
            multiple related nodes instead of a single flat document.
          </p>
        </div>

        {/* UI image */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/portfolio-chatbot-ui.png"
              alt="Portfolio chatbot conversation UI"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-neutral-500">
            The chatbot runs on my portfolio site with a clean, minimal UI:
            messages styled like a real chat, grounded answers, and links back
            to full project write-ups when relevant.
          </p>
        </div>
      </div>

      {/* pipeline + UX + side cards */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            End-to-end pipeline
          </h2>
          <p>
            The chatbot is designed as a small but realistic RAG system:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">1. User query:</span> A visitor
              asks something about my experience, projects, or interests.
            </li>
            <li>
              <span className="font-medium">2. Retrieval:</span> The backend
              queries Neo4j for the most relevant nodes and their neighbours
              based on project tags, technologies, and relationships.
            </li>
            <li>
              <span className="font-medium">3. Context building:</span> The
              graph results are formatted into a compact context block
              (projects, roles, responsibilities, outcomes).
            </li>
            <li>
              <span className="font-medium">4. Generation:</span> An LLM (via
              OpenRouter) answers the question in my voice, grounded in that
              context, and avoids hallucinating things not present in the graph.
            </li>
          </ul>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            UX &amp; tone
          </h2>
          <p>
            The frontend is built to feel like chatting with me, not a generic
            bot. Responses are short, direct, and slightly informal, with just
            enough detail and links when someone wants to dig deeper into a
            project page, GitHub repo, or paper.
          </p>
          <p>
            I also tuned the system prompt so the assistant explains tradeoffs
            and design decisions (for example, why I picked ROS2, or how I think
            about GraphRAG vs. vanilla vector search), which makes it a more
            honest reflection of how I work.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Next steps
          </h2>
          <p>
            Future iterations will add richer graph queries, better summarisation
            over long project histories, and analytics on what people actually
            ask about. Longer term, I&apos;d like to turn this into a reusable
            template for other developers who want an intelligent portfolio
            instead of another static site.
          </p>
        </div>

        {/* tech + links */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>Next.js + React for the frontend</li>
              <li>Tailwind CSS for styling</li>
              <li>Python backend for graph + LLM orchestration</li>
              <li>Neo4j as the knowledge graph store</li>
              <li>GraphRAG-style retrieval over project/skill nodes</li>
              <li>OpenRouter LLM API for responses</li>
              <li>Deployed on Vercel (frontend) + cloud-hosted Neo4j</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Links &amp; demo
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://sid-portfolio-chat.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Live demo
              </a>
              <a
                href="https://github.com/Sid-khanna/portfolio-chatbot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                GitHub repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
