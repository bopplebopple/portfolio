import { education } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto w-full max-w-[84rem] scroll-mt-24 px-6 pb-24 sm:px-10 sm:pb-32 lg:px-16"
    >
      <Reveal className="flex items-center gap-4">
        <span className="eyebrow text-accent">05</span>
        <span className="rule max-w-[8rem] flex-1" />
        <span className="eyebrow text-muted">Education</span>
      </Reveal>

      <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {education.map((edu) => (
          <Reveal key={edu.school} className="bg-paper p-7 sm:p-9">
            <div className="flex items-center justify-between">
              <span className="mono text-xs text-muted">{edu.period}</span>
              {edu.meta && (
                <span className="mono text-xs text-accent">{edu.meta}</span>
              )}
            </div>
            <h3 className="display mt-6 text-2xl font-semibold text-ink sm:text-3xl">
              {edu.school}
            </h3>
            <p className="mt-1 text-sm font-medium text-ink-soft">
              {edu.program}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {edu.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
