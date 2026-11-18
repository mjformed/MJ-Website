import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PhotoLayer } from "@/components/photo-layer";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website design, logo creation, branding, and digital design from Forma.",
};

export default function ServicesPage() {
  return (
    <>
      <PhotoLayer src="/backgrounds/paper.jpg" overlay="bg-paper/80" position="object-[center_30%]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <PageIntro kicker="Services" title="Professional work, made for the client in front of us.">
            Whether you are starting a new business or looking to refresh an existing brand, the
            goal is the same: modern design that helps bring your ideas to life.
          </PageIntro>
        </div>
      </PhotoLayer>
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="border-t border-line">
          {services.map((service) => (
            <article
              key={service.number}
              id={`service-${service.id}`}
              className="scroll-mt-[4.5rem] grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <p className="font-serif text-2xl text-clay md:col-span-2">{service.number}</p>
              <div className="md:col-span-4">
                <h2 className="font-serif text-4xl tracking-[-0.03em]">{service.title}</h2>
                <p className="mt-2 text-sm tracking-[0.14em] uppercase text-muted">
                  {service.kicker}
                </p>
              </div>
              <div className="md:col-span-6">
                <p className="text-lg">{service.summary}</p>
                <p className="mt-3 leading-relaxed text-muted">{service.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
