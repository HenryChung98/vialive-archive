# vialive

Privacy policies and support pages for my apps, served at <https://vialive.app>.
Built with [Astro](https://astro.build) and [shadcn/ui](https://ui.shadcn.com).

| URL | Source |
| --- | --- |
| `/` | `src/pages/[...locale]/index.astro` — home, one card per app |
| `/<app>/` | `src/pages/[...locale]/[app]/index.astro` — App Store, policy and support buttons |
| `/<app>/policy/`, `/<app>/support/` | `src/content/docs/<app>/*.md`, rendered with `src/layouts/doc.astro` (search, sidebar, on-this-page card) |
| `/ko/...` | Korean version of every page above; docs live in `src/content/docs/ko/` |
| `/app-ads.txt` | `public/app-ads.txt` — AdMob verification, do not move or rename |
| — | `wrangler.toml` — Cloudflare hosting; its `routes` entry is the custom domain, keep in sync with `site` in `astro.config.mjs` |

App names, descriptions, App Store links and UI text live in `src/i18n/ui.ts`.

**Edit app docs in `vialive-apps`, not here.** Each app's pages and its `apps` entry in `src/i18n/ui.ts` are written in `vialive-apps` (`Apps/<App>/Website/`), checked against the app's code, and copied here by its `/docs-publish` command. Changes made here are overwritten on the next publish.

## Adding a new app

In `vialive-apps`, run `/docs-sync <app>` to write the app's pages and entry, then `/docs-publish <app>` to copy them here. The copy:

1. Adds the app to `apps` for both locales in `src/i18n/ui.ts`, and puts its App Store icon at `src/assets/apps/<app>-icon.png`: the square 1024px original, not pre-rounded. Its home card and overview page appear automatically, with the icon clipped to the App Store shape.
2. Adds its docs, `src/content/docs/<app>/policy.md` and `support.md`, and the Korean versions under `src/content/docs/ko/<app>/`:

   ```yaml
   ---
   title: My App Privacy Policy   # the <h1> and browser tab title
   description: One line for search engines and link previews.
   order: 2                       # position in the sidebar (support is 1, policy is 2)
   label: Privacy Policy          # sidebar link text (defaults to title)
   ---
   ```

The sidebar, search index, sitemap and hreflang links pick up new pages on their own.

`support.md` is special: it gets a contact card on top, and each `### question` becomes an accordion item. Keep the questions as the last section of the page.

## Languages

English is the default and lives at the root; Korean lives under `/ko/`. Locales are set in
`i18n` in `astro.config.mjs` and in `src/i18n/ui.ts`.

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server at `localhost:4321` |
| `pnpm build` | Build the site to `./dist/` and index it for search with Pagefind |
| `pnpm preview` | Preview the build locally (search only works here, not in `pnpm dev`) |

## Deployment

The site is served by Cloudflare as a Worker with static assets (`vialive-site`, configured in `wrangler.toml`). `.github/workflows/deploy.yml` builds it and runs `wrangler deploy` on every push to `main`; it can also be run by hand from the Actions tab. To deploy from your machine instead, log in once with `pnpm exec wrangler login` and run `pnpm run deploy`.

`wrangler.toml` also attaches the custom domain `vialive.app`: Cloudflare creates its DNS record and certificate, so there is nothing to set at the registrar.

One-time setup:

1. In Cloudflare, create an API token from the *Edit Cloudflare Workers* template, limited to this account and the `vialive.app` zone, with **Zone → DNS → Edit** added so the deploy can manage the custom domain's record.
2. In this repository's **Settings → Secrets and variables → Actions**, add `CLOUDFLARE_API_TOKEN` (the token) and `CLOUDFLARE_ACCOUNT_ID` (shown on the Cloudflare dashboard's account home).

To check a build the way Cloudflare serves it (trailing-slash redirects, the 404 page), run `pnpm build && pnpm exec wrangler dev`.
