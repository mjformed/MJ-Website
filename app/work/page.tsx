import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Work",
  description: "Specimens of the websites and brand systems Forma builds.",
};

export default function WorkPage() {
  return (
    <section className="border-b border-line bg-cream">
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
            className="scroll-mt-[4.5rem] bg-paper p-5 ring-1 ring-ink/10 lg:col-span-12"
          >
            <p className="text-xs tracking-[0.16em] uppercase text-muted">Specimen 01 · Website</p>
            <div className="mt-5 overflow-hidden bg-cream ring-1 ring-ink/10">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="size-2 rounded-full bg-clay" />
                <span className="size-2 rounded-full bg-sand" />
                <span className="size-2 rounded-full bg-moss" />
                <span className="ml-2 text-xs text-muted">yourname.com</span>
              </div>
              <div className="grid gap-6 p-6 sm:grid-cols-[1.4fr_0.8fr] sm:p-8">
                <div>
                  <p className="text-xs tracking-[0.16em] uppercase text-clay">A clear offer</p>
                  <p className="mt-3 font-serif text-4xl leading-[0.95] tracking-[-0.03em]">
                    Say what you do. Then make it easy to begin.
                  </p>
                </div>
                <div className="grid content-end gap-2">
                  <div className="h-16 bg-moss" />
                  <div className="h-8 bg-sand" />
                </div>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-muted">
              A homepage that leads with the offer, gives the eye a place to rest, and ends
              with a way to start a conversation.
            </p>
          </article>

          <article
            id="work-brand"
            className="scroll-mt-[4.5rem] grid gap-8 bg-paper p-5 ring-1 ring-ink/10 lg:col-span-12 lg:grid-cols-2 lg:p-8"
          >
            <div>
              <p className="text-xs tracking-[0.16em] uppercase text-muted">Specimen 02 · Brand</p>
              <p className="mt-6 font-serif text-7xl leading-none tracking-[-0.04em]">Aa</p>
              <p className="mt-4 text-lg">Instrument Serif for the voice. Instrument Sans for the details.</p>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                A small system: one display face, one working face, and colors that still look
                related when they are used apart.
              </p>
            </div>
            <ul className="grid content-end gap-3">
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
          </article>
        </div>
      </div>
    </section>
  );
}
