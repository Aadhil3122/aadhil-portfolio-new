"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Terminal } from "lucide-react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

import {
  FaCode,
  FaNetworkWired,
  FaDatabase,
  FaJava,
  FaHashtag,
  FaMicrosoft,
  FaCss3Alt,
} from "react-icons/fa";

import type { IconType } from "react-icons";

import Reveal from "./Reveal";
import { skillCategories } from "@/data/skills";

const categoryIcons = [Code2, Server, Database, Terminal, Wrench];

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Vue.js": { icon: SiVuedotjs, color: "#42B883" },

  "Node.js": { icon: SiNodedotjs, color: "#68A063" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  "REST APIs": { icon: FaNetworkWired, color: "#A78BFA" },

  "MongoDB Atlas": { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "SQL Server": { icon: FaDatabase, color: "#CC2927" },

  "C++": { icon: SiCplusplus, color: "#00599C" },
  Java: { icon: FaJava, color: "#F89820" },
  "C#": { icon: FaHashtag, color: "#9B4F96" },

  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "VS Code": { icon: FaCode, color: "#007ACC" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  "MS Office": { icon: FaMicrosoft, color: "#D83B01" },
  PowerPoint: { icon: FaMicrosoft, color: "#D24726" },
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        {/* SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              02 / MY EXPERTISE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Technologies <span className="gradient-text">I Work With.</span>
          </h2>

          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              Exploring and building with modern technologies. A collection of
              tools and frameworks I have learned and applied throughout my
              software development journey.
            </p>
          </div>

          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        {/* SKILL CATEGORY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillCategories.map((category, index) => {
            const CategoryIcon = categoryIcons[index] || Code2;

            return (
              <Reveal key={category.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="glass h-full rounded-3xl p-7 group hover:border-violet-400/40 transition-all duration-300"
                >
                  {/* CATEGORY ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/15 border border-violet-400/10 flex items-center justify-center mb-7 group-hover:bg-violet-500/25 transition-colors">
                    <CategoryIcon size={27} className="text-violet-400" />
                  </div>

                  {/* CATEGORY TITLE */}
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-400 leading-7 mt-3">
                    {category.description}
                  </p>

                  {/* TECHNOLOGY LOGOS */}
                  <div className="grid grid-cols-3 gap-3 mt-7">
                    {category.skills.map((skill, skillIndex) => {
                      const skillData = skillIcons[skill];
                      const SkillIcon = skillData?.icon || FaCode;
                      const skillColor = skillData?.color || "#A78BFA";

                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.04,
                          }}
                          whileHover={{ y: -4, scale: 1.04 }}
                          title={skill}
                          className="flex flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3 min-h-[100px] transition-all duration-300 hover:bg-white/[0.07] hover:border-violet-400/30"
                        >
                          <SkillIcon size={29} color={skillColor} />

                          <span className="text-[11px] font-medium text-gray-300 text-center leading-tight">
                            {skill}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
