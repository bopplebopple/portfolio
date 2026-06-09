import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import MaskText from "@/components/ui/MaskText";

export default function Work() {
  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-[84rem] scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <Reveal className="flex items-center gap-4">
        <span className="eyebrow text-accent">02</span>
        <span className="rule max-w-[8rem] flex-1" />
        <span className="eyebrow text-muted">Selected Work</span>
      </Reveal>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <MaskText
          lines={["Things I've", "built in production"]}
          className="display text-[clamp(2.25rem,7vw,4.75rem)] font-semibold"
        />
        <Reveal>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Engineering themes from production backend work at{" "}
            <span className="text-ink">Pharos Indonesia</span> — the systems and
            patterns I own day to day.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {projects.map((project) => (
          <Reveal
            key={project.index}
            className="group relative flex min-h-[17rem] flex-col justify-between bg-paper p-7 transition-colors duration-300 hover:bg-ink sm:p-9"
          >
            <div className="flex items-start justify-between">
              <span className="mono text-sm text-accent">{project.index}</span>
              <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>

            <div className="mt-10">
              <h3 className="display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-paper sm:text-[1.75rem]">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-paper/70">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono border border-line px-2.5 py-1 text-[0.7rem] uppercase tracking-wide text-muted transition-colors duration-300 group-hover:border-paper/25 group-hover:text-paper/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
