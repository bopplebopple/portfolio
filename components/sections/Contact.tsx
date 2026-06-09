import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

// lucide-react dropped brand glyphs, so the LinkedIn mark is inlined.
function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.5H5.67V18h2.67V9.5zM7 6.18a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zm11.34 11.82v-4.67c0-2.5-1.34-3.66-3.12-3.66-1.44 0-2.08.79-2.44 1.35V9.5h-2.67V18h2.67v-4.74c0-.25.02-.5.09-.68.2-.5.65-1.02 1.42-1.02 1 0 1.4.76 1.4 1.88V18h2.67z" />
    </svg>
  );
}

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    Icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-ink text-paper"
    >
      <div className="mx-auto w-full max-w-[84rem] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow text-accent">06</span>
          <span className="h-px max-w-[8rem] flex-1 bg-white/20" />
          <span className="eyebrow text-paper/60">Contact</span>
        </Reveal>

        <Reveal>
          <h2 className="display mt-8 max-w-4xl text-[clamp(2.5rem,8vw,6rem)] font-bold">
            Let&apos;s build something{" "}
            <span className="serif text-accent">reliable</span> together.
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-paper/70">
            Open to backend engineering roles and collaborations. The fastest
            way to reach me is email — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Magnetic strength={0.25}>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 bg-paper px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </Reveal>

        {/* Channels */}
        <dl className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon, external }) => {
            const inner = (
              <>
                <dt className="flex items-center gap-2 eyebrow text-paper/50">
                  <Icon className="h-4 w-4 text-accent" />
                  {label}
                </dt>
                <dd className="mt-3 break-words text-sm font-medium text-paper transition-colors duration-300 group-hover:text-accent">
                  {value}
                </dd>
              </>
            );
            return (
              <Reveal
                key={label}
                className="group bg-ink p-6 transition-colors duration-300 hover:bg-[#1c1a13]"
              >
                {href ? (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer noopener" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
