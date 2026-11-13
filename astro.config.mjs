// @ts-check

import { execSync } from "node:child_process"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://vialive.app",
  trailingSlash: "always",
  // English pages live at the root (/currency-converter/), Korean ones under /ko/.
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", ko: "ko" } },
      // ponytail: one site-wide date (last commit), not per page; use per-file git dates if it matters.
      lastmod: new Date(execSync("git log -1 --format=%cI").toString().trim()),
    }),
  ],
})
