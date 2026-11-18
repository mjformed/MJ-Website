export const basePath = process.env.GITHUB_PAGES === "true" ? "/MJ-Website" : "";

export function asset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
