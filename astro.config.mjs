import { defineConfig } from "astro/config";
import { siteUrl } from "./src/config.ts";

function siteOrigin(url) {
  try {
    return new URL(url).origin;
  } catch {
    return url;
  }
}

/**
 * Hostinger, Docker y `npm run dev` usan `/`.
 * GitHub Pages fija BASE_PATH=/bio-enlaces/ en el workflow.
 * The Pages workflow sets BASE_PATH; everywhere else the site lives at `/`.
 */
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  output: "static",
  site: siteOrigin(siteUrl()),
  base,
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
