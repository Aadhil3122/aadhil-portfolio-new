import {
  ArrowUpRight,
  Lightbulb,
  Target,
  GraduationCap,
  Code2,
  Globe,
} from "lucide-react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

import { profile, softSkills, languages } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        {/* PREMIUM ABOUT SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          {/* EYEBROW */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              01 / ABOUT ME
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            A Little <span className="gradient-text">About Me.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              A developer in progress, driven by curiosity and a desire to build
              useful digital experiences.
            </p>
          </div>

          {/* DECORATIVE LINE */}
          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 mt-14">
          {/* MAIN INTRODUCTION */}
          <Reveal className="glass rounded-3xl p-7 md:p-10">
            <span className="text-violet-400 text-sm font-semibold">
              WHO I AM
            </span>

            <h3 className="text-2xl md:text-3xl font-bold leading-relaxed mt-5">
              I'm a final-year{" "}
              <span className="gradient-text">B.Tech Software Technology</span>{" "}
              undergraduate at the University of Vocational Technology.
            </h3>

            <p className="text-gray-400 leading-8 mt-7">{profile.summary}</p>

            <p className="text-gray-400 leading-8 mt-5">
              My learning journey includes modern frontend frameworks, backend
              technologies and database systems. I enjoy learning new
              technologies and developing practical software solutions.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              I am also interested in Artificial Intelligence, online business
              and digital innovation.
            </p>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-violet-400 font-semibold hover:text-sky-400 transition-colors"
            >
              Connect on LinkedIn
              <ArrowUpRight size={18} />
            </a>
          </Reveal>

          {/* ABOUT HIGHLIGHTS */}
          <div className="flex flex-col gap-5">
            <Reveal
              delay={0.1}
              className="glass rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="rounded-xl bg-violet-500/15 p-3">
                <GraduationCap className="text-violet-400" size={25} />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Final-year Undergraduate
                </h4>

                <p className="text-gray-400 text-sm mt-2 leading-6">
                  {profile.university}
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={0.2}
              className="glass rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="rounded-xl bg-sky-500/15 p-3">
                <Lightbulb className="text-sky-400" size={25} />
              </div>

              <div>
                <h4 className="font-semibold text-white">Always Learning</h4>

                <p className="text-gray-400 text-sm mt-2 leading-6">
                  AI, web development and digital business.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={0.3}
              className="glass rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="rounded-xl bg-emerald-500/15 p-3">
                <Target className="text-emerald-400" size={25} />
              </div>

              <div>
                <h4 className="font-semibold text-white">What I Value</h4>

                <p className="text-gray-400 text-sm mt-2 leading-6">
                  Problem solving, attention to detail and teamwork.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={0.4}
              className="glass rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="rounded-xl bg-pink-500/15 p-3">
                <Code2 className="text-pink-400" size={25} />
              </div>

              <div>
                <h4 className="font-semibold text-white">Development Focus</h4>

                <p className="text-gray-400 text-sm mt-2 leading-6">
                  Modern frontend and backend web applications.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* SOFT SKILLS AND LANGUAGES */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Reveal className="glass rounded-2xl p-7">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Target className="text-violet-400" />
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3 mt-6">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:border-violet-400/50 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="glass rounded-2xl p-7">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <Globe className="text-sky-400" />
              Languages
            </h3>

            <div className="flex flex-wrap gap-3 mt-6">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:border-sky-400/50 hover:text-white transition-colors"
                >
                  {language}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
