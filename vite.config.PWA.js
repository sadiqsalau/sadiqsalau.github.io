export default (env) => ({
  scope: "./",
  workbox: {
    globPatterns: ["**/[!_]*"],
    globIgnores: ["**/screenshot-*.*", "**/*.pdf"],
    navigateFallbackAllowlist: [/^\/$/],
  },
  manifest: {
    name: env.VITE_PWA_MANIFEST_NAME,
    short_name: env.VITE_PWA_MANIFEST_SHORT_NAME,
    description: env.VITE_PWA_MANIFEST_DESCRIPTION,
    theme_color: env.VITE_PWA_MANIFEST_THEME_COLOR,
    background_color: env.VITE_PWA_MANIFEST_BACKGROUND_COLOR,
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
