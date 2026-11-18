"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ExternalLink, ArrowUpRight, Code2, Layers3 } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Application",
    "Full Stack Application",
    "Web Development",
    "Programming Project",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container">
        {/* PREMIUM PROJECTS SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          {/* EYEBROW */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              04 / MY WORK
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Featured <span className="gradient-text">Projects.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              A showcase of applications and development projects built through
              hands-on experience, technical exploration and creative
              problem-solving.
            </p>
          </div>

          {/* DECORATIVE LINE */}
          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        {/* FILTER BUTTONS */}
        <Reveal className="flex flex-wrap gap-3 mt-12 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-violet-400/40"
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
                whileHover={{ y: -7 }}
                className="group glass rounded-3xl overflow-hidden flex flex-col hover:border-violet-400/40 transition-colors duration-300"
              >
                {/* PROJECT PREVIEW */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-violet-950 via-[#151525] to-sky-950 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.45),transparent_65%)]" />

                  <div className="relative text-center transition-transform duration-500 group-hover:scale-110">
                    <div className="w-20 h-20 mx-auto rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <Layers3 size={38} className="text-violet-300" />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-white/70">
                      {project.title}
                    </p>
                  </div>

                  <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-3 py-1.5 text-xs text-violet-200">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute top-4 right-4 rounded-full bg-violet-500/20 border border-violet-400/30 px-3 py-1.5 text-xs text-violet-200">
                      Featured
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
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex items-center gap-5 mt-7 pt-5 border-t border-white/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub size={17} />
                        GitHub
                      </a>
                    )}

                    <span className="ml-auto text-violet-400">
                      <Code2 size={20} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GITHUB PROFILE LINK */}
        <Reveal className="flex justify-center mt-14">
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
