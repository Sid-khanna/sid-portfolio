"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function F1PredictorPage() {
  return (
    <ProjectLayout
      title="Formula 1 Race Outcome Predictor"
      breadcrumbLabel="F1 predictor"
      meta="AI & ML · Personal project · Ongoing"
      intro={
        <p>
          As a lifelong Formula 1 fan, I built this project to explore whether
          race outcomes can be predicted using structured historical data alone.
          The goal is not just to improve prediction accuracy, but to understand
          which features best capture driver form, team strength, and circuit-specific
          performance.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Focus:</span> tabular machine learning,
            feature engineering, and race prediction
          </li>
          <li>
            <span className="font-medium">Data:</span> historical race results,
            constructor form, and track-level trends
          </li>
          <li>
            <span className="font-medium">Models:</span> ensemble baselines and
            neural networks for ranking and position prediction
          </li>
          <li>
            <span className="font-medium">Goal:</span> predict finishing order
            while understanding which features drive performance
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr,1.4fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem and motivation
          </h2>
          <p>
            Formula 1 is a useful prediction problem because performance depends
            on a mix of driver skill, constructor strength, track characteristics,
            and recent form. I wanted to see whether these factors could be
            modeled using publicly available structured data, without relying on
            betting markets or hidden telemetry.
          </p>
          <p>
            The project predicts expected race outcomes for each driver and
            compares those predictions against simple baselines such as previous
            race results or championship order. That makes it a good setting for
            testing whether more advanced models actually add value beyond common
            heuristics.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Data and feature engineering
          </h2>
          <p>
            I built the pipeline around driver-race level rows pulled from public
            F1 data sources, then engineered features to capture both long-term
            ability and short-term momentum.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-medium">Driver form:</span> rolling performance
              trends with recency weighting so recent races matter more than
              older ones.
            </li>
            <li>
              <span className="font-medium">Constructor strength:</span> team-level
              indicators that capture overall pace and consistency.
            </li>
            <li>
              <span className="font-medium">Track history:</span> driver and team
              performance on the same circuit across past seasons.
            </li>
            <li>
              <span className="font-medium">Race context:</span> round number,
              circuit type, and other simple contextual signals.
            </li>
          </ul>
          <p>
            These features are cleaned, normalized, and assembled into a tabular
            dataset for downstream modelling and evaluation.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Modelling approach
          </h2>
          <p>
            I experimented with multiple approaches to predict finishing position,
            starting with interpretable baselines and then moving toward neural
            networks for more flexible modelling.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Tree-based and ensemble models as strong tabular baselines.
            </li>
            <li>
              A <span className="font-medium">Keras MLP</span> with batch
              normalization, dropout, and regularization for position prediction.
            </li>
            <li>
              <span className="font-medium">Keras Tuner</span> for searching
              over architecture size, learning rate, and regularization settings.
            </li>
          </ul>
          <p>
            I evaluate the models using position-based error metrics and ranking-style
            metrics to understand whether the model is ordering drivers more
            intelligently than simpler methods.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            What I am learning
          </h2>
          <p>
            This project has been a good way to practice the full machine
            learning workflow on a problem I genuinely care about. It involves
            sourcing and structuring data, designing useful features, tuning
            models, and deciding whether performance improvements are actually
            meaningful.
          </p>
          <p>
            More than anything, it has helped me think carefully about the gap
            between building a model and building a useful predictor. In a noisy
            domain like racing, feature quality and evaluation design matter just
            as much as the choice of model.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>Python for data processing and experiments</li>
              <li>pandas and NumPy for feature engineering</li>
              <li>TensorFlow and Keras for neural networks</li>
              <li>Keras Tuner for hyperparameter search</li>
              <li>Matplotlib for evaluation and analysis</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Repo and status
            </h2>
            <p className="text-sm">
              Code, notebooks, and experiment logs live in this repository:
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Sid-khanna/Formula1Project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                GitHub - Formula1Project
              </a>
            </div>
            <p className="text-xs text-neutral-500">
              Current work is focused on improving feature quality, refining
              ranking-based evaluation, and comparing model performance against
              simple race prediction baselines.
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
