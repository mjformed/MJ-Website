import { Mark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted md:px-8">
        <p className="flex items-center gap-3">
          <Mark className="size-6" />
          Forma LLC
        </p>
        <p>Websites, logos, branding, and digital design.</p>
      </div>
    </footer>
  );
}
