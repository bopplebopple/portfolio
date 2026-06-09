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

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 110]), {
    stiffness: 80,
    damping: 22,
  });
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full hairline glass px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-live shadow-[0_0_8px_var(--color-live)]" />
              <span className="mono text-[0.7rem] uppercase tracking-wider text-muted">
                Available · {profile.location}
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="display mt-7 text-[clamp(2.5rem,6.4vw,4.75rem)] font-semibold"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            I&apos;m {profile.shortName.split(" ")[0]} — for the past three years
            I&apos;ve built production services at {profile.currentCompany},
            across PostgreSQL, clean architecture, and the APIs other teams rely
            on.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-bg transition-opacity duration-300 hover:opacity-90"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <a
              href="#work"
              className="mono text-sm uppercase tracking-wider text-muted transition-colors hover:text-text"
            >
              View work
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="display text-2xl font-semibold sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mono mt-1.5 text-[0.7rem] uppercase leading-snug tracking-wider text-faint">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={{ y: reduce ? undefined : portraitY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          className="flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="portrait group relative w-full max-w-[19rem] sm:max-w-[21rem]">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] bg-white/5 blur-3xl"
            />
            <div className="card relative aspect-[4000/5376] w-full overflow-hidden rounded-3xl">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 21rem, 22rem"
                className="object-cover object-center grayscale-[0.18] transition-[filter] duration-700 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full hairline glass px-3 py-1.5">
                <span className="mono text-[0.7rem] text-muted">
                  @ {profile.currentCompany}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        style={{ opacity: reduce ? undefined : fade }}
        className="mt-14 hidden items-center gap-2 self-center mono text-[0.7rem] uppercase tracking-wider text-faint transition-colors hover:text-text sm:flex"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Scroll
      </motion.a>
    </section>
  );
}
