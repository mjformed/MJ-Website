import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PhotoLayer } from "@/components/photo-layer";
import { contactEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Forma. Share a little context and we will write back.",
};

export default function ContactPage() {
  return (
    <PhotoLayer src="/backgrounds/hero.jpg" overlay="bg-cream/82" position="object-[center_40%]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm tracking-[0.2em] uppercase text-muted">Contact</p>
          <h1 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-[-0.03em]">
            Tell us what you are making.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A new business, a refresh, a website, a logo, or something in between. Share a
            little context and we will write back.
          </p>
          <a href={`mailto:${contactEmail}`} className="mt-8 inline-block font-serif text-3xl link-underline">
            {contactEmail}
          </a>
        </div>
        <div
          id="contact-form"
          className="scroll-mt-[4.5rem] bg-paper/92 p-6 ring-1 ring-line lg:col-span-7 lg:p-8"
        >
          <ContactForm />
        </div>
      </div>
    </PhotoLayer>
  );
}
