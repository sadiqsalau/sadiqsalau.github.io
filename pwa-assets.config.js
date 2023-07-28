import { defineConfig } from "@vite-pwa/assets-generator/config";
import { loadEnv } from "vite";

const env = loadEnv(null, process.cwd());

export default defineConfig({
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [[64, "favicon.ico"]],
    },
    maskable: {
      sizes: [512],
      resizeOptions: {
        background: env.VITE_PWA_MANIFEST_BACKGROUND_COLOR,
      },
    },
    apple: {
      sizes: [180],
      resizeOptions: {
        background: env.VITE_PWA_MANIFEST_BACKGROUND_COLOR,
      },
    },
  },
  images: ["public/logo.png"],
});
