"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";



type ProjectCategory =
  | "Robotics & Perception"
  | "AI & ML"
  | "Design & Manufacturing"
  | "Impact & Leadership";

type ProjectTopic = "Research" | "Coursework" | "Industry" | "Personal" | "Capstone"| "Extra Curriculum";

type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  tag: string;
  period?: string;
  summary: string;
  tech?: string;
  href?: string;          // external demo / GitHub
  internalHref?: string;  // internal /projects/slug later if you want
  image: string;
  topics?: ProjectTopic[]; // NEW: for Research / Coursework / Industry / Personal / Capstone
};

const PROJECTS: Project[] = [
  // --- Robotics & Perception ---
  {
    title: "ParSight — golf-ball tracking drone",
    slug: "parsight",
    category: "Robotics & Perception",
    tag: "Capstone · Coursework · ROS2 · HSV",
    period: "2024",
    summary:
      "Autonomous drone that tracks a golf ball in flight for senior golfers using HSV filtering, IBVS, and PD control on a Jetson Nano.",
    tech: "ROS2 · Python · OpenCV · Jetson Nano · Realsense",
    internalHref: "/projects/parsight",
    image: "/images/work/drone-parsight.png",
    topics: ["Coursework", "Capstone"],
  },
  {
    title: "RSX Rover — autonomy & perception",
    slug: "rsx-rover",
    category: "Robotics & Perception",
    tag: "Team Project · Robotics · Sensors",
    period: "2022",
    summary:
      "Worked on lidar + IMU integration, sensor bring-up, and autonomy foundations for a Mars-style rover in CIRC/URC competitions.",
    tech: "ROS · Python · LiDAR · IMU · Ubuntu",
    internalHref: "/projects/rover",
    image: "/images/work/rover-rsx.jpg",
    topics: ["Extra Curriculum"],
  },

  // --- AI & ML ---
  {
    title: "LDED thesis — melt pool monitoring with ML",
    slug: "lded",
    category: "AI & ML",
    tag: "Research · Thesis · Additive Manufacturing",
    period: "2023–2024",
    summary:
      "Built a data pipeline on 2000 fps IR videos to quantify melt pool stability and trained ML regressors to predict track quality.",
    tech: "Python · scikit-learn · Bayesian search · IR imaging",
    internalHref: "/projects/lded",
    image: "/images/work/LDED-setup.png",
    topics: ["Research"],
  },
  {
    title: "ingrAIdients — ingredient detection from images",
    slug: "ingraidients",
    category: "AI & ML",
    tag: "Coursework · Research · Vision Transformer",
    period: "2024",
    summary:
      "Vision Transformer + multi-label classification to detect ingredients from food photos, with LLM-generated recipe-style output.",
    tech: "PyTorch · ViT · Transformers · Multi-label classification",
    internalHref: "/projects/ingraidients",
    image: "/images/work/ingraidients-architecture.jpg",
    topics: ["Coursework"],
  },
    {
    title: "Portfolio chatbot — GraphRAG + Neo4j",
    slug: "portfolio-chatbot",
    category: "AI & ML",
    tag: "Personal · RAG · Knowledge Graph",
    period: "2024",
    summary:
      "Personal portfolio assistant that uses a Neo4j knowledge graph and GraphRAG-style retrieval to answer questions about my work.",
    tech: "Next.js · Python · Neo4j · OpenRouter",
    internalHref: "/projects/chatbot",
    image: "/images/work/portfolio-chatbot-ui.png",
    topics: ["Personal"],
  },
    {
    title: "AI Story Studio — character & story generator",
    slug: "story-studio",
    category: "AI & ML",
    tag: "Personal · LLM · Full-stack",
    period: "2024",
    summary:
      "Web app that turns multi-step character inputs into tailored story blurbs using OpenRouter LLMs and a clean, dialogue-style UI.",
    tech: "Next.js · Flask · Tailwind · OpenRouter API",
    href: "https://github.com/Sid-khanna", // swap for real repo/demo
    internalHref: "/projects/story-studio",
    image: "/images/work/story-studio-placeholder.jpg",
    topics: ["Personal"],
  },
  {
    title: "Formula 1 race outcome predictor",
    slug: "f1-predictor",
    category: "AI & ML",
    tag: "Personal · ML · Prediction",
    period: "Ongoing",
    summary:
      "Personal project predicting F1 race results using engineered features, recency bias, and tuned neural networks.",
    tech: "Python · TensorFlow/Keras · pandas · Keras Tuner",
    internalHref: "/projects/f1",
    image: "/images/work/f1-placeholder.jpg",
    topics: ["Personal"],
  },



  // --- Design & Manufacturing ---
  {
    title: "Blue Sky Solar Racing — World Solar Challenge",
    slug: "blue-sky-solar",
    category: "Design & Manufacturing",
    tag: "Team Project · Carbon Fiber · Structures",
    period: "2022–2023",
    summary:
      "Led structural and manufacturing efforts for a solar car raced across 3,000+ km in Australia, including layups and mold design.",
    tech: "Carbon fiber layups · ANSYS · CAD · composites",
    internalHref: "/projects/solar",
    image: "/images/work/wsc-finish.jpg",
    topics: ["Extra Curriculum"],
  },
  {
    title: "CAD automation — Mold-Masters",
    slug: "cad-automation",
    category: "Design & Manufacturing",
    tag: "Industry · Automation · CAD",
    period: "2023–Now",
    summary:
      "Automated repetitive CAD workflows and migration scripts, accelerating design work and reducing manual error in production tooling.",
    tech: "VB.NET · Creo · SmartAssembly · SQL",
    internalHref: "/projects?tab=work",
    image: "/images/work/cad-automation-placeholder.jpg",
    topics: ["Industry"],
  },
  {
    title: "Dynamic Solar Windows — AP2D & 3ENano",
    slug: "dynamic-solar-windows",
    category: "Design & Manufacturing",
    tag: "Research · Simulation · Energy",
    period: "2022–2023",
    summary:
      "Simulated double- and triple-pane window configurations with advanced coatings to cut heat loss by up to 50% compared to standard IGUs.",
    tech: "THERM · WINDOW · Thermal modelling",
    internalHref: "/projects/dynamic-windows",
    image: "/images/work/dynamic-windows.png",
    topics: ["Research"],
  },
  {
    title: "Radiant Energy Veil — dynamic window concept",
    slug: "radiant-energy-veil",
    category: "Design & Manufacturing",
    tag: "Research · AP2D · Concept Design",
    period: "2021",
    summary:
      "Early-stage dynamic window concept using a Radiant Energy Veil for improved thermal regulation, built from patent/literature review and CAD concept exploration.",
    tech: "Literature & patent review · Autodesk Fusion · Glazing technologies",
    internalHref: "/projects/radiant-energy-veil",
    image: "/images/work/radiant-veil.png",
    topics: ["Research"],
  },
  {
    title: "Helping Hand — powered wheelchair assist device",
    slug: "helping-hand",
    category: "Design & Manufacturing",
    tag: "Coursework · Assistive Design",
    period: "2022",
    summary:
      "Course project focused on helping powered wheelchair users retrieve dropped objects, from stakeholder interviews to CAD + animations.",
    tech: "Stakeholder interviews · CAD · Engineering drawings",
    internalHref: "/projects/helping-hand",
    image: "/images/work/helping-hand.png",
    topics: ["Coursework"],
  },
  {
    title: "Matboard Bridge — structural design project",
    slug: "matboard-bridge",
    category: "Design & Manufacturing",
    tag: "Coursework · Structures",
    period: "2021",
    summary:
      "Designed and analyzed two matboard bridge concepts, performing structural calculations and simulations to maximize load capacity.",
    tech: "Structural analysis · Autodesk Fusion · Simulation",
    internalHref: "/projects/matboard-bridge",
    image: "/images/work/matboard-bridge.png",
    topics: ["Coursework"],
  },

  // --- Impact & Leadership ---
  {
    title: "Engineers Without Borders — curriculum change",
    slug: "ewb-curriculum",
    category: "Impact & Leadership",
    tag: "Leadership · Sustainability · Research",
    period: "2021–2023",
    summary:
      "Led an EWB project to weave sustainability into a core engineering design course through research, surveys, and faculty collaboration.",
    tech: "Stakeholder interviews · Survey design · Report writing",
    internalHref: "/projects/ewb",
    image: "/images/work/ewb-placeholder.jpg",
    topics: ["Extra Curriculum"],
  },
];

const CATEGORIES = [
  "All",
  "Robotics & Perception",
  "AI & ML",
  "Design & Manufacturing",
  "Impact & Leadership",
] as const;

const TOPICS = [
  "All",
  "Research",
  "Coursework",
  "Extra Curriculum",
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
      const headerHeight = 150; // adjust based on your header height

      const handleScroll = () => {
        if (window.scrollY > headerHeight) {
          setShowFloatingHome(true);
        } else {
          setShowFloatingHome(false);
        }
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
            A mix of robotics, AI, manufacturing, and impact work. These are the
            things I’ve poured the most time, energy, and curiosity into.
          </p>

          {/* category pills */}
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

          {/* topic pills (Research / Coursework / Industry / Personal / Capstone) */}
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

      {/* project grid */}
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
