"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const id = decodeURIComponent(hash.slice(1));
  document.getElementById(id)?.scrollIntoView();
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
