import { profile } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CheckIcon, TerminalIcon } from "./icons";

const focusAreas = [
  "Scalable, maintainable backend architecture",
  "Efficient, well-documented REST APIs",
  "High-volume PostgreSQL query & transaction design",
  "Clean architecture and repository patterns",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading index="01" eyebrow="About" title="A backend engineer who cares about the fundamentals." />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            {profile.intro}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Day to day, I work in Go — designing services that stay fast and
            predictable under load, optimizing PostgreSQL for high-volume
            operations, and collaborating closely with frontend teams to ship
            APIs that are a pleasure to consume.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-accent">
              <TerminalIcon className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                What I focus on
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-fg">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
