"use client";

import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, BookOpen, Award } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container">
        {/* PREMIUM EDUCATION SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          {/* EYEBROW */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              05 / EDUCATION
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            My Academic <span className="gradient-text">Journey.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              Building a strong academic foundation through continuous learning,
              technical education and personal development.
            </p>
          </div>

          {/* DECORATIVE LINE */}
          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-7 mt-14">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-7 md:p-8 h-full group hover:border-violet-400/40 transition-colors"
              >
                {/* ICON AND STATUS */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center group-hover:bg-violet-500/25 transition-colors">
                    <GraduationCap size={29} className="text-violet-400" />
                  </div>

                  <span className="text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-400/20 rounded-full px-4 py-2">
                    {item.status}
                  </span>
                </div>

                {/* QUALIFICATION */}
                <h3 className="text-xl md:text-2xl font-bold text-white mt-7">
                  {item.qualification}
                </h3>

                {/* INSTITUTION */}
                <p className="text-gray-300 mt-3 leading-7">
                  {item.institution}
                </p>

                {/* PERIOD */}
                <div className="flex items-center gap-2 text-sm text-violet-300 mt-5">
                  <CalendarDays size={17} />
                  {item.period}
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-400 leading-7 text-sm mt-6">
                  {item.description}
                </p>

                {/* BOTTOM */}
                <div className="flex items-center gap-2 border-t border-white/10 mt-7 pt-5 text-sm text-gray-500">
                  {index === 0 ? (
                    <Award size={17} className="text-sky-400" />
                  ) : (
                    <BookOpen size={17} className="text-sky-400" />
                  )}

                  {item.type}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
