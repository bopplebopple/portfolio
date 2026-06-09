"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, stats } from "@/lib/content";
import Magnetic from "@/components/ui/Magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), {
    stiffness: 80,
    damping: 22,
  });
  const cueOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const lineMask: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { y: "118%" },
        show: { y: "0%", transition: { duration: 1, ease: EASE } },
      };

  return (
    <section
      id="top"
      ref={ref}
      className="relative mx-auto flex min-h-[100svh] w-full max-w-[84rem] flex-col justify-center px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-16"
    >
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left — name + statement */}
        <div className="lg:col-span-7">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Kicker */}
            <motion.div
              variants={rise}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="inline-flex items-center gap-2 eyebrow text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for work
              </span>
              <span className="hidden h-3 w-px bg-line-strong sm:block" />
              <span className="eyebrow text-muted">
                {profile.title} — {profile.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={container}
              className="display mt-7 text-[clamp(3.25rem,13vw,9.5rem)] font-bold"
            >
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={lineMask} className="block">
                  {profile.firstName}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  variants={lineMask}
                  className="block text-outline"
                >
                  {profile.lastName}
                </motion.span>
              </span>
            </motion.h1>

            {/* Statement */}
            <motion.p
              variants={rise}
              className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-ink-soft sm:text-xl"
            >
              I build <span className="serif text-accent">reliable</span>,
              high-performance backend systems in{" "}
              <span className="font-semibold text-ink">Go</span> — focused on
              scalable architecture and efficient APIs.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={rise}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <Magnetic>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-paper transition-colors duration-300 hover:bg-accent"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <a
                href="#work"
                className="link-line mono text-sm uppercase tracking-wider text-ink"
              >
                View selected work
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          style={{ y: reduce ? undefined : portraitY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          className="relative lg:col-span-5"
        >
          <div className="portrait-card group relative ml-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:max-w-none">
            <div className="relative aspect-[4000/5376] w-full overflow-hidden border border-line-strong bg-paper-2 shadow-hard">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 22rem, 30rem"
                className="portrait-frame object-cover object-center"
              />
              <div
                className="portrait-tint pointer-events-none absolute inset-0 bg-accent opacity-[0.22] mix-blend-multiply"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent"
                aria-hidden
              />
            </div>

            {/* Caption */}
            <div className="mt-3 flex items-center justify-between">
              <span className="mono text-xs text-muted">FIG. 01</span>
              <span className="mono text-xs text-muted">
                @ {profile.currentCompany}
              </span>
            </div>

            {/* Rotating availability seal */}
            <div className="absolute -left-6 -top-6 h-24 w-24 sm:-left-8 sm:-top-8 sm:h-28 sm:w-28">
              <div className="relative grid h-full w-full place-items-center rounded-full bg-ink text-paper">
                <svg
                  viewBox="0 0 100 100"
                  className="spin-slow absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <path
                      id="seal-path"
                      d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text
                    fill="currentColor"
                    className="mono"
                    style={{ fontSize: "8.5px", letterSpacing: "1.4px" }}
                  >
                    <textPath href="#seal-path" startOffset="0%">
                      OPEN TO ROLES · AVAILABLE NOW ·
                    </textPath>
                  </text>
                </svg>
                <span className="text-lg text-accent">✳</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
        className="mt-14 grid grid-cols-3 gap-px overflow-hidden border-y border-line"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-paper py-6 pr-4">
            <dt className="display text-3xl font-semibold sm:text-4xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">
              {s.label}
            </dd>
          </div>
        ))}
      </motion.dl>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        style={{ opacity: reduce ? undefined : cueOpacity }}
        className="mt-10 hidden items-center gap-2 self-start mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink sm:flex"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Scroll
      </motion.a>
    </section>
  );
}
