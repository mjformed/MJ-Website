import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PhotoLayer } from "@/components/photo-layer";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Work",
  description: "Specimens of the websites and brand systems Forma builds.",
};

export default function WorkPage() {
  return (
    <>
      <PhotoLayer src="/backgrounds/paper.jpg" overlay="bg-cream/86" position="object-[20%_40%]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <PageIntro kicker="Studio studies" title="How the work is meant to feel." />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              These are specimens of the studio&apos;s approach. They show the kind of website
              and brand system we build. They are not client case studies.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <article
              id="work-website"
              className="scroll-mt-[4.5rem] bg-paper/90 p-5 shadow-[0_20px_50px_-28px_rgba(26,23,20,0.45)] ring-1 ring-ink/10 lg:col-span-12"
            >
              <p className="text-xs tracking-[0.16em] uppercase text-muted">Specimen 01 · Website</p>
              <div className="mt-5 overflow-hidden bg-cream ring-1 ring-ink/10">
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
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                      A homepage that leads with the offer, gives the eye a place to rest, and
                      ends with a way to start a conversation.
                    </p>
                    <span className="mt-6 inline-block bg-ink px-4 py-2 text-sm text-paper">
                      Start a project
                    </span>
                  </div>
                  <div className="relative min-h-52">
                    <img
                      src={asset("/backgrounds/hero.jpg")}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  </div>
                </div>
              </div>
            </article>

            <article
              id="work-brand"
              className="scroll-mt-[4.5rem] overflow-hidden bg-paper/90 shadow-[0_20px_50px_-28px_rgba(26,23,20,0.45)] ring-1 ring-ink/10 lg:col-span-12"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-64 overflow-hidden bg-clay">
                  <img
                    src={asset("/backgrounds/clay.jpg")}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-ink/25" />
                  <p className="relative p-8 font-serif text-[clamp(5rem,14vw,9rem)] leading-none tracking-[-0.06em] text-paper/90">
                    Aa
                  </p>
                </div>
                <div className="p-5 lg:p-8">
                  <p className="text-xs tracking-[0.16em] uppercase text-muted">
                    Specimen 02 · Brand
                  </p>
                  <p className="mt-4 text-lg">
                    Instrument Serif for the voice. Instrument Sans for the details.
                  </p>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">
                    A small system: one display face, one working face, and colors that still look
                    related when they are used apart.
                  </p>
                  <ul className="mt-8 grid gap-3">
                    {[
                      ["Ink", "#1A1714", "bg-ink"],
                      ["Clay", "#9A3B2F", "bg-clay"],
                      ["Moss", "#24312B", "bg-moss"],
                      ["Paper", "#F3EEE6", "bg-paper"],
                    ].map(([name, hex, swatch]) => (
                      <li key={name} className="flex items-center gap-4 border-b border-line pb-3">
                        <span className={`size-10 ring-1 ring-ink/10 ${swatch}`} />
                        <span className="flex-1">{name}</span>
                        <span className="text-sm tracking-[0.12em] text-muted">{hex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </PhotoLayer>
      <CtaBand />
    </>
  );
}
