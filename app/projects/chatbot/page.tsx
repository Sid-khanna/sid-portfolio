"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function PortfolioChatbotPage() {
  return (
    <ProjectLayout
      title="Portfolio Chatbot with GraphRAG"
      breadcrumbLabel="Portfolio chatbot"
      meta="AI & ML · Personal · 2024"
      intro={
        <p>
          I built this chatbot to turn my portfolio into an interactive way to
          explore my work. Instead of relying on a static about page or project
          list, visitors can ask questions about my projects, skills, and
          background, and the system responds using a Neo4j knowledge graph and
          retrieval-augmented generation.
        </p>
      }
    >
      {/* overview + screenshot */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Why I built it
          </h2>
          <p>
            Most portfolios are static. You scroll through sections, skim a few
            projects, and try to piece together what someone has actually built.
            I wanted something that felt closer to a real conversation, where a
            visitor could ask specific questions like “What did you build at
            Mold-Masters?” or “Which of your projects use robotics and computer
            vision?”.
          </p>
          <p>
            The goal was to make my portfolio easier to explore while also
            building something that reflects how I think about AI systems. The
            chatbot lets users navigate my experience through dialogue, while
            staying grounded in structured information rather than generating
            vague summaries from scratch.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Knowledge graph and retrieval
          </h2>
          <p>
            At the core of the project is a Neo4j knowledge graph that models my
            portfolio as connected entities. Nodes represent things like
            projects, roles, technologies, interests, and domains, while edges
            capture how those pieces relate to one another.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Projects</span> store summaries,
              tech stacks, timelines, and key responsibilities.
            </li>
            <li>
              <span className="font-medium">Skills and tools</span> connect to
              projects they were used in, making it easier to answer cross-cutting
              questions.
            </li>
            <li>
              <span className="font-medium">Relationships</span> encode
              structure such as who built what, which technologies were used,
              and which themes connect multiple projects.
            </li>
          </ul>
          <p>
            This graph-based setup makes it possible to answer more flexible
            questions. Instead of relying on one flat document, the system can
            retrieve connected context across multiple projects, roles, and
            technologies before generating a response.
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
            The chatbot is embedded into my portfolio with a simple chat-style
            interface, grounded responses, and links back to relevant project
            pages when users want to explore further.
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
            I designed the system as a lightweight but realistic GraphRAG-style
            application:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">1. User query:</span> A visitor asks
              about a project, skill, role, or area of interest.
            </li>
            <li>
              <span className="font-medium">2. Graph retrieval:</span> The
              backend queries Neo4j for relevant nodes and connected context
              based on the entities in the question.
            </li>
            <li>
              <span className="font-medium">3. Context building:</span> Retrieved
              graph data is turned into a structured prompt with project details,
              technologies, responsibilities, and related links.
            </li>
            <li>
              <span className="font-medium">4. Response generation:</span> An
              LLM generates a grounded answer using that context, which helps
              keep responses specific and reduces unsupported claims.
            </li>
          </ul>
          <p>
            This approach works especially well for questions that span multiple
            parts of my portfolio, such as combining manufacturing and machine
            learning, or comparing robotics work across different projects.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Product and UX decisions
          </h2>
          <p>
            I wanted the chatbot to feel like an extension of my portfolio, not
            a separate demo bolted onto the side. The interface is intentionally
            minimal, and the responses are designed to be concise, clear, and
            grounded in the actual content of my site.
          </p>
          <p>
            I also spent time shaping the prompt and retrieval flow so the
            assistant sounds like me without becoming too casual or drifting away
            from the facts. That meant balancing tone, brevity, and technical
            detail while making sure users could still jump back to full project
            pages when they wanted more depth.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            This project helped me think more deeply about the difference between
            simply connecting an LLM to data and building a system that is
            actually useful. The graph structure made retrieval more flexible,
            but the real challenge was designing clean context, good prompts,
            and an experience that made the answers feel trustworthy.
          </p>
          <p>
            It also became a strong way to combine several things I enjoy:
            backend logic, AI systems, knowledge representation, and product
            thinking. Longer term, I would like to expand it into a reusable
            portfolio template for other developers.
          </p>
        </div>

        {/* tech + links */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>Next.js and React for the frontend</li>
              <li>Tailwind CSS for UI styling</li>
              <li>Python backend for orchestration and retrieval</li>
              <li>Neo4j as the knowledge graph store</li>
              <li>GraphRAG-style retrieval over portfolio entities</li>
              <li>OpenRouter API for LLM responses</li>
              <li>Vercel deployment with cloud-hosted graph infrastructure</li>
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
