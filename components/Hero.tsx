import Image from "next/image";
import { profile, stats } from "@/lib/content";
import { ArrowDownIcon, ArrowIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/60 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for backend engineering roles
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Matthew Brian
            <br />
            <span className="gradient-text">Khoe Munandar</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
            {profile.tagline}{" "}
            <span className="text-fg">
              {profile.title} based in {profile.location}.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/60 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/50"
            >
              View experience
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-2/60 text-muted backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-semibold text-fg sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="float relative">
            <div className="portrait-ring relative aspect-[4000/5376] w-64 overflow-hidden rounded-[2rem] sm:w-72 lg:w-80">
              <div className="absolute inset-[3px] overflow-hidden rounded-[calc(2rem-3px)] bg-surface-2">
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 18rem, 20rem"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-line bg-ink/90 px-4 py-3 shadow-xl backdrop-blur">
              <p className="font-mono text-xs text-muted">currently</p>
              <p className="text-sm font-semibold text-fg">
                @ Pharos Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="mt-14 hidden items-center gap-2 self-center text-xs text-muted transition-colors hover:text-fg sm:flex"
      >
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
        Scroll to explore
      </a>
    </section>
  );
}
