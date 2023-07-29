import react from "@vitejs/plugin-react-swc";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { loadEnv } from "vite";
import { resolve } from "path";

import viteConfigPWA from "./vite.config.PWA";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [
      react(),
      imagetools(),
      ViteEjsPlugin(env),
      VitePWA(viteConfigPWA(env)),
    ],
  };
});
