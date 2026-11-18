import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website design, logo creation, branding, and digital design from Forma.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <PageIntro kicker="Services" title="Professional work, made for the client in front of us.">
        Whether you are starting a new business or looking to refresh an existing brand, the
        goal is the same: modern design that helps bring your ideas to life.
      </PageIntro>
      <div className="mt-14 border-t border-line">
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
  );
}
