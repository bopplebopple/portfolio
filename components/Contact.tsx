import { profile } from "@/lib/content";
import { FadeIn, ActionLink, Stagger, StaggerItem } from "./Motion";
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
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <FadeIn>
        <div className="card-sheen relative overflow-hidden rounded-3xl hairline glass p-8 shadow-elev sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-accent-3/15 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <div className="eyebrow text-accent">05 — Contact</div>
            <h2 className="display mt-4 max-w-2xl text-[clamp(2rem,5.5vw,3.25rem)] font-semibold tracking-tight">
              Let&apos;s build something{" "}
              <span className="gradient-text">reliable</span> together.
            </h2>
            <p className="mt-5 max-w-xl text-balance text-base text-muted sm:text-lg">
              Open to backend engineering roles and collaborations. The fastest
              way to reach me is by email — I usually reply within a day.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink
                href={`mailto:${profile.email}`}
                className="tap-target group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-glow"
              >
                Email me
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </ActionLink>
              <ActionLink
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="tap-target inline-flex items-center gap-2 rounded-full hairline glass px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                <LinkedInIcon className="h-4 w-4" />
                Connect on LinkedIn
              </ActionLink>
            </div>

            <Stagger
              className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4"
              gap={0.06}
            >
              {channels.map(({ label, value, href, Icon, external }) => {
                const inner = (
                  <>
                    <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                      <Icon className="h-4 w-4 text-accent" />
                      {label}
                    </dt>
                    <dd className="mt-2 break-words text-sm text-fg transition-colors group-hover:text-accent">
                      {value}
                    </dd>
                  </>
                );
                return (
                  <StaggerItem key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer noopener" : undefined}
                        className="group block"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group">{inner}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
