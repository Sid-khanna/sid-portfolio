// app/projects/ingraidients/page.tsx
"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function IngrAIdientsPage() {
  return (
    <ProjectLayout
      title="ingrAIdients — ingredient detection from images"
      breadcrumbLabel="ingrAIdients"
      meta="AI & ML · Coursework · 2024"
      intro={
        <p>
          ingrAIdients is a course project where we built a vision model that
          predicts ingredients directly from food photos, then uses an LLM to
          turn those predictions into recipe-style descriptions. The goal was to
          explore multi-label classification, representation learning, and the
          product side of “what could you build with this?”.
        </p>
      }
    >
      {/* overview + architecture image */}
      <div className="grid gap-8 lg:grid-cols-[1.5fr,1.5fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem &amp; data
          </h2>
          <p>
            Most recipe apps work the same way: you type a dish name or scan a
            barcode. We wanted the opposite flow — point your camera at a plate
            of food and ask, “what&apos;s likely in this?” That means predicting
            a set of ingredients (not just one label) from a single image, with
            lots of visual overlap between classes.
          </p>
          <p>
            We curated a multi-label dataset by combining existing food
            datasets, cleaning noisy tags, and collapsing long-tail ingredients
            into more general categories (for example, “cheddar”, “mozzarella”
            → “cheese”). Each image was paired with a binary ingredient vector
            over a controlled vocabulary.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Model architecture
          </h2>
          <p>
            The final model used a{" "}
            <span className="font-medium">Vision Transformer (ViT)</span> as an
            image encoder and a lightweight multi-layer perceptron head for
            ingredient logits. Earlier experiments with ResNet-50 and
            CNN+GRU-style hybrids informed the design, but ViT gave the best
            trade-off between performance and training stability.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Images resized and augmented (random crop, flip, color jitter) to
              improve generalisation.
            </li>
            <li>
              ViT encoder pretrained on ImageNet; only the final blocks and
              classification head were fine-tuned.
            </li>
            <li>
              Sigmoid outputs with{" "}
              <span className="font-medium">binary cross-entropy</span> loss for
              multi-label prediction.
            </li>
            <li>
              Thresholds for each ingredient tuned on validation F1 rather than
              fixed at 0.5.
            </li>
          </ul>
        </div>

        {/* architecture / samples */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/work/ingraidients-architecture.jpg"
              alt="ingrAIdients model and data pipeline"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-neutral-500">
            High-level pipeline: images are encoded by a ViT backbone, projected
            into an ingredient embedding, then post-processed and sent to an LLM
            to generate natural-language recipe blurbs.
          </p>
        </div>
      </div>

      {/* results + LLM layer + ethics */}
      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Performance &amp; insights
          </h2>
          <p>
            We evaluated the model with subset accuracy, per-class F1, and mean
            Average Precision (mAP). Across frequent ingredients (rice, cheese,
            greens, sauces) the model achieved{" "}
            <span className="font-medium">macro-F1 in the low 0.7s</span>, with
            performance dropping on rare, visually subtle classes like specific
            herbs or spice blends.
          </p>
          <p>
            Error analysis showed that many “mistakes” were semantically close:
            predicting “greens” instead of “basil”, or “pasta sauce” instead of
            “tomato”. That pushed us to think less about perfect ingredient
            lists and more about whether the predictions were useful enough for
            downstream tasks like nutrition estimation or recipe generation.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            LLM layer: making it feel like a product
          </h2>
          <p>
            Raw ingredient vectors aren&apos;t very user-friendly, so we added a
            lightweight LLM layer. The selected ingredients, along with a short
            prompt about tone and style, are passed into an API that returns:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>a one-sentence description of the dish, and</li>
            <li>a short, approximate recipe outline.</li>
          </ul>
          <p>
            This made the project feel more like a real feature you might ship
            in a cooking app, and highlighted how vision + language models can
            combine into something more playful and useful than either alone.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Ethics &amp; limitations
          </h2>
          <p>
            We also spent time on the ethical side: dietary restrictions,
            cultural bias in datasets (Western food over-representation), and
            the privacy implications of logging meal photos. The project report
            includes a section on how you might design consent, opt-out, and
            on-device inference for a production version.
          </p>
        </div>

        {/* tech + links card */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>PyTorch &amp; torchvision</li>
              <li>Vision Transformer backbone (ImageNet-pretrained)</li>
              <li>Multi-label classification with BCE loss</li>
              <li>Albumentations for data augmentation</li>
              <li>LLM API for recipe-style text generation</li>
              <li>Weights &amp; Biases for experiment tracking</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Links &amp; media
            </h2>
            <div className="flex flex-wrap gap-2">
              {/* swap hrefs when you have them */}
              <a
                href="https://github.com/Sid-khanna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Model + training code
              </a>
              {/* add a report link here if you upload a PDF later */}
              {/* <a
                href="/files/ingraidients_report.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Project report (PDF)
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
