import type { Locale } from "./config";

export const ui = {
  es: {
    skip: "Saltar al contenido",
    links: "Enlaces",
    follow: "Redes",
    featured: "Vídeo destacado",
    play: "Reproducir vídeo",
    lang: "Idioma",
    spanish: "Español",
    english: "English",
    footer: "Página de enlaces autoalojada. Sin rastreo.",
    builtWith: "Hecho con",
    openVideo: "Ver en YouTube",
    profileImage: "Foto de perfil de",
    home: "Inicio",
    notFound: "Esta página no existe.",
    backHome: "Volver al inicio",
  },
  en: {
    skip: "Skip to content",
    links: "Links",
    follow: "Socials",
    featured: "Featured video",
    play: "Play video",
    lang: "Language",
    spanish: "Español",
    english: "English",
    footer: "Self-hosted link-in-bio page. No tracking.",
    builtWith: "Made with",
    openVideo: "Watch on YouTube",
    profileImage: "Profile photo of",
    home: "Home",
    notFound: "This page doesn’t exist.",
    backHome: "Back to home",
  },
} as const;

export type UiKey = keyof typeof ui.es;

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

export function pathFor(locale: Locale): string {
  return locale === "es" ? "/" : "/en/";
}
