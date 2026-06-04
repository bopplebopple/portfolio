"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef } from "react";
import { profile, stats } from "@/lib/content";
import { ActionLink } from "./Motion";
import { ArrowDownIcon, ArrowIcon, LinkedInIcon } from "./icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 90]), {
    stiffness: 80,
    damping: 22,
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Cursor tilt on the portrait card.
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 14 });
  const sry = useSpring(ry, { stiffness: 150, damping: 14 });

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 12);
  };
  const resetTilt = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: reduce ? undefined : copyY }}
          className="order-2 lg:order-1"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full hairline glass px-3.5 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for backend engineering roles
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="display mt-6 text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-tight"
          >
            Matthew Brian
            <br />
            <span className="gradient-text">Khoe Munandar</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl"
          >
            {profile.tagline}{" "}
            <span className="text-fg">
              {profile.title} based in {profile.location}.
            </span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ActionLink
              href="#contact"
              className="tap-target group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-glow"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ActionLink>
            <ActionLink
              href="#experience"
              className="tap-target inline-flex items-center gap-2 rounded-full hairline glass px-5 py-3 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              View experience
            </ActionLink>
            <ActionLink
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="tap-target grid h-11 w-11 place-items-center rounded-full hairline glass text-muted transition-colors hover:text-accent"
            >
              <LinkedInIcon />
            </ActionLink>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-semibold text-fg sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={{ y: reduce ? undefined : portraitY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="float relative [perspective:1000px]">
            <motion.div
              onMouseMove={tilt}
              onMouseLeave={resetTilt}
              style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
              className="portrait-ring relative aspect-[4000/5376] w-64 overflow-hidden rounded-[2rem] shadow-elev sm:w-72 lg:w-80"
            >
              <div className="absolute inset-[3px] overflow-hidden rounded-[calc(2rem-3px)] bg-surface-2">
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 18rem, 20rem"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
              className="absolute -bottom-4 -left-4 rounded-2xl hairline glass px-4 py-3 shadow-xl"
            >
              <p className="font-mono text-xs text-muted">currently</p>
              <p className="text-sm font-semibold text-fg">@ Pharos Indonesia</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        style={{ opacity: reduce ? undefined : fade }}
        className="mt-14 hidden items-center gap-2 self-center text-xs text-muted transition-colors hover:text-fg sm:flex"
      >
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
        Scroll to explore
      </motion.a>
    </section>
  );
}
