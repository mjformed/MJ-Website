import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PhotoLayer } from "@/components/photo-layer";
import { principles, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Approach",
  description: "How MJ Forms shapes websites, logos, and brands from first listen to hand off.",
};

export default function ApproachPage() {
  return (
    <>
      <PhotoLayer src="/backgrounds/clay.jpg" overlay="bg-paper/82">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <PageIntro kicker="Approach" title="Thoughtful on the surface, practical underneath." />
        </div>
      </PhotoLayer>
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              id={`principle-${principle.id}`}
              className="scroll-mt-[4.5rem]"
            >
              <h2 className="font-serif text-3xl">{principle.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{principle.copy}</p>
            </article>
          ))}
        </div>
        <ol
          id="approach-process"
          className="scroll-mt-[4.5rem] mt-16 grid gap-8 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <li key={step.number}>
              <p className="font-serif text-clay">{step.number}</p>
              <h2 className="mt-3 text-xl">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <article id="approach-new" className="scroll-mt-[4.5rem] bg-sand p-8">
            <h2 className="font-serif text-3xl">New businesses</h2>
            <p className="mt-3 leading-relaxed">
              A first website, a first logo, and a brand that can introduce the work before you
              walk into the room.
            </p>
          </article>
          <article id="approach-existing" className="scroll-mt-[4.5rem] bg-moss p-8 text-paper">
            <h2 className="font-serif text-3xl">Existing brands</h2>
            <p className="mt-3 leading-relaxed text-paper/80">
              A refresh when the current look no longer matches the quality of what you do.
            </p>
          </article>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
