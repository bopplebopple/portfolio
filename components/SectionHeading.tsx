import { FadeIn } from "./Motion";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <FadeIn className="mb-12 max-w-2xl sm:mb-16">
      <div className="flex items-center gap-3 eyebrow text-accent">
        <span>{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="display mt-4 text-[clamp(1.85rem,4.5vw,2.75rem)] font-semibold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
