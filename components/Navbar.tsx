"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#08090d]/85 backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight text-white"
        >
          AADHIL<span className="text-violet-400">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-violet-300"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#08090d]"
          >
            <div className="container mx-auto flex flex-col gap-1 py-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 font-semibold text-white"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
