import { VitePWA } from "vite-plugin-pwa";

export default function PWAConfig() {
  return VitePWA({
    scope: "./",
    includeAssets: ["favicon.ico", "apple-touch-icon.png"],
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
          src: "icon@192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon@512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icon@512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  });
}
