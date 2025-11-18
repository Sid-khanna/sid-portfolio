"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ProjectLayoutProps = {
  title: string;
  breadcrumbLabel: string;
  meta: string;
  intro: React.ReactNode;
  snapshot?: React.ReactNode;
  children: React.ReactNode;
  headerHeight?: number;
};

export default function ProjectLayout({
  title,
  breadcrumbLabel,
  meta,
  intro,
  snapshot,
  children,
  headerHeight = 160,
}: ProjectLayoutProps) {
  const [showFloatingProjects, setShowFloatingProjects] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowFloatingProjects(y > headerHeight);
      setShowScrollTop(y > headerHeight + 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="pb-16">
      {/* floating back button */}
      {showFloatingProjects && (
        <Link
          href="/projects"
          className="fixed top-5 left-5 z-40 px-3 py-1.5 text-xs rounded-full bg-white/85 backdrop-blur border border-neutral-300 shadow-sm hover:bg-white transition"
        >
          ← projects
        </Link>
      )}

      {/* floating scroll-to-top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-40 px-3 py-1.5 text-xs rounded-full bg-neutral-900 text-white shadow-md hover:bg-neutral-800 transition"
        >
          ↑ top
        </button>
      )}

      {/* header */}
      <section className="border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Link
            href="/projects"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← all projects
          </Link>

          <nav className="mt-1 text-xs text-neutral-500">
            <Link href="/" className="hover:text-neutral-700">
              home
            </Link>
            <span className="mx-1">/</span>
            <Link href="/projects" className="hover:text-neutral-700">
              projects
            </Link>
            <span className="mx-1">/</span>
            <span className="text-neutral-800">{breadcrumbLabel}</span>
          </nav>

          <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h1>

          <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500">
            {meta}
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-[2fr,1.2fr] items-start">
            <div className="space-y-3 text-sm md:text-base text-neutral-700">
              {intro}
            </div>

            {snapshot && (
              <div className="mt-2 md:mt-0">
                {snapshot}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* body */}
      <section className="mt-10">
        <div className="max-w-5xl mx-auto px-6 space-y-12">{children}</div>
      </section>
    </main>
  );
}
