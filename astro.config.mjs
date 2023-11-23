import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://zenDev-2.github.io",
  base: "/",
  output: "server",
  adapter: vercel()
});