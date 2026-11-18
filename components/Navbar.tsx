"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto max-w-[1320px]">
        <div className="rounded-2xl border border-violet-400/20 bg-[#171725]/85 backdrop-blur-2xl shadow-xl shadow-black/20">
          <div className="flex h-[76px] items-center justify-between px-5 md:px-8">
            {/* LOGO */}
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-tight text-white"
            >
              AADHIL<span className="text-violet-400">.</span>
            </a>

            {/* DESKTOP LINKS */}
            <nav className="hidden lg:flex items-center rounded-full border border-white/[0.06] bg-[#10111c]/80 p-2 gap-1">
              {navLinks.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="rounded-full px-3 py-2 text-[13px] font-medium text-gray-400 transition-all duration-300 hover:bg-violet-500/15 hover:text-violet-200"
                >
                  {name}
                </a>
              ))}
            </nav>

            {/* ARROW CTA */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                aria-label="Let's Talk"
                title="Let's Talk"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/40 bg-violet-500/10 text-violet-300 transition-all duration-300 hover:bg-violet-600 hover:text-white hover:border-violet-400 hover:shadow-lg hover:shadow-violet-600/30"
              >
                <ArrowUpRight
                  size={23}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* MOBILE MENU */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* MOBILE NAVIGATION */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="border-t border-white/10 p-4 flex flex-col gap-1">
                  {navLinks.map(([name, href]) => (
                    <a
                      key={name}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-all hover:bg-violet-500/15 hover:text-white"
                    >
                      {name}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white"
                  >
                    Let's Talk
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
