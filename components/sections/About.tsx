import { education, profile } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const facts = [
  { label: "Currently", value: `Back-End Developer · ${profile.currentCompany}` },
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "Go · PostgreSQL · APIs · Architecture" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36"
    >
      <Reveal className="flex items-center gap-3" blur={false}>
        <span className="eyebrow">About</span>
        <span className="h-px flex-1 bg-line" />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Statement */}
        <div className="lg:col-span-7">
          <Stagger className="space-y-6">
            <StaggerItem>
              <p className="text-pretty text-2xl leading-snug text-muted sm:text-[1.7rem]">
                I&apos;m a back-end engineer in Jakarta. For the past{" "}
                <span className="text-text">three years</span> I&apos;ve been at{" "}
                <span className="text-text">Pharos Indonesia</span>, building and
                maintaining{" "}
                <span className="text-text">production services in Go</span>.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-xl text-base leading-relaxed text-muted">
                {profile.bio[1]}
              </p>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5">
          <Reveal className="card rounded-2xl p-6 sm:p-7">
            <dl className="space-y-5">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="text-sm text-text">{fact.value}</dd>
                </div>
              ))}

              <div className="space-y-4 border-t border-line pt-5">
                <dt className="eyebrow">Education</dt>
                {education.map((edu) => (
                  <dd key={edu.school} className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-text">
                      {edu.school}
                    </span>
                    <span className="text-xs text-muted">
                      {edu.program} · {edu.meta}
                    </span>
                  </dd>
                ))}
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
