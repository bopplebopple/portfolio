import { education } from "@/lib/content";
import { SpotlightCard, Stagger, StaggerItem } from "./Motion";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="04"
        eyebrow="Education"
        title="Where I learned the craft."
      />

      <Stagger className="grid gap-5 md:grid-cols-2" gap={0.1}>
        {education.map((edu) => (
          <StaggerItem key={edu.school} className="h-full">
            <SpotlightCard
              glow="var(--color-accent-3)"
              className="card-sheen flex h-full flex-col rounded-2xl hairline glass p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-fg">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {edu.program}
                  </p>
                </div>
                {edu.meta ? (
                  <span className="shrink-0 rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
                    {edu.meta}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {edu.detail}
              </p>
              <p className="mt-5 font-mono text-xs text-muted-2">{edu.period}</p>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
