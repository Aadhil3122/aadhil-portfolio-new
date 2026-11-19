"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, Code2 } from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiLaravel,
  SiMysql,
  SiExpress,
  SiHtml5,
  SiCss,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";
import type { IconType } from "react-icons";

import Reveal from "./Reveal";
import { experiences } from "@/data/experience";

const technologyIcons: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  Next: { icon: SiNextdotjs, color: "#FFFFFF" },
  React: { icon: SiReact, color: "#61DAFB" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  Node: { icon: SiNodedotjs, color: "#68A063" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "MongoDB Atlas": { icon: SiMongodb, color: "#47A248" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container">
        {/* SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              03 / MY JOURNEY
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Training & <span className="gradient-text">Experience.</span>
          </h2>

          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              From structured training to practical software development,
              explore my professional learning journey, technical experience and
              the skills I have developed along the way.
            </p>
          </div>

          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          <div className="absolute left-[19px] md:left-[27px] top-3 bottom-5 w-px bg-gradient-to-b from-violet-500 via-sky-500 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((experience, index) => (
              <Reveal
                key={experience.company}
                delay={index * 0.15}
                className="relative pl-14 md:pl-20"
              >
                {/* TIMELINE DOT */}
                <div className="absolute left-[10px] md:left-[18px] top-7 w-5 h-5 rounded-full border-4 border-[#08090d] bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.7)]" />

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-3xl p-6 md:p-8 hover:border-violet-400/40 transition-colors"
                >
                  {/* DATE */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-400/20 px-4 py-2 text-xs font-semibold text-violet-300">
                      <CalendarDays size={14} />
                      {experience.period}
                    </span>

                    <span className="text-sm text-gray-400">
                      {experience.duration}
                    </span>
                  </div>

                  {/* COMPANY */}
                  <div className="mt-6 flex gap-4 items-start">
                    <div className="rounded-2xl bg-violet-500/15 p-3 shrink-0">
                      <BriefcaseBusiness
                        size={25}
                        className="text-violet-400"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {experience.company}
                      </h3>

                      <p className="text-violet-300 text-sm mt-2">
                        {experience.role}
                      </p>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 leading-8 mt-6">
                    {experience.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-7">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                      <Code2 size={17} className="text-sky-400" />
                      Technologies & Experience
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((technology) => {
                        const tech = technologyIcons[technology];
                        const TechIcon = tech?.icon || FaCode;
                        const color = tech?.color || "#A78BFA";

                        return (
                          <motion.div
                            key={technology}
                            whileHover={{ y: -4, scale: 1.04 }}
                            transition={{ duration: 0.2 }}
                            title={technology}
                            className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-gray-300 hover:border-violet-400/40 hover:bg-white/[0.08] transition-all duration-300"
                          >
                            <TechIcon size={19} color={color} />

                            <span className="font-medium">{technology}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
