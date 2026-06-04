import Reveal from "./Reveal";

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
    <Reveal className="mb-12 max-w-2xl sm:mb-16">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/40" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
