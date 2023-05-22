import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";

import PWAConfig from "./vite.config.pwa";
import polyfills from "./vite.config.polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  ...polyfills,
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [PWAConfig(), imagetools(), react()],
});
