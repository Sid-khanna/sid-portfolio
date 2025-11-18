// app/projects/story-studio/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function StoryStudioPage() {
  return (
    <ProjectLayout
      title="AI Story Studio — character & story generator"
      breadcrumbLabel="AI Story Studio"
      meta="AI & ML · Personal · 2023–2024"
      intro={
        <p>
          A web app that helps people turn half-formed character ideas into
          detailed profiles and story seeds. Users describe a character’s voice,
          traits, and genre through a guided multi-step flow, and the app uses
          LLMs to generate a tailored character sheet plus a short narrative
          blurb in the chosen style.
        </p>
      }
    >
      {/* overview + screenshot */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Blending engineering & storytelling
          </h2>
          <p>
            Writing has always been the creative counterweight to my engineering
            work. While I was drafting my first novel, I kept wishing for a tool
            that could react to my ideas the way a co-writer would: ask good
            questions, remember details, and help explore “what if” scenarios.
          </p>
          <p>
            AI Story Studio started as that tool. The first version was a Flask
            app that walked users through a structured questionnaire about their
            character – name, age, backstory, strengths, flaws, tone, and genre –
            then called OpenRouter’s LLM API to generate a rich character
            profile and a short, genre-specific story hook.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Guided character creation flow
          </h2>
          <p>
            Instead of a single text box, the app uses a multi-step wizard that
            mirrors how writers actually think:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Voice &amp; tone:</span> first,
              users choose genre, pacing, and narrative style (e.g. cosy
              fantasy, gritty sci-fi, slow-burn romance).
            </li>
            <li>
              <span className="font-medium">Core identity:</span> name, age,
              role in the story, and a short free-text description.
            </li>
            <li>
              <span className="font-medium">Strengths &amp; weaknesses:</span>{" "}
              structured prompts for skills, flaws, fears, and emotional
              pressures.
            </li>
            <li>
              <span className="font-medium">Arc &amp; themes:</span> what the
              character wants, what stands in their way, and how they might
              change.
            </li>
          </ul>
          <p>
            All of this becomes a compact, well-labelled prompt that the LLM can
            reliably work with, producing outputs that stay consistent with the
            user’s intent instead of generic fantasy templates.
          </p>
        </div>

        {/* screenshot column */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/story-studio-placeholder.jpg"
              alt="AI Story Studio character and story output"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-neutral-500">
            Early version of AI Story Studio showing a generated character sheet
            and five-beat story outline based on a multi-step character intake
            form.
          </p>
        </div>
      </div>

      {/* v1 vs v2 + tech + links */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            From Flask prototype to Vercel app
          </h2>
          <p>
            The first version was built with{" "}
            <span className="font-medium">Flask + Tailwind</span> and deployed
            as a simple single-page app. It validated the idea: friends used it
            to spin up NPCs for tabletop campaigns and side characters for
            short stories.
          </p>
          <p>
            I&apos;m now rebuilding the project as{" "}
            <span className="font-medium">AI Story Studio v2</span>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Next.js + Vercel frontend:</span>{" "}
              cleaner UI, better routing, and faster iteration.
            </li>
            <li>
              <span className="font-medium">API-first backend:</span> a Python
              service that handles LLM prompts, persona control, and rate
              limiting.
            </li>
            <li>
              <span className="font-medium">Reusable prompt modules:</span>{" "}
              shared prompt fragments for “strengths/weaknesses”, “arc
              outline”, and “story blurb” so I can swap models (DeepSeek,
              Mistral, etc.) without rewriting logic.
            </li>
            <li>
              <span className="font-medium">Exportable output:</span> structured
              JSON and markdown so characters can be reused in other tools or
              writing workflows.
            </li>
          </ul>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            Beyond the fun of generating characters, this project taught me a
            lot about prompt design, user onboarding for creative tools, and how
            to keep LLM outputs grounded in user input instead of drifting into
            clichés. It also pushed me to think about AI as a co-creator{" "}
            <span className="italic">with constraints</span> rather than a
            magic idea machine.
          </p>
        </div>

        {/* tech + links cards */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>Flask (v1) + Tailwind CSS</li>
              <li>Next.js (v2, in progress) deployed on Vercel</li>
              <li>OpenRouter LLM API (DeepSeek, Mistral, etc.)</li>
              <li>Structured multi-step prompt design</li>
              <li>Markdown / JSON exports for characters &amp; story beats</li>
            </ul>
          </div>


          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Repos & versions
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Sid-khanna/GenApp/tree/main"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                v1 – Flask prototype (GenApp)
              </a>
              <a
                href="https://github.com/Sid-khanna/story-studio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                v2 – Story Studio (Next.js, WIP)
              </a>
            </div>
            <p className="text-xs text-neutral-500">
              The live v1 version is available at  
              <a href="https://ai-story-odpj.onrender.com/" target="_blank" rel="noreferrer" className="underline hover:text-neutral-700">https://ai-story-odpj.onrender.com/</a>
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
