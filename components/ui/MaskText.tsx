"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const lineVariant: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.95, ease: EASE } },
};

type MaskTextProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  /** "mount" animates immediately (hero), "inView" waits for scroll. */
  trigger?: "mount" | "inView";
  delay?: number;
  stagger?: number;
};

/**
 * Editorial line-mask reveal: each line slides up from behind a clip mask.
 */
export default function MaskText({
  lines,
  className,
  lineClassName,
  trigger = "inView",
  delay = 0,
  stagger = 0.09,
}: MaskTextProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        ))}
      </div>
    );
  }

  const activation =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "show" as const }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, margin: "0px 0px -10% 0px" },
        };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...activation}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            variants={lineVariant}
            className={`block ${lineClassName ?? ""}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
