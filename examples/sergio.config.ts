/**
 * ============================================================================
 *  Ejemplo opcional — página de Sergio
 *  Optional example — Sergio’s page
 * ============================================================================
 *
 * ES: El contenido por defecto del repo es el perfil ficticio Lumen Vega.
 *     Si quieres la página real de Sergio, copia `sergioSite` sobre `site`
 *     en `src/config.ts`, apunta `avatar` a `/avatar.png` y vuelve a construir.
 *
 * EN: The default content in this repo is the fictional Lumen Vega profile.
 *     To use Sergio’s live page, copy `sergioSite` over `site` in
 *     `src/config.ts`, set `avatar` to `/avatar.png`, and rebuild.
 */

import type { FeaturedVideo, I18nText, Link, Social, ThemeName } from "../src/config";

export const sergioSite = {
  url: "https://example.com",
  defaultLocale: "es" as const,
  showLanguageSwitch: true,
  name: "Sergio",
  handle: "@sergiogrok",
  title: {
    es: "Sergio — enlaces",
    en: "Sergio — links",
  } satisfies I18nText,
  description: {
    es: "Batallas épicas de 10 segundos creadas con IA ⚔️ Un Short nuevo cada día. ¿Quién gana? Tú decides en los comentarios.",
    en: "Epic 10-second battles made with AI ⚔️ A new Short every day. Who wins? You decide in the comments.",
  } satisfies I18nText,
  avatar: "/avatar.png",
  bio: {
    es: "Batallas épicas de 10 segundos creadas con IA ⚔️ Un Short nuevo cada día. ¿Quién gana? Tú decides en los comentarios.",
    en: "Epic 10-second battles made with AI ⚔️ A new Short every day. Who wins? You decide in the comments.",
  } satisfies I18nText,
  theme: "epic" as ThemeName,
  featuredVideo: {
    enabled: true,
    id: "https://youtube.com/shorts/w4833PaaVJ8",
    shorts: true,
    title: "Aurora Celeste vs Titán de Hielo",
  } satisfies FeaturedVideo,
  socials: [
    { network: "youtube", url: "https://www.youtube.com/@sergiodeloos", label: "YouTube" },
    { network: "x", url: "https://x.com/sergiogrok", label: "X" },
    { network: "github", url: "https://github.com/serg-hash", label: "GitHub" },
  ] satisfies Social[],
  links: [
    {
      title: { es: "Mi canal de YouTube", en: "My YouTube channel" },
      url: "https://www.youtube.com/@sergiodeloos",
      icon: "youtube",
      featured: true,
    },
    {
      title: { es: "Código de esta página", en: "Source code for this page" },
      url: "https://github.com/serg-hash/bio-enlaces",
      icon: "github",
    },
  ] satisfies Link[],
};
