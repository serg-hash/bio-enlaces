/**
 * ============================================================================
 *  Ejemplo ficticio — Lumen Vega (contenido por defecto)
 *  Fictional example — Lumen Vega (default content)
 * ============================================================================
 *
 * ES: Este es el perfil que el repo usa por defecto en `src/config.ts`.
 *     Está duplicado aquí para que puedas restaurar la demo genérica
 *     después de probar otro ejemplo (por ejemplo `sergio.config.ts`).
 *
 * EN: This is the profile the repo uses by default in `src/config.ts`.
 *     It is duplicated here so you can restore the generic demo after
 *     trying another example (for instance `sergio.config.ts`).
 */

import type { FeaturedVideo, I18nText, Link, Social, ThemeName } from "../src/config";

export const exampleSite = {
  url: "https://serg-hash.github.io/bio-enlaces",
  defaultLocale: "es" as const,
  showLanguageSwitch: true,
  name: "Lumen Vega",
  handle: "@lumen.crea",
  title: {
    es: "Lumen Vega — enlaces",
    en: "Lumen Vega — links",
  } satisfies I18nText,
  description: {
    es: "Clips, tutoriales y mundos animados. Todos los enlaces de Lumen Vega en un solo lugar.",
    en: "Clips, tutorials and animated worlds. All of Lumen Vega’s links in one place.",
  } satisfies I18nText,
  avatar: "/examples/lumen-vega-avatar.png",
  bio: {
    es: "Creo mundos animados y batallas épicas con IA. Tutoriales, detrás de cámaras y un clip nuevo cada semana.",
    en: "I make animated worlds and epic AI battles. Tutorials, behind the scenes, and a new clip every week.",
  } satisfies I18nText,
  theme: "midnight" as ThemeName,
  featuredVideo: {
    enabled: true,
    id: "aqz-KE-bpKQ",
    title: {
      es: "Clip de demostración (película libre)",
      en: "Demo clip (open movie)",
    },
  } satisfies FeaturedVideo,
  socials: [
    { network: "youtube", url: "https://www.youtube.com/@lumen.crea", label: "YouTube" },
    { network: "x", url: "https://x.com/lumen_crea", label: "X" },
    { network: "instagram", url: "https://instagram.com/lumen.crea", label: "Instagram" },
    { network: "tiktok", url: "https://www.tiktok.com/@lumen.crea", label: "TikTok" },
    { network: "twitch", url: "https://www.twitch.tv/lumencrea", label: "Twitch" },
    { network: "github", url: "https://github.com/serg-hash/bio-enlaces", label: "GitHub" },
  ] satisfies Social[],
  links: [
    {
      title: { es: "Canal de YouTube", en: "YouTube channel" },
      url: "https://www.youtube.com/@lumen.crea",
      icon: "▶️",
      featured: true,
    },
    {
      title: { es: "Shorts de la semana", en: "This week’s Shorts" },
      url: "https://www.youtube.com/@lumen.crea/shorts",
      icon: "⚡",
    },
    {
      title: { es: "Detrás de cámaras", en: "Behind the scenes" },
      url: "https://example.com/making-of",
      icon: "🎬",
    },
    {
      title: { es: "Comunidad", en: "Community" },
      url: "https://example.com/comunidad",
      icon: "💬",
    },
    {
      title: { es: "Colaboraciones", en: "Collaborations" },
      url: "mailto:hola@example.com",
      icon: "✉️",
    },
    {
      title: { es: "Código de esta página", en: "Source code for this page" },
      url: "https://github.com/serg-hash/bio-enlaces",
      icon: "github",
    },
  ] satisfies Link[],
};
