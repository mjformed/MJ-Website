import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PhotoLayer } from "@/components/photo-layer";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Work",
  description: "Specimens of the websites and brand systems MJ Forms builds.",
};

export default function WorkPage() {
  return (
    <>
      <PhotoLayer src="/backgrounds/studio.jpg" overlay="bg-paper/80" position="object-[center_20%]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <PageIntro kicker="Studio studies" title="How the work is meant to feel." />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              These are specimens of the studio&apos;s approach. They show the kind of website
              and brand system we build. They are not client case studies.
            </p>
          </div>
        </div>
      </PhotoLayer>
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="mt-12 grid gap-10">
          <article id="work-website" className="scroll-mt-[4.5rem]">
            <p className="text-xs tracking-[0.16em] uppercase text-muted">Specimen 01 · Website</p>
            <div className="mt-5 overflow-hidden bg-cream ring-1 ring-line">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="size-2 rounded-full bg-clay" />
                <span className="size-2 rounded-full bg-sand" />
                <span className="size-2 rounded-full bg-moss" />
                <span className="ml-2 text-xs text-muted">yourname.com</span>
              </div>
              <div className="grid sm:grid-cols-[1.15fr_0.85fr]">
                <div className="p-6 sm:p-8">
                  <p className="text-xs tracking-[0.16em] uppercase text-clay">A clear offer</p>
                  <p className="mt-3 font-serif text-4xl leading-[0.95] tracking-[-0.03em]">
                    Say what you do. Then make it easy to begin.
                  </p>
                </div>
                <img
                  src={asset("/backgrounds/hero.jpg")}
                  alt=""
                  className="h-56 w-full object-cover sm:h-full"
                />
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-muted">
              A homepage that leads with the offer, gives the eye a place to rest, and ends
              with a way to start a conversation.
            </p>
          </article>

          <article id="work-brand" className="scroll-mt-[4.5rem] grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.16em] uppercase text-muted">Specimen 02 · Brand</p>
              <img
                src={asset("/brand/logo.jpg")}
                alt="MJ Forms mark"
                className="mt-6 h-48 w-48 rounded-sm object-cover"
              />
              <p className="mt-4 text-lg">A sky-blue mark, cream type, and one line: Thoughtfully different.</p>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                A small system: one display face, one working face, and colors that still look
                related when they are used apart.
              </p>
            </div>
            <ul className="grid content-end gap-3">
              {[
                ["Ink", "#24353B", "bg-ink"],
                ["Sky", "#5E8FA0", "bg-clay"],
                ["Deep", "#3A6573", "bg-moss"],
                ["Paper", "#F4F7F8", "bg-paper"],
              ].map(([name, hex, swatch]) => (
                <li key={name} className="flex items-center gap-4 border-b border-line pb-3">
                  <span className={`size-10 ring-1 ring-ink/10 ${swatch}`} />
                  <span className="flex-1">{name}</span>
                  <span className="text-sm tracking-[0.12em] text-muted">{hex}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
