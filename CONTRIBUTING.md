# Contribuir a bio-enlaces

Gracias por querer mejorar esta plantilla. El objetivo es que cualquier creador pueda autoalojar una página de enlaces **sin secretos, sin rastreo y sin servicios de pago**.

## Cómo trabajar

1. Haz un fork y clona el repositorio.
2. Crea una rama descriptiva: `git checkout -b feat/mi-cambio`.
3. Instala y arranca el sitio:

   ```bash
   npm install
   npm run dev
   ```

4. Comprueba tipos y el build estático:

   ```bash
   npm run check
   npm run build
   ```

5. Abre un pull request hacia `main` explicando el cambio (en español o inglés).

## Qué encaja bien

- Nuevos temas en `src/config.ts` (`themes`).
- Pictogramas en `src/icons.ts` (YouTube, Mastodon, etc.).
- Mejoras de accesibilidad, rendimiento o SEO.
- Traducciones (la UI ya cubre ES/EN).
- Documentación más clara.

## Qué no encaja

- Analítica, píxeles o fuentes cargadas desde CDN de terceros.
- Servicios de pago o claves de API.
- Dependencias de runtime innecesarias: el sitio debe seguir siendo estático (`npm run build` → carpeta `dist/`).

## Estilo

- Un solo archivo de personalización: `src/config.ts`.
- Comentarios bilingües (ES/EN) cuando el cambio sea para quien customiza, no para quien mantiene el código.
- HTML semántico, contraste suficiente, `:focus-visible` visible.

## Código de conducta

Sé respetuoso. No se aceptan contribuciones ofensivas, spam ni contenido que identifique a personas reales en el contenido de demostración.

---

# Contributing (English)

Fork, branch, `npm install` / `npm run dev`, then `npm run check` and `npm run build`. Open a PR against `main`.

Keep the project static, tracker-free, and secret-free. Demo content must stay fictional. UI copy lives in `src/i18n.ts`; user-facing profile data lives in `src/config.ts`.
