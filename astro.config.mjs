import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://nando-port.vercel.app/",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://nando-port.vercel.app/sitemap-index.xml",
        "https://nando-port.vercel.app/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  output: "static",
});
