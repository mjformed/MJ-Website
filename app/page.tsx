import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { Mark } from "@/components/mark";
import { contactEmail, principles, services, steps } from "@/lib/content";

export default function HomePage() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <p className="text-sm tracking-[0.2em] uppercase text-muted">Design studio</p>
            <h1 className="mt-5 font-serif text-[clamp(3.2rem,7.4vw,6.6rem)] leading-[0.9] tracking-[-0.035em]">
              Design that looks good, works well, and <em className="text-clay">lasts</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Forma helps businesses and individuals build a strong online presence through
              creative, thoughtfully designed digital solutions. We make custom websites, logos,
              branding, and other digital design, shaped around each client.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="bg-ink px-5 py-3 text-paper hover:bg-clay">
                Start a project
              </a>
              <a href="#services" className="border border-ink px-5 py-3 hover:bg-sand">
                See the services
              </a>
            </div>
          </div>
          <ol className="flex flex-col justify-end gap-4 border-t border-line pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            {services.map((service) => (
              <li key={service.number} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-serif text-clay">{service.number}</span>
                <span>
                  <span className="block text-lg">{service.title}</span>
                  <span className="text-sm text-muted">{service.kicker}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-moss text-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <p className="max-w-4xl font-serif text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.15]">
              We believe great design should look good, work well, and make a lasting impression.
            </p>
          </div>
        </section>

        <section id="services" className="scroll-mt-[4.5rem] mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-muted">Services</p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
              Professional work, made for the client in front of us.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Whether you are starting a new business or looking to refresh an existing brand, the
              goal is the same: modern design that helps bring your ideas to life.
            </p>
          </div>
          <div className="mt-14 border-t border-line">
            {services.map((service) => (
              <article
                key={service.number}
                id={`service-${service.id}`}
                className="scroll-mt-[4.5rem] grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8"
              >
                <p className="font-serif text-2xl text-clay md:col-span-2">{service.number}</p>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-4xl tracking-[-0.03em]">{service.title}</h3>
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

        <section id="work" className="scroll-mt-[4.5rem] border-y border-line bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-muted">Studio studies</p>
                <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
                  How the work is meant to feel.
                </h2>
              </div>
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

        <section id="approach" className="scroll-mt-[4.5rem] mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="text-sm tracking-[0.2em] uppercase text-muted">Approach</p>
          <h2 className="mt-3 max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
            Thoughtful on the surface, practical underneath.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                id={`principle-${principle.id}`}
                className="scroll-mt-[4.5rem]"
              >
                <h3 className="font-serif text-3xl">{principle.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{principle.copy}</p>
              </article>
            ))}
          </div>
          <ol
            id="approach-process"
            className="scroll-mt-[4.5rem] mt-16 grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step) => (
              <li key={step.number} className="bg-paper p-6">
                <p className="font-serif text-clay">{step.number}</p>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <article id="approach-new" className="scroll-mt-[4.5rem] bg-sand p-8">
              <h3 className="font-serif text-3xl">New businesses</h3>
              <p className="mt-3 leading-relaxed">
                A first website, a first logo, and a brand that can introduce the work before you
                walk into the room.
              </p>
            </article>
            <article id="approach-existing" className="scroll-mt-[4.5rem] bg-ink p-8 text-paper">
              <h3 className="font-serif text-3xl">Existing brands</h3>
              <p className="mt-3 leading-relaxed text-paper/80">
                A refresh when the current look no longer matches the quality of what you do.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="scroll-mt-[4.5rem] border-t border-line bg-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm tracking-[0.2em] uppercase text-muted">Contact</p>
              <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
                Tell us what you are making.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                A new business, a refresh, a website, a logo, or something in between. Share a
                little context and we will write back.
              </p>
              <a href={`mailto:${contactEmail}`} className="mt-8 inline-block font-serif text-3xl link-underline">
                {contactEmail}
              </a>
            </div>
            <div id="contact-form" className="scroll-mt-[4.5rem] lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted md:px-8">
          <p className="flex items-center gap-3">
            <Mark className="size-6" />
            Forma
          </p>
          <p>Websites, logos, branding, and digital design.</p>
        </div>
      </footer>
    </div>
  );
}
