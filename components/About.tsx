import { profile } from "@/lib/content";
import { FadeIn, SpotlightCard } from "./Motion";
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
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="01"
        eyebrow="About"
        title="A backend engineer who cares about the fundamentals."
      />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <FadeIn>
          <p className="text-balance text-xl leading-relaxed text-fg sm:text-2xl">
            {profile.intro}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Day to day, I work in Go — designing services that stay fast and
            predictable under load, optimizing PostgreSQL for high-volume
            operations, and collaborating closely with frontend teams to ship
            APIs that are a pleasure to consume.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <SpotlightCard className="card-sheen h-full rounded-2xl hairline glass p-6 sm:p-7">
            <div className="flex items-center gap-2 text-accent">
              <TerminalIcon className="h-5 w-5" />
              <span className="eyebrow">What I focus on</span>
            </div>
            <ul className="mt-5 space-y-3.5">
              {focusAreas.map((focusItem) => (
                <li
                  key={focusItem}
                  className="flex items-start gap-3 text-sm text-fg"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{focusItem}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </FadeIn>
      </div>
    </section>
  );
}
