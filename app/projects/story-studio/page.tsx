"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function StoryStudioPage() {
  return (
    <ProjectLayout
      title="AI Story Studio - character and story generator"
      breadcrumbLabel="AI Story Studio"
      meta="AI & ML · Personal · 2023–2024"
      intro={
        <p>
          AI Story Studio is a web app that helps users turn rough character
          ideas into structured profiles and story concepts. Through a guided
          multi-step flow, users describe a character&apos;s traits, voice, and
          genre, and the app uses LLMs to generate a tailored character sheet
          and narrative blurb.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Focus:</span> LLM-based character
            generation and creative tooling
          </li>
          <li>
            <span className="font-medium">Approach:</span> structured multi-step
            input flow instead of a single prompt box
          </li>
          <li>
            <span className="font-medium">Versions:</span> Flask prototype
            followed by a Next.js rebuild
          </li>
          <li>
            <span className="font-medium">Goal:</span> make AI outputs more
            consistent, useful, and aligned with user intent
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Blending engineering and storytelling
          </h2>
          <p>
            Writing has always been the creative counterpart to my engineering
            work, and this project grew out of that overlap. While working on my
            own fiction, I kept wishing for a tool that could respond to ideas
            more like a creative collaborator, asking the right questions,
            keeping track of details, and helping shape a character into
            something more complete.
          </p>
          <p>
            AI Story Studio started as an attempt to build that experience. The
            first version guided users through a structured questionnaire about
            their character, then used an LLM to generate a richer profile and a
            short story hook based on the chosen tone and genre.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Guided character creation flow
          </h2>
          <p>
            Instead of relying on one open-ended prompt, the app uses a multi-step
            flow that mirrors how writers often develop characters in practice.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Voice and tone:</span> users choose
              genre, pacing, and narrative style.
            </li>
            <li>
              <span className="font-medium">Core identity:</span> name, age,
              role, and a short description.
            </li>
            <li>
              <span className="font-medium">Strengths and weaknesses:</span>{" "}
              prompts for abilities, flaws, fears, and emotional pressure points.
            </li>
            <li>
              <span className="font-medium">Arc and themes:</span> what the
              character wants, what blocks them, and how they might change.
            </li>
          </ul>
          <p>
            This structure makes the generated output much more consistent than a
            generic prompt. It also makes the app feel more like a tool for
            guided ideation rather than a simple text generator.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative w-full max-w-xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/story-studio-1.png"
              alt="AI Story Studio character and story output"
              fill
              className="object-contain max-h-[60vh]"
              priority
            />
          </div>
          <p className="text-xs text-neutral-500">
            Early version of AI Story Studio showing a generated character sheet
            and story outline based on a multi-step character intake flow.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            From Flask prototype to Next.js rebuild
          </h2>
          <p>
            The first version was built with <span className="font-medium">Flask and Tailwind</span> as a
            lightweight prototype. It was enough to validate the concept and see
            how people interacted with structured creative prompts.
          </p>
          <p>
            I later began rebuilding the project as a more scalable version with
            a cleaner frontend and a more modular backend. The goal was not just
            to improve the UI, but also to make the generation flow easier to
            extend across different models and output formats.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Next.js frontend:</span> improved UI,
              routing, and deployment workflow.
            </li>
            <li>
              <span className="font-medium">Python backend:</span> handles prompt
              construction, model calls, and response shaping.
            </li>
            <li>
              <span className="font-medium">Reusable prompt modules:</span>{" "}
              separates character traits, arcs, and story generation logic into
              cleaner components.
            </li>
            <li>
              <span className="font-medium">Structured output:</span> supports
              markdown and JSON-style exports for reuse in other writing tools.
            </li>
          </ul>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I learned
          </h2>
          <p>
            This project taught me a lot about prompt design, user onboarding,
            and how to build AI systems that are actually shaped by the user
            rather than just producing generic output. In creative tools
            especially, the challenge is not just generating text, but making
            sure the output feels specific, coherent, and aligned with the
            user&apos;s intent.
          </p>
          <p>
            It also pushed me to think more carefully about AI as a constrained
            collaborator. The best results came from giving the model structure,
            context, and clear boundaries rather than expecting creativity to
            emerge from a blank box.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>Flask and Tailwind CSS for the first version</li>
              <li>Next.js and Vercel for the rebuilt frontend</li>
              <li>Python backend for prompt orchestration</li>
              <li>OpenRouter LLM API with multiple model options</li>
              <li>Structured multi-step prompt design</li>
              <li>Markdown and JSON-friendly output formatting</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Repos and versions
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Sid-khanna/GenApp/tree/main"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                v1 - Flask prototype
              </a>
              <a
                href="https://github.com/Sid-khanna/story-studio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                v2 - Next.js rebuild
              </a>
            </div>
            <p className="text-xs text-neutral-500">
              Live v1 demo:{" "}
              <a
                href="https://ai-story-odpj.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-neutral-700"
              >
                ai-story-odpj.onrender.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
