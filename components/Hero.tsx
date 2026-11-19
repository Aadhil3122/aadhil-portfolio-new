"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ArrowUpRight, Download, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-violet-200">
              Software Development Enthusiast
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-400 text-lg mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Mohamed
            <br />
            <span className="gradient-text">Aadhil.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-xl md:text-2xl font-semibold text-gray-200"
          >
            Full Stack Developer
            <span className="text-violet-400"> | </span>
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-gray-400 leading-8"
          >
            {profile.summary}
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-7 mt-10"
          >
            <a
              href="#projects"
              className="inline-flex min-h-[52px] box-border items-center justify-center gap-2 whitespace-nowrap rounded-full bg-violet-600 px-7 py-0 leading-none font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:-translate-y-1"
            >
              View Projects
              <ArrowUpRight size={19} />
            </a>

            <a
              href="/cv.pdf"
              download="Mohamed_Aadhil_CV.pdf"
              className="inline-flex min-h-[52px] box-border items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-7 py-0 leading-none font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              Download CV
              <Download size={18} />
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5 mt-10 pt-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-sky-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>

            <span className="h-6 w-px bg-white/15" />

            <span className="text-sm text-gray-500">Based in Sri Lanka</span>
          </motion.div>
        </div>

        {/* RIGHT PROFILE AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* GLOW EFFECT */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-violet-600/20 blur-[90px]" />

          {/* PROFILE PHOTO FRAME */}
          <div className="relative w-72 h-80 md:w-96 md:h-[450px] rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/20 via-[#151522] to-sky-500/10 p-3 shadow-2xl shadow-violet-950/40">
            <div className="relative w-full h-full rounded-[25px] overflow-hidden bg-[#151520]">
              <Image
                src={profile.photo}
                alt="Mohamed Aadhil - Software Developer"
                fill
                priority
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover"
              />
            </div>
          </div>

          {/* FLOATING CODE ICON */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-5 -right-2 md:right-0 glass rounded-2xl p-4"
          >
            <Code2 className="text-violet-400" size={28} />
          </motion.div>

          {/* FLOATING SPARKLE ICON */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-3 md:left-0 glass rounded-2xl p-4"
          >
            <Sparkles className="text-sky-400" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
