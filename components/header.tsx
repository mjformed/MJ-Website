"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AppLink } from "@/components/app-link";
import { Mark } from "@/components/mark";
import { nav } from "@/lib/content";

function currentPath(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
}

export function Header() {
  const pathname = usePathname();
  const path = currentPath(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header id="site-header" className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <AppLink href="/" className="flex items-center gap-3 text-sm tracking-[0.22em] uppercase">
          <Mark />
          <span>Forma</span>
        </AppLink>
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Primary">
          {nav.map((item) => (
            <AppLink
              key={item.href}
              href={item.href}
              className={`px-3 py-2 ${path === item.href ? "text-clay" : "hover:text-clay"}`}
            >
              {item.label}
            </AppLink>
          ))}
          <AppLink
            href="/contact"
            className="ml-3 bg-ink px-4 py-2 text-paper transition-colors hover:bg-clay"
          >
            Start a project
          </AppLink>
        </nav>
        <button
          type="button"
          className="border border-ink px-3 py-2 text-sm md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>
      {mobileOpen ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-b-0">
                <AppLink
                  href={item.href}
                  className={`block py-3 text-lg ${path === item.href ? "text-clay" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
