"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { nav, type NavItem } from "@/lib/content";
import { Mark } from "@/components/mark";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = nav.find((item) => item.href === openId) ?? null;

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
        <a href="#top" className="flex items-center gap-3 text-sm tracking-[0.22em] uppercase">
          <Mark />
          <span>Forma</span>
        </a>
        <nav className="hidden items-center gap-1 text-sm md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavTrigger
              key={item.href}
              item={item}
              open={openId === item.href}
              onOpen={() => openMenu(item.href)}
              onClose={closeMenu}
              onEnterPanel={() => {
                const first = panelRef.current?.querySelector<HTMLAnchorElement>("a");
                first?.focus();
              }}
            />
          ))}
          <a
            href="#contact-form"
            className="ml-3 bg-ink px-4 py-2 text-paper transition-colors hover:bg-clay"
          >
            Start a project
          </a>
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
            <a
              href={active.href}
              className="w-44 shrink-0 py-1 hover:text-clay"
              onClick={closeMenu}
            >
              <span className="block text-sm tracking-[0.14em] uppercase text-muted">
                {active.label}
              </span>
              <span className="mt-2 block font-serif text-2xl">View section</span>
            </a>
            <div className="grid flex-1 grid-cols-2 gap-2 lg:grid-cols-4">
              {active.items.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border border-transparent p-3 hover:border-line hover:bg-paper"
                  onClick={closeMenu}
                >
                  <span className="block font-serif text-2xl">{link.label}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{link.detail}</span>
                </a>
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
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-lg"
                    aria-expanded={expanded}
                    onClick={() => setOpenId(expanded ? null : item.href)}
                  >
                    {item.label}
                    <Chevron open={expanded} />
                  </button>
                  {expanded ? (
                    <ul className="mb-3 grid gap-1 border-l border-line pl-4">
                      <li>
                        <a
                          href={item.href}
                          className="block py-2 text-muted"
                          onClick={() => setMobileOpen(false)}
                        >
                          Overview
                        </a>
                      </li>
                      {item.items.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="block py-2"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="block">{link.label}</span>
                            <span className="block text-sm text-muted">{link.detail}</span>
                          </a>
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
  open,
  onOpen,
  onClose,
  onEnterPanel,
}: {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onEnterPanel: () => void;
}) {
  function onButtonKey(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
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
    <button
      type="button"
      className={`flex items-center gap-1.5 px-3 py-2 ${open ? "text-clay" : "hover:text-clay"}`}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls="desktop-nav-panel"
      onMouseEnter={onOpen}
      onClick={() => (open ? onClose() : onOpen())}
      onKeyDown={onButtonKey}
    >
      {item.label}
      <Chevron open={open} />
    </button>
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
