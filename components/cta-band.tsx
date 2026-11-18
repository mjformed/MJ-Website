import Link from "next/link";
import { PhotoLayer } from "@/components/photo-layer";

export function CtaBand() {
  return (
    <PhotoLayer src="/backgrounds/quote.jpg" overlay="bg-moss/80" className="text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-end md:px-8 md:py-20">
        <div className="max-w-xl">
          <p className="text-sm tracking-[0.2em] uppercase text-paper/70">Start a project</p>
          <p className="mt-3 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.03em]">
            Tell us what you are making.
          </p>
        </div>
        <Link href="/contact" className="bg-paper px-5 py-3 text-ink transition-colors hover:bg-sand">
          Write to the studio
        </Link>
      </div>
    </PhotoLayer>
  );
}
