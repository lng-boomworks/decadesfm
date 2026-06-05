# Decades Worldwide Radio

The website for **Decades Worldwide Radio** — _The Soundtrack of Your Life._
Five decades of the greatest hits (60s, 70s, 80s, 90s to today), live 24/7 with real presenters.

Built with [Astro](https://astro.build) + React + Tailwind CSS, deployed to GitHub Pages.

🔗 **Live:** https://lng-boomworks.github.io/decadesfm/
📻 **Stream:** https://s6.citrus3.com/public/decadesfmworldwideradio

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, live-state strip, decade browser, featured shows |
| `/shows` | Shows & Presenters |
| `/schedule` | Weekly schedule grid |
| `/decades` | Music by Decades (60s → today) |
| `/about` | About & mission |
| `/contact` | Get in touch + song requests |

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the built site
```

## Editing content

Most copy lives directly in the page components:

- **Presenters** — `src/components/pages/ShowsPage.tsx`
- **Schedule** — `src/components/ScheduleGrid.tsx`
- **Now Playing / On Air strip** — `src/components/NowPlayingStrip.tsx` (static placeholder; live metadata is a future enhancement)
- **Shared site data** (stream URL, email, socials, nav) — `src/utils/site.ts`
- **Logo** — drop a `logo.png` into `public/images/` and it replaces the wordmark automatically

Placeholders awaiting real content are marked with `{{TOKEN}}` braces.

## Tech notes

- Base path is `/decadesfm` (configured in `astro.config.mjs`). Internal links **must** use `withBase()` from `src/utils/url.ts`.
- Deploys automatically to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.
