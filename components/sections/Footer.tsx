import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/content";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium text-text">{profile.shortName}</p>
          <p className="mt-1 text-sm text-faint">
            {profile.title} · {profile.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <p className="mono text-xs text-faint">© {year}</p>
          <Magnetic strength={0.3}>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 rounded-full hairline px-3 py-2 text-xs text-muted transition-colors hover:text-text"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Top
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
