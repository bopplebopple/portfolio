import { education } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading index="04" eyebrow="Education" title="Where I learned the craft." />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 90}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 backdrop-blur transition-colors hover:border-accent/30 sm:p-7">
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
              <p className="mt-5 font-mono text-xs text-muted/80">
                {edu.period}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
