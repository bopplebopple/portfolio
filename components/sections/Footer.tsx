import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/content";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto w-full max-w-[84rem] px-6 py-14 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-paper text-[0.8rem] font-bold text-ink">
                {profile.monogram}
              </span>
              <span className="text-sm font-semibold">{profile.shortName}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              {profile.title} based in {profile.location}, building reliable
              backends in Go.
            </p>
          </div>

          {/* Nav + back to top */}
          <div className="flex flex-col items-start gap-8 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-line mono text-xs uppercase tracking-wider text-paper/60 transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Magnetic strength={0.3}>
              <a
                href="#top"
                className="group inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-paper transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Back to top
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}.
          </p>
          <p className="mono">Built with Next.js · Tailwind · Motion</p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="select-none px-6 sm:px-10 lg:px-16">
        <span className="display block text-[18vw] font-bold leading-[0.8] text-white/[0.04]">
          {profile.lastName}
        </span>
      </div>
    </footer>
  );
}
