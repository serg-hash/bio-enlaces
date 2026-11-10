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

   El workflow de GitHub Pages construye con `BASE_PATH=/bio-enlaces/`. Si tocas rutas internas, verifica también:

   ```bash
   BASE_PATH=/bio-enlaces/ npm run build
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

## Contenido de la demo

El perfil por defecto es **ficticio** (Lumen Vega). No lo sustituyas por datos de una persona real. La página de Sergio vive en [`examples/sergio.config.ts`](examples/sergio.config.ts) y es opcional.

## Código de socio de Hostinger

El botón **Deploy on Hostinger** del README no lleva parámetro `ref` a propósito: el placeholder `TU_CODIGO_SOCIO` hacía parecer el proyecto inacabado.

Cuando tengas un código del programa de socios, añádelo **solo** a las dos URLs del botón en `README.md`:

```
https://www.hostinger.com/deploy?template=serg-hash/bio-enlaces&ref=TU_CODIGO
```

No hace falta tocarlo en el código de la app.

## Estilo

- Un solo archivo de personalización: `src/config.ts`.
- Comentarios bilingües (ES/EN) cuando el cambio sea para quien customiza, no para quien mantiene el código.
- HTML semántico, contraste suficiente, `:focus-visible` visible.
- Rutas internas y archivos de `public/` pasan por `withBase()` para que GitHub Pages (`/bio-enlaces/`) y Hostinger (`/`) funcionen.

## Código de conducta

Sé respetuoso. No se aceptan contribuciones ofensivas ni spam.

---

# Contributing (English)

Fork, branch, `npm install` / `npm run dev`, then `npm run check` and `npm run build`. If you change internal URLs, also run `BASE_PATH=/bio-enlaces/ npm run build`. Open a PR against `main`.

Keep the project static, tracker-free, and secret-free. Default demo content must stay fictional (Lumen Vega). Sergio’s page is the optional file `examples/sergio.config.ts`. UI copy lives in `src/i18n.ts`; user-facing profile data lives in `src/config.ts`.

**Hostinger referral code:** the README deploy button has no `ref` on purpose. When you have a partner code, append `&ref=YOUR_CODE` to both Hostinger button URLs in `README.md`. Leave the application code unchanged.
