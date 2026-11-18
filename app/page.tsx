import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Mark } from "@/components/mark";
import { PhotoLayer } from "@/components/photo-layer";
import { asset } from "@/lib/asset";
import { services, steps } from "@/lib/content";

const servicePhotos = {
  websites: { src: "/backgrounds/hero.jpg", position: "object-[center_40%]" },
  logos: { src: "/brand/logo.jpg", position: "object-center" },
  branding: { src: "/backgrounds/studio.jpg", position: "object-[center_30%]" },
  digital: { src: "/backgrounds/paper.jpg", position: "object-center" },
} as const;

export default function HomePage() {
  return (
    <>
      <PhotoLayer
        src="/backgrounds/hero.jpg"
        overlay="bg-gradient-to-r from-paper via-paper/72 to-paper/10"
        position="object-[center_35%]"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex items-center gap-4">
            <Mark className="h-16 w-auto sm:h-20" />
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted">Design studio</p>
              <p className="mt-1 text-sm tracking-[0.16em] uppercase text-clay">
                Thoughtfully different.
              </p>
            </div>
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.9] tracking-[-0.04em]">
            Designed to
            <br />
            Make an
            <br />
            <em className="text-clay">Impact.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            MJ Forms designs custom websites, logos, branding, and digital work. Clear,
            considered design for new businesses and brands ready for a cleaner public face.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-ink px-5 py-3 text-paper transition-colors hover:bg-clay"
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className="border border-ink bg-paper/80 px-5 py-3 transition-colors hover:bg-sand"
            >
              See the services
            </Link>
          </div>
        </div>
      </PhotoLayer>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-sm tracking-[0.2em] uppercase text-muted">What we make</p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const photo = servicePhotos[service.id];
              return (
                <li key={service.id}>
                  <Link
                    href={`/services#service-${service.id}`}
                    className="group block overflow-hidden bg-paper ring-1 ring-line transition-colors hover:ring-clay"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={asset(photo.src)}
                        alt=""
                        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${photo.position}`}
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-serif text-clay">{service.number}</p>
                      <h2 className="mt-2 font-serif text-3xl tracking-[-0.03em]">{service.title}</h2>
                      <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <PhotoLayer src="/backgrounds/studio.jpg" overlay="bg-paper/62" position="object-[center_40%]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-sm tracking-[0.2em] uppercase text-muted">How we work</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="bg-paper/85 p-6 ring-1 ring-line">
                <p className="font-serif text-clay">{step.number}</p>
                <h2 className="mt-3 text-xl">{step.title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </PhotoLayer>

      <CtaBand />
    </>
  );
}
