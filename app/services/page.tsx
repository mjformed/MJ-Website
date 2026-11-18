import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageIntro } from "@/components/page-intro";
import { PhotoLayer } from "@/components/photo-layer";
import { asset } from "@/lib/asset";
import { services } from "@/lib/content";

const servicePhotos = [
  "/backgrounds/hero.jpg",
  "/backgrounds/paper.jpg",
  "/backgrounds/clay.jpg",
  "/backgrounds/studio.jpg",
] as const;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website design, logo creation, branding, and digital design from Forma.",
};

export default function ServicesPage() {
  return (
    <>
      <PhotoLayer src="/backgrounds/studio.jpg" overlay="bg-paper/82" position="object-[center_35%]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <PageIntro kicker="Services" title="Professional work, made for the client in front of us.">
            Whether you are starting a new business or looking to refresh an existing brand, the
            goal is the same: modern design that helps bring your ideas to life.
          </PageIntro>
        </div>
      </PhotoLayer>
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="-mt-6 border-t border-line bg-paper/80 ring-1 ring-ink/10">
          {services.map((service, index) => (
            <article
              key={service.number}
              id={`service-${service.id}`}
              className="scroll-mt-[4.5rem] grid gap-6 border-b border-line p-6 last:border-b-0 md:grid-cols-12 md:items-center md:gap-8 md:p-8"
            >
              <p className="font-serif text-3xl text-clay md:col-span-2">{service.number}</p>
              <div className="md:col-span-4">
                <h2 className="font-serif text-4xl tracking-[-0.03em]">{service.title}</h2>
                <p className="mt-2 text-sm tracking-[0.14em] uppercase text-muted">
                  {service.kicker}
                </p>
                <div className="mt-6 hidden overflow-hidden ring-1 ring-ink/10 md:block">
                  <img
                    src={asset(servicePhotos[index])}
                    alt=""
                    className="h-28 w-full object-cover"
                  />
                </div>
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
