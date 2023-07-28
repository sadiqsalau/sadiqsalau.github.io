export default (env) => ({
  scope: "./",
  workbox: {
    globPatterns: ["**/[!_]*"],
    globIgnores: ["**/screenshot-*.*", "**/*.pdf"],
    navigateFallbackAllowlist: [/^\/$/],
  },
  manifest: {
    name: "Sadiq Salau",
    short_name: "Sadiq Salau",
    description: "Full-Stack Web Developer",
    theme_color: "#292524",
    background_color: "#292524",
    start_url: "./",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
});
