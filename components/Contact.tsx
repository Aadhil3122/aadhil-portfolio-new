"use client";

import { motion } from "framer-motion";

import { Mail, Phone, ArrowUpRight, Send, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

const contactItems = [
  {
    title: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: "text-violet-400",
  },
  {
    title: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
    color: "text-sky-400",
  },
  {
    title: "Location",
    value: profile.location,
    href: null,
    icon: MapPin,
    color: "text-emerald-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        {/* PREMIUM CONTACT SECTION HEADING */}
        <Reveal className="mb-14 max-w-3xl relative">
          {/* EYEBROW */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-sky-400" />

            <span className="text-sm font-bold tracking-[0.22em] uppercase text-violet-300">
              07 / GET IN TOUCH
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Let's Work <span className="gradient-text">Together.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="flex gap-5 mt-7 max-w-2xl">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-sky-400" />

            <p className="text-base md:text-lg text-gray-400 leading-8">
              Have an exciting opportunity, a project to discuss, or an
              innovative idea? Let's connect and create something meaningful
              together.
            </p>
          </div>

          {/* DECORATIVE LINE */}
          <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 mt-14">
          {/* LEFT SIDE */}
          <Reveal className="glass rounded-3xl p-8 md:p-10">
            <span className="inline-flex items-center gap-2 text-sm text-violet-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-7 leading-tight">
              Let's build
              <br />
              <span className="gradient-text">something great.</span>
            </h3>

            <p className="text-gray-400 leading-8 mt-6">
              I'm interested in software development opportunities,
              collaboration and learning experiences. Feel free to contact me.
            </p>

            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Enquiry`}
              className="inline-flex items-center gap-3 mt-9 rounded-full bg-violet-600 px-7 py-4 font-semibold text-white hover:bg-violet-500 hover:-translate-y-1 transition-all duration-300"
            >
              Send Me an Email
              <Send size={18} />
            </a>
          </Reveal>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <motion.div
                  whileHover={{ x: 5 }}
                  className="glass rounded-2xl p-6 flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon size={23} className={item.color} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500">{item.title}</p>

                    <p className="text-white font-medium mt-1 break-all">
                      {item.value}
                    </p>
                  </div>

                  {item.href && (
                    <ArrowUpRight
                      size={20}
                      className="text-gray-500 group-hover:text-violet-400 transition-colors"
                    />
                  )}
                </motion.div>
              );

              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  {item.href ? <a href={item.href}>{content}</a> : content}
                </Reveal>
              );
            })}

            {/* SOCIAL LINKS */}
            <Reveal delay={0.35} className="glass rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-5">Connect with me</h4>

              <div className="flex gap-4">
                {/* GITHUB */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-600 transition-all"
                >
                  <FaGithub size={22} />
                </a>

                {/* LINKEDIN */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-600 transition-all"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
