import { AppLink } from "@/components/app-link";
import { Mark } from "@/components/mark";
import { contactEmail, nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="flex items-center gap-3">
            <Mark className="size-7" />
            <span className="text-sm tracking-[0.22em] uppercase">Forma LLC</span>
          </p>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            Websites, logos, branding, and digital design for new businesses and brands ready
            for a cleaner public face.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm md:col-span-4" aria-label="Footer">
          {nav.map((item) => (
            <AppLink key={item.href} href={item.href} className="link-underline w-fit py-1">
              {item.label}
            </AppLink>
          ))}
        </nav>
        <div className="md:col-span-3 md:text-right">
          <a href={`mailto:${contactEmail}`} className="link-underline text-sm">
            {contactEmail}
          </a>
          <AppLink
            href="/contact"
            className="mt-4 inline-block bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-clay md:ml-auto"
          >
            Start a project
          </AppLink>
        </div>
      </div>
    </footer>
  );
}
