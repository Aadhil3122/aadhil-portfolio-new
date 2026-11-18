"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Terminal } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

const icons = [Code2, Server, Database, Terminal, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container">
        
{/* PREMIUM SKILLS SECTION HEADING */}
<Reveal className="mb-14 max-w-3xl relative">

  {/* EYEBROW */}
  <div className="inline-flex items-center gap-3 mb-6">
    <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

    <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
      02 / MY EXPERTISE
    </span>
  </div>

  {/* MAIN HEADING */}
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
    Technologies{" "}
    <span className="gradient-text">
      I Work With.
    </span>
  </h2>

  {/* DESCRIPTION */}
  <div className="flex gap-5 mt-7 max-w-2xl">

    <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

    <p className="text-base md:text-lg text-gray-400 leading-8">
      Exploring and building with modern technologies.
      A collection of tools and frameworks I have learned
      and applied throughout my software development journey.
    </p>

  </div>

  {/* DECORATIVE LINE */}
  <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />

</Reveal>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillCategories.map((category, index) => {
            const Icon = icons[index] || Code2;

            return (
              <Reveal key={category.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="glass h-full rounded-3xl p-7 group hover:border-violet-400/40 transition-colors duration-300"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-7 group-hover:bg-violet-500/25 transition-colors">
                    <Icon size={28} className="text-violet-400" />
                  </div>

                  {/* CATEGORY */}
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-400 leading-7 mt-3">
                    {category.description}
                  </p>

                  {/* SKILLS */}
                  <div className="flex flex-wrap gap-2 mt-7">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: skillIndex * 0.04,
                        }}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 hover:border-violet-400/40 hover:text-white transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
