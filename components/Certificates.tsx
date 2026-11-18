"use client";

import { motion } from "framer-motion";
import { Award, FileText, ExternalLink, CalendarDays } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <div className="container">
        {/* PREMIUM CERTIFICATIONS SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          {/* EYEBROW */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              06 / CERTIFICATIONS
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Certificates <span className="gradient-text">& Achievements.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              Recognising my learning milestones, professional training and
              technical achievements that contribute to my growth as a software
              developer.
            </p>
          </div>

          {/* DECORATIVE LINE */}
          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-7 h-full flex flex-col group hover:border-violet-400/40 transition-colors"
              >
                {/* CERTIFICATE ICON */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center group-hover:bg-violet-500/25 transition-colors">
                    <Award size={30} className="text-violet-400" />
                  </div>

                  <span className="text-xs text-violet-300 border border-violet-400/20 bg-violet-500/10 px-3 py-2 rounded-full">
                    {certificate.type}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-white mt-7">
                  {certificate.title}
                </h3>

                {/* ORGANIZATION */}
                <p className="text-violet-300 font-medium mt-3">
                  {certificate.organization}
                </p>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-400 leading-7 mt-5 flex-1">
                  {certificate.description}
                </p>

                {/* DATE */}
                <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
                  <CalendarDays size={16} />
                  {certificate.period}
                </div>

                {/* VIEW CERTIFICATE */}
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-7 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-300"
                >
                  <FileText size={17} />
                  View Certificate
                  <ExternalLink size={15} />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
