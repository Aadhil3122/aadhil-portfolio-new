"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Heart,
  Link2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const quickLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070914]">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />

      <div className="container relative z-10 py-20">
        <div className="grid gap-12 xl:grid-cols-[1.1fr_0.75fr_1.2fr_1.35fr] xl:gap-8">
          {/* BRAND */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-4xl font-extrabold tracking-tight text-white"
            >
              <Code2 className="text-violet-400" size={38} />
              AADHIL<span className="text-violet-400">.</span>
            </a>

            <h3 className="mt-5 text-xl font-semibold gradient-text">
              Software Developer
            </h3>

            <p className="mt-6 max-w-sm text-gray-400 leading-8">
              Passionate about building modern, user-friendly web applications
              and exploring new technologies.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/30 bg-white/5 text-white transition-all hover:-translate-y-1 hover:bg-violet-600"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/30 bg-white/5 text-white transition-all hover:-translate-y-1 hover:bg-sky-600"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-xl font-bold text-white">
              <Link2 className="text-violet-400" size={23} />
              Quick Links
            </h3>

            <div className="flex flex-col gap-5">
              {quickLinks.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="group flex items-center gap-3 text-gray-400 transition-all hover:translate-x-2 hover:text-violet-300"
                >
                  <span className="text-violet-400">›</span>
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-xl font-bold text-white">
              <ArrowUpRight className="text-violet-400" size={23} />
              Get In Touch
            </h3>

            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 text-gray-300 transition-colors hover:text-violet-300 break-all"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-white/5">
                  <Mail className="text-violet-400" size={19} />
                </span>
                {profile.email}
              </a>

              {profile.phone && (
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 text-gray-300 transition-colors hover:text-violet-300"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-white/5">
                    <Phone className="text-violet-400" size={19} />
                  </span>
                  {profile.phone}
                </a>
              )}

              <div className="flex items-center gap-4 text-gray-300">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-white/5">
                  <MapPin className="text-violet-400" size={19} />
                </span>
                {profile.location}
              </div>
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-900/30 transition-all hover:-translate-y-1 hover:shadow-violet-600/30"
            >
              Contact Me
              <ArrowUpRight size={19} />
            </a>
          </div>

          {/* FUTURISTIC CODE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
            className="group relative w-full min-w-0 self-center overflow-hidden rounded-[28px] border border-violet-400/40 bg-gradient-to-br from-[#211b40] via-[#11152b] to-[#080d1b] p-6 shadow-2xl shadow-violet-950/40 transition-colors duration-500"
          >
            {/* CARD GLOW */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-sky-500/15 blur-[70px]" />

            {/* CARD HEADER */}
            <div className="relative mb-7 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs font-medium tracking-widest text-gray-400">
                DEVELOPER.JS
              </span>

              <Code2 className="text-violet-400" size={23} />
            </div>

            {/* CODE CONTENT */}
            <div className="relative space-y-4 font-mono text-sm leading-7 break-words">
              <p className="text-violet-400">const developer = {"{"}</p>

              <p className="pl-4 text-gray-300">
                name: <span className="text-amber-300">"Aadhil"</span>,
              </p>

              <p className="pl-4 text-gray-300">
                role:{" "}
                <span className="text-amber-300">"Software Developer"</span>,
              </p>

              <p className="pl-4 text-gray-300">
                focus: <span className="text-green-400">"Web Development"</span>
                ,
              </p>

              <p className="pl-4 text-gray-300">
                passion:{" "}
                <span className="text-sky-300">"Build, Learn, Create"</span>
              </p>

              <p className="text-violet-400">{"};"}</p>
            </div>

            {/* CARD FOOTER */}
            <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span className="text-xs text-gray-400">
                Always learning. Always building.
              </span>
            </div>
          </motion.div>
        </div>

        {/* PREMIUM COPYRIGHT SECTION */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-3">
            {/* LEFT - COPYRIGHT */}
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-white">
                © 2026 <span className="text-violet-400">Mohamed Aadhil.</span>
              </p>

              <p className="mt-2 text-xs tracking-wide text-gray-500">
                All rights reserved. Crafted with passion.
              </p>
            </div>

            {/* CENTER - BUILT WITH */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-[10px] font-bold tracking-[0.25em] text-gray-500">
                DESIGNED & DEVELOPED WITH
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-violet-400/50 hover:text-violet-300">
                  Next.js
                </span>

                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-sky-400/50 hover:text-sky-300">
                  React
                </span>

                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-blue-400/50 hover:text-blue-300">
                  TypeScript
                </span>
              </div>
            </div>

            {/* RIGHT - BACK TO TOP */}
            <div className="flex justify-center md:justify-end">
              <a
                href="#home"
                aria-label="Back to top"
                className="group inline-flex items-center gap-3 rounded-full border border-violet-400/30 bg-violet-500/[0.07] py-2 pl-5 pr-2 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/15 hover:shadow-lg hover:shadow-violet-900/30"
              >
                <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                  Back to top
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/30 transition-transform duration-300 group-hover:-translate-y-1">
                  <ArrowUpRight size={19} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH BOTTOM GLOW */}
      <div className="pointer-events-none absolute -bottom-32 left-0 h-56 w-full bg-gradient-to-t from-violet-900/20 via-indigo-900/10 to-transparent blur-3xl" />
    </footer>
  );
}
