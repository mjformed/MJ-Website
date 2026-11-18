import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PhotoLayer } from "@/components/photo-layer";
import { principles, steps } from "@/lib/content";

const principleTones = ["border-clay", "border-moss", "border-sand"] as const;

export const metadata: Metadata = {
  title: "Approach",
  description: "How Forma shapes websites, logos, and brands from first listen to hand off.",
};

export default function ApproachPage() {
  return (
    <>
      <PhotoLayer src="/backgrounds/clay.jpg" overlay="bg-paper/80">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <PageIntro kicker="Approach" title="Thoughtful on the surface, practical underneath." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                id={`principle-${principle.id}`}
                className={`scroll-mt-[4.5rem] border-t-4 bg-paper/80 p-6 ring-1 ring-ink/10 ${principleTones[index]}`}
              >
                <h2 className="font-serif text-3xl">{principle.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </PhotoLayer>
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <ol
          id="approach-process"
          className="scroll-mt-[4.5rem] grid gap-px overflow-hidden bg-line ring-1 ring-ink/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <li key={step.number} className="bg-paper p-6 transition-colors hover:bg-cream">
              <p className="font-serif text-clay">{step.number}</p>
              <h2 className="mt-4 text-xl">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <PhotoLayer
            src="/backgrounds/paper.jpg"
            overlay="bg-sand/70"
            position="object-[20%_30%]"
            className="scroll-mt-[4.5rem]"
          >
            <article id="approach-new" className="p-8">
              <h2 className="font-serif text-3xl">New businesses</h2>
              <p className="mt-3 leading-relaxed">
                A first website, a first logo, and a brand that can introduce the work before you
                walk into the room.
              </p>
            </article>
          </PhotoLayer>
          <PhotoLayer src="/backgrounds/quote.jpg" overlay="bg-ink/72" className="scroll-mt-[4.5rem] text-paper">
            <article id="approach-existing" className="p-8">
              <h2 className="font-serif text-3xl">Existing brands</h2>
              <p className="mt-3 leading-relaxed text-paper/80">
                A refresh when the current look no longer matches the quality of what you do.
              </p>
            </article>
          </PhotoLayer>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
