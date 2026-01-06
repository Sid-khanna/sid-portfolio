// app/projects/f1/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function F1PredictorPage() {
  return (
    <ProjectLayout
      title="Formula 1 race outcome predictor"
      breadcrumbLabel="F1 predictor"
      meta="AI & ML · Personal project · Ongoing"
      intro={
        <p>
          As a lifelong Formula 1 fan, I&apos;m building a machine learning
          pipeline that predicts race outcomes from historical data. The goal
          isn&apos;t just raw accuracy, but extracting features that explain why
          certain drivers and teams consistently outperform others on specific
          tracks.
        </p>
      }
    >
      {/* overview + image */}
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem &amp; motivation
          </h2>
          <p>
            The project explores whether we can meaningfully predict race
            performance using only structured data: past results, team form, and
            track history. Rather than scraping betting odds or insider stats,
            I focus on information that a fan or analyst could reasonably
            access.
          </p>
          <p>
            The model aims to estimate each driver&apos;s expected finishing
            position for a given race, and compare those predictions against
            simple baselines like &quot;last race result&quot; or
            &quot;championship order.&quot; That makes it a good sandbox for
            feature engineering, regularization, and evaluating real uplift over
            naive heuristics.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Data &amp; feature engineering
          </h2>
          <p>
            Data is pulled from public F1 results APIs and processed into
            driver–race rows. From there, I engineer features that try to
            capture both long–term ability and recent form:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Driver form:</span> rolling average
              finish position over recent races with a{" "}
              <span className="font-medium">recency decay</span> so newer races
              matter more.
            </li>
            <li>
              <span className="font-medium">Constructor performance:</span>{" "}
              team-level averages and season pace indicators.
            </li>
            <li>
              <span className="font-medium">Track history:</span> per-driver and
              per-constructor performance on the same circuit across previous
              years.
            </li>
            <li>
              <span className="font-medium">Context features:</span> season
              round, track type, and simple flags for street vs permanent
              circuits.
            </li>
          </ul>
          <p>
            All of this gets normalized and assembled into a feature matrix that
            feeds the modelling stack.
          </p>
        </div>
      </div>

      {/* modelling + tech + links */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Modelling approach
          </h2>
          <p>
            I experiment with several regressors to predict finishing position,
            starting with tree-based baselines and then moving into neural
            networks tuned for tabular data:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Gradient boosting / ensemble models as a strong, interpretable
              baseline.
            </li>
            <li>
              A <span className="font-medium">Keras MLP</span> with batch
              normalization, dropout, and a custom loss that penalizes large
              rank errors more heavily.
            </li>
            <li>
              <span className="font-medium">Keras Tuner</span> for searching
              over depth, width, learning rate, and regularization strength.
            </li>
          </ul>
          <p>
            Performance is tracked using MAE on race position and rank-correlation
            style metrics to see whether the model orders drivers more
            intelligently than simple heuristics.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I&apos;m learning
          </h2>
          <p>
            This project is less about squeezing out the last bit of leaderboard
            accuracy and more about practicing the full loop: sourcing and
            cleaning data, designing features, tuning models, and critically
            evaluating whether a &quot;smart&quot; model is actually better than
            a fan&apos;s intuition. It&apos;s been a fun way to combine data
            science with a sport I&apos;ve followed since childhood.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>Python for data processing &amp; experiments</li>
              <li>pandas &amp; NumPy for feature engineering</li>
              <li>TensorFlow / Keras for neural networks</li>
              <li>Keras Tuner for hyperparameter search</li>
              <li>Matplotlib / seaborn for evaluation plots</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Repo &amp; status
            </h2>
            <p className="text-sm">
              Code, notebooks, and experiment logs live in this repo:
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Sid-khanna/Formula1Project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                GitHub – Formula1Project
              </a>
            </div>
            <p className="text-xs text-neutral-500">
              Currently focused on improving feature quality and testing
              different ranking losses for better grid-order predictions.
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
