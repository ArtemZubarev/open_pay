// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image", "nuxt-toast"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      {
        name: "Poppins",
        provider: "google",
        weights: [300, 400, 500, 600],
      },
    ],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  css: ["~/assets/css/main.css"],
});
