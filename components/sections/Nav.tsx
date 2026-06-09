"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/content";
import Magnetic from "@/components/ui/Magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;
const sectionIds = ["about", "work", "experience", "skills", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-colors duration-500 ${
            scrolled
              ? "border-b border-line bg-paper/80 backdrop-blur-md"
              : "border-b border-transparent"
          }`}
        >
          <nav className="mx-auto flex h-16 w-full max-w-[84rem] items-center justify-between px-6 sm:h-20 sm:px-10 lg:px-16">
            {/* Monogram */}
            <a
              href="#top"
              aria-label={`${profile.shortName} — home`}
              className="group flex items-center gap-3"
            >
              <span className="grid h-9 w-9 place-items-center bg-ink text-[0.8rem] font-bold text-on-accent transition-colors duration-300 group-hover:bg-accent">
                {profile.monogram}
              </span>
              <span className="hidden text-sm font-semibold tracking-tight sm:block">
                {profile.shortName}
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`link-line mono text-xs uppercase tracking-wider transition-colors ${
                      active === link.href.slice(1)
                        ? "text-accent"
                        : "text-ink hover:text-accent"
                    }`}
                  >
                    <span className="text-faint">{link.index}</span>{" "}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Magnetic className="hidden md:inline-flex">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 bg-ink px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-paper transition-colors duration-300 hover:bg-accent"
                >
                  Get in touch
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid h-9 w-9 place-items-center border border-line text-ink md:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[65] flex flex-col bg-paper md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="text-sm font-semibold">{profile.shortName}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center border border-line"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-6">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i + 0.1, ease: EASE, duration: 0.6 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-line py-4"
                    >
                      <span className="mono text-xs text-accent">
                        {link.index}
                      </span>
                      <span className="display text-4xl font-semibold">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="px-6 pb-10">
              <a
                href={`mailto:${profile.email}`}
                className="mono text-sm text-muted link-line"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
