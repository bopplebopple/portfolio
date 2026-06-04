import { navLinks, profile } from "@/lib/content";
import { FadeIn } from "./Motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line">
      <span
        aria-hidden
        className="absolute inset-x-0 -top-px mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <FadeIn
        blur={false}
        className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <div>
          <p className="font-mono text-sm font-semibold text-fg">
            Matthew Munandar
          </p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-2">
          © {year} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
      </FadeIn>
    </footer>
  );
}
