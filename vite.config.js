import react from "@vitejs/plugin-react-swc";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { loadEnv } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": resolve("src"),
        "~@fontsource": "@fontsource",
      },
    },
    plugins: [
      react(),
      imagetools(),
      ViteEjsPlugin(env),
      VitePWA({
        selfDestroying: true,
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
      }),
    ],
  };
});
