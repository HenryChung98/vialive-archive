import type { APIRoute } from "astro"
import { getAbsoluteLocaleUrl } from "astro:i18n"
import { locales, ui } from "@/i18n/ui"

// llms.txt for AI search engines: what the site is, plus every app and its support/privacy pages in both languages.
export const GET: APIRoute = () => {
  const sections = locales.map((l) => {
    const t = ui[l]
    const apps = t.apps.map((app) => {
      const url = (page = "") => getAbsoluteLocaleUrl(l, `${app.slug}/${page}`)
      return [
        `- [${app.name}](${url()}): ${app.description}`,
        `  - [${t.support}](${url("support")}), [${t.privacy}](${url("policy")}), [App Store](${app.appStore})`,
      ].join("\n")
    })
    return `## ${l === "en" ? "English" : "한국어"}\n\n${apps.join("\n")}`
  })

  const body = `# Vialive\n\n> ${ui.en.tagline}\n\n${sections.join("\n\n")}\n`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
