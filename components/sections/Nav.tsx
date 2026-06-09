"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/content";
import Magnetic from "@/components/ui/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;
const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-colors duration-500 ${
            scrolled ? "glass border-b border-line" : "border-b border-transparent"
          }`}
        >
          <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
            <a
              href="#top"
              className="group flex items-center gap-2.5 text-sm font-medium tracking-tight"
              aria-label={`${profile.shortName} — top`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-live shadow-[0_0_8px_var(--color-live)]" />
              {profile.shortName}
            </a>

            <ul className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`mono text-xs uppercase tracking-wider transition-colors ${
                      active === link.href.slice(1)
                        ? "text-text"
                        : "text-faint hover:text-text"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Magnetic className="hidden md:inline-flex">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 rounded-full bg-text px-4 py-2 text-xs font-semibold text-bg transition-opacity duration-300 hover:opacity-90"
                >
                  Get in touch
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid h-9 w-9 place-items-center rounded-full hairline text-text md:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="text-sm font-medium">{profile.shortName}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full hairline"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-5">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, ease: EASE, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="display block py-3 text-4xl font-semibold tracking-tight"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="px-5 pb-10">
              <a href={`mailto:${profile.email}`} className="u-link mono text-sm text-muted">
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
