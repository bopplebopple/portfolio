import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

// lucide-react dropped brand glyphs — inline the LinkedIn mark.
function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.5H5.67V18h2.67V9.5zM7 6.18a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zm11.34 11.82v-4.67c0-2.5-1.34-3.66-3.12-3.66-1.44 0-2.08.79-2.44 1.35V9.5h-2.67V18h2.67v-4.74c0-.25.02-.5.09-.68.2-.5.65-1.02 1.42-1.02 1 0 1.4.76 1.4 1.88V18h2.67z" />
    </svg>
  );
}

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}`, Icon: Phone },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: Linkedin,
    external: true,
  },
  { label: "Location", value: profile.location, Icon: MapPin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 sm:py-36"
    >
      <Reveal className="flex items-center gap-3" blur={false}>
        <span className="eyebrow">Contact</span>
        <span className="h-px flex-1 bg-line" />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="display text-[clamp(2rem,5.5vw,3.75rem)] font-semibold">
              Open to backend roles.
              <br />
              Let&apos;s talk.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              The fastest way to reach me is email — I usually reply within a
              day.
            </p>
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-bg transition-opacity duration-300 hover:opacity-90"
              >
                Email me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal className="card rounded-2xl p-2">
            <ul className="divide-y divide-line">
              {channels.map(({ label, value, href, Icon, external }) => {
                const body = (
                  <>
                    <Icon className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-text" />
                    <span className="flex min-w-0 flex-col">
                      <span className="eyebrow">{label}</span>
                      <span className="truncate text-sm text-text">{value}</span>
                    </span>
                    {href && (
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer noopener" : undefined}
                        className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-elev-2"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
