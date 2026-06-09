import { experience } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36"
    >
      <Reveal className="flex items-center gap-3" blur={false}>
        <span className="eyebrow">Experience</span>
        <span className="h-px flex-1 bg-line" />
      </Reveal>

      <Stagger className="mt-12 border-t border-line">
        {experience.map((job) => (
          <StaggerItem
            key={`${job.company}-${job.period}`}
            className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="mono text-xs text-faint">{job.period}</span>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full hairline px-2 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-live" />
                    <span className="mono text-[0.6rem] uppercase tracking-wider text-text">
                      Current
                    </span>
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted">{job.company}</p>
            </div>

            <div className="md:col-span-8">
              <h3 className="text-lg font-semibold text-text sm:text-xl">
                {job.role}
              </h3>
              <ul className="mt-3 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.65rem] h-px w-3 shrink-0 bg-faint"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
