"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  Code2,
  Layers3,
  Globe,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";

import type { IconType } from "react-icons";

import Reveal from "./Reveal";
import { projects } from "@/data/projects";

const filters = [
  "All",
  "Web Application",
  "Full Stack Application",
  "Web Development",
  "Programming Project",
];

const techIcons: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="container relative z-10">
        {/* SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              04 / MY WORK
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Featured <span className="gradient-text">Projects.</span>
          </h2>

          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              A showcase of applications and development projects built through
              practical experience, technical exploration and creative
              problem-solving.
            </p>
          </div>

          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        {/* FILTER BUTTONS */}
        <Reveal className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/25"
                  : "border border-white/10 bg-white/[0.04] text-gray-400 hover:text-white hover:border-violet-400/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        {/* PROJECT GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -8 }}
                className="group glass rounded-3xl overflow-hidden flex flex-col border border-white/[0.08] hover:border-violet-400/40 transition-all duration-300"
              >
                {/* PROJECT PREVIEW */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#24104a] via-[#17172c] to-[#082c43] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),transparent_65%)]" />

                  <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:30px_30px]" />

                  <div className="relative text-center transition-transform duration-500 group-hover:scale-110">
                    <div className="w-20 h-20 mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-xl shadow-violet-950/30">
                      <Layers3 size={38} className="text-violet-300" />
                    </div>

                    <p className="mt-4 text-sm font-bold text-white/80">
                      {project.title}
                    </p>
                  </div>

                  {/* CATEGORY */}
                  <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/30 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-violet-200">
                    {project.category}
                  </span>

                  {/* FEATURED */}
                  {project.featured && (
                    <span className="absolute top-4 right-4 rounded-full bg-violet-500/20 border border-violet-400/30 px-3 py-1.5 text-xs font-semibold text-violet-200">
                      Featured
                    </span>
                  )}

                  {/* LIVE INDICATOR */}
                  {project.liveDemo && (
                    <span className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-medium text-green-300">
                      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      Live Project
                    </span>
                  )}
                </div>

                {/* PROJECT DETAILS */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 leading-7 flex-1">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      Built With
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => {
                        const tech = techIcons[technology];
                        const TechIcon = tech?.icon;

                        return (
                          <span
                            key={technology}
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 hover:border-violet-400/30 transition-colors"
                          >
                            {TechIcon ? (
                              <TechIcon size={15} color={tech.color} />
                            ) : (
                              <Code2 size={14} className="text-violet-400" />
                            )}

                            {technology}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* PROJECT LINKS */}
                  <div className="flex flex-wrap items-center gap-3 mt-7 pt-5 border-t border-white/10">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 hover:shadow-violet-600/30 hover:-translate-y-0.5 transition-all"
                      >
                        Live Demo
                        <ExternalLink size={15} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-gray-300 hover:text-white hover:border-violet-400/40 transition-all"
                      >
                        <FaGithub size={17} />
                        GitHub
                      </a>
                    )}

                    <span className="ml-auto text-violet-400">
                      <Globe size={20} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GITHUB PROFILE */}
        <Reveal className="flex justify-center mt-16">
          <a
            href="https://github.com/Aadhil3122"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-white font-semibold hover:bg-white/10 hover:border-violet-400/50 transition-all duration-300"
          >
            Explore More on GitHub
            <FaGithub size={19} />
            <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
