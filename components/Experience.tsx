import { experience } from "@/lib/content";
import { SpotlightCard, Stagger, StaggerItem } from "./Motion";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've shipped."
        description="3+ years building and maintaining production backend systems."
      />

      <Stagger className="relative pl-6 sm:pl-8" gap={0.12}>
        {/* Gradient spine */}
        <span
          aria-hidden
          className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-line to-transparent"
        />

        {experience.map((job) => (
          <StaggerItem key={`${job.company}-${job.period}`}>
            <div className="relative pb-10 last:pb-0">
              {/* Node */}
              <span
                className={`absolute -left-[26px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border-2 sm:-left-[34px] ${
                  job.current
                    ? "border-accent bg-accent/20"
                    : "border-line-2 bg-surface"
                }`}
              >
                {job.current ? (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                ) : null}
              </span>

              <SpotlightCard className="card-sheen rounded-2xl hairline glass p-6 transition-colors sm:p-7">
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
              </SpotlightCard>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
