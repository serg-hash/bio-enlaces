/**
 * ============================================================================
 *  bio-enlaces — configuración
 *  bio-enlaces — configuration
 * ============================================================================
 *
 * ES: Este es el único archivo que tienes que editar para personalizar tu
 *     página. Cambia el nombre, el avatar, la bio, los enlaces, las redes
 *     y el tema. Luego vuelve a construir: `npm run build`.
 *
 * EN: This is the only file you need to edit to customize your page. Change
 *     the name, avatar, bio, links, socials and theme. Then rebuild with
 *     `npm run build`.
 *
 * No hace falta ningún secreto, API key ni servicio de pago.
 * No secrets, API keys or paid services required.
 */

export type Locale = "es" | "en";

/** Texto en un solo idioma, o uno distinto por idioma. */
export type I18nText = string | { es: string; en: string };

export type Theme = {
  /** Nombre interno (solo para data-theme / accesibilidad). */
  name: string;
  /** Esquema de color del navegador (scrollbars, inputs…). */
  scheme: "dark" | "light";
  /** Fondo de la página. */
  bg: string;
  /** Manchas de luz del fondo (gradientes). */
  glowA: string;
  glowB: string;
  /** Superficie de tarjetas y botones. */
  surface: string;
  surfaceHover: string;
  /** Texto principal y secundario. */
  text: string;
  muted: string;
  /** Acentos (enlaces, foco, anillo del avatar). */
  accent: string;
  accent2: string;
  border: string;
  /** Color del texto sobre el botón destacado. */
  onAccent: string;
};

export type Link = {
  /** Título visible del botón. */
  title: I18nText;
  /** URL absoluta (https://…), mailto: o tel: */
  url: string;
  /** Emoji (⚡) o clave de icono: youtube, github, web, email… */
  icon?: string;
  /**
   * Si es true, el botón usa el color de acento.
   * Útil para el enlace principal (YouTube, portfolio…).
   */
  featured?: boolean;
};

export type Social = {
  /**
   * Red: youtube | x | instagram | tiktok | twitch | github | discord |
   * bluesky | mastodon | linkedin | facebook | threads | telegram |
   * whatsapp | spotify | email | web | rss
   */
  network: string;
  url: string;
  /** Etiqueta accesible. Si se omite, se usa el nombre de la red. */
  label?: I18nText;
};

export type FeaturedVideo = {
  enabled: boolean;
  /** ID del vídeo de YouTube (la parte después de v=). */
  id: string;
  title: I18nText;
};

/**
 * Temas predefinidos. Elige uno por su clave en `site.theme`,
 * o copia un objeto y ajústalo a tu marca.
 *
 * Presets: midnight, aurora, sunset, ocean, forest, candy, contrast.
 */
export const themes = {
  midnight: {
    name: "midnight",
    scheme: "dark",
    bg: "#07080f",
    glowA: "rgba(124, 106, 255, 0.38)",
    glowB: "rgba(62, 224, 197, 0.22)",
    surface: "rgba(255, 255, 255, 0.06)",
    surfaceHover: "rgba(255, 255, 255, 0.11)",
    text: "#f4f6fb",
    muted: "#a8b0c5",
    accent: "#8b7cff",
    accent2: "#3ee0c5",
    border: "rgba(255, 255, 255, 0.12)",
    onAccent: "#0b0c14",
  },
  aurora: {
    name: "aurora",
    scheme: "dark",
    bg: "#06110e",
    glowA: "rgba(48, 224, 160, 0.32)",
    glowB: "rgba(80, 140, 255, 0.22)",
    surface: "rgba(255, 255, 255, 0.06)",
    surfaceHover: "rgba(255, 255, 255, 0.11)",
    text: "#eefbf4",
    muted: "#9ec9b6",
    accent: "#3ee0a0",
    accent2: "#7ab8ff",
    border: "rgba(255, 255, 255, 0.12)",
    onAccent: "#06211a",
  },
  sunset: {
    name: "sunset",
    scheme: "dark",
    bg: "#14080c",
    glowA: "rgba(255, 110, 80, 0.34)",
    glowB: "rgba(255, 190, 80, 0.18)",
    surface: "rgba(255, 255, 255, 0.06)",
    surfaceHover: "rgba(255, 255, 255, 0.11)",
    text: "#fff6f1",
    muted: "#cbb4ac",
    accent: "#ff7a59",
    accent2: "#ffd07a",
    border: "rgba(255, 255, 255, 0.12)",
    onAccent: "#1a0a0c",
  },
  ocean: {
    name: "ocean",
    scheme: "dark",
    bg: "#07101a",
    glowA: "rgba(56, 140, 255, 0.32)",
    glowB: "rgba(80, 230, 255, 0.16)",
    surface: "rgba(255, 255, 255, 0.06)",
    surfaceHover: "rgba(255, 255, 255, 0.11)",
    text: "#f0f6ff",
    muted: "#9eb0c8",
    accent: "#4aa3ff",
    accent2: "#5ef0ff",
    border: "rgba(255, 255, 255, 0.12)",
    onAccent: "#061018",
  },
  forest: {
    name: "forest",
    scheme: "dark",
    bg: "#0b120c",
    glowA: "rgba(140, 200, 80, 0.26)",
    glowB: "rgba(80, 160, 90, 0.18)",
    surface: "rgba(255, 255, 255, 0.06)",
    surfaceHover: "rgba(255, 255, 255, 0.11)",
    text: "#f3f7f0",
    muted: "#a8b8a4",
    accent: "#9ad45a",
    accent2: "#d4e07a",
    border: "rgba(255, 255, 255, 0.12)",
    onAccent: "#10180c",
  },
  candy: {
    name: "candy",
    scheme: "light",
    bg: "#f7f1ff",
    glowA: "rgba(255, 120, 180, 0.28)",
    glowB: "rgba(120, 160, 255, 0.24)",
    surface: "rgba(255, 255, 255, 0.72)",
    surfaceHover: "rgba(255, 255, 255, 0.95)",
    text: "#1b1430",
    muted: "#5c5672",
    accent: "#d63d8a",
    accent2: "#5b4dff",
    border: "rgba(40, 20, 60, 0.12)",
    onAccent: "#ffffff",
  },
  contrast: {
    name: "contrast",
    scheme: "dark",
    bg: "#000000",
    glowA: "rgba(255, 255, 0, 0.12)",
    glowB: "rgba(255, 255, 255, 0.06)",
    surface: "#111111",
    surfaceHover: "#222222",
    text: "#ffffff",
    muted: "#d0d0d0",
    accent: "#ffe600",
    accent2: "#ffffff",
    border: "#ffffff",
    onAccent: "#000000",
  },
} satisfies Record<string, Theme>;

export type ThemeName = keyof typeof themes;

/**
 * -------------------------------------------------------------------------
 *  Tus datos  /  Your details
 * -------------------------------------------------------------------------
 */
export const site = {
  /**
   * URL pública de tu página, sin barra final.
   * Se usa en canonical, Open Graph y el sitemap.
   * Public URL of your page, no trailing slash.
   */
  url: "https://example.com",

  /** Idioma por defecto de la UI (la otra versión vive en /en/). */
  defaultLocale: "es" as Locale,

  /** Muestra el conmutador ES / EN. Ponlo a false para un solo idioma. */
  showLanguageSwitch: true,

  /** Nombre que aparece bajo el avatar y en la pestaña del navegador. */
  name: "Lumen Vega",

  /** Handle o @usuario. Déjalo vacío para ocultarlo. */
  handle: "@lumen.crea",

  /**
   * Título corto para SEO / OG. Si lo dejas vacío se usa el nombre.
   * Short SEO/OG title. Falls back to `name` when empty.
   */
  title: {
    es: "Lumen Vega — enlaces",
    en: "Lumen Vega — links",
  } satisfies I18nText,

  /** Descripción para buscadores y tarjetas sociales. */
  description: {
    es: "Clips, tutoriales y mundos animados. Todos los enlaces de Lumen Vega en un solo lugar.",
    en: "Clips, tutorials and animated worlds. All of Lumen Vega’s links in one place.",
  } satisfies I18nText,

  /**
   * Foto de perfil. Coloca el archivo en /public (por ejemplo public/avatar.svg)
   * y referencia la ruta pública: "/avatar.svg".
   */
  avatar: "/avatar.png",

  /** Texto bajo el nombre. Puede ser un string o { es, en }. */
  bio: {
    es: "Creo mundos animados y batallas épicas con IA. Tutoriales, detrás de cámaras y un clip nuevo cada semana.",
    en: "I make animated worlds and epic AI battles. Tutorials, behind the scenes, and a new clip every week.",
  } satisfies I18nText,

  /**
   * Tema: una clave de `themes` (midnight, aurora, sunset, ocean, forest,
   * candy, contrast) o un objeto Theme propio.
   *
   *   theme: "sunset",
   *   theme: { ...themes.midnight, accent: "#ffb703" },
   */
  theme: "midnight" as ThemeName | Theme,

  /**
   * Vídeo destacado de YouTube (opcional).
   * El iframe solo se carga cuando la persona pulsa reproducir
   * (youtube-nocookie, sin tracking previo).
   *
   * El ID de demostración es Big Buck Bunny, una película libre de
   * Blender Foundation — cámbialo por tu propio vídeo.
   */
  featuredVideo: {
    enabled: true,
    id: "aqz-KE-bpKQ",
    title: {
      es: "Clip de demostración (película libre)",
      en: "Demo clip (open movie)",
    },
  } satisfies FeaturedVideo,

  /**
   * Redes sociales (iconos redondos bajo la bio).
   * `network` elige el pictograma; `url` es el destino.
   */
  socials: [
    { network: "youtube", url: "https://www.youtube.com/@lumen.crea", label: "YouTube" },
    { network: "x", url: "https://x.com/lumen_crea", label: "X" },
    { network: "instagram", url: "https://instagram.com/lumen.crea", label: "Instagram" },
    { network: "tiktok", url: "https://www.tiktok.com/@lumen.crea", label: "TikTok" },
    { network: "twitch", url: "https://www.twitch.tv/lumencrea", label: "Twitch" },
    { network: "github", url: "https://github.com/serg-hash/bio-enlaces", label: "GitHub" },
  ] satisfies Social[],

  /**
   * Botones de enlace principales, de arriba a abajo.
   * `featured: true` resalta el botón con el color de acento.
   */
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

/** Resuelve el tema activo a partir de `site.theme`. */
export function resolveTheme(): Theme {
  const selected = site.theme;
  if (typeof selected === "string") {
    return themes[selected] ?? themes.midnight;
  }
  return selected;
}

/** Convierte un texto i18n al idioma activo. */
export function localize(value: I18nText, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] || value.es || value.en;
}

export function siteUrl(): string {
  return site.url.replace(/\/+$/, "");
}
