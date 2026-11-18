import Link from "next/link";
import { asset } from "@/lib/asset";
import { services } from "@/lib/content";

const pages = [
  {
    href: "/work",
    number: "01",
    title: "Work",
    copy: "Specimens of the websites and brand systems we make.",
  },
  {
    href: "/services",
    number: "02",
    title: "Services",
    copy: "Custom websites, logos, branding, and digital design.",
  },
  {
    href: "/approach",
    number: "03",
    title: "Approach",
    copy: "How the work is shaped, from first listen to hand off.",
  },
  {
    href: "/contact",
    number: "04",
    title: "Contact",
    copy: "Tell us what you are making and we will write back.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={asset("/backgrounds/hero.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-paper/50" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24">
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
              <Link href="/contact" className="bg-ink px-5 py-3 text-paper hover:bg-clay">
                Start a project
              </Link>
              <Link href="/services" className="border border-ink bg-paper/70 px-5 py-3 hover:bg-sand">
                See the services
              </Link>
            </div>
          </div>
          <ol className="flex flex-col justify-end gap-4 border-t border-line pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-ink/15 lg:pl-8 lg:pt-0">
            {services.map((service) => (
              <li key={service.number}>
                <Link
                  href={`/services#service-${service.id}`}
                  className="grid grid-cols-[auto_1fr] gap-4 hover:text-clay"
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
      </section>

      <section className="relative overflow-hidden text-paper">
        <img
          src={asset("/backgrounds/quote.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-moss/75" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="max-w-4xl font-serif text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.15]">
            We believe great design should look good, work well, and make a lasting impression.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="text-sm tracking-[0.2em] uppercase text-muted">The studio</p>
        <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
          Choose a page and go in.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden bg-line sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="bg-paper p-8 hover:bg-cream"
            >
              <p className="font-serif text-clay">{page.number}</p>
              <h3 className="mt-4 font-serif text-3xl tracking-[-0.03em]">{page.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{page.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
