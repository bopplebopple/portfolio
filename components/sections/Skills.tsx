import { stack } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36"
    >
      <Reveal className="flex items-center gap-3" blur={false}>
        <span className="eyebrow">Capabilities</span>
        <span className="h-px flex-1 bg-line" />
      </Reveal>

      <Stagger
        className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
        gap={0.07}
      >
        {stack.map((group) => (
          <StaggerItem
            key={group.label}
            className="bg-elev p-7 transition-colors duration-300 hover:bg-elev-2 sm:p-8"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="eyebrow text-muted">{group.label}</h3>
              <span className="mono text-[0.7rem] text-faint">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="mono rounded-full hairline px-3 py-1.5 text-[0.72rem] text-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
