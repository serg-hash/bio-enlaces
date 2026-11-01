import { defineConfig } from "astro/config";
import { siteUrl } from "./src/config.ts";

export default defineConfig({
  output: "static",
  site: siteUrl(),
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
