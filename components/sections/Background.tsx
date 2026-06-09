import type { CSSProperties } from "react";

const glowA: CSSProperties = {
  top: "-15%",
  left: "50%",
  marginLeft: "-32vw",
  width: "64vw",
  height: "64vw",
  background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)",
};

const glowB: CSSProperties = {
  bottom: "-25%",
  right: "-15%",
  width: "48vw",
  height: "48vw",
  background: "radial-gradient(circle, rgba(255,255,255,0.045), transparent 70%)",
};

/** Quiet ambient lighting — two drifting monochrome glows + a top vignette. */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="glow glow-drift-a" style={glowA} />
      <div className="glow glow-drift-b" style={glowB} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 75% at 50% -10%, rgba(255,255,255,0.04), transparent 55%)",
        }}
      />
    </div>
  );
}
