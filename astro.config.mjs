import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://conorkelley.me",
  base: "/",
  output: "server",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [svelte()],
});
