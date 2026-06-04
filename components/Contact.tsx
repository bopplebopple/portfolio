import { profile } from "@/lib/content";
import Reveal from "./Reveal";
import { ArrowIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    Icon: PinIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              05 — Contact
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="gradient-text">reliable</span> together.
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
              Open to backend engineering roles and collaborations. The fastest
              way to reach me is by email — I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Email me
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/60 px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-accent/50"
              >
                <LinkedInIcon className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>

            <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map(({ label, value, href, Icon, external }) => {
                const content = (
                  <>
                    <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                      <Icon className="h-4 w-4 text-accent" />
                      {label}
                    </dt>
                    <dd className="mt-2 break-words text-sm text-fg">{value}</dd>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer noopener" : undefined}
                    className="group rounded-xl transition-colors"
                  >
                    <div className="transition-colors group-hover:[&_dd]:text-accent">
                      {content}
                    </div>
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
