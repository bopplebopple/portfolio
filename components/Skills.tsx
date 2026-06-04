import { skillGroups } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="The stack I build with."
        description="Tools and practices I reach for to ship reliable backends."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <article className="group h-full rounded-2xl border border-line bg-surface/50 p-6 backdrop-blur transition-colors hover:border-accent/30">
              <h3 className="text-lg font-semibold tracking-tight text-fg">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {group.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-fg transition-colors group-hover:border-accent/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
