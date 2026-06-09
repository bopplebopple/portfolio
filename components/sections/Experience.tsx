import { experience } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import MaskText from "@/components/ui/MaskText";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-[84rem] scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <Reveal className="flex items-center gap-4">
        <span className="eyebrow text-accent">03</span>
        <span className="rule max-w-[8rem] flex-1" />
        <span className="eyebrow text-muted">Experience</span>
      </Reveal>

      <MaskText
        lines={["Career", "so far"]}
        className="display mt-6 text-[clamp(2.25rem,7vw,4.75rem)] font-semibold"
      />

      <div className="mt-14 border-b border-line">
        {experience.map((job) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            className="group grid gap-5 border-t border-line py-9 md:grid-cols-12 md:gap-8"
          >
            {/* Meta */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5">
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 bg-accent px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-on-accent">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-on-accent opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-on-accent" />
                    </span>
                    Now
                  </span>
                )}
                <span className="mono text-xs text-muted">{job.period}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-ink">{job.company}</p>
            </div>

            {/* Detail */}
            <div className="md:col-span-8">
              <h3 className="display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                {job.role}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-1 w-1 shrink-0 bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
