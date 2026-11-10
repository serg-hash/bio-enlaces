# Changelog

All notable changes to this project are documented in this file.

## [0.1.0] — 2026-11-10

First public release of **bio-enlaces**.

### Added

- Static Astro link-in-bio page driven by a single `src/config.ts` file (profile, links, socials, theme, optional YouTube embed).
- Spanish and English UI (`/` and `/en/`) with a language switch.
- Theme presets: `epic`, `midnight`, `aurora`, `sunset`, `ocean`, `forest`, `candy`, `contrast`.
- Click-to-load YouTube embed via `youtube-nocookie` (the iframe is not created until play). Shorts use a 9:16 player.
- SEO basics: canonical, hreflang, Open Graph, Twitter Card, JSON-LD, sitemap, manifest, favicon.
- Docker Compose + nginx image for VPS deploys.
- GitHub Pages workflow (`BASE_PATH` set to `/<repo>/`) and a fictional default profile (Lumen Vega) for the live demo.
- Optional example of Sergio’s real page in `examples/sergio.config.ts`.

### Notes

- No tracking pixels, no paid APIs, no secrets. `npm run build` writes a static `dist/` folder.
- GitHub Pages must be enabled with **Source: GitHub Actions** before the demo URL goes live.
