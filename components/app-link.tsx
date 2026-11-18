import Link from "next/link";
import type { ComponentProps } from "react";

type AppLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
};

export function isExternalHref(href: string) {
  return href.startsWith("mailto:") || href.startsWith("http://") || href.startsWith("https://");
}

export function AppLink({ href, ...rest }: AppLinkProps) {
  if (isExternalHref(href)) {
    return <a href={href} {...rest} />;
  }

  return <Link href={href} {...rest} />;
}
