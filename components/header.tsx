"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { usePathname } from "next/navigation";
import { AppLink } from "@/components/app-link";
import { Mark } from "@/components/mark";
import { nav, type NavItem } from "@/lib/content";

function currentPath(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
}

export function Header() {
  const pathname = usePathname();
  const path = currentPath(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = nav.find((item) => item.href === openId && item.items.length > 0) ?? null;

  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }

  function openMenu(id: string) {
    cancelClose();
    setOpenId(id);
  }

  function closeMenu() {
    cancelClose();
    setOpenId(null);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenId(null), 140);
  }

  function goToPage() {
    window.setTimeout(() => {
      closeMenu();
      setMobileOpen(false);
    }, 0);
  }

  useEffect(() => {
    setOpenId(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenId(null);
        setMobileOpen(false);
      }
    }

    function onPointer(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!document.getElementById("site-header")?.contains(target)) {
        setOpenId(null);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header
      id="site-header"
      className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <AppLink
          href="/"
          className="flex items-center gap-3 text-sm tracking-[0.22em] uppercase"
          onClick={goToPage}
        >
          <Mark />
          <span>Forma</span>
        </AppLink>
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavTrigger
              key={item.href}
              item={item}
              current={path === item.href}
              open={openId === item.href}
              onOpen={() => openMenu(item.href)}
              onClose={closeMenu}
              onNavigate={goToPage}
              onEnterPanel={() => {
                const first = panelRef.current?.querySelector<HTMLAnchorElement>("a");
                first?.focus();
              }}
            />
          ))}
          <AppLink
            href="/contact"
            className="ml-3 bg-ink px-4 py-2 text-paper transition-colors hover:bg-clay"
            onClick={goToPage}
          >
            Start a project
          </AppLink>
        </nav>
        <button
          type="button"
          className="border border-ink px-3 py-2 text-sm md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => {
            setMobileOpen((value) => !value);
            setOpenId(null);
          }}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {active ? (
        <div
          ref={panelRef}
          id="desktop-nav-panel"
          className="nav-panel hidden border-t border-line bg-cream md:block"
          onKeyDown={(event) => onPanelKey(event, closeMenu)}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-6 md:flex-row md:px-8">
            <AppLink
              href={active.href}
              className="w-44 shrink-0 py-1 hover:text-clay"
              onClick={goToPage}
            >
              <span className="block text-sm tracking-[0.14em] uppercase text-muted">
                {active.label}
              </span>
              <span className="mt-2 block font-serif text-2xl">Open page</span>
            </AppLink>
            <div className="grid flex-1 grid-cols-2 gap-2 lg:grid-cols-4">
              {active.items.map((link) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  className="border border-transparent p-3 hover:border-line hover:bg-paper"
                  onClick={goToPage}
                >
                  <span className="block font-serif text-2xl">{link.label}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{link.detail}</span>
                </AppLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
          <ul>
            {nav.map((item) => {
              const expanded = openId === item.href;
              const hasMenu = item.items.length > 0;
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <div className="flex items-center gap-2">
                    <AppLink
                      href={item.href}
                      className={`flex-1 py-3 text-left text-lg ${path === item.href ? "text-clay" : ""}`}
                      onClick={goToPage}
                    >
                      {item.label}
                    </AppLink>
                    {hasMenu ? (
                      <button
                        type="button"
                        className="px-2 py-3"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Hide" : "Show"} ${item.label} links`}
                        onClick={() => setOpenId(expanded ? null : item.href)}
                      >
                        <Chevron open={expanded} />
                      </button>
                    ) : null}
                  </div>
                  {hasMenu && expanded ? (
                    <ul className="mb-3 grid gap-1 border-l border-line pl-4">
                      {item.items.map((link) => (
                        <li key={link.href}>
                          <AppLink href={link.href} className="block py-2" onClick={goToPage}>
                            <span className="block">{link.label}</span>
                            <span className="block text-sm text-muted">{link.detail}</span>
                          </AppLink>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function NavTrigger({
  item,
  current,
  open,
  onOpen,
  onClose,
  onNavigate,
  onEnterPanel,
}: {
  item: NavItem;
  current: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: () => void;
  onEnterPanel: () => void;
}) {
  const hasMenu = item.items.length > 0;

  function onLinkKey(event: ReactKeyboardEvent<HTMLAnchorElement>) {
    if (hasMenu && event.key === "ArrowDown") {
      event.preventDefault();
      onOpen();
      window.requestAnimationFrame(onEnterPanel);
    }
    if (event.key === "Escape" && open) {
      event.preventDefault();
      onClose();
    }
  }

  return (
    <AppLink
      href={item.href}
      className={`flex items-center gap-1.5 px-3 py-2 ${open || current ? "text-clay" : "hover:text-clay"}`}
      onClick={onNavigate}
      onMouseEnter={hasMenu ? onOpen : onClose}
      onKeyDown={onLinkKey}
    >
      {item.label}
      {hasMenu ? <Chevron open={open} /> : null}
    </AppLink>
  );
}

function onPanelKey(event: ReactKeyboardEvent<HTMLDivElement>, onClose: () => void) {
  const items = [...event.currentTarget.querySelectorAll<HTMLAnchorElement>("a")];
  const index = items.findIndex((node) => node === document.activeElement);
  if (event.key === "Escape") {
    event.preventDefault();
    onClose();
  }
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    items[(index + 1 + items.length) % items.length]?.focus();
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    items[(index - 1 + items.length) % items.length]?.focus();
  }
  if (event.key === "Home") {
    event.preventDefault();
    items[0]?.focus();
  }
  if (event.key === "End") {
    event.preventDefault();
    items[items.length - 1]?.focus();
  }
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`size-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M2.2 4.2 6 8l3.8-3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
