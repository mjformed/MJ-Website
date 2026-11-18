import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PhotoLayer } from "@/components/photo-layer";
import { asset } from "@/lib/asset";
import { services, steps } from "@/lib/content";

const servicePhotos = [
  { src: "/backgrounds/hero.jpg", position: "object-[center_30%]" },
  { src: "/backgrounds/paper.jpg", position: "object-center" },
  { src: "/backgrounds/clay.jpg", position: "object-center" },
  { src: "/backgrounds/studio.jpg", position: "object-[center_40%]" },
] as const;

const ticker = [...services, ...services, ...services, ...services];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={asset("/backgrounds/hero.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/88 to-paper/25" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-8">
            <p className="text-sm tracking-[0.2em] uppercase text-muted">Design studio</p>
            <h1 className="mt-5 font-serif text-[clamp(3.6rem,9vw,7.4rem)] leading-[0.88] tracking-[-0.04em]">
              Designed to
              <br />
              Make an
              <br />
              <em className="text-clay">Impact.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Forma helps businesses and individuals build a strong online presence through
              creative, thoughtfully designed digital solutions. We make custom websites, logos,
              branding, and other digital design, shaped around each client.
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
                className="border border-ink bg-paper/70 px-5 py-3 transition-colors hover:bg-sand"
              >
                See the services
              </Link>
            </div>
          </div>
          <ol className="flex flex-col justify-end gap-4 border-t border-line bg-paper/40 pt-8 backdrop-blur-[2px] lg:col-span-4 lg:border-t-0 lg:border-l lg:border-ink/15 lg:bg-transparent lg:pl-8 lg:pt-0 lg:backdrop-blur-none">
            {services.map((service) => (
              <li key={service.number}>
                <Link
                  href={`/services#service-${service.id}`}
                  className="grid grid-cols-[auto_1fr] gap-4 transition-colors hover:text-clay"
                >
                  <span className="font-serif text-clay">{service.number}</span>
                  <span>
                    <span className="block text-lg">{service.title}</span>
                    <span className="text-sm text-muted">{service.kicker}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative border-t border-ink/10 bg-paper/55 py-3 backdrop-blur-[2px]">
          <div className="overflow-hidden">
            <div className="ticker-track gap-10 px-5 text-sm tracking-[0.22em] uppercase text-muted">
              {ticker.map((service, index) => (
                <span key={`${service.id}-${index}`} className="flex items-center gap-10">
                  {service.title}
                  <span className="text-clay" aria-hidden="true">
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PhotoLayer src="/backgrounds/quote.jpg" overlay="bg-moss/72" className="text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="max-w-4xl font-serif text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.15]">
            We believe great design should look good, work well, and make a lasting impression.
          </p>
        </div>
      </PhotoLayer>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="text-sm tracking-[0.2em] uppercase text-muted">What we make</p>
        <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
          A studio for the public face of the work.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#service-${service.id}`}
              className="group overflow-hidden bg-cream ring-1 ring-ink/10 transition-colors hover:bg-paper"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={asset(servicePhotos[index].src)}
                  alt=""
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${servicePhotos[index].position}`}
                />
                <div className="absolute inset-0 bg-ink/20" />
                <p className="absolute left-5 top-5 font-serif text-3xl text-paper">{service.number}</p>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-3xl tracking-[-0.03em]">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-sm tracking-[0.2em] uppercase text-muted">How we work</p>
          <ol className="mt-8 grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="bg-cream p-6 transition-colors hover:bg-paper">
                <p className="font-serif text-clay">{step.number}</p>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
