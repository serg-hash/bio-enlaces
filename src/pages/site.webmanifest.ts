import type { APIRoute } from "astro";
import { localize, resolveTheme, site, withBase } from "../config";

export const GET: APIRoute = () => {
  const theme = resolveTheme();
  const body = {
    name: site.name,
    short_name: site.name,
    description: localize(site.description, site.defaultLocale),
    start_url: withBase("/"),
    display: "standalone",
    background_color: theme.bg,
    theme_color: theme.bg,
    lang: site.defaultLocale,
    icons: [
      { src: withBase("/favicon.svg"), type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: withBase("/apple-touch-icon.png"), type: "image/png", sizes: "180x180" },
    ],
  };

  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
  });
};
