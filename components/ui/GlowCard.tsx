"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

/** Elevated card with a soft cursor-tracking highlight + gentle lift. */
export default function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, rgba(255,255,255,0.06), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={`card group relative overflow-hidden rounded-2xl transition-colors duration-300 hover:border-[color:var(--color-line-2)] ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
