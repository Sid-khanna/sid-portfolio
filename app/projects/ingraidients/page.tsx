"use client";

import Image from "next/image";
import ProjectLayout from "@/components/ProjectLayout";

export default function IngrAIdientsPage() {
  return (
    <ProjectLayout
      title="ingrAIdients - ingredient detection from images"
      breadcrumbLabel="ingrAIdients"
      meta="AI & ML · Coursework · 2024"
      intro={
        <p>
          ingrAIdients is a course project where we built a vision pipeline that
          predicts ingredients directly from food images, then uses an LLM to
          turn those predictions into recipe-style text. The project was an
          exploration of multi-label classification, representation learning,
          and how computer vision and language models can be combined into a
          more user-facing product experience.
        </p>
      }
      snapshot={
        <ul className="space-y-1.5 text-xs md:text-sm text-neutral-700">
          <li>
            <span className="font-medium">Task:</span> multi-label ingredient
            prediction from food images
          </li>
          <li>
            <span className="font-medium">Approach:</span> Vision Transformer
            with a fine-tuned classification head
          </li>
          <li>
            <span className="font-medium">Extension:</span> LLM-generated dish
            descriptions and recipe-style outputs
          </li>
          <li>
            <span className="font-medium">Focus:</span> vision, representation
            learning, and product-oriented AI design
          </li>
        </ul>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.5fr,1.5fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Problem and data
          </h2>
          <p>
            Most recipe or nutrition apps start with a dish name, barcode, or
            manual ingredient list. We wanted to explore the opposite workflow:
            starting from a food photo and predicting what ingredients are likely
            present. That turns the problem into a multi-label vision task, where
            one image may correspond to many overlapping ingredients rather than
            a single class.
          </p>
          <p>
            We built a curated dataset by combining existing food image sources,
            cleaning noisy labels, and grouping overly specific ingredients into
            more useful categories. For example, multiple cheese or sauce labels
            were collapsed into broader ingredient groups to make the prediction
            task more stable and practical.
          </p>
          <p>
            Each image was ultimately paired with a binary ingredient vector over
            a controlled vocabulary, which gave us a more consistent training
            target for multi-label classification.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Model architecture
          </h2>
          <p>
            The final model used a{" "}
            <span className="font-medium">Vision Transformer (ViT)</span> as the
            image encoder with a lightweight classification head to produce
            ingredient logits. Earlier experiments with ResNet-based models and
            CNN plus sequence-style setups informed the direction, but ViT gave
            the best balance between performance, flexibility, and training
            stability.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Images were resized and augmented to improve generalization across
              food presentation styles.
            </li>
            <li>
              The ViT backbone was initialized from pretrained weights, with
              later layers and the classification head fine-tuned for the task.
            </li>
            <li>
              Sigmoid outputs with{" "}
              <span className="font-medium">binary cross-entropy</span> loss were
              used for multi-label prediction.
            </li>
            <li>
              Prediction thresholds were tuned on validation performance rather
              than fixed uniformly across all ingredient classes.
            </li>
          </ul>
        </div>

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
            High-level pipeline: food images are encoded by a Vision Transformer,
            converted into ingredient predictions, and then passed into an LLM
            layer to produce natural-language dish and recipe-style outputs.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.7fr,1.3fr] items-start">
        <div className="space-y-4 text-sm md:text-base text-neutral-800 leading-relaxed">
          <h2 className="text-lg font-semibold tracking-tight">
            Performance and insights
          </h2>
          <p>
            We evaluated the model using subset accuracy, per-class F1, and mean
            average precision. Performance was strongest on common and visually
            distinctive ingredients, while rarer or more subtle classes remained
            more difficult.
          </p>
          <p>
            One of the most interesting findings was that many incorrect
            predictions were still semantically close to the target. The model
            might predict a broader ingredient category instead of a specific
            herb or sauce, which is still useful in downstream settings even if
            it is not an exact match.
          </p>
          <p>
            That pushed us to think beyond strict label accuracy and ask whether
            the predictions were useful enough for applications like recipe
            generation, approximate nutrition estimation, or food understanding
            interfaces.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            LLM layer and product thinking
          </h2>
          <p>
            A raw ingredient vector is technically useful, but not especially
            user-friendly. To make the system feel more like a real product, we
            added an LLM layer that takes the predicted ingredients and turns
            them into more natural outputs.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>a short description of the likely dish, and</li>
            <li>an approximate recipe-style outline based on the detected ingredients.</li>
          </ul>
          <p>
            This part of the project helped bridge the gap between model output
            and user experience. It also showed how vision and language systems
            can be combined to create something more intuitive than either model
            on its own.
          </p>

          <h2 className="mt-6 text-lg font-semibold tracking-tight">
            Ethics and limitations
          </h2>
          <p>
            We also looked at the broader design challenges around a system like
            this. These included cultural bias in food datasets, uncertainty for
            dietary restrictions and allergens, and privacy concerns around image
            capture and storage.
          </p>
          <p>
            The project report explores how a production system could handle
            consent, opt-out, and possibly on-device inference to reduce privacy
            concerns while making predictions more trustworthy for users.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">
              Tech stack
            </h2>
            <ul className="space-y-1.5">
              <li>PyTorch and torchvision</li>
              <li>Vision Transformer backbone with pretrained initialization</li>
              <li>Multi-label classification with binary cross-entropy loss</li>
              <li>Albumentations for image augmentation</li>
              <li>LLM API for recipe-style text generation</li>
              <li>Weights and Biases for experiment tracking</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Links and media
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Sid-khanna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Model + training code
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
