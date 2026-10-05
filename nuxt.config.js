// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    // Options
  },
  app: {
    head: {
      title: "Louth Bin Schedule",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Louth Bin Schedule - Sorry if its wrong.",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
});
