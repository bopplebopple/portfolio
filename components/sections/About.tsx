import { education, profile } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const facts = [
  { label: "Currently", value: `Back-End Developer @ ${profile.currentCompany}` },
  { label: "Based in", value: profile.location },
  {
    label: "Education",
    value: `${education[0].school} — CS · ${education[0].meta}`,
  },
  { label: "Focus", value: "Go · PostgreSQL · APIs · Architecture" },
];

const principles = [
  {
    index: "01",
    title: "Reliable by default",
    body: "Backend services built to stay correct and stable under high-volume load.",
  },
  {
    index: "02",
    title: "Clean architecture",
    body: "Repository patterns and modular design that keep systems testable as they grow.",
  },
  {
    index: "03",
    title: "Efficient APIs",
    body: "Scalable, well-documented endpoints designed for fast, predictable integration.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[84rem] scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <Reveal className="flex items-center gap-4">
        <span className="eyebrow text-accent">01</span>
        <span className="rule max-w-[8rem] flex-1" />
        <span className="eyebrow text-muted">About</span>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Meta column */}
        <div className="lg:col-span-4">
          <dl className="border-t border-line">
            {facts.map((fact) => (
              <Reveal key={fact.label}>
                <div className="flex flex-col gap-1 border-b border-line py-4">
                  <dt className="eyebrow text-faint">{fact.label}</dt>
                  <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* Statement column */}
        <div className="lg:col-span-8">
          <Reveal>
            <p className="display max-w-3xl text-[clamp(1.6rem,3.6vw,2.6rem)] font-medium leading-[1.18] tracking-tight text-ink">
              I&apos;m a Computer Science graduate from{" "}
              <span className="text-accent">BINUS University</span> with{" "}
              <span className="serif">three-plus years</span> building
              production backends. I specialize in reliable, high-performance
              systems in{" "}
              <span className="serif text-accent">Go</span> — caring about
              scalable architecture, efficient APIs, and teams that ship.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden border border-line sm:grid-cols-3">
            {principles.map((p) => (
              <Reveal
                key={p.index}
                className="group bg-paper p-6 transition-colors duration-300 hover:bg-card"
              >
                <span className="mono text-xs text-accent">{p.index}</span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
