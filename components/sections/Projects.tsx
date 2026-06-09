import { projects } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36"
    >
      <Reveal className="flex items-center gap-3" blur={false}>
        <span className="eyebrow">Selected Work</span>
        <span className="h-px flex-1 bg-line" />
      </Reveal>

      <Reveal blur={false}>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
          It&apos;s production code, so there are no public repos — but this is
          what I own day to day at {projects[0].meta}.
        </p>
      </Reveal>

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" gap={0.1}>
        {projects.map((project) => (
          <StaggerItem key={project.title} className="h-full">
            <GlowCard className="h-full p-7 sm:p-8">
              <div className="flex h-full flex-col">
                <h3 className="text-xl font-semibold text-text">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.blurb}
                </p>

                <div className="mt-auto pt-7">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded-full hairline px-2.5 py-1 text-[0.7rem] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mono mt-4 text-[0.7rem] uppercase tracking-wider text-faint">
                    {project.meta}
                  </p>
                </div>
              </div>
            </GlowCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
