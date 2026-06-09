import Marquee from "@/components/ui/Marquee";
import { marqueeWords } from "@/lib/content";

export default function MarqueeStrip() {
  return (
    <section
      aria-label="Core technologies and focus areas"
      className="border-y border-line-strong bg-paper py-5 sm:py-7"
    >
      <Marquee items={marqueeWords} duration={36} />
    </section>
  );
}
