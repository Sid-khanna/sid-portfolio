"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProjectCategory =
  | "Robotics & Perception"
  | "AI & ML"
  | "Software & Automation"
  | "Design & Manufacturing"
  | "Leadership & Impact";

type ProjectTopic =
  | "Research"
  | "Coursework"
  | "Industry"
  | "Personal"
  | "Capstone"
  | "Extracurricular";

type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  tag: string;
  period?: string;
  summary: string;
  tech?: string;
  href?: string;
  internalHref?: string;
  image: string;
  topics?: ProjectTopic[];
};

const PROJECTS: Project[] = [
  {
    title: "CAD Automation at Mold-Masters",
    slug: "cad-automation",
    category: "Software & Automation",
    tag: "Industry · Automation · CAD",
    period: "2023–Now",
    summary:
      "Built automation tools for repetitive CAD workflows and migration tasks, improving engineering efficiency and reducing manual error in production tooling.",
    tech: "VB.NET · Creo · SmartAssembly · SQL",
    internalHref: "/projects/cad-automation",
    image: "/images/work/mm-logo.png",
    topics: ["Industry"],
  },
  {
    title: "ParSight Drone Tracking System",
    slug: "parsight",
    category: "Robotics & Perception",
    tag: "Capstone · Robotics · Computer Vision",
    period: "2024",
    summary:
      "Autonomous drone system that tracks a golf ball in flight for senior golfers using HSV filtering, image-based visual servoing, and PD control on a Jetson Nano.",
    tech: "ROS2 · Python · OpenCV · Jetson Nano · RealSense",
    internalHref: "/projects/parsight",
    image: "/images/work/drone-parsight.png",
    topics: ["Coursework", "Capstone"],
  },
  {
    title: "LDED Monitoring and Machine Learning",
    slug: "lded",
    category: "AI & ML",
    tag: "Research · ML · Manufacturing",
    period: "2023–2024",
    summary:
      "Built a data pipeline on high-speed IR videos to quantify melt pool stability and trained machine learning models to predict track quality in laser-directed energy deposition.",
    tech: "Python · scikit-learn · Bayesian search · IR imaging",
    internalHref: "/projects/lded",
    image: "/images/work/LDED-setup.png",
    topics: ["Research"],
  },
  {
    title: "Portfolio Chatbot with GraphRAG",
    slug: "portfolio-chatbot",
    category: "AI & ML",
    tag: "Personal · RAG · Knowledge Graph",
    period: "2024",
    summary:
      "Built a portfolio assistant that uses a Neo4j knowledge graph and GraphRAG-style retrieval to answer questions about my experience, projects, and skills.",
    tech: "Next.js · Python · Neo4j · OpenRouter",
    internalHref: "/projects/chatbot",
    image: "/images/work/portfolio-chatbot-ui.png",
    topics: ["Personal"],
  },
  {
    title: "ingrAIdients Vision Transformer Model",
    slug: "ingraidients",
    category: "AI & ML",
    tag: "Coursework · Deep Learning · Vision",
    period: "2024",
    summary:
      "Vision Transformer-based multi-label model for ingredient detection from food images, designed to support recipe-style outputs and downstream reasoning.",
    tech: "PyTorch · ViT · Transformers · Multi-label classification",
    internalHref: "/projects/ingraidients",
    image: "/images/work/ingraidients-architecture.jpg",
    topics: ["Coursework"],
  },
  {
    title: "RSX Rover Autonomy System",
    slug: "rsx-rover",
    category: "Robotics & Perception",
    tag: "Extracurricular · Robotics · Sensors",
    period: "2022",
    summary:
      "Contributed to rover autonomy foundations through lidar and IMU integration, sensor bring-up, and early perception work for CIRC and URC competition platforms.",
    tech: "ROS · Python · LiDAR · IMU · Ubuntu",
    internalHref: "/projects/rover",
    image: "/images/work/rover-rsx.jpg",
    topics: ["Extracurricular"],
  },
  {
    title: "Blue Sky Solar Racing at World Solar Challenge",
    slug: "blue-sky-solar",
    category: "Design & Manufacturing",
    tag: "Extracurricular · Hardware · Structures",
    period: "2022–2023",
    summary:
      "Led structural and manufacturing work for a solar car raced across 3,000+ km in Australia, including mold design, composite layups, and fabrication planning.",
    tech: "Carbon fiber layups · ANSYS · CAD · Composites",
    internalHref: "/projects/solar",
    image: "/images/work/wsc-finish.jpg",
    topics: ["Extracurricular"],
  },
  {
    title: "AI Story Studio",
    slug: "story-studio",
    category: "AI & ML",
    tag: "Personal · LLM · Full Stack",
    period: "2024",
    summary:
      "Built a web app that turns multi-step character inputs into story blurbs using LLMs and a dialogue-style interface.",
    tech: "Next.js · Flask · Tailwind · OpenRouter API",
    href: "https://github.com/Sid-khanna",
    internalHref: "/projects/story-studio",
    image: "/images/work/story-studio-1.png",
    topics: ["Personal"],
  },
  {
    title: "Formula 1 Race Outcome Predictor",
    slug: "f1-predictor",
    category: "AI & ML",
    tag: "Personal · Prediction · ML",
    period: "Ongoing",
    summary:
      "Personal project that predicts Formula 1 race results using engineered features, recency-weighted inputs, and tuned neural networks.",
    tech: "Python · TensorFlow/Keras · pandas · Keras Tuner",
    internalHref: "/projects/f1",
    image: "/images/work/f1.jpg",
    topics: ["Personal"],
  },
  {
    title: "Dynamic Solar Windows",
    slug: "dynamic-solar-windows",
    category: "Design & Manufacturing",
    tag: "Research · Simulation · Energy",
    period: "2022–2023",
    summary:
      "Simulated advanced window configurations and coating combinations to reduce heat loss and improve thermal insulation performance.",
    tech: "THERM · WINDOW · Thermal modelling",
    internalHref: "/projects/dynamic-windows",
    image: "/images/work/dynamic-windows.png",
    topics: ["Research"],
  },
  {
    title: "Radiant Energy Veil Window Concept",
    slug: "radiant-energy-veil",
    category: "Design & Manufacturing",
    tag: "Research · Concept Design · Energy",
    period: "2021",
    summary:
      "Explored an early-stage dynamic glazing concept for thermal regulation through literature review, patent analysis, and CAD concept development.",
    tech: "Literature review · Patent review · Autodesk Fusion",
    internalHref: "/projects/radiant-energy-veil",
    image: "/images/work/radiant-veil.png",
    topics: ["Research"],
  },
  {
    title: "Helping Hand Assistive Device",
    slug: "helping-hand",
    category: "Design & Manufacturing",
    tag: "Coursework · Assistive Design · CAD",
    period: "2022",
    summary:
      "Designed an assistive concept to help powered wheelchair users retrieve dropped objects, from stakeholder interviews to CAD and engineering drawings.",
    tech: "Stakeholder interviews · CAD · Engineering drawings",
    internalHref: "/projects/helping-hand",
    image: "/images/work/helping-hand-1.png",
    topics: ["Coursework"],
  },
  {
    title: "Matboard Bridge Structural Design",
    slug: "matboard-bridge",
    category: "Design & Manufacturing",
    tag: "Coursework · Structures · Simulation",
    period: "2021",
    summary:
      "Designed and analyzed bridge concepts to maximize load capacity through calculations, simulation, and CAD-based iteration.",
    tech: "Structural analysis · Autodesk Fusion · Simulation",
    internalHref: "/projects/matboard-bridge",
    image: "/images/work/matboard-bridge.png",
    topics: ["Coursework"],
  },
  {
    title: "Engineers Without Borders Curriculum Project",
    slug: "ewb-curriculum",
    category: "Leadership & Impact",
    tag: "Leadership · Sustainability · Research",
    period: "2021–2023",
    summary:
      "Led a curriculum change initiative to bring more sustainability into an engineering design course through research, surveys, and stakeholder collaboration.",
    tech: "Stakeholder interviews · Survey design · Report writing",
    internalHref: "/projects/ewb",
    image: "/images/work/ewb.jpg",
    topics: ["Extracurricular"],
  },
];

const CATEGORIES = [
  "All",
  "Robotics & Perception",
  "AI & ML",
  "Software & Automation",
  "Design & Manufacturing",
  "Leadership & Impact",
] as const;

const TOPICS = [
  "All",
  "Research",
  "Coursework",
  "Extracurricular",
  "Industry",
  "Personal",
  "Capstone",
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [activeTopic, setActiveTopic] =
    useState<(typeof TOPICS)[number]>("All");
  const [showFloatingHome, setShowFloatingHome] = useState(false);

  useEffect(() => {
    const headerHeight = 150;

    const handleScroll = () => {
      setShowFloatingHome(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let filtered = PROJECTS;

  if (activeCategory !== "All") {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  if (activeTopic !== "All") {
    const topic = activeTopic as ProjectTopic;
    filtered = filtered.filter((p) => p.topics?.includes(topic));
  }

  return (
    <main className="pb-16">
      {showFloatingHome && (
        <Link
          href="/"
          className="fixed top-5 left-5 z-50 px-3 py-1.5 text-xs rounded-full bg-white/80 backdrop-blur border border-neutral-300 shadow-sm hover:bg-white transition-all duration-200"
        >
          ← home
        </Link>
      )}

      <section className="border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← home
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            projects
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-neutral-700">
            A curated mix of robotics, AI, software, manufacturing, and leadership
            work across industry, research, coursework, and personal projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs md:text-sm rounded-full px-3 py-1 border transition ${
                  activeCategory === cat
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={`text-[11px] md:text-xs rounded-full px-3 py-1 border transition ${
                  activeTopic === topic
                    ? "bg-neutral-800 text-white border-neutral-800"
                    : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400"
                }`}
              >
                {topic === "All" ? "All types" : topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col hover:shadow-md transition"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                />

                <div className="absolute left-3 top-3 flex flex-col gap-1">
                  <span className="w-fit inline-flex items-center rounded-full bg-white/80 backdrop-blur border border-neutral-200 px-3 py-1 text-[12px] font-medium shadow-sm">
                    {p.category}
                  </span>
                  <span className="w-fit inline-flex items-center rounded-full bg-white/80 backdrop-blur border border-neutral-200 px-3 py-1 text-[12px] font-medium shadow-sm">
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2 flex-1">
                {p.internalHref ? (
                  <Link
                    href={p.internalHref}
                    className="text-base md:text-lg font-semibold hover:underline underline-offset-2"
                  >
                    {p.title}
                  </Link>
                ) : p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base md:text-lg font-semibold hover:underline underline-offset-2"
                  >
                    {p.title}
                  </a>
                ) : (
                  <h2 className="text-base md:text-lg font-semibold">{p.title}</h2>
                )}

                {p.period && (
                  <p className="text-[11px] uppercase tracking-wide text-neutral-500">
                    {p.period}
                  </p>
                )}

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {p.summary}
                </p>

                {p.tech && (
                  <p className="mt-1 text-[11px] text-neutral-500">
                    {p.tech}
                  </p>
                )}

                <div className="mt-3 flex gap-3 text-xs text-neutral-800">
                  {p.internalHref && (
                    <Link
                      href={p.internalHref}
                      className="inline-flex items-center gap-1 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-800"
                    >
                      Read more
                      <span>→</span>
                    </Link>
                  )}

                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-800"
                    >
                      View project
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
