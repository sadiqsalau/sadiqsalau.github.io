import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      scope: "./",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      workbox: {
        globPatterns: ["**/[!_]*"],
        navigateFallbackAllowlist: [],
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
        ],
      },
    }),
    imagetools(),
    react(),
  ],
});
