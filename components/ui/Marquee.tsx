import type { CSSProperties } from "react";

/**
 * Seamless infinite marquee. The sequence is rendered twice so a -50%
 * translate loops without a visible seam. Pauses on hover.
 */
export default function Marquee({
  items,
  reverse = false,
  duration = 38,
  className,
}: {
  items: readonly string[];
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  const sequence = (ariaHidden = false) => (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center">
          <span className="display whitespace-nowrap px-6 text-[clamp(1.75rem,5vw,3.25rem)] font-semibold tracking-tight text-ink">
            {item}
          </span>
          <span
            aria-hidden
            className="text-[clamp(1.25rem,3vw,2rem)] text-accent"
          >
            ✳
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee-group relative flex overflow-hidden ${className ?? ""}`}
    >
      <div
        className={`marquee ${reverse ? "marquee-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {sequence()}
        {sequence(true)}
      </div>
    </div>
  );
}
