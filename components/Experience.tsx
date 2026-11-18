"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin, Code2 } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container">
        {/* PREMIUM EXPERIENCE SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          {/* EYEBROW */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              03 / MY JOURNEY
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Training & <span className="gradient-text">Experience.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              From structured training to practical software development,
              explore my professional learning journey, technical experience and
              the skills I have developed along the way.
            </p>
          </div>

          {/* DECORATIVE LINE */}
          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* TIMELINE LINE */}
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
                  {/* TOP */}
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

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
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
