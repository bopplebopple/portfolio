import { experience } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've shipped."
        description="3+ years building and maintaining production backend systems."
      />

      <ol className="relative border-l border-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} delay={i * 90} className="relative pb-12 last:pb-0">
            {/* Node */}
            <span
              className={`absolute -left-[34px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 sm:-left-[42px] ${
                job.current
                  ? "border-accent bg-accent/20"
                  : "border-line bg-surface"
              }`}
            >
              {job.current ? (
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ) : null}
            </span>

            <div className="rounded-2xl border border-line bg-surface/50 p-6 backdrop-blur transition-colors hover:border-accent/30 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight text-fg">
                  {job.role}
                </h3>
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs ${
                    job.current
                      ? "bg-accent/10 text-accent"
                      : "bg-surface-2 text-muted"
                  }`}
                >
                  {job.current ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  ) : null}
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {job.company}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
