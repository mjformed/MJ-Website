export const siteUrl = "https://mjformed.github.io/MJ-Website";

export const pages = ["/", "/work/", "/services/", "/approach/", "/contact/"] as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "/" : normalized}`;
}
