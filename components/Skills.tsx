import { skillGroups } from "@/lib/content";
import { SpotlightCard, Stagger, StaggerItem } from "./Motion";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="The stack I build with."
        description="Tools and practices I reach for to ship reliable backends."
      />

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
        {skillGroups.map((group) => (
          <StaggerItem key={group.title} className="h-full">
            <SpotlightCard className="card-sheen flex h-full flex-col rounded-2xl hairline glass p-6">
              <h3 className="text-lg font-semibold tracking-tight text-fg">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {group.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-fg transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
