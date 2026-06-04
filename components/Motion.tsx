"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------------------------------------- *
 * FadeIn — reveals on scroll with an optional directional + blur lift
 * ---------------------------------------------------------------- */
type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
};

export function FadeIn({
  children,
  delay = 0,
  y = 26,
  blur = true,
  once = true,
  className,
  ...rest
}: FadeInProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- *
 * Stagger — parent that cascades its <StaggerItem> children in
 * ---------------------------------------------------------------- */
export function Stagger({
  children,
  className,
  gap = 0.09,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- *
 * ActionLink — anchor with a subtle, tasteful press + lift response
 * (no cursor-following). Lift is skipped under reduced motion.
 * ---------------------------------------------------------------- */
export function ActionLink({
  children,
  className,
  href,
  ...rest
}: HTMLMotionProps<"a"> & { href: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

/* ---------------------------------------------------------------- *
 * SpotlightCard — cursor-tracking glow + lift on hover
 * ---------------------------------------------------------------- */
export function SpotlightCard({
  children,
  className = "",
  glow = "var(--color-accent)",
}: {
  children: React.ReactNode;
  className?: string;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const background = useMotionTemplate`radial-gradient(240px circle at ${mx}px ${my}px, color-mix(in srgb, ${glow} 16%, transparent), transparent 72%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={reduce ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden
        className="hover-only pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
