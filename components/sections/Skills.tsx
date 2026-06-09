import { skillGroups } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import MaskText from "@/components/ui/MaskText";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-[84rem] scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <Reveal className="flex items-center gap-4">
        <span className="eyebrow text-accent">04</span>
        <span className="rule max-w-[8rem] flex-1" />
        <span className="eyebrow text-muted">Capabilities</span>
      </Reveal>

      <MaskText
        lines={["What I", "work with"]}
        className="display mt-6 text-[clamp(2.25rem,7vw,4.75rem)] font-semibold"
      />

      <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            className={`group bg-paper p-7 transition-colors duration-300 hover:bg-card sm:p-9 ${
              i === skillGroups.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-baseline justify-between">
              <span className="mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mono text-[0.65rem] uppercase tracking-wider text-faint">
                {group.items.length} tools
              </span>
            </div>

            <h3 className="display mt-6 text-xl font-semibold text-ink sm:text-2xl">
              {group.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              {group.blurb}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="mono border border-line px-2.5 py-1 text-[0.7rem] uppercase tracking-wide text-ink-soft transition-colors duration-300 group-hover:border-ink/25"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
